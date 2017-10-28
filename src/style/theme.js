import { generateShadow } from './styleFunctions';
// https://coolors.co/fbe8a6-f4976c-303c6c-b4dfe5-55d197

const colors = {
  darkBlue: '#303C6C',
  lightGreen: '#55D197',
  lightBlue: '#B4DFE5',
  lightYellow: '#FBE8A6',
  lightOrange: '#F4976C',
  darkGrey: '#444',
};

const theme = {
  headerFontFamily: "'Bungee Shade', cursive",
  codeFontFamily: "'Droid Sans Mono', monospace",
  transitionTime: '.25s',
  blockShadow: generateShadow(colors.darkGrey, 10),
  borderRadius: '3px',
  thinBorder: `2px solid ${colors.darkGrey}`,
  bgGradient: `linear-gradient(to right, ${colors.darkGrey}, rgba(68, 68, 68, 0));`,
  incorrectColor: colors.lightOrange,
  correctColor: colors.lightBlue,
};

export default theme;
