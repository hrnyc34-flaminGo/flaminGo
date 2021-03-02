/**
 * Style Guide:
 * this files contains number of general style aspects in js objects
 * this includes colors, gradients, and font so far
 * they can pe used with styled components,
 * passed as props (where appropriate) to styled components,
 * as well as for inline styling of components.
 * Note: The goal is to make sass variables for all this as well
 *
 * please feel free to add global styling pieces
 * you think would be us full for everyone to have access to.
 * JUST PLEASE add documentation for any additions
 */

/**
 * @type {Object} - colors
 * to use
 * import {colors} from <filePath>/styleGuid
 * contains the colors used in the figma doc
 * grape: #A91CFF
 * berry: #FF2063
 * white: #FFFFFF
 * clementine: #FF8B03
 * carrot: #FF4F03
 * black: #252b2e
 */
export const colors = {
  grape: '#A91CFF',
  berry: '#FF2063',
  white: '#FFFFFF',
  clementine: '#FF8B03',
  carrot: '#FF4F03',
  black: '#252b2e',
};

/**
 * @type {Object} - gradients
 * to use
 * import {gradients} from <filePath>/styleGuid
 * contains the gradients used in the figma doc
 * clementineToCarrot: linear-gradient(135deg, #FF8B03, #FF4F03)
 * carrotToBerry: linear-gradient(135deg, #FF4F03, #FF2063)
 * berryToGrape: linear-gradient(135deg, #FF2063, #A91CFF)
 */
export const gradients = {
  clementineToCarrot: 'linear-gradient(135deg, #FF8B03, #FF4F03)',
  carrotToBerry: 'linear-gradient(135deg, #FF4F03, #FF2063)',
  berryToGrape: 'linear-gradient(135deg, #FF2063, #A91CFF)',
};

/**
 * @type {Object} - fonts
 * to use
 * import {fonts} from <filePath>/styleGuid
 * contains the font-family and font-weight used in the figma doc
 * font-family:
 *    mainFont: Open Sans, sans-serif
 * font-weight
 *    plain: 400
 *    semiBold: 600
 *    trueBold: 700
 */
export const fonts = {
  mainFont: 'Open Sans, sans-serif',
  plain: 400,
  semiBold: 600,
  bold: 700,
};
