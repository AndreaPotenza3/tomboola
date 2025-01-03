import { useState } from "react"

export default function Sidebar() {


    const [extractedNums, setExtractedNums] = useState([])
    const [showedNumber, setShowedNumber] = useState(null)
    let num
    function callNumber() {
        // const minCeiled = Math.ceil(1)
        // const maxFloored = Math.floor(90)
        do {
            num = Math.floor(Math.random() * 90 + 1)
        } while (extractedNums.includes(num))

        setExtractedNums((extractedNums) => [...extractedNums, num])

        setShowedNumber(num)

    }

    console.log(extractedNums)

    function resetNumber() {
        setExtractedNums([])
        setShowedNumber(null)
    }



    return (
        <>
            <div className="btns">
                <div className="counter">
                    <p>{showedNumber}</p>
                </div>
                <button onClick={callNumber} className="btn">Estrai un numero</button>
                <button onClick={resetNumber} className="btn">Reset</button>
            </div>
        </>
    )
}