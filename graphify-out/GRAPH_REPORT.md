# Graph Report - .  (2026-06-03)

## Corpus Check
- 89 files · ~100,098 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 329 nodes · 354 edges · 43 communities (33 shown, 10 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 32 edges (avg confidence: 0.84)
- Token cost: 150 input · 60 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Components & Routing|Page Components & Routing]]
- [[_COMMUNITY_Angular Project Configuration|Angular Project Configuration]]
- [[_COMMUNITY_App Core & Features|App Core & Features]]
- [[_COMMUNITY_Build & Deploy Targets|Build & Deploy Targets]]
- [[_COMMUNITY_Dev Dependencies & Git Hooks|Dev Dependencies & Git Hooks]]
- [[_COMMUNITY_OpenCode AI Settings|OpenCode AI Settings]]
- [[_COMMUNITY_Package & Commit Config|Package & Commit Config]]
- [[_COMMUNITY_Angular Core Dependencies|Angular Core Dependencies]]
- [[_COMMUNITY_Component HTML Templates|Component HTML Templates]]
- [[_COMMUNITY_Angular Build Options|Angular Build Options]]
- [[_COMMUNITY_Email Service & CICD|Email Service & CI/CD]]
- [[_COMMUNITY_External Docs Manifest|External Docs Manifest]]
- [[_COMMUNITY_AI Tool Configurations|AI Tool Configurations]]
- [[_COMMUNITY_Numble Math Game|Numble Math Game]]
- [[_COMMUNITY_Stock E-Commerce App|Stock E-Commerce App]]
- [[_COMMUNITY_Task Manager App|Task Manager App]]
- [[_COMMUNITY_KeyboardMasters Typing App|KeyboardMasters Typing App]]
- [[_COMMUNITY_Quiz Web Application|Quiz Web Application]]
- [[_COMMUNITY_Coffee Shop App|Coffee Shop App]]
- [[_COMMUNITY_Minesweeper Game|Minesweeper Game]]
- [[_COMMUNITY_Angular v20 Upgrade & CI|Angular v20 Upgrade & CI]]
- [[_COMMUNITY_Git Commit Quality Gates|Git Commit Quality Gates]]
- [[_COMMUNITY_BeMy Social App|BeMy Social App]]
- [[_COMMUNITY_Checkers Board Game|Checkers Board Game]]
- [[_COMMUNITY_Clinic Booking App|Clinic Booking App]]
- [[_COMMUNITY_Project Root Config|Project Root Config]]
- [[_COMMUNITY_PostCSS Tailwind Config|PostCSS Tailwind Config]]
- [[_COMMUNITY_Color Tap Game|Color Tap Game]]
- [[_COMMUNITY_Resume Builder App|Resume Builder App]]
- [[_COMMUNITY_VSCode Debug Config|VSCode Debug Config]]
- [[_COMMUNITY_VSCode Task Config|VSCode Task Config]]
- [[_COMMUNITY_Angular Test Setup|Angular Test Setup]]
- [[_COMMUNITY_npm Security Docs|npm Security Docs]]
- [[_COMMUNITY_Tailwind Integration|Tailwind Integration]]
- [[_COMMUNITY_VSCode Extensions|VSCode Extensions]]
- [[_COMMUNITY_RTK Agent Rules|RTK Agent Rules]]
- [[_COMMUNITY_Developer Profile Photo|Developer Profile Photo]]

## God Nodes (most connected - your core abstractions)
1. `options` - 10 edges
2. `schematics` - 9 edges
3. `scripts` - 8 edges
4. `HeaderComponent` - 8 edges
5. `portfolio` - 7 edges
6. `options` - 7 edges
7. `github` - 7 edges
8. `ButtonComponent` - 7 edges
9. `CustomCursorDirective` - 7 edges
10. `architect` - 6 edges

## Surprising Connections (you probably didn't know these)
- `permissions` --semantically_similar_to--> `hooks`  [INFERRED] [semantically similar]
  .claude/settings.local.json → .gemini/settings.json
- `GitHub Actions Deploy Workflow` --references--> `Environment EmailService Config`  [EXTRACTED]
  .github/workflows/deploy.yml → src/environments/example.environment.ts
- `hooks` --references--> `Graphify Knowledge Graph Output`  [EXTRACTED]
  .gemini/settings.json → graphify-out/graph.json
- `package.json - Portfolio Angular` --conceptually_related_to--> `angular.json - Angular CLI Config`  [INFERRED]
  package.json → angular.json
