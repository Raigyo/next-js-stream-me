# Next JS - Full stack web application with Next.js, TypeScript and GraphQL

March 2021

> 🔨  From udemy: [Strongly Typed Next.js - Michael Stromer](https://www.udemy.com/course/strongly-typed-next-js/)

* * *


![logo](_readme-img/nextjs.png)

Next.js offers some serious performance improvements over the standard React web application. Here we will be using Next.js for:


- [Routing Pages](https://nextjs.org/docs/routing/introduction)
- [Data fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [Typescript Support](https://nextjs.org/docs/basic-features/typescript)

## Section 1: Next.js

1. Create a Next.js web application with TypeScript
2. Include custom fonts and styles in our web app
3. Link pages using Next.js routing

- app/pages/index.tsx: homepage for our website.
- app/pages/about.tsx: page about.
- app/pages/_app.tsx: handles global page props.
- app/pages/_document.tsx: handles global styles.
- app/lib/theme.ts: custom light/dark modes theme.

## Section 2: TypeGraphQL

1. Create a GraphQL API schema with TypeGraphQL
2. Create a UserResolver for fetching user data

- api/entity/Stream.ts: embedded posts.
- api/entity/User.ts: database schema.
- api/middleware/isAuth.ts: make sure the current session contains a logged in user.
- api/middleware/typegoose.ts: convert MongoDB Documents into readable objects.
- api/schema/object-id.scalar.ts: ObjectId scalar for our schema.
- api/types/Ref.ts: manual reference.
- api/types/MyContext.ts: used to infer the current user's session.
- api/resolvers/UserResolver.ts: used to infer the current user's session.

In order to design a relational database, we need to understand the connections between our models. Let's define an **Entity** Relationship Diagram, or ERD for our models:

![entity](_readme-img/model-entities.png)

A **document schema** is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. You can use a schema to require a specific set of fields, configure the content of a field, or to validate changes to a document based on its beginning and ending states.

**Models** are fancy constructors compiled from Schema definitions. An instance of a model is called a **document**. Models are responsible for creating and reading documents from the underlying MongoDB database.

**Method Decorator**: A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated class.

**Ref Type**: A Ref is considered to be a manual reference. A manual references is where you save the ObjectId field of one document in another document as a reference. Then your application can run a second query to return the related data.

**Streams**: Streams are considered to be embedded posts. We reference the User entity with our Ref type, and assign them as the stream's author.

The **GraphQLScalarType** code handles parsing objects as strings, and serializing them as hex strings. This is useful for converting ObjectId properties into string values.

In summary ObjectID("adaj130jfsdm10") becomes a text string: adaj130jfsdm10, and vice versa.

**Typegoose Middleware**: we convert MongoDB Documents into readable objects. Without this middleware, our Ref types would not be able to reference other database objects.

A **resolver** is a function that's responsible for populating the data for a single field in your schema. Whenever a client queries for a particular field, the resolver for that field fetches the requested data from the appropriate data source.

A resolver function returns one of the following:

- Data of the type required by the resolver's corresponding schema field (string, integer, object, etc.)
- A promise that fulfills with data of the required type

## Section 3: Typegoose

1. Create authentication and stream resolvers
2. Create password manager for authentication

![entity](_readme-img/db.png)

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks, and even Typescript.

Take Mongoose, add TypGraphQL and you get Typegoose. Typegoose is a wrapper library for easily writing MongoDB models with TypeScript. It allows us to easily apply Mongoose schemas and models in TypeScript.

Typegoose will create the correct schemas and model mappings for our database. In getting started, it is important to realize that the decision to use Typegoose is based on using MongoDB. Given another database driver, you may want to consider using an Object Relational Mapping like TypeORM.

- api/types/AuthInput.ts: input type to handle sending the data values (email + pw)
- api/types/UserResponse.ts: returns a User object and JWT string
- api/types/StreamInput.ts: stream with inputs for user
- api/resolvers/AuthResolver.ts: Given an email address, check if a user already exists.
If not, create a new user with a hashed password value
Finally, assign and return the new user's JSON Web Token.
- api/resolvers/StreamResolver.ts: we can query for single and multiple streams. We can create new streams, given a user is logged in and has a valid session userId.


**Mutation queries** modify data in the data store and returns a value. It can be used to insert, update, or delete data. Mutations are defined as a part of the schema.

**`Partial<Type>`** Not all the of properties `<Type>` are required. (>< `Required<Type`>).

## Section 4: Apollo Server

1. Create a GraphQL API server with Apollo Server Express
2. Create a MongoDB database connection with Connect Mongo
3. Create environment variables for your localhost server

Note: database cluster is hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

**Apollo Server Express** allows us to build a GraphQL query interface on top of an existing Express server.

- api/schema/index.ts: Add all typescript resolvers into the schema from the ../resolvers directory.
Apply typegoose middleware to allow GraphQL work with MongoDB Documents.
Apply the scalars map to parse ObjectId properties into string values.
- api/server: Apollo Server Express runs the server
- api/server/env.ts: Using the dotenv library, we are able to determine if a valid .env file is present and log all it's respective values.
- api/server/index.ts: ApolloServer is initialized with an Express server.
- api/session: Mongoose creates the server sessions
-  api/session/index.ts: we initialize a MongoDB connection. If any errors are thrown, they will be handled by the server at runtime.


## Dependancies

- [MATERIAL-UI](https://material-ui.com/): React components for faster and easier web development. Build your own design system, or start with Material Design.

`npm install @material-ui/core`

- [TypeGraphQL](https://typegraphql.com/docs/installation.html): TypeGraphQL is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic. .

`npm i typescript type-graphql graphql reflect-metadata`

`npm i -D @types/node`

- [Typegoose](https://typegoose.github.io/typegoose/docs/guides/quick-start-guide): Define Mongoose models using TypeScript classes.

`npm i @typegoose/typegoose mongoose connect-mongo`

`npm i -D @types/mongoose`

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for node..

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): An implementation of JSON Web Tokens.

`npm i express jsonwebtoken`

`npm i -D @types/express @types/jsonwebtoken`

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser..

`npm i bcryptjs`

`npm i -D @types/bcryptjs`

- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express): This is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server frameworks.

`npm i apollo-server-express cors ts-node`

- [nodemon](https://www.npmjs.com/package/nodemon): nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

`npm i -D nodemon`

- [dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

`npm i dotenv`

`npm install -D @types/dotenv`

Test: `npx ts-node server/env.ts`

## Useful links

- [Strongly Typed Next.js](https://michaelstromer.nyc/books/strongly-typed-next-js/introduction)
- [MATERIAL-UI](https://material-ui.com/)
- [TypeGraphQL - Modern framework for GraphQL API in Node.js](https://typegraphql.com/)
- [typegoose - Define Mongoose models using TypeScript classes](https://typegoose.github.io/typegoose/)
- [GraphQL Server Basics: Demystifying the `info` Argument in GraphQL Resolvers](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose Schemas](https://mongoosejs.com/docs/guide.html)
- [Faster Mongoose Queries With Lean](https://mongoosejs.com/docs/tutorials/lean.html)
- [GraphQL Queries and Mutations](https://graphql.org/learn/queries/)
