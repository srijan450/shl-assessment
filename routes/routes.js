import { Router } from "express";
import { getAllProjects, getProject } from "../controller/controller.js";

const routes = Router();

routes.get("/get-all-projects", getAllProjects);
routes.post("/get-project", getProject);

export default routes;
