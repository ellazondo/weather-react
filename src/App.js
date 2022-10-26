import "./App.css";
import useState from "usestate";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function weatherResponse(response) {
    console.log({ response });
    setMessage(
      <ul>
        <li>
          It is currently {response.data.main.temp}
          °C in {response.data.name}{" "}
        </li>
        <li>Description: {response.data.weather[0].description} </li>
        <li>Humidity: {response.data.main.humidity}% </li>
        <li>Wind: {response.data.wind.speed} km/hr </li>
        <li>
          {" "}
          <img
            // eslint-disable-next-line
            src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
            alt="weather img"
            width="42"
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "21f3a11c368ff6b8b2c89b2723f2e880";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(weatherResponse);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (message) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
        {message}
      </div>
    );
  } else {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={changeCity}
          />
          <input type="submit" value="Serach" />
        </form>
      </div>
    );
  }
}

export default App;
