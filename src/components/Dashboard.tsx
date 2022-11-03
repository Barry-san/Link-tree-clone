
function Dashboard () {
    return (
        <div className="flex flex-col gap-4 h-full py-8 px-4 md:w-3/5  animate-loadup">
        <div className="grid grid-flow-row gap-4 text-gray-300 text-center text-xl md:text-2xl lg:text-2xl">
        <h2 className="text-5xl text-red-400 font-semibold text-center">
            Welcome to Anchor
        </h2>
        <p>
            we help organise all links related to you, in one spot.
        </p>
        </div>
        </div> 
    );
}
export default Dashboard;