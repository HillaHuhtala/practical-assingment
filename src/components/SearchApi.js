import { useState } from "react";
import uuid from "react-uuid";


const BASE = 'https://poetrydb.org/lines/';


export default function Searching() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState([]);

    const [term, setTerm] = useState('');

    async function GetPoem(e) {
        e.preventDefault();
        if (term.length > 0) {
            console.log(term);
            const apiUrl = BASE + term;
            try {
                console.log(apiUrl);
                const response = await fetch(apiUrl);
                console.log(response);
                if (response.ok) {
                    let i = 0;
                    const json = await response.json();
                    console.log(json);
                    for (let j = 0; Number(json[j].linecount) > 50; j++) {
                        i++
                        console.log(json[i].linecount);
                        console.log(j);
                    };
                    const poem = json[i];
                    console.log(poem.linecount);
                    setAuthor(poem.author);
                    setTitle(poem.title);
                    setText(poem.lines);
                }
                else {
                    alert('Error retrieving poem');
                }
            } catch (err) {
                alert(err);
            }
        } else {
            return;
        }

    };

    return (
        <>
            <div>
                <form onSubmit={GetPoem} id="searchForm" className="form-inline">
                    <div>
                        <label for="term">Search term:</label>
                        <input type="text" id="term" value={term} onChange={e => setTerm(e.target.value)}></input>
                        <button className="btn btn-outline-primary btn-lg">Search</button>
                    </div>
                </form>
            </div>
            <div id="result">
                <h4>{author}</h4>
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
        </>
    );

};