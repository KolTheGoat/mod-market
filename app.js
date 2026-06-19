const baseMods = [
  {
    name: "Sky Realms",
    creator: "AetherRelay",
    category: "Adventure",
    loader: "Fabric",
    version: "1.21.6",
    price: 12,
    rating: 4.9,
    downloads: 124000,
    serverSafe: true,
    tags: ["dimensions", "bosses", "loot"],
    colors: ["#1d8fc0", "#75d1b8"],
    description: "Floating islands, dungeon events, custom loot tables, and portal progression for survival worlds."
  },
  {
    name: "OreFlow Plus",
    creator: "RedstoneSmith",
    category: "Tech",
    loader: "Forge",
    version: "1.20.6",
    price: 9,
    rating: 4.8,
    downloads: 98000,
    serverSafe: true,
    tags: ["automation", "machines", "energy"],
    colors: ["#b4612d", "#f0c36b"],
    description: "A compact automation suite with balanced ore processing, power networks, and clean JEI integration."
  },
  {
    name: "ClaimGuard",
    creator: "NovaVoxel",
    category: "Server",
    loader: "NeoForge",
    version: "1.21.5",
    price: 0,
    rating: 4.7,
    downloads: 181000,
    serverSafe: true,
    tags: ["claims", "admin", "permissions"],
    colors: ["#0c7c59", "#93c85c"],
    description: "Simple land claims, trust levels, admin tools, and grief prevention tuned for public servers."
  },
  {
    name: "Arcane Foundry",
    creator: "EmberKit",
    category: "Magic",
    loader: "Quilt",
    version: "1.21.4",
    price: 15,
    rating: 4.9,
    downloads: 76000,
    serverSafe: false,
    tags: ["spells", "rituals", "artifacts"],
    colors: ["#5f4aa3", "#2896c8"],
    description: "Spellcrafting, ritual structures, collectible artifacts, and late-game magical automation."
  },
  {
    name: "Biome Bloom",
    creator: "GreenChunk",
    category: "Worldgen",
    loader: "Fabric",
    version: "1.21.6",
    price: 7,
    rating: 4.6,
    downloads: 142000,
    serverSafe: true,
    tags: ["biomes", "terrain", "plants"],
    colors: ["#3e8f4a", "#d9b85f"],
    description: "Lush biomes, smarter climate bands, decorative plants, and optimized chunk generation."
  },
  {
    name: "FrameBoost",
    creator: "NovaVoxel",
    category: "Utility",
    loader: "Fabric",
    version: "1.21.6",
    price: 5,
    rating: 4.8,
    downloads: 302000,
    serverSafe: false,
    tags: ["performance", "client", "fps"],
    colors: ["#111918", "#2896c8"],
    description: "Client-side rendering tweaks, memory-friendly settings, and a performance profiler overlay."
  },
  {
    name: "Obsidian Arsenal",
    creator: "IronVerse",
    category: "Gear",
    loader: "NeoForge",
    version: "1.21.6",
    price: 14,
    rating: 4.9,
    downloads: 88000,
    serverSafe: true,
    tags: ["armor", "weapons", "sets"],
    colors: ["#151918", "#7f4bc2"],
    description: "Heavy armor sets, rare weapon tiers, upgrade sockets, and boss-drop materials for late-game combat."
  },
  {
    name: "Crystal Armory",
    creator: "AetherRelay",
    category: "Gear",
    loader: "Fabric",
    version: "1.21.6",
    price: 11,
    rating: 4.8,
    downloads: 94000,
    serverSafe: true,
    tags: ["armor", "crystals", "enchanting"],
    colors: ["#2bbbd3", "#8865d8"],
    description: "Gem-powered armor, glowing trims, crystal blades, and a clean upgrade path for survival servers."
  },
  {
    name: "Dungeon Relics",
    creator: "VaultMason",
    category: "Adventure",
    loader: "Forge",
    version: "1.20.6",
    price: 10,
    rating: 4.7,
    downloads: 72000,
    serverSafe: true,
    tags: ["dungeons", "relics", "loot"],
    colors: ["#6f5132", "#d6a84f"],
    description: "Procedural dungeon rooms, relic loot, locked chests, and encounter tables built for replayable exploration."
  },
  {
    name: "Knightfall Combat",
    creator: "IronVerse",
    category: "Gear",
    loader: "Forge",
    version: "1.21.1",
    price: 16,
    rating: 4.6,
    downloads: 64000,
    serverSafe: true,
    tags: ["combat", "shields", "skills"],
    colors: ["#3d4952", "#bd6b34"],
    description: "Timed blocks, shield abilities, weapon stances, and balanced armor stats without turning combat into chaos."
  },
  {
    name: "Portal Smith",
    creator: "EmberKit",
    category: "Magic",
    loader: "NeoForge",
    version: "1.21.5",
    price: 13,
    rating: 4.8,
    downloads: 59000,
    serverSafe: true,
    tags: ["portals", "teleport", "runes"],
    colors: ["#0c7c59", "#48b9e8"],
    description: "Craftable portals, rune anchors, private teleport networks, and permission-aware server controls."
  },
  {
    name: "Dragonsteel Forge",
    creator: "RedstoneSmith",
    category: "Tech",
    loader: "Forge",
    version: "1.20.6",
    price: 18,
    rating: 4.9,
    downloads: 53000,
    serverSafe: true,
    tags: ["machines", "alloys", "armor"],
    colors: ["#8c2f22", "#ffb457"],
    description: "Industrial forging machines, rare alloys, armor plating recipes, and compact automation hooks."
  },
  {
    name: "Mythic Mobsmith",
    creator: "VaultMason",
    category: "Adventure",
    loader: "Quilt",
    version: "1.21.4",
    price: 12,
    rating: 4.5,
    downloads: 68000,
    serverSafe: true,
    tags: ["mobs", "bosses", "loot"],
    colors: ["#5f4aa3", "#c84f5f"],
    description: "Configurable minibosses, loot pools, elite mobs, and encounter scaling for adventure maps."
  },
  {
    name: "Cloaks & Capes",
    creator: "GreenChunk",
    category: "Gear",
    loader: "Fabric",
    version: "1.21.6",
    price: 4,
    rating: 4.6,
    downloads: 155000,
    serverSafe: false,
    tags: ["cosmetic", "capes", "client"],
    colors: ["#b4612d", "#ef7f72"],
    description: "Client-side cloaks, animated capes, dye channels, and cosmetic presets for screenshots and roleplay."
  },
  {
    name: "Vault Economy",
    creator: "NovaVoxel",
    category: "Server",
    loader: "NeoForge",
    version: "1.21.5",
    price: 8,
    rating: 4.7,
    downloads: 118000,
    serverSafe: true,
    tags: ["shops", "currency", "admin"],
    colors: ["#0d6b58", "#e0ba5a"],
    description: "Server shops, wallet commands, sell chests, tax controls, and clean permissions for multiplayer economies."
  },
  {
    name: "Nether Bloom",
    creator: "GreenChunk",
    category: "Worldgen",
    loader: "Forge",
    version: "1.21.1",
    price: 6,
    rating: 4.5,
    downloads: 84000,
    serverSafe: true,
    tags: ["nether", "biomes", "structures"],
    colors: ["#982f2f", "#f08b3e"],
    description: "New Nether biomes, dangerous ruins, rare flora, and structure generation with performance-minded defaults."
  },
  {
    name: "Builder's Bench",
    creator: "Blockwright",
    category: "Utility",
    loader: "Fabric",
    version: "1.21.6",
    price: 0,
    rating: 4.8,
    downloads: 226000,
    serverSafe: false,
    tags: ["building", "schematics", "tools"],
    colors: ["#49706b", "#d6c17a"],
    description: "Placement guides, material counts, build palettes, and schematic previews for creative builders."
  },
  {
    name: "Rune Storage",
    creator: "EmberKit",
    category: "Magic",
    loader: "Fabric",
    version: "1.21.6",
    price: 9,
    rating: 4.7,
    downloads: 102000,
    serverSafe: true,
    tags: ["storage", "runes", "inventory"],
    colors: ["#513c8f", "#2bc4a8"],
    description: "Magical storage blocks, rune sorting, remote access crystals, and balanced crafting progression."
  },
  {
    name: "Server Sentinel",
    creator: "NovaVoxel",
    category: "Server",
    loader: "Fabric",
    version: "1.21.6",
    price: 10,
    rating: 4.9,
    downloads: 141000,
    serverSafe: true,
    tags: ["moderation", "logs", "alerts"],
    colors: ["#111918", "#e3cf7a"],
    description: "Moderation logs, suspicious action alerts, rollback helpers, and lightweight dashboards for server staff."
  },
  {
    name: "Ancient Structures",
    creator: "VaultMason",
    category: "Worldgen",
    loader: "NeoForge",
    version: "1.21.5",
    price: 14,
    rating: 4.8,
    downloads: 96000,
    serverSafe: true,
    tags: ["structures", "ruins", "exploration"],
    colors: ["#70553d", "#6ca879"],
    description: "Ruined towers, underground halls, puzzle chambers, and configurable rarity for exploration-focused worlds."
  }
];

