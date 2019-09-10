var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text'};


function imsnow() {
	rply = {
				"type": "image",
				"originalContentUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsVWLFuCTyuGK_qu-GsAKZKV8BELUDS65RGHRRrL3UtxJTN5O_",
				"previewImageUrl": "https://drive.google.com/uc?export=download&id=1GbygCVq3Az0Z_MYHMrNzUVpojIIorosS"		
	};
		
	return rply; 
	
}



module.exports = {
	imsnow: imsnow
};
