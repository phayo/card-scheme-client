import React, {useContext, useState} from 'react'
import './log.scss';
import CardContext from '../context/card/cardContext'


export default function Logs() {
    const [startInput, setStartInput] = useState("");
    const [startLimit, setStartLimit] = useState("");
    const {getCardStats, failure, stats} = useContext(CardContext);
    const {success, start, limit, size, payload} = stats;
    const hitArray = Object.keys(payload);
    const arr = hitArray.reduce((acc, item, index) => {        
        acc.push(
            {
                num: ++index,
                card: item,
                hit: payload[item]
            }
        );
        return acc;
    }, [])    

    const handleStartChange = e =>{
        const val = e.target.value;
        if (val.match(/\d{0,2}/)){
            setStartInput(val);
        }
    }

    const handleLimitChange = e =>{
        const val = e.target.value;
        if (val.match(/\d{0,2}/)){
            setStartLimit(val);
        }
    }

    const handleSubmit = () => {
        getCardStats(parseInt(startInput), parseInt(startLimit));
        setStartInput("");
        setStartLimit("");
    }

    return (
        <>
            <div className="heading">
                <h1>Card Verification Logs</h1>
                <p>Enter page number and page limit</p>
            </div> 
            <div className="input" >
                <div className="forstart">
                    <label htmlFor="start">PAGE</label>
                    <input type="text" 
                    id="start"
                    className="start"
                    inputMode='numeric' 
                    pattern="\d{0,2}"
                    value={startInput}
                    onChange={handleStartChange}
                    />
                </div>
                <div className="forlimit">
                    <label htmlFor="limit">LIMIT</label>
                    <input type="text" 
                    id="limit"
                    className="start"
                    inputMode='numeric' 
                    pattern="\d{1,2}"
                    value={startLimit}
                    onChange={handleLimitChange}
                    />
                </div>
                <button className="gt-logs"
                onClick={handleSubmit}
                >Get Logs</button>
            </div>
            <div className="log-data">
                <h4>Result: {failure}</h4>
                <p>page: {start} </p>
                <p>limit: {limit} </p>
                <p>size: {size} </p>
            </div>
            <div className="log">
                <table className="container">
                    <thead>
                        <tr>
                            <th><h1>S/N</h1></th>
                            <th><h1>Card Number</h1></th>
                            <th><h1>Hits</h1></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((item, index) => (
                            <TableData data={item}
                            key={index}
                            />
                        ))}
                        { !success &&  <tr>
                            <td>0</td>
                            <td>No Data</td>
                            <td></td>
                        </tr> }
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

function TableData({data}) {    
    return (
        <tr>
            <td>{data.num}</td>
            <td>{data.card}</td>
            <td>{data.hit}</td>
        </tr>
    )
}