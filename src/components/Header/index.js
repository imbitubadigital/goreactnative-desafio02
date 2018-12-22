import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  backRepo = () => {};

  render() {
    const { title, back } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity onPress={()=>{}}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.left}>
          <Text>{title}</Text>
        </View>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
