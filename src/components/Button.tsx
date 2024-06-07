import { Button } from "@mui/material";
import React, { useState } from "react";
import SimpleBackdrop from "./SimpletBackdrop";

const ButtonComponent = () => {
    const [loading, setLoading] = useState(false);

    const downloadPdf = async () => {
        try {
            setLoading(true);
            const content =
                document.getElementById("invoice-template")?.innerHTML;

            const response = await fetch("/api/pdf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ htmlContent: content }),
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;

                link.download = "order.pdf";
                link.click();
                setLoading(false);
            } else {
                console.error("Failed to download PDF");
                setLoading(false);
            }
        } catch (error: any) {
            console.error("Failed to download PDF", error.message);
            setLoading(false);
        }
    };

    return (
        <>
            <Button onClick={downloadPdf} disabled={loading}>
                {loading ? "Downloading..." : "Download PDF"}
            </Button>

            {loading && <SimpleBackdrop />}
        </>
    );
};

export default ButtonComponent;
