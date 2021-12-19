import React from 'react'
import {Link, useResolvedPath, useMatch} from 'react-router-dom'

interface Props {
    label: string, 
    to: string, 
    className: string
}

const LinkMenu = ({label, to, className}: Props) => {
    const resolve = useResolvedPath(to)
    const match = useMatch({path: resolve.pathname, end: true} )
    return (
        <li className = {`${className} ${match ? 'active': ''}`}>
            <Link to={to}>
            {label}
            </Link>
        </li>
    )
}

export default LinkMenu;
