/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayisMagenta: "hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        League: ["League Spartan"],
      },
      backgroundImage: {
        "bg-desktop": " url('/src/images/bg-pattern-top-desktop.svg') ",
        "bg-desktopBottom":
          " url('/src/images/bg-pattern-bottom-desktop.svg') ",
      },
    },
  },
  plugins: [],
};
