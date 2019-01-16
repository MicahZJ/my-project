
export default {
  data () {
    return {
      active: 0,
      currentView: 'order_buy',
      flag1: true,
      flag2: false,
      tabs: [
        {
          type: '买东西',
          view: 'order-buy'
        },
        {
          type: '卖东西',
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
  },
  onLoad () {},
  onShow () {},
  onHide () {},
  onUnload () {}
}
