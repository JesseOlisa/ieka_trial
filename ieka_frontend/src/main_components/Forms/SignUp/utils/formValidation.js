export const formValidation = (values, currentstep) => {
	const errormsgs = {};
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	if (currentstep == 1) {
		if (!values.firstname) {
			errormsgs.firstname = 'Please enter your firstname';
		}
		if (!values.lastname) {
			errormsgs.lastname = 'Please enter your lastname';
		}
		if (!values.email) {
			errormsgs.email = 'Please enter your email address';
		} else if (!emailRegex.test(values.email)) {
			errormsgs.email = 'Please enter a valid email address';
		}
		if (!values.address) {
			errormsgs.address = 'Please enter an address';
		}
		if (!values.password) {
			errormsgs.password = 'Please choose your password';
		}
		if (!values.phone) {
			errormsgs.phone = 'Please enter your phone number';
		}
	} else if (currentstep == 2) {
		if (!values.countryOrigin) {
			errormsgs.countryOrigin = 'This is required';
		}
		if (!values.residenceCountry) {
			errormsgs.residenceCountry = 'This is required';
		}
		if (!values.residenceState) {
			errormsgs.residenceState = 'This is required';
		}
		if (!values.stateOrigin) {
			errormsgs.stateOrigin = 'This is required';
		}
	} else if (currentstep == 3) {
        if (!values.farmState) {
			errormsgs.countryOrigin = 'This is required';
		}
		if (!values.farmAddress) {
			errormsgs.residenceCountry = 'This is required';
		}
		if (!values.farmCountry) {
			errormsgs.residenceState = 'This is required';
		}
		if (!values.agroProducts) {
			errormsgs.stateOrigin = 'This is required';
		}
    }

	return errormsgs;
};
