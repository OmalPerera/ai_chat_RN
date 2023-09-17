import React, {useMemo, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../utils';

const AboutScreen = (): React.JSX.Element => {
  const [theme, setTheme] = useState(-1);
  const [number, setNumber] = useState(0);

  const onChangeNumber = num => {
    setNumber(num);
  };

  const multiplyBy100 = (value: number) => {
    console.log('val :', typeof value);

    for (let i = 0; i < 1999999999; i++) {}
    return value * 100;
  };

  const result = useMemo(() => multiplyBy100(number), [number]);

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
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number.toString()}
          keyboardType="numeric"
        />
        <Button
          onPress={() => {
            setTheme(theme * -1);
          }}
          title="Change theme"
        />
        <Text>{result}</Text>
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
