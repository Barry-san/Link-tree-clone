import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/fconfig";
type UserProp = {
  user: string;
};
function Navbar(User: UserProp) {
  console.log(User.user);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-4 py-4 w-full top-0 fixed text-2xl z-50 ">
      <Link to="/" className="text-red-400 text-center font-semibold">
        {"<a/>"}
      </Link>
      {User.user ? (
        <button
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
          className="text-gray-300 hover:underline hover:text-red-400 transition-all"
        >
          Log out
        </button>
      ) : (
        <Link
          to="/about"
          className="text-gray-300 hover:underline hover:text-red-400 transition-all"
        >
          About
        </Link>
      )}
    </div>
  );
}
export default Navbar;
