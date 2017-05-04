import React, { Component } from 'react'
import {
  View,
  Text,
  styleheet,
  Alert,
  ScrollView,
  ListView,
  Image,
  ActivityIndicator,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
  Platform,
  Dimensions,
  RefreshControl
} from 'react-native'
import style from './libs/styleSheet';
import TimerEnhance from 'react-native-smart-timer-enhance'
import PullToRefreshListView from 'react-native-pull-to-refresh-list'


// SmartPullTo
class SmartPullToRefreshListView extends Component {

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
      contentContainerStyle={{ backgroundColor: '#f8f8f8' }}
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
        {component}
      </View>

    )

  }

  _renderRow = (rowData, sectionID, rowID) => {
    return (
      <View>
        <View style={style.trace_list}>
          <View style={style.trace_avatar}>
            <View style={style.row_avatar}>
              <Image style={[style.imgs, style.imgs_md]} source={require('./img/img02.jpg')} />
            </View>
          </View>
          <View style={style.trace_content}>
            <Text style={[style.font14, style.c_text, style.mb4]}>聚农堂</Text>
            <Text style={[style.font12, style.c_333]}>刚刚种的黄瓜，遇上这天气怎么办啊？朋友们，给些建议吧。</Text>
            <View style={[style.img_list, style.img_04]}>
              <Image style={style.img} source={require('./img/img06.jpg')} />
              <Image style={style.img} source={require('./img/img05.jpg')} />
              <Image style={style.img} source={require('./img/img04.jpg')} />
              <Image style={style.img} source={require('./img/img03.jpg')} />
            </View>
            <Text style={[style.font10, style.c_999, style.mt10]}>1小时前      <Text style={[style.font10, style.c_999]}>阅读3565</Text></Text>
          </View>
        </View>
        <View style={style.h16} />
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
          <View style={style.pull_refresh}>
            <Text>pull down to refresh</Text>
          </View>
        )
      case refresh_idle:
        return (
          <View style={style.pull_refresh}>
            <Text>pull down to refresh{pullDistancePercent}%</Text>
          </View>
        )
      case will_refresh:
        return (
          <View style={style.pull_refresh}>
            <Text>release to refresh{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
          </View>
        )
      case refreshing:
        return (
          <View style={style.pull_refresh}>
            {this._renderActivityIndicator()}<Text>refreshing</Text>
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
          <View style={style.pull_refresh}>
            <Text>pull up to load more</Text>
          </View>
        )
      case load_more_idle:
        return (
          <View style={style.pull_refresh}>
            <Text>pull up to load more{pullDistancePercent}%</Text>
          </View>
        )
      case will_load_more:
        return (
          <View style={style.pull_refresh}>
            <Text>release to load more{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
          </View>
        )
      case loading_more:
        return (
          <View style={style.pull_refresh}>
            {this._renderActivityIndicator()}<Text> 正在加载...</Text>
          </View>
        )
      case loaded_all:
        return (
          <View style={{ height: 35, justifyContent: 'center', alignItems: 'center' }}>
            <Text>no more</Text>
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

    }, 3000)
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

    }, 3000)
  }

  _renderActivityIndicator() {
    return ActivityIndicator ? (
      <ActivityIndicator
        style={{ marginRight: 10, }}
        animating={true}
        color={'#ff0000'}
        size={'small'} />
    ) : Platform.OS == 'android' ?
        (
          <ProgressBarAndroid
            style={{ marginRight: 10, }}
            color={'#ff0000'}
            styleAttr={'Small'} />

        ) : (
          <ActivityIndicatorIOS
            style={{ marginRight: 10, }}
            animating={true}
            color={'#ff0000'}
            size={'small'} />
        )
  }
}

// ProductList
//import PullRefreshScrollView from '../utils/PullRefreshScrollView'
//import LoadMoreFooter from './LoadMoreFooter'
let _pageNo = 2;
const _pageSize = 30;

class ProductList extends Component {

