import style from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };

    this.props.onSubmitData(contactForAdd);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={style.contactform}>
        <form type="submit" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="The name can only consist of letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer etc."
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="The phone number must consist of 11-12 digits and may contain numbers, spaces, dashes, curly brackets and may begin with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;
