import projectModel from "../model/model.js";
import { searchParams, system } from "../open-ai/search-settings.js";
import openai from "../open-ai/settings.js";

export const getAllProjects = async (req, res) => {
  try {
    const projectData = await projectModel.find();
    res.status(200).json(projectData);
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProject = async (req, res) => {
  try {
    const { search } = req.body;
    if (!search) {
      res.status(400).json({ error: "Bad Request" });
      return;
    }
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: system },
        { role: "user", content: `${searchParams} search query = ${search}` },
      ],
      max_tokens: 100,
    });
    const response = chatCompletion.choices[0].message;
    const startIndex = response.content.indexOf("const searchQuery = {");
    const endIndex = response.content.indexOf("};", startIndex) + 1;
    const extractedQuery = response.content
      .substring(startIndex, endIndex)
      .replace("const searchQuery = ", "");
    const searchQuery = eval(`(${extractedQuery})`);
    const projects = await projectModel.find(searchQuery);
    res.status(201).json({ projects });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};
