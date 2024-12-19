import styles from "./app.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWheather from "./hooks/useWheather";

function App() {
  const { fetchWheather, weather, hasWeatherData, loading, notFound } =
    useWheather();

  return (
    <>
      <h1 className={styles.title}>Consultor Meteorológico</h1>

      <div className={styles.container}>
        <Form fetchWheather={fetchWheather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  );
}

export default App;
