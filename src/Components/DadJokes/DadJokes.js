import React, { useRef} from 'react';
import '../../App.css';
import useDadJokeApiLogic from './useDadJokeApiLogic';
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Footer from "../Footer/Footer";
import gifPath from "./../../catSleep.gif"

function DadJokes() {
    const theme = createTheme({
        palette: {
            lightBlue: {
                main: '#164863',
            },
        },
    });

    const {fetchJoke, joke} = useDadJokeApiLogic();

    const contentRef = useRef(null);


    return (
        <ThemeProvider theme={theme}>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    justifyContent: 'center',
                }}
            >
                <Box
                    ref={contentRef}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '100px',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px rgba(30,30,30,0.1)',
                        position: 'relative',
                        zIndex: '0',
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                >
                    <Box
                        component="img"
                        src={gifPath}
                        alt="gif"
                        sx={{
                            position: 'absolute',
                            top: '0',
                            right: '45%',
                            width: '12%',
                            zIndex: '1',
                            maxWidth: '100%',
                            height: 'auto',
                            display: { xs: 'none', md: 'block' ,lg:'block'}
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h3" sx={{color: 'white'}}>
                            Dad Joke Generator 😘
                        </Typography>
                    </div>
                    <Box>
                        <div
                            style={{
                                marginTop: '20px',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="lightBlue"
                                sx={{color: 'white'}}
                                onClick={fetchJoke}
                            >
                                Click to Get Dad Joke ;)
                            </Button>

                            <div style={{marginTop: '20px', textAlign: 'center'}}>
                                {joke && (
                                    <div>
                                        <Typography variant="h5" sx={{color: 'white'}}>
                                            Dad Joke 😁
                                        </Typography>
                                        <Typography sx={{marginTop: '20px', color: "white"}}>{joke}</Typography>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Box>
                </Box>
                <Box style={{
                    padding: '20px',
                    alignItems: 'center',
                }}>
                    <Footer/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default DadJokes;
