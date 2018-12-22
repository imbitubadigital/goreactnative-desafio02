import React from 'react';

import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.title}>Repositórios</Text>
  </View>
);

export default Header;
