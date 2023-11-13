import { useState } from "preact/hooks";

export default function useNav() {

    const [path, setPath] = useState({
        to: window.location.pathname === "/" ?
            "/" :
            "piratska-stranka",
        name: window.location.pathname === "/" ?
            "ePlačan" :
            "Piratski program",
        nameTo: window.location.pathname === "/" ?
            "Piratski program" :
            "ePlačan",
    });

    const handlePathChange = () => {
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

    return { path, handlePathChange }
}