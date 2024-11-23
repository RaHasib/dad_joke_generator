import React from 'react';
import useDadJokeApiLogic from './useDadJokeApiLogic';
import { Box, Typography, Card, Button, Fade, IconButton } from '@mui/material';
import { AutoAwesome, ContentCopy, Share } from '@mui/icons-material';
import Footer from "../Footer/Footer";
import gifPath from "./../../catSleep.gif";
import { cardStyles, buttonStyles } from '../../styles/common';

function DadJokes() {
    const { fetchJoke, joke, isLoading } = useDadJokeApiLogic();

    const copyToClipboard = () => {
        if (joke) {
            navigator.clipboard.writeText(joke)
                .then(() => {
                    console.log('Joke copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };

    const shareJoke = () => {
        if (joke && navigator.share) {
            navigator.share({
                title: 'Dad Joke',
                text: joke,
            }).catch(err => {
                console.error('Failed to share: ', err);
            });
        }
    };

    return (
        <Box 
            sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                mt: 8
            }}
        >
            <Card
                sx={{
                    ...cardStyles,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    overflow: 'visible',
                    maxWidth: '90%',
                    width: '600px',
                    borderRadius: '30px',
                    boxShadow: `
                        0 10px 30px rgba(0,0,0,0.1),
                        0 1px 8px rgba(0,0,0,0.05),
                        inset 0 1px 0 rgba(255,255,255,0.6)
                    `,
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-5px) scale(1.01)',
                        boxShadow: `
                            0 20px 40px rgba(0,0,0,0.12),
                            0 4px 12px rgba(0,0,0,0.08),
                            inset 0 1px 0 rgba(255,255,255,0.8)
                        `,
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '30px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                        opacity: 0.7,
                    }
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        background: 'white',
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        border: '4px solid white',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        zIndex: 2
                    }}
                >
                    <Box
                        component="img"
                        src={gifPath}
                        alt="sleeping cat"
                        sx={{
                            width: '140px',
                            height: '140px',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box 
                    sx={{ 
                        pt: { xs: 3, md: 12 },
                        pb: 4, 
                        px: { xs: 2, sm: 4 },
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <Typography 
                        variant="h3" 
                        component="h1"
                        sx={{
                            mb: 4,
                            mt: { xs: 2, md: 3 },
                            textAlign: 'center',
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                            fontWeight: 800,
                            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            flexWrap: 'wrap',
                            lineHeight: 1.2,
                            px: 2
                        }}
                    >
                        <span>Dad Joke Generator</span>
                        <span style={{ 
                            WebkitTextFillColor: 'initial',
                            fontSize: '0.9em'
                        }}>
                            😄
                        </span>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Button
                            variant="contained"
                            onClick={fetchJoke}
                            disabled={isLoading}
                            startIcon={<AutoAwesome />}
                            sx={{
                                ...buttonStyles,
                                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #FF8787 30%, #65D8D0 90%)',
                                }
                            }}
                        >
                            {isLoading ? 'Loading...' : 'Get a Dad Joke'}
                        </Button>
                    </Box>

                    <Box>
                        <Box sx={{ 
                            minHeight: '100px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                            borderRadius: '20px',
                            p: { xs: 2, sm: 3 },
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            mx: 2,
                            transition: 'all 0.3s ease-in-out'
                        }}>
                            <Fade in={true} timeout={800}>
                                <Typography 
                                    variant="h6"
                                    sx={{
                                        color: joke ? 'text.primary' : 'text.secondary',
                                        textAlign: 'center',
                                        fontWeight: 500,
                                        lineHeight: 1.6,
                                        fontSize: { xs: '1rem', sm: '1.25rem' },
                                        fontStyle: joke ? 'normal' : 'italic',
                                        opacity: joke ? 1 : 0.7,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    {!joke && <AutoAwesome sx={{ opacity: 0.5 }} />}
                                    {joke || "Click the button above to get a dad joke!"}
                                </Typography>
                            </Fade>
                        </Box>
                        
                        <Fade in={!!joke} timeout={800}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'center',
                                gap: 2,
                                height: joke ? 'auto' : 0,
                                opacity: joke ? 1 : 0
                            }}>
                                <IconButton 
                                    onClick={copyToClipboard}
                                    sx={{ 
                                        color: '#FF6B6B',
                                        '&:hover': {
                                            background: 'rgba(255,107,107,0.1)'
                                        }
                                    }}
                                >
                                    <ContentCopy />
                                </IconButton>
                                <IconButton 
                                    onClick={shareJoke}
                                    sx={{ 
                                        color: '#4ECDC4',
                                        '&:hover': {
                                            background: 'rgba(78,205,196,0.1)'
                                        }
                                    }}
                                >
                                    <Share />
                                </IconButton>
                            </Box>
                        </Fade>
                    </Box>
                </Box>
            </Card>
            
            <Box sx={{ mt: 4 }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default DadJokes;
