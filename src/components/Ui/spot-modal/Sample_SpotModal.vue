<template>
  <div class="app">
    <div class="sample_btn">
      <a @click="open('sample1')" href="javascript:void(0)" class="name">サンプルボタン1</a>

      <spotModal ref="sample1" class="sample_modal" :position="'right'">
        <dl class="txt">
          <dt>タイトル</dt>
          <dd>テキストです。テキストです。テキストです。</dd>
        </dl>
        <div class="btn" @click="close('sample1')">CLOSE</div>
      </spotModal>
    </div>

    <div class="sample_btn pos2">
      <a @click="open('sample2')" href="javascript:void(0)" class="name">サンプルボタン2</a>

      <spotModal ref="sample2" class="sample_modal" :position="'left'">
        <dl class="txt">
          <dt>いろんな位置でも</dt>
          <dd>親からの相対位置なので大丈夫</dd>
        </dl>
        <div class="btn" @click="close('sample2')">CLOSE</div>
      </spotModal>
    </div>

    <div class="sample_btn pos3">
      <a @click="open('sample3')" href="javascript:void(0)" class="name">サンプルボタン3</a>

      <spotModal ref="sample3" class="sample_modal" :position="'bottom'">
        <figure class="img"><img src="https://placehold.jp/150x150.png"></figure>
        <dl class="txt">
          <dt>画像とかも</dt>
          <dd>全然大丈夫！</dd>
        </dl>
        <div class="btn" @click="close('sample3')">CLOSE</div>
      </spotModal>
    </div>

    <div class="sample_btn pos4" @mouseenter="open('sample4')" @mouseleave="close('sample4')">
      <a href="javascript:void(0)" class="name">サンプルボタン4</a>

      <spotModal ref="sample4" class="sample_modal" :position="'top'">
        <figure class="img"><img src="https://placehold.jp/150x50.png"></figure>
        <dl class="txt">
          <dt>hoverでも</dt>
          <dd>全然大丈夫！</dd>
        </dl>
        <div class="btn" @click="close('sample4')">CLOSE</div>
      </spotModal>
    </div>

    <div class="sample_btn pos5" @mouseenter="open('sample5')" @mouseleave="close('sample5')">
      <a href="javascript:void(0)" class="name">サンプルボタン5</a>

      <spotModal ref="sample5" class="sample_modal" :position="'tooltip'">
        <dl class="txt">
          <dt>ツールチップ的なもの</dt>
          <dd>全然大丈夫！</dd>
        </dl>
      </spotModal>
    </div>
  </div>
</template>

<script>
import spotModal from './spotModal.vue'

export default {
  name: 'app',
  components: {
    spotModal
  },
  methods: {
    // このあたりはサンプル用なので適当です
    close(id) {
      this.$refs[id].spotModalHide();
    },

    open(id) {
      this.$refs[id].spotModalShow();
    }
  }
}
</script>

<style lang="scss">
.app {
  padding: 100px;

  .sample_btn {
    transition: all 0.2s ease;
    position: relative;
    display: inline-block;

    a {
      background-color: #fff;
      box-shadow: 0 0 3px 3px rgba(0,0,0,0.2);
      padding: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: chocolate;
        box-shadow: 0 0 6px 6px rgba(0,0,0,0.2);
        color: #fff;
      }
    }

    &.pos2 {
      position: absolute; top: 50%; left: 50%;
      width: 200px;
      height: 300px;
    }

    &.pos3 {
      position: fixed; top: 20px; right: 50px;
      width: 300px;
      height: 100px;
    }

    &.pos4 {
      position: absolute; bottom: 50px; left: 50px;
      width: 500px;
    }

    &.pos5 {
      position: absolute; top: 40%; left: 50px;
      width: 400px;
    }
  }


  .sample_modal {
    background-color: #eee;
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.2);
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    width: 250px;

    .img {
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    .txt {
      dt {
        font-weight: bold;
        margin-bottom: 5px;
      }
      dd {
        margin-bottom: 10px;
      }
    }
    .btn {
      background-color: #000;
      color: #fff;
      cursor: pointer;
      padding: 5px 10px;
      display: inline-block;
      text-align: center;
      font-size: 1.2rem;
    }
  }
}
</style>
