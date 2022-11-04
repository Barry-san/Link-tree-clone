import { useForm } from "react-hook-form";

type FormValues = {
  LinkName: string;
  Message: string;
  Link: string;
};

function Addlinks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const handler = (data: FormValues) => {
    console.log(data);
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
        <input
          className="text-black px-4"
          type="text"
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
        className="bg-white text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-full"
        type="submit"
      >
        Add Link
      </button>
    </form>
  );
}

export default Addlinks;
