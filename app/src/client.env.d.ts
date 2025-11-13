import { IJwtPayload } from "./src/v2/interfaces/IJWTPayload";
import { UserRegisterRequestDTO } from "./src/v2/dtos/request/UserRegisterRequestDTO";
import { UserRegisterResponseDTO } from "./src/v2/dtos/response/UserRegisterResponseDTO";
import { ErrorResponse } from "./src/v2/entities/ErrorResponse";

declare global {

    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_EXPRESS_URL: string;
      }
    }
  }

  export {}

