import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WheatherApp">
          {/* <form className="formSearch mb-4 caps" onSubmit={handleSearch}> */}
          <form className="mb-4">
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  // onChange={updateCity}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-primary" type="Submit">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col wheatherInfoA">
              <div className="clearfix">
                <div className="float-left">
                  <img
                    src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
                    className="wIcon me-2"
                    alt="icon"
                  />
                </div>
                <div className="wTemperature float-left  ">
                  27
                  <span className="wUnit ps-1">ºC</span>
                </div>
                <div className="wOtherInfo float-left ">
                  <ul>
                    <li>Precipitation: 0%</li>
                    <li>Humidity: 34%</li>
                    <li>Wind: 14 km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col wheatherInfoB">
              <div className="clearfix wOtherInfo">
                <ul>
                  <li className="city">Lisbon</li>
                  <li className="dataDes">Thursday 16:00</li>
                  <li>Sunny</li>
                </ul>
              </div>
            </div>
          </div>

          <footer>
            <div className="beforeFooter"></div>
            This project was coded by Maria João Hortega and is
            <a
              href="https://github.com/mjh1968/wheather-react-app"
              targert="_blank"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://elegant-stonebraker-0df042.netlify.app"
              targert="_blank"
            >
              {" "}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
