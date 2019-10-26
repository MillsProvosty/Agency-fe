import React from "react";
import "./Schedule.scss";
import Nav from "../Nav/Nav";

const Schedule = () => {
    const role = 'volunteer'
    return (
        <section>
            <Nav />
            {role === "volunteer" && <Opportunity />}
            {role === "client" && <Opportunity />}
        </section>
    )
}

export default Schedule;