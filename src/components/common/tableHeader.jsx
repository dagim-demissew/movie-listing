import { divide } from "lodash";
import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortedColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    const { sortedColumn } = this.props;
    if (column.path !== sortedColumn.path) {
      return null;
    }
    if (sortedColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    }
    return <i className="fa fa-sort-desc" />;
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className={column.path ? `clickable` : ``}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}>
              {column.lable} {column.path ? this.renderSortIcon(column) : ""}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
