import { FC, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`lg:hidden fixed top-4 left-4 z-20 py-1 rounded-md ${
          isOpen ? "text-center" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose size={24} className="text-red-600" />
        ) : (
          <IoMenu size={24} className="text-blue-600" />
        )}
      </button>
      <div
        className={`lg:w-64 h-screen bg-[#262626] text-white p-4 fixed left-0 top-0 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="absolute right-0 top-0 h-full w-[1px] bg-[#fff]"></div>

        {isOpen ? (
          <nav className="test mt-12">
            <ul>
              <li>
                <Link to="/" className="block py-2 hover:bg-gray-700 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 hover:bg-gray-700 rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="block py-2 hover:bg-gray-700 rounded"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/interest"
                  className="block py-2 hover:bg-gray-700 rounded"
                >
                  Interest
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="block py-2 hover:bg-gray-700 rounded"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="block py-2 hover:bg-gray-700 rounded"
                >
                  Awards
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <h2 className="md:text-2xl md:font-bold mb-4">Sidebar</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="block py-2 hover:bg-gray-700 rounded">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 hover:bg-gray-700 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="block py-2 hover:bg-gray-700 rounded"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/interest"
                    className="block py-2 hover:bg-gray-700 rounded"
                  >
                    Interest
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience"
                    className="block py-2 hover:bg-gray-700 rounded"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/awards"
                    className="block py-2 hover:bg-gray-700 rounded"
                  >
                    Awards
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
