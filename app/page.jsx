import Feed from "@components/Feed"

const Home = () => {
  return (
    <section>
      <div className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          Promtopia is open-souce AI Prompting tool for modern world to discover, create and share creative prompt with promptopia.
        </p>
      </div>

      <Feed />

    </section>
  )
}

export default Home