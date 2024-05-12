<?php
define( 'WP_CACHE', true /* Modified by NitroPack */ );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3NI8R`/TNQZ.t.Vq058S.,B3{0|FCu6&<zq;Z]h+8S$U6uHG!~B<>qXK;bZ%%#U:' );
define( 'SECURE_AUTH_KEY',  '&.CzdhMZ1oz<4#Sk2wtYhhx3E*Prpw~yg1 _2932}-A=~/}r.hxEjPv]5Q%.)[Jz' );
define( 'LOGGED_IN_KEY',    '4-+sH7*X+i/&[i?YaG^u>NUx*(jfSd4{*,0|%V^]~dXcD=FFhQwu;!6aUPLU!WOH' );
define( 'NONCE_KEY',        ')*L};>qL,m,*1+I>Cc:$I(,X0;5zc*+hYR_c;aJ5o)E}Xvg.Uk$dPaAWvCFY1S0g' );
define( 'AUTH_SALT',        '>C0-eo{2+Z5vhN5Edx^G=b>B?n(+&mpa)JWip=]A*N$#GVF8c9<m;8yqN;xjmh_}' );
define( 'SECURE_AUTH_SALT', 'd?%KZ}j|tT)m!PrJ>#JBKm?FhBYOP?60k=@Gc#6=SYZLe!hpDO7c3+ue.=`grG 5' );
define( 'LOGGED_IN_SALT',   '&V*bx,*0W;&@iuL@a#|@!$bo4Q/]q2!*+fv0ZaB4XUZT#/8h)qPG:wB7AQv7LJq-' );
define( 'NONCE_SALT',       '_=jYE8;+@6}b  (LIiI2lFe@[a? QOVjdt{q44n8)Usx4V.a&+AU*0*i4HMZoy4Y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
