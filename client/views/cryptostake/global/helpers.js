Template.registerHelper('checkSelectedLanguage', function(language){
	if (language == TAPi18n.getLanguage()) {
		return true;
	} return false;
});
