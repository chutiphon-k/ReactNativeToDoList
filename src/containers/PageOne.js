import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import actions from '../actions'

const { getUsers } = actions

class PageOne extends Component {

  state = { x: 0 }

  aaa () {
    this.props.getUsers()
  }

  increaseX () {
    this.setState({ x: this.state.x + 1})
  }


  render(){
    console.log(this.props.users)
    return (
      <View style={{marginTop: 128}}>
        <Text>{this.state.x}</Text>
        <List>
          {
            this.props.users.map(user => {
              return (
                <ListItem key={user.name}>
                    <Text>{user.id}</Text>
                    <Text note>{user.name}</Text>
                </ListItem>
              )
            })
          }
        </List>
        <Button onPress={() => this.aaa()} block success> User </Button>
        <Button onPress={() => this.increaseX()} > Click </Button>
        <Button onPress={() => Actions.pageTwo({text: 'Hello World!'})} > Go To P2 </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users.get.data
})

const mapDispatchToProps = (dispatch) => ({
  getUsers() {
      dispatch(getUsers())
  }
})

PageOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne)

export default PageOne