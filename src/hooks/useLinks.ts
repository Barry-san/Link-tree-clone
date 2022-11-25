import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/fconfig";

export function useLinks(username: string) {
  const docref = doc(db, "usernames", username, "links");
  const linky = getDoc(docref);
  return linky;
}
