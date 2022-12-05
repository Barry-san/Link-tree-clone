import { useLinks } from "../hooks/useLinks";
import Loading from "./Loading";
import { useEffect } from "react";

function Links() {
  const items = useLinks("barry");
  useEffect(() => {});
  return (
    <div>
      {items.loading && <Loading />}
      {items.data && <div>Everything works perfectly</div>}
    </div>
  );
}

export default Links;