  // 构造 
  constructor(props) {
    super(props);

    this._dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2, 
    });

    let dataList = []

    this.state = {
      loadedAll: false,
      first: true,
      dataList: dataList,
      dataSource: this._dataSource.cloneWithRows(dataList),
    }
  }

  componentDidMount() {
    //this.props.dispatch(getProductList(_pageNo));
    this._onRefreshs();
  }

  // _goToDetail(rowData) {
  //   const { navigator } = this.props;
  //   const imageUrl = `https:${rowData.imagePath}`;
  //   console.log("去商品详情页", rowData);
  //   // Storage.removeValueForKey('lastestRecord');
  //   Storage.mergeArrayWithKeyValue('lastestRecord', { name: rowData.companyName, id: rowData.companyId, imagePath: rowData.imagePath, productName: rowData.productName });
  //   if (navigator) {
  //     navigator.push({
  //       component: ProductImageContainer,
  //       params: {
  //         rowData
  //       }
  //     })
  //   }
  // }

  // _onRefresh() {
  //   this.props.dispatch(getProductList(1));
  // }

  // _loadMoreData() {
  //   const { userReducer, dispatch } = this.props;
  //   dispatch(changeProductListLoadingMore(true));
  //   _pageNo = parseInt(userReducer.products.length / _pageSize) + 1;
  //   dispatch(getProductList(_pageNo));
  // }

  // _toEnd() {
  //   const { reducer } = this.props;
  //   //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
  //   if (reducer.isLoadingMore || reducer.products.length >= reducer.totalProductCount || reducer.isRefreshing) {
  //     return;
  //   };
  //   InteractionManager.runAfterInteractions(() => {
  //     console.log("触发加载更多 toEnd() --> ");
  //     this._loadMoreData();
  //   });
  // }

  // _loadMoreData() {
  //   const { reducer, dispatch } = this.props;
  //   dispatch(changeProductListLoadingMore(true));
  //   _pageNo = Number.parseInt(reducer.products.length / _pageSize) + 1;
  //   dispatch(getProductList(_pageNo));
  // }

  _renderHeader = () => {
    return <Text>123</Text>
  }

  _renderFooter = () => {
    const { loadedAll } = this.state;

    //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
    // if (reducer.products.length < 1 || reducer.isRefreshing) {
    //   return null
    // };
    if (loadedAll) {
      //还有更多，默认显示‘正在加载更多...’
      return <LoadMoreFooter isLoadAll={true} />
    } else {
      // 加载全部
      return <LoadMoreFooter isLoadAll={false} />
    }
  }


  render() {
    const { reducer } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    let component = <ListView
      initialListSize={20}
      pageSize={20}
      renderScrollComponent={(props) =>
        <PullRefreshScrollView
          onRefresh={(PullRefresh) => this._onRefreshs(PullRefresh)}
          onLoadMore={(PullRefresh) => this._onLoadMore(PullRefresh)}
          useLoadMore={1}
          {...props} />
      }
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}

      onEndReached={this._onLoadMore}
      onEndReachedThreshold={10}
      renderHeader={this._renderHeader}
      renderFooter={this._renderFooter}
      enableEmptySections={true}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={this._onRefreshs}
          tintColor="gray"
          colors={['#ff0000', '#00ff00', '#0000ff']}
          progressBackgroundColor="gray" />
      } />

    return (
      <View style={style.container}>
        <NavBar
          style={style.navBar}
          title={{ title: '农友圈ListView测试' }}
          {...this.props}
          isShowReturnIcon={true} />
        {component}
      </View>

    )
  }

  _renderRow = (rowData, sectionID, rowID) => {
    return (
      <View>
        <View style={style.trace_list}>
          <View style={style.trace_avatar}>
            <View style={style.row_avatar}>
              <Image style={[style.imgs, style.avatar]} source={require('./img/img-02.jpg')} />
            </View>
          </View>
          <View style={style.trace_content}>
            <Text style={[style.font14, style.c_text, style.mb4]}>郭小伙{rowData.text}</Text>
            <Text style={[style.font14, style.c_333]}>操作人：王泽概1.0工时</Text>
            <View style={[style.img_list]}>
              <Image style={style.img} source={require('./img/img01.jpg')} />
              <Image style={style.img} source={require('./img/img02.jpg')} />
              <Image style={style.img} source={require('./img/img03.jpg')} />
            </View>
            <Text style={[style.font10, style.c_999, style.mt10]}>9分钟前      <Text style={[style.font10, style.c_999]}>阅读3565</Text></Text>
          </View>
        </View>
        <View style={style.h16} />
      </View>
    )
  }

  _onRefreshs = () => {
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
        loadedAll: false,
        dataList: refreshedDataList,
        dataSource: this._dataSource.cloneWithRows(refreshedDataList),
      })
      //this._pullToRefreshListView.endRefresh()

    }, 1000)
  }

  _onLoadMore = () => {
    //console.log('outside _onLoadMore start...') 
    const { loadedAll } = this.state;

    if (loadedAll) {
      return
    }

    setTimeout(() => {

      //console.log('outside _onLoadMore end...') 

      let length = this.state.dataList.length
      let addNum = 20
      let addedDataList = []
      if (length >= 40) {
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
      if (length >= 40) {
        this.setState({
          loadedAll: true
        })

        //return <LoadMoreFooter isLoadAll={true} />
        //this._pullToRefreshListView.endLoadMore(loadedAll)
      }
      else {
        this.setState({
          loadedAll: false
        })
        //return <LoadMoreFooter />
        //this._pullToRefreshListView.endLoadMore(loadedAll)
      }

    }, 1000)
  }




}

