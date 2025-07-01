import type React from "react";


export const Error: React.FC = () => {
    return(
        <>
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Tasks not found!</p>
        </div>
        </>
    )
}