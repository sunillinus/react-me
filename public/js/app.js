/** @jsx React.DOM */
(function() {
  'use strict';

  var playlist = {
    title: 'Dancelist',
    songs: [
      {title: 'Billie Jean', artist: 'Michael Jackson'},
      {title: 'Love Shack', artist: 'The B-52s'},
      {title: 'Give Me Everything', artist: 'Pitbull'}
    ]
  };

  var Playlist = React.createClass({
    render: function() {
      return (
              <div>
                <h3>{this.props.data.title}</h3>
                <Song data={this.props.data.songs[0]} />
                <Song data={this.props.data.songs[1]} />
                <Song data={this.props.data.songs[2]} />
              </div>
              );
    }
  })

  var Song = React.createClass({
    render: function() {
      return (
              <p>{this.props.data.title} - {this.props.data.artist}</p>
              );
    }
  })

  var App = React.createClass({
    render: function() {
      return (
                <Playlist data={this.props.playlist} />
              );
    }
  })

  React.render(<App playlist={playlist} />, document.getElementById('app'));
})();
