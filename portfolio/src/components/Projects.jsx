import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects", 
          start: "center center",
          end: "bottom bottom", 
          scrub: 1, 
        },
      });

      tl.from("#recent1", { y: 100, duration: 1 })
        .from("#projects", { y: -100, duration: 1, delay: 0.5 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-[100vh] py-[10%] projects">
      <div className="">
        <div className="flex justify-start mb-4 w-full bg-[#0a0a0a]">
          <span id="recent1" className="text-6xl text-white font-bold">
            RECENT
          </span>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
        <div className="flex justify-end mt-4 w-full bg-[#0a0a0a]">
          <span id="projects" className="text-6xl text-white font-bold">
            PROJECTS
          </span>
        </div>
      </div>
    </div>
  );
}
