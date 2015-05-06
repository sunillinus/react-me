/** @jsx React.DOM */
(function() {
  'use strict';

  var playlist = {
    title: 'Dancelist',
    tracks: [
      {title: 'Billie Jean', artist: 'Michael Jackson'},
      {title: 'Love Shack', artist: 'The B-52s'},
      {title: 'Give Me Everything', artist: 'Pitbull'},
      {title: 'Style', artist: 'Taylor Swift'}
    ]
  };

  // Highlight mixin
  var Highlight = {
    componentDidUpdate: function() {
      // var node = $(this.getDOMNode());
      // node.slideUp();
      // node.slideDown();
    }
  };

  // Playlist component
  var Playlist = React.createClass({
    nextTrack: function() {
      console.log('Next Track');
      var currentTrack = this.refs['track-' + this.state.currentTrackIndex];
      currentTrack.stop();
      var nextTrackIndex = (this.state.currentTrackIndex + 1) % this.props.data.tracks.length;
      this.refs['track-' + nextTrackIndex].play();
      this.setState({currentTrackIndex: nextTrackIndex});
    },

    componentDidMount: function() {
      this.refs['track-' + this.state.currentTrackIndex].play();
      setInterval(function() {
        console.log('timer');
        this.nextTrack();
      }.bind(this), 3000);
    },

    getInitialState: function() {
      return {currentTrackIndex: 0};
    },

    render: function() {
      return (
              <div className="playlist">
                <h3>{this.props.data.title} [{this.state.currentTrackIndex}]</h3>
                {this.props.data.tracks.map(function(track, index) {
                  return <Track data={track} key={index} ref={"track-" + index}/>;
                })}
              </div>
              );
    }
  });


  // Track component
  var Track = React.createClass({
    play: function() {
      console.log('Playing: ' + this.props.data.title);
      this.setState({state: 'playing'});
    },

    stop: function() {
      console.log('Stoping: ' + this.props.data.title);
      this.setState({state: 'not-playing'});
    },

    getInitialState: function() {
      return {state: 'not-playing'};
    },

    render: function() {
      return <div className={this.state.state}>{this.props.data.title} - {this.props.data.artist}</div>
    },

    mixins: [Highlight]
  });


  // Timer component
  var Timer = React.createClass({
    render: function() {
      return <p>{this.props.time}</p>
    }
  });


  // App component
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
