import React, { Component } from "react";
import { View, StyleSheet,  ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
class Start extends Component {
  static navigationOptions = {
    title: "StartHome",
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/portada.png")}
        style={styles.container}
      >
        <View style={{ paddingTop: 500}}>
          <Button
            large
            icon={{name: "play-arrow", color: "#8319E5", width: 90,
            height: 40}}
            color="#FFFFFF"
            
            
            onPress={() => this.props.navigation.navigate("Game")}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
  
});