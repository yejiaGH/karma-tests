/*describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("Conan").toEqual(reverse("nano"));
        expect("BBB").toEqual(reverse("AAA"));
    });
});*/
/*
describe('模拟选择框测试', function(){
	var select = new Select();
	it('显示方法无误', function(){
		expect(select.show()).toEqual(true);
	});
	it('隐藏方法无误', function(){
		expect(select.hide()).toEqual(true);
	});
});
*/
/*
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
*/
/*
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
*/
/*
describe("The 'toBe' matcher compares with ===", function() {
	it("and has a positive case", function() {
    	expect(true).toBe(true);
  	});
  	it("and can have a negative case", function() {
    	expect(false).not.toBe(true);
 	});
}); 
*/
/*
describe("Included matchers:", function() {
	it("The 'toBe' matcher compares with ===", function() {
	    var a = 12;
	    var b = a;
	    expect(a).toBe(b);
	    expect(a).not.toBe(null);
	});
	describe("The 'toEqual' matcher", function() {
		it("works for simple literals and variables", function() {
	      var a = 12;
	      expect(a).toEqual(12);
	    });
	    it("should work for objects", function() {
	      var foo = {
	        a: 12,
	        b: 34
	      };
	      var bar = {
	        a: 12,
	        b: 34
	      };
	      expect(foo).toEqual(bar);
	    });
	});	
	it("The 'toMatch' matcher is for regular expressions", function() {
	    var message = "foo bar baz";
	    expect(message).toMatch(/bar/);
	    expect(message).toMatch("bar");
	    expect(message).not.toMatch(/quux/);
	});
	it("The 'toBeDefined' matcher compares against `undefined`", function() {
	    var a = {
	      foo: "foo"
	    };
	    expect(a.foo).toBeDefined();
	    expect(a.bar).not.toBeDefined();
  	});
	it("The `toBeUndefined` matcher compares against `undefined`", function() {
	    var a = {
	      foo: "foo"
	    };
	    expect(a.foo).not.toBeUndefined();
	    expect(a.bar).toBeUndefined();
  	});
	it("The 'toBeNull' matcher compares against null", function() {
	    var a = null;
	    var foo = "foo";
	    expect(null).toBeNull();
	    expect(a).toBeNull();
	    expect(foo).not.toBeNull();
  	});
	it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
	    var a, foo = "foo";
	    expect(foo).toBeTruthy();
	    expect(a).not.toBeTruthy();
  	});
	it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
	    var a, foo = "foo";
	    expect(a).toBeFalsy();
	    expect(foo).not.toBeFalsy();
  	});
	it("The 'toContain' matcher is for finding an item in an Array", function() {
	    var a = ["foo", "bar", "baz"];
	    expect(a).toContain("bar");
	    expect(a).not.toContain("quux");
  	});
	it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
	    var pi = 3.1415926,
	      e = 2.78;
	    expect(e).toBeLessThan(pi);
	    expect(pi).not.toBeLessThan(e);
  	});
	it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
	    var pi = 3.1415926,
	      e = 2.78;
	    expect(pi).toBeGreaterThan(e);
	    expect(e).not.toBeGreaterThan(pi);
  	});
	it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
	    var pi = 3.1415926,
	      e = 2.78;
	    expect(pi).not.toBeCloseTo(e, 2);
	    expect(pi).toBeCloseTo(e, 0);
	});
	it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
	    var foo = function() {
	      return 1 + 2;
	    };
	    var bar = function() {
	      return a + 1;
	    };
	    expect(foo).not.toThrow();
	    expect(bar).toThrow();
	});	
});	
*/
/*
describe("A spec", function() {
  it("is just a function, so it can contain any code", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    var foo = 0;
    foo += 1;

    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
*/
/*
describe("A spec (with setup and tear-down)", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
*/
/*
describe("A spec", function() {
  beforeEach(function() {
    this.foo = 0;
  });

  it("can use the `this` to share state", function() {
    expect(this.foo).toEqual(0);
    this.bar = "test pollution?";
  });

  it("prevents test pollution by having an empty `this` created for the next spec", function() {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
  });
});
*/
/*
describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
    });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});
*/
/*
//Suites and specs can be disabled with the xdescribe and xit functions, respectively. These suites and any specs inside them are skipped when run and thus their results will not appear in the results.
xdescribe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
  xit("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});
*/
/*
describe("Pending specs", function() {
//¶
//Any spec declared with xit is marked as pending.

  xit("can be declared 'xit'", function() {
    expect(true).toBe(false);
  });
//¶
//Any spec declared without a function body will also be marked pending in results.

  it("can be declared with 'it' but without a function");
//¶
//And if you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending.

  it("can be declared by calling 'pending' in the spec body", function() {
    expect(true).toBe(false);
    pending();
  });
});
*/
//Spies toHaveBeenCalled, toHaveBeenCalledWith
/*
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar'); //spyOn

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });
  
  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });
  
  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });

});
*/
/*
//Spies and.callThrough
describe("A spy, when configured to call through", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };
	 
    spyOn(foo, 'getBar').andCallThrough(); // .and.callThrough in Edge version
    foo.setBar(123);    
    fetchedBar = foo.getBar();
  });
  
  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });
  
  
  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123); //SUCCESS
    //expect(fetchedBar).toHaveBeenCalled(); //FAILED
  });
});
*/
/*
describe("A spy, when configured to fake a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").andReturn(745); //not and.returnValue  in Edge version

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(745);
  });
});
*/
/*
describe("A spy, when faking a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').andCallFake(function() {
      return 1001;
    });

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(1001);
  });
});
*/
/*
describe("A spy, when created manually", function() {
  var whatAmI;

  beforeEach(function() {
    whatAmI = jasmine.createSpy('whatAmI');

    whatAmI("I", "am", "a", "spy");
  });

  it("is named, which helps in error reporting", function() {
    expect(whatAmI.identity).toEqual('whatAmI');
  });

  it("tracks that the spy was called", function() {
    expect(whatAmI).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(whatAmI.calls.length).toEqual(1);
  });

  it("tracks all the arguments of its calls", function() {
    expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
  });

  it("allows access to the most recent call", function() {
    expect(whatAmI.mostRecentCall.args[0]).toEqual("I");
  });
});
*/
/*
describe("Multiple spies, when created manually", function() {
  var tape;

  beforeEach(function() {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function() {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(tape.rewind).toHaveBeenCalledWith(0);
  });
});
*/
/*
describe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });
  
  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true;
      });

      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
  });
});
*/
