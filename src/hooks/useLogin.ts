import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/fconfig";

export async function useLogin(email: string | null) {
  if (email === null) return;
  const docref = doc(db, "users", email);
  const snapshot = await getDoc(docref);
  return snapshot.data()?.username;
}
