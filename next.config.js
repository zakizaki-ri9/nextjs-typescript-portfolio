// 静的サイトのルーティング設定
module.exports = {
  exportPathMap: async () => {
    return {
      '/': {
        page: '/'
      }
    }
  }
}

// CSS in JSの設定
const withCSS = require('@zeit/next-css')
module.exports = withCSS({})
