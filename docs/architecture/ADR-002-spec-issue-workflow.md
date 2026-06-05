# ADR-002 — Spec-First, Issue-Tracked Workflow

## Status
Accepted.

## Decision
Keep GitHub Issue as the execution trigger, but require every issue to derive from the spec layer (`docs/product/`). Order: PRD/FEATURE_SPEC → Issue → branch → implement → verify → PR. The spec is the source of truth; issues and code are derived artifacts.

## Reason
The prior pack was workflow-only (spec-first, issue-tracked) with no upstream spec, causing free-form scope. Spec-Driven Development (ref: github/spec-kit) treats the specification as primary. A thin spec layer adds traceability without the overhead of full SDD tooling for a small portfolio.

## Consequences
- `AI_WORKFLOW.md` Intake step must cite a Feature ID from `FEATURE_SPEC.md`.
- Changing intent means editing the PRD/spec first, then regenerating issues.
