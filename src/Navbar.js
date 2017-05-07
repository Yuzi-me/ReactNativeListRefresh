import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  ToolbarAndroid
} from 'react-native';

export default class Navbar extends Component {
  render() {
    const statusBar = <View style={style.statusBar} />

    return (
      <View style={style.navBarContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          networkActivityIndicatorVisible={false}
        />
        {statusBar}
        <View style={style.navBar}>
          <Text style={style.navBarTitle}>下拉刷新和上拉加载</Text>
        </View>
      </View>
    )
  }
}

const status_bar_height = Platform.OS === 'ios' ? 20 : 24;    // Status bar height
const nav_bar_height = Platform.OS === 'ios' ? 44 : 56;   // Tool bar height
const nav_bar_fontsize = Platform.OS === 'ios' ? 17 : 20;

const style = StyleSheet.create({
  navBarContainer: {
    backgroundColor: '#475F77'
  },
  statusBar: {
    height: status_bar_height
  },
  navBar: {
    height: nav_bar_height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    elevation: 10
  },
  navBarTitle: {
    fontSize: nav_bar_fontsize,
    color: '#fff'
  }
})