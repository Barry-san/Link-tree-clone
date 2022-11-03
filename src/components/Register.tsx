import { useNavigate } from "react-router-dom";

function Register() {
    const navigate= useNavigate()
    return ( 
        <div className="Login">
            <form className="text-xl text-red-400 flex flex-col gap-3" >
                <div className=" flex flex-col p-4 gap-2 ">
                    <label >Email</label>
                    <input type="email" required className="py-1 px-3 text-black"/>
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <label >Username</label>
                    <input
                     type="text"
                     required
                     className="py-1 px-3 text-black"
                    />
                </div>
                <div className=" flex flex-col p-4 gap-2">
                    <label >Password</label>
                    <input 
                      type="password"
                      required
                      className="py-1 px-3 text-black"
                    />
                </div>
                <div className="flex gap-6 px-4 py-3 font-semibold">
                <button 
                type="submit"
                className="py-2 bg-red-400 text-white flex-1 rounded-md"
                >
                    Sign-up
                </button>
                <button
                 className="py-3 bg-white text-red-400 flex-1 rounded-md" 
                 onClick={()=>navigate('/login')}
                 >
                    Login
                </button>
                </div>
            </form>
        </div>
     );
}

export default Register;