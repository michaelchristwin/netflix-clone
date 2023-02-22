import Faqs from "@/components/Faqs";
import Image from "next/image";

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
          <video
            controls
            width="384"
            loop={true}
            autoPlay={true}
            className="mx-auto  mt-20 -z-10 relative"
          >
            <source src={"./demo.mp4"} type="video/mp4" className="" />
            <source src={"./demo.m4v"} type="video/m4v" className="" />
          </video>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="flex mb-5">
        <div className=" bg-[url('../components/img/mobile.jpg')] h-[378.717px] bg-cover w-[504.967px] ml-36 mt-10 relative">
          <div className="flex w-[330.167px] h-[104px] rounded-[0.75em] border-[hsla(0,0%,100%,.25)] border-2 absolute top-60 left-20 bg-black">
            <Image
              src="/boxshot.png"
              alt="boxshot"
              width={57.15}
              height={80}
              className="ml-4"
            />
            <div className="mt-6 ml-4">
              <p className="font-[700] font-sans text-[1em]">Stranger Things</p>
              <span className="text-[#0071eb]">Downloading...</span>
            </div>
            <Image
              src={"/downloading.gif"}
              alt="downloading"
              height={0}
              width={0}
              className="h-[48px] w-[50px] mt-6 ml-10"
            />
          </div>
        </div>
        <div className="ml-28 mt-40 w-[547.033px]">
          <p className="text-[3.125rem] font-[700]">
            Download your shows to watch offline.
          </p>
          <p className="text-[1.625rem] font-[400]">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <div>
        <div className="ml-[200px] my-[40px] w-[547px]">
          <p className="text-[3.125rem] font-[700]">Watch everywhere.</p>
          <p className="text-[1.625rem] font-[400] font-sans">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
      <hr className="bg-[#222222] h-2 border-none" />
      <section className="flex py-14 ml-48">
        <Image src={"/kids.png"} alt="Kids" width={504} height={378} />
        <div className="w-[547px] mt-[100px] ml-14">
          <p className="text-[3.025rem] font-[600]">
            Create profiles for kids.
          </p>
          <p className="text-[1.625rem] font-[400] font-sans">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </section>
      <hr className="bg-[#222222] h-2 border-none" />
      <Faqs />
    </main>
  );
}

export default Home;
