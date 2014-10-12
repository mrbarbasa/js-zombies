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
});

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
});

describe('Food', function() {
  it('should be a function', function() {
    expect(Food).to.be.a('function');
  });

  it('should call Item\'s constructor', function() {
    sandbox.stub(window.Item, "call");

    var apple = new Food("Apple", 25);
    sinon.assert.calledWithExactly(Item.call, apple, 'Apple');
  });

  it('should have restore energy', function() {
    var apple = new Food("Apple", 25);
    apple.energy.should.equal(25);
  });
});

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

  it('should have a private pack variable', function() {
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
  });

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
  });

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
  });

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
  });

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
  });

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

    it('should swap weapons if a one is already equipped', function() {
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
  });

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

      player.eat(apple);
      player.health.should.equal(100);
    });

    it('should eat Food items that are in player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var apple = new Food("Apple", 25);

      player.takeItem(apple);
      player.eat(apple);
      player.health.should.equal(125);
    });

    it('should eat Food items that are in player\'s pack', function() {
      var player = new Player("Lee", 100, 15, 7);
      var maxHealth = player.getMaxHealth();
      var maxTomato = new Food("Maximum tomato", maxHealth);

      player.takeItem(maxTomato);
      player.eat(maxTomato);
      player.health.should.equal(maxHealth);
    });
  });

});
