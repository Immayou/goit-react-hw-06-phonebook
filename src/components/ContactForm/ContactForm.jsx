import { useState } from "react";
import PropTypes from 'prop-types'; 
import {TiPhoneOutline} from "react-icons/ti";
import { generate } from "shortid";
import { Title, PhoneForm, NameLabel, InputNameField, NumberLabel, InputNumberField, FormButton } from './ContactForm.styled'

const ContactForm = ({submitData}) => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const nameInputId = generate();
  const numberInputId = generate();

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break;
      case 'number':
        setNumber(e.target.value)
        break;
      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const contactToAdd = {
      name, 
      number,
      id: generate()
    }
    submitData(contactToAdd)
    reset()
    }
    
  const reset = () => {
    setName('')
    setNumber('')
    }

  return (
      <PhoneForm onSubmit={handleSubmit} >
        <Title> <TiPhoneOutline size={33}/> Phonebook</Title>
        <NameLabel htmlFor={nameInputId}>Name</NameLabel>
          <InputNameField
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleInput}
            required
          />
        <NumberLabel htmlFor={numberInputId}>Number</NumberLabel>
          <InputNumberField
            id={numberInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleInput}
            required
          />
        <FormButton type='submit'>Add contact</FormButton>
      </PhoneForm>
    );
};

export default ContactForm;

ContactForm.propTypes = {
  submitData: PropTypes.func.isRequired,
}

