import React, { Component } from 'react';
import RepositoryItem from './RepositoryItem';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

import styles from './styles';
import api from '~/services/api';

export default class Repositories extends Component {
  state = {
    data: [],
    loading: false,
    repository: '',
    error: null,
    refreshing: false,
  };

  async componentDidMount() {
    await this.loadStories();
    // await AsyncStorage.clear();
  }

  loadStories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@githuber:repositories');
    if (repositories !== null) {
      const repo = JSON.parse(repositories);
      this.setState({ data: repo });
    }
    this.setState({ refreshing: false });
  }

  saveStore = async () => {
    const { data } = this.state;
    await AsyncStorage.setItem('@githuber:repositories', JSON.stringify(data));
  }

  checkRepositoryExist = async (dados) => {
    const { data } = this.state;
    const exist = data.find(r => r.id === dados.id);
    if (exist) {
      this.setState({ error: 'Este repositório já está adicionado. Por favor verifique!' });
    } else {
      this.setState({ data: [...data, dados] });
      await this.saveStore();
      this.setState({ error: null, repository: '' });
    }
    await this.loadStories();
    this.setState({ loading: false });
  }

  seachUser = async () => {
    const { repository } = this.state;
    this.setState({ loading: true, error: null });
    try {
      const response = await api.get(`repos/${repository}`);
      const dados = {
        id: response.data.id,
        name: response.data.full_name,
        organization: response.data.organization.login,
        avatar: response.data.organization.avatar_url,
      };
      this.checkRepositoryExist(dados);
    } catch (err) {
      this.setState({ loading: false, error: 'Usuário e/ou repositório incorreto!' });
    }
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        style={styles.flat}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadStories}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { loading, repository, error } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.containerForm}>
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuario/repositorio"
              unserlineColorAndroid="tranparent"
              value={repository}
              onChangeText={text => this.setState({ repository: text })}
            />
            <TouchableOpacity style={styles.btn} onPress={this.seachUser}>
              { loading ? <ActivityIndicator size="small" color="#666" /> : <Icon name="plus-square" size={35} style={styles.icon} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerList}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}
