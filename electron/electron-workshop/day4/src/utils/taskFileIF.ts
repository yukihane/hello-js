import FsEx from "fs-extra";
import OS from "os";
import Path from "path";

import { TaskItem } from "../types";

const dataFilePath = Path.join(OS.homedir(), "todo.json");

export const loadTask = async () => {
  const exists = await FsEx.pathExists(dataFilePath);
  if (!exists) {
    FsEx.ensureFileSync(dataFilePath);
    await FsEx.writeJSON(dataFilePath, { data: [] });
  }
  const jsonData = await FsEx.readJSON(dataFilePath, {
    reviver: (key: string, value: any) => {
      if (key === "deadline") {
        return new Date(value as number);
      } else {
        return value;
      }
    },
  });
  // 早すぎて非同期処理を実感できないので、ちょっと時間がかかる処理のシミュレート
  await setTimeoutPromise(1000);
  return jsonData;
};

export const saveState = async (taskList: TaskItem[]) => {
  await setTimeoutPromise(1000);
  await FsEx.writeJSON(
    dataFilePath,
    { data: taskList },
    {
      replacer: (key: string, value: any) => {
        if (key !== "deadline") {
          return value;
        }
        return new Date(value as string).getTime();
      },
      spaces: 2,
    }
  );
};

/** 指定ミリ秒 待つ関数 */
const setTimeoutPromise = (count: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, count);
  });
};
