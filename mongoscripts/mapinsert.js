var data = []
var customers = ["Matti","Jaska","Tiina","Martti","Seija"];
for(i=0;i<5000;i++) {
	var tempID = Math.floor(Math.random()*5);
	var tempPrice = Math.floor(Math.random()*100)+1;
	data[i] = {"custId":customers[tempID],"price":tempPrice}
}

var conn = new Mongo();
var db = conn.getDB("mapReduceTest");
db.data.insert(data);