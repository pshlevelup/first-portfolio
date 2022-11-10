module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      "large":{max:'1300px'},
      "tv":{max:'1200px'},
      "pc":{max:'992px'},
      "laptop":{max:'768px'},
      "tablet":{max:'640px'},
      "iphone":{max:'480px'},
      "galaxy":{max:'360px'},
      "ipad":{max:'320px'}
    },
    extend: {
      colors:{
        'main': '#ff3366',
        'content': '#646464',
        'confirm': '#66e1bb',
        'back-1': '#fff',
        'back-2': '#f9f9f9',
        'footer': '#fffcf4' 
      }
    },
  },
  plugins: [],
}
