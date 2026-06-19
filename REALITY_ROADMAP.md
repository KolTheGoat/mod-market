# ModForge Reality Roadmap

This marketplace started as a storefront demo. The next phase is turning each listing into real Minecraft projects.

## Current Real Projects

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
- `Custom Ability Core`
  - GitHub: `https://github.com/KolTheGoat/custom-ability-core`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: Leap, Smash, Lightning, Lifesteal, Beam, and Dash scrolls, persistent ability metadata, list/give/inspect commands
- `Stormcaller Trident`
  - GitHub: `https://github.com/KolTheGoat/stormcaller-trident`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom trident, storm dash, thrown lightning hit, chain lightning damage, operator give command
- `Inferno Gauntlets`
  - GitHub: `https://github.com/KolTheGoat/inferno-gauntlets`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom gauntlets, forward fire wave, ignite effect, launch effect, operator give command
- `Voidstep Daggers`
  - GitHub: `https://github.com/KolTheGoat/voidstep-daggers`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom daggers, forward blink, arrival damage, backstab bonus, operator give command
- `Meteor Axe`
  - GitHub: `https://github.com/KolTheGoat/meteor-axe`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom axe, meteor impact, burning crater, area damage, operator give command
- `Frostbite Scythe`
  - GitHub: `https://github.com/KolTheGoat/frostbite-scythe`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom scythe, icy sweep, freeze burst, slowing damage, operator give command
- `Dragon Dash Spear`
  - GitHub: `https://github.com/KolTheGoat/dragon-dash-spear`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom spear, dragon dash, fire trail, collision burst, operator give command
- `Gravity Mace`
  - GitHub: `https://github.com/KolTheGoat/gravity-mace`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom mace, gravity slam, enemy pull, launch burst, operator give command
- `Phantom Bow`
  - GitHub: `https://github.com/KolTheGoat/phantom-bow`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom bow, teleport shot, spectral hit burst, operator give command
- `Emerald Paladin Set`
  - GitHub: `https://github.com/KolTheGoat/emerald-paladin-set`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable armor set, emerald guard, healing pulse, resistance burst, operator give command
- `Nether Berserker Set`
  - GitHub: `https://github.com/KolTheGoat/nether-berserker-set`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable armor set, rage leap, fire aura, damage boost, operator give command
- `Golem Knuckles`
  - GitHub: `https://github.com/KolTheGoat/golem-knuckles`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom gauntlets, ground punch, stone knockup, area damage, operator give command
- `Soul Reaper Katana`
  - GitHub: `https://github.com/KolTheGoat/soul-reaper-katana`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom katana, dash slash, soul lifesteal, wither burst, operator give command
- `Venom Fang Dagger`
  - GitHub: `https://github.com/KolTheGoat/venom-fang-dagger`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom dagger, poison lunge, venom cloud, stacking poison, operator give command
- `Sunflare Crossbow`
  - GitHub: `https://github.com/KolTheGoat/sunflare-crossbow`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom crossbow, radiant bolt, explosion flare, burn burst, operator give command
- `Abyssal Anchor`
  - GitHub: `https://github.com/KolTheGoat/abyssal-anchor`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom anchor, abyss pull, darkness burst, heavy smash, operator give command
- `Rift Shield`
  - GitHub: `https://github.com/KolTheGoat/rift-shield`
  - Type: Paper plugin
  - Status: Source repo created and pushed
  - Features: craftable custom shield, rift block, knockback wave, short resistance, operator give command

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
