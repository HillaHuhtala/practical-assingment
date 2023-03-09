import axios, { formToJSON } from "axios";
import { useState, useEffect } from "react";

const URL = 'https://poetrydb.org/author,title/William%20Shakespeare;sonnet%202';
const i = Math.floor(Math.random() * 101);


export default function API() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            const result = response.data[0];
            setTitle(result.title);
            setText(result.lines);
            setAmount(Number(result.linecount));
        }).catch (error => {
            alert(error);
        });
        
        
        
    }, []);
    
    console.log(amount);
    let lines = new Array()
    for (let x = 0; x < amount; x++) {
        lines += text[x] + '</br>';
        console.log(lines);
    };

    
    /*for (const line of Array.prototype.values.call(lines)) {
        document.getElementById('result').innerHTML += line + '</br>' ;
    };

    /*document.getElementById('result').innerHTML = text.slice(',','</br>')
    /*let y = 0;

    while (text[y]) {
        document.getElementById('result').innerHTML = text[y] + '</br>';
        y++;
    };*/
   

    

    return(
        <div>
            <h3>{title}</h3>
            <p>{lines}</p>
        </div>
    );

};