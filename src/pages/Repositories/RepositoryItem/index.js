import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import styles from './styles';


class RepositoryItem extends Component {
  static propTypes ={
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  teste = () => {}

  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: repository.avatar }} />
        <View style={styles.details}>
          <Text style={styles.title}>{repository.organization}</Text>
          <Text style={styles.subtitle}>{repository.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            const { navigation } = this.props;
            navigation.navigate('Issues', {
              id: repository.id,
              name: repository.name,
              organization: repository.organization,
            });
          }}
        >
          <Icon name="arrow-circle-right" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(RepositoryItem);
