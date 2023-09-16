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
      colors: {},
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

          "base-100": "hsl(215 20% 14%)",
          "base-200": "hsl(215 20% 12%)",
          "base-300": "hsl(215 20% 10%)",
          "base-content": "hsl(215 20% 85%)",
        },
      },
    ],
    logs: false,
  },
}
