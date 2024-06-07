import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ButtonComponent from "./Button";
import TemplateInvoice from "./TemplateInvoice";

const HomePage: React.FC = () => {
    return (
        <Container >
            
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12} textAlign={'center'}  height={300} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                
                }}>
                    <Typography variant="h1" fontSize={30}>Puppeteer Deploy Vercel</Typography>
                </Grid>   
                <Grid item xs={12}  textAlign={'center'}>
                    <ButtonComponent/>
                </Grid>
                <Grid item xs={12}  textAlign={'center'}>
                    <TemplateInvoice/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
