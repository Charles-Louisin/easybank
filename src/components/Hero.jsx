import mockups from '/images/image-mockups.png';
import bgMobile from '/images/bg-intro-mobile.svg';

const Hero = ({ lang, translations }) => {
  return (
    <section className="relative overflow-visible bg-white dark:bg-dark-blue-900 transition-colors duration-300">
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="absolute w-full h-[49%] overflow-hidden">
          <img
            src={bgMobile}
            alt=""
            className="w-[85%] absolute top-0 left-0 transform scale-[1.5] translate-y-[-8%] dark:opacity-80"
          />
        </div>

        <div className="w-full">
          <div className="relative w-full h-[380px]">
            <img
              src={mockups}
              alt="Mobile mockups"
              className="absolute w-[100%] top-[-120px] left-[50%] transform translate-x-[-50%] dark:brightness-90"
            />
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden relative md:flex justify-between items-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center relative">
            {/* Left section - Text */}
            <div className="w-[40%] z-20 py-24">
              <div className="max-[100%]">
                <h1 className="text-[54px] leading-[1.15] font-public-sans font-light text-dark-blue dark:text-white mb-5 transition-colors duration-300">
                  {translations[lang].hero.title}
                </h1>
                <p className="text-grayish-blue dark:text-gray-400 text-lg mb-8 transition-colors duration-300">
                  {translations[lang].hero.description}
                </p>
                <button className="bg-gradient-to-r from-lime-green to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300">
                  {translations[lang].nav.requestInvite}
                </button>
              </div>
            </div>

            {/* Right section with background and mockups */}
            <div className="absolute right-[-280px] w-[900px] h-full z-30">
              <div
                className="absolute inset-0 bg-no-repeat bg-cover z-20 dark:opacity-80 transition-opacity duration-300"
                style={{
                  backgroundImage: 'url(/public/images/bg-intro-desktop.svg)',
                  backgroundPosition: 'left center',
                  backgroundSize: '137% 180%'
                }}
              />
              <img
                src={mockups}
                alt="Mobile mockups"
                className="absolute z-40 w-auto h-[900px] top-[-120px] left-[150px] dark:brightness-90 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile content */}
      <div className="md:hidden px-5 text-center pb-20">
        <h1 className="text-4xl font-public-sans font-light text-dark-blue dark:text-white mb-5 transition-colors duration-300">
          {translations[lang].hero.title}
        </h1>
        <p className="text-grayish-blue dark:text-gray-400 text-body mb-8 transition-colors duration-300">
          {translations[lang].hero.description}
        </p>
        <button className="bg-gradient-to-r from-lime-green to-bright-cyan text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300">
          {translations[lang].nav.requestInvite}
        </button>
      </div>
    </section>
  );
};

export default Hero; 