// swRefresh
// import {
//   SwRefreshScrollView,
//   SwRefreshListView,
//   RefreshStatus,
//   LoadMoreStatus
// } from 'react-native-swRefresh'
class swRefresh extends Component {
  _page = 0
  _dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
  // 构造
  constructor(props) {

    super(props);


    // 初始状态
    this.state = {
      dataSource: this._dataSource.cloneWithRows([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    };
  }

  render() {

    // return this._renderScrollView() //ScrollView Demo ScrollView不支持上拉加载

    //return this._renderListView() // ListView Demo
    return (
      <View style={style.container}>
        <NavBar
          style={style.navBar}
          title={{ title: '农友圈ListView测试' }}
          {...this.props}
          isShowReturnIcon={true} />
        {
          this._renderListView()
        }
      </View>
    )
  }

  /**
   * scrollVewDemo
   * @returns {XML}
   */
  _renderScrollView() {

    return (
      <SwRefreshScrollView
        onRefresh={this._onRefresh.bind(this)}
        ref="scrollView"
      //其他你需要设定的属性(包括ScrollView的属性)
      >
        <View style={styles.content}>
          <Text>下拉刷新ScrollView</Text>
        </View>
      </SwRefreshScrollView>
    )

  }

  /**
   * ListViewDemo
   * @returns {XML}
   * @private
   */
  _renderListView() {
    return (
      <SwRefreshListView
        dataSource={this.state.dataSource}
        ref="listView"
        renderRow={this._renderRow.bind(this)}
        onRefresh={this._onListRefersh.bind(this)}
        onLoadMore={this._onLoadMore.bind(this)}
        //isShowLoadMore={false}
        renderFooter={() => {
          return (
            <View style={{ backgroundColor: 'blue', height: 30 }}>
              <Text>我是footer</Text>
            </View>)
        }}

      />
    )

  }
  _renderRow(rowData) {
    return (
      <View>
        <View style={style.trace_list}>
          <View style={style.trace_avatar}>
            <View style={style.row_avatar}>
              <Image style={[style.imgs, style.avatar]} source={require('./img/img-02.jpg')} />
            </View>
          </View>
          <View style={style.trace_content}>
            <Text style={[style.font14, style.c_text, style.mb4]}>郭小伙{rowData}</Text>
            <Text style={[style.font14, style.c_333]}>操作人：王泽概1.0工时</Text>
            <View style={[style.img_list]}>
              <Image style={style.img} source={require('./img/img01.jpg')} />
              <Image style={style.img} source={require('./img/img02.jpg')} />
              <Image style={style.img} source={require('./img/img03.jpg')} />
            </View>
            <Text style={[style.font10, style.c_999, style.mt10]}>9分钟前      <Text style={[style.font10, style.c_999]}>阅读3565</Text></Text>
          </View>
        </View>
        <View style={style.h16} />
      </View>
    )

  }

  /**
   * 模拟刷新
   * @param end
   * @private
   */
  _onRefresh(end) {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      alert('刷新成功')

      end()//刷新成功后需要调用end结束刷新

    }, 1500)

  }

