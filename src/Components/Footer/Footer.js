import { Box, Typography, Link } from '@mui/material';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                py: 2
            }}
        >
            <Typography 
                variant="body2" 
                sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.8125rem',
                    fontWeight: 400
                }}
            >
                Jokes provided by{' '}
                <Link 
                    href="https://icanhazdadjoke.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="always"
                    sx={{ 
                        color: 'text.primary',
                        fontWeight: 500
                    }}
                >
                    icanhazdadjoke
                </Link>
            </Typography>
            
            <Typography 
                variant="body2" 
                sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.8125rem',
                    fontWeight: 400
                }}
            >
                Built by{' '}
                <Link 
                    href="https://www.raisulhasib.dev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="always"
                    sx={{ 
                        color: 'text.primary',
                        fontWeight: 500
                    }}
                >
                    Raisul Hasib
                </Link>
            </Typography>
            
            <Typography 
                variant="caption" 
                sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    fontWeight: 400
                }}
            >
                © {currentYear}
            </Typography>
        </Box>
    );
}

export default Footer;
