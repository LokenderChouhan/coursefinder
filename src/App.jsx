import "./App.css";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Steps from "./Components/Steps";
import Events from "./Components/Events";
// import Reviews from "./Components/Reviews";
import Updates from "./Components/Updates";
import Footer from "./Components/Footer";
import Reviews1 from "./Components/Review1";
function App() {
  return (
    <div className="text-center relative flex flex-col gap-6">
      <Header />
      <Services />
      <Steps />
      <Events />
      <Reviews1 />
      <Updates />
      <Footer />
    </div>
  );
}

export default App;
