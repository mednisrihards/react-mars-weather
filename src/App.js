import React, {useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Forecast from './components/Forecast';
import Week from './components/Week';
import Footer from './components/Footer';

function App() {

  const QUERY = "https://api.nasa.gov/insight_weather/?api_key=Peqr1zWeZJQXXw0rUjje6u18gAPJnPrNRkUMzwGY&feedtype=json&ver=1.0";

  const [loading, setLoading] = useState(true);
  const [sols, setSols] = useState([]);
  const [selectedSol, setSelectedSol] = useState();

  useEffect(() => {
    getWeather();
  }, []);


  const getWeather = async () => {
    
    await fetch(QUERY).then(res => res.json()).then(data => {
      const {
        sol_keys,
        validity_checks,
        ...solData
      } = data
      const temp = Object.entries(solData).map(([sol, data])=> {
        return{
          sol: sol,
          maxTemp: data.AT?.mx || 'No data',
          minTemp: data.AT?.mn || 'No data',
          windSpeed: data.HWS?.av || 0,
          windDir: data.WD?.most_common?.compass_point || 'No data',
          compassDeg: data.WD?.most_common?.compass_degrees || 0,
          date: new Date(data.First_UTC).toLocaleDateString(undefined, {day: 'numeric', month: 'long'})
        }
      });
      setSols(temp);
      setSelectedSol(temp.length-1)
      setLoading(false);
      console.log(data)
    })
    
  }

  return (
    <div className="App">
      <Navbar />
      <Week setSelectedSol = { setSelectedSol } sols = { sols }/>

      {loading ? (
            <div>Loading ...</div>
          ) : (
            <Forecast sol ={sols[selectedSol]}/>
          )}
      <Footer />
    </div>
  );
}

export default App;
