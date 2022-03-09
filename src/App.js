import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import WeatherChecker from './components/weatherChecker';

function App() {
  return (
    <div className="App">
      <WeatherChecker/>
    </div>
  );
}

export default App;
