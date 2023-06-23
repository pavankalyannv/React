import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return <h1> {err.status} OOps!</h1>
}

export default Error;