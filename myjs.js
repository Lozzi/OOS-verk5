var users = [
   {
     'nickname' : "- Jón Atli",
     'username' : "jonatli",
  'status'   : "online",
  'personalmessage' : "JIBBÍ"
   },
   {
     'nickname' : "- Bergvin",
     'username' : "bergvin",
  'status'   : "away",
  'personalmessage' : "hello world"
   },
   {
     'nickname' : "- Óli",
     'username' : "oli",
  'status'   : "offline",
  'personalmessage' : "123"
   },
   {
     'nickname' : "- Haukur",
     'username' : "haukur",
  'status'   : "busy",
  'personalmessage' : "experimental"
   },   
];

$(document).ready(function() {
for(var user in users) {
  var stat = $("<li></li>");
  stat.html(users[user].status)
  $("#listi").append(stat);
  var nick = $("<li></li>");
  nick.html(users[user].nickname);
  $("#listi").append(nick);
  var pm = $("<li></li>");
  pm.html(users[user].personalmessage);
  $("#listi").append(pm);
  var name = $("<li></li>");
  name.html(users[user].username);
  $("#listi").append(name);
}
});
