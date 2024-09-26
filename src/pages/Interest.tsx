import { FC } from "react";

const Interest: FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* // <div className="w-full md:w-2/5 lg:w-3/5 mx-auto my-8"> */}
      <h1 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
        Interest
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        Apart from being a web developer, I enjoy most of my time being
        outdoors. In the winter, I am an avid skier and novice ice climber.
        During the warmer months here in Colorado, I enjoy mountain biking, free
        climbing, and kayaking.
      </p>
      <p className="text-lg text-gray-200">
        When forced indoors, I follow a number of sci-fi and fantasy genre
        movies and television shows. I am an aspiring chef, and I spend a large
        amount of my free time exploring the latest technology advancements in
        the front-end web development world.
      </p>
    </div>
  );
};

export default Interest;
