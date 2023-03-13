import React from "react";
import Form from "./form";
import Navigation from "./navigation";

const Header = ({history, handleSubmit}) => {
    return(<div>
        <h1>Snapshoot</h1>
        <Form history = {history} handleSubmit={handleSubmit}></Form>
        <Navigation></Navigation>
    </div>)
}

export default Header;