import { useEffect } from 'preact/hooks';
import { Toaster } from 'react-hot-toast';
import { Link } from "preact-router/match"
import useLocalStorage from './utils/useLocalStorage';
import Router from 'preact-router';
import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import useNav from "./utils/useNav";
import usePlacanStore from './usePlacanStore';
import './app.css'
import "./media-size.css"

export function App() {

  const {
    path,
    handlePathChange
  } = useNav();

  const { updateFormSubmitedTimes } = usePlacanStore();

  const { getData } = useLocalStorage();

  useEffect(() => {
    const data = getData("formJobDataCollected");
    updateFormSubmitedTimes(data);
  }, []);

  return (
    <div id="app" class={"colFlex"}>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <nav id="nav" class={"colFlex"}>
        <h1 class={"defMouse"}>{path.name}</h1>
        <Link
          class={"nav-btn"}
          href={path.to}
          onClick={() => handlePathChange()}>
          {path.nameTo}
        </Link>
      </nav>

      <Router>

        <EPlacan path="/" />

        <ONas path="/piratska-stranka" />

        <div default>
          <h3>Ta stran ne obstaja.</h3>
          <p>Poskusite "/" ali "/piratska-stranka"</p>
        </div>

      </Router>

    </div>
  )
}
