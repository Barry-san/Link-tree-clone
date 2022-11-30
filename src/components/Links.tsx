import { useLinks } from "../hooks/useLinks";

function Links() {
  const items = useLinks("barry");
  console.log(items);
  return (
    <div>
      <p>this is the links page</p>
    </div>
  );
}

export default Links;
