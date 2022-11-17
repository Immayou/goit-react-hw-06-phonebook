import PropTypes from 'prop-types'; 
import { ListOfContacts, ContactItem, NameInfo, NumberInfo, DeleteButton } from './ContactList.styled'

const ContactList = ({contacts, onDeleteContact}) => {

        return (
            <ListOfContacts>
                {contacts.map(({id, name, number}) => (
                   <ContactItem key={id}>
                    <div>
                    <NameInfo>{name}: </NameInfo>
                    <NumberInfo>{number}</NumberInfo>
                    </div>
                    <DeleteButton type='button' onClick={() => (onDeleteContact(id))}>Delete</DeleteButton>
                   </ContactItem>
                ))}
            </ListOfContacts>
        );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
          }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}