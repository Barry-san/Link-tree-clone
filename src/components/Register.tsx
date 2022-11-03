import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { setDoc, doc } from "firebase/firestore";
import {auth, db} from '../config/fconfig'

type formValues = {
    email:string,
    password: string,
    username: string
}

function Register() {

    const navigate= useNavigate();
    const {register, handleSubmit} = useForm<formValues>()
    const onSubmit = (data:formValues) =>
    {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
            alert("something went wrong. please check your connection and try again")
        });
        setDoc(doc(db, 'users',`${data.email}`), {
            username: data.username
        }).then(res=>alert(`succesfully added ${data.email} to users`));
        setDoc(doc(db, 'usernames', `${data.username}`), {}).then(()=>navigate('/'))
    }


    return ( 
        <div className="transit">
            <form 
                className="text-xl text-red-400 flex flex-col gap-3"
                onSubmit={handleSubmit(onSubmit)}
                 >
                <div className=" flex flex-col p-4 gap-2 ">
                    <label >Email</label>
                    <input 
                    type="email" 
                    required 
                    {...register('email')}
                    className="py-1 px-3 text-black"/>
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <label >Username</label>
                    <input
                     type="text"
                     {...register("username")}
                     required
                     className="py-1 px-3 text-black"
                    />
                </div>
                <div className=" flex flex-col p-4 gap-2">
                    <label >Password</label>
                    <input 
                      type="password"
                      {...register("password")}
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