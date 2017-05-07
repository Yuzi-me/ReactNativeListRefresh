import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
  ListView,
  Image,
  ActivityIndicator,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
  Platform,
  ToolbarAndroid
} from 'react-native'
import NavBar from './Navbar'
import PullToRefreshListView from 'react-native-pull-to-refresh-list'

class PullToRefreshListViewDemo extends Component {

  // 构造 
  constructor(props) {
    super(props);

    this._dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2, 
    });

    let dataList = []

    this.state = {
      first: true,
      dataList: dataList,
      dataSource: this._dataSource.cloneWithRows(dataList),
    }
  }

  componentDidMount() {
    this._pullToRefreshListView.beginRefresh()
  }

  //Using ListView 
  render() {
    let component = <PullToRefreshListView
      ref={(component) => this._pullToRefreshListView = component}
      viewType={PullToRefreshListView.constants.viewType.listView}
      contentContainerStyle={{}}
      style={{ flex: 1 }}
      initialListSize={20}
      enableEmptySections={true}
      dataSource={this.state.dataSource}
      pageSize={20}
      renderRow={this._renderRow}
      renderHeader={this._renderHeader}
      renderFooter={this._renderFooter}
      //renderSeparator={(sectionID, rowID) => <View style={style.separator} />} 
      onRefresh={this._onRefresh}
      onLoadMore={this._onLoadMore}
      pullUpDistance={35}
      pullUpStayDistance={50}
      pullDownDistance={35}
      pullDownStayDistance={50}
      autoLoadMore={true}
    />


    return (
      <View style={style.container}>
        <NavBar />
        {component}
      </View>

    )

  }

  _renderRow = (rowData, sectionID, rowID) => {
    return (
      <View style={style.thumbnail}>
        <Text>{rowData.text}</Text>
      </View >
    )
  }

  _renderHeader = (viewState) => {
    let { pullState, pullDistancePercent } = viewState
    let { refresh_none, refresh_idle, will_refresh, refreshing, } = PullToRefreshListView.constants.viewState
    pullDistancePercent = Math.round(pullDistancePercent * 100)
    switch (pullState) {
      case refresh_none:
        return (
          <View style={style.pull_down_refresh}>
            <Text style={style.pull_color}>刷新成功</Text>
          </View>
        )
      case refresh_idle:
        return (
          <View style={style.pull_down_refresh}>
            <Text style={style.pull_color}>下拉刷新{pullDistancePercent}%</Text>
          </View>
        )
      case will_refresh:
        return (
          <View style={style.pull_down_refresh}>
            <Text style={style.pull_color}>释放立即刷新{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
          </View>
        )
      case refreshing:
        return (
          <View style={style.pull_down_refresh}>
            {this._renderActivityIndicator()}<Text style={style.pull_color}>正在刷新...</Text>
          </View>
        )
    }
  }

  _renderFooter = (viewState) => {
    let { pullState, pullDistancePercent } = viewState
    let { load_more_none, load_more_idle, will_load_more, loading_more, loaded_all, } = PullToRefreshListView.constants.viewState
    pullDistancePercent = Math.round(pullDistancePercent * 100)
    switch (pullState) {
      case load_more_none:
        return (
          <View style={style.pull_up_refresh}>
            <Text style={style.pull_color}>加载成功</Text>
          </View>
        )
      case load_more_idle:
        return (
          <View style={style.pull_up_refresh}>
            <Text style={style.pull_color}>上拉加载{pullDistancePercent}%</Text>
          </View>
        )
      case will_load_more:
        return (
          <View style={style.pull_up_refresh}>
            <Text style={style.pull_color}>释放立即加载{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
          </View>
        )
      case loading_more:
        return (
          <View style={style.pull_up_refresh}>
            {this._renderActivityIndicator()}<Text style={style.pull_color}> 正在加载...</Text>
          </View>
        )
      case loaded_all:
        return (
          <View style={style.pull_up_refresh}>
            <Text style={style.pull_color}>我们已经到底啦！</Text>
          </View>
        )
    }
  }

  _onRefresh = () => {
    //console.log('outside _onRefresh start...') 

    //simulate request data 
    setTimeout(() => {

      //console.log('outside _onRefresh end...') 
      let addNum = 20
      let refreshedDataList = []
      for (let i = 0; i < addNum; i++) {
        refreshedDataList.push({
          text: `item-${i}`
        })
      }

      this.setState({
        dataList: refreshedDataList,
        dataSource: this._dataSource.cloneWithRows(refreshedDataList),
      })
      this._pullToRefreshListView.endRefresh()

    }, 500)
  }

  _onLoadMore = () => {
    //console.log('outside _onLoadMore start...') 

    setTimeout(() => {

      //console.log('outside _onLoadMore end...') 

      let length = this.state.dataList.length
      let addNum = 20
      let addedDataList = []
      if (length >= 100) {
        addNum = 3
      }
      for (let i = length; i < length + addNum; i++) {
        addedDataList.push({
          text: `item-${i}`
        })
      }
      let newDataList = this.state.dataList.concat(addedDataList)
      this.setState({
        dataList: newDataList,
        dataSource: this._dataSource.cloneWithRows(newDataList),
      })

      let loadedAll
      if (length >= 100) {
        loadedAll = true
        this._pullToRefreshListView.endLoadMore(loadedAll)
      }
      else {
        loadedAll = false
        this._pullToRefreshListView.endLoadMore(loadedAll)
      }

    }, 500)
  }

  _renderActivityIndicator() {
    return ActivityIndicator ? (
      <ActivityIndicator
        style={{ marginRight: 10, }}
        animating={true}
        color={'#666'}
        size={'small'} />
    ) : Platform.OS == 'android' ?
        (
          <ProgressBarAndroid
            style={{ marginRight: 10, }}
            color={'#666'}
            styleAttr={'Small'} />

        ) : (
          <ActivityIndicatorIOS
            style={{ marginRight: 10, }}
            animating={true}
            color={'#666'}
            size={'small'} />
        )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  thumbnail: {
    height: 56,
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pull_down_refresh: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pull_up_refresh: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pull_color: {
    color: '#666'
  }

})

export default PullToRefreshListViewDemo;