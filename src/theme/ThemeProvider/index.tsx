'use client';
import { CssBaseline, ThemeProvider as MuiThemeProvider, responsiveFontSizes } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ReactNode } from 'react';
import theme from '..';

export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <AppRouterCacheProvider>
            <MuiThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ThemeProvider;
