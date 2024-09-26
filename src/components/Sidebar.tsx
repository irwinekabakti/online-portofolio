import { FC, useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { User } from "../types/type";

interface NavItemsProps {
  id: number;
  path: string;
  label: string;
}

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const navItems: NavItemsProps[] = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/skills", label: "Skills" },
    { id: 4, path: "/interest", label: "Interest" },
    { id: 5, path: "/education", label: "Education" },
    { id: 6, path: "/experience", label: "Experience" },
    { id: 7, path: "/awards", label: "Awards" },
  ];

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
        className={`w-1/2 md:w-1/5 h-screen bg-[#262626] text-white p-4 fixed left-0 top-0 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="absolute right-0 top-0 h-full w-[1px] bg-[#fff]"></div>

        <nav className={`${isOpen ? "test mt-12" : "my-10"} p-4 rounded-lg`}>
          <div className="w-[100px] h-[100px] mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-white rounded-full"></div>
            <img
              src={userData?.picture.large}
              alt={`image-${userData?.name}`}
              className="w-[96px] h-[96px] rounded-full absolute inset-[2px] object-cover"
            />
          </div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="block py-2 text-center text-white hover:bg-gray-700 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
