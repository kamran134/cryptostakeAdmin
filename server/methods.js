Meteor.methods({
	'addNews': function(data){
		return News.insert(data);
	}
});
