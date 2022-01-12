#!/usr/bin/env node
import runGame from '../src/index.js';
import primeGame from '../src/games/prime-game.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);
