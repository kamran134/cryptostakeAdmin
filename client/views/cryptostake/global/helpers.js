Template.registerHelper('checkSelectedLanguage', function(language){
	if (language == TAPi18n.getLanguage()) {
		return true;
	} return false;
});

Template.registerHelper('showDateDDMMYYYY', function(ISODate){
	return moment(ISODate).format('DD.MM.YYYY');
});
