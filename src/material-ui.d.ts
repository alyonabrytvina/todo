import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        status: {
            danger: string;
        };
        typography: {
            fontWeightMedium: number,
            fontFamily: string [],
        },
        palette: {
            primary: {
                main: string,
            },
        },
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        status?: {
            danger?: string;
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
