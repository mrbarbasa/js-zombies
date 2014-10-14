# JavaScript Zombies

1. Navigate to this project in your terminal.
2. Run `http-server`.
3. Open [http://localhost:8080](http://localhost:8080) in Chrome.  *You should see failing tests.*
4. Complete the exercise by following the comments in `zombies.js` or the README.

For each test you complete:

1. Save `zombies.js`.
2. Reload [http://localhost:8080](http://localhost:8080) in Chrome.
3. Check if the test passes.
4. If it passes, commit your work.

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

Player can only equip Weapon instances.  
Player can only equip weapon items from their pack.

If the player already has a weapon equipped (the `equipped` property is set to an Item), find the itemToEquip in the pack and replace it with the currently equipped item.  Then set the equipped property to the itemToEquip.

However, if the player has nothing equipped, simply equip itemToEquip and remove it from the pack.  
You should be able to invoke this function on a Player instance.

**Parameters**  
`itemToEquip`: Weapon, The weapon item to equip.


eat(itemToEat)
-----------------------------
*Player eats a food item, restoring their health.*

Player can only eat Food instances.  
Player can only eat food items from their pack.

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


FastZombie(health, strength, speed)
-----------------------------
*Creates a fast zombie.*

Use the `call` method on the Zombie constructor.  
Set FastZombie's prototype to a new instance of Zombie.

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.


StrongZombie(health, strength, speed)
-----------------------------
*Creates a strong zombie.*

Use the `call` method on the Zombie constructor.  
Set StrongZombie's prototype to a new instance of Zombie.

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.


RangedZombie(health, strength, speed)
-----------------------------
*Creates a ranged zombie.*

Use the `call` method on the Zombie constructor.  
Set RangedZombie's prototype to a new instance of Zombie.

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.


ExplodingZombie(health, strength, speed)
-----------------------------
*Creates an exploding zombie.*

Use the `call` method on the Zombie constructor.  
Set ExplodingZombie's prototype to a new instance of Zombie.

**Parameters**  
`health`: number, The zombie's health.  
`strength`: number, The zombie's strength.  
`speed`: number, The zombie's speed.
