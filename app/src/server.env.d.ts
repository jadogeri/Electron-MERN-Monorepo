import { UserCreateRequestDTO } from "./common/dtos/request/UserCreateRequestDTO.dto";
import { IUser } from "./common/interfaces/IUser.interface";

declare global {
    namespace Express {
      interface Request {
        body: IUser | UserCreateRequestDTO
      }
      // interface Response {
      // responseBody?: UserRegisterResponseDTO | ErrorResponse;
      // json(body: UserRegisterResponseDTO): Response; // Type for the response body
      // body: UserRegisterResponseDTO

      // }
    }
    namespace NodeJS {
      interface ProcessEnv {
        BASE_URL : string;
        PORT: number;
       }
    }
  }

  export {}

