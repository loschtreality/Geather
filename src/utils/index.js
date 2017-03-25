import { openWeatherConfig, giphyConfig } from "../../envVariables.js"

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

export const postSession = (credentials, url = "http://localhost:3000/v1/sessions/facebook") => {
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(credentials)
  // }
  // Hard coding in values for now
  const data = new FormData()
  data.append({
    user_id: "10206797542936314",
    acces_token: "EAAX8mlcBvnwBABccda4VZByRZCGGUETUJW21YN7wKzl4nKzvn57tc22UMzRXiGN9LvAOXcEcRBfZCQZBjMEeelZAIlyHVVnQlZB8d4ZAYA6Yo1lmBJ2EUgZC4ZByRf9doPcty3DPReYDZALD5FHOv2dACTxXQeL8qbb9EfEz4OFTwyKSFvKimkycKZAZAUuVc1ZAhcVazDjVmUq0OlmuD0HMJe41fRcP6QuV9eZAUZD"
  })
  const options = {
    method: "POST",
    body: data
  }

  return fetch(url, options)
  .then(getJSON)
}


// Requestin weather
// const options = {
//   method: "GET",
//   headers: headers.set({
//     "X-Auth-Token": "0901e4b7-06de-43bc-a826-ab4996b4531b"
//   })
