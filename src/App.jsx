import './App.css'
import React, {useState} from "react";
import {useForm} from "react-hook-form";

function App() {

    const [counters, setCounters] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
    });


    function handleOnClick(fruit, type) {
        setCounters({
            ...counters,
            [fruit]:
                type === "plus" ? counters[fruit] + 1 : Math.max(0, counters[fruit] - 1)
        });
    }

    function resetButton() {
        setCounters({
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0,
        })
    }

    console.log(counters)

    return (
        <>
            <main>
                <article className="counterWrapper">
                    <h1>🍓Aardbeien</h1>
                    <div className="buttonWrapper">
                        <button type="button"
                                className="minusButton"
                                onClick={() => handleOnClick("strawberry", "minus")}>
                            -
                        </button>
                        <p>{counters.strawberry}</p>
                        <button type="button"
                                className="plusButton"
                                onClick={() => handleOnClick("strawberry", "plus")}>
                            +
                        </button>
                    </div>
                </article>
                <article className="counterWrapper">
                    <h1>🍌Bananen</h1>
                    <div className="buttonWrapper">
                        <button type="button"
                                className="minusButton"
                                onClick={() => handleOnClick("banana", "minus")}>
                            -
                        </button>
                        <p>{counters.banana}</p>
                        <button type="button"
                                className="plusButton"
                                onClick={() => handleOnClick("banana", "plus")}>
                            +
                        </button>
                    </div>
                </article>
                <article className="counterWrapper">
                    <h1>🍏Appels</h1>
                    <div className="buttonWrapper">
                        <button type="button"
                                className="minusButton"
                                onClick={() => handleOnClick("apple", "minus")}>
                            -
                        </button>
                        <p>{counters.apple}</p>
                        <button type="button"
                                className="plusButton"
                                onClick={() => handleOnClick("apple", "plus")}>
                            +
                        </button>
                    </div>
                </article>
                <article className="counterWrapper">
                    <h1>🥝Kiwi's</h1>
                    <div className="buttonWrapper">
                        <button type="button"
                                className="minusButton"
                                onClick={() => handleOnClick("kiwi", "minus")}>
                            -
                        </button>
                        <p>{counters.kiwi}</p>
                        <button type="button"
                                className="plusButton"
                                onClick={() => handleOnClick("kiwi", "plus")}>
                            +
                        </button>
                    </div>
                </article>
                <button type="button" className="resetButton" onClick={resetButton}>Reset</button>

                <form>
                    <div className="form-section-wrapper">
                        <label htmlFor="firstName">
                            Voornaam
                            <input
                                type="text"
                                name="firstName"
                                id="firstName-field"
                            />
                        </label>
                    </div>
                    <div className="form-section-wrapper">
                        <label htmlFor="lastName">
                            Achternaam
                            <input
                                type="text"
                                name="lastName"
                                id="lastName-field"
                            />
                        </label>
                    </div>
                    <div className="form-section-wrapper">
                        <label htmlFor="age">
                            Leeftijd
                            <input
                                type="number"
                                name="age"
                                id="age-field"
                                min={1}
                                max={100}
                            />
                        </label>
                    </div>
                    <div className="form-section-wrapper">
                        <label htmlFor="postcode">
                            Postcode
                            <input
                                type="text"
                                name="postcode"
                                id="postcode-field"
                            />
                        </label>
                    </div>
                    <div className="form-section-wrapper">
                        <label htmlFor="deliveryFrequency">
                            Bezorgfrequentie
                            <select
                                name="deliveryFrequency"
                                id="deliveryFrequency-field">
                                <option value="iedereWeek">Iedere week</option>
                                <option value="omDeWeek">Om de week</option>
                                <option value="iedereMaand">Iedere maand</option>
                            </select>

                </label>
                    </div>
                <div className="radio-button-wrapper">
                    <input type="radio" name="deliveryTime" id="deliveryTime-field" value="Overdag"/>
                    <label htmlFor="timePeriod">Overdag</label>
                    <input type="radio" name="deliveryTime" id="deliveryTime-field" value="'s Avonds"/>
                    <label htmlFor="timePeriod">'s Avonds</label>
                </div>
                <div className="form-section-wrapper">

                    <label htmlFor="comments">
                        Opmerkingen
                        <textarea
                            name="comments"
                            id="comments-field"
                            rows={4}
                            cols={50}
                        />
                    </label>
                </div>

                <div className="form-section-wrapper">
                    <input type="checkbox" name="conditionsCheckbox" id="conditions-checkbox"/>
                    <label htmlFor="conditionsCheckbox">Ik ga akkoord met de voorwaarden</label>
                </div>


                    <button type="submit">Verzend</button>
                </form>
            </main>
        </>
)
}

export default App
