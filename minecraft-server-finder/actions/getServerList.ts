"use server"
import fetch from 'node-fetch';
import cheerio from 'cheerio'; // Import Cheerio library

export const fetchList = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/getServers');
        const html = await res.text();

        const $ = cheerio.load(html);

        const inputValue = $('input')
        const values = inputValue.map((i, el) => $(el).val()).get()
        values.shift();

        const ips = values.map(item => item.replace(/\\"/g, ''));
        return ips
    } catch (error) {
        console.error("Failed to fetch data: ", error);
        return null; // Return null in case of error
    }
};
