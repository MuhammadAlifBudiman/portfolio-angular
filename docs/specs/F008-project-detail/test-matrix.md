# Test Matrix — F008: Project Detail / Case-Study Route

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Test Cases

| ID | Description | Type | Pass Criteria |
|---|---|---|---|
| TM-F008-1 | Case-study route renders in EN | Unit/E2E | EN content visible, no untranslated keys |
| TM-F008-2 | Case-study route renders in ID | Unit/E2E | ID content visible, no untranslated keys |
| TM-F008-3 | No raw URL text in prose | Manual | All links use descriptive labels |
| TM-F008-4 | BKN claims are factually correct | Manual | Dates and claims match authoritative corrections |
| TM-F008-5 | All 5 featured projects have case-study CTAs | Manual/Unit | CTA buttons present and route correctly |
| TM-F008-6 | Build succeeds | CI | `npm run build` exits 0 |
