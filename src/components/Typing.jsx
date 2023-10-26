import React, { useState, useEffect } from 'react';

export const Typing = () => {
    const [theme, setTheme] = useState('')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        makeTheme()
    })

    const keyDownHandler = (e) => {
        const key = e.code;
        if (key.substr(-1).toLowerCase() !== theme.substring(counter, counter+1)) return;
        if (counter+1 >= theme.length) {
            complete();
        } else {
            setCounter(counter+1)
        }
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
        </div>
    );
}