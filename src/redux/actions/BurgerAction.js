import { HANDELBURGER} from "../contants/BurgerContants";

export const handelburgers = (nameFood, value) => {
	return {
		type: HANDELBURGER,
		payload: {
			nameFood,
			value,
		},
	};
};

