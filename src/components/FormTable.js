import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handelburgers } from "../redux/actions/BurgerAction";

const useStyles = makeStyles({
	table: {
		width: "100%",
	},
});

export default function FormTable({ menu, burger }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	return (
		<Box variant='div'>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Food</TableCell>
							<TableCell align='center'>Action</TableCell>
							<TableCell align='right'>Price</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(menu).map(([nameFood, price], index) => {
							return (
								<TableRow key={index}>
									<TableCell align='left'>{nameFood}</TableCell>
									<TableCell align='center'>
										<Button variant='contained' color='primary' onClick={() => dispatch(handelburgers(nameFood, 1))}>
											+
										</Button>
										<span>{burger[nameFood]}</span>
										<Button variant='contained' color='secondary' onClick={() => dispatch(handelburgers(nameFood, -1))}>
											-
										</Button>
									</TableCell>
									<TableCell align='right'>{burger[nameFood] * price}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
