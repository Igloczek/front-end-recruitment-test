<template>
  <BaseArticle class="pages-bacon">
    <template v-for="(baconStyle, index) in bacons">
      <BaconImage
        :key="index"
        class="pages-bacon__image"
        :style="baconStyle"
      />
    </template>
    <BaconButton
      class="pages-bacon__button"
      @click="clickMoreBacon"
    />
  </BaseArticle>
</template>

<script>
import routeNames from '../router/names'
import BaconImage from '../components/baconFactory/BaconImage.vue'
import BaconButton from '../components/baconFactory/BaconButton.vue'

const APPEND_BACON_FUNC_NAME = 'appendBacon'
const SHOW_EXCEPTION_AND_CLOSE = 'showExceptionAndClose'

export default {
  name: 'pagesBacon',
  metaInfo: {
    title: 'Bacon Factory',
  },
  components: {
    BaconImage,
    BaconButton,
  },
  computed: {
    animationTimeline() {
      return {
        ...this.generateBaconAnimationChunk({ qty: 5, interval: 100, start: 0 }),
        ...this.generateBaconAnimationChunk({ qty: 10, interval: 50, start: 500 }),
        ...this.generateBaconAnimationChunk({ qty: 50, interval: 20, start: 1000 }),
        ...this.generateBaconAnimationChunk({ qty: 100, interval: 10, start: 2000 }),
        3750: APPEND_BACON_FUNC_NAME,
        4000: SHOW_EXCEPTION_AND_CLOSE
      }
    }
  },
  data() {
    return {
      bacons: [
        { left: '50%', top: '50%' },
      ],
    };
  },
  methods: {
    clickMoreBacon() {
      Object.entries(this.animationTimeline)
        .forEach(([interval, method]) => {
          setTimeout(() => this[method](), interval)
        })
    },
    [APPEND_BACON_FUNC_NAME]() {
      const baconCoordinates = this.generateBaconRandomCoordinates();
      this.bacons.push(baconCoordinates)
    },
    generateBaconRandomCoordinates() {
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }
    },
    [SHOW_EXCEPTION_AND_CLOSE]() {
      alert('Unhandled exception at 0x000BAC0N in Yeah_I_Want_More_Bacon.exe: 0x0SNOWDOG: Stack overflow (parameters: 0x0TOOMUCH, 0x000BAC0N). Please click OK to kill the process.');
      this.$router.replace({
			  name: routeNames.PAGE_HOME,
			})
    },
    generateBaconAnimationChunk({ qty, interval = 100, start = 500 }) {
      const templateArray = this.generateBaconAnimationTemplateArray({ qty })
      const entries = this.generateBaconAnimationEntries({ templateArray, interval, start })
      return Object.fromEntries(entries)
    },
    generateBaconAnimationTemplateArray({ qty }) {
      return Array(qty).fill().map((_, idx) => idx + 1)
    },
    generateBaconAnimationEntries({ templateArray, interval = 100, start = 500 }) {
      return templateArray.map(index => [
        start + (index * interval),
        APPEND_BACON_FUNC_NAME
      ])
    },
  }
}
</script>

<style scoped>
.pages-bacon {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.pages-bacon__image {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.pages-bacon__button {
  bottom: 5%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 1;
}
</style>