export const listParser = (list) => {
  const regexItem = /[^\s*;]*/gm;
  const regexHttps = /(https:\/\/)/;
  const found = list.match(regexItem);
  let links = [];
  found.forEach((x) => {
    if (x.length !== 0) {
      if (!x.match(regexHttps)) {
        links.push("https://" + x);
      } else links.push(x);
    }
  });
  console.log(links);
  return links;
};