- `Portfolio Gemini Configuration (graphify instructions)` --conceptually_related_to--> `Portfolio Angular README`  [INFERRED]
  GEMINI.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Git Commit Quality Gates (Husky + Commitlint)** — husky_h_dispatcher, husky_commit_msg_hook, commitlint_validation [EXTRACTED 0.95]
- **AI Tooling Configuration (Claude + Gemini)** — claude_settings_local_permissions, gemini_settings_hooks, graphify_out_graph [INFERRED 0.75]
- **Pages consuming ButtonComponent with Router navigation** — pages_about_me_component, pages_introduction_component, pages_contact_component [EXTRACTED 1.00]
- **Angular Application Bootstrap Chain** — app_app_component, app_app_config, app_app_routes [INFERRED 0.95]
- **Git Commit Quality Tooling** — app_package_json, app_commitlint_config, app_angular_json [INFERRED 0.75]
- **Environment Config Injection in CI/CD** — github_workflows_deploy, environments_example_environment, environment_emailservice_config [INFERRED 0.90]
- **TypeScript Config Inheritance Hierarchy** — root_tsconfig, root_tsconfig_app, root_tsconfig_spec [EXTRACTED 1.00]
- **Main Page Component Composition** — pages_main_maincomponent, pages_portfolio_portfoliocomponent, src_main [INFERRED 0.85]
- **CI Pipeline: npm ci, optional deps, and GitHub Actions for Angular 20** — github_actions_angular20_workflow, npm_ci_optional_deps_strategy, tailwind_oxide_ci_failures [INFERRED 0.85]
- **Main Page Composes All Portfolio Sections** — main_component_html, introduction_component_html, about_me_component_html, portfolio_component_html, contact_component_html [EXTRACTED 1.00]
- **Button Component Reused Across Multiple Pages** — button_component_html, introduction_component_html, about_me_component_html, portfolio_component_html [EXTRACTED 1.00]

## Communities (43 total, 10 thin omitted)

### Community 0 - "Page Components & Routing"
Cohesion: 0.13
Nodes (12): AboutMeComponent, ButtonComponent, ButtonComponent, Angular SPA Routing, ContactComponent, IntroductionComponent, MainComponent, AboutMeComponent (+4 more)

### Community 1 - "Angular Project Configuration"
Cohesion: 0.07
Nodes (28): newProjectRoot, prefix, projectType, root, schematics, sourceRoot, projects, portfolio (+20 more)

### Community 2 - "App Core & Features"
Cohesion: 0.09
Nodes (11): AppComponent, appConfig, routes, HeaderComponent, Custom Cursor Interaction, Dark Mode Theme Toggle, CustomCursorDirective, HeaderComponent (+3 more)

### Community 3 - "Build & Deploy Targets"
Cohesion: 0.09
Nodes (25): build, deploy, extract-i18n, serve, test, builder, configurations, defaultConfiguration (+17 more)

### Community 4 - "Dev Dependencies & Git Hooks"
Cohesion: 0.11
Nodes (18): husky.sh script, devDependencies, @angular/cli, angular-cli-ghpages, @angular/compiler-cli, @angular-devkit/build-angular, @commitlint/cli, @commitlint/config-conventional (+10 more)

### Community 5 - "OpenCode AI Settings"
Cohesion: 0.11
Nodes (17): command, enabled, type, enabled, headers, oauth, timeout, type (+9 more)

### Community 6 - "Package & Commit Config"
Cohesion: 0.12
Nodes (16): path, config, commitizen, cz-customizable, config, name, private, scripts (+8 more)

### Community 7 - "Angular Core Dependencies"
Cohesion: 0.12
Nodes (16): dependencies, @angular/animations, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/platform-browser-dynamic (+8 more)

### Community 8 - "Component HTML Templates"
Cohesion: 0.29
Nodes (11): About Me Page Template, App Root Component Template, Button Component Template, Contact Page Template, Header Component Template, App Entry HTML (index.html), Introduction Page Template, Main Page Template (aggregates all page sections) (+3 more)

### Community 9 - "Angular Build Options"
Cohesion: 0.27
Nodes (11): options, assets, browser, index, inlineStyleLanguage, outputPath, polyfills, scripts (+3 more)

### Community 10 - "Email Service & CI/CD"
Cohesion: 0.22
Nodes (8): EmailJS External Library, Environment EmailService Config, environment, environment, GitHub Actions Deploy Workflow, MainComponent, PortfolioComponent, EmailService

### Community 11 - "External Docs Manifest"
Cohesion: 0.20
Nodes (9): files, last_updated, libraries, github-actions, npm, tailwind-css, files, files (+1 more)

