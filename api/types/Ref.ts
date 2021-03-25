/* Using manual references is the practice of including one document's ObjectId field in another document.*/

import { ObjectId } from "mongodb";

export type Ref<T> = T | ObjectId;