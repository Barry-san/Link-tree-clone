import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-col gap-8 max-w-full justify-evenly min-h-full py-8 md:w-3/5 transit">
      <div className="grid grid-flow-row gap-6 text-gray-300 text-center text-xl md:text-2xl lg:text-2xl ">
        <h2 className="text-5xl text-red-400 font-semibold text-center">
          Welcome to Anchor
        </h2>
        <p>we help organise all links related to you, in one spot.</p>
      </div>
      <div className="w-full flex min-h-full flex-col justify-between border">
        <div className="flex justify-between items-center">
          <Link
            to="mylinks"
            className="border text-red-400 px-4 py-2 flex-1 text-lg text-center hover:text-white hover:underline"
          >
            My links
          </Link>

          <Link
            to="addlinks"
            className="border text-red-400 px-4 py-2 flex-1 text-lg text-center hover:text-white hover:underline"
          >
            Add links
          </Link>
        </div>
        <div className="border min-h-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
