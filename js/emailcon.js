function postEmail() {
    var str = document.getElementById("email").value;
    var status = document.getElementById("status");
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) status.innerHTML = "Адрес правильный";
      else status.innerHTML = "Адрес неверный";
    if(postEmpty(str)) status.innerHTML = "Поле пустое";
  }
  function postEmpty(str){
    return (str == null) || (str.length == 0);
  }