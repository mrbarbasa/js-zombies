/**
 * Creates an item.
 *
 * @name Item
 * @param {string} name     The item's name.
 * @property {string} name
 */


/**
 * Creates a weapon item.
 * Weapon items can be equipped for use in battle.
 *
 * Use the call method on the Item constructor.
 * Set Weapon's prototype to a new instance of Item.
 *
 * @name Weapon
 * @param {string} name     The weapon's name.
 * @param {number} damage   The weapon's damage.
 * @property {number} damage
 */


/**
 * Creates a food item.
 * Food items give energy, restoring health to the player.
 *
 * Use the call method on the Item constructor.
 * Set Food's prototype to a new instance of Item.
 *
 * @name Food
 * @param {string} name       The food's name.
 * @param {number} energy     The energy the food provides.
 * @property {number} energy
 */


/**
 * Creates a player in a zombie-infested world.
 *
 * @name Player
 * @param {string} name                    The player's name.
 * @param {number} health                  The player's health.
 * @param {number} strength                The player's strength.
 * @param {number} speed                   The player's speed.
 * @private {array} pack                   Default value should be empty.
 * @private {number} maxHealth             Default value should be set to `health`.
 * @property {string} name
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive             Default value should be `true`.
 * @property {Weapon/boolean} equipped     Default value should be `false`.
 * @property {method} getPack              Returns private variable `pack`.
 * @property {method} getMaxHealth         Returns private variable `maxHealth`.
 */


/**
 * Player checks the contents of their pack.
 *
 * Nicely format and print the items in the player's pack.
 * To access the pack, be sure to use Player's getPack method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name checkPack
 */


/**
 * Player takes an item from the world and places it into their pack.
 *
 * Player's pack can only hold a maximum of 3 items, so if they try to add more
 *   than that to the pack, return false.
 * Before returning true or false, print a message containing the player's
 *   name and item's name if successful.  Otherwise, print a message saying
 *   that the pack is full so the item could not be stored.
 * Note: The player is allowed to store similar items (items with the same name).
 * You should be able to invoke this function on a Player instance.
 *
 * @name takeItem
 * @param {Item/Weapon/Food} item   The item to take.
 * @return {boolean} true/false     Whether player was able to store item in pack.
 */


/**
 * Player discards an item from their pack.
 *
 * Use Array's indexOf method to check if the pack contains the item.
 * If an item is not found in the pack, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * If the item is in the pack, remove it from the pack using Array's splice method.
 * Print the player and item names and a message saying the item was discarded.
 * Return true for the successful discard.
 * Note: The splice method can also be used for array element replacement.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * If the item is not in the pack, return a message with the item name saying
 *   nothing was discarded since the item could not be found.
 * Return false in this case.
 *
 * You should be able to invoke this function on a Player instance.
 *
 * @name discardItem
 * @param {Item/Weapon/Food} item   The item to discard.
 * @return {boolean} true/false     Whether player was able to remove item from pack.
 */


/**
 * Player equips a weapon item.
 *
 * Player can only equip Weapon instances.
 * Player can only equip weapon items from their pack.
 *
 * If the player already has a weapon equipped (the equipped property
 *   is set to an Item), find the itemToEquip in the pack and replace
 *   it with the currently equipped item.  Then set the equipped property
 *   to the itemToEquip.
 * However, if the player doesn't already have a weapon equipped, simply
 *   equip that item and remove it from the pack.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equip
 * @param {Weapon} itemToEquip  The weapon item to equip.
 */


/**
 * Player eats a food item, restoring their health.
 *
 * Player can only eat Food instances.
 * Player can only eat food items from their pack.
 *
 * Remove itemToEat from the pack.
 * Increase the player's health by the food's energy amount, but do not
 *   exceed the player's max health.  If exceeded, simply set player's health
 *   to max health instead.
 * To access the player's max health, be sure to use Player's getMaxHealth method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name eat
 * @param {Food} itemToEat  The food item to eat.
 */


/**
 * Player uses an item from the pack.
 *
 * If the item is a weapon, the player should equip the item.
 * If the item is food, the player should eat the item.
 * You should be able to invoke this function on a Player instance.
 *
 * @name useItem
 * @param {Item/Weapon/Food} item   The item to use.
 */


/**
 * Player checks their equipment.
 *
 * Prints the player's name and equipped weapon's name.
 * If nothing is equipped, prints a message saying so.
 * Also returns the equipped weapon's name or false if nothing is equipped.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equippedWith
 * @return {string/boolean}   Weapon name or false if nothing is equipped.
 */


/**
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */


/**
 * Creates a fast zombie.
 *
 * Use the call method on the Zombie constructor.
 * Set FastZombie's prototype to a new instance of Zombie.
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * Creates a strong zombie.
 *
 * Use the call method on the Zombie constructor.
 * Set StrongZombie's prototype to a new instance of Zombie.
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * Creates a ranged zombie.
 *
 * Use the call method on the Zombie constructor.
 * Set RangedZombie's prototype to a new instance of Zombie.
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * Creates an exploding zombie.
 *
 * Use the call method on the Zombie constructor.
 * Set ExplodingZombie's prototype to a new instance of Zombie.
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * Calculates the attack damage of a creature instance.
 *
 * Use `instanceof` to determine what type of object creature is.
 * Then, based on the type, set a variable called `randomizer` equal to
 *   a `Math.floor((Math.random() * x) + y)` formula to achieve the following
 *   random values:
 * -- Player:           2, 3, 4
 * -- Zombie:           5, 6, 7
 * -- FastZombie:       2, 3, 4, 5
 * -- StrongZombie:     2, 3, 4, 5, 6, 7, 8, 9
 * -- RangedZombie:     2, 3, 4, 5, 6, 7
 * -- ExplodingZombie:  3, 4, 5
 * Lastly, set the damage to the following formula and return this damage:
 *   `Math.floor((creature.strength / randomizer) + (Math.log(creature.speed) / randomizer * 10))`.
 *
 * @name calculateAttackDamage
 * @param {Player/Zombie/FastZombie/StrongZombie/RangedZombie/ExplodingZombie} creature
 *   The creature instance whose attack damage is to be calculated.
 * @return {number}   The amount of damage the creature will inflict.
 */


