const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} NextItems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
