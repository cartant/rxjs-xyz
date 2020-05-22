import Typography from "typography";
import Theme from "typography-theme-wordpress-2016";

// https://www.google.com/search?q=colour+picker
// https://leonardocolor.io/?colorKeys=%2303a9f4&base=ffffff&ratios=3%2C3.5%2C4.5&mode=CAM02

Theme.overrideThemeStyles = () => {
  return {
    "h1, h1 a": {
      "font-weight": 600,
    },
    a: {
      color: `#cc0077`,
    },
    "a:hover": {
      color: `#f80090`,
    },
    "h1 a, h2 a, h3 a, h4 a": {
      color: `#cc0077`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  };
};

delete Theme.googleFonts;

const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
