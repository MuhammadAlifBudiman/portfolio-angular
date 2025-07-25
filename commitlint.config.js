// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "chore",
        "ci",
        "build",
        "revert",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "animations",
        "api",
        "auth",
        "changelog",
        "common",
        "config",
        "core",
        "forms",
        "http",
        "language-service",
        "localization",
        "migration",
        "packaging",
        "router",
        "service-worker",
        "upgrade",
        "user",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-full-stop": [2, "never", "."],
  },
};
