import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
//import { FormValidationMessage } from 'react-native-elements';
//import './stylesStandard.less';
import {default as std} from './css/stylesMobileStd.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'message' };
  }
  
  someFunction(e){
	  return;
	  //alert('Wow');
  }

  render() {
    return (
		<View style={[std.f_1, std.p_t_120, std.p_l_40, std.p_r_40, std.b_g_c_Cyan_500] }>
			<Text style={[std.h3,{textAlign:"center"}]} >Roman Cheskidov</Text>
			<Text>Phones: +1 917 81 53952, +1 650 7 410014</Text>
			<Text>WhatsApp +7 912 66 19279</Text>
			<Text>Skype rootstem</Text>
			<Text>Email t3531350@yahoo.com, r1.userto.com</Text>
			<Text>Name</Text>
			<TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			/>
			
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
