import './App.css';

const jewelDataSample = [
    [1,2,3,4,5,6,7,1],
    [4,5,6,7,1,1,2,3],
    [3,4,5,6,7,7,1,2],
    [2,3,4,5,6,7,1,1],
    [1,2,3,4,5,6,7,1],
    [4,5,6,7,1,1,2,3],
    [3,4,5,6,7,7,1,2],
    [2,3,4,5,6,7,1,1],
]
function App() {
    return (
    <div className="App">
        <JewelTable jewelData={jewelDataSample}/>
    </div>
  );
}


function JewelTable({ jewelData }) {
    return (
        <div className="Jewel-table">
        {
            jewelData?.map(jewelDataRow =>
                <JewelRow rowArray={jewelDataRow} />
            )
        }
        </div>
    )
}

function JewelRow({ rowArray }) {
    return <div className="Jewel-row">
        {
            rowArray?.map(number =>
                <JewelCell number={number}>{number}</JewelCell>
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
