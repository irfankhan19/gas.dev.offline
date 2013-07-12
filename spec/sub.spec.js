/**
 *
 */

describe('sub.lib', function() {

  it('should be able to create object.', function() {
    var o = new Sub('namename', 100);

    expect(o).toBeDefined();
    expect(o.name).toEqual('namename');
  });

});



