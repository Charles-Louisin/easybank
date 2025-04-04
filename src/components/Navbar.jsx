import { useState, useEffect } from 'react';
import logo from '/images/logo.svg';
import hamburger from '/images/icon-hamburger.svg';
import close from '/images/icon-close.svg';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

const Navbar = ({ lang, translations, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('home');

  // Fermer le menu mobile en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', text: translations[lang].nav.home },
    { id: 'about', text: translations[lang].nav.about },
    { id: 'contact', text: translations[lang].nav.contact },
    { id: 'blog', text: translations[lang].nav.blog },
    { id: 'careers', text: translations[lang].nav.careers },
  ];

  return (
    <nav className="relative bg-white dark:bg-dark-blue z-50 transition-colors duration-300">
      <div className="container mx-auto px-0 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Easybank" className="h-5 dark:filter dark:brightness-0 dark:invert" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-grayish-blue hover:text-dark-blue dark:text-white dark:hover:text-lime-green transition-colors ${
                  activeLink === link.id ? 'after:absolute after:bottom-[-30px] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-lime-green after:to-bright-cyan' : ''
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Theme Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2 bg-very-light-gray dark:bg-dark-blue-800 p-2 rounded-lg">
              <button
                onClick={() => toggleTheme('light')}
                className={`p-2 rounded-lg ${theme === 'light' ? 'bg-white text-dark-blue' : 'text-grayish-blue'}`}
              >
                <FaSun className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleTheme('dark')}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-dark-blue-800 text-white' : 'text-grayish-blue'}`}
              >
                <FaMoon className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleTheme('system')}
                className={`p-2 rounded-lg ${theme === 'system' ? 'bg-gray-200 dark:bg-dark-blue-700' : 'text-grayish-blue'}`}
              >
                <FaDesktop className="w-4 h-4" />
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex space-x-4">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`${lang === 'fr' ? 'text-dark-blue dark:text-white' : 'text-grayish-blue'}`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`${lang === 'en' ? 'text-dark-blue dark:text-white' : 'text-grayish-blue'}`}
              >
                EN
              </button>
            </div>
          </div>

          <button className="hidden md:block bg-gradient-to-r from-lime-green to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-opacity">
            {translations[lang].nav.requestInvite}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? close : hamburger} alt="Menu" className="dark:filter dark:brightness-0 dark:invert" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-dark-blue to-transparent opacity-60 md:hidden" />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[calc(100%+1.5rem)] left-6 right-6 bg-white dark:bg-dark-blue-800 w-[calc(100%-3rem)] rounded-lg p-6 shadow-lg md:hidden mobile-menu">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-dark-blue dark:text-white hover:text-lime-green transition-colors ${
                  activeLink === link.id ? 'text-lime-green' : ''
                }`}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMenuOpen(false);
                }}
              >
                {link.text}
              </a>
            ))}

            {/* Mobile Theme Switcher */}
            <div className="flex justify-center pt-2">
              <div className="flex space-x-2 bg-very-light-gray dark:bg-dark-blue-900 p-2 rounded-lg">
                <button
                  onClick={() => toggleTheme('light')}
                  className={`p-2 rounded-lg ${theme === 'light' ? 'bg-white text-dark-blue' : 'text-grayish-blue'}`}
                >
                  <FaSun className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleTheme('dark')}
                  className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-dark-blue-800 text-white' : 'text-grayish-blue'}`}
                >
                  <FaMoon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleTheme('system')}
                  className={`p-2 rounded-lg ${theme === 'system' ? 'bg-gray-200 dark:bg-dark-blue-700' : 'text-grayish-blue'}`}
                >
                  <FaDesktop className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex justify-center space-x-4 pt-2">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`${lang === 'fr' ? 'text-dark-blue dark:text-white' : 'text-grayish-blue'}`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`${lang === 'en' ? 'text-dark-blue dark:text-white' : 'text-grayish-blue'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 