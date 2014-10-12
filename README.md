# JavaScript Zombies

1. Navigate to this project in your terminal.
2. Complete the exercises by following the comments in `zombies.js`.
3. To run the game, enter `node zombies.js` in your terminal.

---

Item(name)
-----------------------------
*Creates an item.*

**Parameters**  
`name`: string, The item's name.

**Public Properties**  
`name`: string


Weapon(name, damage)
-----------------------------
*Creates a weapon item.*  
*Weapon items can be equipped for use in battle.*

Use the `call` method on the Item constructor.  
Set Weapon's prototype to a new instance of Item.

**Parameters**  
`name`: string, The weapon's name.  
`damage`: number, The weapon's damage.

**Public Properties**  
`damage`: number


Food(name, energy)
-----------------------------
*Creates a food item.*  
*Food items give energy, restoring health to the player.*

Use the `call` method on the Item constructor.  
Set Food's prototype to a new instance of Item.

**Parameters**  
`name`: string, The food's name.  
`energy`: number, The energy the food provides.

**Public Properties**  
`energy`: number


Player(name, health, strength, speed)
-----------------------------
*Creates a player in a zombie-infested world.*

**Parameters**  
`name`: string, The player's name.  
`health`: number, The player's health.  
`strength`: number, The player's strength.  
`speed`: number, The player's speed.

**Private Properties**  
`pack`: array, Default value should be empty.  
`maxHealth`: number, Default value should be set to `health`.

**Public Properties**  
`name`: string  
`health`: number  
`strength`: number  
`speed`: number  
`isAlive`: boolean, Default value should be `true`.  
`equipped`: Weapon/boolean, Default value should be `false`.  
`getPack`: method, Returns private variable `pack`.  
`getMaxHealth`: method, Returns private variable `maxHealth`.


checkPack()
-----------------------------
*Player checks the contents of their pack.*  

Nicely format and print the items in the player's pack.  
To access the pack, be sure to use Player's `getPack` method.  
You should be able to invoke this function on a Player instance.


takeItem(item)
-----------------------------
*Player takes an item from the world and places it into their pack.*

Player's pack can only hold a maximum of 3 items, so if they try to add more than that, return false.  
Before returning true or false, print a message containing the player and item names if successful.  
Otherwise, print a message saying that the pack is full so the item could not be stored.  
Note: The player is allowed to store similar items (items with the same name).  
You should be able to invoke this function on a Player instance.

**Parameters**  
`item`: Item/Weapon/Food, The item to take.

**Returns**: boolean, Whether player was able to store item in pack.


discardItem(item)
-----------------------------
*Player discards an item from their pack.*

Use Array's `indexOf` method to check if the pack contains the item.  
If an item is not found in the pack, indexOf returns -1.  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

If the item is in the pack, remove it from the pack using Array's `splice` method.  
Note: The splice method can also be used for array element replacement.  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice  
Then print the player and item names and a message saying the item was discarded.  
Return true for the successful discard.

If the item is not in the pack, return a message with the item name saying nothing was discarded since the item could not be found.  Return false in this case.

You should be able to invoke this function on a Player instance.

**Parameters**  
`item`: Item/Weapon/Food, The item to discard.

**Returns**: boolean, Whether player was able to remove item from pack.


equip(itemToEquip)
-----------------------------
*Player equips a weapon item.*

If the player already has a weapon equipped (the `equipped` property is set to an Item), find the itemToEquip in the pack and replace it with the currently equipped item.  Then set the equipped property to the itemToEquip.

However, if the player has nothing equipped, simply equip itemToEquip and remove it from the pack.  
You should be able to invoke this function on a Player instance.

**Parameters**  
`itemToEquip`: Weapon, The weapon item to equip.


eat(itemToEat)
-----------------------------
*Player eats a food item, restoring their health.*

Remove itemToEat from the pack.  
Increase the player's health by the food's energy amount, but do not exceed the player's max health.  
If exceeded, simply set player's health to max health instead.  
To access the player's max health, be sure to use Player's `getMaxHealth` method.  
You should be able to invoke this function on a Player instance.

**Parameters**  
`itemToEat`: Food, The food item to eat.


useItem(item)
-----------------------------
*Player uses an item from the pack.*

If the item is a weapon, the player should equip the item.  
If the item is food, the player should eat the item.  
You should be able to invoke this function on a Player instance.

**Parameters**  
`item`: Item/Weapon/Food, The item to use.


equippedWith()
-----------------------------
*Player checks their equipment.*

Prints the player's name and equipped weapon's name.  
If nothing is equipped, prints a message saying so.  
Also returns the equipped weapon's name or false if nothing is equipped.  
You should be able to invoke this function on a Player instance.

**Returns**: weapon name or `false`: string/boolean, Weapon name or `false` if nothing is equipped.


attack(zombie)
-----------------------------
*Player attacks a zombie.*

Calculate the player's base attack damage by passing this instance to the `calculateAttackDamage` function, which you will define later.

If the player has a weapon equipped, print a message with the weapon's name.  
The total damage then becomes the base player damage plus the weapon damage.

If the player has no weapon equipped, print any weaponless attack to console.  
In this case, the total damage is just the base player damage.

