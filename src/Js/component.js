import { inboxTabFile } from "./Body/InboxTab/inboxTab.js";
import { todayTabFile } from "./Body/TodayTab/todayTab.js";

export const container = document.querySelector(".container");
export const header = document.createElement("h1");

export default class component {
  inboxTab() {
    inboxTabFile();
  }

  todayTab() {
    todayTabFile();
  }
}
