const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
	css: {
		loaderOptions: {
			// sass: {
			// 	// additionalData: bootstrapSassAbstractsImports.join('\n')
			// 	// additionalData: `@import "@/assets/styles/variables.sass"
			// }
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	}
