import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          Generators: 'Generators',
          Groups: 'Groups',
          Segregation: 'Segregation',
          Descarte: 'Descarte',
          Leis: 'Leis',
          Quiz: 'Quiz',
          Pesquisa: 'Pesquisa',
          MaisInfo: 'MaisInfo',
        }
      },
      NotFound: '*',
    },
  },
};
