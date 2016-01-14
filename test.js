var Clarifai = require('./clarifai_node.js');

Clarifai.initAPI(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

testURLs = ['https://octodex.github.com/images/labtocat.png',
	    		'https://octodex.github.com/images/octoliberty.png'];
testIDs = ['lab','liberty','robot'];
Clarifai.tagURL(testURLs, testIDs, function(err, res){
	if(err){
		console.log(err);
	}
	else{
	  if(typeof res["status_code"] === "string" && res["status_code"] === "OK"){
			for(var i in res.results){
			  var tags = res.results[i].result.tag;
				console.log();
				console.log("Image: " + res.results[i].local_id);
				console.log();
			  for(var j in tags.classes){
					var prob = tags.probs[j];
					prob *= 100;
					prob += '%';
			    console.log(tags.classes[j] + ': ' + prob);
			  }
			}
	  }
	}
});
