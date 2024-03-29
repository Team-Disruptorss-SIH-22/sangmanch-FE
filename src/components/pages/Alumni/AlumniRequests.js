import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsSortDownAlt, BsSortDown, BsThreeDotsVertical } from "react-icons/bs";

import MOCK_DATA from "../../../assets/MOCK_DATA.json";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { format } from "date-fns";

import ReviewConsent from "./ReviewConsent";
import styles from "../../../styles/admin/reports.module.css";
import { ColumnFilter } from "../Admin/ColumnFilter";

const COLUMNS = [
  {
    Header: "S. No.",
    accessor: "serial_no",
    Filter: ColumnFilter
  },
  {
    Header: "Request ID",
    accessor: "report_number",
    Filter: ColumnFilter
  },
  {
    Header: "ICCR Centre",
    accessor: "customer_name",
    Filter: ColumnFilter
  },
  {
    Header: "Event Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    Filter: ColumnFilter
  },
  {
    Header: "Confirmation",
    accessor: "report_details",
    Filter: ColumnFilter
  }
];

const AlumniRequests = () => {
  //to store the values once and for all
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [viewReport, setViewReport] = useState(false);
  const [reportID, setReportID] = useState();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
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
      {viewReport && (
        <ReviewConsent
          id={reportID}
          handleClose={() => {
            setViewReport(!viewReport);
          }}
        />
      )}
      <div className={styles.alertHeaderContainer}>
        <p>Volunteering Requests</p>
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
                      <td className={styles.tableSingleCell} {...cell.getCellProps()}>
                        <button
                          //  + " " + styles.report_status_container
                          className={styles.status + " " + styles.button}
                          onClick={() => {
                            //change it when get original json data from backend
                            setReportID(cell.row.original.serial_no);
                            setViewReport(!viewReport);
                          }}
                          // className={styles.report_details + " " + styles.tableSingleCell}
                        >
                          Consent
                        </button>
                        {/* <button
                          style={{
                            cursor: "pointer",
                            background: "none",
                            border: "none"
                          }}
                          onClick={() => {
                            //change it when get original json data from backend
                            setReportID(cell.row.original.serial_no);
                            setViewReport(!viewReport);
                          }}
                        >
                          <BsThreeDotsVertical />
                        </button> */}
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

export default AlumniRequests;
