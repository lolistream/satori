import { loadYoga as loadYogaUntyped, type Yoga } from 'yoga-layout/load'
// @ts-ignore
import instantiateAsmJs from './yoga-asmjs.js'

const loadYoga = loadYogaUntyped as (options: {
  instantiateWasm?: (
    imports: WebAssembly.Imports,
    successCallback: (instance: { exports: WebAssembly.Exports }) => void
  ) => WebAssembly.Exports | Record<string, unknown>
}) => Promise<Yoga>

const loadingYoga = loadYoga({
  instantiateWasm(imports, successCallback) {
    const exports = instantiateAsmJs(imports)
    successCallback({ exports })
    return exports
  },
})

export function getYoga() {
  return loadingYoga
}
