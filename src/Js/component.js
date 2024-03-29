import { inboxTabFile } from "./Body/InboxTab/inboxTab.js";
import { todayTabFile } from "./Body/TodayTab/todayTab.js";
import { weekTabFile } from "./Body/WeekTab/weekTab.js";
import { completedTabFile } from "./Body/CompletedTab/completedTab.js";

export const container = document.querySelector(".container");
export const header = document.createElement("h1");

export default class component {
  inboxTab() {
    inboxTabFile();
  }

  todayTab() {
    todayTabFile();
  }

  weekTab() {
    weekTabFile();
  }

  completedTab() {
    completedTabFile();
  }
}
