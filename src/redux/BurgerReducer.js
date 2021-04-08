import { HANDELBURGER } from "./contants/BurgerContants";

const initialState = {
	burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

	menu: {
		salad: 10,

		cheese: 20,

		beef: 55,
	},

	total: 85,
};
export const BurgerReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case HANDELBURGER: {
			let burger = { ...state.burger };
			if (action.payload.value === -1 && state.burger[action.payload.nameFood] < 1) {
				return { ...state };
			}
			burger[action.payload.nameFood] += action.payload.value;
			state.burger = burger;
			state.total += action.payload.value * state.menu[action.payload.nameFood];
			return { ...state, burger };
		}

		default:
			return state;
	}
};
