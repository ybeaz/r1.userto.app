import React from 'react';
import { Modal, Button, TextInput, StyleSheet, Text, View } from 'react-native';
//import { FormValidationMessage } from 'react-native-elements';
//import './stylesStandard.less';
import {default as std} from './css/stylesMobileStd.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', modalVisible: false };
	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
	  console.info('closeModal pressed');
	  //alert('Button closeModal!');
	  this.setState({modalVisible: false, text: ''});
  }
  openModal(){
	  
	  /*
		jQuery.ajax({
			type: 			'POST',
			url: 			'http://userto.com/php/phpGetPost.php',
			data: {
				optPost:	window.feedback.form[f].email[0].optPost,
				emailTo:	window.feedback.form[f].email[0].toEmail,
				emailFrom:	window.feedback.form[f].email[0].fromEmail,
				emailBCC:	window.feedback.form[f].email[0].BCC,
				topic:		window.feedback.form[f].email[0].topic,				
				message:	window.feedback.form[f].email[0].message,
				chat_id:	window.feedback.form[f].email[0].chatId,
				txt:		txt,
				parse_mode: 'HTML'
			},
			dataType: 'text',
			success: function(echo){
					
					//Form reset
					window.feedback.setFeedbackForm();					
					window.feedback.cleanFeedbackForm(f)
					//alert(echo);
					//console.info('email echo: ',echo);
				}
		});		  
	   
	fetch("http://userto.com/php/phpGetPost.php", {
	            method: "POST",
	            //what ever data you want to post with key value pair        
	            body: "message=manas&age=20",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	}})
	.then((response) => {
		//do something awesome that makes the world a better place
	});
	*/
	
	fetch('http://userto.com/php/phpGetPost.php', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			postOpt: 'emailTelegramFeedback',
			chat_id: '463530275',
			channel: 'Channel: r1.userto.app',
			txt: 'Message: ' + this.state.text,
			parse_mode: 'HTML',
		}),
	})
	.then( (response) => { 
		console.info('openModal pressed: ',this.state.text);
		//alert('Button openModal!');
		this.setState({modalVisible: true});
	});

  }
  
  render() {
    return (
		<View style={[std.f_1, std.p_t_70, std.p_l_40, std.p_r_40, std.b_g_c_Cyan_100] }>
			<Text selectable style={[std.h3,std.t_a_c]} >Roman Cheskidov</Text>
			<Text selectable >Phones: +1 917 81 53952, +1 650 7 410014</Text>
			<Text selectable>WhatsApp: +7 912 66 19279</Text>
			<Text selectable >Skype: rootstem</Text>
			<Text selectable>Email: t3531350@yahoo.com, r1.userto.com</Text>
			<Text></Text>
			<Text>You can send an instant message</Text>
			<TextInput
				style={{paddingTop: 6,
						paddingRight: 8,
						paddingBottom: 6,
						paddingLeft: 8,
						borderRadius: 5,
						textAlignVertical:'top',
						minHeight: 70, borderColor: 'grey', borderWidth: 1}}
				underlineColorAndroid='#b2ebf2'
				placeholder="type your message here"
				placeholderTextColor="grey"
				multiline={true}
				clearTextOnFocus={true}
				autoCorrect={true}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			/>
			<Text></Text>
			
			
			<Button
			  style={[{borderRadius: 5}]}
			  onPress={this.openModal}
			  title="Send message"
			  color="#841584"
			  accessibilityLabel="Learn more about this purple button"
			  hardwareAccelerated
			/>
			
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}>
            <View style={[styles.modalContainer, std.b_g_c_Red_50]}>
              <View style={styles.innerContainer}>
                <Text style={[{textAlign:"center"}]}>
					You sent the message.{"\n"}
					{this.state.text}.{"\n"}
					I will get in touch with you as soon as possible.
				</Text>
                <Text></Text>
				<Button
                    onPress={this.closeModal}
                    title="Close"
                >
                </Button>
              </View>
            </View>
          </Modal>			
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
