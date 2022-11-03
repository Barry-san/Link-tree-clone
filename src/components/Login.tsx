import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    return ( 
        <>
        <form className="flex flex-col text-red-400 text-xl">
            <div className="flex flex-col p-4 gap-2">
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                required
                id="email"
                className="py-1 px-3 text-black"
                 />
            </div>
            <div className="flex flex-col p-4 gap-2">
                <label htmlFor="Password">Password</label>
                <input 
                type="password"
                required
                id="password"
                className="py-1 px-3 text-black"
                 />
            </div>
             <div className="flex gap-6 px-4 py-3 font-semibold">
                <button
                 type="submit" 
                 className="py-2 bg-red-400 text-white flex-1 rounded-md"
                 >
                    Login
                </button>
                <button 
                className="py-3 bg-white text-red-400 flex-1 rounded-md"
                onClick={()=>navigate('/register')}
                >
                    Sign-up
                </button>
            </div>
        </form>
        </>
     );
}

export default Login;