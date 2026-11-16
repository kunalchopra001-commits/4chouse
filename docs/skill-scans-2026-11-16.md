# Skill security scans (16 Nov 2026)

Scanner: NVIDIA SkillSpector (github.com/NVIDIA/SkillSpector), static mode (`--no-llm`, no file contents sent to an AI provider). Each skill folder was scanned on its own, then every High/Critical finding and every finding inside a script was checked by hand.

| Repo | Skills | Highest score | Verdict |
|---|---|---|---|
| Jakeschincariol/instagram-agent-skill (MIT) | 13 | 13 | **Clean.** 4 medium flags, nothing in its Python scripts (hook scorer, caption linter, humanizer run locally). Safe to install. |
| coreyhaines31/marketingskills (MIT) | 53 | 100 | **False alarms; safe to install selectively.** The 6 "critical" flags are the word "Arsenic" in a sample protein-powder ad ("tested for heavy metals"). Most "high" flags are wording like "never judge", "without warning", "don't refuse" in marketing advice, or partly-read reference files. Code flags are calls to public APIs (SEC, FDIC, GitHub, npm, crt.sh) in the competitor-teardown script; it uses a GitHub token only if one is set, and sends it only to GitHub. No credential theft, no hidden instructions found. |
| remotion-dev/skills (official) | 13 | 100 | **Safe.** Flags are map-tile APIs (Mapbox, MapTiler) in the maps technique and unpinned `npx` commands. |
| Remocn/remocn (MIT) | 5 + plugin | 47 | **Safe with one exclusion.** Scripts only scaffold Remotion projects and check whether the Remotion Studio app is installed. The `hooks/` folder is React hooks, not Claude hooks. The plugin also registers a remote MCP server (`https://remocn.dev/mcp`, no login): install the skills without that server. Components are code added to a project: read each before use. |

## Rules applied
- Install only the skills we will use, not whole collections (each one adds to every session's context).
- Never install a plugin's MCP server or hooks without reading them first.
- Re-scan after updating any skill.
