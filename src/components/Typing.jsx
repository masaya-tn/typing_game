import React, { useState, useEffect } from 'react';

export const Typing = () => {
    const [theme, setTheme] = useState('')
    const [counter, setCounter] = useState(0)
    const [second, setSecond] = useState(0)
    const [onPlay, setOnPlay] = useState(false)

    useEffect(() => {
        makeTheme()
    })

    const keyDownHandler = (e) => {
        if (onPlay !== true) return
        const key = e.code;
        if (key.substr(-1).toLowerCase() !== theme.substring(counter, counter+1)) return;
        if (counter+1 >= theme.length) {
            complete();
        } else {
            setCounter(counter+1)
        }
    } 

    const startCounter = () => {
        setOnPlay(true)
        secondCounter()
    }

    const secondCounter = () => {
        console.log(second)
        console.log(theme)
        if (second >= 60) {
            setOnPlay(false) 
            return
        }
        setSecond(second+1)
        interval()
    }

    const interval = () => {
        setTimeout(() => secondCounter(), 10000)
    }

    const complete = () => {
        setTheme('')
        setCounter(0)
    }

    const makeTheme = () => {
        if (theme !== '') return;
        const themes = [
            "hello",
            "monday",
            "calendar",
            "practice",
            "friend",
            "performance",
            "exercize",
            "january",
            "kubenetes",
            "pokemon"
        ]
        let rand = Math.floor(Math.random()*10)
        setTheme(themes[rand])
    }

    return (
        <div
            onKeyDown={keyDownHandler}
        >
            <div>{theme && theme}</div>
            <div>{
                counter &&
                theme.substring(0, counter)}
            </div>
            <input 
                type="text"
                value={''}
            />
            <button onClick={() => startCounter()}>
                すたーと
            </button>
        </div>
    );
}