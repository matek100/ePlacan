import { useState } from "preact/hooks"
import Form from "../components/Form";
import Filter from "../components/Filter";
import Table from "../components/Table";

export default function EPlacan() {

    const [formOpen, setFormOpen] = useState(false);

    return (<>

        <Form
            open={formOpen}
            setOpen={setFormOpen}
        />

        <Table
            formOpen={formOpen}
        />

        <Filter />

    </>)
}