'use client';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import productData from 'constant/product';
import Image from 'next/image';
import Link from 'next/link';

const HomeProducts = () => {
    return (
        <Container maxWidth="lg" id="product">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <Typography variant="h1">Our Products</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid size={{ lg: 4 }}>
                    {productData.map((data) => (
                        <Link
                            key={data.id}
                            href={`/product/${data.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
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
                                    src={data.image}
                                    alt={data.title}
                                    loading="eager"
                                    width={266}
                                    height={266}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <Stack spacing={1.5} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h3" color="black">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="h2" color="lime">
                                        &#2547;{data.price}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Link>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeProducts;
