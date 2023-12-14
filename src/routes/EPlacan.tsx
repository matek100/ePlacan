import { useEffect, useState } from "preact/hooks"
import Form from "../components/Form";
import Filter from "../components/Filter";
import Table from "../components/Table";
import usePlacanStore from "../usePlacanStore";

export default function EPlacan(
    { path }: { path: string }
) {

    const { setLoc } = usePlacanStore();

    useEffect(() => {
        setLoc(path)
    }, []);

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