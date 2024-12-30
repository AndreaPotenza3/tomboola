import Sidebar from "./Sidebar";

export default function Table() {
    const numbers = []

    for (let i = 0; i < 90; i++) {
        const element = i + 1;

        numbers.push(element)
    }
    console.log(numbers)
    return (
        <div className='container'>
            <div className="row">
                <ul className='table'>
                    {numbers.map((i) => (

                        <li className='slot'>
                            {i}
                        </li>
                    ))}
                </ul>
                <div>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}