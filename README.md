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

- api/entity/Streams.ts: embedded posts.
- api/entity/User.ts: database schema.
- api/middleware/isAuth.ts: make sure the current session contains a logged in user.
- api/middleware/typegoose.ts: convert MongoDB Documents into readable objects.
- api/schema/object-id.scalar.ts: ObjectId scalar for our schema.
- api/types/Ref.ts: manual reference.
- api/types/MyContext.ts: used to infer the current user's session.
- api/resolvers/UserResolver.ts: used to infer the current user's session.

In order to design a relational database, we need to understand the connections between our models. Let's define an **Entity** Relationship Diagram, or ERD for our models:

![entity](_readme-img/model-entities.png)

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

## Dependancies

- [MATERIAL-UI](https://material-ui.com/): React components for faster and easier web development. Build your own design system, or start with Material Design.

`npm install @material-ui/core`

- [TypeGraphQL](https://typegraphql.com/docs/installation.html): TypeGraphQL is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic. .

`npm i typescript type-graphql graphql reflect-metadata`

`npm i --save-dev @types/node`

- [Typegoose](https://typegoose.github.io/typegoose/docs/guides/quick-start-guide): Define Mongoose models using TypeScript classes.

`npm i @typegoose/typegoose mongoose connect-mongo`

`npm install --save-dev @types/mongoose`

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for node..

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): An implementation of JSON Web Tokens.

`npm i express jsonwebtoken`

`npm i --save-dev @types/express @types/jsonwebtoken`

## Useful links

- [Strongly Typed Next.js](https://michaelstromer.nyc/books/strongly-typed-next-js/introduction)
- [MATERIAL-UI](https://material-ui.com/)
- [TypeGraphQL - Modern framework for GraphQL API in Node.js](https://typegraphql.com/)
- [typegoose - Define Mongoose models using TypeScript classes](https://typegoose.github.io/typegoose/)
- [GraphQL Server Basics: Demystifying the `info` Argument in GraphQL Resolvers](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)
- 
