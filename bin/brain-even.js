#!/usr/bin/env node
import runGame from '../src/index.js';
import evenGame from '../src/games/even-game.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
