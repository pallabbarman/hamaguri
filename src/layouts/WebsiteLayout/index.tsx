import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import WebsiteLayoutNavbar from './components/WebsiteLayoutNavbar';

export interface WebsiteLayoutProps {
    children: ReactNode;
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
    return (
        <Box>
            <WebsiteLayoutNavbar />
            {children}
        </Box>
    );
};

export default WebsiteLayout;
