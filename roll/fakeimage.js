var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function fake() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://drive.google.com/uc?export=download&id=1OXQlKRyPzDr2jWUiZrGaTjY8k59AVJuJ",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=1WoW_uvAtWepgtL3BWtYxL6SCkeHjTEXw"		
	};
		
	return rply; 
	
}



module.exports = {
	fake: fake
};