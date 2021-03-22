import { ProjectOptions } from '@vue/cli-service'
import {UserOptions} from "@windicss/plugin-utils";

export interface VueCliPluginWindiOptions extends ProjectOptions {
  pluginOptions?: {
    windicss?: UserOptions
  }
}
