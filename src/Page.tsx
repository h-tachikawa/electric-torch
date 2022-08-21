import React, {useState} from 'react';
import {View, SafeAreaView, NativeModules, StyleSheet} from 'react-native';
import {Header, Button, Slider, Icon, lightColors} from '@rneui/themed';

export const Page = () => {
  const [isActive, setIsActive] = useState(false);
  const [brightness, setBrightness] = useState(0.5);

  const toggle = () => {
    NativeModules.ElectricTorchModule.toggle(isActive);
    setIsActive(prev => !prev);
  };

  const changeBrightness = (nextBrightness: number) => {
    if (!isActive) {
      return;
    }
    NativeModules.ElectricTorchModule.changeBrightness(brightness);
    setBrightness(nextBrightness);
  };

  return (
    <SafeAreaView>
      <Header
        containerStyle={styles.container}
        leftComponent={{icon: 'menu', color: '#FFF'}}
        centerComponent={{text: '懐中電灯アプリ(仮)', style: styles.heading}}
      />
      <View style={{alignItems: 'center'}}>
        <Slider
          disabled={!isActive}
          value={brightness}
          onValueChange={changeBrightness}
          minimumValue={0.01}
          maximumValue={1.0}
          step={0.01}
          thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
          style={{width: '90%'}}
          thumbProps={{
            children: (
              <Icon
                name="brightness-6"
                type="material-community"
                size={20}
                reverse
                containerStyle={{bottom: 20, right: 20}}
                color={isActive ? lightColors.secondary : lightColors.grey4}
              />
            ),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Button
            color="secondary"
            title={isActive ? '消灯する' : '点灯する'}
            onPress={toggle}
            containerStyle={{width: 150}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 10,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
