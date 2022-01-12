#!/usr/bin/env node
import runGame from '../src/index.js';
import gcdGame from '../src/games/gcd-game.js';

runGame('Find the greatest common divisor of given numbers.', gcdGame);
