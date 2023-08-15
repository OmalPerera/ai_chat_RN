import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
import StartChatInstructionsComponent from '../components/StartChatInstructionsComponent';

const ChatScreen = (): React.JSX.Element => {
  return (
    <View style={styles.outermostContainer}>
      <NavBarComponent />
      <ScrollView style={styles.promptContainer}>
        <StartChatInstructionsComponent />
      </ScrollView>
      <InputComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  promptContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});

export default ChatScreen;
