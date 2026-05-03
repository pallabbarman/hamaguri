import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';

const ProductBanner = dynamic(() => import('./components/ProductBanner'));
const ProductDetails = dynamic(() => import('./components/ProductDetails'));

const Product = () => {
    return (
        <Grid container spacing={{ xs: 3, lg: 10 }}>
            <Grid size={12}>
                <ProductBanner />
            </Grid>
            <Grid size={12}>
                <ProductDetails />
            </Grid>
        </Grid>
    );
};

export default Product;
