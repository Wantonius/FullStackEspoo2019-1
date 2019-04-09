window.onload = function() {
	createForm();
	getContactList();
}

createForm = () => {
	let anchor = document.getElementById("anchor");
	let form = document.createElement("form");
	
	//First Name input
	
	let firstNameInput = document.createElement("input");
	firstNameInput.setAttribute("type","text");
	firstNameInput.setAttribute("value","");
	firstNameInput.setAttribute("name","firstnameinput");
	firstNameInput.setAttribute("id","firstnameinput");
	let firstNameLabel = document.createElement("label");
	firstNameLabel.setAttribute("for","firstnameinput");
	let firstNameText = document.createTextNode("First Name:");
	firstNameLabel.appendChild(firstNameText);
	
	//Last Name Input
	let lastNameInput = document.createElement("input");
	lastNameInput.setAttribute("type","text");
	lastNameInput.setAttribute("value","");
	lastNameInput.setAttribute("name","lastNameinput");
	lastNameInput.setAttribute("id","lastnameinput");
	let lastNameLabel = document.createElement("label");
	lastNameLabel.setAttribute("for","lastNameinput");
	let lastNameText = document.createTextNode("Last Name:");
	lastNameLabel.appendChild(lastNameText);

	//Email input
	let emailInput = document.createElement("input");
	emailInput.setAttribute("type","email");
	emailInput.setAttribute("value","");
	emailInput.setAttribute("name","emailinput");
	emailInput.setAttribute("id","emailinput");
	let emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","emailinput");
	let emailText = document.createTextNode("Email:");
	emailLabel.appendChild(emailText);	
	
	//address input
	let addressInput = document.createElement("input");
	addressInput.setAttribute("type","text");
	addressInput.setAttribute("value","");
	addressInput.setAttribute("name","addressinput");
	addressInput.setAttribute("id","addressinput");
	let addressLabel = document.createElement("label");
	addressLabel.setAttribute("for","addressinput");
	let addressText = document.createTextNode("Address:");
	addressLabel.appendChild(addressText);	

	//Phone input
	let phoneInput = document.createElement("input");
	phoneInput.setAttribute("type","tel");
	phoneInput.setAttribute("value","");
	phoneInput.setAttribute("name","phoneinput");
	phoneInput.setAttribute("id","phoneinput");
	let phoneLabel = document.createElement("label");
	phoneLabel.setAttribute("for","phoneinput");
	let phoneText = document.createTextNode("Phone:");
	phoneLabel.appendChild(phoneText);	
	
	//Submit button
	
	let submitButton = document.createElement("input")
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Add");
	
	//Append to form
	
	let br = document.createElement("br");
	form.appendChild(firstNameLabel);
	form.appendChild(firstNameInput);
	form.appendChild(br);	
	form.appendChild(lastNameLabel);
	form.appendChild(lastNameInput);
	form.appendChild(br.cloneNode());
	form.appendChild(emailLabel);
	form.appendChild(emailInput);
	form.appendChild(br.cloneNode());
	form.appendChild(addressLabel);
	form.appendChild(addressInput);
	form.appendChild(br.cloneNode());
	form.appendChild(phoneLabel);
	form.appendChild(phoneInput);
	form.appendChild(br.cloneNode());
	form.appendChild(submitButton);
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		addToList();
	})
	//Append to anchor
	anchor.appendChild(form);
	let tableAnchor = document.createElement("div");
	tableAnchor.setAttribute("id","tableanchor");
	anchor.appendChild(tableAnchor);
		
}

