import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import BurgerItem from "./BurgerItem";
import FormTable from "./FormTable";

function Hamburger() {
	const classes = useStyles();
	const { burger, menu, total } = useSelector((state) => state.BurgerReducer);

	return (
		<>
			<Box variant='div' className={classes.main}>
				<Typography variant='h3' className={classes.text}>
					Exercise Hamgurger
				</Typography>
				<Box variant='div' className={classes.row}>
					<Box variant='div' className={classes.bueger}>
						<Box variant='div' className='breadTop'></Box>
						{Object.entries(burger).map(([nameFood, value]) => {
							let breadMid = [];
							for (let i = 0; i < value; i++) {
								breadMid.push(<BurgerItem key={i} nameFood={nameFood} />);
							}
							return breadMid;
						})}
						<Box variant='div' className='breadBottom'></Box>
					</Box>
					<Box variant='div' className={classes.options}>
						<Typography variant='h4' className={classes.text}>
							Choose Food
						</Typography>
						<FormTable menu={menu} burger={burger} />
						<Typography align='right' variant='h4'>
							TOTAL: {total}
						</Typography>
						<Box variant='div' align='right'>
							<Button variant='contained' color='primary'>
								Payment
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Hamburger;

const useStyles = makeStyles({
	main: {
		marginTop: "20px",
	},
	row: {
		width: "100%",
		display: "flex",
		marginTop: "50px",
	},
	bueger: {
		width: "50%",
	},
	options: {
		width: "50%",
	},
	text: {
		textAlign: "center",
	},
});
