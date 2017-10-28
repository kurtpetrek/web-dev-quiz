export const generateShadow = (color, depth) => {
  let shadowValue = '';
  for (let i = 0; i <= depth; i++) {
    shadowValue += `-${i}px ${i}px 0px ${color}`;
    if (i !== depth) {
      shadowValue += ',';
    }
  }
  return shadowValue;
};
