import './App.css';
import DadJokeApi from './DadJokeApi';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#F40B27',
            },
            secondary: {
                main: '#5DBA40',
            },
            lightBlue: {
                main: '#164863',
            },
            violet: {
                main: '#BC00A3',
            },
        },
    });

    const { fetchJoke, joke } = DadJokeApi();


    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '100px',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '10px',
                        boxShadow: '10px 10px 10px rgba(30,30,30,0.1)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h3" sx={{ color: 'white' }}>
                            Dad Joke Generator 🫧
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
                                sx={{ color: 'white' }}
                                onClick={fetchJoke}
                            >
                                Click to Get Dad Joke ;)
                            </Button>
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                {joke && (
                                    <div>
                                        <Typography variant="h5" sx={{ color: 'white' }}>
                                            Dad Joke 😁
                                        </Typography>
                                        <p>{joke}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
