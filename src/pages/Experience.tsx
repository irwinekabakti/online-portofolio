import { FC } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
}

const Experience: FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "GitHub Campus Expert",
      company: "GitHub",
      description:
        "Responsible for building the on-campus community with the support of GitHub.",
      startDate: "August 2018",
      endDate: "Present",
    },
    {
      title: "Opensource Developer Intern",
      company: "FOSSASIA",
      description:
        "Contributed to Fossasia’s open event server and frontend as an intern. Resolved numerous bugs and added new features to the eventyay platform.",
      startDate: "June 2019",
      endDate: "Present",
    },
    {
      title: "Software Developer Intern",
      company: "Hasura",
      description:
        "Worked on Hasura’s GraphQL engine and added new features in it.",
      startDate: "December 2018",
      endDate: "January 2019",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        Experience
      </h1>
      <ul className="space-y-8">
        {experiences.map((experience, index) => (
          <li key={index} className="border-b border-gray-300 pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-white">
                {experience.title}
              </h3>
              <span className="text-gray-400 text-sm">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
            <p className="text-gray-200">{experience.company}</p>
            <p className="text-white">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
