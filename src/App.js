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


function App() {
  return (
    <div className="App">
      <Container className='bg-white container w-75'>
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
