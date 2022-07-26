import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsSortDownAlt, BsSortDown, BsThreeDotsVertical } from "react-icons/bs";

// REACT TABLE
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { format } from "date-fns";

import styles from "../../../../styles/admin/reports.module.css";
import { ColumnFilter } from "../ColumnFilter";

const COLUMNS = [
  {
    Header: "S. No.",
    accessor: "serial_no",
    Filter: ColumnFilter
  },
  {
    Header: "Report Number",
    accessor: "report_number",
    Filter: ColumnFilter
  },
  {
    Header: "Customer Name",
    accessor: "customer_name",
    Filter: ColumnFilter
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    Filter: ColumnFilter
  },
  {
    Header: "Report Details",
    accessor: "report_details",
    Filter: ColumnFilter
  }
];

const Reports = () => {
  //to store the values once and for all
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className={styles.alertsContainer}>
      <div className={styles.alertHeaderContainer}>
        <p>Received User Reports</p>

        <div className={styles.tableOperations + " " + styles.clrGrey}>
          <div className={styles.operation}>
            <BiSortUp />
            <p>Sort</p>
          </div>
          <div
            className={styles.operation}
            onClick={() => {
              setToggleFilter(!toggleFilter);
            }}
          >
            <FaFilter />
            <p>Filter</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={styles.tableHeaderRow + " " + styles.clrGrey}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsSortDown />
                        ) : (
                          <BsSortDownAlt />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    {toggleFilter && (column.canFilter ? column.render("Filter") : null)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return cell?.column?.id === "report_details" ? (
                      <td
                        className={
                          styles.tableSingleCell + " " + styles.report_status_container
                        }
                        {...cell.getCellProps()}
                      >
                        <Link
                          to={"/"}
                          className={styles.report_details + " " + styles.tableSingleCell}
                        >
                          View
                        </Link>
                        <Link to={"/"}>
                          <BsThreeDotsVertical />
                        </Link>
                      </td>
                    ) : (
                      <td className={styles.tableSingleCell} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <div className={styles.rowsPerPage}>
          <p>Go to Page: </p>
          <input
            type="number"
            placeholder="Page Number"
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
              setPageIndex(e.target.value);
            }}
          />
        </div>

        <div className={styles.rowsPerPage}>
          <p>
            {" "}
            Page: {pageIndex > 1 ? pageIndex : 1} of {Math.round(MOCK_DATA.length / 10)}
          </p>
          <button
            className={styles.backForth}
            onClick={() => {
              previousPage();
              setPageIndex(pageIndex - 1);
            }}
            disabled={!canPreviousPage}
          >
            <FiArrowLeft />
          </button>
          <button
            className={styles.backForth}
            onClick={() => {
              nextPage();
              setPageIndex(pageIndex + 1);
            }}
            disabled={!canNextPage}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