  /**
   * 模拟刷新
   * @param end
   * @private
   */
  _onListRefersh(end) {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this._page = 0
      let data = []
      for (let i = 0; i < 10; i++) {
        data.push(i)
      }
      this.setState({
        dataSource: this._dataSource.cloneWithRows(data)
      })
      this.refs.listView.resetStatus() //重置上拉加载的状态

      end()//刷新成功后需要调用end结束刷新
      // this.refs.listView.endRefresh() //建议使用end() 当然 这个可以在任何地方使用
    }, 1500)
  }

  /**
   * 模拟加载更多
   * @param end
   * @private
   */
  _onLoadMore(end) {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this._page++
      let data = []
      for (let i = 0; i < (this._page + 1) * 10; i++) {
        data.push(i)
      }
      this.setState({
        dataSource: this._dataSource.cloneWithRows(data)
      })
      //end(this._page > 2)//加载成功后需要调用end结束刷新 假设加载4页后数据全部加载完毕
      this.refs.listView.endLoadMore(this._page > 2)
    }, 2000)
  }

  componentDidMount() {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      // this.refs.scrollView.beginRefresh()
      this.refs.listView.beginRefresh()
    }, 500) //自动调用刷新 新增方法
  }
}

// pull
//import { PullList } from 'react-native-pull';
class pullList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = [{
      id: 0,
      title: `this is the first.`,
    }];
    this.state = {
      list: (new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(this.dataSource),
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.topIndicatorRender = this.topIndicatorRender.bind(this);
    // this.loadMore();
  }

  onPullRelease(resolve) {
    //do something
    setTimeout(() => {
      resolve();
    }, 3000);
  }

  topIndicatorRender(pulling, pullok, pullrelease) {
    const hide = { position: 'absolute', left: -10000 };
    const show = { position: 'relative', left: 0 };
    setTimeout(() => {
      if (pulling) {
        this.txtPulling && this.txtPulling.setNativeProps({ style: show });
        this.txtPullok && this.txtPullok.setNativeProps({ style: hide });
        this.txtPullrelease && this.txtPullrelease.setNativeProps({ style: hide });
      } else if (pullok) {
        this.txtPulling && this.txtPulling.setNativeProps({ style: hide });
        this.txtPullok && this.txtPullok.setNativeProps({ style: show });
        this.txtPullrelease && this.txtPullrelease.setNativeProps({ style: hide });
      } else if (pullrelease) {
        this.txtPulling && this.txtPulling.setNativeProps({ style: hide });
        this.txtPullok && this.txtPullok.setNativeProps({ style: hide });
        this.txtPullrelease && this.txtPullrelease.setNativeProps({ style: show });
      }
    }, 1);
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60 }}>
        <ActivityIndicator size="small" color="gray" />
        <Text ref={(c) => { this.txtPulling = c; }}>当前PullList状态: pulling...</Text>
        <Text ref={(c) => { this.txtPullok = c; }}>当前PullList状态: pullok......</Text>
        <Text ref={(c) => { this.txtPullrelease = c; }}>当前PullList状态: pullrelease......</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <NavBar
          style={style.navBar}
          title={{ title: '农友圈ListView测试' }}
          {...this.props}
          isShowReturnIcon={true} />
        <PullList
          style={{}}
          onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
          renderHeader={this.renderHeader}
          dataSource={this.state.list}
          pageSize={5}
          initialListSize={5}
          renderRow={this.renderRow}
          onEndReached={this.loadMore}
          onEndReachedThreshold={60}
          renderFooter={this.renderFooter}
        />
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={{ height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>This is header</Text>
      </View>
    );
  }

  renderRow(item, sectionID, rowID, highlightRow) {
    return (
      <View style={{ height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  renderFooter() {
    if (this.state.nomore) {
      return null;
    }
    return (
      <View style={{ height: 100 }}>
        <ActivityIndicator />
      </View>
    );
  }

  loadMore() {
    this.dataSource.push({
      id: 0,
      title: `begin to create data ...`,
    });
    for (var i = 0; i < 5; i++) {
      this.dataSource.push({
        id: i + 1,
        title: `this is ${i}`,
      })
    }
    this.dataSource.push({
      id: 6,
      title: `finish create data ...`,
    });
    setTimeout(() => {
      this.setState({
        list: this.state.list.cloneWithRows(this.dataSource)
      });
    }, 1000);
  }
}

export default SmartPullToRefreshListView;
