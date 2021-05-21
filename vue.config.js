// 最终可以和公共的配置进行合并
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'assets': '@/assets',
        'views':'@/views'
      }

    }
  }
}