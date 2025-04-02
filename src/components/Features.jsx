import { useEffect } from 'react';
import iconOnline from '/images/icon-online.svg';
import iconBudgeting from '/images/icon-budgeting.svg';
import iconOnboarding from '/images/icon-onboarding.svg';
import iconApi from '/images/icon-api.svg';

const Features = ({ lang, translations }) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.feature-card, .feature-title, .feature-description');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const features = [
    {
      icon: iconOnline,
      title: translations[lang].features.onlineBanking.title,
      description: translations[lang].features.onlineBanking.description,
    },
    {
      icon: iconBudgeting,
      title: translations[lang].features.simpleBudgeting.title,
      description: translations[lang].features.simpleBudgeting.description,
    },
    {
      icon: iconOnboarding,
      title: translations[lang].features.fastOnboarding.title,
      description: translations[lang].features.fastOnboarding.description,
    },
    {
      icon: iconApi,
      title: translations[lang].features.openAPI.title,
      description: translations[lang].features.openAPI.description,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-light-grayish-blue dark:bg-dark-blue-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left md:max-w-lg mb-12 md:mb-16">
          <h2 className="feature-title opacity-0 -translate-y-4 text-3xl md:text-4xl font-public-sans font-light text-dark-blue dark:text-white mb-5 transition-all duration-700">
            {translations[lang].features.title}
          </h2>
          <p className="feature-description opacity-0 -translate-y-4 text-grayish-blue dark:text-gray-400 text-body transition-all duration-700 delay-200">
            {translations[lang].features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0 translate-y-8 text-center md:text-left transition-all duration-700 hover:translate-y-[-4px]"
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex justify-center md:justify-start mb-6 transition-transform duration-300">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="h-16 dark:opacity-90 transition-all duration-300" 
                />
              </div>
              <h3 className="text-xl font-public-sans text-dark-blue dark:text-white mb-4 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-grayish-blue dark:text-gray-400 text-sm transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 