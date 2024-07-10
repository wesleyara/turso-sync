<h1 align="center" title="Vite Helper">
  Turso Sync
</h1>

<h2 align="center">Turso Sync is a CLI to manage the Turso database.</h2>

<div align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/turso-sync.svg?style=flat-square)](https://www.npmjs.com/package/turso-sync)
[![npm downloads](https://img.shields.io/npm/dm/turso-sync.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

<h4 align="center">
 <a href="#-how-use">🚀 How use</a> •
 <a href="#-contributing">📝 Contributing</a> •
 <a href="#-thanks">🧑 Thanks</a> •
 <a href="#-license">📄 License</a>
</h4>

<br>

# 🚀 How use

First, install the Turso CLI globally on your machine, using the [tutorial](https://docs.turso.tech/cli/introduction). After that, you are ready to use the Turso Sync CLI.

Utilization is very simple, just run the command:

```bash
# for open the CLI
npx turso-sync

# for execute a command
npx turso-sync <command>
```

Answer the questions (When choosing the tool, use the arrows keys to navigate, the spacebar to select and enter to finish)

# 📦 Commands

- `npx turso-sync create <name>`: Create a new database;
- `npx turso-sync destroy <name>`: Delete a database;
- `npx turso-sync list`: List all databases;
- `npx turso-sync create-token <name>`: Create a new token for a database;
- `npx turso-sync migrate <name> <dir_path>`: Migrate a database;

# 📝 Contributing

Your contribution to the `turso-sync` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/turso-sync/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/turso-sync/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/turso-sync/blob/main/.github/CONTRIBUTING.md) for more information

# 🧑 Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# 📄 License

turso-sync is a open source project licensed as [MIT](LICENSE).