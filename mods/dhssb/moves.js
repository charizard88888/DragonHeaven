"use strict";

exports.BattleMovedex = {
	"partingshotspam": {
		num: 575,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches.",
		id: "partingshotspam",
		isViable: true,
		name: "Parting Shot Spam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		selfSwitch: true,
		boosts: {
			atk: -2,
			spa: -2,
		},
		secondary: false,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
"theloomeffect": {
		num: 407,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		id: "theloomeffect",
		name: "The Loom Effect",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					def: 2,
					spd: 2,
				},
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bolt Strike", target);
		},
		target: "normal",
		type: "Dragon",
	},
	"toodankforya": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "toodankforya",
		name: "Too Dank for ya",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onHit: function (target) {
			let success = false;
			for (let i in target.boosts) {
				if (target.boosts[i] === 0) continue;
				target.boosts[i] = -target.boosts[i];
				success = true;
			}
			if (!success) return false;
			this.add('-invertboost', target, '[from] move: Too Dank for ya');
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Topsy-Turvy", target);
			this.add('-anim', source, "Dark Void", target);
		},
		status: 'slp',
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	chachadance: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		id: "chachadance",
		name: "Cha Cha Dance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			status: 'brn',
			volatileStatus: 'confusion',
			if(Math.random(10)%2==0)
			{
				self: {
					boosts: {
						spe: 1,
					},
				},
			}
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
                        if (source.name == 'Quiet Chimchar') this.add("c|@Quiet Chimchar|I like to Cha Cha");
			this.add('-anim', source, "Teeter Dance", target);
		},
		type: "Fire",
		contestType: "Cool",
	},
	"dragonblades": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		id: "dragonblades",
		isViable: true,
		name: "Dragon Blades",
		pp: 5,
		priority: 2,
		flags: {contact: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
                        if (source.name == 'Lost Cause 146') this.add("c|$Lost Cause 146|Ryujin No Ken No Kurae!");
			this.add('-anim', source, "Precipice Blades", target);
		},
		secondary: false,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
        "rushb": {
		accuracy: 100,
		basePower: 250,
		category: "Special",
		id: "rushb",
		name: "Rush B",
		pp: 10,
		priority: 0,
		flags: {},
		ignoreImmunity: true,
		isFutureMove: true,
                onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Doom Desire", source);
                        if (source.name == 'Zmeeed') this.add("c|@Zmeeed|The bomb has been planted!");
			this.add('-anim', source, "Double Edge", target);
		},
		onTry: function (source, target) {
			target.side.addSideCondition('futuremove');
			if (target.side.sideConditions['futuremove'].positions[target.position]) {
				return false;
			}
			target.side.sideConditions['futuremove'].positions[target.position] = {
				duration: 3,
				move: 'rushb',
				source: source,
				moveData: {
					id: 'rushb',
					name: "Rush B",
					accuracy: 100,
					basePower: 250,
					category: "Special",
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Fighting',
				},
			};
			this.add('-start', source, 'move: Rush B');
			return null;
		},
		secondary: false,
		target: "normal",
		type: "Rush B",
		contestType: "Clever",
	},
	kickmyass: {
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		desc: "If this move is successful, the user must recharge on the following turn and cannot make a move.",
		shortDesc: "User cannot move next turn.",
		id: "kickmyass",
		name: "Kick My Ass",
		pp: 5,
		priority: 0,
		ohko: true,
		flags: {recharge: 1, protect: 1, mirror: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		onHit: function (target, source) {
			if (source.name == 'Paul☯71') this.add("c|~Paul☯71|LET THE WORLD KNOW ACTUALLY WHAT ASS MEANS");
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyper Beam", target);
		},
		secondary: false,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	spacecompress: {
		accuracy: 100,
		category: "Status",
		id: "spacecompress",
		name: "Space Compress",
		isNonstandard: true,
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Wish", target);
			this.add('-anim', target, "Dark Void", target);
		},
		self: {
				boosts: {
					spa: 1,
					spd: 1,
					evasion: 1,
				},
			},
		boosts: {
			atk: -1,
			spe: -1,
			def: -1,
		},
		secondary: false,
		target: "normal",
		type: "Dragon",
	},
	ggm8: {
		accuracy:100,
		pp:15,
		id: "ggm8",
		name: "ggm8",
		isNonstandard: true,
		isViable: true,
		basePower:150,
		category:"Physical",
		type:"Dragon",
		target:"normal",
		secondary:{
			chance:80,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
                recoil : [2, 5],
		onHit: function (target, source) {
			if (this.random(2) === 1) target.trySetStatus('brn', source);
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "V-Create", target);
		},
	},
	sacredhax: {
		accuracy:100,
		pp:15,
		id: "sacredhax",
		name: "Sacred Hax",
		isNonstandard: true,
		isViable: true,
		basePower:150,
		category:"Physical",
		type:"Psychic",
		target:"normal",
		secondary:{
			secondary: {
			chance: 40,
			status: 'brn',
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bolt Strike", target);
		},
	},
	hyperspeedpunch: {
	accuracy: 100,
	basePower: 45,
	category: "Physical",
	id: "hyperspeedpunch",
	isViable: true,
	isNonstandard: true,
	name: "Hyperspeed Punch",
	pp: 10,
	priority: 2,
	flags: {protect: 1, mirror: 1},
	onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Mach Punch", target);
	},
	secondary: {
		chance: 20,
		volatileStatus: 'flinch',
	},
	target: "normal",
	type: "Bug",
	},
        garchompepicness: {
		accuracy: 100,
		category: "Status",
		id: "garchompepicness",
		isNonstandard: true,
		name: "GARCHOMP EPICNESS",
		pp: 5,
		priority: 2,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		self: {boosts: {spe:1, atk:1, def:1}},
		secondary: {
			self: {
				boosts: {
					atk: 1.5,
					def: 2,
					spe: 2.5,
				},
			},
		},
		onHit: function (target, source) {
			target.side.addSideCondition('toxicspikes', source);
			target.side.addSideCondition('toxicspikes', source);
			target.side.addSideCondition('toxicspikes', source);
			source.side.addSideCondition('luckychant', source);
			if (source.name === 'PI EddyChomp') this.add("c|&PI EddyChomp|Wait guys, powering up! Listen to this: https://www.youtube.com/watch?v=A0fAuX8jiPk while you're waiting! :)");
		},
		onModifyMove: function (move, pokemon, target) {
			move.type = '???';
		},
		target: "normal",
		type: "Normal",
	},
	"blehflame": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
		id: "blehflame",
		isViable: true,
		name: "Bleh fLame",
		pp: 10,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Blue Flare", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 40,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 2,
					spd: 1,
					spe: 2,
				},
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Tough",
	},
	haxingrage: {
		accuracy:100,
		pp:10,
		id: "haxingrage",
		name: "Haxing Rage",
		isNonstandard: true,
		isViable: true,
		basePower:110,
		category:"Physical",
		type:"Dragon",
		target:"normal",
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
			volatileStatus: 'confusion',
		},
		drain: [1, 2],
		flags: {protect: 1, mirror: 1, heal: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Outrage", target);
		},
	},
	"waitandhope": {
		accuracy: 100,
		basePower: 130,
		category: "Special",
		id: "waitandhope",
		name: "Wait and hope",
		pp: 20,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onTry: function (source, target, move) {
			if (source.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', source, "skyattack", target);
			if (!this.runEvent('ChargeMove', source, target, move)) {
				this.add('-anim', source, "skyattack", target);
				return;
			}
			source.addVolatile('twoturnmove', target);
			return null;
		},
		effect: {
			duration: 2,
			onAccuracy: function (accuracy, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return;
				}
				if (move.id === 'skyuppercut' || move.id === 'thunder' || move.id === 'hurricane' || move.id === 'smackdown' || move.id === 'thousandarrows' || move.id === 'helpinghand') {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				return 0;
			},
			onSourceModifyDamage: function (damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
	},
	"yomammajoke": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt.",
		id: "yomammajoke",
		isViable: true,
		name: "Yo MaMMa Joke",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1, distance: 1, heal: 1},
		drain: [3, 4],
		secondary: false,
		target: "any",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Taunt", target);
			this.add('-anim', source, "Extreme Speed", target);
			this.add("c|~Spandan|"+["Yo mama so stupid she got locked in a grocery store and starved!", "Yo mama so fat that the Richie Rich had to pay for her lipo-suction operation.","Yo mama so fat it took her four weeks to die from lethal injection.","Yo mama so fat she sat on an iPhone and turned it into an iPad","Yo mama so fat when she stepped on the scale, the doctor said \"Holy Crap, That's My Phone Number\"","Yo mama so fat she uses Google Earth to take a selfie.","Yo mama so stupid when the computer said \"Press any key to continue\", she couldn't find the \"Any\" key.","Yo mama so bald, I could polish her head and take her bowling.","Yo mama is so ugly, Bob the builder said: 'i can't fix that.'","Yo mama so ugleh, the Illuminati closed its eye.","Yo mama so ugleh, Hello Kitty said goodbye.","Yo mama so ugly, One direction went the other direction."][this.random(12)]);
		},
		type: "Flying",
		contestType: "Cool",
	},
	dragonshift: {
		accuracy: 100,
		category: "Status",
		id: "dragonshift",
		isNonstandard: true,
		name: "Dragon Shift",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		self: {
				boosts: {
					atk: 3,
					def: 1.5,
					spe: 2,
					spd: 1,
				},
			},
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Dance", source);
			if (source.name === 'Flygonerz') this.add("c|&Flygonerz|Get re(kt)ddy");
			this.useMove('Wish', source);
		},
		target: "self",
		type: "Dragon",
	},
	legendsambition: {
		accuracy: 100,
		basePower: 130,
		category: "Special",
		id: "legendsambition",
		isNonstandard: true,
		name: "Legend\'s Ambition",
		pp: 5,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Judgment", target);
		},
		self: {
			boosts: {
				def: -1,
                                spd:-1,
			},
		},
		contestType:"Cool",
		target: "normal",
		type: "Dragon",
	},
	"logicpower": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "Deals damage to the target based on its Special Defense instead of Defense.",
		shortDesc: "Damages target based on Sp. Def, not Def.",
		id: "logicpower",
		isViable: true,
		name: "Logic Power",
		pp: 10,
		priority: 0,
		self: {
			boosts: {
				def: 1,
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Nasty Plot", target);
		},
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Dark",
		contestType: "Beautiful",
	},
		"superswitch": {
		num: 226,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes, confusion, and certain move effects transferred to it.",
		shortDesc: "User switches, passing stat changes and more.",
		id: "superswitch",
		isViable: true,
		name: "Super Switch",
		pp: 40,
		priority: 5,
		self: {
		boosts: {
				def: 1,
				spd: 1,
			},
		},
		onPrepareHit: function (target, source) {
				this.useMove('Substitute', source);
				this.useMove('Baton Pass', source);
			},
		flags: {},
		selfSwitch: 'copyvolatile',
		secondary: false,
		target: "self",
		type: "Dragon",
		contestType: "Cute",
	},
	"banhammah": {
		num: 18,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target used Ingrain previously or has the Ability Suction Cups.",
		shortDesc: "Forces the target to switch to a random ally.",
		id: "banhammah",
		isViable: true,
		name: "BANHAMMAH!!!!",
		pp: 5,
		priority: 7,
		flags: {reflectable: 1, mirror: 1, authentic: 1},
		forceSwitch: true,
		secondary: false,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	"massacre": {
		num: 153,
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Ability Damp.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		id: "massacre",
		isViable: true,
		name: "Massacre",
		pp: 5,
		priority: 3,
		flags: {protect: 1, mirror: 1},
		selfdestruct: true,
		secondary: false,
		target: "allAdjacent",
		type: "Dragon",
		contestType: "Beautiful",
	},
	"raginglake": {
		num: 560,
		accuracy: 60,
		basePower: 150,
		category: "Physical",
		desc: "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Combines Flying in its type effectiveness.",
		id: "raginglake",
		name: "Raging Lake",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1},
		onEffectiveness: function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Dragon', type);
		},
		priority: 0,
		secondary: false,
		target: "any",
		type: "Water",
		contestType: "Tough",
	},
	dragonsymphony: {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		id: "dragonsymphony",
		isNonstandard: true,
		isViable: true,
		name: "Dragon Symphony",
		pp: 20,
                noPPBoosts: true,
		priority: 0,
		flags: {mirror: 1, protect: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Crabhammer", target);
		},
		onHit: function (target, source) {
			if (toId(source.name) === 'eternalmayhem') {
				this.add('c|@Eternal Mayhem|How \'bout we turn on some trap, eh? Or the classics, they\'ll lull you to sleep, they will!');
			}
		},
		secondary: {
			chance: 100,
			status: 'sleep',
		},
		self: {
	        chance: 40,
		boosts: {
                        atk: 1,
			spe: 1,
		},
	},
		recoil: [1, 2],
		target: "normal",
		type: "Dragon",
	},
	// Modified moves
	"defog": {
		inherit: true,
		onHit: function (target, source, move) {
			if (!target.volatiles['substitute'] || move.infiltrates) this.boost({evasion:-1});
			let removeTarget = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
			let removeAll = {spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
			for (let targetCondition in removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll[targetCondition]) continue;
					this.add('-sideend', target.side, this.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + target);
				}
			}
			for (let sideCondition in removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
				}
			}
		},
	},
	"rapidspin": {
		inherit: true,
		self: {
			onHit: function (pokemon) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				let sideConditions = {spikes:1, toxicspikes:1, burnspikes:1, stealthrock:1, stickyweb:1};
				for (let i in sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
						this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
				if (pokemon.hp && pokemon.volatiles['maelstrm']) {
					pokemon.removeVolatile('maelstrm');
				}
				if (pokemon.hp && pokemon.volatiles['splinters']) {
					pokemon.removeVolatile('splinters');
				}
			},
		},
	},
	"hypnosis": {
		inherit: true,
		accuracy: 45,
	},
};