const opPlugins = [
  {
    name: "Titan Leap Blades",
    creator: "PluginForge",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 19,
    rating: 4.9,
    downloads: 91000,
    serverSafe: true,
    tags: ["plugin", "craftable", "weapon", "leap"],
    colors: ["#168a6f", "#d9c35c"],
    description: "Craftable dual blades that launch players forward, chain aerial hits, and slam down with shockwave damage."
  },
  {
    name: "Earthbreaker Hammer",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 18,
    rating: 4.8,
    downloads: 83000,
    serverSafe: true,
    tags: ["plugin", "craftable", "hammer", "smash"],
    colors: ["#6d4a31", "#f0ad4e"],
    description: "Adds a craftable warhammer with ground smash, knockback rings, cracked-earth particles, and cooldown tuning."
  },
  {
    name: "Stormcaller Trident",
    creator: "VoltWorks",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 16,
    rating: 4.7,
    downloads: 76000,
    serverSafe: true,
    tags: ["plugin", "craftable", "lightning", "trident"],
    colors: ["#1d8fc0", "#f2e76b"],
    description: "Craft lightning tridents with chain strikes, storm dashes, charged throws, and safe anti-spam limits."
  },
  {
    name: "Inferno Gauntlets",
    creator: "EmberOps",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 15,
    rating: 4.8,
    downloads: 69000,
    serverSafe: true,
    tags: ["plugin", "craftable", "fire", "gauntlets"],
    colors: ["#8c2f22", "#ff8c32"],
    description: "Craftable gauntlets that punch fire waves, ignite combo targets, and trigger a molten uppercut ability."
  },
  {
    name: "Voidstep Daggers",
    creator: "ShadowChunk",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.6",
    price: 17,
    rating: 4.9,
    downloads: 62000,
    serverSafe: true,
    tags: ["plugin", "craftable", "daggers", "teleport"],
    colors: ["#151918", "#7f4bc2"],
    description: "Stealth daggers with short blink attacks, backstab bonuses, smoke bursts, and recipe-gated upgrades."
  },
  {
    name: "Meteor Axe",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 21,
    rating: 4.9,
    downloads: 88000,
    serverSafe: true,
    tags: ["plugin", "craftable", "axe", "meteor"],
    colors: ["#5a2a24", "#f0c36b"],
    description: "A craftable boss-tier axe that calls small meteors, cleaves mobs, and leaves burning impact zones."
  },
  {
    name: "Frostbite Scythe",
    creator: "GlacierLabs",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 14,
    rating: 4.6,
    downloads: 58000,
    serverSafe: true,
    tags: ["plugin", "craftable", "ice", "scythe"],
    colors: ["#2bbbd3", "#e7f8ff"],
    description: "Adds an ice scythe with freezing sweeps, slow fields, shatter combos, and custom crafting ingredients."
  },
  {
    name: "Dragon Dash Spear",
    creator: "Dragonbyte",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 18,
    rating: 4.7,
    downloads: 64000,
    serverSafe: true,
    tags: ["plugin", "craftable", "spear", "dash"],
    colors: ["#bd5a2d", "#6ee0b6"],
    description: "Craft a spear that lunges through enemies, pins targets, and unlocks dragon-charge movement abilities."
  },
  {
    name: "Gravity Mace",
    creator: "VoltWorks",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 20,
    rating: 4.8,
    downloads: 73000,
    serverSafe: true,
    tags: ["plugin", "craftable", "mace", "gravity"],
    colors: ["#3d4952", "#8b7ee8"],
    description: "A mace plugin with gravity wells, launch smashes, fall-damage combos, and configurable arena-safe limits."
  },
  {
    name: "Phantom Bow",
    creator: "ShadowChunk",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.5",
    price: 13,
    rating: 4.6,
    downloads: 52000,
    serverSafe: true,
    tags: ["plugin", "craftable", "bow", "spectral"],
    colors: ["#513c8f", "#9ad7ff"],
    description: "Craft spectral bows that fire piercing arrows, mark targets through walls, and trigger blink reloads."
  },
  {
    name: "Emerald Paladin Set",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 17,
    rating: 4.8,
    downloads: 81000,
    serverSafe: true,
    tags: ["plugin", "craftable", "armor", "healing"],
    colors: ["#0c7c59", "#d7e86f"],
    description: "Craftable armor set with team healing pulses, shield bursts, holy leap, and balanced durability costs."
  },
  {
    name: "Nether Berserker Set",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 16,
    rating: 4.7,
    downloads: 70000,
    serverSafe: true,
    tags: ["plugin", "craftable", "armor", "rage"],
    colors: ["#982f2f", "#ff8c32"],
    description: "A craftable armor set that builds rage, boosts melee combos, and unleashes a fiery berserker smash."
  },
  {
    name: "Cloudrunner Boots",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 9,
    rating: 4.7,
    downloads: 119000,
    serverSafe: true,
    tags: ["plugin", "craftable", "boots", "leap"],
    colors: ["#49a5c7", "#f7f6ef"],
    description: "Craft boots with double jump, wall kick, safe landing, and stamina settings for parkour-style servers."
  },
  {
    name: "Golem Knuckles",
    creator: "Blockwright",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 12,
    rating: 4.6,
    downloads: 67000,
    serverSafe: true,
    tags: ["plugin", "craftable", "fists", "smash"],
    colors: ["#70553d", "#b8c0b0"],
    description: "Craft heavy knuckles that punch blocks of force, stun mobs, and trigger a short-range quake ability."
  },
  {
    name: "Soul Reaper Katana",
    creator: "ShadowChunk",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.6",
    price: 22,
    rating: 4.9,
    downloads: 99000,
    serverSafe: true,
    tags: ["plugin", "craftable", "katana", "lifesteal"],
    colors: ["#111918", "#c84f5f"],
    description: "A boss-tier katana with soul dash, lifesteal finishers, sweeping slashes, and rare soul-core recipes."
  },
  {
    name: "Thunderlord Hammer",
    creator: "VoltWorks",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 23,
    rating: 4.9,
    downloads: 87500,
    serverSafe: true,
    tags: ["plugin", "craftable", "hammer", "lightning"],
    colors: ["#233044", "#f2e76b"],
    description: "A super weapon with charged leaps, thunder smashes, lightning chains, and boss-drop crafting components."
  },
  {
    name: "Venom Fang Dagger",
    creator: "ToxicByte",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 10,
    rating: 4.5,
    downloads: 43000,
    serverSafe: true,
    tags: ["plugin", "craftable", "poison", "dagger"],
    colors: ["#3e8f4a", "#b6e85d"],
    description: "Craft poison daggers with stacking venom, roll attacks, antidote recipes, and PvP cooldown controls."
  },
  {
    name: "Sunflare Crossbow",
    creator: "EmberOps",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 13,
    rating: 4.6,
    downloads: 51000,
    serverSafe: true,
    tags: ["plugin", "craftable", "crossbow", "explosive"],
    colors: ["#d47a25", "#ffdf7a"],
    description: "A craftable crossbow with solar bolts, explosive reloads, burn zones, and server-friendly charge settings."
  },
  {
    name: "Abyssal Anchor",
    creator: "DeepCore",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.5",
    price: 15,
    rating: 4.7,
    downloads: 49000,
    serverSafe: true,
    tags: ["plugin", "craftable", "anchor", "pull"],
    colors: ["#17272d", "#2bc4a8"],
    description: "Craft an anchor weapon that pulls enemies in, crushes them with slam damage, and anchors bosses in place."
  },
  {
    name: "Rift Shield",
    creator: "PluginForge",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 12,
    rating: 4.8,
    downloads: 78000,
    serverSafe: true,
    tags: ["plugin", "craftable", "shield", "parry"],
    colors: ["#0d6b58", "#8068d8"],
    description: "Adds craftable shields with timed parries, rift counters, reflect bursts, and custom durability recipes."
  },
  {
    name: "Warlock Staffs",
    creator: "EmberOps",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 17,
    rating: 4.7,
    downloads: 66500,
    serverSafe: true,
    tags: ["plugin", "craftable", "staff", "magic"],
    colors: ["#5f4aa3", "#ef7f72"],
    description: "Craft staffs that cast wither bolts, curse circles, blink bursts, and upgrade through ritual components."
  },
  {
    name: "Lava Launcher",
    creator: "EmberOps",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 14,
    rating: 4.5,
    downloads: 56000,
    serverSafe: true,
    tags: ["plugin", "craftable", "launcher", "fire"],
    colors: ["#8c2f22", "#f08b3e"],
    description: "A craftable launcher that fires molten arcs, leaves temporary lava sparks, and supports region restrictions."
  },
  {
    name: "Moonblade Plugin",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 11,
    rating: 4.6,
    downloads: 61000,
    serverSafe: true,
    tags: ["plugin", "craftable", "sword", "dash"],
    colors: ["#293238", "#bfc7ff"],
    description: "Craft moonblades with crescent slashes, night-time bonuses, short dashes, and lunar shard recipes."
  },
  {
    name: "Warden Crusher",
    creator: "DeepCore",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 24,
    rating: 4.9,
    downloads: 97000,
    serverSafe: true,
    tags: ["plugin", "craftable", "mace", "smash"],
    colors: ["#111918", "#2bbbd3"],
    description: "An ultra-heavy mace with sonic smash, leap impact, boss-core crafting, and configurable raid limits."
  },
  {
    name: "Phoenix Feather Bow",
    creator: "EmberOps",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 18,
    rating: 4.8,
    downloads: 74000,
    serverSafe: true,
    tags: ["plugin", "craftable", "bow", "rebirth"],
    colors: ["#bd5a2d", "#ffd36e"],
    description: "Craft a bow with flaming volleys, revive sparks, phoenix dash, and rare feather upgrade recipes."
  },
  {
    name: "Echo Boots",
    creator: "DeepCore",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.5",
    price: 10,
    rating: 4.7,
    downloads: 88000,
    serverSafe: true,
    tags: ["plugin", "craftable", "boots", "sonic"],
    colors: ["#17272d", "#67d5e8"],
    description: "Craft boots with sonic leap, echo dodge, vibration trails, and fall-impact damage bursts."
  },
  {
    name: "Royal Claymore",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 13,
    rating: 4.6,
    downloads: 53000,
    serverSafe: true,
    tags: ["plugin", "craftable", "sword", "cleave"],
    colors: ["#3d4952", "#d9c35c"],
    description: "A craftable two-handed sword with cleave arcs, guard break, banner buffs, and smithing-table progression."
  },
  {
    name: "Prism Cannon",
    creator: "VoltWorks",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 16,
    rating: 4.7,
    downloads: 47000,
    serverSafe: true,
    tags: ["plugin", "craftable", "cannon", "beam"],
    colors: ["#2bbbd3", "#e6c36e"],
    description: "Craft a prism cannon that charges beams, splits shots, and uses crystal ammo with anti-grief toggles."
  },
  {
    name: "Ender Whip",
    creator: "ShadowChunk",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.6",
    price: 12,
    rating: 4.5,
    downloads: 42000,
    serverSafe: true,
    tags: ["plugin", "craftable", "whip", "pull"],
    colors: ["#513c8f", "#48b9e8"],
    description: "A craftable whip that pulls targets, yanks loot, swings players forward, and combos into ender bursts."
  },
  {
    name: "Boulder Toss Gloves",
    creator: "Blockwright",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 12,
    rating: 4.6,
    downloads: 58000,
    serverSafe: true,
    tags: ["plugin", "craftable", "gloves", "throw"],
    colors: ["#70553d", "#c0a06a"],
    description: "Craft gloves that throw temporary boulders, crush groups, and scale damage through upgraded cores."
  },
  {
    name: "Skyhook Grappler",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 11,
    rating: 4.8,
    downloads: 132000,
    serverSafe: true,
    tags: ["plugin", "craftable", "grapple", "movement"],
    colors: ["#49706b", "#75d1b8"],
    description: "Craftable grappling hooks with swing momentum, leap cancels, fall safety, and cooldown-based movement."
  },
  {
    name: "Bloodmoon Saber",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 15,
    rating: 4.7,
    downloads: 66000,
    serverSafe: true,
    tags: ["plugin", "craftable", "saber", "lifesteal"],
    colors: ["#982f2f", "#111918"],
    description: "A craftable saber with lifesteal slashes, bloodmoon buffs, execute effects, and boss shard recipes."
  },
  {
    name: "Celestial Pickaxe",
    creator: "PluginForge",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 13,
    rating: 4.7,
    downloads: 93000,
    serverSafe: true,
    tags: ["plugin", "craftable", "pickaxe", "mining"],
    colors: ["#233044", "#f2e76b"],
    description: "Craft a super pickaxe with vein bursts, ore radar pulses, mining leap, and configurable economy protection."
  },
  {
    name: "Radiant Wings",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 19,
    rating: 4.8,
    downloads: 108000,
    serverSafe: true,
    tags: ["plugin", "craftable", "wings", "flight"],
    colors: ["#d9c35c", "#49a5c7"],
    description: "Craft wings with burst flight, hover taps, dive smash, and fuel recipes balanced for survival progression."
  },
  {
    name: "Sculk Launcher",
    creator: "DeepCore",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.5",
    price: 14,
    rating: 4.6,
    downloads: 55000,
    serverSafe: true,
    tags: ["plugin", "craftable", "sculk", "launcher"],
    colors: ["#111918", "#0f9ca8"],
    description: "Craft a sculk launcher with sonic pulses, vibration tracking, splash knockback, and deep-dark recipes."
  },
  {
    name: "Runic Shields",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 10,
    rating: 4.7,
    downloads: 87000,
    serverSafe: true,
    tags: ["plugin", "craftable", "shield", "runes"],
    colors: ["#0c7c59", "#5f4aa3"],
    description: "Adds craftable shield variants with runic blocks, burst counters, leap guards, and gem upgrade recipes."
  },
  {
    name: "Comet Boots",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 9,
    rating: 4.6,
    downloads: 82000,
    serverSafe: true,
    tags: ["plugin", "craftable", "boots", "speed"],
    colors: ["#1d8fc0", "#f0c36b"],
    description: "Craft boots with sprint trails, leap boosts, air dashes, and impact sparks for fast combat builds."
  },
  {
    name: "Necro Wand",
    creator: "ShadowChunk",
    category: "Plugins",
    loader: "Purpur",
    version: "1.21.6",
    price: 16,
    rating: 4.7,
    downloads: 49000,
    serverSafe: true,
    tags: ["plugin", "craftable", "wand", "summon"],
    colors: ["#151918", "#8bc47c"],
    description: "Craft a wand that summons temporary skeletal guards, casts decay bolts, and uses soul dust recipes."
  },
  {
    name: "GearSmith Recipes",
    creator: "PluginForge",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 8,
    rating: 4.8,
    downloads: 121000,
    serverSafe: true,
    tags: ["plugin", "craftable", "recipes", "gear"],
    colors: ["#0d6b58", "#bd6b34"],
    description: "A recipe framework for custom weapons, OP armor, smithing paths, boss drops, and server-safe crafting gates."
  },
  {
    name: "BossDrop Crafting",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 12,
    rating: 4.8,
    downloads: 103000,
    serverSafe: true,
    tags: ["plugin", "craftable", "bosses", "materials"],
    colors: ["#6f5132", "#c84f5f"],
    description: "Adds rare boss materials, custom drops, altar crafting, and progression locks for super weapon recipes."
  },
  {
    name: "Custom Ability Core",
    creator: "PluginForge",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 15,
    rating: 4.9,
    downloads: 146000,
    serverSafe: true,
    tags: ["plugin", "abilities", "cooldowns", "api"],
    colors: ["#293238", "#2bc4a8"],
    description: "A plugin core for leap, smash, dash, beam, lifesteal, and shockwave abilities on craftable custom items."
  },
  {
    name: "Raid Relic Drops",
    creator: "VaultMason",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 9,
    rating: 4.6,
    downloads: 57000,
    serverSafe: true,
    tags: ["plugin", "relics", "bosses", "loot"],
    colors: ["#70553d", "#d9c35c"],
    description: "Adds raid bosses, relic drops, upgrade stones, and custom loot tables for OP weapon crafting loops."
  },
  {
    name: "Enchanted Smithing",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 11,
    rating: 4.7,
    downloads: 89000,
    serverSafe: true,
    tags: ["plugin", "craftable", "smithing", "enchants"],
    colors: ["#513c8f", "#d9c35c"],
    description: "Custom smithing templates, OP enchant paths, upgrade tiers, and recipe previews for modded-feeling gear."
  },
  {
    name: "Arena Smash Kit",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 14,
    rating: 4.8,
    downloads: 74000,
    serverSafe: true,
    tags: ["plugin", "arena", "smash", "kits"],
    colors: ["#bd5a2d", "#3d4952"],
    description: "Arena kits with craftable loadouts, leap attacks, smash abilities, scoreboards, and round-safe item cleanup."
  },
  {
    name: "Mythic Recipe Book",
    creator: "Blockwright",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 7,
    rating: 4.6,
    downloads: 113000,
    serverSafe: true,
    tags: ["plugin", "craftable", "guide", "recipes"],
    colors: ["#49706b", "#f0c36b"],
    description: "In-game recipe menus for custom weapons, armor sets, plugin items, boss materials, and upgrade paths."
  },
  {
    name: "Legendary Crates",
    creator: "VaultMason",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 12,
    rating: 4.5,
    downloads: 124000,
    serverSafe: true,
    tags: ["plugin", "crates", "weapons", "loot"],
    colors: ["#6f5132", "#8068d8"],
    description: "Crate rewards for OP weapons, armor cores, crafting materials, cosmetic trails, and rare ability scrolls."
  },
  {
    name: "WorldBoss Arsenal",
    creator: "MythicStack",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 23,
    rating: 4.9,
    downloads: 101000,
    serverSafe: true,
    tags: ["plugin", "bosses", "weapons", "craftable"],
    colors: ["#151918", "#f0c36b"],
    description: "Adds world bosses that drop cores for craftable super weapons with leap, smash, beam, and execute skills."
  },
  {
    name: "Heroic Trinkets",
    creator: "ArmorSmiths",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 9,
    rating: 4.6,
    downloads: 76000,
    serverSafe: true,
    tags: ["plugin", "craftable", "trinkets", "buffs"],
    colors: ["#2bbbd3", "#bd6b34"],
    description: "Craft rings, charms, and amulets with leap boosts, rage buffs, cooldown cuts, and boss material recipes."
  },
  {
    name: "Leaping Enchantments",
    creator: "SkylineDev",
    category: "Plugins",
    loader: "Paper",
    version: "1.21.6",
    price: 7,
    rating: 4.7,
    downloads: 135000,
    serverSafe: true,
    tags: ["plugin", "enchants", "leap", "craftable"],
    colors: ["#49a5c7", "#8b7ee8"],
    description: "Adds enchantments for leap attacks, aerial damage, landing shockwaves, and recipe-based enchant upgrades."
  },
  {
    name: "Smash Enchantments",
    creator: "Blockwright",
    category: "Plugins",
    loader: "Spigot",
    version: "1.21.5",
    price: 7,
    rating: 4.6,
    downloads: 128000,
    serverSafe: true,
    tags: ["plugin", "enchants", "smash", "weapons"],
    colors: ["#70553d", "#f0ad4e"],
    description: "Adds hammer-like smash enchantments, quake damage, stun chance, cooldowns, and crafting-table upgrades."
  }
];

