import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import sizes from '../../config/sizes';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <View style={{height: sizes.xl3}} />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.yellow,
  },
  title: {
    fontSize: sizes.xl5,
    color: colors.black,
    fontFamily: fonts.medium,
  },
});
