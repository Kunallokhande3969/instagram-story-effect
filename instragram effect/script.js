var a = [
  {
    dp: "https://images.unsplash.com/photo-1702365627623-d0732f60ad0b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    lokhande:
      "https://images.unsplash.com/photo-1702276125956-18295ebdb086?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    lokhande:
      "https://plus.unsplash.com/premium_photo-1698391728306-3fde0a0700c1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1701026893012-098b8605a289?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    lokhande:
      "https://images.unsplash.com/photo-1702355864508-3f4e6d4e9401?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1702212796873-ba7c7037a66d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    lokhande:
      "https://images.unsplash.com/photo-1699503198602-dc35e9a73789?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
];
var storiyan = document.querySelector("#nav");
var clutter = "";
a.forEach(function (elem, idx) {
  clutter += ` <div class="class">
    <img id ="${idx}"src="${elem.dp}" alt="">
  </div>`;     //tampplat litlers
});
storiyan.innerHTML = clutter;
storiyan.addEventListener("click",function(dets) {
    document.querySelector("#full-screen").style.display ="block"
       document.querySelector("#full-screen").style.backgroundImage   = `url(${a[dets.target.id].lokhande})`
     setTimeout(function(){
      document.querySelector("#full-screen").style.display ="none"
     },2000)
});

