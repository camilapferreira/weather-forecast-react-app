import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/camilapferreira"
              target="_blank"
              rel="noreferrer"
            >
              Camila P. Ferreira{" "}
            </a>
            and it is{" "}
            <a
              href="https://github.com/camilapferreira/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              on GitHub{" "}
            </a>
            and
            <a
              href="https://react-weather-app-city.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify{" "}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