/**
 * Zombie takes damage.
 *
 * The zombie's health decreases by the amount of damage taken.
 * The zombie's health should not become lower than 0.
 * If the zombie's health is 0, set their `isAlive` property to false.
 * If the zombie is dead, print a message that the zombie is slain.
 * You should be able to invoke this function on a Zombie instance.
 *
 * @name takeDamage
 * @param {number} damage   The amount of damage the zombie receives.
 */


/**
 * Player attacks a zombie.
 *
 * Calculate the player's base attack damage by passing this instance to the
 *   calculateAttackDamage function.
 * If the player has a weapon equipped, print a message with the weapon's name.
 *   The total damage then becomes the base player damage plus the weapon damage.
 * If the player has no weapon equipped, print any weaponless attack to console.
 *   In this case, the total damage is just the base player damage.
 * The zombie then takes all this damage.
 * You should be able to invoke this function on a Player instance.
 *
 * @name attack
 * @param {Zombie} zombie   The zombie to attack.
 * @return {number}         Damage dealt by attacking.
 */


/**
 * Player takes damage.
 *
 * The player's health decreases by the amount of damage taken.
 * The player's health should not become lower than 0.
 * If the player's health is 0, set their `isAlive` property to false.
 * If the player is dead, print a message that they're dead and the game is over.
 * You should be able to invoke this function on a Player instance.
 *
 * @name takeDamage
 * @param {number} damage   The amount of damage the player receives.
 */


/**
 * Zombie attacks a player.
 *
 * Calculate the zombie's attack damage by passing this instance to the
 *   calculateAttackDamage function.  Player takes this amount of damage.
 * Print any zombie attack message you'd like; just include the player's name.
 * You should be able to invoke this function on a Zombie instance.
 *
 * @name attack
 * @param {Player} player   The player to attack.
 * @return {number}         Damage dealt by attacking.
 */


/**
 * FastZombie charges at full speed.
 *
 * Calculate the zombie's base attack damage by passing this instance to the 
 *   calculateAttackDamage function.  Player takes this amount of damage.
 * Print any zombie charge message you'd like; just include the player's name.
 *
 * Player takes additional damage if the zombie's speed is greater than the player's.
 * Additional damage should equal the floor of half the base zombie attack damage.
 *
 * You should be able to invoke this function on a FastZombie instance.
 *
 * @name charge
 * @param {Player} player   The player to charge at.
 * @return {number}         Damage dealt by charging.
 */


/**
 * StrongZombie crushes with might.
 *
 * Calculate the zombie's base attack damage by passing this instance to the 
 *   calculateAttackDamage function.  Player takes this amount of damage.
 * Print any zombie crush message you'd like; just include the player's name.
 *
 * Player takes additional damage if the zombie's strength is greater than the player's.
 * Additional damage should equal the floor of 80% of the base zombie attack damage.
 *
 * You should be able to invoke this function on a StrongZombie instance.
 *
 * @name crush
 * @param {Player} player   The player to crush.
 * @return {number}         Damage dealt by crushing.
 */


/**
 * RangedZombie spits toxic ooze from afar.
 *
 * Calculate the zombie's base attack damage by passing this instance to the 
 *   calculateAttackDamage function.  Player takes this amount of damage.
 * Print any zombie spit message you'd like; just include the player's name.
 *
 * Player takes additional damage if their current health is less than half of max health.
 * Additional damage should equal the floor of 70% of the base zombie attack damage.
 *
 * You should be able to invoke this function on a RangedZombie instance.
 *
 * @name spit
 * @param {Player} player   The player to spit at.
 * @return {number}         Damage dealt by spitting.
 */


/**
 * ExplodingZombie explodes burning flesh and guts in every direction.
 *
 * Calculate the zombie's base attack damage by passing this instance to the 
 *   calculateAttackDamage function.  Player takes this amount of damage.
 * Print any zombie explode message you'd like; just include the player's name.
 *
 * Player takes additional damage if the zombie's speed is greater than the
 *   player's and the player's current health is less than half of max health.
 * Additional damage should equal twice the base zombie attack damage.
 *
 * ExplodingZombie should now be dead (health set to 0, `isAlive` set to false).
 *
 * You should be able to invoke this function on an ExplodingZombie instance.
 *
 * @name explode
 * @param {Player} player   The player to explode by.
 * @return {number}         Damage dealt by exploding.
 */


/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();

  // console.log("Zombie max health: " + zombie.health);
  // player.attack(zombie);
  // console.log("Zombie health: " + zombie.health);
  // player.attack(zombie);
  // console.log("Zombie health: " + zombie.health);

  // console.log("Player max health: " + player.health);
  // zombie.attack(player);
  // console.log("Player health: " + player.health);
  // zombie.attack(player);
  // console.log("Player health: " + player.health);
}
