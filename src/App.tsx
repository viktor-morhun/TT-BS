import "./App.css";
import React, { useState } from "react";
import Header from "./modules/Header/Index";
import Timer from "./modules/Timer";
import Footer from "./modules/Footer";
import Lorem from "./modules/Lorem";

const App: React.FC = () => {
  const [timePassed, setTimePassed] = useState(false);

  const handleTimerEnd = () => {
    setTimePassed(!timePassed);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header timePassed={timePassed} />
        <Lorem />
        <Lorem />
        <Lorem />
        <Timer onTimerEnd={handleTimerEnd} />
        <Lorem />
        <Lorem />
        <Lorem />
        <Footer timePassed={timePassed} />
      </div>
    </>
  );
};

export default App;
