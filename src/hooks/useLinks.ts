import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../config/fconfig";

export function useLinks(username: string) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const docref = collection(db, "usernames", username, "links");
    getDocs(docref).then((data) => {
      setData(data.docs);
      setLoading(false);
    });
  }, []);
  return { data, loading };
}
