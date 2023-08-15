import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, images} from '../../../utils';

const StartChatInstructionsComponent = () => {
  return (
    <View style={styles.instructionContainer}>
      <View>
        <Image
          source={images.botWithMagnifier}
          resizeMode="contain"
          style={styles.botImageStyles}
        />
      </View>
      <View style={styles.lowerContentContainer}>
        <View style={styles.spinnedArrowContainer}>
          <Image
            source={images.onboardArrow}
            resizeMode="contain"
            style={styles.spinnedArrowImg}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.instructionHeader}>Start a new conversation</Text>
          <Text style={styles.instructionDetails}>
            Type your first message below.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StartChatInstructionsComponent;

const styles = StyleSheet.create({
  instructionContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  botImageStyles: {
    width: 120,
  },
  lowerContentContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  spinnedArrowContainer: {
    flex: 1,
  },
  spinnedArrowImg: {
    height: 75,
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 30,
  },
  instructionHeader: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
    marginBottom: 8,
  },
  instructionDetails: {
    fontSize: 14,
    color: colors.white,
  },
});
