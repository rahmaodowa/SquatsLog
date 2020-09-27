var trash = document.getElementsByClassName("fa fa-trash");

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const sets = this.parentNode.parentNode.children[1].innerText
      const reps = this.parentNode.parentNode.children[3].innerText
      const date = this.parentNode.parentNode.children[5].innerText

      fetch('deleteLog', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'reps': reps,
          'sets': sets,
          'date':date
        })
      }).then(function (response) {
        window.location.reload()
      })
     });
});
