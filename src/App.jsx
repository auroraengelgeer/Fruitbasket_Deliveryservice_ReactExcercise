import './App.css'
import React, {useState} from "react";

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
            </main>
        </>
    )
}

export default App
