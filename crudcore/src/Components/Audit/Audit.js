import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './Audit.css';

class Audit extends Component {
  state = {
    data: [],
  };

  getRequest = async (idUser, showAllUsers, pageSize, pageNumber, includeDate, startDate, endDate) => {
    const params = {
      idUser: idUser,
      showAllUsers: showAllUsers,
      pageSize: pageSize,
      pageNumber: pageNumber,
      includeDate: includeDate,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };
  
    try {
      const response = await axios.get("http://localhost:5172/Audit/AuditLogs", { params });
      this.setState({ data: response.data.result.auditLogs });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  componentDidMount() {
    this.getRequest(1, true, 25, 1, true, new Date('2022-02-29'), new Date('2022-03-01'));
  }

  render() {
  const { data } = this.state;
  return (
    <div className="Audit">
      <table className="table_">
      <br />
        <br />
        <thead>
          <tr>
            <th>ID Log</th>
            <th>ID User</th>
            <th>Type</th>
            <th>Date</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((auditLog) => (
            <tr key={auditLog.idAuditLog}>
              <td>{auditLog.idAuditLog}</td>
              <td>{auditLog.idUser}</td>
              <td>{auditLog.auditType}</td>
              <td>{new Date(auditLog.auditDate).toLocaleDateString()}</td>            
              <td>{auditLog.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
 }
}
export default Audit;



