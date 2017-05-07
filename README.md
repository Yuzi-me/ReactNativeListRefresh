# react-native-pull-to-refresh-list-demo

[![npm](https://img.shields.io/npm/v/react-native-pull-to-refresh-list.svg)](https://www.npmjs.com/package/react-native-pull-to-refresh-list)
[![npm](https://img.shields.io/npm/dm/react-native-pull-to-refresh-list.svg)](https://www.npmjs.com/package/react-native-pull-to-refresh-list)
[![npm](https://img.shields.io/npm/dt/react-native-pull-to-refresh-list.svg)](https://www.npmjs.com/package/react-native-pull-to-refresh-list)
[![npm](https://img.shields.io/npm/l/react-native-pull-to-refresh-list.svg)](https://github.com/react-native-component/react-native-pull-to-refresh-listview/blob/master/LICENSE)

React Native 下拉刷新和上拉加载，IOS是用纯JS编写；Android是用纯JS和Java编写。解决了Android listview大数据下拉刷新效果体验。

此组件目前测试通过版本为 React Native 0.43，其他 React Native 各个版本暂未测试，望各位高手遇到兼容性问题，留言或者提问给我，我愿与你一起解决问题。

## DEMO
<div>
<img src="https://github.com/Yuzi-me/react-native-pull-to-refresh-list-demo/raw/master/src/img/ios.gif" alt="" width="40%">
<img src="https://github.com/Yuzi-me/react-native-pull-to-refresh-list-demo/raw/master/src/img/android.gif" alt="" width="42.75%%">
</div>


## 安装

```
npm install
```


## 命令行配置 (Android)

```
react-native link react-native-pull-to-refresh-list
```

运行以上命令，还需要手动配置以下文件

* In `android/settings.gradle`
```
...
maven {
    url "$rootDir/../node_modules/react-native/android"
}
maven { url "https://jitpack.io" }  //used for react-native-pull-to-refresh-list
```


## 手动配置 (Android)

* In `android/settings.gradle`

```
...
include ':react-native-pull-to-refresh-list'
project(':react-native-pull-to-refresh-list').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-pull-to-refresh-list/android')
```

* In `android/build.gradle`

```
...
maven {
    url "$rootDir/../node_modules/react-native/android"
}
maven { url "https://jitpack.io" }  //used for react-native-pull-to-refresh-list
```


* In `android/app/build.gradle`

```
...
dependencies {
    ...
    // From node_modules
    compile project(':react-native-pull-to-refresh-list')
}
```

* In MainApplication.java

```
...
import com.reactnativepulltorefresh.AppReactPackage;    //import package
...
/**
 * A list of packages used by the app. If the app uses additional views
 * or modules besides the default ones, add more packages here.
 */
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new AppReactPackage()  //register Module
    );
}
...

```

## 属性设置

Prop                    | Type   | Optional | Default   | Description
----------------------- | ------ | -------- | --------- | -----------
...ListView.propTypes   |        |          |           | see [react-native documents][3]
viewType                | enum   | Yes      | Symbol    | determines the viewType which will be used(ScrollView, ListView)
autoLoadMore            | bool   | Yes      | false     | when the value is true, pull up load more will be auto
onRefresh               | func   | Yes      |           | when refreshing, this function will be called
onLoadMore              | func   | Yes      |           | when loadingMore, this function will be called
onEndReachedThreshold   | number | Yes      | 0         | threshold in pixels (virtual, not physical) for calling onLoadMore
pullUpDistance          | number | Yes      | 35        | determines the pull up max distance
pullUpStayDistance      | number | Yes      | 50        | determines the pull up stay distance
pullDownDistance        | number | Yes      | 35        | determines the pull down max distance
pullDownStayDistance    | number | Yes      | 50        | determines the pull down stay distance
enabledPullUp           | bool   | Yes      | true      | when the value is false, pull up load more will be disabled
enabledPullDown         | bool   | Yes      | true      | when the value is false, pull down refresh will be disabled
listItemProps           | object | Yes      |           | see [react-native documents][4]
renderRowWithVisibility | bool   | Yes      |           | when the value is true, the children of the listRow can be controlled with 'hidden' state
pageTop                 | number | Yes      | 0         | determines the top relative to the page of the float section header(sticky header) view
floatSectionHeaderWidth | number | Yes      |deviceWidth| determines the width of the float section header(sticky header) view
renderFloatSectionHeader| number | Yes      | 0         | determines the width of the float section header(sticky header) view
listSectionProps        | object | Yes      |           | see [react-native documents][4]

## 感谢
* [react-native-smart-pull-to-refresh-listview](https://github.com/react-native-component/react-native-smart-pull-to-refresh-listview) 在此基础上改进，感谢您分享。
* [ShineFan](https://github.com/ShineFan) 感谢我的同事提供技术帮助，没有他的大力支持，我很难完成。


[3]: http://facebook.github.io/react-native/docs/listview.html#props
[4]: http://facebook.github.io/react-native/docs/view.html#props
