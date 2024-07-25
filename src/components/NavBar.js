import "@/app/globals.css"
import Link from "next/link";

function NavBar() {


    return (
        <div className="mainNav"> 
            <div className="container">
                <a href="/chords">
                    <button className="navBtn">
                        <h3 className="btn-words">Chords</h3>
                    </button>
                </a>
                <a href="/keys">
                    <button className="navBtn">
                        <h3 className="btn-words">Keys</h3>
                    </button>
                </a>
            </div>
            <div className="container">
                <a href="/scales">
                    <button className="navBtn">
                        <h3 className="btn-words">Scales</h3>
                    </button>
                </a>
                <button className="navBtn">
                    <h3 className="btn-words">Intervals</h3>
                </button>
                <a href="/chordFinder">
                    <button className="navBtn">
                        <h3 className="btn-words">More Chords</h3>
                    </button>
                </a>
            </div>
        
        </div>
    )
}

export default NavBar;