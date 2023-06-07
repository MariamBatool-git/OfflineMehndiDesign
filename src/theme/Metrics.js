import { Dimensions } from "react-native";

// base width and height
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// screen width and height
const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

// scale constants used for scaling
const scaleHorizontal = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

// ratio constant for padding,margin ,width,height (used for resizing)
const ratio = (iosSize, androidSize, doScale = false) =>
  Platform.select({
    ios: doScale ? scaleVertical(iosSize) : iosSize,
    android: doScale
      ? scaleVertical(androidSize || iosSize)
      : androidSize || iosSize,
  });

// use for apply font size (used for resizing)
const generatedFontSize = (iosFontSize, androidFontSize, doScale = false) =>
  Platform.select({
    ios: doScale ? scaleVertical(iosFontSize) : iosFontSize,
    android: doScale
      ? scaleVertical(androidFontSize || iosFontSize)
      : androidFontSize || iosFontSize,
  });

// constants status/nav bar
// const navbarHeight = Platform.OS === 'ios' ? 44 : 56;
// const statusBarHeight =
//   Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : StatusBar.currentHeight;
// const navBarWithStatusHeight = navbarHeight + statusBarHeight;
 //const bottomSpaceIphoneX = 34;

export default {
  // general functions
  scaleHorizontal,
  scaleVertical,
  ratio,
  generatedFontSize,

  // general constants
  screenWidth,
  screenHeight,
  // //navbarHeight,
  // //statusBarHeight,
  // //navBarWithStatusHeight,
  // bottomSpaceIphoneX,

  // // app specific
  // baseMargin: ratio(16),
  // smallMargin: ratio(8),
  // midMargin: ratio(12),
  // largeMargin: ratio(20),
  // hitSlop: {
  //   top: ratio(10),
  //   bottom: ratio(10),
  //   left: ratio(10),
  //   right: ratio(10),
  // },
  // hitSlopLarge: {
  //   top: ratio(20),
  //   bottom: ratio(20),
  //   left: ratio(20),
  //   right: ratio(20),
  // },
  // bottomPadding: isIphoneX() ? bottomSpaceIphoneX : ratio(20),
  // bottomPaddingIphoneXOnly: isIphoneX() ? bottomSpaceIphoneX : 0,
};