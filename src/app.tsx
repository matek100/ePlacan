import { useEffect } from 'preact/hooks';
import { Toaster } from 'react-hot-toast';
import useLocalStorage from './utils/useLocalStorage';
import Router from 'preact-router';
import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import usePlacanStore from './usePlacanStore';
import './app.css'
import "./media-size.css"

export function App() {

  const { updateFormSubmitedTimes } = usePlacanStore();

  const { getData } = useLocalStorage();

  useEffect(() => {
    const data = getData("formJobDataCollected");
    updateFormSubmitedTimes(data ? data : 0);
  }, []);

  return (
    <div id="app" class={"colFlex"}>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <Router>

        <EPlacan path="/" />

        <ONas path="/piratska-stranka" />

        <div default>
          <h3>Ta stran na tej domeni ne obstaja.</h3>
          <p>Poskusite "/" ali "/piratska-stranka"</p>
        </div>

      </Router>

    </div>
  )
}
