import Typewriter from 'typewriter-effect/dist/core';
import React, { useState, useEffect } from 'react';

interface Props {
    checkWelcomeMessage: any;
}

const WelcomeMessage: React.FC<Props> = ({checkWelcomeMessage}) => {

    useEffect(() => {
        let typewriter = new Typewriter('#welcomeMessage', {
            loop: false
        });
        typewriter
        .typeString('Shhhhhhh!')
        .pauseFor(1000)
        .deleteChars(9)
        .typeString("It's a secret...")
        .pauseFor(1000)

        .deleteChars(16)
        .callFunction(() => {
            checkWelcomeMessage(true);
        })
        .start()
    });

    return (
        <>
            <h1 id="welcomeMessage"></h1>
        </>
    );
};

export default WelcomeMessage;