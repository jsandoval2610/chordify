'use client'
import "@/app/globals.css";
import { Key } from 'tonal';
import { useState } from 'react';

export default function Keys() {

    const [value, setValue] = useState("");
    const [keyInfo, setKeyInfo] = useState({});
    const [keyDiagrams, setKeyDiagrams] = useState([]);


    function findKey(name) {
        const letter = name.split(' ')[0];
        if (name.includes("minor")) {
            const nc = Key.minorKey(letter)
            console.log(name, letter, nc)
            console.log(nc.relativeMajor)
            setKeyInfo({
                "tonic": nc.tonic,
                "relative major": nc.relativeMajor,
            });
        
            const natural = nc.natural;
            const harmonic = nc.harmonic;
            const melodic = nc.melodic
            setKeyDiagrams([{
                "type": "natural",
                "tonic": natural.tonic,
                "scale": natural.scale,
                "triads": natural.triads,  
                "chords": natural.chords
            },
            {
                "type": "melodic",
                "tonic": melodic.tonic,
                "scale": melodic.scale,
                "triads": melodic.triads,  
                "chords": melodic.chords
            },
            {
                "type": "harmonic",
                "tonic": harmonic.tonic,
                "scale": harmonic.scale,
                "triads": harmonic.triads,  
                "chords": harmonic.chords
            },
            ]);
        } else {
            const nc = Key.majorKey(letter)
            console.log(name, letter, nc)
            console.log(nc.relativeMajor)
            setKeyInfo({
                "tonic": nc.tonic,
                "relative minor": nc.minorRelative,
                "scale": nc.scale,
                "triads": nc.triads,
                "chords": nc.chords
            });
        }
    }

    // function renderChordDiagrams(chordName) {
    //     const chordShape = chordShapes[chordName];
    //     if (chordShape) {
    //       chordShape.forEach((shape, index) => {
    //         const container = document.getElementById(`chordDiagram-${index}`);
    //         if (container) {
    //           console.log(`Rendering chord: ${chordName}, shape: ${JSON.stringify(shape)}`); // Debug log
    //           draw(container, {
    //             chord: shape.chord,
    //             position: shape.position
    //           });
    //         }
    //       });
    //     } else {
    //       console.error(`Chord shape for ${chordName} not found`);
    //     }
    // }
      

    const handleSubmit = (event) => {
        event.preventDefault();
        findKey(value);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
        setKeyDiagrams([])
    };

    const groupedEntries = Object.entries(keyInfo).reduce((acc, entry, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(entry);
        return acc;
      }, []);
    
    
    return (
        <>
        <button className="homeBtn"><a href="/">Go Back</a></button>
        <div className="pages-cont">
            <div className="searchBar">
                <h1 className="searchbar-title">Enter a Key:</h1>
                <form className="searchform" onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleInputChange} className="form-input" placeholder=":)"></input>
                    <button type="submit" className="form-button">submit</button>
                </form>
            </div>
            <div className="results">
                {keyInfo && groupedEntries.map((group, groupIndex) => (
                    <div key={groupIndex} className="results-row">
                        {group.map(([key, value], index) => (
                        <div key={index} className="results-box">
                            <strong className="rTitle">{key}</strong>
                            <p className="rContent">{value + " "}</p>
                        </div>
                        ))}
                    </div>
                ))}
                {keyDiagrams && keyDiagrams.map((diagram, groupIndex) => (
                    <div key={groupIndex} className="results-row">
                        {Object.entries(diagram).map(([key, value], index) => (
                        <div key={index} className="results-box">
                            <strong className="rTitle">{key}</strong>
                            <p className="rContent">{Array.isArray(value) ? value.join(', ') : value}</p> {/* Join arrays to display them correctly */}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}