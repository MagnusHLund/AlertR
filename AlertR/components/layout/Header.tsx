import React from 'react';
import {Text} from 'react-native';

function Header(): React.JSX.Element {
  const style = {
    backgroundColor: '#fff',
    color: 'red',
    alignSelf: 'center',
    fontSize: 25,
  };

  return <Text style={style}>Welcome to AlertR</Text>;
}

export default Header;
