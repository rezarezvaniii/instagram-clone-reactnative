import React, { useRef } from 'react';
import { View, Animated, PanResponder , Text } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const MyComponent = () => {
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const MIN_DRAG_DISTANCE = screenWidth * 0.5;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 0) {
          drawerAnimation.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > MIN_DRAG_DISTANCE) {
          // کاربر دراور را به بیرون کشیده است
          // اینجا می‌توانید کد مربوط به باز کردن دراور را اضافه کنید
        } else {
          // کاربر دراور را به سمت داخل برگردانده یا مقدار انیمیشن را صفر کنید
          Animated.spring(drawerAnimation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const drawerStyle = {
    transform: [
      {
        translateX: drawerAnimation.interpolate({
          inputRange: [0, screenWidth],
          outputRange: [0, screenWidth * 0.5],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View style={{ flex: 1 , backgroundColor:'red'}}>
      <Animated.View
        style={[{ flex: 1, backgroundColor: 'lightgray' }, drawerStyle]}
        {...panResponder.panHandlers}
      >
        
        {/* محتوا دراور */}
      </Animated.View>
    </View>
  );
};

export default MyComponent;