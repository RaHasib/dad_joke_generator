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
                gap: 1,
                color: 'text.secondary'
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Link 
                    href="https://github.com/RaHasib" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                        opacity: 0.7,
                        '&:hover': { opacity: 1 }
                    }}
                >
                    <GitHub />
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/raisul-amin-hasib/" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                        opacity: 0.7,
                        '&:hover': { opacity: 1 }
                    }}
                >
                    <LinkedIn />
                </Link>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Made with ❤️ by Raisul Amin Hasib
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
                © {currentYear} All rights reserved
            </Typography>
        </Box>
    );
}

export default Footer;
