'use strict';
/* global monogatari */

monogatari.settings({
	'Name': 'Shinsengumi Play',
	'Version': '0.1.0',
	'Label': 'Start',
	'Slots': 10,
	'MultiLanguage': true,
	'LanguageSelectionScreen': false,
	'MainScreenMusic': '',
	'SaveLabel': 'Save',
	'AutoSaveLabel': 'AutoSave',
	'ShowMainScreen': true,
	'Preload': true,
	'AutoSave': 0,
	'ServiceWorkers': false,
	'AspectRatio': '16:9',
	'ForceAspectRatio': 'None',
	'TypeAnimation': true,
	'InstantText': true,
	'NVLTypeAnimation': true,
	'NarratorTypeAnimation': true,
	'CenteredTypeAnimation': true,
	'Orientation': 'any',
	'Skip': 0,
	'AssetsPath': {
		'root': 'assets',
		'characters': 'characters',
		'icons': 'icons',
		'images': 'images',
		'music': 'music',
		'scenes': 'scenes',
		'sounds': 'sounds',
		'ui': 'ui',
		'videos': 'videos',
		'voices': 'voices',
		'gallery': 'gallery'
	},
	'SplashScreenLabel': '_SplashScreen',
	'Storage': {
		'Adapter': 'LocalStorage',
		'Store': 'GameData',
		'Endpoint': ''
	},
	'AllowRollback': true,
	'ExperimentalFeatures': false,
	'Screenshots': false
});

monogatari.preferences({
	'Language': '日本語',
	'Volume': { 'Music': 1, 'Voice': 1, 'Sound': 1, 'Video': 1 },
	'Resolution': '800x600',
	'TextSpeed': 20,
	'AutoPlaySpeed': 5
});

/* This is a reading experience, not a game: plain words on the buttons. */
monogatari.translation('日本語', { 'Start': '読みはじめる' });
monogatari.translation('English', { 'Start': 'Begin reading' });
