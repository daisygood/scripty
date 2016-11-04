import React, { Component } from 'react';
import { Text, View, Image, Modal, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import SignInForm from './SignInForm';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      username: '',
      password: '',
    };
  }

  // Navigation - Push to navigator to go to that specific route.
  navigate(routeName) {
    this.props.navigator.push({name:routeName})
  }

  // Change the state to make the modal visible
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // When the user presses the button on the modal,
  // dismiss it and navigate to the home route
  handleModalLoginButtonPress() {
    this.setModalVisible(false);
    this.navigate('Home');
  }

  // Set username from within modal
  setUsername(username) {
    this.setState({username})
  }

  // Set password from within modal
  setPassword(password) {
    this.setState({password})
  }

  render() {
    const { title, viewStyle, cardStyle, textStyle, pinkCardStyle,
      whiteCardStyle, darkTextStyle, lightTextStyle, imageStyle, imageViewStyle,
      textInputStyle } = styles;
    return (
      <View style={viewStyle}>
        <SignInForm visible={this.state.modalVisible}
        handleModalLoginButtonPress={this.handleModalLoginButtonPress.bind(this)}
        setUsername={this.setUsername.bind(this)}
        setPassword={this.setPassword.bind(this)} />
        <View style={imageViewStyle}>
          <Image
            source={require('../../lib/images/wordmarkCoral.png')}
            style={imageStyle}
          />
        </View>
        <TouchableHighlight onPress={() => this.setModalVisible(true)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Log In</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.setModalVisible(true)} style={{...cardStyle, ...whiteCardStyle}} underlayColor={grey}>
          <Text style={darkTextStyle}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  title: {
    color: coral,
    fontSize: 60,
    fontFamily: 'Futura'
  },
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
    position: 'relative',

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: coral,
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    height: undefined,
    resizeMode: 'contain',
  },
  imageViewStyle: {
    height: 100,
  },
  textInputStyle: {
    height: 60,
    width: Dimensions.get("window").width - 40,

    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 5,
    borderColor: coral,
    borderWidth: 1,

    color: coral,
    fontSize: 20,
    textAlign: 'center'

  }
}


export default Login;





