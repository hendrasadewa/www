import { dev } from '$app/environment';
import type { Metadata } from '$lib/entity/common.entity';

const metadata: Metadata = {
	title: 'Hendra Sadewa - Web Engineer | Senior Web Developer in Indonesia',
	description:
		'I am Hendra Sadewa, a Web Engineer based in Bekasi, Indonesia. Currently working at Stockbit as a Senior Web Engineer. Discover my projects, tech stacks, and interests.',
	categories: [
		'Hendra',
		'Hendra Sadewa',
		'web engineer',
		'web engineer Indonesia',
		'senior web developer'
	],
	headerImageAlt: 'Hendra Sadewa portrait',
	headerImageURL: '/img/me.webp',
	published: true,
	url: dev ? 'http://localhost:5173/' : 'https://hendrasadewa.com/',
	author: 'Hendra Sadewa',
	email: 'me@hendrasadewa.com'
};

export default metadata;
