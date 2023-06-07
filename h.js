function a() {
    for(var i=0;i<3;i++) {
      function b(i) {
      setTimeout(()=>{console.log(i)}, 1000);
    }
    b(i);
  }
}
a();

