/* eslint-disable indent */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import chromium from '@sparticuz/chromium';
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

type Json = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Json | Buffer>,
) {
    const { htmlContent } = req.body;
    try {
        const exePath =
            process.platform === 'win32'
                ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
                : process.platform === 'linux'
                ? '/usr/bin/google-chrome'
                : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
           
        // Launch a new browser instance
        const browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath:
                process.env.NODE_ENV === 'development'
                    ? exePath
                    : await chromium.executablePath(),
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });
        const page = await browser.newPage();
        console.log(htmlContent);
        // Set the content of the page
        await page.setContent(htmlContent, {
          //  waitUntil: 'networkidle0', // Ensure the content is fully loaded
        });

        // Generate the PDF
        const pdfBuffer = await page.pdf({
            format: 'a4', // Paper format
            printBackground: true, // Print background colors
        });
        console.log(pdfBuffer);
        // Close the browser
        await browser.close();

        // Set the response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=output.pdf'); // Set the filename and allow download
        res.status(200).send(pdfBuffer);
    } catch (error: any) {
        res.status(500).send({
            message: 'Error generating PDF' + error?.message,
        });
    }
}