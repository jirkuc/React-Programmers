import "./App.css";
import { useEffect, useState } from "react";
import rawData from "./data/programmers.json";
import PageContainer from "./components/PageContainer/PageContainer";
import Toggler from "./components/Toggler/Toggler";
import ItemList from "./components/ItemList/ItemList";
import ItemForm from "./components/ItemForm/ItemForm";
import PlannerForm from "./components/PlannerForm/PlannerForm";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [listOfItems, setListOfItems] = useState(rawData.programmers);
  const [validForm, setValidForm] = useState(false);
  const [newItem, setNewItem] = useState({
    id:
      listOfItems.length > 0
        ? Math.max(...listOfItems.map((item) => item.id)) + 1
        : 1,
    name: "",
    level: "",
  });
  const [programmersCapacity, setProgrammersCapacity] = useState(0);

  const handleChoose = (name) => {
    switch (name) {
      case "list-of-items": {
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
    const tempListOfItem = listOfItems.filter((item) => item.id !== idToDelete);
    setListOfItems(tempListOfItem);
  };

  const handleChange = (e) => {
    const source = e.target.name;
    const val = e.target.value;
    let updatedItem;
    switch (source) {
      case "name": {
        updatedItem = { ...newItem, name: val };
        break;
      }
      case "level": {
        updatedItem = { ...newItem, level: val };
        break;
      }
      default:
        break;
    }
    setNewItem(updatedItem);
    validateData(updatedItem);
  };

  const validateData = (item) => {
    const { name, level } = item;
    if (name.trim().length === 0 || level.trim().length === 0) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  const handleAdd = () => {
    setListOfItems((listOfItems) => {
      return [...listOfItems, newItem];
    });
    const updatedItem = {
      id: newItem.id + 1,
      name: "",
      level: "",
    };
    setNewItem(updatedItem);
    validateData(updatedItem);
  };

  useEffect(() => {
    let totalProgrammersCapacity = 0;
    listOfItems.forEach((item) => {
      switch (item.level) {
        case "Junior": {
          totalProgrammersCapacity += 100;
          break;
        }
        case "Senior": {
          totalProgrammersCapacity += 200;
          break;
        }
        default:
          break;
      }
    });
    setProgrammersCapacity(totalProgrammersCapacity);
  }, [listOfItems]);

  useEffect(() => {
    console.log(programmersCapacity);
  }, [programmersCapacity]);

  return (
    <div className="App">
      <PageContainer>
        <header>
          <h1>Programátoři</h1>
          <Toggler onChoose={handleChoose} active={activeTab} />
        </header>
        <main>
          <ItemList data={listOfItems} onDelete={handleDelete} />
          <ItemForm
            valid={validForm}
            onChange={handleChange}
            onAdd={handleAdd}
            data={newItem}
          />
          <PlannerForm data={programmersCapacity} />
        </main>
      </PageContainer>
    </div>
  );
};

export default App;
