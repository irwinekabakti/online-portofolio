import { FC } from "react";
import { FaAward } from "react-icons/fa6";

const Awards: FC = () => {
  const awards = [
    "Hack 36 3rd prize winner.",
    "Mentor OpenCode'19",
    "Started North Indonesia First Student Design and Developer Conference.",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        AWARDS & CERTIFICATIONS
      </h1>
      <ul className="space-y-2">
        {awards.map((award, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-yellow-500">
              <FaAward />
            </span>
            <p className="text-white">{award}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
