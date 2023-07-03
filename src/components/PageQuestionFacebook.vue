<template>
  <div class="page-container">
    <div class="question-container w100">
      <h2>這是假消息嗎？({{ currentQuestionProgress }})</h2>
      <!-- {{ scene }} -->
      <div class="facebook-wrapper">
        <div class="facebook-container">
          <div class="profile-wrapper">
            <div class="profile-pic">
              <img :src="randomFakeMedia.media_url" />
            </div>
            <div class="profile-info-wrapper">
              <div class="profile-info">{{ randomFakeMedia.media_name }}</div>
              <div>20m ago</div>
            </div>
          </div>
          <div class="news-title">{{ currentQuestion?.news_title }}</div>
          <div class="mb10 max-image-wrapper">
            <img :src="currentQuestion?.img_url" @click="expandDetails" />
          </div>
          <div class="news-response">
            <img
              class="x16dsc37"
              height="18"
              role="presentation"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              width="18"
            />
            <span class="like-number">{{ likeCount() }}</span>
          </div>
          <div class="responses-wrapper">
            <!-- -->
            <div v-for="comment in fakeResponse" :key="comment?.id" class="response">
              <div class="response-profile">
                <img src="https://holyspiritchurch.us/wp-content/uploads/facebook-profile-blank-face.jpeg" />
              </div>
              <div class="response-content">
                <div class="response-name">{{ comment?.user_name }}</div>
                <div class="response-text">{{ comment?.user_comment }}</div>
              </div>
            </div>
            <!-- -->
          </div>
        </div>
      </div>
      <!-- {{ currentQuestion }} -->
      <div class="answer-wrapper">
        <AButton :correct-type="true" :loading="loading" @buttonClick="$emit('chooseNewsTrue')">是真的吧</AButton>
        <AButton :incorrect-type="true" :loading="loading" @buttonClick="$emit('chooseNewsFalse')">是假消息</AButton>
      </div>
    </div>
  </div>
</template>

 <script>
import AButton from './AButton.vue'

export default {
  name: 'PageQuestionFacebook',
  components: {
    AButton,
  },
  props: {
    currentQuestion: Object,
    loading: Boolean,
    fakeMediaProvider: Array,
    fakeResponseProvider: Array,
    scene: Object,
    currentQuestionProgress: String,
  },
  data() {
    return { randomFakeMedia: this.getRandomFakeMedia(), fakeResponse: [], fakeResponseInterval: null }
  },
  watch: {
    currentQuestion() {
      this.randomFakeMedia = this.getRandomFakeMedia()
      this.fakeResponse = []
    },
  },
  created() {
    const randomTime = Math.floor(Math.random() * 1500) + 100
    this.fakeResponseInterval = setInterval(this.addFakeResponse, randomTime)
  },
  beforeUnmount() {
    clearInterval(this.fakeResponseInterval)
  },
  methods: {
    likeCount() {
      return this.currentQuestion?.answer_total || 0
    },
    getRandomFakeMedia() {
      const randomIndex = Math.floor(Math.random() * this.fakeMediaProvider.length)
      return this.fakeMediaProvider[randomIndex]
    },
    addFakeResponse() {
      // console.log(this.fakeResponseProvider[Math.floor(Math.random() * this.fakeResponseProvider.length)])
      this.fakeResponse = [
        ...this.fakeResponse,
        this.fakeResponseProvider[Math.floor(Math.random() * this.fakeResponseProvider.length)],
      ]
    },
    expandDetails() {
      this.$emit('expandDetails', this.currentQuestion)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.answer-wrapper {
  width: 100%;
  > .button-wrapper {
    margin: 10px 0;
  }
}
.max-image-wrapper {
  max-width: 100%;
  max-height: 400px;
  overflow: hidden;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #f0f2f5;
  overflow-y: auto;
  flex: 1;
}
.facebook-wrapper {
  width: 100%;
  margin-bottom: 20px;
  overflow-y: auto;
  height: 100%;
}
.facebook-container {
  margin: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}
.profile-wrapper {
  display: flex;
  padding: 16px;
  align-items: center;
  .profile-info-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-left: 12px;
    align-items: flex-start;
    .profile-info {
      font-weight: bold;
    }
  }
  .profile-pic {
    width: 40px;
    height: 40px;
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }
}
.news-title {
  display: flex;
  font-size: 14px;
  padding: 4px 16px 16px;
  text-align: left;
}
.news-response {
  display: flex;
  margin: 0 16px;
  padding: 10px 0;
  align-items: center;
  .like-number {
    font-size: 15px;
    color: #65676b;
    padding-left: 4px;
  }
}
.responses-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 4em;
  max-height: 10em;
  overflow-y: hidden;
  animation: all 0.3s ease-in-out;
}
.response {
  display: flex;
  margin: 4px 10px 0 16px;
  .response-profile {
    padding-right: 6px;
    img {
      border: 0.5px solid rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      width: 32px;
      height: 32px;
      object-fit: cover;
    }
  }
  .response-content {
    background: #f0f2f5;
    padding: 8px 12px;
    border-radius: 16px;
    text-align: left;
    margin-bottom: 10px;
    color: #050505;
    .response-name {
      font-size: 13px;
      font-weight: 600;
      line-height: 16px;
    }
    .response-content {
      font-size: 15px;
    }
  }
}
</style>
