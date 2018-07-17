import React, { Component } from 'react';
import Card from '../../components/card/card';
import UserCard from '../../components/userCard/userCard';

import './chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: undefined,
      loading: true,
      filteredConversations: undefined,
    }
  }
  componentDidMount() {
    return new Promise(async resolve => {
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            users: result,
          })
        }
      );
      if (this.state.users !== undefined) {
        const usersMsgs = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
          (result) => {
            const filteredConversations = this.state.users.map((user) =>
            result.filter((userMsgs) =>
              (user.id === userMsgs.userId && Object.assign(userMsgs))));
          this.setState({
            filteredConversations,
            loading: false,
          });
          }
        );
      } else {
        resolve();
      }
    });
  }

  render() {
    if(this.state.loading === false) {
      return (
        <Card>
          {this.state.users.map((user, index) => (
            <UserCard
              name={user.username}
              userId={user.id}
              photo={user.phot}
            />
          ))}
        </Card>
      )
    }
    return (
      <Card />
    )
  }
}

export default Chat;