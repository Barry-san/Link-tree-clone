import { useNavigate} from "react-router-dom";


function Landing() {
  const navigate = useNavigate();
    return (
      <>
      <div className="loader animate-startup absolute">
        <p className='text-red-400 text-8xl font-bold text-center pointer-events-none'>{`<a/>`}</p>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center animate-loadup">
       <h1 className='text-red-400 text-5xl font-bold text-center pointer-events-none '>All your links, in one place.</h1>
       <p className="text-gray-200 text-md text-center w-full p-4 md:max-w-xl">
        Anchor helps you organise your social links, as well as other links associated with you, in one place, making them easy to share.
       </p>
        <button
       className="py-4 px-8 text-3xl bg-orange-50 rounded-full text-red-500 font-semibold hover:bg-red-400 hover:text-red-50 transition-all"
       onClick={()=>navigate('/register')}
       >
        Get started
        </button>
      </div>
      </>
      );
}

export default Landing;