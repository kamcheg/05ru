<template>
  <div id="app">
    <div class="container">
      <ControlPanel
        @go-to="goTo($event)"
        @make-paragraph="makeParagraph"
        @paste-img="pasteImg"
        @copy-html="copyHTML"
        @make-title="makeTitle"
      />
      <AppContent
        @upd-content="saveCurrentContent($event)"
        ref="appContent"
        data-content
      />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import ControlPanel from './components/ControlPanel'
import AppContent from './components/AppContent'
import {getCaretPosition} from './functions'

export default {
  name: 'App',
  data: () => ({
    appContent: null
  }),
  components: {
    ControlPanel, AppContent
  },
  computed: mapGetters(['content']),
  methods: {
    ...mapMutations(['transition', 'saveCurrentContent']),
    
    updContent() { // выводит в поле редактора оюновленный контент
      this.appContent.innerHTML = this.content
    },
    getParams() {
      const select = document.getSelection();
      const string = select.toString()
      const start = getCaretPosition()
      const end = start + string.length
      return { start, end, string }
    },
    goTo($event) { // переходы состояния (вперед, назад)
      this.transition($event)
      this.updContent()
    },
    makeTitle() {
      const select = document.getSelection();
      if (!select.anchorNode.parentElement.closest('div[data-content]')) { return } // если выделенный контент не из поля редактирования
      if (select.anchorNode.parentElement.hasAttribute('data-title')) {return}
      if (select.isCollapsed) { return } // если ничего не выделено, то return
      const { start, end, string } = this.getParams()
      const title = `<span data-title>${string}</span>`
      const result = this.appContent.innerHTML.slice(0, start) + title + this.appContent.innerHTML.slice(end)
      this.saveCurrentContent(result)
      this.updContent()
    },
    makeParagraph() { // кнопка TT
      const select = document.getSelection();
      if (!select.anchorNode.parentElement.closest('div[data-content]')) { return } // если выделенный контент не из поля редактирования
      const { start, end, string } = this.getParams()
      const result = `${this.appContent.innerHTML.slice(0, start)}<br><br>${string}<br><br>${this.appContent.innerHTML.slice(end)}`
      this.saveCurrentContent(result)
      this.updContent()
    },
    pasteImg() {
      const select = document.getSelection();
      if (!select.anchorNode.parentElement.closest('div[data-content]')) { return } // если выделенный контент не из поля редактирования
      const url = prompt('Введите url картинки', 'https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_320_9146846fb3b1bfae5672755bc1896214.jpg')
      const { start, end } = this.getParams()
      const result = `${this.appContent.innerHTML.slice(0, start)}<img src="${url}">${this.appContent.innerHTML.slice(end)}`
      this.saveCurrentContent(result)
      this.updContent()
    },
    copyHTML() {
      this.$clipboard(this.appContent.innerHTML)
    },
  },
  mounted() {
    this.appContent = this.$refs.appContent.$el
    this.saveCurrentContent(this.appContent.innerHTML) // сохраняю первое состояние
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
#app {
  
}
</style>
