import { Link } from "preact-router/match"
import Router from 'preact-router';
import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import useNav from "./utils/useNav";
import './app.css'
import "./media-size.css"


export function App() {

  const {
    path,
    handlePathChange
  } = useNav()

  return (
    <div id="app" class={"colFlex"}>

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
