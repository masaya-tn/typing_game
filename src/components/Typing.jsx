import React, { useState, useEffect } from 'react';

export const Typing = () => {
    const [theme, setTheme] = useState('')
    const [counter, setCounter] = useState(0)
    const [second, setSecond] = useState(0)
    const [onPlay, setOnPlay] = useState(false)
    const [intervalId, setIntervalId] = useState()
    const [success, setSuccess] = useState(0)

    useEffect(() => {
        makeTheme()
    }, [counter])

    useEffect(() => {
        if(second === 60) {
            clearInterval(intervalId)
            setOnPlay(false)
        }
    }, [second])

    const keyDownHandler = (e) => {
        if (onPlay !== true) return
        const key = e.code;
        if (key.substr(-1).toLowerCase() !== theme.substring(counter, counter+1)) return;
        setSuccess(success+1)
        if (counter+1 >= theme.length) {
            complete();
        } else {
            setCounter(counter+1)
        }
    } 

    const startCounter = () => {
        setOnPlay(true)
        setIntervalId(
            setInterval(() => {
                setSecond((second) => second + 1)
            }, 1000)
        )
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
            {second === 60 &&
                <div>タイピング成功数{success}</div>
            }
            <div>{second}</div>
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