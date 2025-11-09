
declare global {

    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string;
        MONGODB_URI: string;
        MONGODB_PORT: number;
      }
    }
  }

  export {}

