# makers-vs-covid

Website for consolidating information on making PPE for the COVID-19 Outbreak.

## How to develop and build the site

To run the site locally `yarn` and then `yarn dev`.

## How to deploy your changes

Just push your latest changes to master. Another method is to use the built in github editor and just makes changes and submit, the changes will be automatically deployed.

## How developing with next and mdx works

To build a static site (output will be placed in the `out` directory) run `yarn build && yarn export`. You can deploy this `out` directory to any server.

Anything you place in the `public` folder will be exported untouched.

Anything you place in pages, will be compiled into html.

This site uses next.js and mdx to build pages. This allows people to write raw markdown in the pages directory to make new pages, write react inside of `.mdx` files to make custom markdown pages, or just write raw react for super custom pages and data stuff.

If you are writing raw `.html` files, place them in the `public` folder.

## How to make new pages

Make a new file ending in `.mdx` in the pages directory. Nesting directories works.

You can also write `.jsx` files in pages and use react.

## How to style the layouts

This project comes with tailwindcss to make styling faster. It also includes the github markdown standard css file. You can also just add classes to html files via `styles/index.css` and write css how you usually would. If you are writing using.mdx there is not a lot of customization, but there are a few included blocks like: `[[info]] , [[alert]] , [[warning]], [[success]]` which will style your markdown.

## Formatting your changes

Sometimes formatting gets off but fear not we have added a script -- simply run `yarn format` and it will format any code that you have modified to our consistent style.

There is a .prettierrc file which specifies the configuration for [prettier](https://prettier.io/). We use another package, [pretty-quick](https://github.com/azz/pretty-quick#readme) to run the formatter on files you've modified.
