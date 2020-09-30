export const listParser = (list, useHtml) => {
  const regexItem = /[^\s*;]*/gm;
  const regexHttps = /(https:\/\/)/;
  const found = list.match(regexItem);
  let links = [];
  found.forEach((x) => {
    if (x.length !== 0) {
      if (!x.match(regexHttps) && useHtml) {
        links.push("https://" + x);
      } else links.push(x);
    }
  });
  console.log(links);
  return links;
};
