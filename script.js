
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
});

document.body.appendChild(submitButton);
