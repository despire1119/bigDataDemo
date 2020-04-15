export default {
  data() {
    return {}
  },
  computed: {
    WINDOW_HEIGHT() {
      return this.$store.getters.getWindowHeight
    },
    WINDOW_WIDTH() {
      return this.$store.getters.getWindowWidth
    },
    CONFIG_WIDTH() {
      return this.$store.getters.getConfigWidth
    },
    CONFIG_HEIGHT() {
      return this.$store.getters.getConfigHeight
    },
    CONFIG_RATE() {
      return this.$store.getters.getScreenRate
    }
  },
  methods: {}
}
