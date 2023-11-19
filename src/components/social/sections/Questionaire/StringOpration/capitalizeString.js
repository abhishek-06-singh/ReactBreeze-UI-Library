export const capitalizeString = (inputString) => {
  // Check if the input is a valid string
  if (typeof inputString !== "string" || inputString.length === 0) {
    return inputString; // Return the input as is
  }

  // Convert the first character to uppercase and the rest to lowercase
  const capitalizedString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

  return capitalizedString;
};
