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

Currently the backend API for this repository is being built in a separate private repository.
These are tentative instructions for installation:

1. Download Xcode for iOS development and Android Studio SKD for Android development.
2. Follow the React Native installation guide for iOS and Android.
3. Download Yarn and `yarn install` or `npm install`, however it's recommended to use yarn.

4. Download the Facebook SDK from Facebook for Developers. Open the zipped folder, rename and place it in `~$PATH/Documents/` as `FacebookSDK`
5. In Xcode, open the project `open ios/Geather.xcodeproj` and navigate to the project build settings
6. Change the framework search path to `/Users/[user name]/Documents/FacebookSDK`
7. Make sure the header search path is `$(inherited) $(SRCROOT)/../node_modules/react-native-fbsdk/ios/RCTFBSDK/**`


## Todo
- [x] Giphy Api
- [x] Open WeatherMaps API
- [x] Geather API Login, Add reject for !200 status
- [x] oAuth for Facebook iOS
- [ ] oAuth for Facebook Android
- [ ] Complete login testing
- [x] Navigation Bar
- [ ] City Search
- [ ] Profile
- [x] Logout
- [x] DB config for weather / gif storing
- [ ] Create overlaying spinner
- [ ] Custom Components
- [x] Fetch all data on login
- [ ] Custom start up page

## Issues

1. Android denies network connections to non https sources, including localhost and local IP
2. Mocks for ES6 functions are not defined
3. Preload height of gif is incorrect, jumps on load
4. Upon an unsuccessful return from the server, the app navigates to a new page
5. Jest is unable to find components in select files