const mods = [...baseMods, ...opPlugins];

const liveRepos = {
  "Titan Leap Blades": "https://github.com/KolTheGoat/titan-leap-blades",
  "Earthbreaker Hammer": "https://github.com/KolTheGoat/earthbreaker-hammer",
  "Thunderlord Hammer": "https://github.com/KolTheGoat/thunderlord-hammer",
  "Warden Crusher": "https://github.com/KolTheGoat/warden-crusher",
  "Cloudrunner Boots": "https://github.com/KolTheGoat/cloudrunner-boots",
  "GearSmith Recipes": "https://github.com/KolTheGoat/gearsmith-recipes",
  "BossDrop Crafting": "https://github.com/KolTheGoat/bossdrop-crafting",
  "Custom Ability Core": "https://github.com/KolTheGoat/custom-ability-core",
  "Stormcaller Trident": "https://github.com/KolTheGoat/stormcaller-trident",
  "Inferno Gauntlets": "https://github.com/KolTheGoat/inferno-gauntlets",
  "Voidstep Daggers": "https://github.com/KolTheGoat/voidstep-daggers",
  "Meteor Axe": "https://github.com/KolTheGoat/meteor-axe",
  "Frostbite Scythe": "https://github.com/KolTheGoat/frostbite-scythe",
  "Dragon Dash Spear": "https://github.com/KolTheGoat/dragon-dash-spear",
  "Gravity Mace": "https://github.com/KolTheGoat/gravity-mace",
  "Phantom Bow": "https://github.com/KolTheGoat/phantom-bow",
  "Emerald Paladin Set": "https://github.com/KolTheGoat/emerald-paladin-set",
  "Nether Berserker Set": "https://github.com/KolTheGoat/nether-berserker-set",
  "Golem Knuckles": "https://github.com/KolTheGoat/golem-knuckles",
  "Soul Reaper Katana": "https://github.com/KolTheGoat/soul-reaper-katana",
  "Venom Fang Dagger": "https://github.com/KolTheGoat/venom-fang-dagger",
  "Sunflare Crossbow": "https://github.com/KolTheGoat/sunflare-crossbow",
  "Abyssal Anchor": "https://github.com/KolTheGoat/abyssal-anchor",
  "Rift Shield": "https://github.com/KolTheGoat/rift-shield"
};

