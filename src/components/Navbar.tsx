import { Link } from "react-router-dom";
import {signOut} from "firebase/auth"
import { auth } from "../config/fconfig";
type UserProp={
    user: string
}
function Navbar(props: UserProp) {

    return (  
        <div className="flex items-center justify-between px-4 py-4  bg-slate-800 w-full top-0 sticky text-2xl">
            <Link to="/" className="text-red-400 text-center font-semibold">{'<a/>'}</Link>
            {
            props.user === "user"?
             <button
              onClick={()=>signOut(auth)}
              className="text-gray-300 hover:underline hover:text-red-400 transition-all"
              >
                Log out
            </button>
            :
            <Link to="/login" className="text-gray-300 hover:underline hover:text-red-400 transition-all"> 
            Log in
            </Link>
            }
        </div>
    
    );
}
export default Navbar;