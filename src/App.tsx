import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VideoWithOverlays} from './components/VideoWithOverlays';
// import {MyText} from './components/MyText';

export default function App() {
  // a static image stored into the assets folder
  const imgLy = require('./assets/images/IMG_LY.png');

  return (
    <View style={styles.container}>
      <VideoWithOverlays
        videoComponentProps={{
          // replace this free video source with your video
          source: {
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
        }}
        // overlay text
        text={'IMG.LY'}
        // overlay image
        imageSrc={imgLy}
      />
    </View>
    // <View>
    //   <MyText />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
