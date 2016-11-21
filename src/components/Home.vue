<template lang="pug">
  .view
    #menu
      img(src='assets/images/lpt11.jpg', border='0')
      a(href='/personal')
        img(src='assets/images/lpt12.jpg', border='0')

    #contact
    #help
      #logo(onmouseover="changeBgImage('logo')", onmouseout="takeItBack('logo');")
      .box-photoset
        .photo(v-for="image in images")
          a.group(v-bind:href='image.big', title='', rel='group')
            img(v-bind:src='image.small', border='none')


      #empty
</template>

<script>
  var keys = [];
  var images = [];
  var req = require.context('images/commerical', true, /\.jpe?g$/)
  req.keys().forEach(function(key) {
    var im = req(key)
    var k = key.replace(".jpeg", "").replace(".jpg", "").replace("./", "")
    if (k.indexOf('72x72_') === -1)
      keys.push(k)
    images.push(im)
  })
  var data = {};
  keys.forEach(k => {
    images.forEach(i => {
      if (i.indexOf('72x72_' + k) > -1) {
        data[k] = {
          ...data[k],
          small: i
        }
      } else {
        if (i.indexOf(k) > -1) {
          data[k] = {
            ...data[k],
            big: i
          }
        }
      }
    })
  })


  export default {



    data: function() {
      return {
        images: data,
      }
    },
    mounted: function(){
      jQuery(document).ready(function() {
      jQuery("a[rel=group]").fancybox({
      'transitionIn'		: 'none',
      'transitionOut'		: 'none',
      'titlePosition' 	: 'over',
      'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
      }
      });
      function preloadImages()
      {
      for(var i = 0; i<arguments.length; i++)
      jQuery("<img />").attr("src", arguments[i]);
      }
      preloadImages("/assets/images/logos/l1.gif","/assets/images/logos/l2.gif","/assets/images/logos/l3.gif","/assets/images/logos/l4.gif","/assets/images/logos/l5.gif","/assets/images/logos/l6.gif","/assets/images/logos/l7.gif","/assets/images/logos/l8.gif","/assets/images/logos/l9.gif","/assets/images/logos/l10.gif");
      });
    }

  }
</script>
