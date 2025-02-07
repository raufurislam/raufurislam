const Footer = () => {
  return (
    <footer className="bg-neutral text-white py-10 mt-10">
      <div className="max-w-screen-2xl mx-auto text-center px-4">
        <p className="text-lg font-semibold mb-2">Raufur Islam</p>
        <p className="text-sm">
          A Full Stack Developer with a passion for building creative and
          functional solutions.
        </p>
        <div className="mt-4 text-xs text-accent">
          <p>
            © {new Date().getFullYear()} Raufur Islam Nayem. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
