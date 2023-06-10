const postcontainer = document.getElementById('postcontainer');

fetch('/projects/config.proj.json')
  .then(response => response.json())
  .then(data => {
    var container = document.getElementById('container');

    // Loop through the data array
    data.data.forEach(function(item) {
      // Create elements for image, title, and description

      var post = document.createElement('div');
      post.classList = 'post';
    
      var divinpost = document.createElement('div');
      divinpost.classList = 'postdiv';

      var img = document.createElement('div');
      img.classList = 'img';
      img.style.backgroundImage =  `url(${item.img})`;

      var title = document.createElement('h2');
      title.textContent = item.title;

      var description = document.createElement('p');
      description.textContent = item.description;

      post.appendChild(img);
      divinpost.appendChild(title);
      divinpost.appendChild(description);
      post.appendChild(divinpost);
      postcontainer.appendChild(post);

    });
  })
  .catch(error => console.log('Error loading JSON:', error));
