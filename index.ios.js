var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

var Stopwatch = React.createClass({
  render: function() {
    return <View>

      <View>{/* Yellow */}
        <View>{/* Red */}
          <Text>
            00:00.00
          </Text>
          <View>{/* Green */}
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
      </View>

      <View>{/* Blue */}
        <Text>
          I am a list of laps
        </Text>
      </View>

    </View>
  },
  startStopButton: function() {
    return <View>
      <Text>Start</Text>
    </View>
  },
  lapButton: function() {
    return <View>
      <Text>Lap</Text>
    </View>
  }
});

var styles = StyleSheet.create({

});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);
