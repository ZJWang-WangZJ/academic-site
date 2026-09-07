const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = new Map([
    ['/', ['index.html', 'text/html; charset=utf-8']],
    ['/index.html', ['index.html', 'text/html; charset=utf-8']],
    ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
    ['/wang_zijun.jpg', ['wang_zijun.jpg', 'image/jpeg']],
    ['/materials/aviation-electric-propulsion.zip', ['materials/aviation-electric-propulsion.zip', 'application/zip']],
    ['/materials/aviation-power-simulation-practice.pdf', ['materials/aviation-power-simulation-practice.pdf', 'application/pdf']]
]);
const server = http.createServer((req, res) => {
    const route = routes.get(new URL(req.url, 'http://localhost').pathname);
    if (!route || !['GET', 'HEAD'].includes(req.method)) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    const file = path.join(root, route[0]);
    fs.stat(file, (error, stat) => {
        if (error) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': route[1], 'Content-Length': stat.size, 'Cache-Control': 'no-store' });
        if (req.method === 'HEAD') res.end();
        else fs.createReadStream(file).pipe(res);
    });
});
server.listen(5510, '127.0.0.1', () => console.log('Local: http://127.0.0.1:5510/index.html'));
