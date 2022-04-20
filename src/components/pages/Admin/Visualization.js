import React, { useState } from "react";

var createReactClass = require('create-react-class');

const Visualization = createReactClass({

  iframe: function () {
    return {
      __html:
        '<iframe width="100%" height="550px" src="https://datastudio.google.com/embed/reporting/4c0620a8-933a-404d-92eb-6f056e4c1b4b/page/dCxqC" frameborder="0" style="border:0" allowfullscreen></iframe>'
    };
  },

  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    );
  }
});

export default Visualization;
