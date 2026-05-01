import { Container, Grid, Stack, Typography } from '@mui/material';
import CachedIcon from 'icons/CachedIcon';
import SupportAgentIcon from 'icons/SupportAgentIcon';
import VerifiedIcon from 'icons/VerifiedIcon';

const featureData = [
    {
        icon: <VerifiedIcon fontSize="large" />,
        title: 'Quality Products',
        description: 'We ensure the product quality that is our main goal',
    },
    {
        icon: <CachedIcon fontSize="large" />,
        title: '3 Days Return',
        description: 'Return product within 3 days for any product you buy',
    },
    {
        icon: <SupportAgentIcon fontSize="large" />,
        title: 'Online Support',
        description: 'We ensure the product quality that you can trust easily',
    },
];

const HomeFeatureItem = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} sx={{ boxShadow: '0 16px 32px 0 rgba(7, 28, 31, 0.1)' }}>
                {featureData.map((data) => (
                    <Grid size={{ sm: 6, lg: 4 }} key={data.title}>
                        <Stack
                            sx={{
                                p: 3,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 3,
                            }}
                        >
                            {data.icon}
                            <Stack>
                                <Typography variant="h3">{data.title}</Typography>
                                <Typography>{data.description}</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomeFeatureItem;
