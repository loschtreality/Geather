export const fetchContentData = (url, options = {}) => {
  return fetch(url, options).then((response) => console.log(response.json()))
  .then((resp) => resp)
  .catch(err => { console.log(err) })
}
