const Home = document.getElementById('home');
const Left = document.getElementsByClassName('Left')[0];
const Right = document.getElementsByClassName('Right')[0];



Home.addEventListener('click', function(){
    window.location.href = '/index.html';
});

if(Right){
    Right.addEventListener('click', function(){
        window.location.href = '/robloxdevelopment.html';
    });
};
if(Left){
    Left.addEventListener('click', function(){
        window.location.href = '/';
    });
};

