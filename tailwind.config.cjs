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
          200: withOpacity("--base-200"),
          300: withOpacity("--base-300"),
          content: withOpacity("--base-content"),
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
          primary: "hsl(10 100% 55%)",
          "--primary": "10 100% 55%",

          "base-100": "hsl(215 25% 15%)",
          "--base-100:": "215 25% 15%",

          "base-200": "hsl(215 25% 10%)",
          "--base-200:": "215 25% 10%",

          "base-300": "hsl(215 25% 5%)",
          "--base-300:": "215 25% 5%",

          "base-content": "hsl(215 25% 80%)",
          "--base-content": "215 15% 80%",
        },
      },
    ],
    logs: false,
  },
}
