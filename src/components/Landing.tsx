import { useNavigate} from "react-router-dom";


function Landing() {
  const navigate = useNavigate();
    return (
<div className="flex flex-col gap-8 items-center justify-center animate-loadup">
 <h1 className='text-red-400 text-5xl font-bold text-center pointer-events-none '>All your links, in one place.</h1>
      <button
       className="py-4 px-8 text-3xl bg-orange-50 rounded-full text-red-500 font-semibold hover:bg-red-400 hover:text-red-50 transition-all"
       onClick={()=>navigate('/register')}
       >
        Get started
        </button>
      </div>
      );
}

export default Landing;