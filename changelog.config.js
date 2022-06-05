'use strict'

const scopes = ['root', 'front', 'api', 'libs/types']

const commitTypes = [
	{
		description: 'Fresh new feature',
		emoji: '🚀',
		value: 'feat',
	},
	{
		value: 'improve',
		emoji: '👷',
		description: 'Code that improves something',
	},
	{
		description: 'Bug fix',
		emoji: '🐛',
		value: 'fix',
	},
	{
		description: 'Code change that neither fixes a bug or adds a feature',
		emoji: '💡',
		value: 'refactor',
	},
	{
		description: 'CI/CD related changes',
		emoji: '👷',
		value: 'ci',
	},
	{
		description: 'Build process or auxiliary tool changes',
		emoji: '🧰',
		value: 'chore',
	},
	{
		description: 'Markup, white-space, formatting, missing semi-colons...',
		emoji: '🧁',
		value: 'style',
	},
]

const types = {}

for (const type of commitTypes) {
	types[type.value] = type
}

module.exports = {
	disableEmoji: false,
	list: commitTypes.map(type => type.value),
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ['type', 'scope', 'subject', 'body'],
	scopes,
	types,
}
