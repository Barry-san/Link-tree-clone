function About() {
  return (
    <div className="grid grid-flow-row gap-8 min-h-full md:min-w-3/5  text-gray-300  p-6">
      <p className="text-red-400 text-8xl font-bold text-center pointer-events-none">
        {"<a/>"}
      </p>
      <div className="border flex flex-col p-4 gap-8 justify-center items-center">
        <h2 className="text-3xl text-red-400 font-bold">What is Anchor?</h2>
        <p className="text-lg text-left">
          In today's world, we all have a mirage of links attached to our names.
          <br></br>
          Email address, Twitter handle, Facebook page, Github link, Portfolio,
          etc.
          <br />
          Wouldn't it be nice if there were a way to share all of this without
          spamming multiple links? <br />
          We've got you covered.
        </p>
      </div>
      <div className="border flex flex-col gap-8 p-4 justify-center items-center">
        <h2 className="text-3xl text-red-400 font-bold">
          How does Anchor work?
        </h2>
        <p className="text-lg text-left max-w-2xl">
          Anchor collects your links, all with custom messages and compiles them
          in one page, giving you just one link to for all your links. You just
          share the website followed by a slash and @ and your username. e.g{" "}
          <span className="text-red-400 pointer-events-none">
            anchor.lyart/@yourusername
          </span>
          .
          <br />
          <span className="text-red-400">
            (ps: think{" "}
            <a href="https://linktr.ee" target={"_blank"}>
              link.tree
            </a>
            )
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
