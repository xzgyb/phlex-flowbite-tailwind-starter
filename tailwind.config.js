module.exports = {
  content: [
    './app/views/**/*.rb', // Phlex views
    './app/components/**/*.rb', // Phlex components
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ]
}