### Community 12 - "AI Tool Configurations"
Cohesion: 0.22
Nodes (7): permissions, allow, Gemini Graphify Graph Awareness Hook, hooks, BeforeTool, Graphify Knowledge Graph Output, RTK Bash Permission Allowlist Pattern

### Community 13 - "Numble Math Game"
Cohesion: 0.29
Nodes (7): Numble Math Game Application, Instruction Button, Logout Button, Math Skills Educational Game, Numble App Screenshot, Start Game Button, Dark Theme UI Design

### Community 14 - "Stock E-Commerce App"
Cohesion: 0.38
Nodes (7): Stock Data E-Commerce Application, Category Browsing UI, Flaticon / Freepik Icon Assets, Navigation Bar with Search and Notification, Pakaian (Clothing) Category Card, Stock Data App - Category Page Screenshot, Sepatu (Shoes) Category Card

### Community 15 - "Task Manager App"
Cohesion: 0.38
Nodes (7): Task Master Application, Daily Task Category, Dark Theme UI Design, Monthly Task Category, Task Master App Screenshot, Task Management Feature, Weekly Task Category

### Community 16 - "KeyboardMasters Typing App"
Cohesion: 0.29
Nodes (7): KeyboardMasters.org Typing Platform, User Authentication (Login/Register), Leaderboard Feature, Themes Feature, Typing Test Feature, Typing Game Project Screenshot, Angular Framework (30 Days of Angular)

### Community 17 - "Quiz Web Application"
Cohesion: 0.33
Nodes (6): QuizApp Web Application, Card Grid Layout Pattern, Create Quiz Feature, Quiz History Feature, Quiz List Feature, QuizApp Screenshot

### Community 18 - "Coffee Shop App"
Cohesion: 0.40
Nodes (5): Coffee Shop E-Commerce Web Application, Best Seller Product Listing Section, Hero Section with Tagline and Description, Coffee Shop Project Screenshot, Navigation Bar with Home, Category, Blog, About, Contact

### Community 19 - "Minesweeper Game"
Cohesion: 0.70
Nodes (5): Minesweeper Game, Game Over State, Minesweeper Grid Board, Minesweeper Game Screenshot, Game Timer Display

### Community 20 - "Angular v20 Upgrade & CI"
Cohesion: 0.67
Nodes (4): Angular v19 to v20 Upgrade Compatibility, Angular 20 GitHub Actions setup-node Workflow Patterns, npm ci Optional Dependencies Strategy for CI, Tailwind CSS Oxide Native Binding CI Failures on GitHub Actions

### Community 21 - "Git Commit Quality Gates"
Cohesion: 0.50
Nodes (4): Commitlint Commit Message Validation, Husky commit-msg Hook, Husky Hook Dispatcher Script, Husky Legacy Shell Wrapper (Deprecated)

### Community 22 - "BeMy Social App"
Cohesion: 0.83
Nodes (4): BeMy.id Web Application, BeMy Navigation Bar, BeMy.id Project Screenshot, BeMy Hero Section UI

### Community 23 - "Checkers Board Game"
Cohesion: 0.67
Nodes (4): Checkers Board Game Application, Checkers Game Screenshot, Turn-Based Two-Player Game Mechanic, Checkers Game UI Layout

### Community 24 - "Clinic Booking App"
Cohesion: 0.50
Nodes (4): Klinik Google Web Application, Appointment Booking Feature, Online Registration Feature, Klinik Google Screenshot

### Community 27 - "Color Tap Game"
Cohesion: 1.00
Nodes (3): Color Combo Tap Game, Color Combo Tap - Game Screenshot, Color Combo Tap Login/Start Screen

### Community 28 - "Resume Builder App"
Cohesion: 1.00
Nodes (3): Resume Builder Application, Edit Resume Form UI, Resume Builder App Screenshot

## Knowledge Gaps
- **151 isolated node(s):** `allow`, `BeforeTool`, `husky.sh script`, `@tailwindcss/postcss`, `version` (+146 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `architect` connect `Build & Deploy Targets` to `Angular Project Configuration`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `portfolio` connect `Angular Project Configuration` to `Build & Deploy Targets`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `allow`, `BeforeTool`, `husky.sh script` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Components & Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.13054187192118227 - nodes in this community are weakly interconnected._
- **Should `Angular Project Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `App Core & Features` be split into smaller, more focused modules?**
  _Cohesion score 0.09401709401709402 - nodes in this community are weakly interconnected._
- **Should `Build & Deploy Targets` be split into smaller, more focused modules?**
  _Cohesion score 0.08666666666666667 - nodes in this community are weakly interconnected._