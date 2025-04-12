import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GreetScreen() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(["#title", "#undertitle", "#button", "#scrollBottom"], {
        y: 100,
        opacity: 0,
        stagger: 0.5,
      });

      gsap.from("#scrollDownArrow", {
        y: 10,
        yoyo: true,
        repeat: -1,
        duration: 1,
      });

      const section = document.querySelector(".greetScreen__container");
      const afterBg = document.querySelector(".afterBg");
      const scrollBottom = document.querySelector("#scrollBottom");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => "+=" + section.offsetHeight,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress > 0.5) {
              gsap.to(scrollBottom, {
                color: "#FF0034", 
                duration: 0.5,
              });
            } else {
              gsap.to(scrollBottom, {
                color: "#FE93A8", 
                duration: 0.5,
              });
            }
          },
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(afterBg, { xPercent: 0 }, { xPercent: -60 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-[100vh] py-[40px] relative greetScreen__container">
      <div className="comparisonSection">
        <div className="bg-[#FF0034] beforeBg w-full h-full absolute top-0 left-0 z-[-1]"></div>
        <div className="bg-[#0A0A0A] afterBg w-full h-full absolute top-0 right-0 z-[-1]"></div>
      </div>
      <div className="greetScreen flex flex-col justify-between w-full h-full z-10 text-white font-bold">
        <div></div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-5 items-start">
            <h1 id="title" className="text-6xl title leading-18 font-bold outfit">
              Web Design & Development <br /> That Works for You.
            </h1>
            <button
              id="button"
              className="border-2 button rounded-full py-[15px] px-[40px] dm-sans"
            >
              LEAVE A REQUEST
            </button>
          </div>
          <p
            id="undertitle"
            className="w-100 undertitle text-2xl leading-12 font-medium text-[#C7C7C7] dm-sans"
          >
            From design to deployment – we handle everything so you can focus on what you do best.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-[65px] h-[65px] bg-[#eee] rounded-full flex items-center justify-center">
            <svg
              id="scrollDownArrow"
              width="6.661133"
              height="18.701965"
              viewBox="0 0 6.66113 18.702"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Стрелка 1"
                d="M2.83 16.99L2.83 0L3.83 0L3.83 16.99L5.8 15.01C6 14.82 6.31 14.82 6.51 15.01C6.71 15.21 6.71 15.52 6.51 15.72L3.68 18.55C3.48 18.75 3.17 18.75 2.97 18.55L0.14 15.72C-0.05 15.52 -0.05 15.21 0.14 15.01C0.34 14.82 0.65 14.82 0.85 15.01L2.83 16.99Z"
                fill="#FF0034"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <span id="scrollBottom" className="text-[#FE93A8] text-2xl font-medium">
            SCROLL DOWN
          </span>
        </div>
      </div>
    </div>
  );
}
