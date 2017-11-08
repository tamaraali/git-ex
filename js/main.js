'use strict';


var gProjs = [
    {id: "minesweeper",
    name: "Mine Sweeper",
    title: "Be ware of BOMBS!",
    desc: "DO NOT let it blow your mind",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    category: "games",
    link:"projects/minesweeper/index.html",
    client: "puki"},

    {id: "touchNums",
    name: "Touch Nums",
    title: "How fast can you click the numbers?",
    desc: "Don't be afraid of numbers",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    category: "games",  
    link:"projects/touchNums/index.html",
    client: "puki"},

    {id: "chess",
    name: "Chess",
    title: "Let's move some kings",
    desc: "learn some chess rules and rule at the game",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    category: "games", 
    link:"projects/chess/index.html",
    client: "puki"},

    // {id: "ballons",
    // name: "Pop Ballons",
    // title: "Let's make some noise",
    // desc: "lorem ipsum lorem ipsum lorem ipsum",
    // publishedAt: 1448693940000,
    // labels: ["Matrixes", "keyboard events"],
    // category: "games",  
    // link:"projects/popBallons/index.html",
    // client: "puki"},

    {id: "calculator",
    name: "Calculator",
    title: "Let's Calculate",
    desc: "It makes life easier for math haters",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    category: "games",    
    link:"projects/calcu/index.html",
    client: "puki"},

    // {id: "memoryMonster",
    // name: "Memory Monster",
    // title: "Flip some monsters",
    // desc: "lorem ipsum lorem ipsum lorem ipsum",
    // publishedAt: 1448693940000,
    // labels: ["Matrixes", "keyboard events"],
    // category: "games",  
    // link:"projects/memoryMonster/index.html",
    // client: "puki"},

    // {id: "sokoban",
    // name: "Sokoban",
    // title: "Better push those boxes",
    // desc: "lorem ipsum lorem ipsum lorem ipsum",
    // publishedAt: 1448693940000,
    // labels: ["Matrixes", "keyboard events"],
    // category: "games", 
    // link:"projects/sokoban/index.html",   
    // client: "puki"},

    // {id: "inPicture",
    // name: "In Picture",
    // title: "What do you see?",
    // desc: "lorem ipsum lorem ipsum lorem ipsum",
    // publishedAt: 1448693940000,
    // labels: ["Matrixes", "keyboard events"],
    // category: "games", 
    // link:"projects/inPicture/index.html",   
    // client: "puki"},

    {id: "GuessNum",
    name: "Guess My Number",
    title: "Guess some numbers",
    desc: "work up your brains",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
    category: "games",   
    link:"projects/GuessNum/index.html", 
    client: "puki"},

    // {id: "saimonPiano",
    // name: "Saimon's Piano",
    // title: "Play Piano",
    // desc: "lorem ipsum lorem ipsum lorem ipsum",
    // publishedAt: 1448693940000,
    // labels: ["Matrixes", "keyboard events"],
    // category: "games",   
    // link:"projects/saimonPiano/index.html", 
    // client: "puki"},

]

function initPage() {
    renderPortfolio();
    renderModal();
}
function sendMail() {

    var email = document.querySelector('#email').value;
    var subject = document.querySelector('#subject').value;
    var msg = document.querySelector('#message').value;
    var strHtml = 'https://mail.google.com/mail/?view=cm&fs=1&to=tamara13ali@gmail.com&su=' + subject + '&body=' + msg;

    window.open(strHtml, '_blank');
}

function renderPortfolio() {

    var strHtmlPF = '';
    for (var i = 0; i < gProjs.length; i++) {
        var project = gProjs[i];

        strHtmlPF += '<div class="col-md-4 col-sm-6 portfolio-item">\
             <a class="portfolio-link" data-toggle="modal" href="#'+ gProjs[i].id + '">\
             <div class="portfolio-hover">\
              <div class="portfolio-hover-content">\
              <i class="fa fa-plus fa-3x"></i>\
              </div>\
              </div>\
              <img class="img-fluid" src="img/portfolio/' + gProjs[i].id + '.jpg " alt="">\
              </a>\
              <div class="portfolio-caption">\
              <h4> '+ gProjs[i].name + '</h4>\
              <p class="text-muted">' + gProjs[i].title + '</p>\
              </div>\
              </div>'

    }

    var elPortFolio = document.querySelector('#my_projects');
    elPortFolio.innerHTML = strHtmlPF;

}

function renderModal() {
    var strHtmlModal = '';
    for (var i = 0; i < gProjs.length; i++) {
        var project = gProjs[i];

        strHtmlModal += '<div class="portfolio-modal modal fade" id="'+gProjs[i].id+'" tabindex="-1" role="dialog" aria-hidden="true">\
        <div class="modal-dialog">\
          <div class="modal-content">\
            <div class="close-modal" data-dismiss="modal">\
              <div class="lr">\
                <div class="rl"></div>\
              </div>\
            </div>\
            <div class="container">\
              <div class="row">\
                <div class="col-lg-8 mx-auto">\
                  <div class="modal-body">\
                    <!-- Project Details Go Here -->\
                    <h2> '+ gProjs[i].name + ' </h2>\
                    <p class="item-intro text-muted">' + gProjs[i].desc + '</p>\
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/'+ gProjs[i].id + '-full.jpg" alt="">\
                    <p> ' + gProjs[i].labels + ' </p>\
                    <ul class="list-inline">\
                      <li>Date: ' + gProjs[i].publishedAt + '</li>\
                      <li>Client: ' + gProjs[i].client + '</li>\
                      <li>Category: '+gProjs[i].category+'</li>\
                      <li><a href="' + gProjs[i].link + '" target="_blank">Try the game</a></li>\
                      </ul>\
        <button class="btn btn-primary" data-dismiss="modal" type="button">\
                          <i class="fa fa-times"></i>\
                          Close Project</button>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div> '

    }
    var elModal = document.querySelector('#modals');
    elModal.innerHTML += strHtmlModal;

}
