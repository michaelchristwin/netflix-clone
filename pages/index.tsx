function Home(): JSX.Element {
  return (
    <main>
      <section className="nt-bg">
        <div className="flex justify-between pt-7">
          <p className="text-red-700 text-5xl font-extrabold ml-10">NETFLIX</p>
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
        </div>
      </section>
    </main>
  );
}

export default Home;
