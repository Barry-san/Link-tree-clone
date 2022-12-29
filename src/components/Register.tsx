import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/fconfig";
import { useState } from "react";
import { toast } from "react-hot-toast";

type formValues = {
  email: string;
  password: string;
  username: string;
};

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<formValues>();

  const onSubmit = async (data: formValues) => {
    setLoading(true);
    const ref = doc(db, "usernames", data.username);
    const snap = await getDoc(ref).catch((err) => {
      setLoading(false);
      alert("please check your internet connection and try again");
      return;
    });
    if (snap && snap.exists()) {
      toast.error("username is taken. Please try again", {
        duration: 1000,
      });
      setLoading(false);
    } else {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).catch((err) => {
        console.log(err);
        alert("create user with email and password failed.");
        setLoading(false);
      });

      await setDoc(doc(db, "users", `${data.email}`), {
        username: data.username,
      }).catch(() => {
        alert("add user to database failed");
        setLoading(false);
      });

      setDoc(
        doc(db, "usernames", `${data.username.toLowerCase()}`, "links", "lol"),
        {}
      )
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch(() => {
          alert("adding username to database failed");
          setLoading(false);
          navigate("/");
        });
    }
  };

  return (
    <div className="transit">
      <form
        className="text-xl text-red-400 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col p-4 gap-2 ">
          <label>Email</label>
          <input
            type="email"
            required
            {...register("email")}
            className="py-1 px-3 text-black"
          />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <label>Username</label>
          <input
            type="text"
            {...register("username")}
            // pattern={"([A-Z][a-z][0-9]_)w+"}
            required
            className="py-1 px-3 text-black"
          />
        </div>
        <div className=" flex flex-col p-4 gap-2">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            required
            className="py-1 px-3 text-black"
          />
        </div>
        <div className="flex gap-6 px-4 py-3 font-semibold justify-between">
          <button
            type="submit"
            className="py-2 bg-red-400 text-white flex-1 rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign-up"}
          </button>
          <button
            className="py-3 bg-white text-red-400 flex-1 rounded-md"
            onClick={() => navigate("/login")}
            disabled={loading}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
