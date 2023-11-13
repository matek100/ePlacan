import { useEffect, useState } from "preact/hooks";
import { Link } from "preact-router/match"
import Router from 'preact-router';
import EPlacan from './routes/EPlacan';
import ONas from './routes/ONas';
import './app.css'


export function App() {

  const [path, setPath] = useState({
    to: window.location.pathname === "/" ?
      "piratska-stranka" :
      "/",
    name: window.location.pathname === "/" ?
      "ePlačan" :
      "Piratski program",
    nameTo: window.location.pathname === "/" ?
      "Piratski program" :
      "ePlačan",
  });

  const handlePathChange = () => {
    console.log(path)
    path.to === "/" ?
      setPath({
        to: "/piratska-stranka",
        name: "Piratska stranka",
        nameTo: "ePlačan",
      }) :
      setPath({
        to: "/",
        name: "ePlačan",
        nameTo: "Piratski program"
      })
  }

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
