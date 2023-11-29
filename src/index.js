import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DadJokes from './Components/DadJokes/DadJokes';
import {Box, Container} from "@mui/material";
import AnimatedCursor from "react-animated-cursor";
import RandomEmoji from "./Components/RandomEmoji/RandomEmoji";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <Box className="App">
                <RandomEmoji/>
                <AnimatedCursor innerSize={10}
                                outerSize={38}
                                color='193, 11, 111'
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={2}
                                clickables={[
                                    'a',
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    'label[for]',
                                    'select',
                                    'textarea',
                                    'button',
                                    '.link'
                                ]}/>
                <Container>
                    <DadJokes/>
                </Container>
            </Box>
        </>
    </React.StrictMode>
);

