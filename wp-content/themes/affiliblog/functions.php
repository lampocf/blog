<?php
require_once get_template_directory() . '/vendor/autoload.php';
// Get customizer options
use SuperbThemesCustomizer\CustomizerControls;

// New color variables
if (method_exists(CustomizerControls::class, "OverwriteDefault")) {
    CustomizerControls::OverwriteDefault(CustomizerControls::NAVIGATION_LAYOUT_STYLE, "navigation_layout_style_choice_large");
    CustomizerControls::OverwriteDefault(CustomizerControls::BLOGFEED_SHOW_READMORE_BUTTON, "1");
    CustomizerControls::OverwriteDefault(CustomizerControls::SITE_IDENTITY_HIDE_TAGLINE, "0");
    CustomizerControls::OverwriteDefault(CustomizerControls::SITE_IDENTITY_HIDE_TAGLINE, "0");
    CustomizerControls::OverwriteDefault(CustomizerControls::PAGE_404_HIDE_POSTS, "0");
    CustomizerControls::OverwriteDefault(CustomizerControls::SINGLE_HIDE_BYLINE_IMAGE, "0");
    CustomizerControls::OverwriteDefault('--minimalistique-primary', "#cca352");
    CustomizerControls::OverwriteDefault('--minimalistique-primary-dark', "#ba9449");
    CustomizerControls::OverwriteDefault('--minimalistique-secondary', "#000");
    CustomizerControls::OverwriteDefault('--minimalistique-secondary-dark', "#000");

}


// Get stylesheet
add_action('wp_enqueue_scripts', 'affiliblog_enqueue_styles');
function affiliblog_enqueue_styles()
{
    wp_enqueue_style('affiliblog-parent-style', get_template_directory_uri() . '/style.css');
}



// New fonts
function affiliblog_enqueue_assets()
{
    // Include the file.
    require_once get_theme_file_path('webfont-loader/wptt-webfont-loader.php');
    // Load the webfont.
    wp_enqueue_style(
        'affiliblog-fonts',
        wptt_get_webfont_url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'),
        array(),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'affiliblog_enqueue_assets');
