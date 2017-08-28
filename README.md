# static

Static homepage content for HackPrinceton. GitHub Pages is configured to deploy this site out of the `master` branch.

## Setup

This repo uses Jekyll as its static site engine. Install Jekyll and the necessary plugins, as well as stylesheet dependencies, by running the following commands:

```
git submodule update --init --recursive
gem install bundler
bundle install
```

More detailed installation instructions are available on the [Jekyll website](https://jekyllrb.com/docs/installation/).

To start a local server for the site, run this command:

```
bundle exec jekyll serve
```

This will start a development server at `localhost:4000`. It will automatically reload when you save changes, unless you modify `_config.yml`, in which case you must manually restart the server. In some cases, you may also need to restart the server after modifying data files in `_data`.

All Sass files are compiled automatically, so you do not need to manually compile them into CSS. To add any new Sass files to the build, save it into the `_sass` directory and append an `@import` entry to `css/style.scss`. Shared styles are imported via a Git submodule from the [styles](https://github.com/hackprinceton/styles) repo.

## License

The content on this site is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). The source code is licensed under the [MIT License](https://github.com/princetoneclub/hp-static-s17/blob/master/LICENSE).
