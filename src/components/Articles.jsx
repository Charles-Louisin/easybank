import { useEffect } from 'react';
import currency from '/images/image-currency.jpg';
import restaurant from '/images/image-restaurant.jpg';
import plane from '/images/image-plane.jpg';
import confetti from '/images/image-confetti.jpg';

const Articles = ({ lang, translations }) => {
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

    const elements = document.querySelectorAll('.article-card, .article-title');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const articles = [
    {
      image: currency,
      author: translations[lang].articles.article1.author,
      title: translations[lang].articles.article1.title,
      description: translations[lang].articles.article1.description,
    },
    {
      image: restaurant,
      author: translations[lang].articles.article2.author,
      title: translations[lang].articles.article2.title,
      description: translations[lang].articles.article2.description,
    },
    {
      image: plane,
      author: translations[lang].articles.article3.author,
      title: translations[lang].articles.article3.title,
      description: translations[lang].articles.article3.description,
    },
    {
      image: confetti,
      author: translations[lang].articles.article4.author,
      title: translations[lang].articles.article4.title,
      description: translations[lang].articles.article4.description,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-very-light-gray dark:bg-dark-blue transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="article-title opacity-0 -translate-y-4 text-3xl md:text-4xl font-public-sans font-light text-dark-blue dark:text-white mb-8 text-center md:text-left transition-all duration-700">
          {translations[lang].articles.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="article-card opacity-0 translate-y-8 bg-white dark:bg-dark-blue-800 rounded-lg overflow-hidden transition-all duration-700 hover:shadow-lg"
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-48 object-cover dark:opacity-90 transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-grayish-blue dark:text-gray-400 transition-colors duration-300">
                  {article.author}
                </span>
                <h3 className="text-lg font-public-sans text-dark-blue dark:text-white mt-2 mb-2 hover:text-lime-green dark:hover:text-lime-green cursor-pointer transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-grayish-blue dark:text-gray-400 transition-colors duration-300">
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