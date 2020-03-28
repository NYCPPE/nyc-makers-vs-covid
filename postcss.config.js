module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx,ts,tsx,mdx,md}',
              './components/**/*.{js,jsx,ts,tsx,mdx,md}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        ]
      : undefined,
    'postcss-preset-env'
  ]
}
