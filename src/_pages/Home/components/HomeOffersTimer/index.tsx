'use client';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import TimeUnit from 'components/TimeUnit';
import { useEffect, useState } from 'react';
import { getTimeLeft } from 'utils/time';

const HomeOffersTimer = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ bgcolor: 'flavescent.main' }}>
            <Container maxWidth="lg">
                <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: 400, gap: 5 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" color="lime">
                            Hot Deals
                        </Typography>
                        <Typography variant="h2" color="black">
                            Offers going on our product
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <TimeUnit value={timeLeft.days} label="Days" delay={100} />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <TimeUnit value={timeLeft.hours} label="Hours" delay={200} />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <TimeUnit value={timeLeft.minutes} label="Minutes" delay={300} />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <TimeUnit value={timeLeft.seconds} label="Seconds" delay={400} />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
};

export default HomeOffersTimer;
