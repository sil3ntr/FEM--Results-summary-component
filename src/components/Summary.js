import React from "react";
import "../App.css";

export default function Summary (props){
    return(
        <>
            <button className={props.background}>
                    <div className="catagory">
                        <img src={props.icon}>
                        </img>{props.category}
                    </div>
                    <div className="score">{props.score}<div className="result-of100">/ 100</div></div>
                    
            </button>
        </>
    )
}