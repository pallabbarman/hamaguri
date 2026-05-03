/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';
import { ThemeOptions } from '@mui/material';
import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';
import { CSSProperties } from 'react';

interface CustomColors {
    lime: SimplePaletteColorOptions;
    grey: SimplePaletteColorOptions;
    pink: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    flavescent: SimplePaletteColorOptions;
}

export interface CustomColorNames {
    lime: true;
    grey: true;
    pink: true;
    black: true;
    white: true;
    flavescent: true;
}

interface CustomTypographyVariants {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    caption: CSSProperties;
}

declare module '@mui/material/styles' {
    interface Palette extends CustomColors {}

    interface PaletteOptions extends CustomColors {}

    interface TypographyVariants extends CustomTypographyVariants {}

    interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsColorOverrides extends CustomColorNames {}
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1: true;
        h2: true;
        h3: true;
        h4: false;
        h5: false;
        h6: false;
        body1: false;
        body2: false;
        button: false;
        caption: true;
        inherit: false;
        overline: false;
        subtitle1: false;
        subtitle2: false;
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        black: {
            main: '#071c1f',
            light: '#1a3a3e',
            dark: '#000d0f',
            contrastText: '#ffffff',
        },
        white: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#e0e0e0',
            contrastText: '#071c1f',
        },
        lime: {
            main: '#80b500',
            light: '#a3d400',
            dark: '#5c8200',
            contrastText: '#071c1f',
        },
        pink: {
            main: '#eababd',
        },
        grey: {
            '200': '#f6f6f6',
        },
        flavescent: {
            main: '#f7f5eb',
            light: '#faf9f3',
            dark: '#e8e4cc',
            contrastText: '#071c1f',
        },
        primary: {
            main: '#80b500',
            contrastText: '#071c1f',
        },
        secondary: {
            main: '#071c1f',
            contrastText: '#ffffff',
        },
        text: { primary: '#071c1f', secondary: '#80b500' },
        error: { main: '#dc3545' },
        success: { main: '#80b500' },
        warning: { main: '#ffc107' },
        action: { active: '#80b500' },
        background: {
            paper: '#ffffff',
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'var(--font-rajdhani)',
        h1: {
            fontFamily: 'var(--font-rajdhani)',
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
        },
        h2: {
            fontFamily: 'var(--font-rajdhani)',
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: 'var(--font-rajdhani)',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.3,
        },
        caption: {
            fontFamily: 'var(--font-opensans)',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '29px',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
            },
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
