# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## Setup
---

- Make sure to install the dependencies:

  ```bash
  # yarn
  npx husky-init  && yarn install
  ```

## Husky
----

  > ### Setup :

  - Install commitlint with a config, which will be used to lint your commit message: 
    ```bash
    yarn add @commitlint/{cli,config-conventional}
    ```
  - As we are using config-conventional we are automatically following the [Angular commit convention.](https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/#:~:text=Angular%20commit%20convention)
  Now we need to tell Husky to run commitlint during the Git commit hook. Therefore, we need to add a commit-msg file to the .husky folder:
    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    npx --no-install commitlint --edit "$1"
    ```

  - Finally, we create a .commitlintrc.json file which extends the rules from config-conventional:
    ```bash
    {
      "extends": ["@commitlint/config-conventional"]
    }
    ```

  > ### Alert :

  - Fix "The '.husky/commit-msg' hook was ignored because it's not set as executable."

    ```bash
    #terminal
    chmod ug+x .husky/*
    ```

## Generate Changelog
---
  > ### Install
  - 
    ```bash
      npm i --save-dev standard-version
    ```
    Now we can create some npm scripts in our package.json:
    ```bash
      "scripts": {
        "release": "standard-version",
        "release:minor": "standard-version --release-as minor",
        "release:patch": "standard-version --release-as patch",
        "release:major": "standard-version --release-as major"
      },
    ```
    The changelog generation can be configured via a .versionrc.json file or placing a standard-version stanza in your package.json.

    In our demo we use a .versionrc.json file based on the [Conventional Changelog Configuration Spec:](https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/#:~:text=In%20our%20demo%20we%20use%20a%20.versionrc.json%20file%20based%20on%20the%20Conventional%20Changelog%20Configuration%20Spec%3A)

    ```bash
    {
      "types": [
        { "type": "feat", "section": "Features" },
        { "type": "fix", "section": "Bug Fixes" },
        { "type": "chore", "hidden": true },
        { "type": "docs", "hidden": true },
        { "type": "style", "hidden": true },
        { "type": "refactor", "hidden": true },
        { "type": "perf", "hidden": true },
        { "type": "test", "hidden": true }
      ],
      "commitUrlFormat": "https://github.com/mokkapps/changelog-generator-demo/commits/{{hash}}",
      "compareUrlFormat": "https://github.com/mokkapps/changelog-generator-demo/compare/{{previousTag}}...{{currentTag}}"
    }
    ```
  An array of type objects represents the explicitly supported commit message types, and whether they should show up in the generated changelog file. commitUrlFormat is an URL representing a specific commit at a hash and compareUrlFormat is an URL representing the comparison between two git shas.
  
  >### Release 
  - The first release can be created by running npm run release -- --first-release in the terminal:
  ```bash
    ▶ npm run release -- --first-release

    > changelog-generator-demo@0.0.0 release /Users/mhoffman/workspace/changelog-generator-demo
    > standard-version "--first-release"

    ✖ skip version bump on first release
    ✔ created CHANGELOG.md
    ✔ outputting changes to CHANGELOG.md
    ✔ committing CHANGELOG.md
    ✔ tagging release v0.0.0
    ℹ Run `git push --follow-tags origin master` to publish
  ```



## Development Server
---

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
