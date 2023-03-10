import axios from "axios";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

const URL = 'https://poetrydb.org/author/William%20Shakespeare';
const i = Math.floor(Math.random() * 101);


export default function API() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState([]);


    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                const result = response.data[i];
                setTitle(result.title);
                setText(result.lines);
            }).catch(error => {
                alert(error);
            });



    }, []);



    return (
        <div>
            <h3>{title}</h3>
            <table align="center">
                <tbody>
                    {text.map(text => (
                        <tr key={uuid()}>
                            <td>{text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};