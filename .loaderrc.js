import { URL } from 'url'

export default {
  loaders: [
    {
      resolve(specifier, opts) {
        if (specifier.endsWith('.txt')) {
          let { parentURL } = opts
          let url = new URL(specifier, parentURL).href
          return { url }
        }
      },
      format(url, opts) {
        if (url.endsWith('.txt')) {
          return { format: 'module' }
        }
      },
      transform(source, opts) {
        if (opts.url.endsWith('.txt')) {
          return { //TODO (we dont want to log on console, just return that string)
            source: `export default function () {
              console.log(\`${String(source)}\`)
            }`
          }
        }
      }
    }
  ]
}
