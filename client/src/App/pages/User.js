import React from 'react';
import styles from './User.css';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.inputbox = "";
    this.state = {
      newFriend: '',
      username: 'desean jackson'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  handleChange (e) {
    this.inputbox= e.target.value;
  }
  handleSubmit (e) {
    this.setState({
      username: this.inputbox
    })
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }

  render() {
    return (
      <div id="box">
        Hello {this.state.username} <br/>
        Change Name:
        <input id="userinput" className="boxStyle"
          type="text"
          defaultValue={this.state.username}
          onChange={this.handleChange}
        /> <br/>
        <button onClick={this.handleSubmit}> Submit
        </button>
        <br/><br/>
        Friends of {this.state.username}:
        <ul>
          {this.props.names.map((friend,i) => <li key={i}>{friend}</li>)}
        </ul>

        <input className="boxStyle"
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}

export default User;
