/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';
import { ThemeOptions } from '@mui/material';
import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';
import { CSSProperties } from 'react';

interface CustomColors {
    lime: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    flavescent: SimplePaletteColorOptions;
}

export interface CustomColorNames {
    lime: true;
    black: true;
    white: true;
    flavescent: true;
}

interface CustomTypographyVariants {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
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

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides extends CustomColorNames {}
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
        caption: false;
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
        },
        white: {
            main: '#ffffff',
        },
        lime: {
            main: '#80b500',
        },
        flavescent: {
            main: '#f7f5eb',
        },
    },
    typography: {
        fontFamily: 'var(--font-family-rajdhani), sans-serif',
    },
};

const theme = createTheme(themeOptions);

export default theme;
