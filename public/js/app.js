/** @jsx React.DOM */
(function() {
  'use strict';

  var playlist = {
    title: 'Dancelist',
    songs: [
      {title: 'Billie Jean', artist: 'Michael Jackson'},
      {title: 'Love Shack', artist: 'The B-52s'},
      {title: 'Give Me Everything', artist: 'Pitbull'},
      {title: 'Style', artist: 'Taylor Swift'}
    ]
  };

  var Playlist = React.createClass({
    render: function() {
      return (
              <div>
                <h3>{this.props.data.title}</h3>
                {this.props.data.songs.map(function(song, index) {
                  return <Song data={song} key={index} />;
                })}
              </div>
              );
    }
  });

  var Song = React.createClass({
    render: function() {
      return (
              <p>{this.props.data.title} - {this.props.data.artist}</p>
              );
    }
  });

  var Timer = React.createClass({
    render: function() {
      return <p>{this.props.time}</p>
    }
  });

  var App = React.createClass({
    getInitialState: function() {
      var state = {time: new Date().toString()};
      setInterval(function() {
        this.setState({time: new Date().toString()});
      }.bind(this), 1000);
      return state;
    },

    getDefaultProps: function() {
      var styles = {
        background: "url(http://stylishhdwallpapers.com/wp-content/uploads/2014/10/Bloom-water-drops-leaf-HD-Wallpaper.jpg)",
        color: "#fff"
      };
      return {styles: styles};
    },

    render: function() {
      return (
              <div id="app" style={this.props.styles}>
                <Timer time={this.state.time} />
                <Playlist data={this.props.playlist} />
              </div>
              );
    }
  })

  React.render(<App playlist={playlist} />, document.body);
})();