addToList = () => {
	console.log("in AddToList()");
	let firstname = document.getElementById("firstnameinput");
	let lastname = document.getElementById("lastnameinput");
	let email = document.getElementById("emailinput");
	let address = document.getElementById("addressinput");
	let phone = document.getElementById("phoneinput");
	let contact = {
		"firstname":firstname.value,
		"lastname":lastname.value,
		"email":email.value,
		"address":address.value,
		"phone":phone.value,
		"id":0
	}
	let request = {
		method:"POST",
		mode:"cors",
		headers:{"Content-type":"application/json"},
		body:JSON.stringify(contact)
	}
	fetch("/api/contact",request).then(response => {
		if(response.ok) {
			getContactList();
			console.log("Add to list success!");
		} else {
			console.log("Add to list failed. Reason:"+response.status);
		}
	}).catch(error => {
		console.log(error);
	})
}

getContactList = () => {
	let request = {
		method:"GET",
		mode:"cors",
		headers:{"Content-type":"application/json"}
	}
	fetch("/api/contact",request).then(response => {
		if(response.ok) {
			response.json().then(data => {
				console.log("getContactList success");
				populateTable(data);
			}).catch(error => {
				console.log(error);
			});
		} else {
			console.log("Failed to get contactlist. Reason:"+response.status)
		}
	}).catch(error => {
		console.log(error);
	});
	
}

removeFromList = (id) => {
	let request = {
		method:"DELETE",
		mode:"cors",
		headers:{"Content-type":"application/json"}
	}
	fetch("/api/contact/"+id,request).then(response => {
		if(response.ok) {
			console.log("Remove from list success");
			getContactList();
		} else {
			console.log("Remove from list failed. Reason:"+response.status);
		}
	}).catch(error => {
		console.log(error);
	})
}

populateTable = (data) => {
	let tableAnchor = document.getElementById("tableanchor");
	let table = document.getElementById("table");
	if(table) {
		tableAnchor.removeChild(table);
	}
	let newTable = document.createElement("table");
	newTable.setAttribute("id","table");
	
	let header = document.createElement("thead");
	let headerRow = document.createElement("tr");
	let firstNameHeader = document.createElement("th");
	let firstNameText = document.createTextNode("First Name");
	firstNameHeader.appendChild(firstNameText);
	let lastNameHeader = document.createElement("th");
	let lastNameText = document.createTextNode("Last Name");
	lastNameHeader.appendChild(lastNameText);
	let emailHeader = document.createElement("th");
	let emailText = document.createTextNode("Email");
	emailHeader.appendChild(emailText);
	let addressHeader = document.createElement("th");
	let addressText = document.createTextNode("Address");
	addressHeader.appendChild(addressText);
	let phoneHeader= document.createElement("th");
	let phoneText = document.createTextNode("Phone");
	phoneHeader.appendChild(phoneText);
	let removeHeader = document.createElement("th");
	let removeText = document.createTextNode("Remove");
	removeHeader.appendChild(removeText);
	headerRow.appendChild(firstNameHeader);
	headerRow.appendChild(lastNameHeader);
	headerRow.appendChild(emailHeader);
	headerRow.appendChild(addressHeader);
	headerRow.appendChild(phoneHeader);
	headerRow.appendChild(removeHeader);
	header.appendChild(headerRow);
	newTable.appendChild(header);
	
	//Table Body
	let body = document.createElement("tbody");
	for(let i = 0;i < data.length; i++) {
		let tableRow = document.createElement("tr");
		for(x in data[i]) {
			if (x === "id") {
				continue;
			}
			let column = document.createElement("td");
			let info = document.createTextNode(data[i][x]);
			column.appendChild(info);	
			tableRow.appendChild(column)
		}
		let removeColumn = document.createElement("td");
		let removeButton = document.createElement("button");
		let removeText = document.createTextNode("Remove");
		removeButton.appendChild(removeText);
		removeButton.setAttribute("name",data[i].id);
		removeButton.addEventListener("click",function(e) {
			removeFromList(e.target.name);
		})
		removeColumn.appendChild(removeButton);	
		tableRow.appendChild(removeColumn);
		body.appendChild(tableRow);
	}
	newTable.appendChild(body);
	//anchor to table
	tableAnchor.appendChild(newTable);
	
}