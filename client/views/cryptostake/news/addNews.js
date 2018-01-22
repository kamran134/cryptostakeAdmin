Template.addNews.rendered = function () {

    // Initialize summernote plugin
    $('.summernote').summernote();

};

Template.addNews.events({
	'submit form': function(event){
		var data = {
			caption:	event.target.newscaption.value,
			shortDesc:	$('.note-editable')[0].innerHTML,
			fullNews:	$('.note-editable')[1].innerHTML,
			createdAt:	moment().toDate()
		}
		console.log("AAAAA", data);
		Meteor.call('addNews', data, function(error, result){
			if (result) {
				FlowRouter.redirect('/news');
			}
		});
		return false;
	}
});
