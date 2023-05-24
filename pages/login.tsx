import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Head from "next/head";

export interface NewUser {
  email: string;
  passwordHash: string;
}
function Login() {
  const [user, setUser] = useState<NewUser>({
    email: "",
    passwordHash: "",
  });
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function onsubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/users/", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        setUser({
          email: "",
          passwordHash: "",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error");
      });
  }
  return (
    <main>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Page" />
        <meta name="robots" content="index, nofollow" />
      </Head>
      <section className="nt-bg bg-no-repeat lg:bg-[length:100%_100%] h-[100vh]">
        <div className="flex justify-between pt-7">
          <p className="text-red-600  lg:font-extrabold lg:text-5xl text-[20px] font-[600] ml-10">
            NETFLIX
          </p>
        </div>
        <form
          className="bg-[rgba(0,0,0,.75)] lg:w-[450px] w-[350] h-[660px] block mx-auto pt-10"
          onSubmit={onsubmit}
        >
          <span className="text-[32px] font-[500] ml-16 mb-[28px] block">
            Sign In
          </span>
          <input
            value={user.email}
            onChange={onchange}
            name="email"
            type="email"
            placeholder="Email or Phone number"
            className="block w-[314px] h-[50px] rounded mx-auto pl-2 bg-[#333]"
          />

          <input
            value={user.passwordHash}
            onChange={onchange}
            name="passwordHash"
            id="password"
            type="password"
            placeholder="Password"
            className="block mt-8 w-[314px] h-[50px] rounded mx-auto pl-2 bg-[#333] ring-blue-600 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-red-600 block w-[314px] h-[50px] rounded mx-auto mt-9 hover:bg-red-700"
          >
            Sign In
          </button>
          <div className="flex mx-auto justify-between mt-5 w-[314px]">
            <div className="flex w-fit">
              <input
                type="checkbox"
                className="block mr-1 accent-[#646464] h-[20px]"
              />
              <p className="text-[#979494]">Remember Me</p>
            </div>
            <p className="text-[#949090]">Need help?</p>
          </div>
          <div className="text-[#646464] w-[314px] mx-auto mt-16">
            New to Netflix?{" "}
            <span className="hover:underline text-white">Sign Up now.</span>
            <p className="text-[#949090] text-[13px]">
              This page is protected by Google reCAPTCHA to ensure you`re not a
              bot.
              <span className="text-blue-600 hover:underline"> Learn more</span>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
