
/**
 * Truncates a given text to a specified maximum length and appends "..." if the text exceeds that length.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} [maxLength=70] - The maximum allowed length of the text before truncation. Defaults to 70.
 * @returns {string} - The truncated text with "..." appended if it exceeds the maximum length, or the original text if it doesn't.
 */
export function truncateText(text:string, maxLength:number =70) {
 
    if (text.length > maxLength) 
      return text.slice(0, maxLength) + '...';
    
    return text;
  };