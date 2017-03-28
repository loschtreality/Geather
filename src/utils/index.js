// Fetch function helpers
const checkStatus = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response)
  }
  return Promise.reject(
      new Error(response.statusText))
}

const getJSON = (response) => {
  return response.json()
}

export const fetchContentData = (url, options = {}) => {
  return fetch(url, options)
  .then(checkStatus)
  .then(getJSON)
}

export const postUser = (credentials) => {
  if (!credentials) {
    console.warn("NO CREDENTIALS IN POST USER")
    return
  }
  const body = { user: {} }
  const url = "https://127.0.0.1:3000/users"

  body.user.email = credentials.email
  body.user.password = credentials.password

  const options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(body)
  }

  return fetch(url, options)
}

export const postSession = (credentials) => {
  const body = { user: {} }
  let url
  if (!credentials) {
    console.warn("NO CREDENTIALS WERE SEEN")
    return
  }

  if ("password" in credentials) {
    console.log(credentials, "CREDENTIALS")
    url = "https://127.0.0.1:3000/v1/sessions/email"
    body.user.email = credentials.email
    body.user.password = credentials.password
  } else if ("g_id" in credentials) {
    url = "https://127.0.0.1:3000/v1/sessions"
    body.user.access_token = credentials.access_token
    body.user.g_id = credentials.g_id
  } else {
    url = "https://127.0.0.1:3000/v1/sessions/facebook"
    body.user.user_id = credentials.user_id
    body.user.access_token = credentials.access_token
  }

  const options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(body)
  }

  return fetch(url, options)
  .then(getJSON)
}


// Requesting weather
// const options = {
//   method: "GET",
//   headers: headers.set({
//     "X-Auth-Token": "0901e4b7-06de-43bc-a826-ab4996b4531b"
//   })