The zombie then takes all this damage (this is a function you'll define later).  
You should be able to invoke this function on a Player instance.

**Parameters**  
`zombie`: Zombie, The zombie to attack.


takeDamage(damage)
-----------------------------
*Player takes damage.*

The player's health decreases by the amount of damage taken.  
The player's health should not drop lower than 0.  
If the player's health is 0, set their `isAlive` property to false.  
If the player is dead, print a message that they're dead and the game is over.  
You should be able to invoke this function on a Player instance.
 
**Parameters**  
`damage`: number, The amount of damage the player receives.


Zombie(health, strength, speed)
-----------------------------
*Creates a normal zombie.*

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.

**Private Properties**  
`maxHealth`: number, Default value should be set to `health`.

**Public Properties**  
`health`: number  
`strength`: number  
`speed`: number  
`isAlive`: boolean, Default value should be `true`.


attack(player)
-----------------------------
*Zombie attacks a player.*

Calculate the zombie's attack damage by passing this instance to the `calculateAttackDamage` function, which you will define later.  
Print any zombie attack message you'd like; just include the player's name.  
The player then takes all this damage (use a method you already defined).  
You should be able to invoke this function on a Zombie instance.
 
**Parameters**  
`player`: Player, The player to attack.


takeDamage(damage)
-----------------------------
*Zombie takes damage.*

The zombie's health decreases by the amount of damage taken.  
The zombie's health should not drop lower than 0.  
If the zombie's health is 0, set their `isAlive` property to false.  
If the zombie is dead, print a message that the zombie is slain.  
You should be able to invoke this function on a Zombie instance.
 
**Parameters**  
`damage`: number, The amount of damage the zombie receives.


FastZombie(health, strength, speed)
-----------------------------
*Creates a fast zombie.*

Use the `call` method on the Zombie constructor.  
Set FastZombie's prototype to a new instance of Zombie.

For the `charge` method, calculate the zombie's attack damage by passing this instance to the `calculateAttackDamage` function.  Player takes this amount of damage.  
Print any zombie charge message you'd like; just include the player's name.

Player takes additional damage if the zombie's speed is greater than the player's.  
Additional damage should equal the floor of half the zombie attack damage.

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.

**Public Properties**  
`charge`: method, with param `player`: Player, Implementation details above.


StrongZombie(health, strength, speed)
-----------------------------
*Creates a strong zombie.*

Use the `call` method on the Zombie constructor.  
Set StrongZombie's prototype to a new instance of Zombie.

For the `crush` method, calculate the zombie's attack damage by passing this instance to the `calculateAttackDamage` function.  Player takes this amount of damage.  
Print any zombie crush message you'd like; just include the player's name.

Player takes additional damage if the zombie's strength is greater than the player's.  
Additional damage should equal the floor of a quarter of the zombie attack damage.
  
**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.

**Public Properties**  
`crush`: method, with param `player`: Player, Implementation details above.


RangedZombie(health, strength, speed)
-----------------------------
*Creates a ranged zombie.*

Use the `call` method on the Zombie constructor.  
Set RangedZombie's prototype to a new instance of Zombie.

For the `spit` method, calculate the zombie's attack damage by passing this instance to the `calculateAttackDamage` function.  Player takes this amount of damage.  
Print any zombie spit message you'd like; just include the player's name.

Player takes additional damage if their current health is less than half of max health.  
Additional damage should equal the floor of a third of the zombie attack damage.
  
**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.

**Public Properties**  
`spit`: method, with param `player`: Player, Implementation details above.


ExplodingZombie(health, strength, speed)
-----------------------------
*Creates an exploding zombie.*

Use the `call` method on the Zombie constructor.  
Set ExplodingZombie's prototype to a new instance of Zombie.

For the `explode` method, calculate the zombie's attack damage by passing this instance to the `calculateAttackDamage` function.  Player takes this amount of damage.  
Print any zombie explode message you'd like; just include the player's name.

Player takes additional damage if the zombie's speed is greater than the player's speed, and the player's current health is less than half of max health.  
Additional damage should equal the floor of half the zombie attack damage.  
ExplodingZombie should now be dead (`health` set to 0, `isAlive` set to false).

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.

**Public Properties**  
`explode`: method, with param `player`: Player, Implementation details above.


calculateAttackDamage(creature)
-----------------------------
*Calculates the attack damage of a creature instance.*

Use `instanceof` to determine what type of object the creature is.  
Then, based on the type, set a variable called `randomizer` equal to a `Math.floor((Math.random() * x) + y)` formula to achieve the following random values:  
-- Player:           `2, 3, 4`  
-- Zombie:           `5, 6, 7`  
-- FastZombie:       `2, 3, 4, 5`  
-- StrongZombie:     `2, 3, 4, 5, 6, 7, 8, 9`  
-- RangedZombie:     `2, 3, 4, 5, 6, 7`  
-- ExplodingZombie:  `3, 4, 5`  
Lastly, set the damage to the following formula and return this damage:  
`Math.floor((creature.strength / randomizer) + (Math.log(creature.speed) / randomizer * 10))`.

**Parameters**  
`creature`: Player/Zombie/FastZombie/StrongZombie/RangedZombie/ExplodingZombie, The creature instance whose attack damage is to be calculated.

**Returns**: number, The amount of damage the creature will inflict.
