function Home(): JSX.Element {
  return (
    <main className=" overflow-x-hidden">
      <section className="nt-bg">
        <div className="flex justify-between pt-7">
          <p className="text-red-600 text-5xl font-extrabold ml-10">NETFLIX</p>
          <button className="bg-red-600 text-white w-20 rounded h-9 px-2 float-right mr-8">
            Sign in
          </button>
        </div>
        <div className="block hero w-full">
          <p className="hero-t block text-center">Unlimited movies, TV</p>
          <p className="hero-t block text-center mt-0">shows, and more.</p>
          <p className="text-center block watch mx-auto">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="ready text-center pt-5 pb-10 font-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center">
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
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="flex">
        <div className="w-[548px] ml-[15%] my-40">
          <p className="text-[3.125rem] font-[600]">Enjoy on your TV.</p>
          <p className="text-[1.625rem] font-sans">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="bg-[url('../components/img/tv.png')] bg-cover h-[398px] w-[530.2px] mt-8 ml-7">
          <video src=""></video>
        </div>
      </section>
    </main>
  );
}

export default Home;
