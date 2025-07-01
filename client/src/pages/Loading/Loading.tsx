import type React from "react";
import "../../scss/Loading/Loading.scss";

export const Loading: React.FC = () => {
    return(
        <>
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading ...</p>
        </div>
        </>
    )
}