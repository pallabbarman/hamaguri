import { Grid } from '@mui/material';
import ProductImageGallery from 'components/ProductImageGallery';

const images = [
    '/product.png',
    '/banana.jpeg',
    '/carrot.jpeg',
    '/lentils.png',
    '/pumpkins.jpeg',
    '/sesameseeds.jpeg',
    '/suji.jpeg',
];

const ProductDetailsImage = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <ProductImageGallery images={images} />;
            </Grid>
        </Grid>
    );
};

export default ProductDetailsImage;
