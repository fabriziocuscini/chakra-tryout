// Valid color scale steps
type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

// Semantic color mapping type
type SemanticColorConfig = {
  light: ColorScale | string;
  dark: ColorScale | string;
};

// Full semantic palette mapping type
type SemanticPaletteMapping = Record<string, SemanticColorConfig>;

// Define a precise return type for generateSemanticPalette to avoid using `any`
type SemanticPaletteResult = Record<string, { value: { _light: string; _dark: string } }>;

/**
 * Generates a color ramp from a CSV string of 11 hex values
 * @param hexValuesCSV A comma-separated string of 11 hex colors from darkest (950) to lightest (50)
 * @returns An object with color scale values (50-950)
 * Inspired by https://meodai.github.io/rampensau/
 */
export const generateColorRamp = (hexValuesCSV: string) => {
  const hexValues = hexValuesCSV.split(',').map(hex => hex.trim());

  if (hexValues.length !== 11) {
    throw new Error('generateColorRamp requires exactly 11 hex values');
  }

  // Reverse the array since input is from darkest to lightest,
  // but we need to map from lightest (50) to darkest (950)
  const reversed = [...hexValues].reverse();

  return {
    50: { value: reversed[0] },
    100: { value: reversed[1] },
    200: { value: reversed[2] },
    300: { value: reversed[3] },
    400: { value: reversed[4] },
    500: { value: reversed[5] },
    600: { value: reversed[6] },
    700: { value: reversed[7] },
    800: { value: reversed[8] },
    900: { value: reversed[9] },
    950: { value: reversed[10] },
  };
};

/**
 * Generates semantic color tokens from a base color
 * @param colorName The base color name (e.g., 'purple')
 * @param mapping Object with semantic color definitions for light/dark modes
 * @returns Semantic color tokens object
 */
export const generateSemanticPalette = (
  colorName: string,
  mapping: SemanticPaletteMapping
): SemanticPaletteResult => {
  const result: SemanticPaletteResult = {};

  Object.entries(mapping).forEach(([key, config]) => {
    // Initialize the value object
    result[key] = { value: { _light: '', _dark: '' } };

    // Process light mode value
    if (typeof config.light === 'number') {
      // If it's a number, reference the color scale
      result[key].value._light = `{colors.${colorName}.${config.light}}`;
    } else {
      // If it's a string (hex value), use directly
      result[key].value._light = config.light;
    }

    // Process dark mode value
    if (typeof config.dark === 'number') {
      // If it's a number, reference the color scale
      result[key].value._dark = `{colors.${colorName}.${config.dark}}`;
    } else {
      // If it's a string (hex value), use directly
      result[key].value._dark = config.dark;
    }
  });

  return result;
};
