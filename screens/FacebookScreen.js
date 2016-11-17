import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  WebView,
  Text,
  TextInput,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import Router from '../navigation/Router';

export default class FacebookScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  Facebook',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 25, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }

  render() {
    return (
	<View style={styles.container}>
		<View style={styles.mainContainer}>
			<WebView 
				source={{uri: 'https://www.facebook.com/pages/Helena-High-School/112492818766942?fref=ts'}}
			/>
	  </View>
	  </View>
    );
  }
}


const styles = StyleSheet.create({
container: {
    flex: 1,
	backgroundColor: '#990033',
  },
  mainContainer: {
	flex: 1,
    backgroundColor: '#999999',
    paddingVertical: 25,
    paddingHorizontal: 5,
	marginBottom: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#CC0033',
  },
  button: {
	flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderRadius: 5,
    marginTop: 10,
	marginBottom: 10,
  },
  label: {
    width: 230,
	marginLeft: 5,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
	color:'#dddddd'
  },
});
