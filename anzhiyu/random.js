var posts=["posts/52620.html","posts/16787.html","posts/16788.html","posts/63420.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };