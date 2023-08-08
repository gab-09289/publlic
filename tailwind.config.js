/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    container: {
      center: true,
      padding: '25px'
    },
    extend: {
      backdropBlur: {
        'biasa-': '20px'
      },
      backgroundImage: {
        'hero-img': "url('https://i.pinimg.com/originals/91/d7/fb/91d7fb01a2c4ad831a07c147d8138237.jpg')",
        'woolen-w': "url('https://i.pinimg.com/originals/50/46/56/5046566ee9168d4927c3f11ae4c96cf2.png')",
        'noteen-': "url('https://i.pinimg.com/564x/8f/0d/4c/8f0d4c11b3e018b0392b6c8b53bd4ecc.jpg')",
        'redesign-upt': "url('https://i.pinimg.com/564x/21/0a/52/210a5266c730fd5c93909011f8e2b776.jpg')",
        'cac-ti': "url('https://i.pinimg.com/564x/09/a1/c1/09a1c1607c531b2be8f32e0563dc72e3.jpg')",
        'footer-portofolio': "url('https://i.pinimg.com/236x/70/ab/d0/70abd0c955e452cf16cd47b9997697e4.jpg')",
        'footer-portofolio-sm': "url('https://i.pinimg.com/564x/22/ed/8e/22ed8ea0e7dba2815ff9739ef954c315.jpg')",
        'gojo-': "url('https://custom-doodle.com/wp-content/uploads/doodle/jujutsu-kaisen-satoru-gojo-pixel/jujutsu-kaisen-satoru-gojo-pixel-doodle.gif')",
        'hero-portofolio': "url('https://i.pinimg.com/originals/bc/24/b2/bc24b2dd54aeb8d2cb19593a6fef29f0.gif')",
        'b&t-': "url('https://i.pinimg.com/originals/0d/63/49/0d6349b7d8bd278fb9c8a66581a97071.png')",
        'search-icon': "url('https://i.pinimg.com/236x/d0/db/51/d0db51bfb8797366caebdf2a238849f0.jpg')"
      },
      dropShadow: {
        '4xl': '-15px 15px rgba(41,39,39,1)',
        '3xl': '-10px 5px rgba(41, 39, 39, 1)',
        '2xl': '-3px 3px rgba(41, 39, 39, 1)'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        drop: '-5px 5px rgba(41, 39, 39, 1)',
        none: 'none',
        inner: 'inset 2px 2px 10px 2px rgba(0, 0, 0, 0.30)'
      }
    }
  },
  plugins: []
}
