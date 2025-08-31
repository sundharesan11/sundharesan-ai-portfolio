const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-secondary/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 Sundharesan. Built with ❤️ using AI.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/sundharesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/sundharesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://medium.com/@sundharesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;