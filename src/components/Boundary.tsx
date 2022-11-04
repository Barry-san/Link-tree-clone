function Boundary() {
    return ( 
        <div className="flex flex-col p-6 gap-6 min-h-1/2 justify-between">
            <p className="text-red-400 text-8xl font-bold text-center pointer-events-none">
                {'<a/>'}
            </p>
            <h1 className="text-gray-300 text-4xl max-w-full font-bold text-center pointer-events-none md:text-6xl">
                The Page you're looking for doesn't seem to exist...
            </h1>
        </div>
     );
}

export default Boundary;