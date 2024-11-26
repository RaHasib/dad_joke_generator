import { Box, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                color: 'text.primary'
            }}
        >
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Link 
                    href="https://github.com/RaHasib" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                        opacity: 0.9,
                        '&:hover': { 
                            opacity: 1,
                            transform: 'scale(1.1)',
                            transition: 'all 0.2s ease-in-out'
                        }
                    }}
                >
                    <GitHub sx={{ fontSize: 28 }} />
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/raisul-amin-hasib/" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                        opacity: 0.9,
                        '&:hover': { 
                            opacity: 1,
                            transform: 'scale(1.1)',
                            transition: 'all 0.2s ease-in-out'
                        }
                    }}
                >
                    <LinkedIn sx={{ fontSize: 28 }} />
                </Link>
            </Box>
            <Typography 
                variant="body2" 
                sx={{ 
                    opacity: 0.9,
                    fontWeight: 500,
                    fontSize: '0.95rem'
                }}
            >
                Made with ❤️ by Raisul Amin Hasib
            </Typography>
            <Typography 
                variant="caption" 
                sx={{ 
                    opacity: 0.8,
                    fontSize: '0.85rem'
                }}
            >
                © {currentYear}
            </Typography>
        </Box>
    );
}

export default Footer;
