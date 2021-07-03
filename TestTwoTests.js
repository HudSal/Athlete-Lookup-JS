QUnit.module('Add new athlete details test', function() {
    QUnit.test('Should add just five athletes only', function(assert) {
      assert.equal(AddAthlete("Ali",170), "Added successfully",'Insert first athelete: succeed');
      assert.equal(AddAthlete("Moh",175), "Added successfully",'Insert second athelete: succeed');
      assert.equal(AddAthlete("Sam",180), "Added successfully",'Insert third athelete: succeed');
      assert.equal(AddAthlete("Fred",178), "Added successfully",'Insert fourth athelete: succeed');
      assert.equal(AddAthlete("Bob",190), "Added successfully",'Insert fifth Athelete: succeed');
      assert.equal(AddAthlete("John",187), "Array is Full",'Not allow to insert more than five atheletes: succeed');
    });
  });

  QUnit.module('Find Athlete by passing the position',function(){ 
	QUnit.test('Should return the athlete details in a given position',function(assert){
		assert.equal(FindAthlete(0),"Ali 170","First athletes' detailes");
		assert.equal(FindAthlete(1),"Moh 175","Second athletes' detailes");
        assert.equal(FindAthlete(3),"Fred 178","Fourth athletes' detailes");
        assert.equal(FindAthlete(6),"Not found","Not Exist this position");
        assert.equal(FindAthlete(7),"Not found","Not Exist this position");
    });
    });
    
    QUnit.module('Remove athletes’ information from both arrays',function(){ 
        QUnit.test('Should remove the athlete details with a given name',function(assert){
            assert.equal(RemoveAthlete("Ali"),"Removed successfully","Removed the athlete Ali: succeed");
            assert.equal(RemoveAthlete("Sam"),"Removed successfully","Removed the athlete Sam: succeed");
            assert.equal(RemoveAthlete("Laura"),"Not found","Laura information does not Exist in the array");
            assert.equal(RemoveAthlete("Sandy"),"Not found","Sandy information does not Exist in the array");
        });
        });
        