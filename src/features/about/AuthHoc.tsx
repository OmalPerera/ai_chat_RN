import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils';

const AuthHoc = (ChildComponent: any) => {
  const AuthComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
      setIsAuthenticated(true);
    }, []);

    if (isAuthenticated) {
      return <ChildComponent {...props} />;
    }
    return (
      <Text style={styles.chatNameTxt}>Please login to visit my profile</Text>
    );
  };
  return AuthComponent;
};

export default AuthHoc;

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.greyBorder,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  chatNameTxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
});
