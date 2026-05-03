'use client';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import EmailIcon from 'icons/EmailIcon';
import FacebookIcon from 'icons/FacebookIcon';
import LocationIcon from 'icons/LocationIcon';
import Image from 'next/image';
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const WebsiteLayoutFooter = () => {
    return (
        <Box sx={{ bgcolor: 'lime.main', mt: { lg: 10, xs: 3 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} sx={{ py: 5 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Stack spacing={1}>
                            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
                                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                                    <Typography variant="h2">Hamaguri</Typography>
                                </Stack>
                            </Link>
                            <Typography variant="caption">
                                Provides essential nutrients including protein, minerals, and
                                sustained energy.
                            </Typography>
                            <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
                                <LocationIcon />
                                <Typography variant="caption">
                                    9Q6X+92F Foy&apos;s Lake, Zakir Hossain Rd, Chattogram 4202
                                </Typography>
                            </Stack>
                            <Stack spacing={1} direction="row" sx={{ alignItems: 'center' }}>
                                <EmailIcon />
                                <Typography variant="caption">
                                    Email: itshamaguri2026@gmail.com
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid
                        size={{ xs: 12, sm: 6 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                color="white"
                                LinkComponent={Link}
                                target="_blank"
                                href="https://www.facebook.com/share/1CkoTAXt1M/"
                            >
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton size="large" color="white">
                                <XIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton size="large" color="white">
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton size="large" color="white">
                                <YouTubeIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton size="large" color="white">
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                        <Stack>
                            <Typography>Copyright ©Hamaguri All Right Reserved.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WebsiteLayoutFooter;
