import { serve } from 'bun';
const fs = require('fs');
const path = require('path');

const currentDate = new Date(Date.now());
const formattedDate = currentDate.toLocaleString();
console.log(`I restarted at: ${formattedDate}`);

serve({
    port: 8080,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            // Log additional details about the request
            console.log('Browser: ', req.headers.get('user-agent'));
            console.log('Timestamp: ', new Date().toISOString());
            // Serve the index.html file
            return new Response(Bun.file("./index.html"));
        }

        if (url.pathname === "/randomvideo") {
            const videoDir = './videos'
            const files = fs.readdirSync(videoDir); // Synchronous read, use fs.readdir for async
            const videoFiles = files.filter(file => file.endsWith('.mp4')); // Assuming you're looking for mp4 files
            const videoCount = videoFiles.length;
            const randomInteger = Math.floor(Math.random() * (videoCount - 1 + 1)) + 1;
            const path = `./videos/${randomInteger}.mp4`
            return new Response(Bun.file(path));
        }
        return new Response(`404!`);
    }
});
