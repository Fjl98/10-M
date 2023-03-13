import React from "react";
import { useState } from "react";

const Form = ({handleSubmit}) => {
    conat [searchEntry,setSearchEntry] = useState("");

    const updateSearchInput = () => {
        setSearchEntry(e.target.value);

    };

    return(
        <form className="search-form" onSubmit={e => handleSubmit(e,history,searchEntry)}>

            <input type="text" name="search" placeholder="buscar..." onChange={updateSearchInput} value={searchEntry}></input>
            <button type="submit" className={`search-buttton ${searchEntry.trim() ? "active":null}`} disabled = {!searchEntry.trim()}>
                Buscar
            </button>
        </form>
    );
};

export default Form;