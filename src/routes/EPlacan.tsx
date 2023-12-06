import { useState } from "preact/hooks"
import PayForm from "../components/PayForm";
import PayFilter from "../components/PayFilter";
import PayTable from "../components/PayTable";
import "./eplacan.css";

export default function EPlacan(
    { path }: { path: string }
) {

    const [formOpen, setFormOpen] = useState(false);

    return (<>

        <PayForm
            open={formOpen}
            setOpen={setFormOpen}
        />

        <PayTable
            formOpen={formOpen}
        />

        <PayFilter />

    </>)
}