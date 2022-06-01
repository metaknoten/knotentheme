# Knotentheme
A Grav theme for <a href="https://metaknoten.net/">metaknoten.net</a>


## Instructions

### Run
`npm install` to setup tailwind and required plugins

### Development:
`npm run build` for single time compiling
`npm run watch` for constant development (currently not working due to <a href="https://github.com/metaknoten/knotentheme/issues/4">#4</a>)

### Production:
`npm run prod` for production compiling. **Don't forget to turn on production mode in the theme config** 

### Deployment
The Github action ensures that the theme get's published to the corresponding webspace. It runs `npm install && npm run prod`

## Plugins installed
* Admin Panel
* Email
* Error
* Flex Objects
* Form
* LangSwitcher (with the option: `built_in_css: false`)
* Login
* Markdown Notices
* Problems
* Shortcode Core
* Shortcode Gallery++
