import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const HomeBanner = () => {
    return (
        <Box sx={{ bgcolor: 'pink.main' }}>
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{ minHeight: 800, alignItems: 'center' }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" color="white" sx={{ mb: 2 }}>
                            100% genuine Products
                        </Typography>
                        <Typography variant="h1">Tasty & Healthy Organic Food</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src="/banner.png"
                            alt="banner image"
                            loading="eager"
                            width={750}
                            height={560}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeBanner;
