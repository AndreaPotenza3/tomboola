import { useState } from "react"

export default function Sidebar({ item, call, resetNum }) {


    return (
        <>
            <div className="btns">
                <div className="counter">
                    <p>{item}</p>
                </div>
                <button onClick={call} className="btn">Estrai un numero</button>
                <button onClick={resetNum} className="btn">Reset</button>
            </div>
        </>
    )
}