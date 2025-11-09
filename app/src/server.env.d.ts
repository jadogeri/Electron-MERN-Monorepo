import { UserCreateRequestDTO } from "./common/dtos/request/UserCreateRequestDTO.dto";
import { UserGetSingleRequestDTO } from "./common/dtos/request/UserGetSingleRequestDTO.dto";
import { IUser } from "./common/interfaces/IUser.interface";

declare global {
    namespace Express {
      interface Request {
        body: IUser | UserCreateRequestDTO,
        params: UserGetSingleRequestDTO
      }

    }
    namespace NodeJS {
      interface ProcessEnv {
        EXPRESS_APP_PORT: number;
        EXPRESS_APP_HOST:string;
        EXPRESS_APP_PROTOCOL:string;
       }
    }
  }

  export {}

