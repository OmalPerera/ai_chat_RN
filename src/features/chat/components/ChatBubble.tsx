import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, images} from '../../../utils';

type ChatBubbleComponentProps = {
  isBot: boolean;
  msg: string;
};

const ChatBubbleComponent = ({
  isBot = false,
  msg = '',
}: ChatBubbleComponentProps): React.JSX.Element => {
  const getAvatarImage = () => {
    return isBot
      ? images.botHeadshot
      : {uri: 'https://i.pravatar.cc/300?img=12'};
  };
  return (
    <View style={[styles.bubbleContainer, isBot ? styles.botMsgBg : {}]}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarSty}>
          <Image
            source={getAvatarImage()}
            style={styles.avatarImg}
            resizeMode="contain"
          />
        </View>
      </View>
      <View>
        <Text style={styles.botText}>{msg}</Text>
      </View>
    </View>
  );
};

export default ChatBubbleComponent;

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
  },
  botMsgBg: {
    backgroundColor: colors.greySecondary,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  avatarSty: {
    backgroundColor: colors.greyBg,
    padding: 7,
    borderRadius: 20,
  },
  avatarImg: {
    width: 21,
    height: 21,
  },
  botText: {
    color: colors.white,
    fontSize: 16,
  },
});
