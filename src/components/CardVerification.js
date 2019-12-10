import React, {useContext, useState} from 'react';
import './Card.scss';
import CardContext from '../context/card/cardContext'

export default function CardVerification() {
    const [cardNumber, setCardNumber] = useState("");
    const {verifyCard, failure, verify} = useContext(CardContext);
    const {payload} = verify
    const {type, scheme, bank} = payload;

    function handleSubmit(e){
        e.preventDefault();
        console.log(cardNumber);
        verifyCard(cardNumber);
        setCardNumber("");
    }

    function handleChange(e){
        const text = e.target.value;        
        if(text.match(/\d{0,19}/)){
            setCardNumber(text);
        }
    }

    return (
        <>  
            <div className="heading">
                <h1>Card Verification Service</h1>
                <p>Enter your card number to get basic details about your card</p>
            </div> 
            <div className={`card card-${failure}`}>
                <h4 className="scheme">{(type === undefined || type === null || type === "") ? "card scheme" : type}</h4>
                <figure className="card__figure">
                    <h1 className="type">{(scheme === undefined || scheme === null || scheme === "") ? "card type" : scheme}</h1>
                </figure>
                <div className="card__reader">
                    <div className="card__reader--risk card__reader--risk-one"></div>
                    <div className="card__reader--risk card__reader--risk-two"></div>
                    <div className="card__reader--risk card__reader--risk-three"></div>
                    <div className="card__reader--risk card__reader--risk-four"></div>
                </div>
                <div className="card__number">
                    <input type="text" 
                    maxLength="19" 
                    inputMode='numeric' 
                    pattern="\d{0,19}"
                    placeholder="XXXX - XXXX - XXXX - XXXX" 
                    value={cardNumber}
                    onChange={handleChange} />
                    
                </div>
                <div className="card__dates">
                    <span className="card__dates--first">MM/YY</span>
                </div>
                <h3 className="card__name">{(bank === undefined || bank === null || bank === "") ? "Bank" : bank}</h3>
                <button className="validate" type="button" onClick={handleSubmit}>Validate</button>
                
            </div>
            <h2 className="result">
                Result : <span>{failure}</span>
            </h2>
        </>
    )
}
