import React from "react";

import "../styles/titre.css";

function Titre (props) {
    return <h2 className="title">{props.text}</h2>;
}

export default Titre;