import { Link } from "preact-router/match"
import Router from 'preact-router';
import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import useNav from "./utils/useNav";
import './app.css'


export function App() {

  const {
    path,
    handlePathChange
  } = useNav()

  return (
    <div id="app">

      <nav id="nav">
        <h1>{path.name}</h1>
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

      <div id="up-btn">
        To the top
      </div>

    </div>
  )
}
