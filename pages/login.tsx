function Login() {
  return (
    <main>
      <section className="nt-bg bg-no-repeat bg-[length:100%_100%] h-[100vh]">
        <div className="flex justify-between pt-7">
          <p className="text-red-600  lg:font-extrabold lg:text-5xl text-[20px] font-[600] ml-10">
            NETFLIX
          </p>
        </div>
        <form className="bg-[rgba(0,0,0,.75)] w-[450px] h-[660px] block mx-auto pt-10">
          <span className="text-[32px] font-[500] ml-16 mb-[28px] block">
            Sign In
          </span>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="block w-[314px] h-[50px] rounded mx-auto pl-2 bg-[#333]"
          />
          <input
            type="text"
            placeholder="Password"
            className="block mt-3 w-[314px] h-[50px] rounded mx-auto pl-2 bg-[#333]"
          />
        </form>
      </section>
    </main>
  );
}

export default Login;
