import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  back = async () => {
    const { navigation } = this.props;
    navigation.navigate('Repositories');
  };

  render() {
    const { title } = this.props;
    const repo = title.split('/');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity onPress={this.back}>
          <Icon name="chevron-left" size={17} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{`Issues de: ${repo[1]}`}</Text>
      </View>
    );
  }
}

export default withNavigation(Header);
