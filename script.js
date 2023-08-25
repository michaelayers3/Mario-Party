function addCounter() {
      var nameInput = document.getElementById("name-input");
      var name = nameInput.value;

      if (name.trim() !== "") {
        var table = document.getElementById("counter-table");
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var winsCell = row.insertCell(1);
        var lossCell = row.insertCell(2);

        nameCell.innerHTML = name;
        winsCell.innerHTML = "0";
        lossCell.innerHTML = "0";

        nameInput.value = "";
      }
    }

    function submitComment() {
      var commentInput = document.getElementById("comment-input");
      var comment = commentInput.value;

      if (comment.trim() !== "") {
       
        console.log("Submitted comment:", comment);
        commentInput.value = "";
      }
    }