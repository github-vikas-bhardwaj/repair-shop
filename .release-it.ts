import type { Config } from "release-it";

const config: Config = {
  git: {
    requireCleanWorkingDir: true, // Ensures no uncommitted changes
    requireUpstream: false, // Good for CI, avoids upstream errors
    commitMessage: "chore(release): ${version}", // Conventional commit style
    tagName: "v${version}", // Tags like v1.2.3
    push: true, // Pushes tag + commit back to GitHub
    requireBranch: "release/**", // Only runs on release/* branches
  },
  github: {
    release: true, // Creates a GitHub Release
    releaseName: "Release ${version}", // Title of the release
    autoGenerate: true, // Autogenerates release notes
  },
  npm: {
    publish: false, // Skips npm publish
  },
  hooks: {
    "before:init": "npx lint-staged", // Runs lint-staged before release
  },
};

export default config;
