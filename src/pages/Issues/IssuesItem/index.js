import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class IssuesItem extends Component {
  static propTypes ={
    issues: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
      html_url: PropTypes.string,
    }).isRequired,
  }

  openLink = async (url) => {
    try {
      return Linking.openURL(url);
    } catch (err) {
      return true;
    }
  }

  render() {
    const { issues } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: issues.user.avatar_url }} />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{issues.title}</Text>
          <Text style={styles.subtitle}>{issues.user.login}</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.openLink(issues.html_url)}
        >
          <Icon name="arrow-circle-right" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default IssuesItem;