mods.forEach(mod => {
  mod.repoUrl = liveRepos[mod.name] || "";
});

const categories = ["All", "Plugins", "Gear", "Adventure", "Tech", "Magic", "Server", "Worldgen", "Utility"];
const state = {
  category: "All",
  loader: "all",
  maxPrice: 24,
  serverOnly: false,
  search: "",
  sort: "featured",
  cart: []
};

const categoryFilters = document.querySelector("#categoryFilters");
const modGrid = document.querySelector("#modGrid");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const loaderFilter = document.querySelector("#loaderFilter");
const priceFilter = document.querySelector("#priceFilter");
const priceLabel = document.querySelector("#priceLabel");
const serverOnly = document.querySelector("#serverOnly");
const sortSelect = document.querySelector("#sortSelect");
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const scrim = document.querySelector("#scrim");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutModal = document.querySelector("#checkoutModal");
const closeCheckout = document.querySelector("#closeCheckout");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutSummary = document.querySelector("#checkoutSummary");
const checkoutMessage = document.querySelector("#checkoutMessage");

function money(value) {
  return value === 0 ? "Free" : `$${value}`;
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = categories
    .map(category => `
      <button class="chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">
        ${category}
      </button>
    `)
    .join("");
}

function filteredMods() {
  const terms = state.search.trim().toLowerCase();
  let list = mods.filter(mod => {
    const haystack = [mod.name, mod.creator, mod.category, mod.loader, ...mod.tags].join(" ").toLowerCase();
    return (
      (state.category === "All" || mod.category === state.category) &&
      (state.loader === "all" || mod.loader === state.loader) &&
      mod.price <= state.maxPrice &&
      (!state.serverOnly || mod.serverSafe) &&
      (!terms || haystack.includes(terms))
    );
  });

  if (state.sort === "rating") {
    list = list.sort((a, b) => b.rating - a.rating);
  } else if (state.sort === "downloads") {
    list = list.sort((a, b) => b.downloads - a.downloads);
  } else if (state.sort === "price") {
    list = list.sort((a, b) => a.price - b.price);
  }

  return list;
}

