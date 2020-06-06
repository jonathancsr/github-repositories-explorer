export default interface IssueModel {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
