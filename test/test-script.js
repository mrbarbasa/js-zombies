var expect = chai.expect;
var should = chai.should();
var sandbox;

beforeEach(function() {
  sandbox = sinon.sandbox.create();
});

afterEach(function() {
  sandbox.restore();
});

describe('Item', function() {
  it('should be a function', function() {
    expect(Item).to.be.a('function');
  });

  it('should have a name', function() {
    var torch = new Item("Torch");
    torch.name.should.equal('Torch');
  });
}); // end Item specs

describe('Weapon', function() {
  it('should be a function', function() {
    expect(Weapon).to.be.a('function');
  });

  it('should be an Item', function() {
    var dagger = new Weapon("Dagger", 10);
    expect(dagger instanceof Item).to.be.true;
  });

  it('should call Item\'s constructor', function() {
    sandbox.stub(window.Item, "call");

    var dagger = new Weapon("Dagger", 10);
    sinon.assert.calledWithExactly(Item.call, dagger, 'Dagger');
  });

  it('should have a name', function() {
    var dagger = new Weapon("Dagger", 10);
    dagger.name.should.equal('Dagger');
  });

  it('should have a damage property', function() {
    var dagger = new Weapon("Dagger", 10);
    dagger.damage.should.equal(10);
  });
}); // end Weapon specs

describe('Food', function() {
  it('should be a function', function() {
    expect(Food).to.be.a('function');
  });

  it('should be an Item', function() {
    var apple = new Food("Apple", 25);
    expect(apple instanceof Item).to.be.true;
  });

  it('should call Item\'s constructor', function() {
    sandbox.stub(window.Item, "call");

    var apple = new Food("Apple", 25);
    sinon.assert.calledWithExactly(Item.call, apple, 'Apple');
  });

  it('should have a name', function() {
    var apple = new Food("Apple", 25);
    apple.name.should.equal('Apple');
  });

  it('should have restore energy', function() {
    var apple = new Food("Apple", 25);
    apple.energy.should.equal(25);
  });
}); // end Food specs

