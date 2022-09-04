events.listen('jei.hide.items', function (e) {
  e.hide([
    'kubejs:resourcefulbees_trophy',
    'kubejs:mysticalagriculture_trophy',
    'kubejs:jellyfishing_trophy',
    'kubejs:projecte_trophy',
    'kubejs:refined_trophy',
    'kubejs:mahoutsukai_trophy',
    'kubejs:astralsorcery_trophy',
    'kubejs:rats_trophy',
    'kubejs:twilightforest_trophy',
    'kubejs:woot_trophy',
    'kubejs:powah_trophy',
    'kubejs:rftools_trophy',
    'kubejs:envirotech_trophy',
    'kubejs:powergen_trophy',
    'kubejs:pneumaticcraft_trophy',
    'kubejs:bloodmagic_trophy',
    'kubejs:eidolon_trophy',
    'kubejs:botania_trophy',
    'kubejs:forbidden_arcanus_trophy',
    'kubejs:draconicevolution_trophy',
    'kubejs:miscellaneous_trophy',
    'kubejs:kitchen_trophy',
    'kubejs:gobber2_trophy',
    'kubejs:extendedcrafting_trophy',
    'kubejs:psi_trophy',
    'kubejs:thermal_trophy',
    'kubejs:mekanism_trophy',
    'kubejs:industrialforegoing_trophy',
    'kubejs:immersiveengineering_trophy',
    'kubejs:create_trophy',
    'kubejs:sonicraft_trophy',
    'extrastorage:storagepart_256k',
    'extrastorage:storagepart_1024k',
    'extrastorage:storagepart_4096k',
    'extrastorage:storagepart_16384k',
    'extrastorage:storagepart_16384k_fluid',
    'extrastorage:storagepart_65536k_fluid',
    'extrastorage:storagepart_262144k_fluid',
    'extrastorage:storagepart_1048576k_fluid',
    'extrastorage:disk_256k',
    'extrastorage:disk_1024k',
    'extrastorage:disk_4096k',
    'extrastorage:disk_16384k',
    'extrastorage:disk_16384k_fluid',
    'extrastorage:disk_65536k_fluid',
    'extrastorage:disk_262144k_fluid',
    'extrastorage:disk_1048576k_fluid',
    'extrastorage:block_256k',
    'extrastorage:block_1024k',
    'extrastorage:block_4096k',
    'extrastorage:block_16384k',
    'extrastorage:block_16384k_fluid',
    'extrastorage:block_65536k_fluid',
    'extrastorage:block_262144k_fluid',
    'extrastorage:block_1048576k_fluid',
    'immersiveengineering:ingot_aluminum',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_lead',
    'mekanism:ingot_tin',
    'mekanism:ingot_lead',
    'mekanism:ingot_bronze',
    'janoeo:tin_ingot',
    'janoeo:uranium_ingot',
    'janoeo:silver_ingot',
    'janoeo:lead_ingot',
    'janoeo:osmium_ingot',
    'iceandfire:silver_ingot',
    'mapperbase:steel_ingot',
    'mekanism:ingot_copper',
    'immersiveengineering:ingot_copper',
    'tconstruct:copper_ingot',
    'janoeo:copper_ingot',
    'iceandfire:copper_ingot',
    'create:copper_ingot',
    'create:zinc_ingot',
    'gobber2:gobber2_ore_end',
    'gobber2:gobber2_ore_nether',
    'gobber2:gobber2_ore',
    'iceandfire:silver_nugget',
    'iceandfire:copper_nugget',
    'mekanism:nugget_copper',
    'mekanism:nugget_tin',
    'mekanism:nugget_lead',
    'mekanism:nugget_bronze',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:nugget_electrum',
    'immersiveengineering:nugget_constantan',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:nugget_nickel',
    'immersiveengineering:nugget_silver',
    'create:copper_nugget',
    'tconstruct:copper_nugget',
    'eidolon:lead_nugget',
    'mysticalagriculture:iridium_essence',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:chrome_essence',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:infusion_crystal',
    'mysticalagriculture:ultimate_seeds',
    'mysticalagriculture:ultimate_essence',
    'titanium:diamond_gear',
    'titanium:iron_gear',
    'titanium:gold_gear',
    'mapperbase:steel_nugget',
    'mapperbase:steel_boots',
    'mapperbase:steel_leggings',
    'mapperbase:steel_chestplate',
    'mapperbase:steel_helmet',
    'mapperbase:flatter_hammer',
    'mapperbase:steel_plate',
    'mapperbase:steel_rod',
    'mapperbase:iron_plate',
    'mapperbase:iron_rod',
    'mapperbase:steel_fence',
    'mapperbase:raw_steel',
    'immersiveengineering:dust_aluminum',
    'immersiveengineering:dust_steel',
    'immersiveengineering:dust_constantan',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:dust_gold',
    'immersiveengineering:dust_iron',
    'immersiveengineering:dust_copper',
    'immersiveengineering:dust_lead',
    'immersiveengineering:dust_nickel',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:dust_silver',
    'immersiveengineering:dust_sulfur',
    'immersiveengineering:dust_wood',
    'mekanism:dust_obsidian',
    'mekanism:dust_emerald',
    'mekanism:dust_bronze',
    'mekanism:dust_diamond',
    'mekanism:dust_gold',
    'mekanism:dust_iron',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_copper',
    'mekanism:dust_lead',
    'mekanism:dust_quartz',
    'mekanism:dust_sulfur',
    'mekanism:dust_uranium',
    'mekanism:dust_tin',
    'janoeo:emerald_dust',
    'janoeo:coal_dust',
    'janoeo:diamond_dust',
    'janoeo:gold_dust',
    'janoeo:iron_dust',
    'janoeo:lapis_dust',
    'janoeo:copper_dust',
    'janoeo:lead_dust',
    'janoeo:nickel_dust',
    'janoeo:silver_dust',
    'janoeo:tin_dust',
    'createaddition:diamond_grit',
    'envirocore:quartz_powder',
    'envirocore:charcoal_powder',
    'immersiveengineering:dust_wood',
    'mekanism:sawdust',
    'pneumaticcraft:wheat_flour',
    'create:iron_sheet',
    'create:brass_sheet',
    'create:lapis_sheet',
    'create:copper_sheet',
    'create:golden_sheet',
    'createaddition:zinc_sheet',
    'immersiveengineering:plate_iron',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_lead',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:plate_nickel',
    'immersiveengineering:plate_constantan',
    'immersiveengineering:plate_silver',
    'overloaded:hyper_item_receiver',
    'overloaded:hyper_energy_receiver',
    'overloaded:hyper_fluid_receiver',
    'overloaded:hyper_item_sender',
    'overloaded:hyper_energy_sender',
    'overloaded:hyper_fluid_sender',
    'overloaded:almost_infinite_barrel',
    'overloaded:almost_infinite_capacitor',
    'overloaded:almost_infinite_tank',
    'overloaded:true_infinite_barrel',
    'overloaded:true_infinite_capacitor',
    'overloaded:true_infinite_tank',
    'overloaded:fluid_core',
    'overloaded:item_core',
    'immersiveengineering:ore_silver',
    'immersiveengineering:ore_nickel',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_copper',
    'immersiveengineering:ore_aluminum',
    'create:zinc_ore',
    'create:copper_ore',
    'janoeo:silver_ore',
    'janoeo:copper_ore',
    'janoeo:tin_ore',
    'janoeo:lead_ore',
    'janoeo:osmium_ore',
    'iceandfire:silver_ore',
    'iceandfire:copper_ore',
    'eidolon:lead_ore',
    'tconstruct:copper_ore',
    'iceandfire:sapphire_ore',
    'janoeo:sapphire_ore',
    'janoeo:sapphire_nether_ore',
    'janoeo:ruby_ore',
    'janoeo:ruby_nether_ore',
    'mekanism:lead_ore',
    'mekanism:tin_ore',
    'mekanism:copper_ore',
    'mekanism:uranium_ore',
    'ironchest:iron_to_gold_chest_upgrade',
    'ironchest:gold_to_diamond_chest_upgrade',
    'ironchest:copper_to_silver_chest_upgrade',
    'ironchest:silver_to_gold_chest_upgrade',
    'ironchest:copper_to_iron_chest_upgrade',
    'ironchest:diamond_to_crystal_chest_upgrade',
    'ironchest:wood_to_iron_chest_upgrade',
    'ironchest:wood_to_copper_chest_upgrade',
    'ironchest:diamond_to_obsidian_chest_upgrade',
    'metalbarrels:wood_to_copper',
    'metalbarrels:wood_to_iron',
    'metalbarrels:wood_to_silver',
    'metalbarrels:wood_to_gold',
    'metalbarrels:wood_to_diamond',
    'metalbarrels:wood_to_obsidian',
    'metalbarrels:wood_to_netherite',
    'metalbarrels:copper_to_iron',
    'metalbarrels:copper_to_silver',
    'metalbarrels:copper_to_gold',
    'metalbarrels:copper_to_diamond',
    'metalbarrels:copper_to_obsidian',
    'metalbarrels:iron_to_silver',
    'metalbarrels:iron_to_gold',
    'metalbarrels:iron_to_diamond',
    'metalbarrels:iron_to_obsidian',
    'metalbarrels:silver_to_gold',
    'metalbarrels:silver_to_diamond',
    'metalbarrels:silver_to_obsidian',
    'metalbarrels:gold_to_diamond',
    'metalbarrels:gold_to_obsidian',
    'metalbarrels:diamond_to_obsidian',
    'metalbarrels:wood_to_crystal',
    'metalbarrels:copper_to_crystal',
    'metalbarrels:iron_to_crystal',
    'metalbarrels:silver_to_crystal',
    'metalbarrels:gold_to_crystal',
    'metalbarrels:diamond_to_crystal',
    '#quark:candles',
    'projecte:watch_of_flowing_time',
    'quark:carrot_crate',
    'quark:potato_crate',
    'quark:apple_crate',
    'quark:beetroot_crate',
    'quark:sugar_cane_block',
    'byg:chain_plating',
    'aiotbotania:manasteel_hoe',
    'cyclic:uncrafter',
    'kubejs:mlsexy',
    'forbidden_arcanus:arcane_gold_ingot',
    'forbidden_arcanus:arcane_gold_nugget',
    'masterfulmachinery:quarkonium_qfe_port_energy_output',
    'masterfulmachinery:sonicrings_ringenergy_port_energy_output',
    'mysticalagriculture:infusion_crystal',
    'compactmachines:solid_wall',
    'immersiveengineering:stick_iron',
    'industrialforegoing:black_hole_controller',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_iron',
    'extendedcrafting:handheld_table',
    'mapperbase:raw_bitumen',
    'janoeo:amethyst',
    'janoeo:sapphire',
    'janoeo:ruby',
    'kubejs:incomplete_draconium',
    'ftbquests:missing_item',
    'mysticalagriculture:experience_capsule',
    'mysticalagriculture:passive_soulium_dagger',
    'mysticalagriculture:hostile_soulium_dagger',
    'mysticalagriculture:soul_extractor',
    'minecraft:lectern',
    'immersivepetroleum:bitumen',
    'immersiveengineering:slag',
    'masterfulmachinery:autopsi_autopsi_energy_port_energy_output',
    'masterfulmachinery:autoastral_dark_celestial_starlight_port_astral_starlight_output',
    'architects_palette:withered_bone',
    'janoeo:amethyst_ore',
    'projectex:arcane_tablet',
    'projectex:knowledge_sharing_book',
    'projectex:stone_table',
    'projectex:alchemy_table',
    'projectex:personal_link',
    'projectex:refined_link',
    'projectex:compressed_refined_link',
    'projecte:relay_mk3',
    'projecte:relay_mk2',
    'projecte:relay_mk1',
    'projecte:collector_mk3',
    'projecte:collector_mk2',
    'projecte:collector_mk1',
    'mapperbase:steel_hoe',
    'mapperbase:steel_sword',
    'mapperbase:steel_shovel',
    'mapperbase:steel_pickaxe',
    'mapperbase:steel_axe',
    'amb:terracotta_slab',
    'amb:terracotta_wall',
    'amb:terracotta_stairs',
    'zerocore:debugtool',
    'woot:debug',
    'projecte:tome',
    'gildedingot:heart_basalt',
    'ftbquests:custom_icon',
    'ftbquests:barrier',
    'ftbquests:stage_barrier',
    'ftbquests:detector',
    'envirocore:creative_energy_source',
    'masterfulmachinery:emcmaker_emc_energy_port_energy_output',
    'compactcrafting:projector_dish',
    'compactcrafting:base',
    'compactcrafting:rescan_proxy',
    'compactcrafting:match_proxy',
    'resourcefulbees:t1_hive_upgrade',
     'resourcefulbees:t2_hive_upgrade',
    'resourcefulbees:t3_hive_upgrade',
    'resourcefulbees:t4_hive_upgrade',
    /compactmachines:tunnel/,
    /mysticalagriculture:soul_jar/,
    /ftblibrary:fluid_container/,
    /tconstruct:part_builder/,
    /tconstruct:tinker_station/,
    /tconstruct:crafting_station/,
    /tconstruct:pickaxe/, 
    /tconstruct:sledge_hammer/, 
    /tconstruct:vein_hamme/, 
    /tconstruct:mattock/, 
    /tconstruct:excavator/, 
    /tconstruct:hand_axe/, 
    /tconstruct:broad_axe/, 
    /tconstruct:kama/, 
    /tconstruct:scythe/, 
    /tconstruct:dagger/, 
    /tconstruct:sword/, 
    /tconstruct:cleaver/, 
    /materialis:wrench/
  ])
})

onEvent('jei.add.items', e => {
  e.add([
    'tconstruct:crafting_station',
    Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
    Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
    Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'),
    'tconstruct:pickaxe',
    'tconstruct:sledge_hammer',
    'tconstruct:vein_hammer',
    'tconstruct:mattock',
    'tconstruct:excavator',
    'tconstruct:hand_axe',
    'tconstruct:broad_axe',
    'tconstruct:kama',
    'tconstruct:scythe',
    'tconstruct:dagger',
    'tconstruct:sword',
    'tconstruct:cleaver',
    'materialis:wrench'
      ])

})

