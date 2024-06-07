import React, { useState } from 'react';

const Button = () => {
    const [loading, setLoading] = useState(false);

    const downloadPdf = async () => {
        try {
            // setLoading(true);
            const content = '<h1>Order</h1><p>Thank you for your order!</p>';
            const response = await fetch('/api/pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ htmlContent: content }),
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;

                link.download = 'order.pdf';
                link.click();
               
            } else {
                console.error('Failed to download PDF');
                setLoading(false);
            }
        } catch (error: any) {
            console.error('Failed to download PDF', error.message);
            setLoading(false);
        }
    };

    return (
        <button onClick={downloadPdf} disabled={loading}>
            {loading ? 'Downloading...' : 'Download PDF'}
        </button>
    );
};

export default Button;