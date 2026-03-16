import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import os from "os";
import axios from "axios";
const app: Application = express();
const PORT = process.env.PORT || 3000;
app.set("trust proxy", true);

app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), "public", "landing.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
