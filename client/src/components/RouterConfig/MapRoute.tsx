import React from 'react'
import {Route, Routes} from 'react-router-dom'


interface RouteElement {
    path: string,
    component: ()=> JSX.Element
}
interface Props {
    routes: RouteElement[]
}

function MapRoute(props: Props) {

    return (
        <Routes>
            {    
                props.routes.map((route: RouteElement, index: number) => {
                    return (
                    <Route
                        path={`${route.path}`}
                        element={<route.component/>}
                        key={index}
                    />
                    );
            })}
        </Routes>
    )
}

export default MapRoute;