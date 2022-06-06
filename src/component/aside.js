import React from "react";
import { NavLink } from "react-router-dom";

function Aside() {
    return (
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/article">
                        Article
                    </NavLink>
                    <NavLink to="/help">
                        Help
                    </NavLink>

                </li>
            </ul>
    )
}

export default Aside