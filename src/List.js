import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="table">
      <table>
      <thead className="listTable">
        <tr>
          <th className="thumnail"></th>
          <th className="resName">식당명</th>
          <th className="rating">**/****</th>
        </tr>
      </thead>
      </table>
      </div>
    );
  }
}

export default List;
