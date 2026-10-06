"use client";
import Star from "@/components/Common/Icons/star";
import { TransitionReveal } from "@/lib/utils/transitions";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { SiFigma } from "react-icons/si";

import { useStore } from "@/lib/utils/providers";

const iconCluster = [
  { icon: <SiFigma size={30} />, top: "18%", left: "43%", size: "21%", duration: "5.5s", delay: "0s" },
  { icon: <i className="text-3xl ri-layout-4-line"></i>, top: "26%", left: "69%", size: "20%", duration: "6.2s", delay: "0.6s" },
  { icon: <i className="text-3xl ri-pencil-ruler-2-line"></i>, top: "47%", left: "77%", size: "20%", duration: "5s", delay: "1.1s" },
  { icon: <i className="text-3xl ri-focus-3-line"></i>, top: "69%", left: "68%", size: "20%", duration: "6.8s", delay: "0.3s" },
  { icon: <i className="text-3xl ri-github-fill"></i>, top: "76%", left: "44%", size: "19%", duration: "5.3s", delay: "1.6s" },
  {
    icon: <Image alt="React" src="/images/others/icons8-react-native.svg" width={34} height={34} />,
    top: "69%",
    left: "21%",
    size: "21%",
    duration: "6s",
    delay: "0.9s",
  },
  {
    icon: <Image alt="Tailwind CSS" src="/images/others/icons8-tailwind-css.svg" width={34} height={34} />,
    top: "47%",
    left: "14%",
    size: "19%",
    duration: "5.8s",
    delay: "1.4s",
  },
  {
    icon: <Image alt="HTML" src="/images/others/icons8-html.svg" width={34} height={34} />,
    top: "26%",
    left: "19%",
    size: "19%",
    duration: "6.5s",
    delay: "0.2s",
  },
  {
    icon: <Image alt="CSS" src="/images/others/icons8-css.svg" width={34} height={34} />,
    top: "57%",
    left: "36%",
    size: "18%",
    duration: "5.2s",
    delay: "2s",
  },
  {
    icon: <Image alt="JavaScript" src="/images/others/icons8-javascript.svg" width={34} height={34} />,
    top: "36%",
    left: "49%",
    size: "20%",
    duration: "6.1s",
    delay: "1.8s",
  },
];

const About = () => {
  const { homeRef } = useStore();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about_",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about_",
          start: "top bottom",
          end: "+=300",
          scrub: 1,
        },
      });

      tl.to(".star_icon", { rotate: 360 });
      tl2.from("#about_text", { xPercent: -100, opacity: 0 });
    }, homeRef);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="h-[4rem] bg-gradient-to-t pt-[15rem] from-black"></div>
      <section className="relative min-h-screen bg-black" id="about_">
        <div>
          <h3
            className="absolute -top-[15rem] z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
            id="about_text"
          >
            About
          </h3>

          <div className="absolute top-0 right-20 -z-10 star_icon">
            <Star />
          </div>

          <div className="container">
            <div className="z-50 flex flex-col-reverse items-center grid-cols-2 gap-16 md:grid">
              <TransitionReveal addClass="space-y-8">
                <p className="text-lg leading-loose text-primary/80">
                  <span className="text-4xl font-semibold leading-normal">Hi</span> I am a product designer who is passionate, self-motivated, and result-oriented, with a keen interest in UI/UX design, user-centered problem solving, and digital product strategy. I enjoy turning ideas into clear user flows, wireframes, and polished interfaces in Figma.
                  <br/>Because I also build with HTML, CSS, and JavaScript, I design with a real sense of what&apos;s feasible to ship, and can take a concept from a rough sketch through to a working interface. I aim to bring thoughtful, user-first design to a world-class organization through internship or student training.
                </p>

                <div className="w-fit">
                  <a download={true} href={"/docs/Wahab_Sekinat_Resume.pdf"}>
                    <button className="flex items-center gap-2 px-4 py-2 transition-colors duration-300 bg-transparent border rounded-md hover:bg-primary hover:text-primaryBlack-100 border-primary text-primary">
                      <span>View My CV</span> <DownloadIcon />
                    </button>
                  </a>
                </div>
              </TransitionReveal>
              <TransitionReveal addClass="grid p-4 place-content-center relative" delay={0.2}>
                <div className="absolute top-0 left-4 -z-10 star_icon">
                  <Star />
                </div>

                <div className="top-0 left-0 grid w-full h-full md:absolute place-content-center">
                  <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] max-w-full">
                    {iconCluster.map((item, idx) => (
                      <div
                        key={idx}
                        className="absolute flex items-center justify-center text-primary duration-200 rounded-2xl bg-[#0f0f0f8a] backdrop-blur-sm hover:bg-primary/10 animate-float"
                        style={{
                          top: item.top,
                          left: item.left,
                          width: item.size,
                          height: item.size,
                          animationDuration: item.duration,
                          animationDelay: item.delay,
                        }}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </TransitionReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="reset_bg"></div>
    </>
  );
};

export default About;
// w-10 h-10 mx-auto overflow-hidden rounded-full bg-primary text-primary py-[10rem]
