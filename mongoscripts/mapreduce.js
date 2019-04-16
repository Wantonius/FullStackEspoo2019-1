var myMapFunction = function() {
	emit(this.custId, this.price);
}

var myReduceFunction = function(keyCustId, valuesPrice) {
	return Array.sum(valuesPrice);
};

var conn = new Mongo();
var db = conn.getDB("mapReduceTest");

db.data.mapReduce(myMapFunction,myReduceFunction, {out:"mapReduceResults"});