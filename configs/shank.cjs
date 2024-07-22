const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "bgl_tower_defense_program",
  programId: "TWRNNbCoHv7ymsJAeSAD2ZQWnwWrAjD6YVwg7bam2Tb",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "bgl-tower-defense"),
});
