import experience from "@/lib/store/experience";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companyInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

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
            className="flex flex-col items-start gap-4 p-6 duration-200 border rounded-md sm:flex-row border-primary/10 bg-[#0f0f0f6f] hover:border-primary/40"
          >
            <div className="flex items-center justify-center w-20 h-20 p-3 border rounded-md bg-white/5 border-primary/10 shrink-0">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              ) : (
                <span className="text-xl font-bold text-primary/80">{companyInitials(exp.company)}</span>
              )}
            </div>

            <div className="flex-1 space-y-1">
              <h4 className="text-xl font-bold">{exp.role}</h4>

              {exp.website ? (
                <Link
                  href={exp.website}
                  target="_blank"
                  className="inline-flex items-center gap-1 duration-200 text-primary hover:underline"
                >
                  {exp.company} <ExternalLink size={16} />
                </Link>
              ) : (
                <p className="font-semibold text-primary">{exp.company}</p>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 opacity-75 text-slate-300">
                <div className="flex items-center">
                  <CalendarDays size={18} />
                  <span className="ml-2 text-sm">{exp.duration}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center">
                    <MapPin size={18} />
                    <span className="ml-2 text-sm">{exp.location}</span>
                  </div>
                )}
              </div>

              {exp.bullets && (
                <ul className="pt-2 space-y-1 text-sm list-disc list-inside text-primary/80">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
