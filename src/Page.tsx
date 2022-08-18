import React, {useState} from 'react';
import {View, Text, SafeAreaView, NativeModules, Button} from 'react-native';

export const Page = () => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => {
    NativeModules.ElectricTorchModule.toggle(isActive);
    setIsActive(prev => !prev);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>懐中電灯アプリ(仮)</Text>
        <Button title="TOGGLE" onPress={toggle} />
      </View>
    </SafeAreaView>
  );
};
