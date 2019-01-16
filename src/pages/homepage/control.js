import attractionsBox from './attractions_play/index'
import trafficBox from './traffic_play/index'
import otherBox from './other_play'

export default {
  data () {
    return {
      active: 0,
      currentView: 'order_buy',
      flag1: true,
      flag2: false,
      tabs: [
        {
          type: '景点攻略',
          view: 'order-buy'
        },
        {
          type: '交通攻略',
          view: 'order-sell'
        },
        {
          type: '其他攻略',
          view: 'order-sell'
        }
      ],
      content: {
        data: [
          {orderMode: 'buy', orderNum: 100},
          {orderMode: 'sell', orderNum: 10}
        ]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggle (i) {
      this.active = i
    }
  },
  components: {
    attractionsBox,
    trafficBox,
    otherBox,
  },
  onLoad () {},
  onShow () {},
  onHide () {},
  onUnload () {}
}
