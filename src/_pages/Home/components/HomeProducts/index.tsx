'use client';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const HomeProducts = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <Typography variant="h1">Our Products</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid size={{ lg: 4 }}>
                    <Link href="/product/1" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box
                            sx={{
                                p: 3,
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: 2,
                                border: (theme) => `1px solid ${theme.palette.grey[200]}`,

                                '&:hover': {
                                    boxShadow: '0 16px 32px 0 rgba(7, 28, 31, 0.1)',
                                },
                            }}
                        >
                            <Image
                                src="/banner.png"
                                alt="banner image"
                                loading="eager"
                                width={266}
                                height={266}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <Stack spacing={1.5}>
                                <Typography variant="h3" color="black">
                                    Product
                                </Typography>
                                <Typography variant="h2" color="lime">
                                    &#2547;10
                                </Typography>
                            </Stack>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeProducts;
