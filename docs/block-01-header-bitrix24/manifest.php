<?php
/**
 * Manifest файл для блока Header (Шапка сайта)
 * Bitrix24 Landing API
 */

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

	return array(
	'block' => array(
		'name' => Loc::getMessage('LANDING_BLOCK_HEADER_NAME') ?: 'Header',
		'section' => array('menu'),
		'type' => array('page', 'store', 'group', 'knowledge'),
	),
	'menu' => array(
		// Многоуровневое меню для десктопа
		'.landing-block-node-menu-nav' => array(
			'item' => '.landing-block-node-menu-item',
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU') ?: 'Main Menu',
			'root' => array(
				'ulClassName' => 'landing-block-node-menu-list',
				'liClassName' => 'landing-block-node-menu-item',
				'aClassName' => 'landing-block-node-menu-link',
			),
			'nodes' => array(
				'.landing-block-node-menu-link' => array(
					'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU_LINK') ?: 'Menu Link',
					'type' => 'link',
				),
			),
		),
		// Мобильное меню
		'.landing-block-node-menu-mobile' => array(
			'item' => '.landing-block-node-menu-item-mobile',
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU_MOBILE') ?: 'Mobile Menu',
			'root' => array(
				'ulClassName' => 'landing-block-node-menu-list-mobile',
				'liClassName' => 'landing-block-node-menu-item-mobile',
				'aClassName' => 'landing-block-node-menu-link-mobile',
			),
			'nodes' => array(
				'.landing-block-node-menu-link-mobile' => array(
					'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU_LINK_MOBILE') ?: 'Mobile Menu Link',
					'type' => 'link',
				),
			),
		),
	),
	'nodes' => array(
		// Логотип
		'.landing-block-node-logo' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_LOGO') ?: 'Logo',
			'type' => 'link',
		),
		'.landing-block-node-img' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_LOGO_IMG') ?: 'Logo Image',
			'type' => 'img',
			'useInDesigner' => true,
			'dimensions' => array('maxWidth' => 200, 'maxHeight' => 100),
		),
		
		// Переключатель языка
		'.landing-block-node-lang-btn' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_LANG_BTN') ?: 'Language Button',
			'type' => 'link',
			'group' => 'lang',
		),
		'.landing-block-node-lang-btn-mobile' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_LANG_BTN_MOBILE') ?: 'Language Button (Mobile)',
			'type' => 'link',
			'group' => 'lang',
		),
		
		// CTA кнопка
		'.landing-block-node-button' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_BUTTON') ?: 'CTA Button',
			'type' => 'link',
			'group' => 'button',
		),
		'.landing-block-node-button-mobile' => array(
			'name' => Loc::getMessage('LANDING_BLOCK_HEADER_BUTTON_MOBILE') ?: 'CTA Button (Mobile)',
			'type' => 'link',
			'group' => 'button',
		),
	),
	'style' => array(
		'block' => array(
			'type' => array('block-default', 'navbar-full'),
		),
		'nodes' => array(
			'.landing-block-node-container' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_CONTAINER') ?: 'Container',
				'type' => array('box', 'paddings'),
			),
			'.landing-block-node-menu-link' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU_LINK') ?: 'Menu Link',
				'type' => array('typo-link', 'navbar'),
			),
			'.landing-block-node-menu-link-mobile' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_MENU_LINK_MOBILE') ?: 'Mobile Menu Link',
				'type' => array('typo-link'),
			),
			'.landing-block-node-button' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_BUTTON') ?: 'CTA Button',
				'type' => array('button', 'typo-link'),
			),
			'.landing-block-node-button-mobile' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_BUTTON_MOBILE') ?: 'CTA Button (Mobile)',
				'type' => array('button', 'typo-link'),
			),
			'.landing-block-node-img' => array(
				'name' => Loc::getMessage('LANDING_BLOCK_HEADER_LOGO_IMG') ?: 'Logo Image',
				'type' => array('box'),
			),
		),
	),
	'assets' => array(
		'css' => array(
			// Можно добавить внешние CSS файлы если нужно
		),
		'js' => array(
			// Можно добавить внешние JS файлы если нужно
		),
	),
);
