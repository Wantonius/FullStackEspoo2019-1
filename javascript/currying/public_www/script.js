window.onload = function() {
	console.log("-------------------------");
	console.log("Simple sum currying:");
	console.log(sum(2)(4));
	console.log(sum(2));
	
	console.log("-------------------------");
	console.log("Synchronous function currying");
	console.log(timer(syncFunc)(200));
	console.log("-------------------------");
	console.log("ASynchronous function currying");
	console.log(timer(asyncFunc)(400).then(response => console.log(response)));
}

const sum = x => y => x+y

const timer = (timerfunc) => (...args) => {
	const start = Date.now();
	const value = timerfunc(...args);
	if(value && typeof value.then === 'function') {
		return value.then(value => 
			({timespan: Date.now()-start, value}))
	} else {
		return {timespan: Date.now()-start,value}
	}
}

const syncFunc = x => x*2;

const asyncFunc = x => new Promise(resolve => {
		setTimeout(() => {
			console.log("Timer done!");
			return resolve(x*2);
		},5000)
});	
	
