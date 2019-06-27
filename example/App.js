import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import Start from "./Components/Start";
import Game from "./Components/Game";


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppStackNavigation = createStackNavigator ({
  Start: {
    screen: Start
  },
  Game: {
    screen: Game
  }
});

const AppContainer = createAppContainer(AppStackNavigation);