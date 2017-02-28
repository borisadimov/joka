<template lang="pug">
  .view
    #menu
      img(src='assets/images/lpt11.jpg', border='0')
      a(href='#personal')
        img(src='assets/images/lpt12.jpg', border='0')

    #contact
    #help
      #logo(onmouseover="changeBgImage('logo')", onmouseout="takeItBack('logo');")
      .box-photoset
        .photo(v-for="image in images")
          a.group(v-bind:href="'assets/commerical/'+image", title='', rel='group')
            img(v-bind:src="'assets/commerical/72x72_'+image", border='none')


      #empty
</template>

<script>


  export default {



    data: function() {
      return {
        images: [],
      }
    },
    mounted: function(){

      fetch('config.json')
        .then(data=> data.json())
        .then(data=> {
          this.images = data.commerical

          setTimeout(()=> {
            jQuery("a[rel=group]").fancybox({
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'titlePosition' 	: 'over',
            'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
            });
          },100)
        })

    }

  }
</script>
