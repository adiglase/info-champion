const replaceUrl = (url) => {
  return url.replace(/^http:\/\//i, 'https://');
};

export { replaceUrl };
