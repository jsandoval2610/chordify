'use client'
import "@/app/globals.css";
import { Scale } from 'tonal';
import { useState } from 'react';

export default function Scales() {

    const [value, setValue] = useState("");
    const [scaleInfo, setScaleInfo] = useState({});
    const [scaleDetect, setScaleDetect] = useState([]);
    const [exactScaleDetect, setexactScaleDetect] = useState("");


    function findScale(name) {
        if(name.includes('detect')){
            const chordsString = name.substring("detect".length).trim();
            const chordsArray = chordsString.split(" ");
            const nc = Scale.detect(chordsArray);

            setScaleDetect(nc)
            const dp = Scale.detect(chordsArray, { match: "exact" });
            if(dp){
                setexactScaleDetect(dp[0])
            }

        } else {
            const nc = Scale.get(name);
            console.log(nc);
            setScaleInfo({
                "name": nc.name,
                "notes": nc.notes,
                "tonic": nc.tonic,
        });
        }    
    }


      

    const handleSubmit = (event) => {
        event.preventDefault();
        findScale(value);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
        setScaleDetect([])
        setexactScaleDetect("")
    };

    const groupedEntries = Object.entries(scaleInfo).reduce((acc, entry, index) => {
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
                <h1 className="searchbar-title">Enter or detect a scale:</h1>
                <form className="searchform" onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleInputChange} className="form-input" placeholder=":)"></input>
                    <button type="submit" className="form-button">submit</button>
                </form>
            </div>
            <div className="results">
                {scaleInfo && groupedEntries.map((group, groupIndex) => (
                    <div key={groupIndex} className="results-row">
                        {group.map(([key, value], index) => (
                        <div key={index} className="results-box">
                            <strong className="rTitle">{key}</strong>
                            <p className="rContent">{value}</p>
                        </div>
                        ))}
                    </div>
                ))}
                {scaleDetect.length > 0 && (
                    <div className="scale-cont">
                        <div className="scale-box">
                            <h2>Exact match found:</h2>
                            <div>{exactScaleDetect}</div>
                        </div>
                        <div className="scale-box">
                            <h2>All matches:</h2>
                            <div>{scaleDetect}</div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
        </>
    )
}