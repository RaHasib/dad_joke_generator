import React from 'react';
import useDadJokeApiLogic from './useDadJokeApiLogic';
import { Box, Typography, Card, Button, Fade, IconButton } from '@mui/material';
import { AutoAwesome, ContentCopy, Share } from '@mui/icons-material';
import Footer from "../Footer/Footer";
import gifPath from "./../../catSleep.gif";

function DadJokes() {
    const { fetchJoke, joke, isLoading } = useDadJokeApiLogic();
    const [canShare, setCanShare] = React.useState(false);

    React.useEffect(() => {
        setCanShare(!!navigator.share);
    }, []);

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
        <Box sx={{ 
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            mt: { xs: 0, md: 8 },
            pt: { xs: 0, md: 6 }
        }}>
            <Box sx={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: 'white',
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                marginBottom: '-55px',
                border: '4px solid white',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                zIndex: 2,
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src={gifPath}
                    alt="sleeping cat"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </Box>

            <Card sx={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                maxWidth: '90%',
                width: '600px',
                borderRadius: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                zIndex: 1
            }}>
                <Box sx={{ 
                    pt: { xs: 3, md: 8 },
                    pb: 4, 
                    px: { xs: 2, sm: 4 }
                }}>
                    <Typography 
                        variant="h3" 
                        component="h1"
                        sx={{
                            mb: 4,
                            textAlign: 'center',
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                            fontWeight: 800,
                            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        <span>Dad Joke Generator</span>
                        <span style={{ WebkitTextFillColor: 'initial', fontSize: '0.9em' }}>
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
                                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                                color: 'white',
                                px: 4,
                                py: 1,
                                borderRadius: '25px'
                            }}
                        >
                            {isLoading ? 'Loading...' : 'Get a Dad Joke'}
                        </Button>
                    </Box>

                    <Box sx={{ 
                        minHeight: '100px',
                        background: 'rgba(255,255,255,0.8)',
                        borderRadius: '20px',
                        p: 3,
                        mb: 3,
                        textAlign: 'center'
                    }}>
                        <Fade in={true} timeout={800}>
                            <Typography 
                                variant="h6"
                                sx={{
                                    color: joke ? 'text.primary' : 'text.secondary',
                                    fontWeight: 500,
                                    fontSize: { xs: '1rem', sm: '1.25rem' }
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
                            gap: 2
                        }}>
                            <IconButton 
                                onClick={copyToClipboard}
                                sx={{ color: '#FF6B6B' }}
                            >
                                <ContentCopy />
                            </IconButton>
                            {canShare && (
                                <IconButton 
                                    onClick={shareJoke}
                                    sx={{ color: '#4ECDC4' }}
                                >
                                    <Share />
                                </IconButton>
                            )}
                        </Box>
                    </Fade>
                </Box>
            </Card>
            
            <Box sx={{ 
                mt: { xs: 4, md: 4 },
                position: { xs: 'relative', md: 'static' }
            }}>
                <Footer />
            </Box>
        </Box>
    );
}

export default DadJokes;
