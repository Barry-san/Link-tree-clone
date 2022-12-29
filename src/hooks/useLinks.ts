import {
  getDocs,
  collection,
  QuerySnapshot,
  DocumentData,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../config/fconfig";

export function useLinks(username: string | undefined) {
  if (username === undefined) {
    return { data: [], loading: false };
  }

  let data: any = "";
  const [Data, setData] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docref = collection(db, "usernames", username, "links");
    getDocs(docref).then((response) => {
      setData(response.docs);
      setLoading(false);
    });
  }, []);

  return { Data, loading };
}
