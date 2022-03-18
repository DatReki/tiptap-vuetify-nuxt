export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'frontend',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
		  { charset: 'utf-8' },
		  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
		  { hid: 'description', name: 'description', content: '' },
		  { name: 'format-detection', content: 'telephone=no' },
		],
		link: [
		  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		  { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
		  { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css' },
		  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }
		],
		script: [
		  { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' },
		  { src: 'https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js' },
		  { src: 'https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js' }
		]
	  },

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/main.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{  src: `~/plugins/tiptap-vuetify.js`, mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/vuetify',	
	],
	
	// Optionally passing options in module top level configuration
	wait: { useVuex: true },

	// Authentication methods
	auth: {
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [
			'vuetify/lib', 
			'tiptap-vuetify'
		]
	}
}
