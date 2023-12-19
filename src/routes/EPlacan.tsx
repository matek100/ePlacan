import { useState } from "preact/hooks"
import { Link } from "preact-router/match"
import Form from "../components/Form";
import Filter from "../components/Filter";
import Table from "../components/Table";

export default function EPlacan() {

    const [formOpen, setFormOpen] = useState(false);

    return (<>

        <nav class={"nav colFlex"}>
            <h1 class={"defMouse"}>ePlačan</h1>
            <Link
                href="/piratska-stranka">
                <button class={"navBtn"}>Piratski program</button>
            </Link>
        </nav>

        <Form
            open={formOpen}
            setOpen={setFormOpen}
        />

        <Filter />

        <Table
            formOpen={formOpen}
        />

    </>)
}