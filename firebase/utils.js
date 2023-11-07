import { collection, doc } from "@firebase/firestore";
import { db } from "./config.js";

export const collectionHelper = (col) => collection(db, col);
export const docHelper = (col, id) => doc(db, col, id);
