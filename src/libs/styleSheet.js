/**
 * Created by www.Yuzi.me on 16/1/27.
 */

import {
  StyleSheet,
  PixelRatio,
  Platform
} from 'react-native';

// -----variables-------------------->
const pixel = 1 / PixelRatio.get();
const C_Default = '#00a69b';
const C_Text = '#416c6d';
const C_999 = '#999999';
const C_ddd = '#dddddd';
const line_color = '#ddd';
const color240 = 'rgba(248,248,248,.98)';
const column8 = 8;
const column24 = 24;
const column48 = 48;
const column56 = 56;
const column72 = 72;
const row16 = 16;
const row32 = 32;
const row72 = 72;
const padding8 = 8;
const padding16 = 16;
const img40 = 40;

const status_bar_height = 20;
const nav_bar_height = Platform.OS === 'ios' ? 44 : 48;

const Dimensions = require('Dimensions');
const { width, height } = Dimensions.get('window');

// const fontName = 'FZLanTingHei-R-GBK'
// const fontNamee = 'HelVetica Neue LT Pro'
// const fontNamec = 'FZYouHeiS-L-GB'

//img
const SCREEN_WIDTH = Dimensions.get('window').width;

const configFour = {
  paddingLeft: 7,
  margin: 1.5,
  size: (SCREEN_WIDTH - 7 * 2 - 4 * 2 * 4) / 4,
}

const img01 = (configFour.size + configFour.margin) * 2.07;
const img03 = (configFour.size + configFour.margin) * 1;

// trace
const traceDateWidth = 60;

const comment_container = Platform.OS === 'ios' ? {
  marginTop: 5,
  zIndex: -1,
} : {
  marginTop: 0,
};

// header
const head_height = height / 2.7

