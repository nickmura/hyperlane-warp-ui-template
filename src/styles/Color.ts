// Should match tailwind.config.js
export enum Color {
  primaryBlack = '#010101',
  primaryWhite = '#FFFFFF',
  primaryGray = '#6B7280',
  lightGray = '#D0D4DB',
  primaryBlue = '#331E36',
  primaryPink = '#C2EFEB',
  primaryBeige = '#F1EDE9',
  primaryRed = '#BF1B15',
  primaryMint = '#31D99C',
}

// Useful for cases when using class names isn't convenient
// such as in svg fills
export function classNameToColor(className) {
  switch (className) {
    case 'bg-[#331E36]':
      return Color.primaryBlue;
    case 'bg-[#BF1B15]':
      return Color.primaryRed;
    case 'bg-gray-500':
      return Color.primaryGray;
    default:
      throw new Error('Missing color for className: ' + className);
  }
}
