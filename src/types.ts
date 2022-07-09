import type { ProjectOptions } from '@vue/cli-service'
import type { UserOptions } from '@windicss/plugin-utils'

export interface VueCliPluginWindiOptions extends ProjectOptions {
  pluginOptions?: {
    windicss?: UserOptions
  }
}
