import { ThemeProvider } from './context/ThemeContext';
import { useTranslations } from './hooks/useTranslations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  const { lang, translations, toggleLanguage } = useTranslations();

  return (
    <ThemeProvider>
      <div className="font-public-sans min-h-screen bg-white dark:bg-dark-blue-900 transition-colors duration-300">
        <Navbar
          lang={lang}
          translations={translations}
          onLanguageChange={toggleLanguage}
        />
        <Hero lang={lang} translations={translations} />
        <Features lang={lang} translations={translations} />
        <Articles lang={lang} translations={translations} />
        <Footer lang={lang} translations={translations} />
      </div>
    </ThemeProvider>
  );
}

export default App;
