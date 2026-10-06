"use client";
import PageContainer from "@/components/Common/Shared/page-container";
import Link from "next/link";
import { CalendarDays, Download, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const CVPage = ({ data, otherCv }) => {
  return (
    <PageContainer>
      <main>
        <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-primary/20">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">{data.name}</h1>
              <p className="mt-2 text-sm font-semibold tracking-widest uppercase text-primary">{data.role}</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={otherCv.href}
                className="px-4 py-2 text-sm duration-200 border rounded-md border-primary/30 text-primary/80 hover:border-primary hover:text-primary"
              >
                View {otherCv.label} CV
              </Link>
              <a download href={data.pdf}>
                <button className="flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-300 bg-transparent border rounded-md hover:bg-primary hover:text-primaryBlack-100 border-primary text-primary">
                  <span>Download PDF</span> <Download size={16} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm text-primary/70">
            <span>{data.email}</span>
            <span>{data.phone}</span>
            <span>{data.location}</span>
          </div>

          <p className="max-w-3xl mb-12 text-lg leading-relaxed text-primary/80">{data.summary}</p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-12 md:col-span-2">
              <section>
                <h2 className="mb-5 text-2xl font-bold uppercase">
                  Experience<span className="text-primary">.</span>
                </h2>
                <div className="space-y-4">
                  {data.experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-6 border rounded-md border-primary/10 bg-[#0f0f0f6f]"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        <div className="flex items-center text-sm text-primary/60">
                          <CalendarDays size={16} />
                          <span className="ml-1">{exp.duration}</span>
                        </div>
                      </div>

                      {exp.website ? (
                        <Link
                          href={exp.website}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm duration-200 text-primary hover:underline"
                        >
                          {exp.company} <ExternalLink size={14} />
                        </Link>
                      ) : (
                        <p className="text-sm font-semibold text-primary">{exp.company}</p>
                      )}

                      {exp.location && (
                        <div className="flex items-center mt-1 text-sm text-primary/60">
                          <MapPin size={14} />
                          <span className="ml-1">{exp.location}</span>
                        </div>
                      )}

                      {exp.bullets && (
                        <ul className="pl-4 mt-3 space-y-1 text-sm list-disc text-primary/70">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold uppercase">
                  Selected Projects<span className="text-primary">.</span>
                </h2>
                <div className="space-y-4">
                  {data.projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-6 border rounded-md border-primary/10 bg-[#0f0f0f6f]"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-bold">
                          {project.link ? (
                            <Link
                              href={project.link}
                              target="_blank"
                              className="inline-flex items-center gap-1 duration-200 hover:text-primary"
                            >
                              {project.name} <ExternalLink size={14} />
                            </Link>
                          ) : (
                            project.name
                          )}
                        </h3>
                        <span className="text-sm text-primary/60">{project.date}</span>
                      </div>
                      <p className="mt-2 text-sm text-primary/70">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 text-xs duration-200 border rounded-md border-primary/20 text-primary/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-5 text-2xl font-bold uppercase">
                  Education<span className="text-primary">.</span>
                </h2>
                <div className="space-y-4">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="p-6 border rounded-md border-primary/10 bg-[#0f0f0f6f]">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-bold">{edu.title}</h3>
                        <span className="text-sm text-primary/60">{edu.date}</span>
                      </div>
                      <p className="mt-1 text-sm text-primary/70">{edu.org}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="mb-4 text-lg font-bold uppercase">{data.skillsLabel}</h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm border rounded-md border-primary/15 text-primary/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-bold uppercase">Languages</h2>
                <div className="space-y-3">
                  {data.languages.map((lang, idx) => (
                    <div key={idx} className="grid items-center grid-cols-5 gap-3">
                      <p className="col-span-2 text-sm">{lang.label}</p>
                      <div className="h-2 col-span-2 overflow-hidden border rounded-md border-primary">
                        <div className="h-full bg-primary" style={{ width: lang.percentage }}></div>
                      </div>
                      <p className="text-sm text-primary/60">{lang.percentage}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-bold uppercase">Soft Skills</h2>
                <div className="space-y-3">
                  {data.softSkills.map((skill, idx) => (
                    <div key={idx} className="grid items-center grid-cols-5 gap-3">
                      <p className="col-span-2 text-sm">{skill.label}</p>
                      <div className="h-2 col-span-2 overflow-hidden border rounded-md border-primary">
                        <div className="h-full bg-primary" style={{ width: skill.percentage }}></div>
                      </div>
                      <p className="text-sm text-primary/60">{skill.percentage}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-lg font-bold uppercase">Elsewhere</h2>
                <div className="space-y-2 text-sm">
                  {data.elsewhere.map((item, idx) => (
                    <p key={idx}>
                      {item.label} &mdash;{" "}
                      <Link href={item.href} target="_blank" className="duration-200 text-primary hover:underline">
                        {item.value}
                      </Link>
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  );
};

export default CVPage;
