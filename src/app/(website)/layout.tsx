import WebsiteLayout from 'layouts/WebsiteLayout';
import { ReactNode } from 'react';

export interface WebsiteLayoutPageProps {
    children: ReactNode;
}

const WebsiteLayoutPage = ({ children }: WebsiteLayoutPageProps) => {
    return <WebsiteLayout>{children}</WebsiteLayout>;
};

export default WebsiteLayoutPage;
