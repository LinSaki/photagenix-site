import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Header from "./components/Header";
import Services from "./components/Services";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Welcome />
        <Benefits />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
