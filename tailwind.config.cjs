function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        base: {
          100: withOpacity("--base-100"),
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "hsl(20 100% 55%)",
          "--primary": "15 100% 55%",

          "base-100": "hsl(225 25% 20%)",
          "--base-100:": "225 25% 20%",

          "base-200": "hsl(225 25% 15%)",
          "--base-200:": "225 25% 15%",

          "base-300": "hsl(225 25% 10%)",
          "--base-300:": "225 25% 10%",
        },
      },
    ],
    logs: false,
  },
}
