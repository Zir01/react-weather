import React from 'react';
import './App.css';
import { IWeatherResponse, OpenWeatherClient } from './api/OpenWeatherClient';
import WeatherItem from './components/WeatherItem';

const App: React.FC = () => {

  const [weatherList, setWeatherList] = React.useState<IWeatherResponse[]>([]);
  const [hideLoading, setHideLoading] = React.useState<boolean>(false);



  React.useEffect(() => {
    const api = new OpenWeatherClient();
    // Load weather for all Aussie cities on initial load
    (async () => {
      const weatherData = await api.getWeatherForAllCitiesAsync();
      setWeatherList(weatherData);
      setHideLoading(true);
    })();
  }, [])




  return (
    <div className="App">
      <h3>Current weather Australia</h3>
      <h4 hidden={hideLoading} >Please wait... loading weather</h4>
      <div className='container'>
        {weatherList.map((item, index) => (
          <WeatherItem key={item.id} weatherData={item} ></WeatherItem>
        ))}
      </div>
    </div>
  );
}

export default App;
