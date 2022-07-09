import type { PluginAPI, ServicePlugin } from '@vue/cli-service'
import type { UserOptions } from '@windicss/plugin-utils'
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'
import defu from 'defu'
import type { VueCliPluginWindiOptions } from './types'

const plugin: ServicePlugin = (api: PluginAPI, options: VueCliPluginWindiOptions) => {
  const defaultConfig: UserOptions = {
    root: api.getCwd(),
    scan: {
      dirs: ['src', 'public', 'views'],
      exclude: [
        'node_modules',
        '.git',
      ],
      include: [],
    },
  }

  const config = defu.arrayFn(options.pluginOptions?.windicss ?? {}, defaultConfig) as UserOptions

  // extend the base webpack configuration
  api.chainWebpack((webpackConfig) => {
    webpackConfig.plugin('windicss').use(WindiCSSWebpackPlugin, [config])
  })

  return true
}

export default plugin