describe('Player', function() {
  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should have a name', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.name.should.equal("Lee");
  });

  it('should have health', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.health.should.equal(100);
  });

  it('should have a strength attribute', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.strength.should.equal(15);
  });

  it('should have a speed attribute', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.speed.should.equal(7);
  });

  it('should have a private pack variable', function() {
    var player = new Player("Lee", 100, 15, 7);
    expect(player.pack).to.be.undefined;
  });

  it('should have a private maxHealth variable', function() {
    var player = new Player("Lee", 100, 15, 7);
    expect(player.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.isAlive.should.equal(true);
  });

  it('should not be equipped', function() {
    var player = new Player("Lee", 100, 15, 7);
    player.equipped.should.equal(false);
  });

  describe('.getPack', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.getPack).to.be.a('function');
    });
    it('should return the player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.getPack()).to.be.an('Array');
    });
  }); // end .getPack specs

  describe('.getMaxHealth', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.getMaxHealth).to.be.a('function');
    });

    it('should return the player\'s max health', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.getMaxHealth()).to.be.a('number');
    });

    it('should be at least the player\'s current health', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.getMaxHealth()).to.be.at.least(player.health);
    });
  }); // end .getMaxHealth specs

  describe('.takeItem', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.takeItem).to.be.a('function');
    });

    it('should place an item into the player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var torch = new Item("Torch");
      var dagger = new Weapon("Dagger", 10);
      var apple = new Food("Apple", 25);


      player.takeItem(torch);
      player.takeItem(dagger);
      player.takeItem(apple);

      player.getPack().should.contain(torch);
      player.getPack().should.contain(dagger);
      player.getPack().should.contain(apple);
    });

    it('should not place an item into the player\'s pack if it is full', function() {
      var player = new Player("Lee", 100, 15, 7);
      var torch = new Item("Torch");
      var dagger = new Weapon("Dagger", 10);
      var apple = new Food("Apple", 25);
      var banana = new Food("Banana", 35);

      sandbox.stub(console, "log");
      player.takeItem(torch);
      player.takeItem(dagger);
      player.takeItem(apple);
      player.takeItem(banana);
      sinon.assert.called(console.log);

      player.getPack().should.contain(torch);
      player.getPack().should.contain(dagger);
      player.getPack().should.contain(apple);
      player.getPack().should.not.contain(banana);
    });
  }); // end .takeItem specs

  describe('.discardItem', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.discardItem).to.be.a('function');
    });

    it('should discard an item from the player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var torch = new Item("Torch");
      var dagger = new Weapon("Dagger", 10);
      var apple = new Food("Apple", 25);

      player.takeItem(torch);
      player.takeItem(dagger);
      player.takeItem(apple);

      sandbox.stub(console, "log");
      player.discardItem(dagger).should.equal(true);
      sinon.assert.called(console.log);

      player.getPack().should.contain(torch);
      player.getPack().should.not.contain(dagger);
      player.getPack().should.contain(apple);

    });
  }); // end .discardItem specs

  describe('.checkPack', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.checkPack).to.be.a('function');
    });

    it('should print the contents of the player\'s pack', function() {
      sandbox.stub(console, "log");
      var player = new Player("Lee", 100, 15, 7);

      player.checkPack();
      sinon.assert.called(console.log);
    });
  }); // end .checkPack specs

  describe('.equip', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.equip).to.be.a('function');
    });

    it('should only be able to equip Weapons', function() {
      var player = new Player("Lee", 100, 15, 7);
      var battery = new Item("Battery");
      var banana = new Food("Banana", 35);

      player.equip(battery);
      player.equip(banana);

      player.equipped.should.be.false;
    });

    it('should not equip weapons that are not in the player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var dagger = new Weapon("Dagger", 10);

      player.equip(dagger);

      player.equipped.should.be.false;
    });

    it('should equip weapons that are in the player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var dagger = new Weapon("Dagger", 10);

      player.takeItem(dagger);
      player.equip(dagger);

      player.equipped.should.equal(dagger);
      player.getPack().should.not.contain(dagger);
    });

    it('should swap weapons if one is already equipped', function() {
      var player = new Player("Lee", 100, 15, 7);
      var dagger = new Weapon("Dagger", 10);
      var crowbar = new Weapon("Crowbar", 45);

      player.takeItem(dagger);
      player.takeItem(crowbar);

      player.equip(dagger);
      player.equip(crowbar);

      player.equipped.should.equal(crowbar);
      player.getPack().should.not.contain(crowbar);
      player.getPack().should.contain(dagger);

    });
  }); // end .equip specs

  describe('.eat', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.eat).be.a('function');
    });

    it('should only eat Food items', function() {
      var player = new Player("Lee", 100, 15, 7);
      var battery = new Item("Battery");
      var crowbar = new Weapon("Crowbar", 45);

      player.takeItem(battery);
      player.takeItem(crowbar);
      player.eat(battery);
      player.eat(crowbar);

      player.getPack().should.contain(battery);
      player.getPack().should.contain(crowbar);
    });

    it('should not eat Food items if they are not in player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var apple = new Food("Apple", 25);

      player.health = 85;
      player.getPack().should.not.contain(apple);
      player.eat(apple);
      player.health.should.equal(85);
    });

    it('should eat Food items that are in player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var maxHealth = player.getMaxHealth();
      var maxTomato = new Food("Maximum tomato", maxHealth);

      player.health = 1;
      player.takeItem(maxTomato);
      player.getPack().should.contain(maxTomato);

      player.eat(maxTomato);
      player.health.should.equal(maxHealth);
      player.getPack().should.not.contain(maxTomato);
    });
  }); // end .eat specs

  describe('.useItem', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.useItem).to.be.a('function');
    });

    it('should equip the item if a weapon', function() {
      var player = new Player("Lee", 100, 15, 7);
      var crossbow = new Weapon("Crossbow", 35);

      player.takeItem(crossbow);
      player.useItem(crossbow);

      player.equipped.should.equal(crossbow);
      player.getPack().should.not.contain(crossbow);
    });

    it('should eat the item if food', function() {
      var player = new Player("Lee", 100, 15, 7);
      var blueberries = new Food("Blueberries", 15);

      player.health = 30;
      player.takeItem(blueberries);
      player.getPack().should.contain(blueberries);

      player.useItem(blueberries);
      player.health.should.equal(45);
      player.getPack().should.not.contain(blueberries);
    });
  }); // end .useItem specs

  describe('.equippedWith', function() {
    it('should be a function', function() {
      var player = new Player("Lee", 100, 15, 7);
      expect(player.equippedWith).to.be.a('function');
    });

    it('should return the weapon name if one is equipped', function() {
      var player = new Player("Lee", 100, 15, 7);
      var crossbow = new Weapon("Crossbow", 35);

      player.takeItem(crossbow);
      player.useItem(crossbow);
      player.equippedWith().should.equal(crossbow.name);
    });

    it('should return false if nothing is equipped', function() {
      var player = new Player("Lee", 100, 15, 7);
      var crossbow = new Weapon("Crossbow", 35);

      player.takeItem(crossbow);
      player.discardItem(crossbow);
      player.useItem(crossbow);
      player.equippedWith().should.equal(false);
    });
  }); // end .equippedWith specs
}); // end Player specs

