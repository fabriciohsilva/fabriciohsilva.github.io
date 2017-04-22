    function getRepos(){
        
        console.log('Fetching...');

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){

          if (xhttp.readyState == 4 && xhttp.status == 200){
            var repos = JSON.parse(xhttp.responseText);
            var html = '<div class="row" >';

            for (var index = 0; index < 6; index++){
                html = html + ` <div class="col s12 m6 l4 xl4">
                                    <div class="card small projeto">
                                        <div class="card-image">
                                            <img src="images/card.jpg">
                                            <span class="card-title">${repos[index].name}</span>
                                        </div>
                                    <div class="card-content">
                                        <p>${repos[index].description}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="${repos[index].html_url}" target="_blank">Cód. Fonte</a>
                                    </div>
                                </div>
                                </div>`;              
                
            }//for (var index = 0; index < 6; index++)

            document.getElementById('repos').innerHTML = html + '</div>';

          }//end if (xhttp.readyState == 4 && xhttp.status == 200)

        }//end xhttp.onreadystatechange = function()

        xhttp.open('GET', 'https://api.github.com/users/fabriciohsilva/repos?sort=updated', true);

        xhttp.send();

      }//end function getProfile()


     $(document).ready( function(){
        getRepos();
     });//$(document).ready( function()
