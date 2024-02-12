## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# going to external link :

```TypeScript
import {Linking} from "react-native";

function naviagteToExternalLink(websiteLink : string) : void
{
	Linking.openURL(websiteLink);
}
```

## providing a click functionality :

by using **TouchableOpacity**

 we don’t need to provide styling like a button it by default gives a clicking look by reducing the opacity.

 and it will have the onPressed();

```TypeScript
export default function App()
{
	function goToExternalWebsite(websiteLink : string) : void
	{
			console.log("pressed");
	}
	return (
      <TouchableOpacity 
      onPressed = ()=>goToExternalWebsite(websiteLink)>
         <View>
            <Text>Read more</Text>
         </View>
      </TouchableOpacity>
	);
}
```