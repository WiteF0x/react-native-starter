import React, { useRef } from 'react';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as COLORS from '../../constants/colors';

import styles from './styles';

const Home = ({ count, reset, inc, dec }) => {
  const minus = useRef(new Animated.Value(0)).current;
  const refresh = useRef(new Animated.Value(0)).current;
  const add = useRef(new Animated.Value(0)).current;

  const animate = (value) => Animated.timing(value, { toValue: 1, duration: 500 }).start();
  
  const funcWrapper = (func, value) => {
    func();
    startAnimation(value);
  };

  const startAnimation = (value) => {
    value.setValue(0);
    animate(value);
  };

  const button = (func, icon, value) => (
    <Animated.View style={{ transform: [{ rotate: value }] }}>
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={func}
      >
        <Icon name={icon} size={40} color={COLORS.DEFAULT_TEXT_ICON_COLOR}/>
      </TouchableOpacity>
    </Animated.View>
  );

  const bottom = () => (
    <View style={styles.bottom}>
      { button(() => funcWrapper(dec, minus), 'remove-outline', rotateMinus) }
      { button(() => funcWrapper(reset, refresh), 'refresh-outline', rotateRefresh) }
      { button(() => funcWrapper(inc, add), 'add-outline', rotateAdd) }
    </View>
  );

  const rotateMinus = minus.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateRefresh = refresh.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateAdd = add.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.count}>Count: { count }</Text>

        { bottom() }
      </SafeAreaView>
    </View>
  );
};

export default Home;
