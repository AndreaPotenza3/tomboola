import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Table() {
    const [extractedNums, setExtractedNums] = useState([])
    const [showedNumber, setShowedNumber] = useState(null)

    let num = null
    function callNumber() {
        // const minCeiled = Math.ceil(1)
        // const maxFloored = Math.floor(90)
        do {
            num = Math.floor(Math.random() * 90 + 1)
        } while (extractedNums.includes(num))

        setExtractedNums((prevExtracted) => [...prevExtracted, num])
        setShowedNumber(num)
        console.log(num)
    }



    console.log(extractedNums)

    function resetNumber() {
        setExtractedNums([])
        setShowedNumber(null)
    }

    const numbers = []


    for (let i = 0; i < 90; i++) {
        const element = i + 1;

        numbers.push(element)

    }


    return (
        <div className='container'>
            <div className="row">
                <ul className='table'>
                    {numbers.map((num) => (
                        <li key={num} className={` ${extractedNums.includes(num) ? 'active' : 'slot'}`}>
                            {num}
                        </li>
                    ))}
                </ul>
                <div>
                    <Sidebar item={showedNumber} call={() => callNumber()} resetNum={() => resetNumber()} />
                </div>
            </div>
        </div >
    )
}