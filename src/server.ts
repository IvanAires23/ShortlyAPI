import app from "./app";
import { startDB } from "./config/database";

startDB();

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running in port ${port}`))