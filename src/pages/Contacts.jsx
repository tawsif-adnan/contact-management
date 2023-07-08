import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const Contacts = () => {
  const API = useAxios();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API("/contacts")
      .then((data) => {
        setContacts(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = () => {};

  const handleDelete = () => {};

  return (
    <div>
      <SectionTitle title="Contacts"></SectionTitle>
      <Link to="/addContact">
        <div className="text-end">
          <button className="w-52 py-1 px-5 border-2 border-blue-500 uppercase font-medium hover:bg-blue-500 cursor-pointer hover:text-white mb-5">
            Add New Contact
          </button>
        </div>
      </Link>
      <div className="overflow-x-auto max-w-3xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <Link to="updateContact">
                    <button
                      onClick={handleUpdate}
                      className="py-2 px-3 border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={handleDelete}
                    className="py-2 px-3 border-2 border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
