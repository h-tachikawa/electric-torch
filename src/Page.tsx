import React, {useState} from 'react';
import {View, SafeAreaView, NativeModules, StyleSheet} from 'react-native';
import {Header, Button, Slider, Icon, lightColors} from '@rneui/themed';

export const Page = () => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    NativeModules.ElectricTorchModule.toggle(isActive);
    setIsActive(prev => !prev);
  };

  return (
    <SafeAreaView>
      <Header
        containerStyle={styles.container}
        leftComponent={{icon: 'menu', color: '#FFF'}}
        centerComponent={{text: '懐中電灯アプリ(仮)', style: styles.heading}}
      />
      <View style={{alignItems: 'center'}}>
        <Text>現在の状態: {currentState}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Button
            color="secondary"
            title="PUSH"
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