function renderMods() {
  const list = filteredMods();
  resultCount.textContent = `${list.length} ${list.length === 1 ? "listing" : "listings"}`;

  if (!list.length) {
    modGrid.innerHTML = `<div class="empty-state">No mods match those filters.</div>`;
    return;
  }

  modGrid.innerHTML = list.map(mod => `
    <article class="mod-card">
      <div class="mod-art" style="--tile-a: ${mod.colors[0]}; --tile-b: ${mod.colors[1]}">
        <span class="badge">${mod.loader}</span>
      </div>
      <div class="mod-body">
        <div class="meta">
          <span>${mod.category}</span>
          <span>${mod.version}</span>
          ${mod.serverSafe ? "<span>Server-safe</span>" : "<span>Client-heavy</span>"}
        </div>
        <h3>${mod.name}</h3>
        <p>${mod.description}</p>
      </div>
      <div class="mod-foot">
        <div>
          <span class="price">${money(mod.price)}</span>
          <span class="rating">${mod.rating} rating &middot; ${Math.round(mod.downloads / 1000)}K downloads</span>
          ${mod.repoUrl ? `<a class="repo-link" href="${mod.repoUrl}" target="_blank" rel="noopener">View repo</a>` : `<span class="repo-pending">Repo planned</span>`}
        </div>
        <button class="button primary small" type="button" data-add="${mod.name}">Request</button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  cartCount.textContent = state.cart.length;
  checkoutButton.disabled = state.cart.length === 0;

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="empty-state">Your cart is empty.</div>`;
    cartTotal.textContent = "$0";
    checkoutButton.textContent = "Add an item to request";
    return;
  }

  checkoutButton.textContent = "Request access";
  cartItems.innerHTML = state.cart.map(mod => `
    <div class="cart-item">
      <div>
        <strong>${mod.name}</strong>
        <small>${mod.loader} &middot; ${mod.version} &middot; by ${mod.creator}${mod.repoUrl ? " &middot; repo live" : ""}</small>
      </div>
      <strong>${money(mod.price)}</strong>
    </div>
  `).join("");

  const total = state.cart.reduce((sum, mod) => sum + mod.price, 0);
  cartTotal.textContent = `$${total}`;
}

