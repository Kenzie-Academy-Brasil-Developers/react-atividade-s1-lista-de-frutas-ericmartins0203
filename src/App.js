import "./App.css";
import FruitList from "./components/index";

function App() {
  return (
    <div className="App">
      <FruitList
        fruitList={[
          { name: "banana", color: "yellow", price: 2 },
          { name: "cherry", color: "red", price: 3 },
          { name: "strawberry", color: "red", price: 4 },
          { name: "apple", color: "red", price: 5 },
        ]}
      />
    </div>
  );
}

export default App;
