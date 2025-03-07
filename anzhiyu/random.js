var posts=["/post/unnamed-document-q6mnm.html","posts/52620.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };