function Home(): JSX.Element {
  return (
    <main>
      <section className="nt-bg">
        <div className="flex justify-between pt-7">
          <p className="text-red-600 text-5xl font-extrabold ml-10">NETFLIX</p>
          <button className="bg-red-600 text-white w-20 rounded h-9 px-2 float-right mr-8">
            Sign in
          </button>
        </div>
        <div className="block hero">
          <p className="hero-t block text-center">
            Unlimited movies, TV shows, and more.
          </p>
          <p className="text-center block watch">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="ready text-center pt-5 pb-10 font-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex email">
            <input
              type="text"
              className="block w-[530px] h-[70px] pl-2 border"
              placeholder="Email address"
            />
            <button className="block bg-red-600 px-2 w-[244px] hover:bg-[#f40612] btn">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
