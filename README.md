
## Quick Start

The best way to start with this template is to click "Use this template" above, create your own copy and work with it

### Development

To start the project locally, run:
```bash
yarn dev
```
which kickstarts the nuxt3 development and build server `nuxi`. Open `http://localhost:3000` with your browser to see the result.

Check `package.json` for the full list of commands available at your disposal.

## Known Issues

- [ESLint](https://github.com/nuxt/eslint-config/issues/171) - Once the issue is resolved you can add
```json
        "*.+(js|ts|vue)": [
            "yarn run lint"
        ],
```
in `package.json` under the `lint-staged` section for linting on commits
