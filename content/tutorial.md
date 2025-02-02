+++
date = '2025-01-30T15:46:10+10:00'
draft = true
title = 'Tutorial'
+++

### Setup
- Install Hugo
- Use Bash
- Go to directory
- `hugo new site foo`

### Folders
- archetypes - templates
- assets
- content - `.md` files
- data - data holding e.g. JSONs
- il8n
- layout - fractional parts of pages
- static - images, .css files
- themes - different themes that can be installed
- `hugo.toml` - config

### Themegit submodule add s
- Best added as submodules
- `git submodule add https://github.com/person/gitname.git themes/gitname`

### Files
- New file `hugo new foo.md`
- New file in folder `hugo new dir/foo.md` < dir is reflected in url

### Organisation
- Single Pages
- List Pages

### _index Pages
- Add _index pages to add things to list pages
- Some themes change how these indexes show
- [Title on index chooses the plural form](https://stackoverflow.com/questions/68683770/change-a-content-sections-name-in-the-url)


### Front Matter
- Metadata about the file, variables - not content
- Can be TOML [+++], YAML [\-\-\-], JSON

### Archetypes
- Templates for new `.md` files
- Directory name chooses archetype file used

### Shortcodes
- https://gohugo.io/shortcodes/
- `{{</* short-code var */>}}`
- YT shortcode `{{</* youtube w7Ft2ymGmfc */>}}`
{{< youtube w7Ft2ymGmfc >}}

### Taxonomy
- `tags = ["tag"]`
- `categories = ["cat"]`
- Handy way to group content
- Can create custom taxonomies



### PostCSS IF TAILWIND
https://gohugo.io/functions/resources/postprocess/
npm i -D postcss postcss-cli autoprefixer @fullhuman/postcss-purgecss