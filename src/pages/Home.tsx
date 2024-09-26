import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home: FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        LOREM<span className="text-orange-500">IPSUM</span>
      </h1>

      <p className="text-sm text-gray-200">
        +62-0123456789 · LOREMIPSUM@GMAIL.COM
      </p>

      <p className="text-lg text-gray-200 mt-6">
        I am an open-source contributor and have contributed to Zulip, Hasura,
        Fossasia, Publiclab, and many other projects. My tech stack includes
        Python and Javascript. Python for server-side and scripting and
        Javascript for the frontend. I use Django framework for server-side
        development and React for frontend development. I have also worked with
        GraphQL.
      </p>

      <p className="text-lg text-gray-200 mt-6">
        I am a GitHub Campus Expert at my institute, where I am responsible for
        building on-campus community. I am the lead organizer of Hack In The
        North Hackathon and the cofounder of Pragma Conference held at IIIT
        Allahabad.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="https://linkedin.com"
          className="border border-white rounded-full p-3 text-gray-200 hover:text-white hover:border-gray-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com"
          className="border border-white rounded-full p-3 text-gray-200 hover:text-white hover:border-gray-500"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;
