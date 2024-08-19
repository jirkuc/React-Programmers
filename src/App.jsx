import "./App.css";
import rawData from "./data/programmers.json";
import PageContainer from "./components/PageContainer/PageContainer";
import Toggler from "./components/Toggler/Toggler";
import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [itemList, setItemList] = useState(rawData.programmers);

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

  const handleDelete = (idToDelete) => {
    const tempItemList = itemList.filter((item) => item.id !== idToDelete);
    setItemList(tempItemList);
  };

  return (
    <div className="App">
      <PageContainer>
        <header>
          <h1>Programátoři</h1>
          <Toggler onChoose={handleChoose} active={activeTab} />
        </header>
        <main>
          <ItemList data={itemList} onDelete={handleDelete} />
        </main>
      </PageContainer>
    </div>
  );
};

export default App;
