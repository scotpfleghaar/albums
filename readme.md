To run your app on iOS:
   cd /Users/scotpfleghaar/WebstormProjects/albums
   react-native run-ios
   - or -
   Open ios/albums.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd /Users/scotpfleghaar/WebstormProjects/albums
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
Done



### Issues with React Native and Axios
Try this:

Click "Reset content and settings..." in the simulator's drop down menu and confirm
Close the simulator after it reloads
Close the terminal window running watchman
Run the following commands within terminal inside of your project's directory:
```
watchman watch-del-all
rm -rf ./node_modules
npm cache clean
yarn cache clean
rm -rf $TMPDIR/react-*
yarn install
npm cache clean
yarn cache clean
yarn add uuid
```


If you don't have yarn installed, run these commands instead:
```
watchman watch-del-all
rm -rf ./node_modules
npm cache clean
rm -rf $TMPDIR/react-*
npm install
npm cache clean
npm install uuid
```
Rebuild the project inside of Xcode and be sure to make any suggested modifications prior to running the app.
