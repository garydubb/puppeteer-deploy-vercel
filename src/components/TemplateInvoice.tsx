import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

const TemplateInvoice: React.FC = () => {
    return (
        <Box id={"invoice-template"}>
            <Typography variant="h4" gutterBottom>
                Puppeteer Invoice
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: '100vh',
                }}
            >
                <TableContainer
                    component={Paper}
                    sx={{
                        maxWidth: 600,
                    }}
                >
                    <Table aria-label="invoice table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Item 1</TableCell>
                                <TableCell align="right">2</TableCell>
                                <TableCell align="right">$10</TableCell>
                                <TableCell align="right">$20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Item 2</TableCell>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">$15</TableCell>
                                <TableCell align="right">$15</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell align="right">$35</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default TemplateInvoice;
