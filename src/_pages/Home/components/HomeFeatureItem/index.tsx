import { Container, Grid, Stack, Typography } from '@mui/material';
import LocalShippingIcon from 'icons/LocalShippingIcon';

const HomeFeatureItem = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} sx={{ boxShadow: '0 16px 32px 0 rgba(7, 28, 31, 0.1)' }}>
                <Grid size={3}>
                    <Stack
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <LocalShippingIcon fontSize="large" />
                        <Stack>
                            <Typography variant="h3">Free home delivery</Typography>
                            <Typography>
                                Provide free home delivery for all product over $100
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={3}>
                    <Stack
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <LocalShippingIcon fontSize="large" />
                        <Stack>
                            <Typography variant="h3">Free home delivery</Typography>
                            <Typography>
                                Provide free home delivery for all product over $100
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={3}>
                    <Stack
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <LocalShippingIcon fontSize="large" />
                        <Stack>
                            <Typography variant="h3">Free home delivery</Typography>
                            <Typography>
                                Provide free home delivery for all product over $100
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={3}>
                    <Stack
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <LocalShippingIcon fontSize="large" />
                        <Stack>
                            <Typography variant="h3">Free home delivery</Typography>
                            <Typography>
                                Provide free home delivery for all product over $100
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeFeatureItem;
