export default function usernameSuggestion(user) {
  var username = user.displayName.split(/\s+/).join("");
  username += user.uid.substring(
    Math.round(user.uid.length / 2) - 2,
    Math.round(user.uid.length / 2) + 1
  );
  return username;
}
