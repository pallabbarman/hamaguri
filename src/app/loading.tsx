import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size={60} aria-label="Loading…" />
        </Box>
    );
};

export default Loading;
