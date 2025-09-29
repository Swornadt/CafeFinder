const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-4 px-8 mt-2 rounded-t-2xl shadow-inner flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700">
      <div className="text-sm">
        © {new Date().getFullYear()} Sworna D. Tuladhar. All rights reserved.
      </div>
      <div className="flex gap-4 items-center text-sm">
        <p className="hover:text-white transition">tuladharsworna@gmail.com</p>
        <a
          href="https://github.com/Swornadt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sworna-d-tuladhar-a96315311/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
