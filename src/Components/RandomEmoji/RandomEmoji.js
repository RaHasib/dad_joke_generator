import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -10px) rotate(5deg); }
  50% { transform: translate(0, -20px) rotate(0deg); }
  75% { transform: translate(-10px, -10px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const emojis = ['😀', '🙂', '😄', '😁', '😜', '🤣', '😗', '🤤', '🤠', '🤪', '🥳', '😘', '😋', '😎'];

function RandomEmoji() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            {emojis.map((emoji, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        fontSize: '2rem',
                        opacity: 0.5,
                        animation: `${float} ${4 + Math.random() * 4}s infinite ease-in-out`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        animationDelay: `-${Math.random() * 5}s`
                    }}
                >
                    {emoji}
                </Box>
            ))}
        </Box>
    );
}

export default RandomEmoji;

