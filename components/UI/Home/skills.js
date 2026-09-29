import {
  TransitionFromRight,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionParent,
  TransitionParentFast,
} from "@/lib/utils/transitions";
import Link from "next/link";
import skills from "@/lib/store/skills";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "+=200",
          scrub: 1,
        },
      });

      tl2.from("#summary_text", { xPercent: -100, opacity: 0 });
    }, ref);

    return () => cxt.revert();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-black" id="stats">
      <section className="relative min-h-[50rem]" id="about" ref={ref}>
        <h3
          className="absolute md:-top-[15rem] top-8 z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
          id="summary_text"
        >
          Persona.
        </h3>

        <div className="pb-10 pt-[12rem]">
          <div className="container min-h-[20rem] space-y-28">
            <div className="space-y-10">
              <div>
                <TransitionOpacityInView addClass="text-4xl mb-2 font-bold">
                  <p>Design Skills</p>
                </TransitionOpacityInView>

                <TransitionParentFast addClass="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 select-none text-center gap-4">
                  {skills.design.map((skill, idx) => (
                    <TransitionOpacity key={idx}>
                      <div className="py-5 space-y-1 duration-200 border rounded-md cursor-pointer border-primary/10 hover:bg-primary/10">
                        <div className="grid place-content-center">{skill.icon}</div> <p>{skill.label}</p>
                      </div>
                    </TransitionOpacity>
                  ))}
                </TransitionParentFast>
              </div>

              <div>
                <TransitionOpacityInView addClass="text-2xl mb-2 font-bold opacity-80">
                  <p>Also Building With</p>
                </TransitionOpacityInView>

                <TransitionParentFast addClass="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 select-none text-center gap-4">
                  {skills.frontend.map((skill, idx) => (
                    <TransitionOpacity key={idx}>
                      <div className="py-5 space-y-1 duration-200 border rounded-md cursor-pointer border-primary/10 hover:bg-primary/10">
                        <div className="grid place-content-center">{skill.icon}</div> <p>{skill.label}</p>
                      </div>
                    </TransitionOpacity>
                  ))}
                </TransitionParentFast>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
