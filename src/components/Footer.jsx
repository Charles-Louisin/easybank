import logo from '/images/logo.svg';
import facebook from '/images/icon-facebook.svg';
import youtube from '/images/icon-youtube.svg';
import twitter from '/images/icon-twitter.svg';
import pinterest from '/images/icon-pinterest.svg';
import instagram from '/images/icon-instagram.svg';

const Footer = ({ lang, translations }) => {
  return (
    <footer className="bg-dark-blue dark:bg-dark-blue-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            {/* Logo with white filter */}
            <div className="mb-8">
              <img src={logo} alt="Easybank" className="brightness-0 invert transition-all duration-300" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:filter hover:brightness-200 transition-all duration-300">
                <img src={facebook} alt="Facebook" className="dark:brightness-0 dark:invert" />
              </a>
              <a href="#" className="hover:filter hover:brightness-200 transition-all duration-300">
                <img src={youtube} alt="YouTube" className="dark:brightness-0 dark:invert" />
              </a>
              <a href="#" className="hover:filter hover:brightness-200 transition-all duration-300">
                <img src={twitter} alt="Twitter" className="dark:brightness-0 dark:invert" />
              </a>
              <a href="#" className="hover:filter hover:brightness-200 transition-all duration-300">
                <img src={pinterest} alt="Pinterest" className="dark:brightness-0 dark:invert" />
              </a>
              <a href="#" className="hover:filter hover:brightness-200 transition-all duration-300">
                <img src={instagram} alt="Instagram" className="dark:brightness-0 dark:invert" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <div className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.about}
              </a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.contact}
              </a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.blog}
              </a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.careers}
              </a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.support}
              </a>
              <a href="#" className="block text-white hover:text-lime-green transition-colors duration-300">
                {translations[lang].footer.privacyPolicy}
              </a>
            </div>
          </div>

          {/* CTA and Copyright */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-6">
            <button className="bg-gradient-to-r from-lime-green to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300">
              {translations[lang].nav.requestInvite}
            </button>
            <p className="text-grayish-blue dark:text-gray-400 text-sm transition-colors duration-300">
              {translations[lang].footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 