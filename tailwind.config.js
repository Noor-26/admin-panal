/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#153AC7",
        
"secondary": "#5b6ebf",
        
"accent": "#ccf9ff",
        
"neutral": "#282734",
        
"base-100": "#EFF1F6",
        
"info": "#2D90E6",
        
"success": "#2CDD76",
        
"warning": "#FBAF3C",
        
"error": "#FB6A89",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
