import { ServicePlugin, PluginAPI } from '@vue/cli-service'
import { UserOptions } from '@windicss/plugin-utils'
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'
import defu from 'defu'
import type { VueCliPluginWindiOptions } from './types'

const plugin : ServicePlugin = (api: PluginAPI, options: VueCliPluginWindiOptions) => {

  const defaultConfig : UserOptions = {
    root: api.getCwd(),
    scan: {
      dirs: ['src'],
      exclude: [
        'node_modules',
        '.git',
        'public/**/*',
        '*.template.html',
        'index.html'
      ],
      include: []
    },
    transformCSS: 'pre',
  }

  const config = defu.arrayFn(options.pluginOptions?.windicss ?? {}, defaultConfig) as UserOptions

  // extend the base webpack configuration
  api.chainWebpack(webpackConfig => {
    webpackConfig.plugin('windicss').use(WindiCSSWebpackPlugin, [config])
  })

  return true
}

export default plugin