describe('Zombie', function() {
  it('should be a function', function() {
    expect(Zombie).to.be.a('function');
  });

  it('should have health', function() {
    var zombie = new Zombie(30, 10, 5);
    zombie.health.should.equal(30);
  });

  it('should have a strength attribute', function() {
    var zombie = new Zombie(30, 10, 5);
    zombie.strength.should.equal(10);
  });

  it('should have a speed attribute', function() {
    var zombie = new Zombie(30, 10, 5);
    zombie.speed.should.equal(5);
  });

  it('should have a private maxHealth variable', function() {
    var zombie = new Zombie(30, 10, 5);
    expect(zombie.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var zombie = new Zombie(30, 10, 5);
    zombie.isAlive.should.equal(true);
  });
}); // end Zombie specs

describe('FastZombie', function() {
  it('should be a function', function() {
    expect(FastZombie).to.be.a('function');
  });

  it('should be a Zombie', function() {
    var charger = new FastZombie(30, 10, 25);
    expect(charger instanceof Zombie).to.be.true;
  });

  it('should call Zombie\'s constructor', function() {
    sandbox.stub(window.Zombie, "call");

    var charger = new FastZombie(30, 10, 25);
    sinon.assert.calledWithExactly(Zombie.call, charger, 30, 10, 25);
  });

  it('should have health', function() {
    var charger = new FastZombie(30, 10, 25);
    charger.health.should.equal(30);
  });

  it('should have a strength attribute', function() {
    var charger = new FastZombie(30, 10, 25);
    charger.strength.should.equal(10);
  });

  it('should have a speed attribute', function() {
    var charger = new FastZombie(30, 10, 25);
    charger.speed.should.equal(25);
  });

  it('should have a private maxHealth variable', function() {
    var charger = new FastZombie(30, 10, 25);
    expect(charger.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var charger = new FastZombie(30, 10, 25);
    charger.isAlive.should.equal(true);
  });
}); // end FastZombie specs

describe('StrongZombie', function() {
  it('should be a function', function() {
    expect(StrongZombie).to.be.a('function');
  });

  it('should be a Zombie', function() {
    var tank = new StrongZombie(30, 30, 5);
    expect(tank instanceof Zombie).to.be.true;
  });

  it('should call Zombie\'s constructor', function() {
    sandbox.stub(window.Zombie, "call");

    var tank = new StrongZombie(30, 30, 5);
    sinon.assert.calledWithExactly(Zombie.call, tank, 30, 30, 5);
  });

  it('should have health', function() {
    var tank = new StrongZombie(30, 30, 5);
    tank.health.should.equal(30);
  });

  it('should have a strength attribute', function() {
    var tank = new StrongZombie(30, 30, 5);
    tank.strength.should.equal(30);
  });

  it('should have a speed attribute', function() {
    var tank = new StrongZombie(30, 30, 5);
    tank.speed.should.equal(5);
  });

  it('should have a private maxHealth variable', function() {
    var tank = new StrongZombie(30, 30, 5);
    expect(tank.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var tank = new StrongZombie(30, 30, 5);
    tank.isAlive.should.equal(true);
  });
}); // end StrongZombie specs

describe('RangedZombie', function() {
  it('should be a function', function() {
    expect(RangedZombie).to.be.a('function');
  });

  it('should be a Zombie', function() {
    var spitter = new RangedZombie(30, 15, 15);
    expect(spitter instanceof Zombie).to.be.true;
  });

  it('should call Zombie\'s constructor', function() {
    sandbox.stub(window.Zombie, "call");

    var spitter = new RangedZombie(30, 15, 15);
    sinon.assert.calledWithExactly(Zombie.call, spitter, 30, 15, 15);
  });

  it('should have health', function() {
    var spitter = new RangedZombie(30, 15, 15);
    spitter.health.should.equal(30);
  });

  it('should have a strength attribute', function() {
    var spitter = new RangedZombie(30, 15, 15);
    spitter.strength.should.equal(15);
  });

  it('should have a speed attribute', function() {
    var spitter = new RangedZombie(30, 15, 15);
    spitter.speed.should.equal(15);
  });

  it('should have a private maxHealth variable', function() {
    var spitter = new RangedZombie(30, 15, 15);
    expect(spitter.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var spitter = new RangedZombie(30, 15, 15);
    spitter.isAlive.should.equal(true);
  });
}); // end RangedZombie specs

describe('ExplodingZombie', function() {
  it('should be a function', function() {
    expect(ExplodingZombie).to.be.a('function');
  });

  it('should be a Zombie', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    expect(boomer instanceof Zombie).to.be.true;
  });

  it('should call Zombie\'s constructor', function() {
    sandbox.stub(window.Zombie, "call");

    var boomer = new ExplodingZombie(30, 20, 10);
    sinon.assert.calledWithExactly(Zombie.call, boomer, 30, 20, 10);
  });

  it('should have health', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    boomer.health.should.equal(30);
  });

  it('should have a strength attribute', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    boomer.strength.should.equal(20);
  });

  it('should have a speed attribute', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    boomer.speed.should.equal(10);
  });

  it('should have a private maxHealth variable', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    expect(boomer.maxHealth).to.be.undefined;
  });

  it('should be alive', function() {
    var boomer = new ExplodingZombie(30, 20, 10);
    boomer.isAlive.should.equal(true);
  });
}); // end ExplodingZombie specs
