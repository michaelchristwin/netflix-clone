import Faqs from "@/components/Faqs";
import Image from "next/image";
import AllFaqs from "@/components/faqs";
import { useState } from "react";

function Home(): JSX.Element {
  const TheFaqs = AllFaqs.map((items) => {
    return (
      <Faqs
        question={items.question}
        answer={items.answer}
        key={items.id}
        id={items.id}
      />
    );
  });
  return (
    <main className=" overflow-x-hidden">
      <section className="nt-bg bg-no-repeat bg-[length:100%_780px] lg:h-[680px] h-[472px]">
        <div className="flex justify-between pt-7">
          <p className="text-red-600  lg:font-extrabold lg:text-5xl text-[20px] font-[600] ml-10">
            NETFLIX
          </p>
          <button className="bg-red-600 text-white w-20 rounded h-9 px-2 float-right mr-8">
            Sign in
          </button>
        </div>
        <div className="block hero w-full">
          <p className="hero-t block text-center lg:mt-[150px] mt-[70px] lg:text-[4rem] text-[1.75rem] lg:font-[700] font-[600]">
            Unlimited movies, TV
          </p>
          <p className="hero-t block text-center mt-0 lg:text-[4rem] lg:font[700] text-[1.75rem] lg:font-[700] font-[600]">
            shows, and more.
          </p>
          <p className="text-center block mx-auto lg:text-[1.725rem] lg:mt-0 mt-[15px] font-[500] lg:max-w-[800px] max-w-[680px]">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="lg:text-center pt-5 pb-10 font-normal lg:text-[1.2rem] lg:w-full w-[345px] block mx-auto text-[18px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="block lg:flex lg:justify-center">
            <input
              type="text"
              className="block w-[73%] lg:w-[376px] h-[48px] lg:h-[56px] pl-2 border border-[#959494] bg-transparent mx-auto lg:ml-0 lg:mr-2 rounded"
              placeholder="Email address"
            />
            <button className="block bg-red-600 px-2 w-[152px] lg:w-[244px] hover:bg-[#f40612] btn text-[1.12rem] lg:text-[1.87rem] mx-auto lg:mx-0 mt-2 lg:mt-0 h-[48px] lg:h-[56px] rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="lg:flex block">
        <div className="lg:w-[548px] lg:ml-[15%] lg:my-40 w-[100%] ml-0 my-20">
          <p className="lg-text-[3.125rem] text-[2rem] font-[600] lg:text-left text-center">
            Enjoy on your TV.
          </p>
          <p className="text-[1.125rem] lg:text-[1.625rem] font-sans text-center lg:text-left">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="bg-[url('../components/img/tv.png')] lg:bg-cover h-[275px] lg:h-[355px] lg:w-[530.2px] w-[336px] mt-8  ml-7 bg-[length:100%_280px] mb-12">
          <video
            controls
            loop={true}
            autoPlay={true}
            className="mx-auto lg:w-[384px] w-[280px] lg:mt-0 -z-10 relative h-[275px] lg:h-[370px]"
          >
            <source src={"./demo.mp4"} type="video/mp4" className="" />
            <source src={"./demo.m4v"} type="video/m4v" className="" />
          </video>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="lg:flex lg:pb-5 pb-10">
        <div className="lg:block hidden bg-[url('../components/img/mobile.jpg')] lg:h-[378.717px] h-[252px] bg-cover w-[336px] lg:w-[504.967px] lg:ml-36 ml-0 mt-10 relative">
          <div className="flex lg:w-[330.167px] w-[264px] lg:h-[104px] h-[64px] rounded-[0.75em] border-[hsla(0,0%,100%,.25)] border-2 absolute top-60 left-20 bg-black">
            <Image
              src="/boxshot.png"
              alt="boxshot"
              width={57.15}
              height={83}
              className="lg:ml-4 ml-2 lg:h-[80px] lg:w-[57.15px]"
            />
            <div className="mt-0 lg:mt-6 ml-4">
              <p className="font-[700] font-sans lg:text-[1em] text-[0.8em] ">
                Stranger Things
              </p>
              <span className="text-[#0071eb]">Downloading...</span>
            </div>
            <Image
              src={"/downloading.gif"}
              alt="downloading"
              height={0}
              width={0}
              className="h-[48px] w-[50px] mt-2 lg:mt-6 ml-4 lg:ml-10"
            />
          </div>
        </div>
        <div className="ml-0 lg:ml-28 lg:mt-40 mt-10 w-[100%] lg:w-[547.033px] lg:text-left text-center">
          <p className="text-[1.7rem] lg:text-[3.125rem] font-[700] lg:text-left">
            Download your shows to watch offline.
          </p>
          <p className="text-[1.125rem] lg:text-[1.625rem] font-[400]">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
        {/* For mobile interface */}
        <div className="lg:hidden block bg-[url('../components/img/mobile.jpg')] lg:h-[378.717px] h-[252px] bg-cover w-[336px] lg:w-[504.967px] lg:ml-36 mx-auto mb-10 relative">
          <div className="flex lg:w-[330.167px] w-[264px] lg:h-[104px] h-[64px] rounded-[0.75em] border-[hsla(0,0%,100%,.25)] border-2 absolute top-60 left-10 bg-black">
            <Image
              src="/boxshot.png"
              alt="boxshot"
              width={57.15}
              height={83}
              className="lg:ml-4 ml-2 lg:h-[80px] lg:w-[57.15px]"
            />
            <div className="mt-0 lg:mt-6 ml-4">
              <p className="font-[700] font-sans lg:text-[1em] text-[0.8em] ">
                Stranger Things
              </p>
              <span className="text-[#0071eb]">Downloading...</span>
            </div>
            <Image
              src={"/downloading.gif"}
              alt="downloading"
              height={0}
              width={0}
              className="h-[48px] w-[50px] mt-2 lg:mt-6 ml-4 lg:ml-10"
            />
          </div>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <div>
        <div className="mx-auto lg:ml-[200px] my-[40px] lg:w-[547px] w-[100%]">
          <p className="lg:text-[3.125rem] text-[2rem] lg:font-[700] font-[600] text-center">
            Watch everywhere.
          </p>
          <p className="text-[1.225rem] lg:text-[1.625rem] font-[400] font-sans text-center">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="lg:flex block py-14 lg:ml-48 ml-0">
        <Image
          src={"/kids.png"}
          alt="Kids"
          width={504}
          height={378}
          className="lg:block hidden"
        />
        <div className="lg:w-[547px] w-[90%] mt-[100px] lg:ml-14 mx-auto">
          <p className="lg:text-[3.025rem] font-[600] text-[2rem] lg:text-left text-center">
            Create profiles for kids.
          </p>
          <p className="lg:text-[1.625rem] lg:text-left text-center text-[1.225rem] font-[400] font-sans">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <Image
          src={"/kids.png"}
          alt="Kids"
          width={504}
          height={378}
          className="lg:hidden block"
        />
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className=" bg-black py-14">
        <p className="lg:text-[3.025rem] text-[2rem] font-[600] text-center">
          Frequently Asked Questions
        </p>
        {TheFaqs}
      </section>
      <div className="mb-14">
        <p className="lg:text-center font-[400] lg:text-[1.25rem] lg:w-full w-[250px] text-center lg:mx-0 mx-auto">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="block lg:flex lg:justify-center mt-3">
          <input
            type="text"
            className="block w-[73%] lg:w-[376px] h-[48px] lg:h-[56px] border-[#959494] pl-2 border bg-transparent mx-auto lg:mr-2 lg:ml-0 rounded"
            placeholder="Email address"
          />
          <button className="block bg-red-600 px-2 w-[152px] lg:w-[244px] hover:bg-[#f40612] btn text-[1.12rem] lg:text-[1.87rem] mx-auto lg:mx-0 mt-2 lg:mt-0 h-[48px] lg:h-[56px] rounded">
            Get Started
          </button>
        </div>
      </div>
      <hr className="bg-[#222222] h-2 border-none" />
      <footer className="pt-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-full ml-3 text-gray-400">
          <ul>
            <li>Questions? Contact us</li>
            <li className="mt-4">FAQ</li>
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Gift Card Terms</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default Home;
