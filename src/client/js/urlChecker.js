export function checkUrl(inputText) {
  console.log('::: Running checkUrl :::', inputText);

  const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(inputText);

  return valid;
}
