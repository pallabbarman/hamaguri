import { Container, Grid } from '@mui/material';
import ProductDetailsImage from './components/ProductDetailsImage';
import ProductDetailsInfo from './components/ProductDetailsInfo';

const ProductDetails = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={{ xs: 3, lg: 5 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <ProductDetailsImage />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <ProductDetailsInfo />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
