import { Box } from "@material-ui/core";
import React from "react";

function BurgerItem({ nameFood }) {
	return (
		<div>
			<Box variant='div' className={nameFood}></Box>
		</div>
	);
}

export default BurgerItem;
