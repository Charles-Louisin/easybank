import { useEffect } from 'react';
import currency from '/images/image-currency.jpg';
import restaurant from '/images/image-restaurant.jpg';
import plane from '/images/image-plane.jpg';
import confetti from '/images/image-confetti.jpg';

const Articles = ({ lang, translations }) => {
  return (
    <section className="py-16 md:py-24 bg-very-light-gray dark:bg-dark-blue transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-public-sans font-light text-dark-blue dark:text-white mb-8 text-center md:text-left">
          {translations[lang].articles.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image: currency,
              author: translations[lang].articles.article1.author,
              title: translations[lang].articles.article1.title,
              description: translations[lang].articles.article1.description
            },
            {
              image: restaurant,
              author: translations[lang].articles.article2.author,
              title: translations[lang].articles.article2.title,
              description: translations[lang].articles.article2.description
            },
            {
              image: plane,
              author: translations[lang].articles.article3.author,
              title: translations[lang].articles.article3.title,
              description: translations[lang].articles.article3.description
            },
            {
              image: confetti,
              author: translations[lang].articles.article4.author,
              title: translations[lang].articles.article4.title,
              description: translations[lang].articles.article4.description
            }
          ].map((article, index) => (
            <article
              key={index}
              className="bg-white dark:bg-dark-blue-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover dark:opacity-90 hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-grayish-blue dark:text-gray-400">
                  {article.author}
                </span>
                <h3 className="text-lg font-public-sans text-dark-blue dark:text-white my-2 hover:text-lime-green cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-sm text-grayish-blue dark:text-gray-400">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles; 