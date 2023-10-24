import React, { useState } from 'react';

export const Typing = () => {
    const [inputText, setInputText] = useState('')
    
    const keyDownHandler = (e) => {
        const key = e.code;
        if (key.substr(-1) === 'A') {
            console.log('Success!')
        } 
        console.log(key.substr(-1))
    } 

    return (
        <div
            onKeyDown={keyDownHandler}
        >
            <div>hello world</div>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </div>
    );
}