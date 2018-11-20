function popupShow() {
  var popup = document.getElementById('popup');
  var popupContent = document.querySelector('.js-popup-content');
  var popupLoadBtn = document.querySelectorAll('.js-show-popup');
  var closeBtn = document.querySelector('.js-close-popup');

  for(var i = 0; i < popupLoadBtn.length; i++) {
    popupLoadBtn[i].onclick = function(e) {
      e.preventDefault();
      var сontentPath = e.target.dataset.content_path;
      loadPopupContent(сontentPath);
    }
  }

  closeBtn.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(e) {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  }

  function loadPopupContent(сontentPath) {
    var request = new XMLHttpRequest();
    request.addEventListener('load', showPopupContent);
    request.open("GET", сontentPath);
    request.send();

  }

  function showPopupContent(e){
    var data = e.target;
    if(data.status == 200){
      popupContent.innerHTML = data.responseText;
      popup.style.display = "block";
    }
  }

}
