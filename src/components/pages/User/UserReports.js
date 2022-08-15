import { useState, useMemo, useEffect, useContext } from "react";

// REACT ICONS
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";

// REACT TABLE
// import MOCK_DATA from "../../../assets/MOCK_DATA.json";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { format } from "date-fns";

import ReviewReport from "./ReviewReport";
import { ColumnFilter } from "../Admin/ColumnFilter";
import eventContext from "context/event/eventContext";
import styles from "../../../styles/admin/reports.module.css";

const COLUMNS = [
  {
    Header: "S. No",
    id: "row",
    width: 100,
    Filter: ColumnFilter,
    Cell: (row) => {
      return <div>{row.row.index + 1}</div>;
    }
  },
  {
    Header: "Report Number",
    accessor: "_id",
    width: 250,
    Filter: ColumnFilter
  },
  {
    Header: "Event Name",
    accessor: "name",
    width: 200,
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
    Header: "Review",
    accessor: "report_details",
    filterable: false,
    name: "abc",
    type: "button"
  },
  {
    Header: "View",
    accessor: "view_report",
    name: "def",
    type: "button"
  }
];

const Reports = () => {
  //to store the values once and for all
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [reviewReport, setReviewReport] = useState(false);
  const [eventID, setEventID] = useState();

  const { events, getAllEvents } = useContext(eventContext);

  useEffect(async () => {
    getAllEvents();
  }, []);

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
      data: events
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className={styles.alertsContainer}>
      {reviewReport && (
        <ReviewReport
          eventID={eventID}
          handleClose={() => {
            setReviewReport(!reviewReport);
          }}
        />
      )}
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
                    return cell?.column?.type === "button" ? (
                      <td className={styles.tableSingleCell} {...cell.getCellProps()}>
                        <button
                          onClick={() => {
                            //change it when get original json data from backend
                            setEventID(cell.row.original._id);
                            setReviewReport(!reviewReport);
                          }}
                          className={styles.report_details + " " + styles.tableSingleCell}
                        >
                          {cell.column.Header}
                        </button>
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
            Page: {pageIndex > 1 ? pageIndex : 1} of {Math.round(events.length / 10)}
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
