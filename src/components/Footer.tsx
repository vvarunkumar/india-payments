const Footer = () => {
  return (
    <footer className="py-8 bg-section-dark text-white/80">
      <div className="container text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} India Payments Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
