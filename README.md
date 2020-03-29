# makers-vs-covid

Website for consolidating information on making PPE for the COVID-19 Outbreak.

## How to develop and build the site

To get run the site locally `yarn` and then `yarn dev`.

To build a static site (output will be placed in the `out` directory) run `yarn build && yarn export`

Anything you place in the `public` folder will be exported untouched.

Anything you place in pages, will be compiled into html.

This site uses next.js and mdx to build pages. This allows people to write raw markdown in the pages director to make new pages, write react inside of .mdx files to make custom markdown pages, or just write raw react for super custom pages and data stuff.

If you are writing raw .html files, place them in the public folder.

## How to make new pages

Make a new file ending in .md or .mdx in the pages directory. Nesting directories works.
You can also write .js files in pages and use react.

## How to style the layouts

This project comes with tailwindcss to make styling faster. It also includes the github markdown standard css file. You can also just add classes to html files via `styles/index.css` and write css how you usually would. If you are writing using .md or .mdx there is not a lot of customization, but there are a few included blocks like: `[[info]] , [[alert]] , [[warning]]` which will style your markdown.
