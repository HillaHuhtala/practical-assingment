import React from "react";
import API from '../components/Api';


export default function Home() {
    return (
        <div>
            <p>Here's a randomly picked William Shakespeare poem for you. If you wish to see another randomly picked poem, please refresh the site.</p>
            <API />
        </div>
    );
};