import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contactsOperations';
import { filterContactsSelector, getItemsSelector } from '../../redux/selectors';
import { List } from 'antd';
import Avatar from 'react-avatar';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItemsSelector);
  const filter = useSelector(filterContactsSelector);

  return (
    <List>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <List.Item key={id}>
            <Avatar name={name} size='40' />
            <List.Item.Meta
              title={<a href='https://ant.design'>{`${name}`}</a>}
              description={`${number}`}
            />
            <button onClick={() => dispatch(deleteContacts(id))}>delete</button>
          </List.Item>
        ))}
    </List>
  );
};

export default ContactList;