import React, { useState } from 'react';

export const Typing = () => {
    const [inputText, setInputText] = useState('')
    const theme = 'hello'
    const [counter, setCounter] = useState(0)
    
    const keyDownHandler = (e) => {
        const key = e.code;
        console.log(key.substr(-1).toLowerCase())
        console.log(theme.substring(counter, counter+1))
        if (key.substr(-1).toLowerCase() === theme.substring(counter, counter+1)) {
            console.log('ok')
            setCounter(counter+1)
        } 
        // console.log(key.substr(-1))
    } 

    return (
        <div
            onKeyDown={keyDownHandler}
        >
            <div>hello</div>
            <div>{
                counter &&
                theme.substring(0, counter)}
            </div>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </div>
    );
}