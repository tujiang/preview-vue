
<style>
  @import 'photo.css';
</style>
<template>
  <div class="photoImgContainer">
    <img class="previewImg" v-for="(item, index) in list" :src="item.src" height="100" @click="openImg(index)" :key="index"/>

    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter" style="display: none;"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'photo',
  components: {},
  data () {
    return {
      list: [{
        src: '../../static/image/bl.png',
        w: 600,
        h: 400
      }, {
        src: '../../static/image/cat.png',
        w: 1200,
        h: 900
      },
      {
        src: '../../static/image/crab.png',
        w: 600,
        h: 400
      }, {src: '../../static/image/crab.png', w: 1200, h: 900}, {src: '../../static/image/vr.png', w: 1200, h: 900}, {src: '../../static/image/vr.png', w: 1200, h: 900}
      ]
    }
  },
  methods: {
    openImg (index) {
      let pswpElement = document.querySelectorAll('.pswp')[0]
      let options = {
        index: index,
        showHideOpacity:true,
        loop: false,
      }
      let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.list, options)
      gallery.listen('gettingData', (index, item) => {

      })
      gallery.init()
    }
  }
}
</script>
