import dynamic from 'next/dynamic';

const HomeBanner = dynamic(() => import('./components/HomeBanner'));
const HomeProducts = dynamic(() => import('./components/HomeProducts'));

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeProducts />
        </>
    );
};

export default Home;
