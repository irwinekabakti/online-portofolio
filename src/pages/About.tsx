import { FC } from "react";

const About: FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        About Us
      </h1>
      <p className="text-gray-300 mb-4">
        Welcome to our website! We are a passionate team dedicated to providing
        high-quality services and products to our customers.
      </p>
      <p className="text-gray-300 mb-4">
        Our mission is to innovate and excel in our field, always putting our
        customers' needs first. With years of experience and a commitment to
        excellence, we strive to make a positive impact in everything we do.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-white">Our Values</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>Customer satisfaction</li>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Teamwork</li>
      </ul>
    </div>
  );
};

export default About;
