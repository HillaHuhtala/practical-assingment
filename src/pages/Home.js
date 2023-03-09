import React from "react";
import API from '../components/Api';


export default function Home() {
    return (
        <div>
            <h1>Here's a randomly picked William Shakespeare poem for you</h1>
            <API />
            
            <div id="result">
            </div>
        </div>
    );
};