import React, {useEffect, useState} from 'react';

function TypingForm({words, newWord, setNewWord, gameOver, updateScoreAndWord}) {

    const [randomWord, setRandomWord] = useState()
    const [typeWord, setTypoWord] = useState("");

    useEffect(() => {
        if(gameOver) {
            return
        }
        setRandomWord(words[Math.floor(Math.random() * words.length)]);
        setNewWord(false)
    },[words, newWord, gameOver, setNewWord]);

    function handleInputChange(e) {
        setTypoWord(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();

        if(gameOver) {
            return
        }

        if(typeWord === randomWord) {
            updateScoreAndWord();
            setTypoWord("");
        }
    }

    return (
        <div className="text-center my-4">
            <p className="leading-none">Type the following:</p>
            <h1 className="text-4xl font-medium ">{randomWord}</h1>
            <form onSubmit={handleSubmit} autoComplete="off" >
                <input name="typeWord" onChange={handleInputChange} value={typeWord} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
            </form>

        </div>
    );
}

export default TypingForm;