export const FormReducer = (state, action) => {
	switch (action.type) {
		case "HANDLE INPUT TEXT":
			return {
				...state,
				[action.field] : action.payload
			}
			case "HANDLE LOCATION":
				return {
					...state,
					[action.field] : action.payload
				}
		default:
			return state;
	}
}
