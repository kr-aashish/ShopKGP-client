import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { Box, Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../buttons/PrimaryButton";

function ElementTable({ data }) {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="space-between"
        pt={"15px"}
        pb={"15px"}
      >
        <p>{data?.first}</p>
        <strong>{data?.second}</strong>
      </Box>
      <Divider />
    </>
  );
}

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  console.log("This is the basket total", getBasketTotal(basket));

  return (
    <Box
      style={{
        backgroundColor: "#EFF5F5FB",
        borderRadius: "20px",
        padding: "20px",
        width: "100%",
      }}
    >
      <ElementTable
        data={{
          first: "Subtotal",
          second: `Rs. ${getBasketTotal(basket).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "GST and tax.",
          second: `Rs. ${(getBasketTotal(basket) * 0.03).toFixed(2)}`,
        }}
      />
      <ElementTable
        data={{
          first: "Total",
          second: `Rs. ${(
            getBasketTotal(basket) +
            getBasketTotal(basket) * 0.03
          ).toFixed(2)}`,
        }}
      />
      <p style={{ marginTop: "10px", fontSize: "12px" }}>
        *Total price includes shipping, and service charges
      </p>
      <PrimaryButton text={"proceed"} />
    </Box>
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Subtotal;
