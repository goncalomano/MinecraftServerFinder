"use server"
import { JSDOM } from 'jsdom'
import fetch from 'node-fetch';

export const fetchList = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/getServers');
        const html = await res.text()


        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Get all <tr> elements
        const rows = document.querySelectorAll('table tr');
        // Loop through each <tr> element
        rows.forEach(row => {
            // Get all <td> elements with class "n2" inside the current <tr> element
            const cellsWithClassN2 = row.querySelectorAll('td.n2');

            // Loop through each <td> element with class "n2" inside the current <tr> element
            cellsWithClassN2.forEach(cell => {
                // Get the <div> element with class "clear" inside the current <td> element with class "n2"
                const divClear = cell.querySelector('div.clear');

                // Get the <a> element inside the <div> element with class "clear"
                const anchorTag = divClear.querySelector('a');

                // Print the href attribute of the <a> element
                console.log(anchorTag.href);
            });
        });
    } catch (error) {
        return { error: "Failed to fetch data" + error }
    }
};