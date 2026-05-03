import { Container, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';

const ProductDetails = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>Photo</Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack spacing={2}>
                        <Typography variant="h3">Q. s product</Typography>
                        <Typography variant="h2" color="lime">
                            $39.00
                        </Typography>
                        <Typography variant="caption">
                            The European languages are members of the same family. Their separate
                            existence is a myth. For science, music, sport, etc, Europe uses the
                            same vocabulary. The languages only differ in their grammar
                        </Typography>
                        <Divider />
                        <List component="ol" sx={{ listStyleType: 'decimal', pl: 2 }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Mug Dal (Lentils): Mug dal is rich in plant-based protein, essential
                                amino acids, and iron, supporting tissue development, muscle growth,
                                and overall healthy development in infants.
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
