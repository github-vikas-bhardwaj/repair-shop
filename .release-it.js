module.exports = {
  git: {
    requireCleanWorkingDir: true,
    requireUpstream: true,
    commitMessage: "chore(release): ${version}",
    tagName: "v${version}",
    push: true,
    pushArgs: ["--set-upstream", "origin", "release/v${version}"],
    requireBranch: "release/.*", // ✅ regex as string, not RegExp object
  },
  github: {
    release: true,
    releaseName: "Release ${version}",
    autoGenerate: true,
  },
  npm: {
    publish: false,
  },
  hooks: {
    "before:init": "npx lint-staged",
  },
};
