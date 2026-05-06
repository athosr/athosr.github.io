import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white/72 dark:bg-gray-900/72 pt-20 backdrop-blur-[2px]">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

