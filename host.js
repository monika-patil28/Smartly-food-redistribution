const { spawn } = require('child_process');

console.log("Starting local dev server...");
const server = spawn('npx', ['--yes', 'serve', '.', '-p', '8080'], { shell: true });

server.stdout.on('data', d => console.log("SERVE: " + d.toString()));
server.stderr.on('data', d => console.log("SERVE: " + d.toString()));

setTimeout(() => {
    console.log("Starting pinggy tunnel...");
    // Accept new host keys automatically
    const tunnel = spawn('ssh', ['-p', '443', '-R0:localhost:8080', '-o', 'StrictHostKeyChecking=no', 'a.pinggy.io'], { shell: true });
    
    tunnel.stdout.on('data', (data) => {
        console.log("TUNNEL: " + data.toString());
    });
    
    tunnel.stderr.on('data', (data) => {
        console.log("TUNNEL: " + data.toString());
    });
    
}, 3000);
