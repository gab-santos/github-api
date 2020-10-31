import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkPrimary: string;
      primary: string;
      lightPrimary: string;
      secondary: string;
      white: string;
      light: string;
      gray: string;
      error: string;
    };
  }
}
