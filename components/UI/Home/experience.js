import experience from "@/lib/store/experience";
import { CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <section className="container mx-auto my-20" id="experience">
      <h3 className="mb-5 text-3xl font-bold uppercase md:px-6 md:text-4xl text-start">
        Experience<span className="text-primary">.</span>
      </h3>

      <div className="space-y-6 md:px-6">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-4 p-6 duration-200 border rounded-md sm:flex-row sm:items-center border-primary/10 bg-[#0f0f0f6f] hover:border-primary/40"
          >
            <div className="flex items-center justify-center w-20 h-20 p-3 border rounded-md bg-white/5 border-primary/10 shrink-0">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex-1 space-y-1">
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <Link
                href={exp.website}
                target="_blank"
                className="inline-flex items-center gap-1 duration-200 text-primary hover:underline"
              >
                {exp.company} <ExternalLink size={16} />
              </Link>

              <div className="flex items-center pt-1 opacity-75 text-slate-300">
                <CalendarDays size={18} />
                <span className="ml-2 text-sm">{exp.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
