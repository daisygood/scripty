import React, { Component } from 'react';
import { Text, View, Dimensions, AsyncStorage } from 'react-native';
import { localIp } from '../../config/ip.js'
import UserLessons from './userLessons'
import Days from './days'
import ProfileInfo from './ProfileInfo'


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.getUserInfo()
  }

  getUserInfo() {
    //Using get all users to test dummy user
    //Need to get user by ID once signin
    //and save users to DB is implemented
    AsyncStorage.multiGet(['id', 'jwt'])
    .then((store) => {
      let url=`http://${localIp}:3011/api/users/${store[0][1]}`
      fetch(url, {
        headers:{
          'authorization': store[1][1]
        }
      })
      .then(user => {
        return user.json()
      })
      .then(user => {
        this.setState({user: user});
      })
    })
  }

  render() {
    const { viewStyle, textStyle, profileStyle, nameTextStyle } = styles;
    if (this.state.user) {
      return (
        <View style={profileStyle}>
          <ProfileInfo user={this.state.user} navigator={ this.props.navigator }/>
          <Days streak={this.state.user.streak} navigator={ this.props.navigator }/>
          <UserLessons user={this.state.user} navigator={ this.props.navigator }/>
        </View>
      )
    } else {
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>Loading...</Text>
        </View>
      )
    }
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
    backgroundColor: 'white'
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 30,
  },
  profileStyle: {
    marginTop: 70,
    height: Dimensions.get("window").height,
    alignItems: 'center',
    //justifyContent: 'flex-start',
    backgroundColor: 'white',
    //flex: 1
  }
}

export default Profile;