function cartTotalValue() {
  return state.cart.reduce((sum, mod) => sum + mod.price, 0);
}

function renderCheckoutSummary() {
  if (!state.cart.length) {
    checkoutSummary.innerHTML = `<div class="empty-state">Add a mod or plugin before requesting access.</div>`;
    return;
  }

  checkoutSummary.innerHTML = `
    ${state.cart.map(mod => `
      <div class="summary-row">
        <div>
          <strong>${mod.name}</strong>
          <small>${mod.category} - ${mod.loader} - ${mod.version}${mod.repoUrl ? " - source repo live" : ""}</small>
        </div>
        <strong>${money(mod.price)}</strong>
      </div>
    `).join("")}
    <div class="summary-row summary-total">
      <span>Listed value</span>
      <strong>$${cartTotalValue()}</strong>
    </div>
    <div class="summary-note">Payment is disabled. This creates a local request summary only.</div>
  `;
}

function openCart() {
  cartDrawer.classList.add("open");
  scrim.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (!checkoutModal.classList.contains("open")) {
    scrim.classList.remove("open");
  }
}

function openCheckout() {
  if (!state.cart.length) {
    openCart();
    return;
  }
  renderCheckoutSummary();
  checkoutMessage.textContent = "";
  checkoutMessage.classList.remove("error");
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
  scrim.classList.add("open");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open")) {
    scrim.classList.remove("open");
  }
}

