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
import ViewReport from "./ViewReport";
import { ColumnFilter } from "../Admin/ColumnFilter";
import eventContext from "context/event/eventContext";
import styles from "../../../styles/admin/reports.module.css";
import authContext from "context/auth/authContext";
import Loader from "../Loader";

const statusMapping = {
  "-1": "Rejected by Finance Manager",
  "-2": "Rejected by Governing Body",
  0: "Pending on Finance Manager",
  1: "Pending on Governing Body",
  2: "Completed"
};

const Reports = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [reviewReport, setReviewReport] = useState(false);
  const [viewReport, setViewReport] = useState(false);
  const [eventState, setEventState] = useState([]);
  const [event, setEvent] = useState({});

  const { user } = useContext(authContext);
  const { events, getAllEvents, getEventsOfUser, loading } = useContext(eventContext);

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
    // {
    //   Header: "Review",
    //   accessor: "report_details",
    //   filterable: false,
    //   name: "abc",
    //   type: "button",
    //   Cell: ({ row, value }) => "" + value
    // },
    {
      Header: user.role === "ICCRUser" ? "Status" : "Review",
      accessor: "status",
      name: "report status",
      type: user.role === "ICCRUser" ? null : "button",
      Cell: ({ value }) => {
        return user.role === "ICCRUser" ? statusMapping[value] : getText(value)
      },
      Filter: ColumnFilter
    },
    {
      Header: "View",
      accessor: "view_report",
      name: "def",
      type: "button",
      Cell: () => "View",
      disableFilters: true
    }
  ];
  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    user.role === "ICCRUser" ? getEventsOfUser() : getAllEvents();
  }, []);

  useEffect(() => {
    const roleWiseEvents =
      user.role === "governingBody" ? events?.filter((ev) => ev.status !== 0) : events;
    setEventState(roleWiseEvents);
  }, [events]);

  // const hiddenColumns = useMemo(
  //   () => (user.role === "ICCRUser" ? ["report_details"] : ["status"]),
  //   [user.role]
  // );
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
      data: eventState
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const getText = (status) => {
    if (status === 0) return "Review";
    if (status === -1) return "Rejected by Finance Manager";
    if (status === -2) return "Rejected by Governing Body";
    if (status === 1 && user.role === "financeManager") return "Accepted";
    if (status === 2 && user.role === "governingBody") return "Completed";
    if (status === 2 && user.role === "financeManager") return "Completed";
    return "Review";
  };

  if (loading) return <Loader />;

  const isDisabled = (currEvent) => {
    if (currEvent.status < 0) return true;
    if (currEvent.status - 1 >= 0 && user.role === "financeManager") return true;
    if (currEvent.status === 2 && user.role === "governingBody") return true;
    return false;
  };

  return (
    <div className={styles.alertsContainer}>
      {reviewReport && (
        <ReviewReport
          event={event}
          handleClose={() => {
            setReviewReport(!reviewReport);
          }}
        />
      )}
      {viewReport && (
        <ViewReport
          event={event}
          handleClose={() => {
            setViewReport(!viewReport);
          }}
        />
      )}
      <div className={styles.alertHeaderContainer}>
        <p>User Reports</p>
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
                    <div className={styles.filter}>
                      {toggleFilter && (column.canFilter ? column.render("Filter") : null)}
                    </div>
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
                            setEvent(cell.row.original);
                            if (cell?.column?.id === "view_report") {
                              setViewReport(!viewReport);
                            } else if (cell?.column?.id === "status") {
                              setReviewReport(!reviewReport);
                            }
                          }}
                          disabled={
                            cell?.column?.id === "status" && isDisabled(cell.row.original)
                          }
                          className={`
                            ${cell?.column?.id === "status" && styles.status} ${
                            styles.button
                          } 
                            `}
                        >
                          {cell.render("Cell")}
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
              setPageIndex(e.target.value <= Math.ceil(eventState?.length / 10) ? e.target.value: Math.ceil(eventState?.length / 10));
            }}
          />
        </div>

        <div className={styles.rowsPerPage}>
          <p>
            {" "}
            Page: {pageIndex > 1 ? pageIndex : 1} of {Math.ceil(eventState?.length / 10)}
          </p>
          <button
            className={styles.backForth}
            onClick={() => {
              previousPage();
              setPageIndex(parseInt(pageIndex) - 1);
            }}
            disabled={!canPreviousPage}
          >
            <FiArrowLeft />
          </button>
          <button
            className={styles.backForth}
            onClick={() => {
              nextPage();
              setPageIndex(parseInt(pageIndex) + 1);
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
