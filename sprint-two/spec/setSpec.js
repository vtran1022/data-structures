describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(109);
    set.add(4);
    var arr = [1, 2, ' a'];
    set.add(arr);
    var obj = {'name': 'Susan', 'age': 56};
    set.add(obj);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(109)).to.equal(true);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(arr)).to.equal(true);
    expect(set.contains(obj)).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.add(15);
    var arr2 = [2, 'b'];
    set.add(arr2);
    var obj2 = {'name': 'Susan', 'age': 56};
    set.add(obj2);
    set.remove('Mel Gibson');
    set.remove(15);
    set.remove(arr2);
    set.remove(obj2);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(15)).to.equal(false);
  });

  it('should only contain unique values', function() {
    set.add('Susan Sarandon');
    set.add('Susan Sarandon');
    set.add(10);
    set.add(10);
    var arr3 = [2, 'b'];
    set.add(arr3);
    set.add(arr3);
    var obj3 = {'name': 'Susan', 'age': 56};
    set.add(obj3);
    set.add(obj3);
    set.remove('Susan Sarandon');
    set.remove(10);
    set.remove(arr3);
    set.remove(obj3);
    expect(set.contains('Susan Sarandon')).to.equal(false);
    expect(set.contains(10)).to.equal(false);
    expect(set.contains(arr3)).to.equal(false);
    expect(set.contains(obj3)).to.equal(false);
  });

});
