import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  let filteredContacts = [];

  if (contacts !== undefined) {
    filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr.trim().toLowerCase())
    );
  }

  if (!filteredContacts.length) {
    return "No contacts to show...";
  }
  return (
    <>
      <ul className={css.ul}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
