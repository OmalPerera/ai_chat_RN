import React, {useCallback, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import InputComponent from '../chat/components/InputComponent';

const AboutScreen = (): React.JSX.Element => {
  const data = ['A', 'B', 'C', 'D'];
  const [theme, setTheme] = useState(-1);
  const [emp, setEmp] = useState(data);

  const onPress = useCallback(
    (txt: string) => {
      const filteredEmp = emp.filter(e => e === txt);
      setEmp(filteredEmp);
    },
    [emp],
  );

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle} />
      <View
        style={[
          styles.outermostContainer,
          theme === -1
            ? {backgroundColor: '#eeeeee'}
            : {backgroundColor: '#aaaaaa'},
        ]}>
        <Button
          onPress={() => {
            setTheme(theme * -1);
          }}
          title="Change theme"
        />
        <Text>{emp.toString()}</Text>
        <InputComponent onSend={onPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundStyle: {
    backgroundColor: colors.greyBg,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AboutScreen;
