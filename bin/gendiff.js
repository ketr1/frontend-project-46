#!/usr/bin/env node
import { Command } from 'commander';
import { createRequire } from 'module';
import parseJSON from '../src/parser.js';
const require = createRequire(import.meta.url);
const { version } = require('../package.json');

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version)
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = parseJSON(filepath1);
    const data2 = parseJSON(filepath2);
    console.log('File 1:', data1);
    console.log('File 2:', data2);
  });

program.parse();