function validRequestFields() {
  const terms = document.querySelector("#checkoutTerms").checked;
  return checkoutForm.checkValidity() && terms;
}

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategoryFilters();
  renderMods();
});

modGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const mod = mods.find(item => item.name === button.dataset.add);
  if (!mod || state.cart.some(item => item.name === mod.name)) {
    openCart();
    return;
  }
  state.cart.push(mod);
  renderCart();
  openCart();
});

searchInput.addEventListener("input", event => {
  state.search = event.target.value;
  renderMods();
});

loaderFilter.addEventListener("change", event => {
  state.loader = event.target.value;
  renderMods();
});

priceFilter.addEventListener("input", event => {
  state.maxPrice = Number(event.target.value);
  priceLabel.textContent = `$${state.maxPrice}`;
  renderMods();
});

serverOnly.addEventListener("change", event => {
  state.serverOnly = event.target.checked;
  renderMods();
});

sortSelect.addEventListener("change", event => {
  state.sort = event.target.value;
  renderMods();
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
checkoutButton.addEventListener("click", openCheckout);
closeCheckout.addEventListener("click", closeCheckoutModal);
scrim.addEventListener("click", () => {
  closeCartDrawer();
  closeCheckoutModal();
});


checkoutForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!validRequestFields()) {
    checkoutMessage.textContent = "Please complete the request details and agreement.";
    checkoutMessage.classList.add("error");
    checkoutForm.reportValidity();
    return;
  }

  const requestId = `MF-REQ-${Date.now().toString().slice(-6)}`;
  const selected = state.cart.map(mod => mod.name).join(", ");
  checkoutMessage.classList.remove("error");
  checkoutMessage.textContent = `Request ${requestId} created for ${selected}. Payment is still off, so no charge was made.`;
  state.cart = [];
  renderCart();
  checkoutForm.reset();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCartDrawer();
    closeCheckoutModal();
  }
});

renderCategoryFilters();
renderMods();
renderCart();
