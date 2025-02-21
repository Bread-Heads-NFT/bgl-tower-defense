/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** InvalidSystemProgram: Invalid System Program */
export class InvalidSystemProgramError extends ProgramError {
  override readonly name: string = 'InvalidSystemProgram';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('Invalid System Program', program, cause);
  }
}
codeToErrorMap.set(0x0, InvalidSystemProgramError);
nameToErrorMap.set('InvalidSystemProgram', InvalidSystemProgramError);

/** DeserializationError: Error deserializing account */
export class DeserializationErrorError extends ProgramError {
  override readonly name: string = 'DeserializationError';

  readonly code: number = 0x1; // 1

  constructor(program: Program, cause?: Error) {
    super('Error deserializing account', program, cause);
  }
}
codeToErrorMap.set(0x1, DeserializationErrorError);
nameToErrorMap.set('DeserializationError', DeserializationErrorError);

/** SerializationError: Error serializing account */
export class SerializationErrorError extends ProgramError {
  override readonly name: string = 'SerializationError';

  readonly code: number = 0x2; // 2

  constructor(program: Program, cause?: Error) {
    super('Error serializing account', program, cause);
  }
}
codeToErrorMap.set(0x2, SerializationErrorError);
nameToErrorMap.set('SerializationError', SerializationErrorError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getBglTowerDefenseErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getBglTowerDefenseErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
