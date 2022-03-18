import Nav from "./Components/Nav";
import SecondNav from "./Components/SecondNav";
import Tab from "./Components/Tab";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <div className="sidebar">
          <p>side bar</p>
        </div>
        <div className="body-section">
          <SecondNav />
          <Tab />
        </div>
      </div>
    </div>
  );
}

export default App;
