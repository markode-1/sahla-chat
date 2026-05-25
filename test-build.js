#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const projectPath = 'd:\\sahla-ai';

console.log('Starting build...\n');

const build = spawn('npm', ['run', 'build'], {
  cwd: projectPath,
  stdio: 'inherit'
});

build.on('close', (code) => {
  process.exit(code);
});
