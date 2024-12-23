import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError();
    console.log(error)
    return <div>
        
        <h1>oops..! No page found</h1>
        {error && <h1>{error.data}</h1>}
        <NavLink to={'/'}>
            <button> Go Home</button>
        </NavLink>
    </div>
}