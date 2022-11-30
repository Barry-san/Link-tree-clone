import { useParams } from "react-router-dom";
import { useLinks } from "../hooks/useLinks";

function Profiles() {
  const { username } = useParams();
  useLinks("Barry");
  return (
    <div className="min-h-full flex flex-col items-center text-center gap-6">
      <p className="text-red-400 text-8xl font-bold text-center pointer-events-none">
        {"<a>"}
      </p>
      <p className="font-semibold text-gray-300 text-2xl md:text-3xl underline pointer-events-none">{`${username}'s links`}</p>
    </div>
  );
}
export default Profiles;
