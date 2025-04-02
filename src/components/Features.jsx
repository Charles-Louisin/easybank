import { useEffect } from 'react';
import iconOnline from '/images/icon-online.svg';
import iconBudgeting from '/images/icon-budgeting.svg';
import iconOnboarding from '/images/icon-onboarding.svg';
import iconApi from '/images/icon-api.svg';

const Features = ({ lang, translations }) => {
  return (
    <section className="py-16 md:py-24 bg-light-grayish-blue dark:bg-dark-blue-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left mb-12 w-full md:w-128 mx-auto md:mx-0 ">
          <h2 className="text-3xl md:text-4xl font-public-sans font-light text-dark-blue dark:text-white mb-5">
            {translations[lang].features.title}
          </h2>
          <p className="text-grayish-blue dark:text-gray-400 text-body">
            {translations[lang].features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: iconOnline,
              title: translations[lang].features.onlineBanking.title,
              description: translations[lang].features.onlineBanking.description
            },
            {
              icon: iconBudgeting,
              title: translations[lang].features.simpleBudgeting.title,
              description: translations[lang].features.simpleBudgeting.description
            },
            {
              icon: iconOnboarding,
              title: translations[lang].features.fastOnboarding.title,
              description: translations[lang].features.fastOnboarding.description
            },
            {
              icon: iconApi,
              title: translations[lang].features.openAPI.title,
              description: translations[lang].features.openAPI.description
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center md:text-left hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex justify-center md:justify-start mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 dark:opacity-90"
                />
              </div>
              <h3 className="text-xl font-public-sans text-dark-blue dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-grayish-blue dark:text-gray-400 text-sm">
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