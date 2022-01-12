#!/usr/bin/env node
import runGame from '../src/index.js';
import progressionGame from '../src/games/progression-game.js';

runGame('What number is missing in the progression?', progressionGame);
