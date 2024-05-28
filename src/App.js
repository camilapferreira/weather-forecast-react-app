import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Weather Forecast App</h1>
          <Weather />
          <button className="btn btn-primary">Search City</button>
        </div>
      </header>
    </div>
  );
}

export default App;
