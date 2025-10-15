const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Akhil. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Built with passion and modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
