import { countUtils } from '../../../api/compute/bettingCountUtils';

export default {

  name: "ssc",
  data() {
    return {
      //一级玩法
      oneTypeId: "",
      code: 'ssc',

      // 当前玩法名称
      title: '定位胆-定位胆',
      //右边帮助提示
      right_title: '',
      right_title_two: '',
      // 记录当前玩法类型
      preventType: 'three_yard',
      // 当使用common选择区时选择项的个数是不确定的,用一个值记录,确定随机值的范围
      //      comLength: 0,
      // 公共部分选择区域是否显示上面和左边的结构
      right: true,
      top: true,
      // 投注区域显示模块管理
      bet_area_manner: {
        //万位
        myriabit: true,
        //千位
        kilobit: true,
        // 百位
        hundreds: true,
        //十位
        decade: true,
        // 个位
        unit: true,
        // 公共
        common: false,

        // 特殊号
        special: false,
        // 龙虎
        pred: false,
      },

      //展开全部玩法
      switchoverType: false,

      //玩法区域
      play_area_manner: {
        // 公用参考
        //          commoney: {
        //              isSel:false,//标志当前玩法是否被选中
        //          act_area:"",//当前玩法对应的在页面中显示的投注选择区域
        ////                             hundreds   decade  对应页面中的一个相应区域
        //          title:"",//选中某一玩法后玩法选择菜单出展示的当前玩法名称
        //          singId:"",//对应后台的三级玩法id
        //              Ename:"",//记录当前这一对象属性的名称,用于一些需要快速获取到某一个指定玩法的相关方法中
        //              right:"",//用于控制一个用作几个玩法共用的展示区的右侧副标题是否展示
        //          top:"",//用于控制一个用作几个玩法共用的展示区的顶部是否展示
        //          right_title:"",// 右侧副标题需要显示的文字
        //              number:"",// 用于控制一个用作几个玩法共用的展示区的显示内容
        //
        //              myriabitNumber:"",//万位的显示内容  默认0-9
        //              kilobitNumber:"",//千位的显示内容  默认0-9
        //          hundredsNumber:"",//百位的显示内容  默认0-9
        //              decadeNumber:"",// 十位的显示内容   默认0-9
        //          unitNumber:"",//个位的显示内容      默认0-9
        //          },
        // 定位胆
        courage_static: {
          isSel: true,
          act_area: ['myriabit', 'kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '定位胆-定位胆',
          right_title_two: "万位",
          singId: 49,
          code3: "ssc_dwd_dwd",
          Ename: 'courage_static'
        },
        //五星--直选复式
        five_yard: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '五星-直选复式',
          right_title_two: "万位",
          singId: 50,
          code3: "ssc_5x_zxfs",
          Ename: 'five_yard',
        },
        //四星--直选复式
        four_yard: {
          isSel: false,
          act_area: ['kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '四星-直选复式',
          singId: 51,
          code3: "ssc_4x_zxfs",
          Ename: 'four_yard',
        },

        //后三--直选复式
        three_yard_back_single: {
          isSel: false,
          act_area: ['hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-直选复式',
          singId: 52,
          code3: "ssc_h3_zxfs",
          Ename: "three_yard_back_single",
        },
        //后三--直选和值
        three_yard_back_count: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
          title: '后三-直选和值',
          right_title: '和值',
          singId: 53,
          code3: "ssc_h3_zxhz",
          Ename: "three_yard_back_count",
        },
        //后三--直选跨度
        three_yard_back_spacing: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-直选跨度',
          right_title: '跨度',
          singId: 54,
          code3: "ssc_h3_zxkd",
          Ename: "three_yard_back_spacing",
        },
        //后三--后三组合
        // three_back_group: {
        //   isSel: false,
        //   act_area: ['hundreds', 'decade', 'unit'],
        //   number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //   title: '后三-后三组合',
        //   singId: 55,
        //   code3:"ssc_h3_h3zh",
        //   Ename: "three_back_group",
        // },
        //后三--组三复式
        three_back_group_three: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-组三复式',
          right_title: '组三',
          singId: 56,
          code3: "ssc_h3_zu3fs",
          Ename: "three_back_group_three",
        },
        //后三--组六复式
        three_back_group_six: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-组六复式',
          right_title: '组六',
          singId: 57,
          code3: "ssc_h3_zu6fs",
          Ename: "three_back_group_six",
        },
        //          //后三--组选和值
        //          three_back_group_count:{
        //            isSel: false,
        //                    act_area: ['common'],
        //                    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        //                    title: '后三-组选和值',
        //                    right_title: '和值',
        //            singId:58,
        //                  Ename:"three_back_group_count",
        //                },
        //          //后三--组选包胆
        //          three_back_group_courage:   {
        //            isSel: false,
        //                    act_area: ['common'],
        //                     number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //                    title: '后三-组选包胆',
        //                    right_title: '包胆',
        //            singId:59,
        //                  Ename:"three_back_group_courage",
        //                },
        //后三--和值尾数
        three_back_count_mantissa: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-和值尾数',
          right_title: '和值尾数',
          singId: 60,
          code3: "ssc_h3_hzws",
          Ename: "three_back_count_mantissa",
        },
        //后三--特殊号
        three_back_special: {
          isSel: false,
          act_area: ['special'],
          number: ["豹子", "顺子", "对子"],
          title: '后三-特殊号',
          right_title: '特殊号',
          singId: 61,
          code3: "ssc_h3_tsh",
          Ename: "three_back_special",
        },
        //后三--组三和值
        three_back_group_three_count: {
          isSel: false,
          act_area: ['common'],
          number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
          title: '后三-组三和值',
          right_title: '和值',
          singId: 108,
          code3: "ssc_h3_zu3hz",
          Ename: "three_back_group_three_count",
        },
        //后三--组六和值
        three_back_group_six_count: {
          isSel: false,
          act_area: ['common'],
          number: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          title: '后三-组六和值',
          right_title: '和值',
          singId: 109,
          code3: "ssc_h3_zu6hz",
          Ename: "three_back_group_six_count",
        },

        //后三--组三包胆
        three_back_group_three_courage: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-组三包胆',
          right_title: '包胆',
          singId: 114,
          code3: "ssc_h3_zu3bd",
          Ename: "three_back_group_three_courage",
        },
        //后三--组六包胆
        three_back_group_six_courage: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '后三-组六包胆',
          right_title: '包胆',
          singId: 115,
          code3: "ssc_h3_zu6bd",
          Ename: "three_back_group_six_courage",
        },

        //前三--直选复式
        three_yard_pre_single: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-直选复式',
          right_title_two: "万位",
          singId: 62,
          code3: "ssc_q3_zxfs",
          Ename: "three_yard_pre_single",
        },
        //前三--直选和值
        three_yard_pre_count: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
          title: '前三-直选和值',
          right_title: '和值',
          singId: 63,
          code3: "ssc_q3_zxhz",
          Ename: "three_yard_pre_count",
        },
        //前三--直选跨度
        three_yard_pre_spacing: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-直选跨度',
          right_title: '跨度',
          singId: 64,
          code3: "ssc_q3_zxkd",
          Ename: "three_yard_pre_spacing",
        },
        // //前三--前三组合
        // three_pre_group: {
        //   isSel: false,
        //   act_area: ['myriabit', 'kilobit', 'hundreds'],
        //   number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //   title: '前三-前三组合',
        //   right_title_two: "万位",
        //   right_title: '组合',
        //   singId: 65,
        //   code3:"ssc_q3_z3zh",
        //   Ename: "three_pre_group",
        // },
        //前三--组三复式
        three_pre_group_three: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-组三复式',
          right_title: '组三',
          singId: 66,
          code3: "ssc_q3_zu3fs",
          Ename: "three_pre_group_three",
        },
        //前三--组六复式
        three_pre_group_six: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-组六复式',
          right_title: '组六',
          singId: 67,
          code3: "ssc_q3_zu6fs",
          Ename: "three_pre_group_six",
        },
        //          //前三--组选和值
        //          three_pre_group_count:{
        //            isSel: false,
        //                    act_area: ['common'],
        //                    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
        //                    title: '前三-组选和值',
        //                     right_title: '和值',
        //            singId:68,
        //                  Ename:"three_pre_group_count",
        //                },
        //          //前三--组选包胆
        //          three_pre_group_courage:    {
        //            isSel: false,
        //                    act_area: ['common'],
        //                     number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //                    title: '前三-组选包胆',
        //                    right_title: '包胆',
        //            singId:69,
        //                  Ename:"three_pre_group_courage",
        //                },
        //前三--和值尾数
        three_pre_count_mantissa: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-和值尾数',
          right_title: '和值尾数',
          singId: 70,
          code3: "ssc_q3_hzws",
          Ename: "three_pre_count_mantissa",
        },
        //前三--特殊号
        three_pre_special: {
          isSel: false,
          act_area: ['special'],
          number: ["豹子", "顺子", "对子"],
          title: '前三-特殊号',
          right_title: '特殊号',
          singId: 71,
          code3: "ssc_q3_tsh",
          Ename: "three_pre_special",
        },
        //前三--组三和值
        three_pre_group_three_count: {
          isSel: false,
          act_area: ['common'],
          number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
          title: '前三-组三和值',
          right_title: '和值',
          singId: 110,
          code3: "ssc_q3_zu3hz",
          Ename: "three_pre_group_three_count",
        },
        //前三--组六和值
        three_pre_group_six_count: {
          isSel: false,
          act_area: ['common'],
          number: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          title: '前三-组六和值',
          right_title: '和值',
          singId: 111,
          code3: "ssc_q3_zu6hz",
          Ename: "three_pre_group_six_count",
        },
        //前三--组三包胆
        three_pre_group_three_courage: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-组三包胆',
          right_title: '包胆',
          singId: 116,
          code3: "ssc_q3_zu3bd",
          Ename: "three_pre_group_three_courage",
        },
        //前三--组六包胆
        three_pre_group_six_courage: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前三-组六包胆',
          right_title: '包胆',
          singId: 117,
          code3: "ssc_q3_zu6bd",
          Ename: "three_pre_group_six_courage",
        },

        //前二--直选复式
        two_yard_pre_single: {
          isSel: false,
          act_area: ['myriabit', 'kilobit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前二-直选复式',
          right_title_two: "万位",
          singId: 72,
          code3: "ssc_q2_zxfs",
          Ename: "two_yard_pre_single",
        },
        //前二--直选和值
        two_yard_pre_count: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          title: '前二-直选和值',
          right_title: '和值',
          singId: 73,
          code3: "ssc_q2_zxhz",
          Ename: "two_yard_pre_count",
        },
        //前二--直选跨度
        two_yard_pre_spacing: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前二-直选跨度',
          right_title: '跨度',
          singId: 74,
          code3: "ssc_q2_zxkd",
          Ename: "two_yard_pre_spacing",
        },
        //前二--组选复式
        two_pre_group: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前二-组选复式',
          right_title: '组选',
          singId: 75,
          code3: "ssc_q2_zuXfs",
          Ename: "two_pre_group",
        },
        //前二--组选和值
        two_pre_group_count: {
          isSel: false,
          act_area: ['common'],
          number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          title: '前二-组选和值',
          right_title: '和值',
          singId: 76,
          code3: "ssc_q2_zuXhz",
          Ename: "two_pre_group_count",
        },
        //前二--组选包胆
        two_pre_group_courage: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '前二-组选包胆',
          right_title: '包胆',
          singId: 77,
          code3: "ssc_q2_zuXbd",
          Ename: "two_pre_group_courage",
        },

        //不定位--前三一码
        three_pre_courage_act_one: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-前三一码',
          right_title: '不定位',
          singId: 78,
          code3: "ssc_bdw_q31m",
          Ename: "three_pre_courage_act_one",
        },
        //不定位--前三二码
        three_pre_courage_act_two: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-前三二码',
          right_title: '不定位',
          singId: 79,
          code3: "ssc_bdw_q32m",
          Ename: "three_pre_courage_act_two",
        },
        //不定位--后三一码
        three_back_courage_act_one: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-后三一码',
          right_title: '不定位',
          singId: 80,
          code3: "ssc_bdw_h31m",
          Ename: "three_back_courage_act_one",
        },
        //不定位--后三二码
        three_back_courage_act_two: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-后三二码',
          right_title: '不定位',
          singId: 81,
          code3: "ssc_bdw_h32m",
          Ename: "three_back_courage_act_two",
        },
        //不定位--前四一码
        four_pre_courage_act_one: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-前四一码',
          right_title: '不定位',
          singId: 82,
          code3: "ssc_bdw_q41m",
          Ename: "four_pre_courage_act_one",
        },
        //不定位--前四二码
        four_pre_courage_act_two: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-前四二码',
          right_title: '不定位',
          singId: 83,
          code3: "ssc_bdw_q42m",
          Ename: "four_pre_courage_act_two",
        },
        //不定位--后四一码
        four_back_courage_act_one: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-后四一码',
          right_title: '不定位',
          singId: 84,
          code3: "ssc_bdw_h41m",
          Ename: "four_back_courage_act_one",
        },
        //不定位--后四二码
        four_back_courage_act_two: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-后四二码',
          right_title: '不定位',
          singId: 85,
          code3: "ssc_bdw_h42m",
          Ename: "four_back_courage_act_two",
        },
        //不定位--五星一码
        five_courage_act_one: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-五星一码',
          right_title: '不定位',
          singId: 86,
          code3: "ssc_bdw_5x1m",
          Ename: "five_courage_act_one",
        },
        //不定位--五星二码
        five_courage_act_two: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-五星二码',
          right_title: '不定位',
          singId: 87,
          code3: "ssc_bdw_5x2m",
          Ename: "five_courage_act_two",
        },
        //不定位--五星三码
        five_courage_act_three: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '不定位-五星三码',
          right_title: '不定位',
          singId: 88,
          code3: "ssc_bdw_5x3m",
          Ename: "five_courage_act_three",
        },

        //大小单双--前二大小单双
        two_yard_pre_updown_single: {
          isSel: false,
          act_area: ['myriabit', 'kilobit'],
          myriabit: ["大", "小", "单", "双"],
          kilobit: ["大", "小", "单", "双"],
          title: '大小单双-前二大小单双',
          right_title_two: "万位",
          singId: 89,
          code3: "ssc_dxds_q2dxds",
          Ename: "two_yard_pre_updown_single",
        },
        //大小单双--后二大小单双
        two_yard_back_updown_single: {
          isSel: false,
          act_area: ['decade', 'unit'],
          decade: ["大", "小", "单", "双"],
          unit: ["大", "小", "单", "双"],
          title: '大小单双-后二大小单双',
          right_title: '大小单双',
          singId: 90,
          code3: "ssc_dxds_h2dxds",
          Ename: "two_yard_back_updown_single",
        },
        //大小单双--前三大小单双
        three_yard_pre_updown_single: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds'],
          myriabit: ["大", "小", "单", "双"],
          kilobit: ["大", "小", "单", "双"],
          hundreds: ["大", "小", "单", "双"],
          title: '大小单双-前三大小单双',
          right_title_two: "万位",
          singId: 91,
          code3: "ssc_dxds_q3dxds",
          Ename: "three_yard_pre_updown_single",
        },
        //大小单双--后三大小单双
        three_yard_back_updown_single: {
          isSel: false,
          act_area: ['hundreds', 'decade', 'unit'],
          hundreds: ["大", "小", "单", "双"],
          decade: ["大", "小", "单", "双"],
          unit: ["大", "小", "单", "双"],
          title: '大小单双-后三大小单双',
          right_title: '大小单双',
          singId: 92,
          code3: "ssc_dxds_h3dxds",
          Ename: "three_yard_back_updown_single",
        },

        //任选二--直选复式
        two_yard_random: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选二-直选复式',
          right_title_two: "万位",
          singId: 93,
          code3: "ssc_rx2_zxfs",
          Ename: "two_yard_random",
        },
        //任选二--直选和值
        two_yard_random_count: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          title: '任选二-直选和值',
          right_title: '和值',
          singId: 94,
          code3: "ssc_rx2_zxhz",
          Ename: "two_yard_random_count",
        },
        //任选二--组选复式
        two_yard_random_group: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选二-组选复式',
          right_title: '组选',
          singId: 95,
          code3: "ssc_rx2_zuXfs",
          Ename: "two_yard_random_group",
        },
        //任选二--组选和值
        two_yard_random_group_count: {
          isSel: false,
          act_area: ['common'],
          number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          title: '任选二-组选和值',
          right_title: '和值',
          singId: 96,
          code3: "ssc_rx2_zuXhz",
          Ename: "two_yard_random_group_count",
        },

        //任选三--直选复式
        three_yard_random: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选三-直选复式',
          right_title_two: "万位",
          singId: 97,
          code3: "ssc_rx3_zxfs",
          Ename: "three_yard_random",
        },
        //任选三--直选和值
        three_yard_random_count: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
          title: '任选三-直选和值',
          right_title: '和值',
          singId: 98,
          code3: "ssc_rx3_zxhz",
          Ename: "three_yard_random_count",
        },
        //任选三--组三复式
        three_yard_random_group_three: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选三-组三复式',
          right_title: '组三',
          singId: 99,
          code3: "ssc_rx3_zu3fs",
          Ename: "three_yard_random_group_three",
        },
        //任选三--组六复式
        three_yard_random_group_fix: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选三-组六复式',
          right_title: '组六',
          singId: 100,
          code3: "ssc_rx3_zu6fs",
          Ename: "three_yard_random_group_fix",
        },
        //任选三--组选和值
        // three_yard_random_group_count: {
        //   isSel: false,
        //   act_area: ['common'],
        //   number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        //   title: '任选三-组选和值',
        //   right_title: '和值',
        //   singId: 101,
        //   code3: "ssc_rx3_zx",
        //   Ename: "three_yard_random_group_count",
        // },
        //任选三--组三和值
        three_yard_random_group_three_count: {
          isSel: false,
          act_area: ['common'],
          number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
          title: '任选三-组三和值',
          right_title: '和值',
          singId: 112,
          code3: "ssc_rx3_zu3hz",
          Ename: "three_yard_random_group_three_count",
        },
        //任选三--组六和值
        three_yard_random_group_six_count: {
          isSel: false,
          act_area: ['common'],
          number: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          title: '任选三-组六和值',
          right_title: '和值',
          singId: 113,
          code3: "ssc_rx3_zu6hz",
          Ename: "three_yard_random_group_six_count",
        },

        //任选四--直选复式
        four_yard_random: {
          isSel: false,
          act_area: ['myriabit', 'kilobit', 'hundreds', 'decade', 'unit'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选四-直选复式',
          right_title_two: "万位",
          singId: 102,
          code3: "ssc_rx4_zxfs",
          Ename: "four_yard_random",
        },
        //任选四--组选24
        four_random_group_twenty_four: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选四-组选24',
          right_title: '组选24',
          singId: 103,
          code3: "ssc_rx4_zuX24",
          Ename: "four_random_group_twenty_four",
        },
        //任选四--组选12
        four_random_group_twelve: {
          isSel: false,
          act_area: ['myriabit', 'common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选四-组选12',
          right_title: '单号',
          right_title_two: "二重号",
          singId: 104,
          code3: "ssc_rx4_zuX12",
          Ename: "four_random_group_twelve",
        },
        //任选四--组选6
        four_random_group_six: {
          isSel: false,
          act_area: ['common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选四-组选6',
          right_title: '二重号',
          singId: 105,
          code3: "ssc_rx4_zuX6",
          Ename: "four_random_group_six",
        },
        //任选四--组选4
        four_random_group_four: {
          isSel: false,
          act_area: ['myriabit', 'common'],
          number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          title: '任选四-组选4',
          right_title: '单号',
          right_title_two: "三重号",
          singId: 106,
          code3: "ssc_rx4_zuX4",
          Ename: "four_random_group_four",
        },
        //龙虎
        pred: {
          isSel: false,
          act_area: ['pred'],
          number: [
            ["万位", "千位"],
            ["万位", "百位"],
            ["万位", "十位"],
            ["万位", "个位"],
            ["千位", "百位"],
            ["千位", "十位"],
            ["千位", "个位"],
            ["百位", "十位"],
            ["百位", "个位"],
            ["十位", "个位"]
          ],
          title: '龙虎-龙虎',
          right_title: '龙虎',
          singId: 107,
          code3: "ssc_lh_lh",
          Ename: "pred",
        }
      },

      // 玩法菜单管理对象    Ename通过从后台获取的数据中的id3与配置对象中的id比对然后获取相应的
      menu: [],

      // common共用区域选值
      numberArr: [],
      //万位选择项管理对象
      myriabit: [],
      //千位选择项管理对象
      kilobit: [],
      //百位选择项管理对象
      hundreds: [],
      //十位选择项管理对象
      decade: [],
      //个位选择项管理对象
      unit: [],

      // 总的注数和投注金额
      bets: 0,
      coin: 0,
      //设置位数和位数目---任选
      position_bets: 0,
      position_count: 2,
      position_maxnum: 2,
      position_list: [0, 0, 0, 0, 0],

      //是否正在切换玩法
      isChangePlayId: false,
      //机选与清空切换延迟
      isDelay: false,

      // 近期开奖
      recentPrize: [],
      // 记录用户当前的投注信息
      recentBetInfo: {},
      // 记录用户所有的投注订单信息
      BetsList: [],
      // 总注数和投注所需金额
      totalBets: 0,
      totalCoins: 0,

      // 历史开奖
      history: [],
      // 目前销售期的期数和最新一期开奖
      recentlyNum: [],
      presentNum: '',
      // 单注金额
      singleCoins: "",

      // 玩法提示相关
      game_tips: '',
      win_example: '',
      win_explain: '',
      // 赔率   总概率   返奖率
      orderOdds: 95,
      orderCount: 100,
      rebate: 0,
      rebateNum: 0,
      maxOdds: 95,
      maxPrize: 9.8,
      minPrize: 8.5,
      maxReward: 13,
      commonNum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

      parentIndex: 0,
      chlidIndex: 0,

      present_playId: 49,

      //当前玩法类型名
      typeNameTitle: "",
      // 当前投注期次及截止日期
      preventBanner: 0,

      // 可用余额,单笔最大投注金额
      pack_coin: '--',
      //      singleMaxSum:0,
      // 追号期数
      continue_periods: 1,
      // 中奖后停止追号
      after_no: false,
      errmsg: '',
      sucmsg: '',

      //时间倒计时
      lastTime: '2018-3-16 14:10:08',
      deadlineTiming: "",
      deadlineStr: "",

      //上一期的期数
      stopBanner: "",
      //检测是否点击重复投注
      isHandleBets: false,
      //金额单位
      coinUnit: "元",

      //特殊号--赔率对应数组
      special_orderOddsList: [],
      //特殊号--对应单注中奖金额
      special_sum: "",
      special_indexList: [],
      //暂未开售阻止投注
      bet_forbid: false,
      //上期期数
      previousIssue: "",
      previousIssue_tips: "",
      //收藏
      isCollect: 0,

      //计划
      showGamePlan: 0,
      gamePlanList: [],
      nowGamePlan: "",
      gamePlanPageIndex: 1,
      gamePlanBanner: "",
      //三级id
      planTypeId: "",
      //是否有计划(0-无,1-有)
      isPlan: 0,

      //是否能展开
      ableGamePlanScoll: 0,


      userName: localStorage.userName,

      all_TBet: []
    }
  },
  created: function () {
    this.all_TBet = window.all_TBet;
    // if (localStorage.userName && localStorage.indexCoinMsg) {
    //   var coinMsg = JSON.parse(localStorage.indexCoinMsg);
    //   this.pack_coin = (parseFloat(coinMsg.coin)).toFixed(2);
    //   this.user_state = "钱包:" + this.pack_coin + this.coinUnit + "(可用)";
    //   localStorage.indexCoinMsg = "";
    //   // this.get_userState();
    // } else {
    //   this.get_userState();
    // }
    this.changeRoute();
    if (localStorage.userName) {
      this.get_userState();
    }

  },
  mounted: function () {
    //    $("body").on("click",".mask.menu",function(){
    //    alert(5555);
    //
    //  })
    this.initDom();
    // this.downRefresh();
    //mui.init();
    mui('.mui-switch')['switch']();
    $(".mui-backdrop.mui-active.mui-backdrop-action").remove();
    //主界面和侧滑菜单界面均支持区域滚动；
    mui('#offCanvasSideScroll').scroll();
    mui('#middle').scroll();
    mui('#offCanvasContentScroll').scroll();
    // document.getElementById("change").addEventListener("toggle", function(event) {
    //
    // })
    // this.setBetScroll();
    // var h=$(window).height(),
    //   mh=h-$('#header').height()-$('#offCanvasContentScroll>div>div:nth-child(1)').height()-$('#offCanvasContentScroll>div>div:nth-child(3)').height();
    // $("#mainArea").css({
    //  height:mh+30,
    //  'position':'relative'
    // });
    // $('#mainArea>.mui-row:nth-child(1)').css({
    //  height:"80%",
    //  'position':'absolute',
    //  top:0

    // });
    // mui('#mainArea>.mui-row:nth-child(1)').scroll();

    var h = $(window).height(),
      mh = h - 44 - $('#offCanvasContentScroll>div>div:nth-child(1)').height() - 50;
    // console.log(h,$('#header').height(),$('#offCanvasContentScroll>div>div:nth-child(3)').height(),$('#offCanvasContentScroll>div>div:nth-child(1)').height())
    $('#mainArea>.mui-row:nth-child(1)').css({
      height: mh - 12,
    });
    $("#mainArea").css({
      height: mh + 50
    });


  },
  methods: {
    changDN() {
      $('.body').toggleClass('dark');
    },
    setBetScroll() {
      (function () {
        var controlsElem = document.getElementById("segmentedControls");
        var contentsElem = document.getElementById("segmentedControlContents");
        var controlListElem = controlsElem.querySelectorAll('.mui-control-item');
        var contentListElem = contentsElem.querySelectorAll('.mui-control-content');
        var controlWrapperElem = controlsElem.parentNode;
        var controlWrapperHeight = controlWrapperElem.offsetHeight;
        var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight; //左侧类别最大可滚动高度
        var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight; //右侧内容最大可滚动高度
        var controlHeight = controlListElem[0].offsetHeight; //左侧类别每一项的高度
        var controlTops = []; //存储control的scrollTop值
        var contentTops = [0]; //存储content的scrollTop值
        var length = contentListElem.length;
        for (var i = 0; i < length; i++) {
          controlTops.push(controlListElem[i].offsetTop + controlHeight);
        }
        for (var i = 1; i < length; i++) {
          var offsetTop = contentListElem[i].offsetTop;
          if (offsetTop + 100 >= maxScroll) {
            var height = Math.max(offsetTop + 100 - maxScroll, 100);
            var totalHeight = 0;
            var heights = [];
            for (var j = i; j < length; j++) {
              var offsetHeight = contentListElem[j].offsetHeight;
              totalHeight += offsetHeight;
              heights.push(totalHeight);
            }
            for (var m = 0, len = heights.length; m < len; m++) {
              contentTops.push(parseInt(maxScroll - (height - heights[m] / totalHeight * height)));
            }
            break;
          } else {
            contentTops.push(parseInt(offsetTop));
          }
        }
        contentsElem.addEventListener('scroll', function () {
          var scrollTop = contentsElem.scrollTop;
          for (var i = 0; i < length; i++) {
            var offsetTop = contentTops[i];
            var offset = Math.abs(offsetTop - scrollTop);
            //            console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
            if (scrollTop < offsetTop) {
              if (scrollTop >= maxScroll) {
                onScroll(length - 1);
              } else {
                onScroll(i - 1);
              }
              break;
            } else if (offset < 20) {
              onScroll(i);
              break;
            } else if (scrollTop >= maxScroll) {
              onScroll(length - 1);
              break;
            }
          }
        });
        var lastIndex = 0;
        //监听content滚动
        var onScroll = function (index) {
          if (lastIndex !== index) {
            lastIndex = index;
            var lastActiveElem = controlsElem.querySelector('.mui-active');
            lastActiveElem && (lastActiveElem.classList.remove('mui-active'));
            var currentElem = controlsElem.querySelector('.mui-control-item:nth-child(' + (index + 1) + ')');
            currentElem.classList.add('mui-active');
            //简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
            var controlScrollTop = controlWrapperElem.scrollTop;
            if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
              controlWrapperElem.scrollTop = controlMaxScroll;
            } else if (controlScrollTop > controlTops[index] - controlHeight) {
              controlWrapperElem.scrollTop = 0;
            }
          }
        };
        //滚动到指定content
        var scrollTo = function (index) {
          contentsElem.scrollTop = contentTops[index];
        };
        mui(controlsElem).on('tap', '.mui-control-item', function (e) {
          scrollTo(this.getAttribute('data-index'));
          // document.getElementById("segmentedControlContents").scrollTop = contentTops[this.getAttribute('data-index')];
          return false;
        });
        document.getElementById("change").addEventListener("toggle", function (event) {
          $('.body').toggleClass('dark');
        })
      })();

    },
    //点击进入投注页面
    togocontentUrl: function (contentUrl, gameID, imgUrl, showName) {
      if (!localStorage.userName) {
        this.$router.push({
          name: "login"
        });
        return
      }
      localStorage.lottery_img = imgUrl; //开奖页面用到图片url
      localStorage.lottery_url = contentUrl; //开奖页面用到投注页面url
      localStorage.gameID = gameID;
      var dealUrl = "/" + contentUrl.replace("_", "").replace(".html", "").replace("?", "/");

      this.$router.push({ path: dealUrl });

    },

    //路由跳转返回
    routerBack: function () {
      if (localStorage.turnPathName && localStorage.turnPathName != "login" && !localStorage.userName) {
        // this.$router.push({ name: localStorage.turnPathName });
        this.$router.go(-1)
      } else {
        this.$router.push({
          name: "index"
        });
      }

    },
    showHis(type) {
      if (type == 1) {
        if ($('.hisWrap').is('.hide')) {
          $('.record.hide').removeClass('hide');
          $('.hisWrap.hide').removeClass('hide');
          $('#offCanvasContentScroll .num .triangle').addClass('reversal');
        } else {
          $('.record').addClass('hide');
          $('.hisWrap').addClass('hide');
          $('#offCanvasContentScroll .num .triangle').removeClass('reversal');
        }


      } else {
        $('.record').addClass('hide');
        $('.hisWrap').addClass('hide');
        $('#offCanvasContentScroll .num .triangle').removeClass('reversal');
      }
    },
    //初始化数据
    initData() {
      this.pullToRefresh.setNowThis(this);
      //this.isCollect = localStorage.collectGame && JSON.parse(localStorage.collectGame).collectList[this.oneTypeId] ? 1 : 0;

      // this.get_userState();
    },
    pulldownRefresh(_this) {
      _this.get_userState(1);
    },
    //刷新
    downRefresh() {
      if ($(" .refresh").is(".isClick")) {
        return
      }
      $(" .refresh").addClass("isClick");
      //刷新当前路由
      this.$router.replace({
        path:this.$route.path,
        query: {
        t: Date.now()
        }
    })
      $(" .refresh").css({
        "transition": "transform 1s linear",
        "transform": "rotate(360deg)",
        "opacity": "0.5"
      });
      setTimeout(function () {
        $(" .refresh").css({
          "color": "#f67620"
        });
        $(" .refresh").css({
          "transition": "inherit",
          "transform": "rotate(0deg)",
          "opacity": "1"
        });
        $(" .refresh").removeClass("isClick");
      }, 1000)
    },
    //收藏
    collectFn: function () {
      if (this.isCollect == 0) {
        this.isCollect = 1;
      } else {
        this.isCollect = 0;
      }
      var dataList = this.collectGame.set(this.oneTypeId);
      localStorage.collectGame = dataList ? JSON.stringify(dataList) : '';
    },
    //请求计划
    // getPlanData:function(){
    //  return
    //   var _this = this;
    //   if (!_this.preventBanner || !_this.planTypeId || !_this.oneTypeId || _this.isPlan!=1) {
    //     return
    //   }

    //     var obj={
    //       type:"post",
    //       data:{
    //         issue: _this.previousIssue_tips ? _this.previousIssue : _this.preventBanner,
    //         playid:  parseInt(_this.planTypeId),
    //         type: parseInt(_this.oneTypeId),
    //       },
    //       url:"/commonAPI/getPlanByTypeAndPlay",
    //       success:function(data){
    //         if(data.code==200){
    //           _this.nowGamePlan = data.body.plan_content;
    //           _this.ableGamePlanScoll = 1;
    //         } else if (data.code == 201){
    //           _this.nowGamePlan=data.msg;
    //           _this.ableGamePlanScoll=1;
    //         } else {
    //           _this.ableGamePlanScoll = 0;
    //           _this.showGamePlan = 2;
    //         }
    //       },
    //       error:function(msg){
    //         //console.log(msg)
    //       },
    //     };
    //     this.base.callCommonApi(obj);

    //   },
    //   //请求计划列表
    // getPlanDataList:function(index){
    //   var _this=this;
    //   if (_this.ableGamePlanScoll==0){
    //     return
    //   }
    //   if(index){
    //     // _this.gamePlanPageIndex=index;
    //     if (_this.showGamePlan == 1){
    //       $("#gamePlanList").animate({
    //         height: '0'
    //       }, 500,function(){
    //         _this.showGamePlan = 0;
    //       });

    //       return
    //     }else{
    //       _this.showGamePlan = 1;
    //       if (_this.gamePlanList.length!=0){
    //         $("#gamePlanList").animate({
    //           height: '9.5rem'
    //         }, 500);
    //         return
    //       }
    //     }
    //   }
    //   var obj = {
    //     type: "post",
    //     data: {
    //       pageNum:5,
    //       pageIndex:_this.gamePlanPageIndex,
    //       pageSize: 10,
    //       playid: parseInt(_this.planTypeId),
    //       type: parseInt(_this.oneTypeId),
    //     },
    //     url: "/commonAPI/getPlanDate",
    //     success: function (data) {
    //       if (data.code == 200) {

    //         if (index){
    //           _this.gamePlanList = data.body.list;
    //             $("#gamePlanList").animate({
    //               height: '9.5rem'
    //             }, 500);
    //         }else{
    //           data.body.list.map(function(item){
    //             _this.gamePlanList.push(item);
    //           })
    //         }
    //       } else {
    //         //console.log(data);
    //       }
    //     },
    //     error: function (msg) {
    //       //console.log(msg)
    //     },
    //   };
    //   this.base.callCommonApi(obj);
    // },
    // gamePlanScoll:function(e){
    //   var index = this.gamePlanPageIndex - 2,
    //     lisLen = $("#gamePlanList li").height() * 5,
    //     ulLen = $("#gamePlanList").height(),
    //     ulScollTop = $("#gamePlanList").scrollTop()-index*lisLen;
    //   // if ((ulScollTop < (lisLen-ulLen)&&index==0) || (ulScollTop > index * lisLen && ulScollTop < (index * lisLen+5))){
    //   if (ulScollTop>0.5&&ulScollTop > (lisLen - ulLen)){
    //     this.gamePlanPageIndex = index+3;
    //     this.getPlanDataList();
    //   }
    // },
    // gamePlanScoll:function(e){
    //   var index = this.gamePlanPageIndex - 2,
    //     lisLen = $("#gamePlanList li").height() * 5,
    //     ulLen = $("#gamePlanList").height(),
    //     ulScollTop = $("#gamePlanList").scrollTop()-index*lisLen;
    //   // if ((ulScollTop < (lisLen-ulLen)&&index==0) || (ulScollTop > index * lisLen && ulScollTop < (index * lisLen+5))){
    //   if (ulScollTop>0.5&&ulScollTop > (lisLen - ulLen)){
    //     this.gamePlanPageIndex = index+3;
    //     this.getPlanDataList();
    //   }
    // },
    initDom: function () {
      var _this = this;
      var h = $(window).height() + 'px';
      var w = $(window).width() + 'px';
      $('.mask').css({
        width: w,
        height: h,
        background: "rgba(0, 0, 0, 0.4)",
        position: "fixed",
        top: "0",
        right: "0",
      })
      $('.play_menu').css({
        width: w,
        height: h,
      })
      $('.pay').css({
        width: w,
        height: h,
      })
      $('.success').css({
        width: w,
        height: h,
      })
      // $('.mask .inner').css({
      //  width: "75%",
      //  color: "#fff",
      //  position: "absolute",
      //  top: "30%",
      //  left: "12.5%",
      //  marginRight: "-50%",
      // })
      // $('.mask.setting .inner').css({
      //  width: "85%",
      //  color: "#fff",
      //  position: "absolute",
      //  top: "20%",
      //  left: "7.5%",
      //  marginRight: "-50%",
      // })
      $('.popup').css({
        top: parseInt(h) / 2 - $('.popup').height() / 2 + "px"
      })
      // 点击近期开奖弹出近期开奖列表
      // $(".btn_banner").click(function() {
      //  $(".record").slideToggle();
      //  $(".ico").toggleClass('active');
      // })
      // 点击遮罩隐藏玩法说明弹出层
      $("#ssc").on("click", ".mask.help", function () {
        $(".mask").css({
          display: "none"
        });
        //$("body").css("overflow", "auto");
        //$("body").css("overflow", "auto");
      })
      // 点击玩法帮助弹出玩法说明界面
      $("#ssc").on("click", ".playTips span", function () {
        $(".mask.help").css({
          display: "block"
        });
        $("body").css("overflow", "hidden");
      })
      $(".play_head").on("click", "li", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".play_list ul").children("li").css({
          display: "none"
        })
        $(".play_list ul").children("li").eq($(this).index()).css({
          display: "block"
        });
        $(".play_list ul").children("li").eq($(this).index()).find(".sel:first").trigger("click");
        if ($(".play_list ul").children("li").eq($(this).index()).find(".sel").length > 1) {
          _this.switchoverType = true;
        }
      })

      // 点击主页面玩法按钮显示玩法选择接卖弄
      $("span.btn").click(function () {
        $(".play_menu").css({
          display: "block"
        })
      });
      // 点击玩法选择界面的关闭按钮关闭玩法选择界面
      $(".pay .top_head span").click(function () {
        $(".play_menu").css({ display: "none" });
        $("#mainArea").css({ display: "block" });
        $("#header").show();
      });
      // $(".success.suc .top_head span").click(function() {
      //  $(".success.suc").css({display: "none"});
      //  $("#mainArea").css({display: "block"});
      //  $("#header").show();
      // })
      // $(".success.fail .top_head span").click(function() {
      //  $(".success.fail").css({
      //    display: "none"
      //  });
      //  $("#mainArea").css({
      //    display: "block"
      //  });
      //   $("#header").show();

      // })
      // $(".success.suc .mbt").click(function() {
      //  $(".success").css({
      //    display: "none"
      //  });
      //  $("#mainArea").css({
      //    display: "block"
      //  });
      //  $("#header").show();
      // })
      // $(".success.fail .mbt").click(function() {
      //  $(".success.fail").css({
      //    display: "none"
      //  });
      //  $("#mainArea").css({
      //    display: "block"
      //  });
      //   $("#header").show();
      // })
      // 点击玩法选择界面的某一个选项时切换到改选项下
      $("#gameplayArea .play_list").on("click", ".sel", function () {
        $("#gameplayArea .play_list .active").removeClass("active");
        $(this).addClass("active");
        //      $(".play_menu").css({ display: "none" })
      })
      // 点击投注单页面关闭按钮关闭投注单
      $(".pay .top_head span").click(function () {
        $(".pay").css({
          display: "none"
        });
        $("#mainArea").css({
          display: "block"
        })
        $("#header").show();
      })
      // 进度条拖拽
      // $(".setting_group .btn").mousedown(function(e) {
      //  var event = event || window.event;
      //  var leftVal = event.clientX - this.offsetLeft;
      //  var that = this;
      //  // 拖动一定写到 down 里面才可以
      //  document.onmousemove = function(event) {
      //    var event = event || window.event;
      //    barleft = event.clientX - leftVal;
      //    if(barleft < 0)
      //      barleft = 0;
      //    else if(barleft > scroll.offsetWidth - bar.offsetWidth)
      //      barleft = scroll.offsetWidth - bar.offsetWidth;
      //    mask.style.width = barleft + 'px';
      //    that.style.left = barleft + "px";
      //  }
      // })
      $(".mask.menu .menu_list").click(function (event) {
        event.stopPropagation();
      })

      //计划
      // $("#gamePlanList").on("click",function(){
      //   //console.log(5555)
      //   //console.log(this.scrollHeight)
      // })
      //   $('#gamePlanList').on('touchstart', function (e) {
      //     var _touch = e.originalEvent.targetTouches[0];
      //     var _x = _touch.pageX;
      //     //console.log(_x);
      //   });

      // $('#gamePlanList').on('touchmove', function (e) {
      //   var _touch = e.originalEvent.targetTouches[0];
      //   var _x = _touch.pageX;
      //   //console.log(_x);
      // });

      // $('#gamePlanList').on('touchend', function (e) {
      //   var _touch = e.originalEvent.changedTouches[0];
      //   var _x = _touch.pageX;
      //   //console.log(_x);
      // });
      // $('#gamePlanList').scroll(function () {
      //   //console.log(55)
      // });
    },
    // 获取历史开奖数据
    getHistoryBannerInfo: function () {
      var _this = this;
      var obj = {
        type: "post",
        url: '/commonAPI/hisOpenData',
        data: {
          one_type_id: _this.oneTypeId,
          count: 20,
          isWhite: true
        },
        success: function (data) {
          if (data.code == 200 && data.body && data.body.length != 0) {
            if (_this.previousIssue && data.body[0].issue !== _this.previousIssue && _this.previousIssue_tips) {
              // setTimeout(function () {
              //   _this.getHistoryBannerInfo();
              // }, 20000);
              _this.global_timingStorage.setOption(_this, ["getHistoryBannerInfo"], 10000, 1, _this.oneTypeId);
            } else {
              _this.previousIssue = data.body[0].issue;
              _this.previousIssue_tips = "";
              if (_this.preventBanner) {
                //_this.getPlanData();
              }
            }

            _this.history = data.body;
            _this.recentlyNum = data.body[0].luck_number;
            _this.presentNum = parseInt(data.body[0].issue) + 1
          } else {
            _this.history = [];
            _this.global_timingStorage.setOption(_this, ["getHistoryBannerInfo"], 10000, 1, _this.oneTypeId);
          }
        },
        error: function (res) {

        }
      }
      this.base.callCommonApi(obj);
    },
    // 获取当前可投注期次信息
    getBetsBannerInfo: function () {
      if (!this.oneTypeId) {
        return
      }
      var _this = this;
      var obj = {
        type: "post",
        // type:'post',
        url: '/commonAPI/getIssueInfo',
        data: {
          one_type_id: _this.oneTypeId,
          isWhite: true
        },
        success: function (data) {
          if (_this.deadlineTiming) {
            window.clearInterval(_this.deadlineTiming);
            _this.deadlineTiming = "";
          }
          _this.bet_forbid = false;
          if (data.code == 200 && data.body) {
            if (!data.body.deadline) {
              _this.preventBanner = "";
              _this.deadlineStr = "封盘";
              return
            }
            if (data.body.saleStatus == "ON_SALE") {
              _this.preventBanner = data.body.issue
              _this.bet_forbid = false;
              _this.noSale = false;
              // if(!_this.nowGamePlan){
              //   //_this.getPlanData();
              // }

              // setTimeout(function () {
              //   _this.getHistoryBannerInfo();
              // }, 120000);
            } else if (data.body.saleStatus == "NO_SALE") {
              _this.preventBanner = data.body.issue;
              _this.bet_forbid = true;
              _this.noSale = true;
            }
            //近期开奖
            if (_this.previousIssue && _this.previousIssue == data.body.previousIssue) {
              _this.previousIssue_tips = "";
              if (!_this.nowGamePlan) {
                //_this.getPlanData();
              }
            } else {
              _this.previousIssue = data.body.previousIssue;

              if (data.body.previousIssue) {
                // setTimeout(function () {
                //   _this.getHistoryBannerInfo();
                // }, 20000);
                _this.global_timingStorage.setOption(_this, ["getHistoryBannerInfo"], 10000, 1, _this.oneTypeId);
                _this.previousIssue_tips = "开奖中...";
                //_this.getPlanData();
              } else {
                // setTimeout(function () {
                //   _this.getHistoryBannerInfo();
                // }, 20000);
                _this.global_timingStorage.setOption(_this, ["getHistoryBannerInfo"], 10000, 1, _this.oneTypeId);
                _this.previousIssue_tips = "";
                if (!_this.nowGamePlan) {
                  //_this.getPlanData();
                }
              }
            }
            _this.lastTime = _this.getMilliseconds(data.body.deadline)
            _this.startTime = _this.getMilliseconds(data.body.response_date)

            //对返回的时间进行判断，看是否符合
            if (!_this.lastTime || !_this.startTime || _this.lastTime <= _this.startTime) {
              _this.bet_forbid = true;
              _this.preventBanner = "";
              _this.deadlineStr = "暂停销售";
              if (_this.issueErr) {
                var issList = _this.issueErr.split(",");
                if (issList.indexOf(_this.oneTypeId) == -1) {
                  issList.push(_this.oneTypeId)
                }
                _this.issueErr = issList.join(",");
              } else {
                _this.issueErr = _this.oneTypeId;
              }

              return
            }
            _this.countdown(_this.lastTime, _this.startTime);
            _this.deadlineTiming = setInterval(function () {
              _this.startTime += 1000;
              _this.countdown(_this.lastTime, _this.startTime);
            }, 1000);


          } else if (data.code == 201) {
            _this.bet_forbid = true;
            _this.preventBanner = "";
            _this.deadlineStr = data.msg;
          } else {
            _this.bet_forbid = true;
            _this.preventBanner = "";
            _this.deadlineStr = "暂停销售";
            // setTimeout(function(){
            //     _this.getBetsBannerInfo();
            // },2000)
          }
        },
        error: function (res) {
          setTimeout(function () {
            _this.getBetsBannerInfo();
          }, 5000)
        }
      };
      this.base.callCommonApi(obj);
    },
    // 获取系统配置投注项
    getBetsType: function () {
      if (!this.oneTypeId) {
        return
      }
      var _this = this,
        obj = {
          type: "post",
          // type: 'post',
          url: '/commonAPI/qryGamePlayInfo',
          data: {
            one_type_id: _this.oneTypeId
          },
          success: function (data) {
            if (data.code == 200 && data.body) {
              _this.initializeBetsTypeData(data.body)
            } else { }
          },
          error: function (res) {

          }
        },
        dataList = localStorage.qryGamePlayInfo ? JSON.parse(localStorage.qryGamePlayInfo) : "",
        ots = localStorage.qryGamePlayInfoTimestamp ? JSON.parse(localStorage.qryGamePlayInfoTimestamp) : "",
        nts = localStorage.contrastTimestamp ? JSON.parse(localStorage.contrastTimestamp).gameTypeSign : "";

      //比对时间戳，看是否需要更新
      if ((!nts[_this.oneTypeId] && !ots[_this.oneTypeId] && dataList[_this.oneTypeId]) || (dataList != "" && ots != "" && nts != "" && nts != null && ots[_this.oneTypeId] && dataList[_this.oneTypeId] && ots[_this.oneTypeId] == nts[_this.oneTypeId]) && dataList[_this.oneTypeId].length != 0) {
        _this.initializeBetsTypeData(dataList[_this.oneTypeId])
      } else {
        _this.contrastTimestamp();
        this.base.callCommonApi(obj);
      }
    },


    //初始化投注项数据
    initializeBetsTypeData: function (data) {
      var _this = this,
        oneTypeArr = [],
        dataList;
      _this.menu = [];
      if (!localStorage.qryGamePlayInfo) {
        dataList = {};
        dataList[_this.oneTypeId] = data;
        localStorage.qryGamePlayInfo = JSON.stringify(dataList);
      } else {
        dataList = JSON.parse(localStorage.qryGamePlayInfo);
        dataList[_this.oneTypeId] = data;
        localStorage.qryGamePlayInfo = JSON.stringify(dataList);
      }
      _this.gamePlayCode1 = data[0].code1 ? data[0].code1 : '';
      // 第一遍遍历添加一级玩法
      data.map(function (item) {
        if (!oneTypeArr.some(function (items) {
          return items == item.name2
        })) {
          oneTypeArr.push(item.name2)
        }
      })
      oneTypeArr.map(function (item) {
        _this.menu.push({
          oneType: item,
          twoType: []
        })
      })
      data.sort(function (a, b) {
        return a.sort2 - b.sort2
      })
      data.map(function (item) {
        _this.menu.map(function (items) {
          //如果大玩法相同
          if (items.oneType == item.name2) {
            var Ename = '';
            for (var key in _this.play_area_manner) {
              if (_this.play_area_manner[key].code3 == item.code3) {
                Ename = _this.play_area_manner[key].Ename
                _this.play_area_manner[key].maxPrize = item.max_prize
                _this.play_area_manner[key].minPrize = item.min_prize
                _this.play_area_manner[key].maxReward = item.max_reward
                _this.play_area_manner[key].id3 = item.id3
                _this.play_area_manner[key].id2 = item.id2
                _this.play_area_manner[key].id1 = item.id1
                _this.play_area_manner[key].is_plan = item.is_plan
                _this.play_area_manner[key].maxAmount = item.maxAmount;
                _this.play_area_manner[key].minAmount = item.minAmount;

              }
            }

            items.twoType.push({
              name: item.name3,
              Ename: Ename,
              game_tips: item.game_tips,
              id3: item.id3,
              win_explain: item.win_explain,
              win_example: item.win_example,
              maxPrize: item.max_prize,
              minPrize: item.min_prize,
              maxReward: item.max_reward,
              sort3: item.sort3,

            })
          }
        })
      })
      _this.menu.map(function (item) {
        item.twoType.sort(function (a, b) {
          return a.sort3 - b.sort3
        })
      })
      _this.setOrderOdds();
      _this.typeNameTitle = data[0].name1;
      _this.title = _this.menu[0]['oneType'] + '-' + _this.menu[0]['twoType'][0]['name']
      _this.handlePlayType(_this.menu[0]['twoType'][0]['Ename'])
      _this.maxPrize = _this.menu[0]['twoType'][0]['maxPrize']
      _this.minPrize = _this.menu[0]['twoType'][0]['minPrize']
      _this.maxReward = _this.menu[0]['twoType'][0]['maxReward']
      _this.orderOdds = _this.maxPrize;

      //dom树初始化
      $("#gameplayArea .play_head>ul li.active").removeClass("active");
      $("#gameplayArea .play_head>ul li:first").addClass("active");

      $("#gameplayArea .play_list>ul li:first").css({
        display: "block"
      });
      $("#gameplayArea .play_list>ul li:first .type_item .sel:first").removeClass("active");
      $("#gameplayArea .play_list>ul li:first .type_item .sel:first").addClass("active");

    },

    //固定差值=(最大赔率 - 最小赔率) / 最大返点-- 保留三位小数并舍去三位以后小数
    //当前赔率 = 最大赔率 - (固定差值 * (最大返点 - 当前返点))
    // _this.menu，play_area_manner
    setOrderOdds() {
      //重新计算赔率&& !this.rebateList
      if (localStorage.szcRebateList) {
        var _this = this, item, code1 = _this.gamePlayCode1,
          rebateList = JSON.parse(localStorage.szcRebateList);
        for (var i in rebateList) {
          if (rebateList[i].code == code1) {
            this.rebateList = rebateList[i]
            break
          }
        }

        //原始数据赔率修改
        //play_area_manner
        for (var key in _this.play_area_manner) {
          item = _this.play_area_manner[key];
          if (item.maxPrize) {
            if (item.maxPrize.indexOf('|') != -1) {
              var maxList = item.maxPrize.split('|'), minList = item.minPrize.split('|'), val = "";
              maxList.map(function (items, index) {
                var val = parseFloat((items - minList[index]) / (_this.rebateList.rebate * 10 + 1)).toFixed(3);
                maxList[index] = parseFloat(items - (val * (_this.rebateList.rebate - _this.rebateList.nowRebate) * 10)).toFixed(3);
              });
              item.maxPrize = maxList.join("|");
            } else {
              var val = parseFloat((item.maxPrize - item.minPrize) / (_this.rebateList.rebate * 10 + 1)).toFixed(3);
              item.maxPrize = parseFloat(item.maxPrize - (val * (_this.rebateList.rebate - _this.rebateList.nowRebate) * 10)).toFixed(3);
            }
            _this.play_area_manner[key].maxPrize = item.maxPrize;
          }
        }
        //menu
        _this.menu.map(function (outItem) {
          outItem.twoType.map(function (inItem) {
            if (inItem.maxPrize.indexOf('|') != -1) {
              var maxList = inItem.maxPrize.split('|'), minList = inItem.minPrize.split('|'), val = "";
              maxList.map(function (inItems, index) {
                if(_this.rebateList.nowRebate==0){
                  maxList[index] = minList[index]
                }else{
                  var val = parseFloat((inItems - minList[index]) / (_this.rebateList.rebate * 10 + 1)).toFixed(3);
                  maxList[index] = parseFloat(inItems - (val * (_this.rebateList.rebate - _this.rebateList.nowRebate) * 10)).toFixed(3);
                }
              })
              inItem.maxPrize = maxList.join("|");
            } else {
              if(_this.rebateList.nowRebate==0){
                inItem.maxPrize = inItem.minPrize
              }else{
                var val = parseFloat((inItem.maxPrize - inItem.minPrize) / (_this.rebateList.rebate * 10 + 1)).toFixed(3);
                inItem.maxPrize = parseFloat(inItem.maxPrize - (val * (_this.rebateList.rebate - _this.rebateList.nowRebate) * 10)).toFixed(3);
              }
            }
          })
        });

      }

    },

    //获取第一遍加载时的时间戳
    contrastTimestamp: function () {
      var _this = this,
        timeList,
        obj = {
          type: "post",
          url: "/commonAPI/privacy/getUpdateStatusSign",
          data: {
            isWhite: true
          },
          success: function (data) {
            var ulist = [],
              nlist = [],
              oDataList, nameList = ["sysAdvpictureSign", "sysBulletinSign", "sysConfigureSign", "sysLotterySign"];
            if (data.body) {
              localStorage.contrastTimestamp = JSON.stringify(data.body);
              if (localStorage.qryGamePlayInfoTimestamp) {
                timeList = JSON.parse(localStorage.qryGamePlayInfoTimestamp);
                timeList[_this.oneTypeId] = data.body.gameTypeSign[_this.oneTypeId];
                localStorage.qryGamePlayInfoTimestamp = JSON.stringify(timeList);
              } else {
                timeList = {};
                timeList[_this.oneTypeId] = data.body.gameTypeSign[_this.oneTypeId];
                localStorage.qryGamePlayInfoTimestamp = JSON.stringify(timeList);
              }
            } else {
              localStorage.contrastTimestamp = "";
              setTimeout(function () {
                _this.contrastTimestamp();
              }, 2000);
            }
          },
        };
      this.base.callCommonApi(obj);
    },
    //页面跳转--返回
    goback_click: function () {
      var that = this;
      if (localStorage.app_flag == undefined) {
        that.turnUrl('index');
      } else {
        var h = plus.webview.getLaunchWebview(); //获取首页窗口
        localStorage.renovate = 1; //存入变量控制首页刷新
        mui.fire(h, 'refresh'); //传值给首页执行的方法名
        setTimeout(function () { //延迟关闭本窗口，目的是给首页足够的刷新时间做判断是展开哪个页面.
          var ws = plus.webview.currentWebview();
          plus.webview.close(ws);
        }, 500)
      }
    },
    //点击帮助
    togohelp: function () {
      this.$router.push({
        name: help
      })
      // if (localStorage.app_flag == undefined) {
      //   window.location.href = 'help.html';
      // } else {
      //   mui.openWindow({
      //     url: 'help.html',
      //     id: 'help',
      //     styles: {
      //       top: base.getStatusbarHeight() + 'px',
      //       bottom: 0
      //     },
      //     show: {
      //       autoShow: true, //页面loaded事件发生后自动显示，默认为true
      //       aniShow: 'slide-in-bottom', //页面显示动画，默认为”slide-in-right“；
      //       duration: '200' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
      //     },
      //     createNew: true
      //   })
      // }
    },
    // 获取毫秒数
    getMilliseconds: function (str) {
      str = str.replace(new RegExp("-", "gm"), "/");
      return (new Date(str)).getTime(); //得到毫秒数
    },
    //时间倒计时
    countdown: function (lastTime, startTime) {
      var _this = this,
        deadlineT = lastTime - startTime,
        deadline_hour = _this.getzf(Math.floor(deadlineT / 1000 / 60 / 60)),
        deadline_minute = _this.getzf(Math.floor(deadlineT / 1000 / 60 % 60)),
        deadline_second = _this.getzf(Math.floor(deadlineT / 1000 % 60));
      if (deadlineT >= 0) {
        _this.deadlineStr = deadline_hour + ":" + deadline_minute + ":" + deadline_second;
      } else {
        _this.deadlineStr = "正在请求数据...";

        clearInterval(_this.deadlineTiming);
        _this.deadlineTiming = "";
        _this.stopBanner = _this.preventBanner;
        // _this.getBetsBannerInfo();
        // if (_this.$route.name == _this.global_timingStorage.nowName) {
        // numberGame_countDownList
        // _this.getBetsBannerInfo();
        _this.global_timingStorage.countdown_ending(_this);
        // } else {
        //   _this.global_timingStorage[_this.global_timingStorage.nowName].numberGame_countDownList.push("getBetsBannerInfo");
        // }
      }

    },
    //补0
    getzf: function (num) {
      if (parseInt(num) < 10) {
        num = '0' + num;
      }
      return num;
    },
    //获取登录状态
    get_userState: function (isRefresh) {
      var that = this,
        userNameMsg = localStorage.userName;
      // if ((userNameMsg && that.pack_coin == 0) || (userNameMsg &&isRefresh)) {
      if (userNameMsg) {
        // that.isLogin = true;
        var getUserInfo = {
          type: "post",
          url: "/authApi/getCoinForBet",
          async: true,
          data: {
            "username": localStorage.getItem("userName"),
            isWhite: true
          },
          success: function success(data) {
            if (data.code == 200) {
              that.pack_coin = (parseFloat(data.body.coin)).toFixed(2)
              that.user_state = "钱包:" + that.pack_coin + that.coinUnit + "元(可用)";
            } else if (data.code == 336) {
              localStorage.loginTo = this.$route.path;
              this.turnUrl("login");
            }
          }
        }

        this.base.callAuthApi(getUserInfo);
      }
    },
    //获取系统配置
    getSysConfig: function () {
      var that = this,
        getSingleMaxSum = {
          type: "post",
          url: "/commonAPI/privacy/getSysConfigureResult",
          data: {},
          success: function (data) {
            if (data.code == 200) {
              localStorage.config = JSON.stringify(data.body);
              if (data.body.coinUnit) {
                that.coinUnit = data.body.coinUnit;
              }
            }
          },
        },
        config = localStorage.config ? JSON.parse(localStorage.config) : '';
      if (config == "" || !config.coinUnit) {
        this.base.callCommonApi(getSingleMaxSum);
      } else {
        that.coinUnit = config.coinUnit;
      }
    },
    //追期数限制
    handleChase: function () {
      var num = this.continue_periods;
      if (typeof (num) == "string") {
        num = num.replace(/\D+/g, '');
      }
      if (num && num < 1) {
        num = 1;
      }
      if (num && num > 10) {
        num = 10;
      }
      this.continue_periods = num;
    },
    // 点击玩法提示显示相应的玩法提示内容
    handleShowRule: function () {
      // $(".mask.menu").trigger("click");
      //     $(".mask.help").css({ display: "block" });
      //     $("body").css("overflow", "hidden");
      var _this = this;
      _this.menu.map(function (item) {
        item.twoType.map(function (items) {
          if (items.Ename == _this.preventType) {
            _this.game_tips = items['game_tips']
            _this.win_explain = items['win_explain']
            _this.win_example = items['win_example']
          }
        })
      });
      // mui('#topPopover').popover('toggle');
      //       mui('#topPopover_tips').popover('toggle');
      this.showMenu();
      this.closeMenu();
    },
    // 投注选择界面点击提交执行
    handleSubmit: function () {
      this.singleCoins = "";
      this.$emit('isShowMaskWrapper', true);
      this.isHandleSubmitClick = true;
      if (this.bets && !this.bet_forbid) {
        // if(!this.isLogin) {
        // this.get_userState();
        // }

        if (localStorage.userName == undefined) {
          localStorage.loginTo = this.$route.path;
          this.turnUrl("login");
        } else if (localStorage.userName && this.pack_coin == 0) {
          mui.toast('金额为零')
          // if($(".popup").css("display") == "none") {
          //  $(".popup").css({
          //    display: "block"
          //  }).addClass('ani')
          // }
          // $(".mask.menu").css({
          //  display: "block"
          // });
          // $(".menu_list").css({
          //  display: "none"
          // });
          // this.get_userState();
          this.$emit('isShowMaskWrapper', false)
          this.isHandleSubmitClick = false;

        } else {
          $(".mask.setting").css({
            display: "block"
          });
          this.$emit('isShowMaskWrapper', false)
          this.isHandleSubmitClick = false;
        }
      } else {
        this.$emit('isShowMaskWrapper', false);
        this.isHandleSubmitClick = false;
      }

    },
    turnUrl: function (urlName) {
      this.$router.push({
        name: urlName
      });
      // if (localStorage.app_flag == undefined) {
      //   this.$router.push({ path: url });
      // } else {
      //   mui.openWindow({
      //     url: url,
      //     id: 'url',
      //     styles: {
      //       top: base.getStatusbarHeight() + 'px',
      //       bottom: 0
      //     },
      //     show: {
      //       autoShow: true, //页面loaded事件发生后自动显示，默认为true
      //       aniShow: 'pop-in', //页面显示动画，默认为”slide-in-right“；
      //       duration: '200' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
      //     },
      //     createNew: true
      //   })
      // }
    },
    // 改变返奖率
    changeRebate: function () {
      var _this = this,
        id3 = _this.present_playId,
        maxList, minList;
      this.rebate = (this.rebateNum * (this.maxReward / 100)).toFixed(3)
      if (id3 == 61 || id3 == 71) {
        _this.orderOdds = "";

        maxList = _this.maxPrize.split("|");
        minList = _this.minPrize.split("|");
        for (var i = 0; i < _this.special_indexList.length; i++) {
          var index = _this.special_indexList[i];
          _this.orderOdds += (maxList[index] - ((maxList[index] - minList[index]) / _this.maxReward * _this.rebate)).toFixed(3);
          if (i !== _this.special_indexList.length - 1)
            _this.orderOdds += "|";
        }
        _this.setSpecialSum();
        return
      }

      this.orderOdds = (this.maxPrize - ((this.maxPrize - this.minPrize) / this.maxReward * this.rebate)).toFixed(3);
    },
    handleCoins: function () {
      var num = this.singleCoins;
      if (typeof (num) == "string") {
        num = num.trim().replace(/\D+/g, '')
      }

      if (num && num < 1) {
        num = 1;
      }
      this.singleCoins = num;
      if (this.present_playId == 61 || this.present_playId == 71) {
        this.setSpecialSum();
      }
    },
    //订单设置界面取消按钮执行
    handleCancel: function () {
      var _this = this,
        numList, oddList, id3 = _this.present_playId,
        typeName = _this.preventType;
      if (id3 == 61 || id3 == 71) {
        _this.rebateNum = 0;
        _this.rebate = 0;
        _this.setSpecialSum();
      } else {
        //重置进度条
        _this.maxPrize = _this.play_area_manner[typeName].maxPrize;
        _this.minPrize = _this.play_area_manner[typeName].minPrize;
        _this.maxReward = _this.play_area_manner[typeName].maxReward;
        _this.orderOdds = _this.play_area_manner[typeName].maxPrize;
        _this.rebateNum = 0;
        _this.rebate = 0;
      }

      $(".mask.setting").css({
        display: "none"
      });
    },
    //订单设置界面确定按钮
    handleConfirm: function () {
      var _this = this,
        numList, oddList,
        id3 = _this.present_playId,
        typeName = _this.preventType;
      var countSum = _this.singleCoins,
        contrastList = _this.singleMaxMinList,
        tipsStr = "(单注)";
      if (id3 != 61 && id3 != 71) {
        countSum = countSum * _this.bets;
        tipsStr = "(总额)"
      }
      if (contrastList) {
        if (parseInt(countSum) < parseInt(contrastList[0])) {
          mui.toast('单笔投注' + tipsStr + '不可小于' + contrastList[0], { duration: 'long', type: 'div' })
          return 1;
        } else if (parseInt(countSum) > parseInt(contrastList[1])) {
          mui.toast('单笔投注' + tipsStr + '不可超过' + contrastList[1], { duration: 'long', type: 'div' })
          return 1;
        }
      }
      if (_this.recentBetInfo.betsCount && _this.singleCoins > 0) {
        if (_this.BetsList.length != 100) {
          if (id3 == 61 || id3 == 71) {
            numList = _this.recentBetInfo.betsClause[0].split(",");
            oddList = _this.orderOdds.split("|");
            for (var i = 0, len = numList.length; i < len; i++) {
              _this.BetsList.unshift({
                type: _this.recentBetInfo.type,
                betsCount: 1,
                betsClause: numList[i],
                betsCoins: _this.singleCoins * 1,
                id3: _this.play_area_manner[_this.preventType].id3,
                id2: _this.play_area_manner[_this.preventType].id2,
                id1: _this.play_area_manner[_this.preventType].id1,
                odds: oddList[i],
                banner: _this.preventBanner,
                singleCoin: _this.singleCoins,
                rebate: _this.rebate,
                code3: _this.present_playId,

              });
            }
          } else {
            _this.BetsList.unshift({
              type: _this.recentBetInfo.type,
              betsCount: _this.bets,
              betsClause: _this.recentBetInfo.betsClause.join("|"),
              betsCoins: _this.singleCoins * _this.bets,
              id3: _this.play_area_manner[_this.preventType].id3,
              id2: _this.play_area_manner[_this.preventType].id2,
              id1: _this.play_area_manner[_this.preventType].id1,
              odds: _this.orderOdds,
              banner: _this.preventBanner,
              singleCoin: _this.singleCoins,
              rebate: _this.rebate,
              code3: _this.present_playId,
            });
          }
        }
        //  else {
        //   mui.toast("已达投注长度上限，请先投注")
        // }
        //重置进度条
        _this.maxPrize = _this.play_area_manner[typeName].maxPrize;
        _this.minPrize = _this.play_area_manner[typeName].minPrize;
        _this.maxReward = _this.play_area_manner[typeName].maxReward;
        _this.orderOdds = _this.play_area_manner[typeName].maxPrize;
        _this.rebateNum = 0;
        _this.rebate = 0;

        $(".mask.setting").css({
          display: "none"
        });
        $(".pay").css({
          display: "none"
        });
        // $("#mainArea").css({
        //  display: "none"
        // })
        _this.handleBetsCoins();
        _this.clearSelOptions();
        //存储localstorage
        // localStorage.sscBetsList = JSON.stringify(_this.BetsList);
        _this.stopBanner = "";
        _this.singleCoins = "";
        // $("#header").hide();
        _this.handleBets();

      } else {
        mui.toast("请投注");
        return 1;
      }
    },
    // 清除所有订单
    handleClearAll: function () {
      var _this = this;
      this.BetsList = [];
      _this.totalBets = 0;
      _this.totalCoins = 0;
      _this.tempCoins = 0;
      _this.handleBetsCoins();
    },
    //特殊号单注处理
    setSpecialSum: function (list) {
      var _this = this,
        nameList = ["豹子", "顺子", "对子"],
        indexList = [],
        orderOddsList = _this.maxPrize.split("|");

      if (list) {
        _this.special_orderOddsList = [];
        _this.orderOdds = "";
        list = list.split(",");
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < list.length; j++) {
            if (list[j] == nameList[i]) {
              indexList.push(i);
              _this.special_orderOddsList.push(orderOddsList[i]);
              _this.orderOdds += orderOddsList[i] + "|";
              break;
            }
          }
        }
        _this.special_indexList = indexList;
        _this.orderOdds = _this.orderOdds.substring(0, _this.orderOdds.length - 1);
        if (indexList.length == 1) {
          _this.special_sum = parseFloat(_this.singleCoins * _this.special_orderOddsList[0]).toFixed(2);
          return
        }
      } else {
        _this.special_orderOddsList = _this.orderOdds.split("|");
      }
      _this.special_orderOddsList.sort(function (a, b) {
        return a - b
      });
      if (_this.special_indexList.length == 1) {
        _this.special_sum = parseFloat(_this.singleCoins * _this.special_orderOddsList[0]).toFixed(2);
        return
      }
      _this.special_sum = parseFloat(_this.singleCoins * _this.special_orderOddsList[0]).toFixed(2) + "~" + parseFloat(_this.singleCoins * _this.special_orderOddsList[_this.special_orderOddsList.length - 1]).toFixed(2);
    },
    //管理玩法的函数    传递一个玩法名称激活play_area_manner中对应的值,选择某一玩法时初始化某些数据
    handlePlayType: function (typeName) {
      var _this = this,
        nameList = ["myriabit", "kilobit", "hundreds", "decade", "unit"];
      _this.isChangePlayId = true;
      _this.switchoverType = false;
      //            if(index){_this.switchoverType=}
      // if(!$(".record").is(':visible')) {
      //  $(".record").hide();
      //  $(".ico").toggleClass('active');
      // }
      for (var key in _this.play_area_manner) {
        _this.play_area_manner[key].isSel = false;
      }
      _this.preventType = typeName;
      _this.play_area_manner[typeName].isSel = true;
      _this.title = _this.play_area_manner[typeName].title;
      _this.maxPrize = _this.play_area_manner[typeName].maxPrize;
      _this.minPrize = _this.play_area_manner[typeName].minPrize;
      _this.maxReward = _this.play_area_manner[typeName].maxReward;
      _this.orderOdds = _this.play_area_manner[typeName].maxPrize;
      _this.rebateNum = 0;
      _this.rebate = 0;
      _this.planTypeId = _this.play_area_manner[typeName].id3;
      _this.isPlan = _this.play_area_manner[typeName].is_plan;
      _this.singleMaxMinList = [_this.play_area_manner[typeName]['minAmount'], _this.play_area_manner[typeName]['maxAmount']];
      _this.gamePlanPageIndex = 1;
      _this.showGamePlan = 0;
      _this.gamePlanList = [];
      _this.present_playId = _this.play_area_manner[typeName].singId;
      if (_this.present_playId == 61 || _this.present_playId == 71) {
        _this.setSpecialSum();
      }
      if (this.play_area_manner[typeName].right != undefined) {
        _this.right = this.play_area_manner[typeName].right;
      }
      if (this.play_area_manner[typeName].top != undefined) {
        _this.top = this.play_area_manner[typeName].top;
      }
      if (this.play_area_manner[typeName].right_title != undefined) {
        _this.right_title = this.play_area_manner[typeName].right_title;
      }
      if (this.play_area_manner[typeName].right_title_two != undefined) {
        _this.right_title_two = this.play_area_manner[typeName].right_title_two;
      }
      if (_this.play_area_manner[typeName].number) {
        _this.numberArr = [];
        //              _this.comLength = _this.play_area_manner[typeName].number.length;
        _this.play_area_manner[typeName].number.map(function (item) {
          _this.numberArr.push({
            'num': item,
            isSel: false
          })
        })
      } else {
        _this.numberArr = [];
      }

      nameList.map(function (item) {
        _this.initial_value(typeName, item);
      });

      // 显示要显示的投注区域
      _this.handleAreaShow(_this.play_area_manner[typeName].act_area);
      // 初始化数据
      _this.clearSelOptions();
      //          if(_this.switchoverType){
      //            _this.switchoverType=false;
      //          }
      setTimeout(function () {
        _this.isChangePlayId = false;
      }, 100);
      //请求计划
      if (_this.preventBanner) {
        //_this.getPlanData();
      }
    },
    //初始化numberArr,myriabit,kilobit,hundreds,decade,unit区域数组选值
    initial_value: function (typeName, items) {
      var _this = this,
        arrList;
      _this[items] = [];
      //判断为废的
      if (_this.play_area_manner[typeName][items] != undefined) {
        var arrList = _this.play_area_manner[typeName][items];
      } else {
        arrList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
      arrList.map(function (item) {
        _this[items].push({
          'num': item,
          isSel: false
        })
      })
    },
    // 设置bet_area_manner,投注区域要显示的模块
    handleAreaShow: function (arr) {
      var _this = this;
      // 重置
      $(".btn-random span").text("机选")
      for (var key in _this.bet_area_manner) {
        _this.bet_area_manner[key] = false;
      }
      arr.map(function (item) {
        _this.bet_area_manner[item] = true;
      })
    },
    //显示大球(触摸事件)
    showBigSelectBall(event, item) {
      //   if (event && item.isSel != true){
      //     event=event.currentTarget;
      //     $(event).css({
      //       background: 'url("./static/images/ball/anjian_hong.png")',
      //       backgroundSize: "contain",
      //       backgroundRepeat: "no-repeat",

      //       color: "#fff",
      //       border: "none",
      //       width: "4rem",
      //       height: "6rem",
      //       top: "-3.7rem",
      //       left: "1.3rem",
      //       lineHeight: "4rem",
      //       boxShadow: "none",
      //       fontSize: "1.5rem",
      //       paddingRight: ".2rem",
      //     });
      //   }

      this.handleAddClass(item);
    },
    //隐藏大球(离开事件)
    hideBigSelectBall(event) {
      if (event) {
        event = event.currentTarget;
      }
      if (event) {
        $(event).attr('style', '');
      }
      // setTimeout(function(){
      //   if(event){
      //     $(event)[0].style = "";
      //   }
      // },300)

    },
    // 点击元素时给元素加上选中的类  可能还要在这里调用自动计算注数的方法
    handleAddClass: function (item, index) {

      var _this = this;
      if (_this.present_playId == 114 || _this.present_playId == 115 || _this.present_playId == 116 || _this.present_playId == 117 || _this.present_playId == 77) {
        _this.numberArr.map(function (item) {
          item.isSel = false;
        })
        item.isSel = !item.isSel;
      } else if (_this.present_playId == 107) {
        if (item.numArr && item.numArr.length !== 0) {
          for (var i = 0; i < item.numArr.length; i++) {
            if (item.numArr[i] == index) {
              item.numArr.splice(i, 1);
            } else if (i == item.numArr.length - 1) {
              item.numArr.push(index);
              break;
            }
          }

        } else {
          this.$set(item, "numArr", [index])
          // Vue.set(item, "numArr", [index]);
          //            item.numArr=[index];
        }
        if (item.numArr.length == 0) {
          item.isSel = false;
          //            item.isSel0 = false;
          this.$set(item, "isSel0", false);
        } else if (item.numArr.length == 1) {
          if (item.numArr[0] == 0) {
            item.isSel = true;
            //              item.isSel0 = false;
            this.$set(item, "isSel0", false);
          } else {
            item.isSel = false;
            //              item.isSel0 = true;
            this.$set(item, "isSel0", true);
          }
        } else {
          item.isSel = true;
          //            item.isSel0 = true;
          this.$set(item, "isSel0", true);
        }
        //           _this.count_betNumber();

      } else {
        item.isSel = !item.isSel;
      }

    },
    // 清楚选中数据项
    clearSelOptions: function () {
      var _this = this, list = ['myriabit', 'kilobit', 'hundreds', 'decade', "unit", "numberArr"];
      for (var i in list) {
        if (_this[list[i]]) {
          _this[list[i]].map(function (item) {
            item.isSel = false;
            if (item.isSel0) {
              item.isSel0 = false;
            } else if (item.numArr) {
              item.numArr = [];
            }
          })
        }
      }
      // _this.myriabit.map(function(item) {
      //  item.isSel = false;
      // })
      // _this.kilobit.map(function(item) {
      //  item.isSel = false;
      // })
      // _this.hundreds.map(function(item) {
      //  item.isSel = false;
      // })
      // _this.decade.map(function(item) {
      //  item.isSel = false;
      // })
      // _this.unit.map(function(item) {
      //  item.isSel = false;
      // })
      // _this.numberArr.map(function(item) {
      //  item.isSel = false;
      //  item.isSel0 = false;
      //  if(item.numArr) {
      //    item.numArr = [];
      //  }

      // })
      //          _this.comLength = 0;
      _this.bets = 0;
      _this.rebateNum = 0;
      _this.rebate = 0;
      //          $(".btn-random span").text("机选")
    },

    //机选---清空
    random_or_clear: function (event) {
      var _this = this;
      event = event.currentTarget;
      if (_this.isDelay) {
        return
      }
      _this.isDelay = true;
      if ($(event).is('.clearAllBtn')) {
        _this.clearSelOptions();
        setTimeout(function () {
          _this.isDelay = false;
        }, 200)
      } else {
        _this.clearSelOptions();
        _this.randomData();
        setTimeout(function () {
          _this.isDelay = false;
        }, 200)
      }
    },
    randomData: function () {
      var _this = this,
        listName = ["myriabit", "kilobit", "hundreds", "decade", "unit", "numberArr"],
        outIndex = parseInt(Math.random() * 5),
        inIndex = parseInt(Math.random() * 10),
        outIndexList = [],
        id3 = _this.present_playId;
      switch (id3) {
        case 49: //定位胆
          _this[listName[outIndex]].map(function (item, index) {
            if (index == inIndex) {
              item.isSel = true;
            }
          });
          break;
        case 50: //五星
          for (var i = 0; i < 5; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 51: //四星
          for (var i = 1; i < 5; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 52: //后三-直选复式
          for (var i = 2; i < 5; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 53: //后三-直选和值
        case 54: //后三-直选跨度
        case 60: //后三-和值尾数
        case 61: //后三-特殊号
        case 63: //后三-直选和值
        case 64: //后三-直选跨度
        case 70: //前三-和值尾数
        case 71: //前三-特殊号
        case 73: //前二-直选和值
        case 74: //前二-直选跨度
        case 76: //前二-组选和值
        case 77: //前二-组选包胆
        case 78: //不定位-前三一码
        case 80: //不定位-后三一码
        case 82: //不定位-前四一码
        case 84: //不定位-后四一码
        case 86: //不定位-五星一码
        case 94: //任选二-直选和值
        case 96: //任选二-组选和值
        case 98: //任选三-直选和值
        case 101: //任选三-组选和值
        case 112: //任选三-组三和值
        case 113: //任选三-组六和值
        case 108: //后三-组三和值
        case 109: //后三-组六和值
        case 110: //前三-组三和值
        case 111: //前三-组六和值
        case 114: //后三-组三包胆
        case 115: //后三-组六包胆
        case 116: //前三-组三包胆
        case 117: //前三-组六包胆

          inIndex = parseInt(Math.random() * _this.numberArr.length),
            _this.numberArr.map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          break;
        case 56: //后三-组三复式
        case 66: //前三-组三复式
        case 75: //前二-组选复式
        case 79: //不定位-前三二码
        case 81: //不定位-后三二码
        case 83: //不定位-前四二码
        case 85: //不定位-后四二码
        case 87: //不定位-五星二码
        case 95: //任选二-组选复式
        case 99: //任选三-组三复式
          var rxOutIndex, isHas = false,
            len = _this.numberArr.length;
          for (var j = 0; j < 2; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * len);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndexList[i]) {
                item.isSel = true;
              }
            });
          }
          break;
        case 57: //后三-组六复式
        case 67: //前三-组六复式
        case 88: //不定位-五星三码
        case 100: //任选三-组六复式
          var rxOutIndex, isHas = false,
            len = _this.numberArr.length;
          for (var j = 0; j < 3; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * len);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndexList[i]) {
                item.isSel = true;
              }
            });
          }
          break;
        case 62: //前三-直选复式
          for (var i = 0; i < 3; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 72: //前二-直选复式
          for (var i = 0; i < 2; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 89: //大小单双-前二大小单双
          for (var i = 0; i < 2; i++) {
            inIndex = parseInt(Math.random() * 4);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 90: //大小单双-后二大小单双
          for (var i = 3; i < 5; i++) {
            inIndex = parseInt(Math.random() * 4);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 91: //大小单双-前三大小单双
          for (var i = 0; i < 3; i++) {
            inIndex = parseInt(Math.random() * 4);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 92: //大小单双-后三大小单双
          for (var i = 2; i < 5; i++) {
            inIndex = parseInt(Math.random() * 4);
            _this[listName[i]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 93: //任选二-直选复式
          var rxOutIndex, isHas = false;
          for (var j = 0; j < 2; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * 5);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[outIndexList[i]]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 97: //任选三-直选复式
          var rxOutIndex, isHas = false;
          for (var j = 0; j < 3; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * 5);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[outIndexList[i]]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 102: //任选四-直选复式
          var rxOutIndex, isHas = false;
          for (var j = 0; j < 4; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * 5);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            inIndex = parseInt(Math.random() * 10);
            _this[listName[outIndexList[i]]].map(function (item, index) {
              if (index == inIndex) {
                item.isSel = true;
              }
            });
          }
          break;
        case 103: //任选四-组选24
          var rxOutIndex, isHas = false,
            len = _this.numberArr.length;
          for (var j = 0; j < 4; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * len);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndexList[i]) {
                item.isSel = true;
              }
            });
          }
          break;
        case 104: //任选四-组选12

          var rxOutIndex, isHas = false,
            len = 10;
          outIndex = parseInt(Math.random() * 10);
          for (var j = 0; j < 2; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * len);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
              if (rxOutIndex == outIndex) {
                isHas = true
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          _this.myriabit.map(function (item, index) {
            if (index == outIndex) {
              item.isSel = true;
            }
          });
          for (var i = 0; i < outIndexList.length; i++) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndexList[i]) {
                item.isSel = true;
              }
            });
          }
          break;
        case 105: //任选四-组选6
          var rxOutIndex, isHas = false,
            len = _this.numberArr.length;
          outIndex = parseInt(Math.random() * 10);
          for (var j = 0; j < 2; j++) {
            do {
              isHas = false;
              rxOutIndex = parseInt(Math.random() * len);
              for (var i = 0; i < outIndexList.length; i++) {
                if (outIndexList[i] == rxOutIndex) {
                  isHas = true
                }
              }
            } while (isHas)
            outIndexList.push(rxOutIndex)
          }
          for (var i = 0; i < outIndexList.length; i++) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndexList[i]) {
                item.isSel = true;
              }
            });
          }
          break;
        case 106: //任县四-组选4
          var rxOutIndex;
          rxOutIndex = parseInt(Math.random() * 10);
          outIndex = parseInt(Math.random() * 10);
          do {
            rxOutIndex = parseInt(Math.random() * 10);
          } while (rxOutIndex == outIndex)
          _this.myriabit.map(function (item, index) {
            if (index == outIndex) {
              item.isSel = true;
            }
          });
          _this.numberArr.map(function (item, index) {
            if (index == rxOutIndex) {
              item.isSel = true;
            }
          });
          break;
        case 107: //龙虎
          var len = _this.numberArr.length;
          outIndex = parseInt(Math.random() * len);
          inIndex = parseInt(Math.random() * 2);
          if (inIndex == 0) {
            _this.numberArr.map(function (item, index) {
              if (index == outIndex) {
                item.isSel = true;
                _this.$set(item, "numArr", [inIndex]);
              }
            });
          } else {
            _this.numberArr.map(function (item, index) {
              if (index == outIndex) {
                item.isSel0 = true;
                _this.$set(item, "numArr", [inIndex]);
              }
            });
          }
          break;

      }
    },
    //全大小单双清--按钮
    multifunctional_btnClick: function (type, index) {
      var listName = ["myriabit", "kilobit", "hundreds", "decade", "unit", "numberArr"],
        _this = this,
        len = _this[listName[type]].length / 2;
      switch (index) {
        case 0: //全
          _this[listName[type]].map(function (item) {
            item.isSel = true;
          });
          break;
        case 1: //大
          _this[listName[type]].map(function (item, index) {
            if (index >= len) {
              item.isSel = true;
            } else {
              item.isSel = false;
            }
          });
          break;
        case 2: //小
          _this[listName[type]].map(function (item, index) {
            if (index < len) {
              item.isSel = true;
            } else {
              item.isSel = false;
            }
          });
          break;
        case 3: //单
          _this[listName[type]].map(function (item, index) {
            if (item.num % 2 != 0) {
              item.isSel = true;
            } else {
              item.isSel = false;
            }
          });
          break;
        case 4: //双
          _this[listName[type]].map(function (item, index) {
            if (item.num % 2 == 0) {
              item.isSel = true;
            } else {
              item.isSel = false;
            }
          });
          break;
        case 5: //清
          _this[listName[type]].map(function (item) {
            item.isSel = false;
          });
          break;
      }
    },
    //
    selectInput: function (event) {
      event = event.currentTarget;
      if ($(event).find("input").is(':checked')) {
        $(event).find("input").prop("checked", false);
      } else {
        $(event).find("input").prop("checked", true);
      }
      this.positionClk();
    },
    //底下位数checkbox的点击事件
    positionClk: function () {
      var count = 0,
        _this = this;
      var str = "",
        nameList = ["万位", "千位", "百位", "十位", "个位"];

      if (_this.recentBetInfo.betsClause) {
        _this.position_list.map(function (item, index) {
          if (item == 1) {
            str += nameList[index] + ",";
          }
        });
        str = "(" + str.substring(0, str.length - 1) + ")";
        _this.recentBetInfo.betsClause[0] = _this.recentBetInfo.betsClause[0].replace(str, "");
      }

      $("#mainArea .labelList input[type='checkbox']").map(function (item) {
        if ($($("#mainArea .labelList input[type='checkbox']")[item]).is(':checked')) {
          count++;
          _this.position_list[item] = 1;
        } else {
          _this.position_list[item] = 0;
        }
      })
      if (_this.recentBetInfo.betsClause) {
        str = "";
        _this.position_list.map(function (item, index) {
          if (item == 1) {
            str += nameList[index] + ",";
          }
        });
        str = "(" + str.substring(0, str.length - 1) + ")";
        _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];
      }
      _this.position_count = count;
      if (count < _this.position_maxnum || _this.isNoSel) {
        _this.bets = 0;
      } else {
        _this.count_betNumber();
        _this.bets = countUtils.getBcGroupMix_cqssc(count, _this.position_maxnum) * _this.position_bets;
        //          _this.bets=_this.position_bets;
      }
      //        var _this=this;
      //        event=event.currentTarget;
      //        $(event).find("input").prop("checked","checked");
    },

    // 将投注信息记录到当前投注信息记录对象中  传递一个用户选择项的数组,一维字符串数组
    handleRecodeInfo: function (seloptArr) {
      var _this = this;
      _this.recentBetInfo = {};
      _this.recentBetInfo.type = _this.play_area_manner[_this.preventType]["title"];
      //          _this.recentBetInfo.betsCount = _this.bets;
      _this.recentBetInfo.betsClause = [];
      seloptArr.map(function (item) {
        _this.recentBetInfo.betsClause.push(item);
      })
      //          _this.recentBetInfo.betsCoins = _this.bets * _this.singleCoins
    },

    // 统计某一个选择区中的选中项的值 传递选择区的管理对象
    handleAreaSelNum: function (opt) {
      var tempArr = [];
      opt.map(function (item) {
        if (item.isSel) {
          tempArr.push(item.num);
        }
      })
      return tempArr;
    },

    //机选按钮--根据参数决定机选注数
    getAppointBets: function (index) {
      var _this = this,
        id3 = _this.present_playId;
      if (_this.BetsList.length == 100) {
        mui.toast("已达投注长度上限，请先投注")
        return
      } else if (_this.BetsList.length > 95) {
        index = 100 - _this.BetsList.length
      }
      for (var i = 0; i < index; i++) {
        _this.clearSelOptions();
        _this.randomData();
        _this.count_betNumber();
        _this.BetsList.unshift({
          type: _this.recentBetInfo.type,
          betsCount: _this.recentBetInfo.betsCount,
          betsClause: _this.recentBetInfo.betsClause.join("|"),
          betsCoins: _this.singleCoins * _this.recentBetInfo.betsCount,
          id3: _this.play_area_manner[_this.preventType].id3,
          id2: _this.play_area_manner[_this.preventType].id2,
          id1: _this.play_area_manner[_this.preventType].id1,
          odds: _this.orderOdds,
          banner: _this.preventBanner,
          singleCoin: _this.singleCoins,
          rebate: _this.rebate,
          code3: _this.present_playId
        });
        _this.handleBetsCoins();
        _this.clearSelOptions();
      }
      // localStorage.sscBetsList = JSON.stringify(_this.BetsList);
    },

    // 统计对象中选中的元素个数
    totalCountsHandler: function (opt) {
      var count = 0;
      opt.map(function (item) {
        if (item.isSel) {
          count++;
        }
      });
      return count;
    },
    //计算数目
    //参数list，依次对应listName,0--不需，1--需要，index为通过计算注数的条件,
    //num为是否进行位数限制(即:严格所选数位置且可为空),0--0(不限制),1--5(5位)
    count_TotalLength: function (list, index, type, num) {
      var listName = ["myriabit", "kilobit", "hundreds", "decade", "unit", "numberArr"],
        rList = [0, 0, 0, 0, 0, 0],
        strList = ["", "", "", "", "", ""],
        saveList = [],
        count = 0,
        _this = this;
      for (var i = 0; i < 6; i++) {
        if (list[i] === 1) {
          rList[i] = _this.totalCountsHandler(_this[listName[i]]);
          if (rList[i]) {
            count++;
            strList[i] = _this.handleAreaSelNum(_this[listName[i]]);
          }
        }
      }
      _this.bets = 0;
      if (type == 1 && strList[5] < index) {
        _this.isNoSel = true;
        return -1
      }
      if (type == 0 && count < index) {
        _this.isNoSel = true;
        return -1;
      } else {
        _this.isNoSel = false;
        if (num == 0) {
          for (var i = 0; i < 6; i++) {
            if (strList[i]) {
              saveList.push(strList[i].join(','));
            }
          }
          _this.handleRecodeInfo(saveList);
          if (_this.present_playId == 61 || _this.present_playId == 71) {
            _this.setSpecialSum(saveList[0])
          }
        } else if (num == 1) {
          for (var i = 0; i < 5; i++) {
            if (strList[i]) {
              saveList.push(strList[i].join(','));
            } else {
              saveList.push("")
            }
          }
          _this.handleRecodeInfo(saveList);
        }

        return rList;
      }

    },
    //计算注数
    count_betNumber: function () {
      var _this = this,
        id3 = _this.present_playId,
        count,
        rList = [],
        parameter = {},
        // 记录每一个选择区中的数值
        comLen = 0,
        myriabitLen = 0,
        kilobitLen = 0,
        hundredLen = 0,
        decadeLen = 0,
        unitLen = 0,
        // 记录每一个选择区中的选择项
        myriabitSelOpt = [],
        kilobitSelOpt = [],
        hundredSelOpt = [],
        decadeSelOpt = [],
        unitSelOpt = [],
        numArr = [];
      switch (id3) {

        case 49: //定位胆
          rList = _this.count_TotalLength([1, 1, 1, 1, 1, 0], 1, 0, 1);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item) {
              _this.bets += item;
            })
          }
          break;
        case 50: //五星
          rList = _this.count_TotalLength([1, 1, 1, 1, 1, 0], 5, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;
        case 51: //四星
          rList = _this.count_TotalLength([0, 1, 1, 1, 1, 0], 4, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;
        //后三
        case 52: //后三-直选复式
        case 92: //大小单双-后三
          rList = _this.count_TotalLength([0, 0, 1, 1, 1, 0], 3, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;

        case 53: //后三-直选和值
        case 63: //前三-直选和值
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeSum(3, 10, item.num);
              }
            })
          }
          break;
        case 54: //后三-直选跨度
        case 64: //前三-直选跨度
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getTwoThreeSpacing(3, 10, item.num);
              }
            })
          }
          break;
        case 56: //后三-组三复式
        case 66: //前三-组三复式
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getThreeGrounpDirect(rList[rList.length - 1], 2);
          }
          break;

        case 57: //后三-组六复式
        case 67: //前三-组六复式
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 3, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getSixGroupDirect(rList[rList.length - 1], 3);
          }
          break;
        case 60: //后三-和值尾数
        case 61: //后三-特殊号
        case 70: //前三-和值尾数
        case 71: //前三-特殊号
        //不定位
        case 78: //不定位-前三一码
        case 80: //不定位-后三一码
        case 82: //不定位-前四一码
        case 84: //不定位-后四一码
        case 86: //不定位-五星一码
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = rList[rList.length - 1];
          }
          break;

        //前三
        case 62: //前三-直选复式
        case 91: //大小单双-前三
          rList = _this.count_TotalLength([1, 1, 1, 0, 0, 0], 3, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;

        //前二
        case 72: //前二-直选复式
        case 89: //大小单双-前二
          rList = _this.count_TotalLength([1, 1, 0, 0, 0, 0], 2, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;
        case 73: //前二-直选和值
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeSum(2, 10, item.num);
              }
            })
          }
          break;
        case 74: //前二-直选跨度
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getTwoThreeSpacing(2, 10, item.num);
              }
            })
          }
          break;
        case 75: //前二-组选复式
        //不定位
        case 79: //不定位-前三二码
        case 81: //不定位-后三二码
        case 83: //不定位-前四二码
        case 85: //不定位-后四二码
        case 87: //不定位-五星二码
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getBcGroupMix_cqssc(rList[5], 2);
          }
          break;
        case 76: //前二-组选和值
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(2, 10, item.num, 3);
              }
            })
          }
          break;
        case 77: //前二-组选包胆
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = 9;
          }
          break;

        //***********************************************************************************************
        //不定位
        case 88: //不定位-五星三码
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getBcGroupMix_cqssc(rList[5], 3);
          }
          break;

        //大小单双
        case 90: //大小单双-后二
          rList = _this.count_TotalLength([0, 0, 0, 1, 1, 0], 2, 0, 0);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item) {
                parameter[index] = item;
              }
            })
            _this.bets = countUtils.getDirectCount(parameter);
          }
          break;

        //任选二
        case 93: //任选二-直选复式
          rList = _this.count_TotalLength([1, 1, 1, 1, 1, 0], 2, 0, 1);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item == 0) {
                rList.splice(index, 1);
                index--;
              }
            })
            _this.bets = countUtils.calculateNum([2], rList);
            //              var _this=this;
            //                  _this.recentBetInfo={};
            //                  _this.recentBetInfo.type = _this.play_area_manner[_this.preventType]["title"];
            //                  _this.recentBetInfo.betsClause = [];
            //                  seloptArr.map(function (item) {
            //                      _this.recentBetInfo.betsClause.push(item);
            //                  })
          }
          break;
        case 94: //任选二-直选和值
          _this.bets = 0;
          if (_this.position_count < 2) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 2);
          }
          _this.position_maxnum = 2;
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeSum(2, 10, item.num);
              }
            })
          }
          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;
          break;
        case 95: //任选二-组选复式
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 2) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 2);
          }
          _this.position_maxnum = 2;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getBcGroupMix_cqssc(rList[5], 2);
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 96: //任选二-组选和值
          _this.bets = 0;
          if (_this.position_count < 2) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 2);
          }
          _this.position_maxnum = 2;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(2, 10, item.num, 3);
              }
            })
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;
          break;

        //任选3
        case 97: //任选三-直选复式
          rList = _this.count_TotalLength([1, 1, 1, 1, 1, 0], 3, 0, 1);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item == 0) {
                rList.splice(index, 1);
                index--;
              }
            })
            _this.bets = countUtils.calculateNum([3], rList);
          }
          break;
        case 98: //任选三-直选和值
          _this.bets = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeSum(3, 10, item.num);
              }
            })
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 99: //任选三-组三复式
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getThreeGrounpDirect(rList[rList.length - 1], 2);
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 100: //任选三-组六复式
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 3, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getSixGroupDirect(rList[rList.length - 1], 3);
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        //********************************
        case 101: //任选三-组选和值
          _this.bets = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(3, 10, item.num, 3);
              }
            })
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;

        //任选4
        case 102: //任选4-直选复式
          rList = _this.count_TotalLength([1, 1, 1, 1, 1, 0], 4, 0, 1);
          if (rList == -1) {
            return
          } else {
            rList.map(function (item, index) {
              if (item == 0) {
                rList.splice(index, 1);
                index--;
              }
            })
            _this.bets = countUtils.calculateNum([4], rList);
          }
          break;

        case 103: //任选4-组选24
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 4) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 4);
          }
          _this.position_maxnum = 4;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 4, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getBcGroupMix_cqssc(rList[5], 4);
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 104: //任选4-组选12
          //****************************************************

          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 4) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 4);
          }
          _this.position_maxnum = 4;

          var contrastList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

          _this.numberArr.map(function (item) {
            if (item.isSel) {
              comLen++
              contrastList[item.num] = 1;
            }
          })
          _this.myriabit.map(function (item) {
            if (item.isSel) {
              if (contrastList[item.num] == 1) {
                _this.bets += countUtils.getBcGroupMix_cqssc(comLen - 1, 2);;
              } else {
                _this.bets += countUtils.getBcGroupMix_cqssc(comLen, 2);
              }
            }
          })

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;
          _this.isNoSel = false;
          _this.recentBetInfo.type = _this.play_area_manner[_this.preventType]["title"];
          _this.recentBetInfo.betsCount = _this.bets;
          _this.recentBetInfo.betsClause = [];
          _this.myriabit.map(function (item) {
            if (item.isSel) {
              numArr.push(item.num);
            }
          })
          _this.recentBetInfo.betsClause.push(numArr.join(","));
          numArr = [];
          _this.numberArr.map(function (item) {
            if (item.isSel) {
              numArr.push(item.num);
            }
          })
          _this.recentBetInfo.betsClause.push(numArr.join(","));
          _this.recentBetInfo.betsCoins = _this.bets * _this.singleCoins

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];
          break;
        case 105: //组选6
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 4) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 4);
          }
          _this.position_maxnum = 4;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 2, 1, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = countUtils.getBcGroupMix_cqssc(rList[5], 2);
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;
          break;
        case 106: //组选4
          //******************************
          _this.bets = 0;
          comLen = 0;
          if (_this.position_count < 4) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 4);
          }
          _this.position_maxnum = 4;

          var contrastList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

          _this.numberArr.map(function (item) {
            if (item.isSel) {
              comLen++
              contrastList[item.num] = 1;
            }
          })
          _this.myriabit.map(function (item) {
            if (item.isSel) {
              if (contrastList[item.num] == 1) {
                _this.bets += comLen - 1;
              } else {
                _this.bets += comLen;
              }
            }
          })

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;
          _this.isNoSel = false;
          _this.recentBetInfo.type = _this.play_area_manner[_this.preventType]["title"];
          _this.recentBetInfo.betsCount = _this.bets;
          _this.recentBetInfo.betsClause = [];
          _this.myriabit.map(function (item) {
            if (item.isSel) {
              numArr.push(item.num);
            }
          })
          _this.recentBetInfo.betsClause.push(numArr.join(","));
          numArr = [];
          _this.numberArr.map(function (item) {
            if (item.isSel) {
              numArr.push(item.num);
            }
          })
          _this.recentBetInfo.betsClause.push(numArr.join(","));
          _this.recentBetInfo.betsCoins = _this.bets * _this.singleCoins

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];
          break;
        //龙虎
        case 107:
          _this.bets = 0;
          comLen = 0;
          _this.numberArr.map(function (item) {
            if (item.numArr && item.numArr.length != 0) {
              comLen += item.numArr.length;
            }
          })
          var nameList = ["万千", "万百", "万十", "万个", "千百", "千十", "千个", "百十", "百个", "十个"];
          _this.bets = comLen;
          _this.recentBetInfo.type = _this.play_area_manner[_this.preventType]["title"];
          _this.recentBetInfo.betsCount = _this.bets;
          _this.recentBetInfo.betsClause = [];
          _this.numberArr.map(function (item, index) {
            if (item.numArr && item.numArr.length != 0) {
              var str = "";
              for (var i = 0; i < item.numArr.length; i++) {
                str = nameList[index] + ":";
                if (item.numArr[i] == 0) {
                  str += nameList[index][0];
                } else {
                  str += nameList[index][1];
                }
                numArr.push(str);
              }

            }
          })
          _this.recentBetInfo.betsClause.push(numArr.join(","));
          _this.recentBetInfo.betsCoins = _this.bets * _this.singleCoins
          break;
          break;

        case 108: //后三-组三和值
        case 110: //前三-组三和值
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(3, 10, item.num, 0);
              }
            })
          }
          break;
        case 109: //后三-组六和值
        case 111: //前三-组六和值
          _this.bets = 0;
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(3, 10, item.num, 1);
              }
            })
          }
          break;

        case 112: //组三和值--任选三
          _this.bets = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(3, 10, item.num, 0);
              }
            })
          }
          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 113: //组六和值--任选三
          _this.bets = 0;
          if (_this.position_count < 3) {
            return
          } else {
            count = countUtils.getBcGroupMix_cqssc(_this.position_count, 3);
          }
          _this.position_maxnum = 3;

          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.numberArr.map(function (item) {
              if (item.isSel) {
                _this.bets += countUtils.getThreeGroupSum(3, 10, item.num, 1);
              }
            })
          }

          var str = "",
            nameList = ["万位", "千位", "百位", "十位", "个位"];
          _this.position_list.map(function (item, index) {
            if (item == 1) {
              str += nameList[index] + ",";
            }
          });
          str = "(" + str.substring(0, str.length - 1) + ")";
          _this.recentBetInfo.betsClause[0] = str + _this.recentBetInfo.betsClause[0];

          _this.position_bets = _this.bets;
          _this.bets = _this.bets * count;

          break;
        case 114: //后三-组三包胆
        case 116: //前三-组三包胆
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = 18;
          }

          break;
        case 115: //后三-组六包胆
        case 117: //前三-组六包胆
          rList = _this.count_TotalLength([0, 0, 0, 0, 0, 1], 1, 0, 0);
          if (rList == -1) {
            return
          } else {
            _this.bets = 36;
          }
          break;

        default:
          break;
      }
      _this.recentBetInfo.betsCount = _this.bets;
      _this.recentBetInfo.betsCoins = _this.bets * _this.singleCoins
    },
    // 统计合计和总注数信息
    handleBetsCoins: function () {
      var _this = this;
      _this.totalBets = 0;
      _this.totalCoins = 0;
      _this.BetsList.map(function (item) {
        _this.totalBets += item.betsCount;
        _this.totalCoins += parseInt(item.betsCoins);
      })
      _this.tempCoins = _this.totalCoins;
      _this.totalCoins = _this.totalCoins * _this.continue_periods;
    },
    // 点击图标删除该条投注
    handleClickDelete: function (index) {
      this.BetsList.splice(index, 1);
      this.handleBetsCoins();
      // localStorage.sscBetsList = JSON.stringify(this.BetsList);
    },
    // 投注testllll
    handleBets: function () {
      var _this = this,
        id3 = _this.present_playId,
        btnArray = ['取消', '确认'],
        stopBanner = '';

      //避免重复投注
      if (_this.isHandleBets) {
        return
      }

      if (!_this.totalCoins) {
        mui.toast('至少选择一注', {
          duration: 'long',
          type: 'div'
        })
        return
      }
      if (_this.pack_coin == 0) {
        mui.confirm('钱包金额为零，请先充值', '是否跳到充值', btnArray, function (e) {
          if (e.index == 1) {
            _this.$router.push({ name: "depositFile" });
          } else {
            return;
          }
        })
        return
      }
      if (!_this.preventBanner || _this.deadlineStr == "数据获取中...") {
        mui.toast('正在获取当前期数，请稍后。。。', {
          duration: 'long',
          type: 'div'
        })
        return
      }
      //          if(_this.stopBanner){
      //            return
      //      }
      //          else

      if (this.pack_coin < this.totalCoins) {
        mui.confirm('钱包金额不足，请先充值', '是否跳到充值', btnArray, function (e) {
          if (e.index == 1) {
            _this.$router.push({ name: "depositFile" });

          } else {
            return;
          }
        })
        return;
      } else {
        _this.isHandleBets = true;
        var str = JSON.parse(JSON.stringify(_this.BetsList));
        // _this.sh_betConfirm(1,str);
        this.betConfirm_tips = str;


        //              this.base.callAuthApi(obj);
      }
    },

    sh_betConfirm(num, str) {
      if (this.noSale) {
        mui.toast('该彩种未开售！');
        return
      }
      if (this.bets == 0) {
        mui.toast('请至少选择一注');
        return
      }
      if (num == 1) {
        $('.betConfirm').show();
        this.betConfirm_tips = str;
      } else {
        $('.betConfirm').hide();
      }
    },
    sh_afterBet(type) {
      $(".afterBet").hide();
      if (type == 2) {
        // this.togoRecord();
        this.$nextTick(function () {
          localStorage.chartId = 9;
          // if (localStorage.app_flag == undefined) {
          this.skip_newUrl(0, 'bettingRecord', '', "0");
        });
      }
    },
    btn_betSure() {
      this.sh_betConfirm(2, '');
      var isOk = this.handleConfirm();
      if (isOk && isOk == 1) {
        return
      }
      var _this = this,
        id3 = _this.present_playId,
        btnArray = ['取消', '确认'],
        stopBanner = '';
      var str = JSON.parse(JSON.stringify(_this.BetsList));
      str.map(function (item) {
        item.banner = _this.preventBanner;
        delete item.type; //删除属性
        if (item.code3 == 107) {
          item.betsClause = item.betsClause.replace(/[,]/g, "|");
        } else {
          item.betsClause = item.betsClause.replace(/[(]/g, "").replace(/[)]/g, "|");
        }
        delete item.code3; //删除属性

      });
      this.handleChase();
      var betObjedct = {
        BetsList: str,
        chase: this.continue_periods ? this.continue_periods : 1,
        is: this.after_no ? 1 : 0
      }
      var test = JSON.stringify(betObjedct)
      var obj = {
        type: 'post',
        data: {
          tzJson: (test)
        },
        url: '/authApi/digitalBet',
        success: function (data) {

          _this.isHandleBets = false;
          if (data.code == 200) {

            // $(".success.suc").css({
            //  display: "block"
            // })
            // $(".pay").css({
            //  display: "none"
            // })
            _this.sucmsg = data.msg;
            _this.pack_coin = parseFloat(_this.pack_coin - _this.totalCoins).toFixed(2);
            _this.user_state = "钱包:" + _this.pack_coin + _this.coinUnit + "元(可用)";
            _this.BetsList = [];

            // var html=`<div style="text-align:left;"><p>投注彩种：${_this.typeNameTitle}</p><p>投注玩法：${_this.title}</p><p>投注金额：${_this.totalCoins+_this.coinUnit}</p><p>投注期数：第${_this.preventBanner}期</p></div>`;
            // mui.confirm(html, data.msg, ['确定'], function(e) {
            //  if(e.index == 1) {

            //  } else {
            //    return;
            //  }
            // })
            $(".afterBet").show();
            $(".afterBet>.content").css({
              top: "50%",
              marginTop: -$(".afterBet>.content").height() / 2 + "px"
            });
            // localStorage.sscBetsList = "";
            // 重新获取用户账余额
            //                          var getUserInfo = {
            //                              type: "post",
            //                              url: "/authApi/AutoLoginGetUserinfoByRedis",
            //                              async: false,
            //                              data: {
            //                                  "username": localStorage.getItem("userName")
            //                              },
            //                              success: function success(data) {
            //                                  if (data.code == 200) {
            //                                      _this.pack_coin = (parseFloat(data.body.COIN) - parseFloat(data.body.FCION)).toFixed(2)
            //                                      _this.user_state = "钱包:" + _this.pack_coin + "元(可用)";
            //                                  }
            //                              }
            //                          }
            //                          this.base.callAuthApi(getUserInfo);

          } else if (data.code == 134) {
            if (data.body.nextBanner) {
              _this.preventBanner = data.body.nextBanner;
            }
            mui.confirm(data.msg, '提示', btnArray, function (e) {
              if (e.index == 1) {
                betObjedct.BetsList.map(function (item) {
                  if (item.banner != _this.preventBanner) {
                    item.banner = _this.preventBanner
                  }
                  delete item.type
                })
                _this.betsBanner = _this.preventBanner
                test = JSON.stringify(betObjedct)
                obj.data = {
                  tzJson: (test)
                }
                _this.base.callAuthApi(obj);
              } else {
                $('#header').show();
                $('#mainArea').show();
                return;
              }
            })
          } else {
            // $(".success.fail").css({
            //  display: "block"
            // })
            // _this.errmsg = data.msg
            var html = `<div style="text-align:left;">${data.msg}</div>`;
            mui.confirm(html, '投注失败', ['确定'], function (e) {
              if (e.index == 1) {

              } else {
                return;
              }
            });
            _this.BetsList=[];

          }
        }
      };

      if (_this.stopBanner) {
        mui.confirm('第' + _this.stopBanner + '期已停止投注,是否投注到最新一期', '提示', btnArray, function (e) {
          if (e.index == 1) {
            betObjedct.BetsList.map(function (item) {
              if (item.banner != _this.preventBanner) {
                item.banner = _this.preventBanner
              }
              delete item.type
            });
            _this.betsBanner = _this.preventBanner;
            test = JSON.stringify(betObjedct);
            obj.data = {
              tzJson: (test)
            };
            _this.stopBanner = "";
            _this.base.callAuthApi(obj);
          } else {
            $('#header').show();
            $('#mainArea').show();
            _this.isHandleBets = false;
            return;
          }
        })
      } else {
        _this.betsBanner = _this.preventBanner;
        _this.base.callAuthApi(obj);
      }
    },
    btn_betCancel() {
      this.sh_betConfirm(2, '');
      this.BetsList = [];
      this.isHandleBets = false;
    },
    // //显示menu（走势图...）
    // showMenu: function() {
    //  $(".mask.menu").slideToggle();
    //         $('.menu_list').css('display','block');
    //  $("body").css("overflow", "hidden");
    // },
    // //关闭menu（走势图...）
    // closeMenu: function() {
    //  if($(".popup").is(":hidden")) {
    //    //$("body").css("overflow", "auto");
    //    $(".mask.menu").fadeToggle();
    //  }
    // },
    showMenu: function () {
      if ($(".topPopover_wrap").is(":hidden")) {
        $("#topPopover").addClass("mui-active");
        $(".topPopover_wrap").show();
        $("#topPopover_tips").removeClass("mui-active");
      } else {
        $("#topPopover").removeClass("mui-active");
        $(".topPopover_wrap").hide();
      }

    },
    closeMenu: function (type) {
      if (type) {
        $("#topPopover").removeClass("mui-active");
        $("#topPopover_tips").removeClass("mui-active");
        $(".topPopover_wrap").hide();
        return
      }
      if ($(".topPopover_wrap").is(":hidden")) {
        $("#topPopover_tips").addClass("mui-active");
        $(".topPopover_wrap").show();
        $("#topPopover").removeClass("mui-active");
      } else {
        $("#topPopover_tips").removeClass("mui-active");
        $(".topPopover_wrap").hide();
      }
    },
    //跳转走势图
    togoChart: function () {
      // $("body").css({overflow: "auto"});
      // $(".mask.menu").css({display: "none"});
      localStorage.chartId = this.oneTypeId;
      // mui('#topPopover').popover('toggle');
      this.closeMenu(1);
      this.$nextTick(function () {
        if (this.oneTypeId == 32 || this.oneTypeId == 35 || this.oneTypeId == 36) {
          mui.toast('暂无走势图,敬请期待!')
        } else {
          this.skip_newUrl(0, 'trend', 'trend');
        }
      });
      // if (localStorage.app_flag == undefined) {
      //   this.skip_newUrl(0, 'trend', 'trend');
      // } else {
      //   this.skip_newUrl(1, '../3d/trend.html', 'trend');
      // }
    },
    //跳转近期开奖
    togoLottery: function () {
      // mui('#topPopover').popover('toggle');
      localStorage.chartId = this.oneTypeId;
      // this.skip_newUrl(0, 'award_page', '');
      // if (localStorage.app_flag == undefined) {
      //   this.skip_newUrl(0, '../tab/award_page.html', 'trend');
      // } else {
      //   this.skip_newUrl(1, '../tab/award_page.html', 'trend');
      // }
      this.closeMenu(1);
      this.$nextTick(function () {
        this.$router.push({
          name: "award_page",
          params: {
            "code": 'ssc',
            "name": this.typeNameTitle
          }
        });
      });
    },
    //跳转购彩记录
    togoRecord: function () {
      // mui('#topPopover').popover('toggle');
      if (!localStorage.userName) {
        this.$router.push({
          name: 'login'
        });
        return;
      }
      localStorage.chartId = this.oneTypeId;
      this.closeMenu(1);
      this.$nextTick(function () {
        this.skip_newUrl(0, 'bettingRecord', '', "0");
      });
      // if (localStorage.app_flag == undefined) {
      //   this.skip_newUrl(0, '../../myCenter/bettingRecord', 'trend', 'bettingRecord', '0');
      // } else {
      //   this.skip_newUrl(1, '../../myCenter/bettingRecord', 'trend', 'bettingRecord', '0');
      // }
      // if (localStorage.app_flag == undefined) {
      //   this.skip_newUrl(0, '../loginIn/bettingRecord.html', 'trend');
      // } else {
      //   this.skip_newUrl(1, '../loginIn/bettingRecord.html', 'trend');
      // }
    },
    //
    recharge: function () {
      $('#header').css({ display: "block" });
      $("#mainArea").css({ display: "block" });
      // if(localStorage.userName) {
      this.turnUrl("depositFile");
      // } else {
      //  this.$router.push({
      //    name: 'index'
      //  });
      // }
    },
    closePop: function () {
      $('#header').css({ display: "block" });
      $("#mainArea").css({ display: "block" });
      $(".popup").css({
        display: "none"
      })
      $(".menu_list").css({
        display: "block"
      });
      $(".mask").css({
        display: "none"
      });
    },
    //mui跳转方法
    skip_newUrl: function (index, name, nameId, param) {
      //$("body").css("overflow", "auto");
      if (param) {
        this.$router.push({
          name: name,
          params: {
            status: param
          }
        });

      } else {
        this.$router.push({
          name: name
        });

      }
      // switch (index) {
      //   case 0:
      // window.location.href = url;
      // this.$router.push({path:url});
      // this.$router.push({name:urlName});
      //     break;
      //   case 1:
      //     mui.openWindow({
      //       url: url,
      //       id: nameId,
      //       styles: {
      //         top: base.getStatusbarHeight() + 'px',
      //         bottom: 0
      //       },
      //       createNew: true,
      //       show: {
      //         autoShow: true, //页面loaded事件发生后自动显示，默认为true
      //         aniShow: 'pop-in', //页面显示动画，默认为”slide-in-right“；
      //         duration: '200' //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
      //       },
      //     });
      //     break;
      // }
    },
    changeRoute: function (to, from) {
      if (this.$route.name == "ssc") {
        if (from && to && ((to.name == "ssc" && from.name == "depositFile") || (from.name == "ssc" && to.name == "depositFile"))) {
          $('.mask.menu').css('display', 'none');
        } else {
          this.clearSelOptions();
          this.handleClearAll();
          $('#header').show();
          // $('.mask.menu').css('display','block');
          $('#mainArea').css('display', 'block');
          $('.pay').css('display', 'none');
        }

        // //console.log(this.$route.path.indexOf("ssc#"));
        // if (this.$route.path.indexOf("ssc/")!==-1){
        // var str = parseInt(this.$route.path.substring(this.$route.path.indexOf("ssc/") + 4, this.$route.path.length));
        this.previousIssue = "";//上期期号
        this.preventBanner = "";//当前期号
        this.planTypeId = "";//计划三级玩法id参数

        this.continue_periods = 1;// 追号期数
        this.after_no = false;// 中奖后停止追号
        var lastpath = this.$route.params.num, numList = this.szcIdList.gameIdList[this.code].split(',');
        if (!lastpath || numList.indexOf(lastpath) == -1) {
          this.$router.push({ path: '/' })
        } else {
          if (this.oneTypeId == lastpath) {
            //判断是否切换了账号
            var _this = this;
            if (localStorage.qryGamePlayInfoTimestamp) {
              var gameTimestamp = JSON.parse(localStorage.qryGamePlayInfoTimestamp);
              // if (!gameTimestamp[this.oneTypeId]) {
              this.oneTypeId = "";
              setTimeout(function () {
                _this.oneTypeId = lastpath;
              }, 10)
              // }
            } else {
              this.oneTypeId = "";
              setTimeout(function () {
                _this.oneTypeId = lastpath;
              }, 10)
            }
          } else {
            this.oneTypeId = lastpath;
            this.loginToUrl = ".." + this.$route.path;
          }


        }
        // } else {
        //   this.$router.push({ path: '/' })
        // }



      }


    },
    setSingleCoins(val, event) {
      this.singleCoins = val;
      event = event.currentTarget;
      $(event).parent().find(".active").removeClass('active');
      $(event).addClass('active');
    }
  },
  watch: {
    switchoverType() {
      if (!$('.topPopover_wrap').is(':hidden')) {
        this.closeMenu(1);
      }
    },
    singleCoins: function (val) {
      this.handleCoins();
      if (val != 10 && val != 50 && val != 100 && val != 200 && val != 500 && val != 1000 && val != 5000 && val != 10000 && val != 50000) {
        $(".betConfirm .coinList .active").removeClass('active');
      }
      this.setSpecialSum();
    },
    //追期数
    continue_periods: function (val) {
      if (val != 0) {
        this.totalCoins = val * this.tempCoins;
      } else {
        this.totalCoins = this.tempCoins;
      }
      if (this.after_no && this.continue_periods) {
        $('.after_no .mui-checkbox input').trigger("click");
      }
    },
    // 注数变动时投注金额跟随变动
    bets: function (val) {
      this.coin = val * 2;
    },
    //玩法切换监控
    present_playId: function () {
      var _this = this,
        id3 = _this.present_playId,
        list = [],
        domList,
        isNeed = false;

      //切换显示底下  万千百十个
      switch (id3) {
        //任选二
        case 94:
        case 95:
        case 96:
          list = [0, 0, 0, 1, 1];
          isNeed = true;
          _this.position_count = 2;
          _this.position_list = [0, 0, 0, 1, 1];
          break;
        //任选三
        case 98:
        case 99:
        case 100:
        case 101:
        case 112:
        case 113:
          list = [0, 0, 1, 1, 1];
          isNeed = true;
          _this.position_count = 3;
          _this.position_list = [0, 0, 1, 1, 1];
          break;
        //任选四
        case 103:
        case 104:
        case 105:
        case 106:
          list = [0, 1, 1, 1, 1];
          isNeed = true;
          _this.position_count = 4;
          _this.position_list = [0, 1, 1, 1, 1];
          break;
        default:
          break;
      }
      if (isNeed) {
        $("#mainArea .labelList").show();
        domList = $("#mainArea .labelList input");
        for (var i = 0; i < 5; i++) {
          if (list[i] == 1) {
            $(domList[i]).prop("checked", true);
          } else {
            $(domList[i]).prop("checked", false);
          }
        }
      } else {
        $("#mainArea .labelList").hide();
        return
      }
    },

    // 监听用户选择的项并计算注数
    //common共用区域选值
    numberArr: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    //万位选择项管理对象
    myriabit: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    //千位选择项管理对象
    kilobit: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    //百位选择项管理对象
    hundreds: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    //十位选择项管理对象
    decade: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    //个位选择项管理对象
    unit: {
      deep: true,
      handler: function () {
        var _this = this;
        if (_this.isChangePlayId) {
          return
        }
        _this.count_betNumber();
      }
    },
    oneTypeId: function () {
      //
      this.getHistoryBannerInfo();
      this.getBetsBannerInfo();
      this.getBetsType();
      this.getSysConfig();
      localStorage.lottery_id = this.oneTypeId;
      $(".play_head li").removeClass("active");
      $(".play_head li:first-child").addClass("active");
      $(".play_list ul").children("li").css({ display: "none" });
      $(".play_list ul").children("li").eq(0).css({ display: "block" });
      $(".play_list ul").children("li").eq(0).find(".sel:first").addClass("active");
      if (this.oneTypeId) {
        this.isCollect = localStorage.collectGame && JSON.parse(localStorage.collectGame).collectList[this.oneTypeId] ? 1 : 0;
      }
    },

    $route(to, from) {
      if (to.name == "ssc") {
        this.getBetsType();
        this.userName = localStorage.userName;
        if (this.userName) {
          this.get_userState();
        }
        this.pullToRefresh.setNowThis(this);
        // //console.log(this.$route);
        $('.popup').hide();
        // if (localStorage.userName && localStorage.indexCoinMsg) {
        //   var coinMsg = JSON.parse(localStorage.indexCoinMsg);
        //   this.pack_coin = (parseFloat(coinMsg.coin)).toFixed(2);
        //   this.user_state = "钱包:" + this.pack_coin + this.coinUnit + "(可用)";
        //   localStorage.indexCoinMsg = "";
        //   // this.get_userState();
        // } else {
        //   this.get_userState();
        // }
        this.changeRoute(to, from);

        var _this = this;

        //this.isCollect = localStorage.collectGame && JSON.parse(localStorage.collectGame).collectList[this.oneTypeId] ? 1 : 0;
        //当返回的时间出错时
        if (_this.issueErr) {
          var issList = _this.issueErr.split(","), issIndex = issList.indexOf(_this.oneTypeId);
          if (issIndex != -1) {
            issList.splice(issIndex, 1);
            if (issList.length == 0) {
              _this.issueErr = "";
            } else {
              _this.issueErr = issList.join(",");
            }

            _this.getBetsBannerInfo();
          }
        }
        this.$nextTick(function () {
          if ($("#topPopover").css("display") === 'block') {
            $("#topPopover").css("display", 'none');
          }
        })
      } else if (from.name == "ssc") {
        this.changeRoute(to, from);
      }


    }
  },
};
