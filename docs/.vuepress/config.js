module.exports = {
  title: '前端学习文档',
  description: '书山有路勤为径，学海无涯苦做舟',
  themeConfig: {
    nav: [{
      text: '日常学习',
      items: [{
        text: 'vue深入学习',
        link: '/learn/vue/'
      }, {
        text: 'js深入学习笔记',
        link: '/learn/js/'
      }]
    }],
    sidebar: {
      '/learn/vue/': [
        '/learn/vue/',
        '/learn/vue/components.md'
      ],
      '/learn/js/': [
        '/learn/js/'
      ]
    },
    activeHeaderLinks: true,
    lastUpdated: true,
  },
  markdown: {
    anchor: {
      permalink: true,
    },
    lineNumbers: true // 代码块显示行号
  }
}