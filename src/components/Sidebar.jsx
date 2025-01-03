import { useState } from "react"

export default function Sidebar() {

    const [randomNumber, setRandomNumber] = useState('-')

    function callNumber() {
        const minCeiled = Math.ceil(1)
        const maxFloored = Math.floor(90)

        setRandomNumber(
            Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
        )
    }

    function reset() {
        setRandomNumber('-')
    }



    return (
        <>
            <div className="btns">
                <div className="counter">
                    <p>{randomNumber}</p>
                </div>
                <button onClick={callNumber} className="btn">Estrai un numero</button>
                <button onClick={reset} className="btn">Reset</button>
            </div>
        </>
    )
}