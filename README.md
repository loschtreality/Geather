# Geather

Geather is a React-Native, Android & IOS weather app which utilizes the Giphy API and the Open Weather Maps API. Geather takes a user's preference for weather types, current location, and watched cities and fetches a random gif associated with the weather of that city.


## Technologies

- React Native
- Redux Thunk
- Jest
- Fetch API
- React-Native-Router-Flux
- React Native Facebook SDK


## Development

Follow the steps below to run this project locally:

1. Download Xcode for iOS development and Android Studio SKD for Android development.
2. Follow the React Native installation guide for iOS and Android.
3. Download Yarn and `yarn install` or `npm install`, however it's recommended to use yarn.
4. Create a firebase and openWeatherMaps account.
5. Create a file named `envVariables.js` in the root of the project, then add the following configurations.

```js

export const firebaseConfig = {
   apiKey: (key),
   authDomain: (info),
   databaseURL: (info),
   storageBucket: (info),
   messagingSenderId: (info)
}

export const openWeatherConfig = {
  apiKey: (key)
}

export const giphyConfig = {
  apiKey: "dc6zaTOxFJmzC" // public api key for development
}

export const facebookConfig = {
  appID: (id),
  appSecret: (secret)
}

```
6. Download the Facebook SDK from Facebook for Developers. Open the zipped folder, rename and place it in `~$PATH/Documents/` as `FacebookSKD`


## Todo
- [x] Giphy Api
- [x] Open WeatherMaps API
- [x] oAuth for Facebook iOS
- [ ] oAuth for Facebook Android
- [ ] Navigation Bar
- [ ] Profile
- [ ] Logout
- [ ] DB persistence
- [ ] Custom Components
- [ ] Fetch all data on login
- [ ] Custom start up page
