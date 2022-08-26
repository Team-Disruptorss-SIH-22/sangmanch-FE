import * as React from "react";
import { NumericTextBox } from "@progress/kendo-react-inputs";
export const RangeFilterCell = (props) => {
  let minTextBox;
  let maxTextBox;

  const inRange = (current, { min, max }) =>
    (min === null || current >= min) && (max === null || current <= max);

  const onChange = (event) => {
    props.onChange({
      value: {
        min: minTextBox.value,
        max: maxTextBox.value
      },
      operator: inRange,
      syntheticEvent: event.syntheticEvent
    });
  };

  const onClearButtonClick = (event) => {
    event.preventDefault();
    props.onChange({
      value: null,
      operator: "",
      syntheticEvent: event
    });
  };

  const value = props.value || null;
  return (
    <div>
      Min:
      <span
        style={{
          margin: "0 16px 0 2px"
        }}
      >
        <NumericTextBox
          width="70px"
          value={value && value.min}
          ref={(numeric) => {
            minTextBox = numeric;
          }}
          onChange={onChange}
        />
      </span>
      Max:
      <span
        style={{
          margin: "0 2px 0 4px"
        }}
      >
        <NumericTextBox
          width="70px"
          value={value && value.max}
          ref={(numeric) => {
            maxTextBox = numeric;
          }}
          onChange={onChange}
        />
      </span>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-button k-button-md k-rounded-md k-button-solid k-button-solid-base-icon k-clear-button-visible"
        title="Clear"
        disabled={!value}
        onClick={onClearButtonClick}
      >
        <span className="k-icon k-i-filter-clear" />
      </button>
    </div>
  );
};
