import { exec } from "child_process";
import { promises as fs } from "fs";
import {domain, subdomain, id} from './constant.mjs';

const execCommand = ({ command }) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      resolve(stdout);
    });
  });
};

const readJsonTranscript = async ({ fileName }) => {
  const data = await fs.readFile(fileName, "utf8");
  return JSON.parse(data);
};

const audioFileToBase64 = async ({ fileName }) => {
  const data = await fs.readFile(fileName);
  return data.toString("base64");
};

const apiHashURL = `${domain}/${subdomain}/${id}`;
export { execCommand, readJsonTranscript, audioFileToBase64, apiHashURL };
