import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import User from './User'

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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let users = await fetch("/api/poker/asdf/users");
    let usersJson = await users.json();
    this.setState({
      users: usersJson.map(u => new User(u.id, u.name))
    });
  }

  render() {
    return (
      <main>
        <section className="table">
          <Field users={this.state.users} />
        </section>
        <section>
          <Hand />
        </section>
      </main>
    )
  }
}

export default App;
