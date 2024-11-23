import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import './index.css';
import DadJokes from './Components/DadJokes/DadJokes';
import RandomEmoji from "./Components/RandomEmoji/RandomEmoji";
import { theme } from './theme';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box 
                className="App"
                sx={{
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                    py: 4
                }}
            >
                <Container maxWidth="md">
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 4
                        }}
                    >
                        <RandomEmoji />
                        <DadJokes />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    </React.StrictMode>
);

