import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs :: Morales Research Inc',
			social: {
				github: 'https://git.moralesresearch.org/web/documentation',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/welcome/gettingstarted/' },
					],
				},
				{
					label: 'Ferret ML',
					items: [
						{label: 'Getting Started on Ferret ML', link: '/ferret/ferretml-gs/'},
					],
				},
				{
					label: 'References',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
