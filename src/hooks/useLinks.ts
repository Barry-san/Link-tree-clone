import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/fconfig";

export function useLinks(username: string) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const docref = collection(db, "usernames", username, "links");
  try {
    getDocs(docref).then((data) => {
      setData(data);
      setLoading(false);
    });
  } catch (err: any) {
    setError(err);
    setLoading(false);
    console.log("this is the error ", error);
  }

  return { data, loading, error };
}
