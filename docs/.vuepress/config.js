module.exports = {
  title: '前端学习文档',
  description: '书山有路勤为径，学海无涯苦做舟',
  themeConfig: {
    nav: [{
      text: '日常学习',
      items: [
        {
          text: 'vue学习文档',
          link: '/learn/vue/'
        }, {
          text: 'JS学习文档',
          link: '/learn/js/'
        }
      ]
    }],
    sidebar: {
      '/learn/vue/': [
        '/learn/vue/',
        '/learn/vue/components.md'
      ],
      '/learn/js/': [
        '/learn/js/',
        '/learn/js/structure.md',
        '/learn/js/design.md'
      ]
    },
    activeHeaderLinks: true,
    lastUpdated: true,
  },
  markdown: {
    anchor: {
      permalink: true,
    },
    lineNumbers: true
  }
}