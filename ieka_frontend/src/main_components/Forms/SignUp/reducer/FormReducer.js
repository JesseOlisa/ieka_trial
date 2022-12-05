// export const FormReducer = (state, { key, payload }) => {
// 	switch (key) {
// 		case 'firstname':
// 			state.firstname = payload.newValue;
// 			return;
// 		case 'lastname':
// 			state.lastname.value = payload.newValue;
// 			return;
// 		case 'address':
// 			state.address.value = payload.newValue;
// 			return;
// 		case 'email':
// 			state.email.value = payload.newValue;
// 			return;
// 		case 'password':
// 			state.password.value = payload.newValue;
// 			return;
// 		case 'stateOrigin':
// 			state.stateOrigin.value = payload.newValue;
// 			return;
// 		case 'countryOrigin':
// 			state.countryOrigin.value = payload.newValue;
// 			return;
// 		case 'residenceCountry':
// 			state.residenceCountry.value = payload.newValue;
// 			return;
// 		case 'residenceState':
// 			state.residenceState.value = payload.newValue;
// 			return;
// 		case 'farmState':
// 			state.farmState.value = payload.newValue;
// 			return;
// 		case 'farmAddress':
// 			state.farmAddress.value = payload.newValue;
// 			return;
// 		case 'farmCountry':
// 			state.farmCountry.value = payload.newValue;
// 			return;
// 		default:
// 			throw new Error(`No reducer available for key = ${key}`);
// 	}
// };

export const FormReducer = (state, action) => {
	switch (action.type) {
		case "HANDLE INPUT TEXT":
			return {
				...state,
				[action.field] : action.payload
			}
		default:
			return state;
	}
}
