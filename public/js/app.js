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

  var Highlight = {
    componentDidUpdate: function() {
      var node = $(this.getDOMNode());
      node.slideUp();
      node.slideDown();
    }
  };

  var Playlist = React.createClass({
    getInitialState: function() {
      var nowPlaying = 1;
      setInterval(function() {
        this.setState({nowPlaying: this.state.nowPlaying + 1});
      }.bind(this), 3000);
      return null;
    },

    render: function() {
      return (
              <div className="playlist">
                <h3>{this.props.data.title} [{this.state.nowPlaying}]</h3>
                {this.props.data.songs.map(function(song, index) {
                  return <Song data={song} key={index} />;
                })}
              </div>
              );
    }
  });

  var Song = React.createClass({
    getInitialState: function() {
      return {state: 'stopped'};
    },
    render: function() {
      return <div className="song {this.state.state}">{this.props.data.title} - {this.props.data.artist}</div>
    },

    mixins: [Highlight]
  });

  var Timer = React.createClass({
    render: function() {
      return <p>{this.props.time}</p>
    }
  });

  var App = React.createClass({
    getInitialState: function() {
      var state = {time: new Date().toString()};
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
