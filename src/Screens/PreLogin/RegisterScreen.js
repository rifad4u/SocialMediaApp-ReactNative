import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import { COLORS, IMAGES, SCREEN_ID } from "../../Common/Constants";
import Icon from 'react-native-vector-icons/FontAwesome';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.userNameRef = null
    this.passwordRef = null
    this.cnfrmPasswrdRef = null
    this.emailRef = null
    this.state = {
      secureTextEntry: true,
      userName: "",
      email: "",
      password: "",
      cnfrmPasswrd: "",
      userIdExits: ""
    }
  }
  onChangeUserName = (text) => {
    this.setState({ userName: text })
  }
  onChangeUserName = (text) => {
    this.setState({ password: text })
  }
  goToLogin=()=>{
      this.props.navigation.navigate(SCREEN_ID.LOGIN_SCREEN)
  }
  render() {
    return (
      <View onStartShouldSetResponder={() => { Keyboard.dismiss() }} style={Styles.PARENT_CONTAINER}>

        <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={IMAGES.LOGIN_SCREEN_BG} >
          <View style={Styles.CONTAINER}>
            <View style={Styles.TEXT_INP_CONTAINER}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Icon name="user" size={20} />
                <TextInput
                  ref={ref => this.userNameRef = ref}
                  style={Styles.TEXT_INP}
                  placeholderTextColor={COLORS.GRAY}
                  placeholder="UserName"
                  onSubmitEditing={() => this.emailRef.focus()}
                  returnKeyType="next"
                  onChangeText={() => null} />
              </View>
              {this.state.userIdExits == "true" ? <Icon name="check" size={20} color={COLORS.LIGHT_GREEN} />
                : this.state.userIdExits == "false" ? <Icon name="remove" size={20} color={COLORS.RED} /> : null}

            </View>
            <View style={[Styles.TEXT_INP_CONTAINER, { marginTop: 20 }]}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Icon name="envelope" size={20} color={COLORS.BLACK} />
                <TextInput
                  ref={ref => this.emailRef = ref}
                  style={Styles.TEXT_INP}
                  placeholderTextColor={COLORS.GRAY}
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordRef.focus()}
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={() => null} />
              </View>
            </View>
            <View style={[Styles.TEXT_INP_CONTAINER, { marginTop: 20 }]}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Icon name="lock" size={20} />
                <TextInput
                  ref={ref => this.passwordRef = ref}
                  style={Styles.TEXT_INP}
                  placeholderTextColor={COLORS.GRAY}
                  placeholder="Password"
                  returnKeyType="next"
                  onSubmitEditing={() => this.cnfrmPasswrdRef.focus()}
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={() => null} />
              </View>
              <Icon name="eye" size={20} onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })} />
            </View>
            <View style={[Styles.TEXT_INP_CONTAINER, { marginTop: 20 }]}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Icon name="lock" size={20} />
                <TextInput
                  ref={ref => this.cnfrmPasswrdRef = ref}
                  autoCapitalize= "none"
                  style={Styles.TEXT_INP}
                  placeholderTextColor={COLORS.GRAY}
                  placeholder="Confirm Password"
                  returnKeyType="done"
                //   secureTextEntry={this.state.secureTextEntry}
                  onChangeText={() => null} />
              </View>
              {/* <Icon name="eye" size={20} onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })} /> */}
            </View>

            <TouchableOpacity activeOpacity={.9} style={Styles.LOGIN_BUTTON}>
              <Text style={Styles.LOGIn_TEXT}>Register</Text>
            </TouchableOpacity>
            <Text style={Styles.FORGT_PASSWRD}>Already hav an account? <Text onPress={this.goToLogin} style={{color:COLORS.LIGHT_BLUE}}>Login</Text></Text>
          </View>
        </ImageBackground>
        
      </View>
    )
  }
}
const Styles = StyleSheet.create({
  PARENT_CONTAINER: {
    flex: 1,
    backgroundColor: COLORS.BLACK
  },
  CONTAINER: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TEXT_INP_CONTAINER: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    paddingVertical: 10,
    paddingRight: 15,
    paddingLeft: 15,
    width: "70%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  TEXT_INP: {
    alignItems: "center",
    fontSize: 15,
    marginLeft: 5,
    width: '90%'
  },
  LOGIN_BUTTON: {
    marginTop: 30,
    height: 30,
    width: '60%',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PALE_BLUE
  },
  LOGIn_TEXT: {
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  FORGT_PASSWRD: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20
  }
})
export default (RegisterScreen);