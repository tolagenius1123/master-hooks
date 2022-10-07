import React, { useRef, useState } from 'react'

const UseRef = () => {
    // const inputRef = useRef(null);

    // const handleClick = () => {
    //     inputRef.current.focus();
    //     inputRef.current.value="";
    // }

    // return (
    // <div>
    //     <h1>Tola</h1>
    //     <input type="text" placeholder='Ex...' ref={inputRef}/>
    //     <button onClick={handleClick}>Change Name</button>
    // </div>
    // )

    const [randomInput, setRandomInput] = useState("");
    const [seconds, setSeconds] = useState(0);

    const renders = useRef(0);
    const timerId = useRef();

    const handleChange = (e) => {
        setRandomInput(e.target.value);
        renders.current++;
    }   

    const startTimer = () => {
        timerId.current = setInterval(()=> {
            renders.current++;
            setSeconds(prev => prev + 1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        if (seconds) {
            renders.current++;
            setSeconds(0);
        }
    }


    return (
        <main>
            <input type="text" value={randomInput} placeholder="RandomInput" onChange={handleChange}/>
            <p>{renders.current}</p>
            <br />
            <section>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>            
            <p>{randomInput}</p>
            <p>Seconds: {seconds}</p>
        </main>
    )
}

export default UseRef