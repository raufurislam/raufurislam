// import React from "react";
// import Navbar from "../shared/Navbar/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../shared/Footer/Footer";

// const Main = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar at the top */}
//       <Navbar />

//       {/* Main content with flexible height */}
//       <div className="flex-grow">
//         <Outlet />
//       </div>

//       {/* Footer at the bottom */}
//       <div className="md:mt-8 ">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Main;
import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Loading from "../Pages/Loading/Loading";
// import Loading from "../Loading/Loading";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Adjust timing as needed

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Loading />; // Show loading screen without navbar/footer
  // }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with flexible height */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer at the bottom */}
      <div className="md:mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
