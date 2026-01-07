import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/navbar/MyNavbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainCarousel from './components/main-carousel/MainCarousel';
import TopMessages from './components/top-messages/TopMessages';
import AdsSection from './components/ads-section/AdsSection';
import WeekMessage from './components/week-messages/WeekMessage';
import TrendTopics from './components/trend-topics/TrendTopics';
import SportMessages from './components/sport-messages/SportMessages';
import SponsoredMessages from './components/sponsored-messages/SponsoredMessages';
import FormSection from './components/form-section/FormSection';
import FooterSection from './components/footer-section/FooterSection';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [theme]);

  return (
    <div className={`App ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} min-vh-100`}>
      <Container className={`container w-75 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
        <MyNavbar />
        <MainCarousel />
        <TopMessages></TopMessages>
        <AdsSection></AdsSection>
        <WeekMessage></WeekMessage>
        <TrendTopics></TrendTopics>
        <SportMessages></SportMessages>
        <SponsoredMessages></SponsoredMessages>
        <FormSection></FormSection>
      </Container>

      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
