import  { app as expressServer } from "./index";

    const port = 3001

    expressServer.listen(port, () => {
      console.log(`Express server running on http://localhost:${port}`);
    });
