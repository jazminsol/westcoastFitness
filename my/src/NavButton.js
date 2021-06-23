import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavButton() {
    return (
        <div>
            <button className="NavButton">
                <NavLink
                    to="/workoutcontainer"
                    exact
                    >Login
                </NavLink>
            </button>
        </div>
    )
}
