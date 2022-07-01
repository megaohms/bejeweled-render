import './App.css';
import { generateGrid } from './generateJewelData'

function App() {
    return (
    <div className="App">
        <JewelTable />
    </div>
  );
}


function JewelTable() {
    const jewelData = generateGrid()
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
