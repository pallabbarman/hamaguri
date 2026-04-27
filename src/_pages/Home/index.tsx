import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';

const HomeBanner = dynamic(() => import('./components/HomeBanner'));
const HomeProducts = dynamic(() => import('./components/HomeProducts'));
const HomeFeatureItem = dynamic(() => import('./components/HomeFeatureItem'));

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                <HomeBanner />
            </Grid>
            <Grid size={12}>
                <HomeProducts />
            </Grid>
            <Grid size={12}>
                <HomeFeatureItem />
            </Grid>
        </Grid>
    );
};

export default Home;
