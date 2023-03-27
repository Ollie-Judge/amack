import "./App.css";
import Banner from "./components/banner";
import Download from "./components/download";
import Header from "./components/header";
import Calltoaction from "./components/calltoaction";
import Slogan from "./components/slogan";
import FishRight from "./components/fishRight";
import FishLeft from "./components/fishLeft";
import Reviews from "./components/reviews";
import FishCentre from "./components/fishCentre";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Download />
      <Calltoaction />
      <FishRight />
      <Slogan />
      <FishLeft />
      <Reviews />
      <FishCentre />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
