import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import "./ContactList.css";

// Make sure this path is correct

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all contacts when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await api.get('/api/contact/');
        setContacts(response.data);
      } catch (err) {
        setError('Error fetching contacts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Delete a contact by ID
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await api.delete(`/api/contact/delete/${id}`);
        setContacts(contacts.filter(contact => contact._id !== id)); // Remove deleted contact from state
        alert('Contact deleted successfully!');
      } catch (err) {
        alert('Error deleting contact.');
        console.error('Error deleting contact:', err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.telephone}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                  <button onClick={() => handleDelete(contact._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactList;
