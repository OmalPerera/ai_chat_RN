import React, {memo, useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, images} from '../../../utils';

interface InputComponentProps {
  onSend: (msg: string) => void;
}

const InputComponent = ({onSend}: InputComponentProps): React.JSX.Element => {
  const [msg, setMsg] = useState('');

  return (
    <View style={styles.inputSectionContainer}>
      <View style={styles.txtInputWraper}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setMsg}
          placeholder="Type here..."
          value={msg}
          inputMode="text"
          multiline
          placeholderTextColor={colors.white}
        />
        <TouchableOpacity>
          <Image source={images.repeat} style={styles.regenerateImg} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.sendBtnPressable}
        onPress={() => {
          onSend(msg);
        }}>
        <Image source={images.send} style={styles.sendImg} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(InputComponent);

const styles = StyleSheet.create({
  inputSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: colors.greyBorder,
    borderTopWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  txtInputWraper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.greySecondary,
    marginEnd: 10,
    borderColor: colors.greyBorder,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  inputStyle: {
    color: colors.white,
    fontSize: 17,
    paddingTop: 12,
    flex: 1,
    height: 45,
  },
  sendBtnPressable: {
    backgroundColor: colors.themeColor,
    padding: 13,
    borderRadius: 25,
  },
  regenerateImg: {
    height: 20,
    width: 20,
  },
  sendImg: {
    height: 21,
    width: 21,
  },
});
