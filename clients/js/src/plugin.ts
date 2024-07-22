import { UmiPlugin } from '@metaplex-foundation/umi';
import { createBglTowerDefenseProgram } from './generated';

export const bglTowerDefense = (): UmiPlugin => ({
  install(umi) {
    umi.programs.add(createBglTowerDefenseProgram(), false);
  },
});
