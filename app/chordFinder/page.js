'use client'
import "@/app/globals.css";
import { Chord } from 'tonal';
import { useState } from 'react';

export default function Chords() {

    const [value, setValue] = useState("");
    const [chordFinder, setChordFinder] = useState("");
    const [chordTranspose, setChordTranspose] = useState("");


    function findChord(name) {
        if(name.includes('find')){
            const chordsString = name.substring("find".length).trim();
            const chordsArray = chordsString.split(" ");
            const nc = Chord.detect(chordsArray);

            setChordFinder(nc[0])

        } else {
            const info = name.split(" ");
            const nc = Chord.transpose(info[0], info[1]);
            console.log(nc);

            setChordTranspose(nc);
        }    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        findChord(value);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };
    
    
    return (
        <>
        <button className="homeBtn"><a href="/">Go Back</a></button>
        <div className="pages-cont">
            <div className="searchBar">
                <h1 className="searchbar-title">Find or Transpose a Chord:</h1>
                <form className="searchform" onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleInputChange} className="form-input" placeholder=":)"></input>
                    <button type="submit" className="form-button">submit</button>
                </form>
            </div>
            <div className="results">
                {chordFinder && (
                    <div className="results-row">
                        <div className="results-box">
                            <strong className="rTitle">Chords found:</strong>
                            <p className="rContent">{chordFinder}</p>
                        </div>
                    </div>
                )}
                {chordTranspose && (
                    <div className="results-row">
                        <div className="results-box">
                            <strong className="rTitle">Chord transposed:</strong>
                            <p className="rContent">{chordTranspose}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}