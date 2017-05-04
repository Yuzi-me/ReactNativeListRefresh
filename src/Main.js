/**
 * Created by panda on 2017/1/18.
 */
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ToolbarAndroid,
  ScrollView,
  ToastAndroid,
  Switch
} from 'react-native';
import RNPullToRefreshAndroid from 'react-native-pull-to-refresh-list';

export default class extends Component {


  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor={'#3F51B5'} />
        <ToolbarAndroid
          title={"RN-PTR"}
          titleColor={'#FFFFFF'}
          style={{ backgroundColor: '#3F51B5', height: 56, elevation: 10 }}>
          <Switch
          onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
          value={this.state.trueSwitchIsOn} />
        </ToolbarAndroid>
        
        <RNPullToRefreshAndroid
          ref='ptrs'
          handleRefresh={() => this._getData()}
          durationToCloseHeader={300}
          durationToClose={200}
          resistance={2}
          pinContent={false}
          ratioOfHeaderHeightToRefresh={1.2}
          pullToRefresh={false}
          keepHeaderWhenRefresh={true}
          style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ backgroundColor: '#00AAAA', height: 200 }} />
            <View style={{ backgroundColor: '#FFAAAA', height: 200 }} />
            <View style={{ backgroundColor: '#FFAA55', height: 200 }} />
            <View style={{ backgroundColor: '#FFAAFF', height: 200 }} />
            <View style={{ backgroundColor: '#00AA99', height: 200 }} />
            <View style={{ backgroundColor: '#FF99AA', height: 200 }} />
          </ScrollView>
        </RNPullToRefreshAndroid>
      </View>
    );
  };

  _getData() {
    ToastAndroid.show("刷新成功!", ToastAndroid.SHORT);
    this.timer = setTimeout(() => {
      this.refs.ptrs.refreshComplete();
    }, 1500);
  };

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}
