function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Võ Chí Cường. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/CuongVo2003" target="_blank" className="hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/vo-chi-cuong-khanhhoa/" target="_blank" className="hover:text-gray-400">LinkedIn</a>
          <a href="mailto:cuongvcmfj2003@gmail.com" className="hover:text-gray-400">Email</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;