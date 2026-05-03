import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const ProductBanner = () => {
    return (
        <Box sx={{ bgcolor: 'lime.main' }}>
            <Container maxWidth="lg">
                <Stack sx={{ justifyContent: 'center', height: 300 }}>
                    <Typography variant="h3">WELCOME TO OUR STORE</Typography>
                    <Typography variant="h1" color="white">
                        Product
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default ProductBanner;
