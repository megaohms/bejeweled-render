import { useState } from 'react'
import './App.css';
import { jewelDataDefault, generateGrid } from './generateJewelData'

function App() {
    return (
    <div className="App">
        <JewelTable />
    </div>
  );
}


function JewelTable() {
    // const [jewelData, updateJewelData] = useState(jewelDataDefault)
    const newData = generateGrid()
    const jewelData = newData
    // updateJewelData(newData)
    return (
        <div className="Jewel-table">
        {
            jewelData?.map((jewelDataRow, yIdx) =>
                <JewelRow rowArray={jewelDataRow} key={yIdx}/>
            )
        }
        </div>
    )
}

function JewelRow({ rowArray }) {
    return <div className="Jewel-row">
        {
            rowArray?.map((jewelNumber, jewelIdx) =>
                <JewelCell number={jewelNumber} key={jewelIdx} />
            )
        }
    </div>
}

function JewelCell({ number }) {
    return (
        <div className={`Jewel-cell-${number}`} />
    )
}

export default App;
