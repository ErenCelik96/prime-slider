import "@mui/material/styles";

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    customComponents: {
      photoSlider: {
        overlay: {
          background: string;
          textShadow: string;
          borderRadius: number;
        };
        controls: {
          background: string;
          hoverBackground: string;
        };
      };
    };
  }
  interface ThemeOptions {
    customComponents?: {
      photoSlider?: {
        overlay?: {
          background?: string;
          textShadow?: string;
          borderRadius?: number;
        };
        controls?: {
          background?: string;
          hoverBackground?: string;
        };
      };
    };
  }
}
