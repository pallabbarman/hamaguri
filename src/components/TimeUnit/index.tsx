'use client';
import { Box, keyframes, Paper, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface TimeUnitProps {
    value: number;
    label: string;
    delay: number;
}

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
`;

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function TimeUnit({ value, label, delay }: TimeUnitProps) {
    const [animating, setAnimating] = useState(false);
    const prevRef = useRef(value);

    useEffect(() => {
        if (value !== prevRef.current) {
            prevRef.current = value;
            const triggerOn = setTimeout(() => setAnimating(true), 0);
            const triggerOff = setTimeout(() => setAnimating(false), 350);
            return () => {
                clearTimeout(triggerOn);
                clearTimeout(triggerOff);
            };
        }
    }, [value]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                animation: `${fadeSlideIn} 0.6s ease both`,
                animationDelay: `${delay}ms`,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: { xs: 72, sm: 90, md: 110 },
                    height: { xs: 72, sm: 90, md: 110 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white.main',
                    boxShadow:
                        '0 4px 24px rgba(26,34,18,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
                    animation: animating ? `${pulse} 0.35s ease` : 'none',
                    transition: 'box-shadow 0.2s',
                    '&:hover': {
                        boxShadow:
                            '0 8px 32px rgba(90,158,15,0.18), inset 0 1px 0 rgba(255,255,255,0.8)',
                    },
                }}
            >
                <Typography variant="h3">{String(value).padStart(2, '0')}</Typography>
            </Paper>
            <Typography>{label}</Typography>
        </Box>
    );
}

export default TimeUnit;
