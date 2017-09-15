import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import User from './User';
import io from 'socket.io-client';
import uid from 'uid';

class Card extends Component {
  render() {
    if (!this.props.value) return null;
    return (
      <button className={"card" + (this.props.selected ? ' selected' : '')} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Hand extends Component {
  constructor() {
    super();
    this.state = {
      selectedCard: 1,
    };
  }

  renderCard(i) {
    return (
      <Card
        key={i}
        value={i}
        selected={this.state.selectedCard === i}
        onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    let cards = [1, 2, 3, 5, 8, 13, 21];
    return (
      <div className="Hand">
        {cards.map((i) => this.renderCard(i))}
      </div>
    )
  }

  handleClick(i) {
    this.setState({ selectedCard: i });
  }
}

class Field extends Component {
  render() {
    return (
      <div className="field">
        {this.props.users.map((user) => {
          return <figure key={user.id} className="placeholder-outer">
            <div className="placeholder">
              <Card value={user.selectedCard} onClick={() => { }} />
            </div>
            <figcaption>{user.name}</figcaption>
          </figure>
        })}
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin(new User(uid(), this.state.value));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    var currentUser = User.getCurrentUser();

    this.state = {
      users: [],
      currentUser: currentUser,
      roomId: null
    };
  }

  async componentWillMount() {
    let roomId = this.props.match.params.roomId;
    let socket = this.socket = io("/poker");
    socket.emit('room', roomId);
    if (this.state.currentUser) {
      socket.emit('add user', this.state.currentUser);
    }

    socket.on('enter user', (user) => {
      console.log('enter user', user);
      this.setState({
        users: [...this.state.users, user]
      });
      console.log(this.state);
    });
  }

  async componentDidMount() {
    let roomId = this.props.match.params.roomId;
    let users = await User.getUsersForRoom(roomId);
    this.setState({
      users: users,
      roomId: roomId
    });
  }

  render() {
    if (this.state.currentUser) {
      return (
        <main>
          <section className="table">
            <Field users={this.state.users} />
          </section>
          <section>
            <Hand />
          </section>
        </main>
      );
    } else {
      return <Login onLogin={(event) => this.onLogin(event)} />
    }
  }

  onLogin(user) {
    console.log("Setting user", user);
    this.setState({ currentUser: user });

    this.socket.emit('add user', user);
    User.setCurrentUser(user);
  }
}

export default App;
