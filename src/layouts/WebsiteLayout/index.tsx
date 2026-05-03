import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';
import WebsiteLayoutNavbar from './components/WebsiteLayoutNavbar';
import WebsiteLayoutFooter from './components/WebsiteLayoutFooter';

export interface WebsiteLayoutProps {
    children: ReactNode;
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
    return (
        <Stack>
            <WebsiteLayoutNavbar />
            {children}
            <WebsiteLayoutFooter />
        </Stack>
    );
};

export default WebsiteLayout;
