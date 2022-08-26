import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { RangeFilterCell } from "./rangeFilterCell";
import { DropdownFilterCell } from "./dropdownFilterCell";
import { sampleProducts } from "./sample-products";
const categories = Array.from(
  new Set(sampleProducts.map((p) => (p.Category ? p.Category.CategoryName : "")))
);

const CategoryFilterCell = (props) => (
  <DropdownFilterCell {...props} data={categories} defaultItem={"Select category"} />
);

const SearchReports = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [filter, setFilter] = React.useState();

  const filterChange = (event) => {
    setData(filterBy(sampleProducts, event.filter));
    setFilter(event.filter);
  };

  return (
    <Grid
      style={{
        height: "400px"
      }}
      data={data}
      filterable={true}
      filter={filter}
      onFilterChange={filterChange}
    >
      <Column field="ProductID" title="ID" filterable={false} width="60px" />
      <Column field="ProductName" title="Product Name" />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        filterCell={CategoryFilterCell}
      />
      <Column
        field="UnitPrice"
        title="Unit Price"
        format="{0:c}"
        filterCell={RangeFilterCell}
      />
    </Grid>
  );
};

export default SearchReports;
