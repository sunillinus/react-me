/** @jsx React.DOM */
(function() {
  'use strict';

  var App = React.createClass({
    render: function() {
      return <div>Hello</div>;
    }
  })

  React.render(<App />, document.getElementById('app'));

})();