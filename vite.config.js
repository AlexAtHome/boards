import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import manifest from './webmanifest.json'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: false
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html}', '**/*.{ico,png,svg}']
			},
			manifest
		})
	],
})
