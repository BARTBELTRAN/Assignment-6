let textarea = document.createElement("textarea");
textarea.setAttribute("cols", "50");
textarea.setAttribute("rows", "5");
textarea.setAttribute("placeholder", "Hello");

document.body.appendChild(textarea);

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.type = "submit";

submitButton.addEventListener("click", function(event) {
	const inputText = textarea.value;
  
  const tokens = inputText.split(/\s+/);
  
  const frequencyTable = {};
  
  tokens.forEach(token => {
  	if (frequencyTable[token]) {
    	frequencyTable[token]++;
    }
    else {
    	frequencyTable[token] = 1;
    }
  });
  console.log("Frequency Table:", frequencyTable);
  
  //sort
  const sortedTable = Object.entries(frequencyTable)
  .sort((a, b) => b[1] - a[1]);
  
  //top five words
  const topFive = sortedTable.slice(0, 5);
  
  //output statement
  const outputDiv = document.createElement("div");
  outputDiv.textContent = "Top 5 most frequent words are:";
  document.body.appendChild(outputDiv);
  
  //HTML table
  const table = document.createElement("table");
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const header1 = document. createElement("th");
  const header2 = document.createElement("th");
  header1.textContent = "word_name";
  header2.textContent = "count";
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  
  //append to table
  topFive.forEach(item => {
  	const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = item[0];
    cell2.textContent = item[1];
  });
  
  document.body.appendChild(table);
});

document.body.appendChild(submitButton);
