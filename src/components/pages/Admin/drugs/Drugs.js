import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";

// REACT TABLE
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";

import styles from "../../../../styles/admin/alerts.module.css";
import { ColumnFilter } from "../ColumnFilter";

const Drugs = () => {
  const COLUMNS = [
    {
      Header: "S. No.",
      accessor: "s_no",
      Filter: ColumnFilter
    },
    {
      Header: "Order ID",
      accessor: "order_id",
      Filter: ColumnFilter
    },
    {
      Header: "Current State",
      accessor: "current_state",
      Filter: ColumnFilter
    },
    {
      Header: "Alert",
      accessor: "alert",
      Filter: ColumnFilter
    }
  ];

  // const data = Array(20).fill({
  // 	orderID: 1,
  // 	CurrentState: Date.now(),
  // 	Alert: Math.random() > 0.5 ? true : false
  // });

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
        <p>Drug Details</p>

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
                    {
                      console.log(cell);
                    }
                    
					// cell?.column?.id === "order_id" ? 
                    //     return (<Link to="#">
                    //       <td
                    //         style={{
                    //           color: cell?.column?.id === "alert" ? "green" : ""
                    //         }}
                    //         className={styles.tableSingleCell}
                    //         {...cell.getCellProps()}
                    //       >
                    //         {cell.render("Cell")}
                    //       </td>
                    //     </Link> )
						
                    //   ) : 

					//   return (
                    //     <td
                    //       style={{
                    //         color: cell?.column?.id === "alert" ? "green" : ""
                    //       }}
                    //       className={styles.tableSingleCell}
                    //       {...cell.getCellProps()}
                    //     >
                    //       {cell.render("Cell")}
                    //     </td>
                    //   );
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
            }}
          />
        </div>

        <div className={styles.rowsPerPage}>
          <p>
            {" "}
            Page: {pageIndex} of {Math.round(MOCK_DATA.length / 10)}
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

export default Drugs;
