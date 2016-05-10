var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;

var Stopwatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false,
      startTime: null
    }
  },
  render: function() {
    return <View style={styles.container}>

      <View style={styles.header}>{/* Yellow */}
        <View style={styles.timerWrapper}>{/* Red */}
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>{/* Green */}
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>{/* Blue */}
        <Text>
          I am a list of laps
        </Text>
      </View>

    </View>
  },

  startStopButton: function() {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, style]}
    >
      <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
    </TouchableHighlight>
  },

  lapButton: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor="lightblue"
      onPress={this.handleLapPress}
    >
      <Text>Lap</Text>
    </TouchableHighlight>
  },

  handleLapPress: function() {
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date()
    });
  },

  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return;
    }
    var startTime = new Date();
    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30)
  },

  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch' //
  },
  header: { // Yellow area
    flex: 1
  },
  footer: { // Blue area
    flex: 1
  },
  timerWrapper: { // Red area
    flex: 5, // takes up 5/8ths of the available space 5+3=8
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green area
    flex: 3, // takes up 3/8ths of the available space
    flexDirection: 'row', // flips the direction from the default of column to row
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);
