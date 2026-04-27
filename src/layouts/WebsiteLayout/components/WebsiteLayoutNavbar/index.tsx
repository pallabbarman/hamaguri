import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

const WebsiteLayoutNavbar = () => {
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'white.main', boxShadow: 'none', py: 2 }}>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant="h2">Hamaguri</Typography>
                </Box>
            </Container>
        </AppBar>
    );
};

export default WebsiteLayoutNavbar;
