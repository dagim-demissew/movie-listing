import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

function Table({ columns, onSort, sortedColumn, data }) {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortedColumn={sortedColumn}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
