import IssuesData from "./IssuesData";

export default class IssuesAPI {
  static getAllIssues() {
    return JSON.parse(JSON.stringify(IssuesData.issues));
  }
}
