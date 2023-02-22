import { useState } from "react";

function Faqs() {
  const [show, SetShow] = useState<boolean>(false);
  return (
    <main className=" bg-black py-14">
      <p className="text-[3.025rem] font-[600] text-center">
        Frequently Asked Questions
      </p>
      <section>
        <div className="w-[865px] bg-[#303030] h-[75px] mx-auto px-9 relative">
          <p className="text-[1.725rem] font-[500] font-sans text-left block pt-5">
            What is Netflix?
          </p>
          <svg
            id="thin-x"
            viewBox="0 0 26 26"
            className="svg-icon svg-icon-thin-x svg-closed"
            focusable="true"
          >
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
          </svg>
        </div>
        <div className="w-[865px] bg-[#303030] py-3 mx-auto px-9 relative mt-1">
          {show}
        </div>
      </section>
    </main>
  );
}

export default Faqs;
