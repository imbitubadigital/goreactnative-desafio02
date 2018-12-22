import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';

import api from '~/services/api';

import Header from './Header';
import IssuesItem from './IssuesItem';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    data: [],
    refreshing: true,
    error: null,
    active: 'all',
  };

  async componentDidMount() {
    await this.loadIssues('all');
  }

  loadIssues = async (type) => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.setState({ refreshing: true });
    try {
      const { data } = await api.get(`repositories/${id}/issues?state=${type}`);
      this.setState({
        data, refreshing: false, active: type,
      });
    } catch (err) {
      this.setState({ error: 'Issues não localizadas!' });
    }
  }

  selectTypeIssues = async (type) => {
    await this.loadIssues(type);
  }

  renderListItem = ({ item }) => <IssuesItem issues={item} />

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        style={styles.flat}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { navigation } = this.props;

    const title = navigation.getParam('name');
    const { error, active } = this.state;
    return (
      <View style={styles.container}>
        <Header title={title} />
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttomStart} onPress={() => this.selectTypeIssues('all')}>
            <Text style={styles.circle}>{active === 'all' ? <Icon name="circle" size={16} /> : ''}</Text>
            <Text style={active === 'all' ? styles.textButtomActive : styles.textButtom}>

              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={() => this.selectTypeIssues('open')}>
            <Text style={styles.circle}>{active === 'open' ? <Icon name="circle" size={16} /> : ''}</Text>
            <Text style={active === 'open' ? styles.textButtomActive : styles.textButtom}>

              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomEnd} onPress={() => this.selectTypeIssues('closed')}>
            <Text style={styles.circle}>{active === 'closed' ? <Icon name="circle" size={16} /> : ''}</Text>
            <Text style={active === 'closed' ? styles.textButtomActive : styles.textButtom}>

              Fechadas
            </Text>
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.containerList}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}
