// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      mediumGray: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      mediumGray: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  }
}
