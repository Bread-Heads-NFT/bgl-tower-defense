use num_derive::FromPrimitive;
use solana_program::{
    decode_error::DecodeError,
    msg,
    program_error::{PrintProgramError, ProgramError},
};
use thiserror::Error;

#[derive(Error, Clone, Debug, Eq, PartialEq, FromPrimitive)]
pub enum BglTowerDefenseError {
    /// 0 - Invalid System Program
    #[error("Invalid System Program")]
    InvalidSystemProgram,
    /// 1 - Error deserializing account
    #[error("Error deserializing account")]
    DeserializationError,
    /// 2 - Error serializing account
    #[error("Error serializing account")]
    SerializationError,
}

impl PrintProgramError for BglTowerDefenseError {
    fn print<E>(&self) {
        msg!(&self.to_string());
    }
}

impl From<BglTowerDefenseError> for ProgramError {
    fn from(e: BglTowerDefenseError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for BglTowerDefenseError {
    fn type_of() -> &'static str {
        "Bgl Tower Defense Error"
    }
}
