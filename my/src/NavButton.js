import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavButton() {
    return (
        <div>
            <button>
                <NavLink
                    to="/workouts"
                    exact
                    >Login
                </NavLink>
            </button>
        </div>
    )
}