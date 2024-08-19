import "./App.css";
import rawData from "./data/programmers.json";
import PageContainer from "./components/PageContainer/PageContainer";
import Toggler from "./components/Toggler/Toggler";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChoose = (name) => {
    switch (name) {
      case "list-of-programmers": {
        setActiveTab(1);
        break;
      }
      case "task-planner": {
        setActiveTab(2);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div className="App">
      <PageContainer>
        <header>
          <h1>Programátoři</h1>
          <Toggler onChoose={handleChoose} active={activeTab} />
        </header>
        <main>
          <p>bla</p>
        </main>
      </PageContainer>
    </div>
  );
};

export default App;
