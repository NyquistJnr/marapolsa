export const convertStringToKebabCase = (str) => {
  // Convert the string to lowercase
  const lowerCaseStr = str.toLowerCase();

  // Replace spaces with hyphens
  const kebabCaseStr = lowerCaseStr.replace(/\s+/g, "-");

  return kebabCaseStr;
};

export const convertKebabCaseToNormal = (str) => {
  // Split the string by hyphens
  const words = str.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together with spaces
  const normalCaseStr = capitalizedWords.join(" ");

  return normalCaseStr;
};
