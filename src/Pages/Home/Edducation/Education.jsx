import React from "react";

const Education = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      <div className="text-center mb-10">
        <h4 className="text-primary  font-semibold md:text-xl text-lg mb-4 uppercase">
          Education
        </h4>
        {/* <h4 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
          Where Design Meets Development
        </h4> */}

        <div className="max-w-screen-sm mx-auto py-6 lg:px-10 md:px-4 bg-neutral rounded-lg">
          <h1 className="text-xl  font-bold text-white">
            Bachelor of Science in Mathematics
          </h1>
          {/* <h1 className="md:text-xl md:hidden font-bold text-white">
            BSc in Depertment of Mathematics
          </h1> */}
          <p className=" mt-2 text-lg font-semibold text-secondary">
            National University, Bangladesh
          </p>
          <p className="text-secondary">2020 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