module.exports = StyleSheet.create({

  //-----navbar------------------>
  navBarContainer: {
    backgroundColor: C_Default,
  },
  statusBar: {
    height: status_bar_height,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: nav_bar_height,
    justifyContent: "space-between",
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: nav_bar_height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navBarTitleText: {
    fontSize: 18,
    color: '#fff',
  },
  leftContainer: {},
  rightContainer: {},
  navBarButton: {
    height: nav_bar_height,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navBarIco: {
    fontSize: 22,
    color: '#fff',
    padding: 0,
    backgroundColor: 'transparent'
  },
  navBarButtonText: {},
  navBarRight: {
    justifyContent: 'flex-end',
  },
  navBarLine: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,.1)',
    height: 26,

  },
  navPlusArrow: {
    borderBottomColor: 'rgba(255,255,255,.95)',
    marginTop: 5,
    marginLeft: 10,
    position: 'absolute',
    right: 16,
    top: -17
  },
  nav_bar: {
    flexDirection: 'row',
    borderTopWidth: pixel,
    borderTopColor: line_color
  },
  nav_bar_menu: {
    flex: 1,
    height: column48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nav_bar_icon: {
    fontSize: 28,
    color: '#999'
  },
  nav_bar_text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#999'
  },
  nav_bar_active: {
    color: C_Default
  },
  nav_button: {
    height: row32,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: row32,
    paddingRight: row32,
  },
  nav_return: {
    position: 'absolute',
    top: 22,
    left: 6,
    zIndex: 3,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //-----
  nav_content: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: nav_bar_height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nav_right: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end'
  },
  list_more: {
    width: 10,
    height: 10,
    borderWidth: 5,
    borderTopColor: 'rgba(255,255,255,.6)',
    marginLeft: 5
  },
  //------fontsizefamily---------------->
  font10: {
    fontSize: 10,
    
  },
  font12: {
    fontSize: 12,
    
  },
  font14: {
    fontSize: 14,
    
  },
  font15: {
    fontSize: 15,
    
  },
  font16: {
    fontSize: 16,
    
  },
  font18: {
    fontSize: 18,
    
  },
  font20: {
    fontSize: 20,
    
  },
  font24: {
    fontSize: 24,
    
  },
  font30: {
    fontSize: 30,
  },
  font60: {
    fontSize: 60,
    height: Platform.OS === 'ios' ? 45 : 60,
    lineHeight: 60,
    paddingTop: Platform.OS === 'ios' ? 0 : -13,
  },
  font_family: {
    
  },
  font_eng: {
   
  },
  font_chs: {
   
  },
  font_w: {
    fontWeight: '600'
  },
  //------fontsize---------------->
  font10s: {
    fontSize: 10,
  },
  font12s: {
    fontSize: 12,
  },
  font14s: {
    fontSize: 14,
  },
  font15s: {
    fontSize: 15,
  },
  font16s: {
    fontSize: 16,
  },
  font18s: {
    fontSize: 18,
  },
  font20s: {
    fontSize: 20,
  },
  font22s: {
    fontSize: 22,
  },
  font24s: {
    fontSize: 24,
  },
  font30s: {
    fontSize: 30,
  },
  font40s: {
    fontSize: 40,
  },
  font60s: {
    fontSize: 60,
  },
  font70s: {
    fontSize: 70,
  },
  font80s: {
    fontSize: 80,
  },
  font120s: {
    fontSize: 120,
  },
  //------margin-------------------->
  mt20: {
    marginTop: 20,
  },
  mt16: {
    marginTop: 16,
  },
  mt8: {
    marginTop: 8,
  },
  mr16: {
    marginRight: 16,
  },
  ml16: {
    marginLeft: 16,
  },
  mt10: {
    marginTop: 10,
  },
  mt4: {
    marginTop: 4,
  },
  mb4: {
    marginBottom: 4,
  },
  mr4: {
    marginRight: 4,
  },
  ml4: {
    marginLeft: 4,
  },
  mb20: {
    marginBottom: 20,
  },
  pr8: {
    paddingRight: 8
  },
  pl16: {
    paddingLeft: 16
  },
  h16: {
    height: 16,
    backgroundColor: '#ebebeb',
  },
  //------color-------------------->
  c_fff: {
    color: '#fff',
  },
  c_333: {
    color: '#333333'
  },
  c_666: {
    color: '#666666'
  },
  c_999: {
    color: '#999999'
  },
  c_bbb: {
    color: '#bbbbbb'
  },
  c_ddd: {
    color: '#dddddd'
  },
  c_f00: {
    color: '#ff0000'
  },
  c_default: {
    color: '#00a69b'
  },
  c_warning: {
    color: '#b8860b'
  },
  c_text: {
    color: C_Text
  },
  //------Icon Color ------------------>
  c_green: {
    color: '#009b08',//农作物
  },
  c_468: {
    color: '#4e698f'//农事类型
  },
  c_e94: {
    color: '#e29041'//农资
  },
  c_753: {
    color: '#725e3e'//地块
  },
  c_f90: {
    color: '#ff9500'//农作物类型
  },
  c_e66: {
    color: '#e96465'//种植月份
  },
  c_7a6: {
    color: '#72A76F'//农场
  },
  c_5ab: {
    color: '#58A1BD'//农民
  },
  //------background-------------------->
  bg_white: {
    backgroundColor: 'white'
  },
  //-Ok-----arrow--------------------->
  arrow_up: {
    width: 12,
    height: 12,
    borderWidth: 6,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(0,0,0,.95)'
  },
  arrow_left: {
    width: 12,
    height: 12,
    borderWidth: 6,
    borderColor: 'transparent',
    borderRightColor: 'rgba(0,0,0,.95)'
  },
  arrow_down: {
    width: 12,
    height: 12,
    borderWidth: 6,
    borderColor: 'transparent',
    borderTopColor: 'rgba(0,0,0,.95)'
  },
  //-Ok----line-------------------->
  linebox: {
    backgroundColor: '#fff',
  },
  line: {
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
    marginLeft: 56,
  },
  lines: {
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
  },
  linec: {
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#fff',
  },
  liner: {
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
    marginLeft: 16,
  },
  line_warning: {
    borderBottomColor: '#f00'
  },
  line_col: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0,0,0,.4)',
    marginTop: 8,
    marginBottom: 8,
  },
  //-OK----container------------->
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
  },
  container_bg: {
    backgroundColor: '#ebebeb',
    flex: 1
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -2
  },
  //-OK----header----------------->
  header_content: {
    position: 'relative',
    height: head_height,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_r: {
    paddingRight: 16,
    paddingTop: 44,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  header_l: {
    paddingTop: 44,
    paddingLeft: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header_bg: {
    position: 'absolute',
    zIndex: -2,
    top: 0,
    width: width,
    height: head_height,
  },
  header_bgs: {
    backgroundColor: C_Default
  },
  header_bg_layer: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    width: width,
    height: head_height,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  header_title: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    fontSize: 18,
    color: 'white',
    zIndex: 5,
    backgroundColor: 'transparent'
  },

  header_img: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    width: width,
    height: 90
  },
  header_text: {
    color: 'rgba(255,255,255,.6)',
    fontSize: 10,
    marginTop: 5,
  },
  header_gd: {
    width: width,
    height: 20 * width / 100,
    position: 'absolute',
    left: 0,
    zIndex: 0,
    opacity: .5,
  },
  header_top: {
    top: 0,
    zIndex: -1
  },
  header_bottom: {
    bottom: 0,
    transform: [
      { rotate: '180deg' },
    ],
  },
  //-OK----Pull refresh---------------->
  pull_container: {
    backgroundColor: '#fff'
  },
  pull_refresh: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  pull_loading: {

  },
  //-OK----tabNavigator---------------->
  tab_navigator: {
    height: Platform.OS === 'ios' ? 49 : 56,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: pixel,
    borderTopColor: 'rgba(0,0,0,.1)',
    position: 'absolute',
    zIndex: 0
  },
  nav_icon_select: {
    fontSize: Platform.OS === 'ios' ? 22 : 24,
    color: '#bbb',
  },
  nav_icon_selectd: {
    fontSize: Platform.OS === 'ios' ? 22 : 24,
    color: C_Default,
  },
  nav_title_select: {
    fontSize: 11,
    color: '#bbb',
    marginTop: 2,
    marginBottom: -1
  },
  nav_title_selectd: {
    fontSize: 11,
    color: C_Default,
  },
  //-OK----AddContent,Nodata------------------->
  add_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_content_plus: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(0,166,155,.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_btn: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  no_data: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //-Ok----row-------------->
  row_fixed: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 54,
    paddingLeft: 16,
    paddingRight: 16,
  },
  row_fixed_nobg: {
    flexDirection: 'row',
    height: 54,
    paddingLeft: 16,
    paddingRight: 16,
  },
  row_free: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  row_free_nobg: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  row_icon: {
    width: 40,
    justifyContent: 'center',
  },
  row_icons: {
    width: 40,
    fontSize: 24,
    color: '#ccc',
  },
  row_icon_top: {
    top: Platform.OS === 'ios' ? -4 : -2,
  },
  row_box: {
    flex: 1,
    flexDirection: 'row',
  },
  row_l: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row_r: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  row_unit: {
    justifyContent: 'center',
    marginLeft: 10
  },
  row_title: {
    alignSelf: 'center',
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  row_head: {
    backgroundColor: '#fff',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row_center: {

  },
  row_default: {
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(255,255,255,1)',
  },
  row_active: {
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(170,129,243,1)',
    backgroundColor: 'rgba(170,129,243,.03)'
  },
  //-Ok---column--------------->
  column_free: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 16
  },
  col_l: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  //-Ok---code--------------->
  code_box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: 'white'
  },
  code_img: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20,
  },
  //-Ok---success------------->
  success_box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  //------img---------------->
  list_imgs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: -8,
  },

  img_list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: -1.5,
    top: -1.5,
    marginTop: 5,
  },
  img: {
    width: img03,
    height: img03,
    margin: configFour.margin,
    marginVertical: configFour.margin,
  },
  img_lg: {
    width: img01,
    height: img01,
    margin: configFour.margin,
    marginVertical: configFour.margin,
  },
  img_04: {
    marginRight: 40,
  },


  imgs: {
    height: 56,
    width: 56,
    marginRight: 8,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgs_xs: {
    width: column24,
    height: column24,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2
  },
  imgs_md: {
    width: 30,
    height: 30,
  },
  imgs_lg: {
    width: 70,
    height: 70,
  },
  imgs_round: {
    width: img40,
    height: img40,
    borderRadius: 20,
    alignItems: 'center',
  },
  imgs_round_xs: {
    width: column24,
    height: column24,
    borderRadius: 12,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2
  },
  imgs_round_md: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imgs_round_lg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  imgs_upload_button: {
    borderWidth: pixel,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  avatar: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  no_avatar: {
    width: 40,
    height: 40,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_avatar: {
    flexDirection: 'row',
  },
  show_photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10
  },
  show_photo_close: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.3)',
    zIndex: 5
  },
  //-Ok----input---textarea----------->
  text_input: {
    height: 56,
    fontSize: 15,
    padding: 0,
    flex: 1,
  },
  text_input_r: {
    textAlign: 'right'
  },
  text_input_c: {
    textAlign: 'center'
  },
  text_textarea: {
    height: 80,
    padding: 0,
    fontSize: 15,
    top: Platform.OS === 'ios' ? -5 : 0,
    textAlignVertical: 'top',
  },
  text_input_textarea: {
    maxHeight: 120,
    margin: 5,
    marginLeft: 0,
    marginRight: 10,
    padding: 8,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    fontSize: 14,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: pixel,
    borderColor: line_color,
    borderRadius: 3
  },
  //-Ok----price---------------->

  number_box: {
    flexDirection: 'row',
    top: Platform.OS === 'ios' ? 0 : -8,
  },
  attention: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f5f6f5',
    borderRadius: 4
  },
  attentioned: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: C_Default,
    borderRadius: 4
  },
  //-Ok----trend---------------->
  trend: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  trend_abs: {
    position: 'absolute',
    zIndex: 5,
    bottom: 16,
    right: 16,
    backgroundColor: 'transparent',
  },
  //-Ok---chart--------------247--->
  chart_container: {
    padding: 16,
    backgroundColor: 'rgba(248,248,248,1)'
  },
  chart_header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    height: 18,
  },
  chart_flag: {
    width: 8,
    height: 8,
    backgroundColor: '#aa81f3',
    marginRight: 4,
    marginLeft: 16,
    marginTop: 2,
  },
  chart_flag_red: {
    backgroundColor: '#f00',
  },
  chart_flag_blue: {
    backgroundColor: '#1495EB',
  },
  flag_box: {
    flexDirection: 'row'
  },
  chart_img: {
    width: width / 1.09,
    height: height / 4.5,
  },
  chart_price_head: {
    backgroundColor: 'white',
    position: 'relative',
    height: 50,
  },
  chart_price_badge: {
    backgroundColor: C_Default,
    padding: 5,
    position: 'absolute',
    top: 10,
    left: 120,
    right: 120,
    alignItems: 'center',
    borderRadius: 13,
  },
  chart_price_arrow: {
    position: 'absolute',
    left: width / 2.08,
    bottom: 7,
    borderTopColor: C_Default
  },
  //-Ok-----trace---------------->
  trace_list: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  trace_date: {
    width: 60,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: -4,
  },
  trace_content: {
    flex: 1,
    marginRight: 16
  },
  trace_round: {
    width: 10,
    height: 10,
    backgroundColor: C_Default,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    position: 'absolute',
    left: 60,
    top: 25,
    zIndex: 1
  },
  trace_line: {
    borderWidth: pixel,
    borderColor: 'rgba(153, 153, 153, .2)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 64.65,
  },
  trace_topbg: {
    width: 5,
    height: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 62.5,
    zIndex: 1,
  },
  trace_list_text: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    color: '#666',
    lineHeight: 22
  },
  trace_avatar: {
    width: 60,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  trace_footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //-Ok------分享到农到圈------------>
  share_box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 5,
    flex: 1,
    marginTop: 8
  },
  share_text: {
    marginLeft: 10,
    flex: 1
  },
  //-Ok------评论按钮---------------->
  comment_box: {
    backgroundColor: '#303333',
    borderRadius: 5,
    flexDirection: 'row',
    zIndex: 60,
    position: 'absolute',
    right: 42,
    marginTop: -6
  },
  comment_button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  //-Ok-------评论内容------------>
  comment_container,
  comment_arrow: {
    position: 'absolute',
    width: 14,
    height: 14,
    left: 8,
    top: -13.5,
    borderBottomColor: '#f5f5f5',
  },
  comment_praise: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  comment_warp: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    paddingTop: 6,
    paddingBottom: 6,
    flexDirection: 'column',
  },
  comment_li_warp: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: .8,
    paddingBottom: .8
  },
  comment_li: {
    flex: 1,
    padding: 1.5,
    paddingLeft: 0,
    paddingRight: 0,
    lineHeight: 19,
  },
  //---------------------------->
  company_warp: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    paddingTop: 6,
    backgroundColor: 'transparent'
  },
  company_arrow: {
    borderTopColor: 'rgba(0,0,0,.2)',
    top: 4,
    marginLeft: 10
  },
  //-----form------------------->
  formView: {},
  formViewBox: {
    flex: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },
  formViewTitle: {
    width: 65,
    marginLeft: 16,
  },
  formViewRight: {
    flex: 3,
    height: 27,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 8,
    width: 100,
    marginLeft: 30,
  },
  flexViewArrow: {
    borderTopColor: 'rgba(0,0,0,.4)',
    marginTop: 5,
    marginLeft: 10
  },
  formViewTime: {
    marginTop: -10,
    marginBottom: -10,
    padding: 10,
  },
  formViewTimeContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formViewPickerBox: {
    flex: 1,
    height: 50,
    marginTop: -11,
    marginBottom: -12,
    overflow: 'hidden'
  },
  formViewPicker: {
    backgroundColor: 'transparent',
    width: 10000,
    position: 'absolute',
    right: 0
  },
  formViewPickerShow: {
    height: 50,
    justifyContent: 'center',
    marginRight: 11,
    marginLeft: 20
  },
  //----Picker----------------->
  pickerBox: {
    backgroundColor: 'rgba(32,133,0,.9)',
    position: 'relative'
  },
  listPickerArrow: {
    borderTopColor: 'rgba(0,0,0,.2)',
    marginTop: 5,
    marginLeft: 10,
    position: 'absolute',
    right: 16,
    top: 16
  },
  picker_text: {
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: pixel,
    borderBottomColor: line_color,
  },
  picker_wrap: {
    position: 'absolute',
    left: 95,
    right: 16,
    top: Platform.OS === 'ios' ? 98 : 80,
    zIndex: 1,
    borderRadius: 3,
    shadowOpacity: .3,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    opacity: .99
  },
  picker_list: {
    maxHeight: 400,
  },
  picker_arrow: {
    borderTopColor: 'rgba(0,0,0,.4)',
    marginTop: 8,
    marginLeft: 5
  },

  //-Ok-----login----------------->
  logo: {
    height: 110,
    marginBottom: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_img: {
    width: 180,
    height: 43.5,
  },
  login_input_wrap: {
    flexDirection: 'row',
    margin: 40,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.03)',
    borderRadius: 8,
  },
  login_icon: {
    fontSize: 25,
    marginRight: 10,
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,.2)',
  },
  login_input: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    height: 42,
    borderWidth: 0,
  },
  login_button: {
    margin: 40,
    marginBottom: 0,
    marginTop: 0,
    height: 42,
    backgroundColor: C_Default,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  login_Form_Text: {
    backgroundColor: 'transparent',
    color: '#666'
  },
  login_tishi_icon: {
    fontSize: 18,
    color: '#f00',
    borderRadius: 2,
    marginLeft: 5,
  },
  login_tishi: {
    position: 'absolute',
    right: 62,
    height: Platform.OS === 'ios' ? 13 : 17,
    top: 320,
    zIndex: 10,
    borderTopWidth: 1,
    borderTopColor: '#f00',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  head_line_box: {
    position: 'absolute',
    top: head_height - 15,
    zIndex: 5,
    alignItems: 'center',
    width: width,
    backgroundColor: 'transparent'
  },
  head_line_icon: {
    fontSize: width / 15,
    color: 'white'
  },
  head_lines: {
    backgroundColor: 'white',
    height: 31.5,
    position: 'absolute',
    top: 0,
    width: 300,
  },
  head_line_l: {
    left: 0,
    transform: [
      { translate: [-150, 0] },
    ],
  },
  head_line_r: {
    right: 0,
    transform: [
      { translate: [150, 0] },
    ],
  },
  input_wraps: {
    flexDirection: 'row',
    margin: 40,
    marginTop: 10,
    marginBottom: 0,
    height: 30,
  },
  veri_code: {
    //position: 'absolute',
    right: -10,
    top: 0,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  prompt: {
    height: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 96,
  },

  //-Ok----share----------------->
  share_button: {
    borderRadius: 21,
    margin: 80,
    marginTop: 50,
    marginBottom: 20,
  },
  share_preview: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  //-Ok----task--plan，record----------------->
  subNavList: {
    position: 'absolute',
    top: 50 + 7,
    right: 12,
    backgroundColor: 'rgba(32,133,0,.95)',
    borderRadius: 3,
  },
  subNavListText: {
    width: 100,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12
  },
  subNavListArrow: {
    position: 'absolute',
    top: -12,
    left: 44,
    borderBottomColor: 'rgba(32,133,0,.95)',
  },
  //-Ok----weather---------------------->
  weather_nav: {
    marginTop: height / 2.7,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16
  },
  weather_navs: {
    height: 40,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weather_nav_line: {
    borderLeftWidth: pixel,
    borderLeftColor: 'rgba(0,0,0,.15)',
  },
  extent: {
    top: Platform.OS === 'ios' ? 0 : -3,
    marginLeft: 5,
  },
  refresh: {
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
    right: -16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //-----task--pic-------------------->
  loadImgBox: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: pixel,
    borderBottomColor: 'rgba(0,0,0,.15)',
    flexDirection: 'row'
  },
  loadImgButton: {
    width: 60,
    height: 60,
    padding: 15,
    borderWidth: pixel,
    borderColor: 'rgba(0,0,0,.15)',
    borderRadius: 5,
  },
  loadButtonImg: {
    width: 30,
    height: 30,
    tintColor: 'rgba(0,0,0,.2)'
  },
  //------task--select-------------------->
  addMaterials: {
    backgroundColor: '#fff',
  },
  selMaterList: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  selMaterDel: {
    right: 10,
    top: 16,
    position: 'absolute',
  },
  selMaterDelImg: {
    width: 15,
    height: 15,
    tintColor: 'rgba(0,0,0,.2)',
    transform: [
      { rotate: '45deg' },
    ],

  },
  materBox: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  //-----product-------------------->
  proBox: {
    flex: 1,
  },
  proMain: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: pixel,
    borderBottomColor: 'rgba(0,0,0,.15)',
  },
  proTitleView: {
    flexDirection: 'column',
  },
  proBaseInfo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  proBaseInfoLeft: {
    flex: 10,
    borderRightWidth: pixel,
    borderRightColor: 'rgba(0,0,0,.15)',
  },
  proBaseInfoRight: {
    fontSize: 12,
    flex: 3,
    color: 'rgba(0,0,0,.5)',
    paddingLeft: 10,

  },
  proWeather: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 67,
    paddingTop: 10,
    marginTop: 5,
    borderTopWidth: pixel,
    borderTopColor: '#ddd',
    borderBottomWidth: pixel,
    borderBottomColor: '#ddd',
    overflow: 'hidden'
  },
  proTaskNav: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
  },
  proTask: {
    flex: 1,
    flexDirection: 'row',
    height: 25,
    paddingTop: 6,
  },
  proButtonBox: {
    flexDirection: 'row',
    borderTopWidth: pixel,
    borderTopColor: '#ddd',
    borderBottomWidth: pixel,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  proButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  rightBorder: {
    borderRightWidth: pixel,
    borderRightColor: '#ddd',
  },
  //----Trace---------------------->
  cropHeadLeft: {
    position: 'absolute',
    backgroundColor: 'rgba(240,240,240,1)',
    width: 120,
    height: 120,
    borderRadius: 60,
    top: 60,
    left: 20,
  },
  cropHeadLeftText: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#d8d8d8",
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropLine: {
    borderRightWidth: 2,
    borderRightColor: "#d8d8d8",
    position: 'absolute',
    top: 169,
    left: 80,
    bottom: 0,
  },
  lotInfoBox: {
    position: 'absolute',
    top: 87,
    right: 0,
    left: 50,
    alignItems: 'flex-end',
  },
  lotWeather: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.1)',
    marginBottom: 10,
    paddingLeft: 200,
  },
  lotWeatherIcon: {
    fontSize: 30,
    color: '#fff'
  },
  lotWeatherNum: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '200',
    top: -2,
    marginLeft: 10,
  },
  lotWeatherRing: {
    color: '#fff',
    top: 1,
    marginRight: 10,
  },
  lotInfo: {
    alignItems: 'flex-end',
    paddingRight: 18,
  },
  cropBox: {
    marginTop: 65,
  },
  cropList: {
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
  cropTitle: {
    width: 74,
    paddingTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cropLi: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  cropLiRound: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#d8d8d8',
    marginTop: 2,
    marginRight: 15,
    borderWidth: 2,
    borderColor: 'rgba(240,240,240,1)'
  },
  cropWarn: {
    color: 'rgba(208,29,110,1)',
  },
  cropWarnRound: {
    backgroundColor: 'rgba(208,29,110,1)'
  },
  cropLiContent: {
    marginLeft: 30,
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
  },
  cropLiText: {
    lineHeight: 19,
  },
  //-Ok---Pop-up layer----------------------->
  popup_layer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  popup_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
  },
  popup_bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popup_bg_w: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255,255,255,0)'
  },
  popup_button_box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup_button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C_Default,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  popup_button_disabled: {
    backgroundColor: C_ddd,
  },
  popup_buttons: {
    width: 50,
    height: 34,
    borderRadius: 3,
    backgroundColor: C_Default,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    marginBottom: 6
  },
  popup_buttons_disabled: {
    width: 50,
    height: 34,
    borderRadius: 3,
    backgroundColor: C_ddd,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    marginBottom: 6
  },
  popup_box: {
    height: height,
    zIndex: 53,
    justifyContent: 'flex-end'
  },
  popup_content: {
    bottom: 0,
    borderTopWidth: pixel,
    borderTopColor: '#ccc',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(248,248,248,1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 60,
    width: width
  },
  popup_close: {
    backgroundColor: 'rgba(0,0,0,0)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 54,
    position: 'absolute',
  },
  //-Ok---blockui----------------------->
  blockUiContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  blockUiOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
  },
  blockUiText: {
    color: 'white',
    paddingTop: 5,
  },
  //----Receipt----------------------->
  receiptBox: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  receiptHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: pixel,
    borderBottomColor: '#ddd',
  },
  receiptHeadLeft: {
    alignItems: 'flex-start',
    flex: 1,
    // ------ width: 100,
    marginRight: 10,
  },
  receiptHeadRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  receiptContent: {
    flex: 2,
    flexDirection: 'column',
    margin: 16,
    marginBottom: 8,
    marginTop: 8
  },
  receiptContentWarp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  receiptFoot: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 8,
    marginBottom: 8,
    borderTopWidth: pixel,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiptCorrect: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255,0,0,.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  //----Breadcrumbs----------------------->
  topNav: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    paddingTop: 16,
    paddingBottom: 16,
  },
  topNavHead: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  topNavText: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  topNavRound: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(246,171,26,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  topNavRounds: {
    width: 12,
    height: 12,
    marginTop: 4,
    backgroundColor: 'rgba(220,220,220,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  topNavRoundActive: {
    width: 12,
    height: 12,
    marginTop: 4,
  },
  topNavWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  topNavLine: {
    borderTopWidth: 2,
    borderTopColor: 'rgba(246,171,26,1)',
    position: 'absolute',
    top: 9,
    left: 95,
    right: 0,
  },
  topNavLines: {
    borderTopWidth: 2,
    borderTopColor: 'rgba(220,220,220,1)',
    position: 'absolute',
    top: 9,
    left: 0,
    right: 95,
  },
  topNavLinesActive: {
    borderTopColor: 'rgba(246,171,26,1)',
  },
  //----product----------------------->
  productWrap: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
  },
  productLi: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  productLiView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    flex: 2,
    textAlign: 'left',
  },
  productList: {
    backgroundColor: 'rgba(252,252,252,1)'
  },
  productPrice: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  hidden: {
    top: -10000,
    left: 0,
    height: 0,
    width: 0
  }


});
