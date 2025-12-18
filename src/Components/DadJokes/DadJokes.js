import React from 'react';
import useDadJokeApiLogic from './useDadJokeApiLogic';
import { Box, Typography, Card, Button, IconButton, Divider } from '@mui/material';
import { ContentCopy, Share } from '@mui/icons-material';
import Footer from "../Footer/Footer";

function DadJokes() {
    const { fetchJoke, joke, isLoading } = useDadJokeApiLogic();
    const [canShare, setCanShare] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    React.useEffect(() => {
        setCanShare(!!navigator.share);
    }, []);

    const copyToClipboard = () => {
        if (joke) {
            navigator.clipboard.writeText(joke)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
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
        <Box sx={{ 
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 6,
            px: 2
        }}>
            <Box sx={{ 
                maxWidth: '640px',
                width: '100%'
            }}>
                {/* Header Section */}
                <Box sx={{ 
                    textAlign: 'left',
                    mb: 6
                }}>
                    <Typography 
                        variant="h1" 
                        component="h1"
                        sx={{
                            fontSize: { xs: '2.25rem', sm: '3rem' },
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 2,
                            letterSpacing: '-0.025em'
                        }}
                    >
                        Dad Joke Generator
                    </Typography>
                    <Typography 
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '1rem',
                            fontWeight: 400,
                            maxWidth: '480px'
                        }}
                    >
                        A collection of groan-worthy humor. Click the button below to generate a new joke.
                    </Typography>
                </Box>

                {/* Main Card */}
                <Card sx={{
                    background: 'white',
                    mb: 4
                }}>
                    <Box sx={{ p: { xs: 3, sm: 4 } }}>
                        {/* Get Joke Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={fetchJoke}
                            disabled={isLoading}
                            sx={{
                                background: '#18181b',
                                color: 'white',
                                py: 1.25,
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                mb: 3,
                                '&:disabled': {
                                    background: '#e4e4e7',
                                    color: '#71717a'
                                }
                            }}
                        >
                            {isLoading ? 'Loading...' : 'Generate Joke'}
                        </Button>

                        <Divider sx={{ mb: 3 }} />

                        {/* Joke Display Area */}
                        <Box sx={{ 
                            minHeight: '120px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                        }}>
                            <Typography 
                                variant="body1"
                                sx={{
                                    color: joke ? 'text.primary' : 'text.secondary',
                                    fontSize: '1.125rem',
                                    lineHeight: 1.75,
                                    textAlign: 'center',
                                    fontWeight: joke ? 400 : 400
                                }}
                            >
                                {joke || "Click 'Generate Joke' to see a dad joke."}
                            </Typography>
                        </Box>
                        
                        {/* Action Buttons */}
                        {joke && (
                            <>
                                <Divider sx={{ mb: 3 }} />
                                <Box sx={{ 
                                    display: 'flex', 
                                    gap: 1
                                }}>
                                    <IconButton 
                                        onClick={copyToClipboard}
                                        size="small"
                                        sx={{ 
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            color: copied ? 'text.primary' : 'text.secondary',
                                            borderRadius: '6px'
                                        }}
                                    >
                                        <ContentCopy fontSize="small" />
                                    </IconButton>
                                    {copied && (
                                        <Typography 
                                            variant="caption" 
                                            sx={{ 
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'text.secondary',
                                                fontSize: '0.8125rem'
                                            }}
                                        >
                                            Copied to clipboard
                                        </Typography>
                                    )}
                                    {canShare && (
                                        <IconButton 
                                            onClick={shareJoke}
                                            size="small"
                                            sx={{ 
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                color: 'text.secondary',
                                                borderRadius: '6px',
                                                ml: 'auto'
                                            }}
                                        >
                                            <Share fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                            </>
                        )}
                    </Box>
                </Card>
                
                {/* Footer */}
                <Footer />
            </Box>
        </Box>
    );
}

export default DadJokes;
