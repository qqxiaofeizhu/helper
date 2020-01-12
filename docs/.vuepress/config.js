const fs = require('fs');
const path = require('path');

module.exports = ctx => ({
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'https://github.com/qqxiaofeizhu/helper',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: '查看源码',
  // 以下为可选的编辑链接选项
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们改善此页面！',
  themeConfig: {
    nav: require('./nav/index'),
    sidebar: {
      '/learn/js/': [
        '',
        '20190705.md'
      ],
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ]
})

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../learn/js'))
  .filter(filename => filename.endsWith('.md') && filename.slice(0, -3))
  .sort()