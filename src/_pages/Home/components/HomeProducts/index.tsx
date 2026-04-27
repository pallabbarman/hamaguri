import { Box, Container, Typography } from '@mui/material';

const HomeProducts = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h1">Our Products</Typography>
            </Box>
        </Container>
    );
};

export default HomeProducts;
