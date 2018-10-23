import React from 'react'
import User from './User'

class Users extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    }
    this.addFriend = this.addFriend.bind(this)
  }
  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <User names={this.state.friends} addNew={this.addFriend}/>
      </div>
    )
  }
}

export default Users;
