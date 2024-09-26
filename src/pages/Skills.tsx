import { FC } from "react";
import { GiCheckMark } from "react-icons/gi";

const Skills: FC = () => {
  const mySkills: string[] = [
    "HTML5",
    "Javascript",
    "Nodejs",
    "CSS3",
    "React",
    "React Native",
    "Nextjs",
    "Python",
    "postgresql",
    "Java",
    "Springboot",
    "CI/CD",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        Skills
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {mySkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-green-500">
              <GiCheckMark />
            </span>
            <p className="text-white">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
