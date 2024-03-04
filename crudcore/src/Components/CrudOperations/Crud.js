import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class Crud extends Component {
  state = {
    data: [],
    showModal: false,
    selectedUser: null,
  };

  getRequest = (idUser, showAllUsers) => {
    const url = new URL("http://localhost:5172/User/Read");

    if (idUser) {
      url.searchParams.append("idUser", idUser);
    }

    if (showAllUsers) {
      url.searchParams.append("showAllUsers", showAllUsers);
    }

    axios.get(url.toString()).then((response) => {
      this.setState({ data: response.data.result.user });
    });
  };

  deleteUser = (idUser) => {
    const url = new URL("http://localhost:5172/User/DeleteUser");
    url.searchParams.append("idUser", idUser);
    url.searchParams.append("modifyBy", "ReactApp");

    axios.delete(url.toString()).then((response) => {
      if (response.data.Success) {
        this.getRequest(1, true);
      } else {
        alert("User deleted successfully.");
      }
    });
  };

  componentDidMount() {
    this.getRequest(1, true);
  }

  render() {
    return (
      <div className="Crud">
        <br />
        <button className="btn btn-success">Create User</button>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID User</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Date Creation</th>
              <th>Date Modification</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr key={user.idUser}>
                <td>{user.idUser}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{new Date(user.dateCreation).toLocaleDateString()}</td>
                <td>{new Date(user.dateModification).toLocaleDateString()}</td>
                <td>
                  <button className='btn btn-primary'><MdDriveFileRenameOutline className='icon'/></button>
                  {"   "}
                  <button className='btn btn-danger' onClick={() => this.deleteUser(user.idUser)}><FaTrash className='icon' /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crud;

