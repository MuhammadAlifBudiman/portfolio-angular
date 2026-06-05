#!/usr/bin/env python3
"""Guardrail template for Claude Code PreToolUse hooks.
Blocks source edits when the prompt does not include a ready Feature ID / issue context.
Adjust wiring in `.claude/settings.local.json` according to the local Claude Code hook schema in use.
"""
import json
import re
import sys

payload = json.load(sys.stdin)
text = json.dumps(payload)
path = text.lower()

is_source_edit = any(token in path for token in ["src/", "angular.json", "package.json", "package-lock.json"])
if not is_source_edit:
    sys.exit(0)

has_feature = re.search(r"\bF\d{3}\b", text) is not None
has_issue = re.search(r"#\d+|issue", text, re.IGNORECASE) is not None
has_clarification = "[NEEDS CLARIFICATION" in text

if not has_feature or not has_issue or has_clarification:
    print("Blocked: source edits require Feature ID, issue context, and no unresolved [NEEDS CLARIFICATION] markers.")
    sys.exit(2)

sys.exit(0)
