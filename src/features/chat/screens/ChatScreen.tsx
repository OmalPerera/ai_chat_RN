import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
import StartChatInstructionsComponent from '../components/StartChatInstructionsComponent';
import {useDispatch, useSelector} from 'react-redux';
import {ConversationType} from '../../../types/chat.types';
import {RootStoreType} from '../../../store/reducers/types';
import ChatBubbleComponent from '../components/ChatBubble';
import {sendMsgAction} from '../actions/chatActions';
import {colors} from '../../../utils';

const ChatScreen = (): React.JSX.Element => {
  const chatConversation = useSelector(
    (state: RootStoreType) => state.chatReducer.conversationThread,
  );

  const dispatch = useDispatch();

  const onMsgSend = (msg: string) => {
    const message: ConversationType = {
      timeStamp: Date.now(),
      isBot: false,
      msgContent: msg,
    };
    dispatch<any>(sendMsgAction(message));
  };

  const onRightBtnPress = () => {};

  const onMenuBtnPress = () => {};

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle} />
      <StatusBar barStyle={'light-content'} backgroundColor={colors.greyBg} />
      <View style={styles.bodyContainer}>
        <View style={styles.outermostContainer}>
          <NavBarComponent
            onMenuPress={onMenuBtnPress}
            onRightBtnPress={onRightBtnPress}
          />
          <ScrollView style={styles.promptContainer}>
            {chatConversation.length > 0 ? (
              <>
                {chatConversation.map(e => (
                  <ChatBubbleComponent
                    isBot={e.isBot}
                    msg={e.msgContent}
                    key={e.timeStamp}
                  />
                ))}
              </>
            ) : (
              <StartChatInstructionsComponent />
            )}
          </ScrollView>
          <InputComponent onSend={onMsgSend} />
        </View>
      </View>
      <SafeAreaView style={styles.backgroundStyle} />
    </>
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
  bodyContainer: {
    backgroundColor: colors.greyBg,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: colors.greyBg,
  },
});

export default ChatScreen;
