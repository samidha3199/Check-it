import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const error = useRouteError()
    console.log(error)
    return(
        <>
            <div className="error__container">
                <h1>Opps!!</h1>
                <h2>Some thing went wrong!</h2>
                <h3>{error.status + " " + error.statusText}</h3>
            </div>
        </>
    )
}

export default Error