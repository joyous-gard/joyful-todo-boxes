import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig, normalizePath } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      include: ['lib/**/*.ts', 'lib/**/*.tsx'],
      outDirs: ['dist'],
      entryRoot: 'lib',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build:{
    copyPublicDir:false,
    rolldownOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
       glob.sync('lib/**/*.{ts,tsx}', {
         ignore: ["lib/**/*.d.ts"],
       }).map(file => [
         // The name of the entry point
         // lib/nested/foo.ts becomes nested/foo
         normalizePath(relative(
           'lib',
           file.slice(0, file.length - extname(file).length)
         )),
         // The absolute path to the entry file
         // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
         fileURLToPath(new URL(file, import.meta.url))
       ])
     ),
     output: {
       assetFileNames: 'assets/[name][extname]',
       entryFileNames: '[name].js',
     }
    },
    lib:{
      entry: resolve(import.meta.dirname, 'lib/main.ts'),
      formats: ['es']
    }
  }
})
