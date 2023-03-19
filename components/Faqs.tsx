import { useState } from "react";
import { Faq } from "@/components/faqs";

function Faqs({ answer, question, id }: Faq) {
  const [show, SetShow] = useState<boolean>(false);
  function myShow() {
    return SetShow((prevShow) => {
      return !prevShow;
    });
  }

  const [open, setOpen] = useState<number>(0);

  const toggleOpen = (id: number) => {
    setOpen((prevState) => (prevState !== id ? 0 : id));
  };

  return (
    <div>
      <div
        className="lg:w-[865px] w-[90%] bg-[#303030] lg:h-[75px] h-[71px] mx-auto px-9 relative mt-2"
        onClick={() => {
          myShow();
          toggleOpen(id);
        }}
      >
        <p className="lg:text-[1.725rem] text-[1.2rem] font-[500] font-sans text-left block pt-5">
          {question}
        </p>
        <svg
          id="thin-x"
          viewBox="0 0 26 26"
          className={`svg-icon svg-icon-thin-x lg:h-[20px] lg:w-[20px] h-[16px] w-[16px] ${
            show ? "svg-open" : "svg-closed"
          }`}
          focusable="true"
        >
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </svg>
      </div>
      <div
        className={`w-[865px] bg-[#303030] py-3 mx-auto px-9 relative mt-1 text-[1.625rem] font-[400] ${
          show ? "block" : "hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}

export default Faqs;
