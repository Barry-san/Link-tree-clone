import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../config/fconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

type formValues = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit = (data: formValues) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate("/"))
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("sign in with email and password failed.");
      });
  };

  return (
    <>
      <form
        className="flex flex-col text-red-400 text-xl transit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col p-4 gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            className="py-1 px-3 text-black"
          />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "password must be at least 6 characters",
              },
            })}
            id="password"
            className="py-1 px-3 text-black"
          />
        </div>
        <div className="flex gap-6 px-4 py-3 font-semibold">
          <button
            type="submit"
            className="py-2 bg-red-400 text-white flex-1 rounded-md"
            disabled={loading}
          >
            {loading ? "loading..." : "Log in"}
          </button>
          <button
            className="py-3 bg-white text-red-400 flex-1 rounded-md"
            onClick={() => navigate("/register")}
            disabled={loading}
          >
            Sign-up
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
