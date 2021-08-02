function addUser()
{
 var player_1 = document.getElementById("player_name_1").value;
 var player_2 = document.getElementById("player_name_2").value;

 localStorage.setItem("savePlayer_name1" , player_1);
 localStorage.setItem("savePlayer_name2" , player_2);

 window.location = "quiz_game_page.html"
}