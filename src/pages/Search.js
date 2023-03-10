import React from "react";
import Searching from "../components/SearchApi";

export default function SearchPage() {
    return (
            <div>
                <p>Here you can search for a poem that contains your search term. 
                    Language of the term must be in english.</p>
                <Searching />
            </div>
    );
};

