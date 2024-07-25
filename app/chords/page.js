'use client'
import "@/app/globals.css";
import { Chord } from 'tonal';
import { useState, useEffect } from 'react';
import { draw } from 'vexchords';
import { chordShapes } from "@/chordShapes";

export default function Chords() {

    const [value, setValue] = useState("");
    const [chordInfo, setChordInfo] = useState({});
    const [chordDiagrams, setChordDiagrams] = useState([]);


    function findChord(name) {
        const nc = Chord.get(name);
        setChordInfo({
            "name": nc.name,
            "quality": nc.quality,
            "symbol": nc.symbol,
            "type": nc.type,
            "root": nc.root,
            "notes": nc.notes
        });
        
        setChordDiagrams(chordShapes[name] || []);
    }

    function renderChordDiagrams(chordName) {
        const chordShape = chordShapes[chordName];
        if (chordShape) {
          chordShape.forEach((shape, index) => {
            const container = document.getElementById(`chordDiagram-${index}`);
            if (container) {
            //   console.log(`Rendering chord: ${chordName}, shape: ${JSON.stringify(shape)}`); // Debug log
              draw(container, {
                chord: shape.chord,
                position: shape.position
              });
            }
          });
        } else {
          console.error(`Chord shape for ${chordName} not found`);
        }
    }
      

    const handleSubmit = (event) => {
        event.preventDefault();
        findChord(value);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
        setChordDiagrams([])
    };

    const groupedEntries = Object.entries(chordInfo).reduce((acc, entry, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(entry);
        return acc;
      }, []);

    useEffect(() => {
      if(value) {
        renderChordDiagrams(value, 'chordDiagram');
      }
    }, [chordDiagrams])
    
    
    return (
        <>
        <button className="homeBtn"><a href="/">Go Back</a></button>
        <div className="pages-cont">
            <div className="searchBar">
                <h1 className="searchbar-title">Enter a chord:</h1>
                <form className="searchform" onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleInputChange} className="form-input" placeholder=":)"></input>
                    <button type="submit" className="form-button">submit</button>
                </form>
            </div>
            <div className="results">
                {chordInfo && groupedEntries.map((group, groupIndex) => (
                    <div key={groupIndex} className="results-row">
                        {group.map(([key, value], index) => (
                        <div key={index} className="results-box">
                            <strong className="rTitle">{key}</strong>
                            <p className="rContent">{value}</p>
                        </div>
                        ))}
                    </div>
                ))}
                <div className="images" id="chordImages">
                    {chordDiagrams && chordDiagrams.map((shape, index) => (
                        <div key={index} id={`chordDiagram-${index}`} className="chord-diagram"></div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}