import { useForm } from "react-hook-form";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/fconfig";

type FormValues = {
  LinkName: string;
  Message: string;
  Link: string;
};

type username = {
  user: string;
};

function Addlinks(user: username) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const handler = async (data: FormValues) => {
    console.log(data);

    await setDoc(
      doc(db, "usernames", user.user, "links", data.LinkName),
      new Object({
        message: data.Message,
        link: data.Link,
      })
    );
    reset();
  };

  return (
    <form
      className="flex flex-col p-6 gap-6 items-center text-red-400"
      onSubmit={handleSubmit(handler)}
    >
      <div className=" flex flex-col  text-xl gap-2 ">
        <label htmlFor="Link-name">Link name</label>
        <input
          className="text-black px-4"
          type="text"
          id="Link-name"
          placeholder="e.g twitter, instagram, github..."
          {...register("LinkName", {
            required: { value: true, message: "this field is required" },
            minLength: { value: 1, message: "please enter a linkname" },
          })}
        />
      </div>
      <div className=" flex flex-col text-xl gap-2 ">
        <label htmlFor="Message">Message</label>
        <textarea
          className="text-black px-4"
          id="Message"
          placeholder="e.g this is my twitter..."
          {...register("Message", {
            required: { value: true, message: "this field is required" },
            maxLength: {
              value: 50,
              message: "message must be 50 characters or less",
            },
            minLength: { value: 1, message: "please enter a message" },
          })}
        />
      </div>
      <div className=" flex flex-col  text-xl gap-2 ">
        <label htmlFor="Link">Link</label>
        <input
          className="text-black px-4"
          type="text"
          id="Link"
          placeholder="e.g https://yourlink.com"
          {...register("Link", {
            required: { value: true, message: "this field is required" },
            minLength: { value: 4, message: "please enter a link" },
          })}
        />
      </div>
      <button
        className="bg-white text-red-500 hover:text-white hover:bg-red-400 px-4 py-2 rounded-full"
        type="submit"
      >
        Add Link
      </button>
    </form>
  );
}

export default Addlinks;
