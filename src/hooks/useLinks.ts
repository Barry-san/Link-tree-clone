import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/fconfig";

export async function useLinks(username: string) {
  const docref = collection(db, "usernames", username, "links");
  const linky = await getDocs(docref);
  const result: any = [];
  linky.forEach((link) => {
    result.push(link.data());
  });
  console.log(result);
  return result;
}
