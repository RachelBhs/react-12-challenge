import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={activeId === 'home' ? 'active' : 'home'}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={activeId === 'about' ? 'active' : 'about'}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={activeId === 'contact' ? 'active' : 'contact'}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
