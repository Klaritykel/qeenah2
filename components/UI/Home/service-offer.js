"use client";
import Star from "@/components/Common/Icons/star";
import services from "@/lib/store/services";
import { TransitionFromBottom, TransitionParent } from "@/lib/utils/transitions";
import { TransitionReveal } from "@/lib/utils/transitions";
import { gsap } from "gsap";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const ServiceOffer = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null); // 👈 create a ref for the target text

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "+=200",
          scrub: 1,
        },
      });

      tl.from(textRef.current, {
        xPercent: -100,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="h-[4rem] bg-gradient-to-t pt-[15rem] from-black" ref={sectionRef}></div>
    <section className="relative min-h-[42rem] bg-black" id="summary">
        <h3
            ref={textRef} // 👈 apply the new ref
            className="absolute -top-[15rem] z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
        >
            Services
        </h3>

          <div className="container min-h-[32rem] space-y-28">
            <TransitionParent addClass="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
                {services.map((service, idx) => (
                    <TransitionFromBottom
                      key={idx}
                      addClass="p-6 rounded-md text-center hover:border-primary border-2 border-transparent duration-200 group cursor-default bg-[#0f0f0f94]"
                    >
                        <div className="space-y-5 text-primary">
                            <div className="flex items-center justify-center text-5xl">{service.icon}</div>

                            <h4 className="text-3xl font-semibold">{service.type}</h4>
                            <>{service.description}</>
                        </div>
                    </TransitionFromBottom>
                ))}
            </TransitionParent>
          </div>
      </section>
      </>
  );
};

export default ServiceOffer;
// w-10 h-10 mx-auto overflow-hidden rounded-full bg-primary text-primary py-[10rem]
