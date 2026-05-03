import { Button, Container, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import Link from 'next/link';

const WebsiteLayoutNavbar = () => {
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'white.main', boxShadow: 'none', py: 2 }}>
            <Container maxWidth="lg">
                <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                            <Image src="/logo.png" alt="logo" width={60} height={60} />
                            <Typography variant="h2">Hamaguri</Typography>
                        </Stack>
                    </Link>
                    <Link href="#product" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="contained" color="pink">
                            Product
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </AppBar>
    );
};

export default WebsiteLayoutNavbar;
