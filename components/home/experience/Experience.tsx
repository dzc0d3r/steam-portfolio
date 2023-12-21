import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience & Open Source" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BeeWare Project",
    position: "",
    time: "2020",
    location: "",
    description:
      ["Fixed a bug that was causing installation issues on the beeware website repository", "Helped Translating many pages into Arabic"],
    tech: [
      "Python",
      "Lektor",
      "Markdown",
      "Git",
      "Github",
      "Github Actions"
    ],
  },
  {
    title: "Pywebview Project",
    position: "",
    time: "2022",
    location: "",
    description:
      [
        "Made a simple boilerplate to help new developers start with pywebview and React",
        "Earned my first Starstruck badge because of this repository"
      ],
    tech: ["Python", "Pywebview", "React", "Typesript", "Git", "Github"],
  },
  {
    title: "Freelance",
    position: "Web Developer",
    time: "2023 - Present",
    location: "Online",
    description:
      [
        "Developed efficient web applications with React and Next.js",
        "Built robust backends using Laravel, Flask, and MySQL",
        "Ensured seamless version control and collaboration with Git",
        "Containerized applications for flexibility using Docker and automated workflow",
      ],
    tech: ["React", "Nextjs", "Laravel", "Flask", "Mysql" , "Git", "Github", "Docker", "Github Actions"],
  },
];
