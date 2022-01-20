module.exports = {
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
