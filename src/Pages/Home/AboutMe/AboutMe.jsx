const AboutMe = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h4 className="text-primary font-semibold text-xl mb-2">About Me</h4>
        <h4 className="text-white text-4xl font-bold">
          My Journey in Tech & Design
        </h4>
      </div>

      {/* Content */}
      <div className=" text-secondary text-lg leading-relaxed space-y-6">
        {/* Who I Am */}
        <div>
          <h5 className="text-2xl font-bold mb-2">Who I Am</h5>
          <p>
            Hi there! 👋 I’m{" "}
            <span className="font-bold">Raufur Islam Nayem</span>, a passionate{" "}
            <span className="font-bold">Full Stack Developer</span> with
            expertise in{" "}
            <span className="font-bold">
              React.js, Node.js, and UI/UX design
            </span>
            . I love building scalable, efficient web applications that not only
            function smoothly but also deliver a great user experience. My
            background in{" "}
            <span className="font-bold">graphics design and UI/UX</span> gives
            me an edge in crafting visually appealing and intuitive interfaces.
            Whether it's{" "}
            <span className="font-bold">
              Photoshop, Illustrator, Figma, or Tailwind CSS
            </span>
            , I enjoy using design principles to enhance the usability of my
            applications.
          </p>
        </div>

        {/* My Programming Journey */}
        <div>
          <h5 className="text-2xl font-bold mb-2">My Programming Journey</h5>
          <p>
            My journey into tech started with a curiosity about how websites and
            applications work. I began exploring{" "}
            <span className="font-bold">HTML, CSS, and JavaScript</span>, which
            quickly turned into a deep interest in{" "}
            <span className="font-bold">full-stack development</span>. Over
            time, I mastered <span className="font-bold">React.js</span> for
            frontend development and{" "}
            <span className="font-bold">Node.js with Express.js</span> for the
            backend, along with databases like{" "}
            <span className="font-bold">MongoDB</span> and{" "}
            <span className="font-bold">Firebase</span>. I’m constantly learning
            and keeping up with new trends, ensuring that my skill set stays{" "}
            <span className="font-bold">modern and relevant</span>.
          </p>
        </div>

        {/* The Work I Enjoy */}
        <div>
          <h5 className="text-2xl font-bold mb-2">The Work I Enjoy</h5>
          <p>
            I thrive on solving{" "}
            <span className="font-bold">complex problems</span> and bringing{" "}
            <span className="font-bold">creative ideas</span> to life through
            code. My favorite projects are those that challenge me to{" "}
            <span className="font-bold">think outside the box</span>, whether
            it’s developing a <span className="font-bold">dynamic web app</span>
            , improving
            <span className="font-bold"> UI/UX design</span>, or optimizing
            performance. I enjoy collaborating with teams, brainstorming ideas,
            and refining products until they{" "}
            <span className="font-bold">look and function flawlessly</span>.
          </p>
        </div>

        {/* Beyond Coding */}
        <div>
          <h5 className="text-2xl font-bold mb-2">Beyond Coding</h5>
          <p>
            While tech is a huge part of my life, I also have a creative side!
            🎨 I love <span className="font-bold">graphic design</span>, where I
            experiment with branding, UI/UX mockups, and digital illustrations.
            Outside of the screen, I enjoy{" "}
            <span className="font-bold">photography</span>, exploring new
            places, and diving into{" "}
            <span className="font-bold">design inspirations</span>. When I’m not
            working, you can find me watching{" "}
            <span className="font-bold">tech YouTube videos</span>, playing
            games, or sketching new design ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
