# ModForge Reality Roadmap

This marketplace started as a storefront demo. The next phase is turning each listing into real Minecraft projects.

## Current Real Project

- `Titan Leap Blades`
  - GitHub: `https://github.com/KolTheGoat/titan-leap-blades`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom blades, leap ability, slam shockwave, operator give command
- `Earthbreaker Hammer`
  - GitHub: `https://github.com/KolTheGoat/earthbreaker-hammer`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom hammer, right-click ground smash, area damage, knockback ring, operator give command
- `Thunderlord Hammer`
  - GitHub: `https://github.com/KolTheGoat/thunderlord-hammer`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom hammer, charged leap, landing lightning smash, chain lightning damage, operator give command
- `Warden Crusher`
  - GitHub: `https://github.com/KolTheGoat/warden-crusher`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom mace, sonic leap, landing sculk shockwave, area damage, knockback, operator give command
- `Cloudrunner Boots`
  - GitHub: `https://github.com/KolTheGoat/cloudrunner-boots`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom boots, right-click leap, one air charge, safe landing, operator give command
- `GearSmith Recipes`
  - GitHub: `https://github.com/KolTheGoat/gearsmith-recipes`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable Titan, Storm, Sculk, and Cloud cores, recipe-list command, operator give command
- `BossDrop Crafting`
  - GitHub: `https://github.com/KolTheGoat/bossdrop-crafting`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: boss material drops, craftable Boss Core, `/bossdrop list`, `/bossdrop give`, `/bossdrop summon`

## Build Rules

Every major implementation should be committed and pushed after it is complete.

Each real listing repo should include:

- `README.md`
- Build file, usually Gradle
- Source code
- Plugin or mod metadata
- GitHub Actions build workflow
- Install instructions
- Clear notes about supported Minecraft version and platform

## Recommended Order

Build Paper/Purpur/Spigot plugins first because they can be server-side and share a common code pattern.

1. Titan Leap Blades
2. Earthbreaker Hammer
3. Thunderlord Hammer
4. Warden Crusher
5. Cloudrunner Boots
6. GearSmith Recipes
7. BossDrop Crafting
8. Custom Ability Core

After the server plugins are stable, build loader-specific mods for Fabric, Forge, NeoForge, and Quilt.

## Important Scope Note

The marketplace contains 70 listings. Turning every listing into a real, tested project is a large development program, not a single file upload. Repositories should not be created as empty placeholders; each repo should contain working source code or a clearly marked template.
