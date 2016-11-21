<template lang="pug">
  #main
    router-view

</template>
<script>


export default {

  data: function() {
    return {
      watchOpened: false,
    }
  },
  mounted: function() {
    var counter = 0;
    function changeBgImage (id) {
    var element = document.getElementById(id);
    switch (counter) {
    case 0:
    element.style.backgroundImage = "url(/assets/images/logos/l1.gif)";
    break
    case 1:
    element.style.backgroundImage = "url(/assets/images/logos/l2.gif)";
    break
    case 2:
    element.style.backgroundImage = "url(/assets/images/logos/l3.gif)";
    break
    case 3:
    element.style.backgroundImage = "url(/assets/images/logos/l4.gif)";
    break
    case 4:
    element.style.backgroundImage = "url(/assets/images/logos/l5.gif)";
    break
    case 5:
    element.style.backgroundImage = "url(/assets/images/logos/l6.gif)";
    break
    case 6:
    element.style.backgroundImage = "url(/assets/images/logos/l7.gif)";
    break
    case 7:
    element.style.backgroundImage = "url(/assets/images/logos/l8.gif)";
    break
    case 8:
    element.style.backgroundImage = "url(/assets/images/logos/l9.gif)";
    break
    case 9:
    element.style.backgroundImage = "url(/assets/images/logos/l10.gif)";
    break
    default:
    element.style.backgroundImage = "url(/assets/images/logo.jpg)";
    }
    if (counter<9) {counter++;} else {counter=0;}
    }
    function takeItBack (id) { var element = document.getElementById(id); element.style.backgroundImage = "url(/assets/images/logo.jpg)";}

  }

}
</script>
