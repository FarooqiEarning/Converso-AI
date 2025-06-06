import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Moon, 
  Sun,
  Menu, 
  X, 
  MessageCircle,
  Database, 
  Instagram, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buttonsOffset, setButtonsOffset] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const buffer = 20;

      if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setButtonsOffset(overlap + buffer);
      } else {
        setButtonsOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark');
  };

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/50 to-light-accent-500/50 dark:from-dark-primary-400/50 dark:to-dark-accent-400/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150"></div>
        <div className="relative p-0.5 rounded-xl bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400">
          <div className="relative p-2.5 rounded-[10px] bg-light-bg dark:bg-dark-bg backdrop-blur-sm">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 rounded-lg animate-pulse"></div>
              <Sparkles className="w-6 h-6 relative z-10 text-white dark:text-white/90" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 bg-clip-text text-transparent">
          Converso AI
        </span>
        <span className="text-[10px] text-light-text-tertiary dark:text-dark-text-tertiary leading-none">
          Unlimited AI Power
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <header className="fixed w-full top-0 z-50 border-b border-light-primary-100/50 dark:border-dark-primary-700/50 backdrop-blur-premium bg-light-bg/70 dark:bg-dark-bg/70">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <Link
                  to="/models"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <Database className="w-4 h-4" />
                  Models
                </Link>
                <Link
                  to="/docs"
                  className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary-600 dark:hover:text-dark-primary-400 transition-colors flex items-center gap-1"
                >
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Link>
              </div>

              <div className="flex items-center gap-4 border-l border-light-primary-100/50 dark:border-dark-primary-700/50 pl-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-light-bg/80 dark:bg-dark-bg-secondary/80 hover:bg-light-bg-secondary dark:hover:bg-dark-bg-tertiary transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=923164525711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg/80 dark:bg-dark-bg-secondary/80 hover:bg-light-bg-secondary dark:hover:bg-dark-bg-tertiary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      
      {/* Premium mobile menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-gradient-to-br from-light-bg to-light-bg-secondary dark:from-dark-bg dark:to-dark-bg-secondary shadow-2xl border-l border-light-primary-100/50 dark:border-dark-primary-700/50 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b border-light-primary-100/50 dark:border-dark-primary-700/50">
            <Logo />
            <button 
              className="p-2 rounded-full bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Main navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              <Link
                to="/models"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <Database className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Models</span>
              </Link>
              
              <Link
                to="/docs"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:bg-gradient-to-r hover:from-light-primary-500/10 hover:to-light-accent-500/10 dark:hover:from-dark-primary-400/10 dark:hover:to-dark-accent-400/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20">
                  <BookOpen className="w-4 h-4 text-light-primary-600 dark:text-dark-primary-400" />
                </div>
                <span className="font-medium">Documentation</span>
              </Link>
            </div>
          </div>
          
          {/* Footer with theme toggle and social links */}
          <div className="p-4 border-t border-light-primary-100/50 dark:border-dark-primary-700/50">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors flex items-center gap-2"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              <div className="flex items-center gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=923164525711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-light-bg-secondary/80 dark:bg-dark-bg-tertiary/80 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-light-primary-100/50 dark:border-dark-primary-700/50 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-light-text-tertiary dark:text-dark-text-tertiary max-w-md">
                Access unlimited AI power with our API. Start building amazing applications with cutting-edge AI models.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=923164525711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-light-text dark:text-dark-text-tertiary dark:hover:text-dark-text transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/muhammadgohar_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text-tertiary hover:text-pink-600 dark:text-dark-text-tertiary dark:hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end justify-between">
              <div className="flex flex-wrap gap-6 md:justify-end">
                <Link to="/about" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  About
                </Link>
                <Link to="/terms" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary hover:text-light-primary-600 dark:hover:text-dark-primary-400">
                  Privacy Policy
                </Link>
              </div>

              <p className="mt-6 text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                © {new Date().getFullYear()} Converso AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed buttons */}
      <div 
        className="fixed right-6 z-40 transition-all duration-300 ease-in-out"
        style={{ 
          bottom: '1.5rem',
          transform: `translateY(-${buttonsOffset}px)`
        }}
      >

        <button
          onClick={() => window.open("https://api.whatsapp.com/send?phone=923164525711", "_blank")}
          className="group relative mb-4 block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
          <div className="relative px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white shadow-xl flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
            <div className="p-1 bg-white/20 rounded-lg">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="font-medium">Contact</span>
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Layout;
