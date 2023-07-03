<template>
  <div class="page-container">
    <div class="result-container">
      <div>
        <h1 class="animation" :class="{ show: showAfter(0) }">最後結果</h1>
      </div>
      <div class="result-wrapper">
        <div class="animation result-text" :class="{ show: showAfter(1) }">你答對了 {{ correctCount }} 題</div>
        <div class="animation result-text" :class="{ show: showAfter(2.2) }">你的靈魂動物是 ...</div>
        <div class="result-reveal animation" :class="{ show: showAfter(4) }">
          <div class="result-text big">{{ spiritAnimal }}</div>
          <div class="result-image">
            <img :src="spiritAnimalImgUrl" />
          </div>
        </div>
      </div>
      <!-- <div class="debug">{{ questions }}</div> -->
      <div class="actions-wrapper animation" :class="{ show: showAfter(5) }">
        <ShareNetwork
          v-for="network in shareNetwork"
          :key="network.network"
          :network="network.network"
          :style="{ backgroundColor: network.color }"
          :url="sharingWebsiteInfo.url"
          :title="sharingWebsiteInfo.title"
          :description="sharingWebsiteInfo.description"
          :quote="sharingWebsiteInfo.quote"
          :hashtags="sharingWebsiteInfo.hashtags"
        >
          <i :class="network.icon"></i>
          <span>分享結果到 {{ network.name }} </span>
        </ShareNetwork>
      </div>
    </div>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'PageResult',
  components: {
    // AButton,
  },
  props: {
    scene: {
      type: Object,
      default: () => ({
        milliseconds: 0,
        interval: null,
      }),
    },
    questions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      shareNetwork: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-lg fa-facebook-f',
          color: '#1877f2',
        },
        {
          network: 'line',
          name: 'Line',
          icon: 'fab fah fa-lg fa-line',
          color: '#00c300',
        },
        // {
        //   network: 'twitter',
        //   name: 'Twitter',
        //   icon: 'fab fah fa-lg fa-twitter',
        //   color: '#1da1f2',
        // },
      ],
    }
  },
  computed: {
    correctCount() {
      // return 8 // DEBUG
      return this.questions.filter((q) => q.correct_answer === q.response).length
    },
    spiritAnimal() {
      const correctCount = this.correctCount
      if (correctCount >= 8) {
        return '臺灣黑熊'
      } else if (correctCount >= 4) {
        return '臺灣梅花鹿'
      }
      return '櫻花鉤吻鮭'
    },
    spiritAnimalImgUrl() {
      const correctCount = this.correctCount
      if (correctCount >= 8) {
        return 'https://i.imgur.com/pwNShrA.jpg'
      } else if (correctCount >= 4) {
        return 'https://i.imgur.com/AYImZx9.png'
      }
      return 'https://i.imgur.com/rVMVlIz.png'
    },
    getShareQuote() {
      return `我的靈魂動物是${this.spiritAnimal}！你也來測測看吧！`
    },
    sharingWebsiteInfo() {
      return {
        url: this.spiritAnimalImgUrl,
        title: this.getShareQuote,
        quote: this.getShareQuote,
        hashtags: '#這是假消息嗎？ #靈魂動物測驗 #2023',
        twitterUser: 'ustaiwanwatch',
      }
    },
  },
  methods: {
    showAfter(second) {
      return second < this.scene.milliseconds / 1000
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.debug {
  overflow-y: auto;
  line-break: anywhere;
}
.result-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
.result-text {
  font-size: 24px;
  &.big {
    font-size: 48px;
    font-weight: bold;
  }
}

.result-image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 0 1;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 400px;
    border-radius: 15px;
  }
}
.result-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  .result-reveal {
    margin-top: 2em;
  }
}
.actions-wrapper {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  > a {
    margin: 3px;
    height: 2.6em;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
