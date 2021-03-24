var app = new Vue({
    el: '#root',
    data: {
      slideindex: 0,
      linkarrayimg:[
        'trueno.jpeg',
        'koala.jpeg',
        'familia.jpeg',
        'tricolore.jpeg'
      ]
    },
    methods:{
      right: function () {
        if (this.slideindex < this.linkarrayimg.length - 1) {
          this.slideindex++;
        } else {
          this.slideindex = 0;
        }
      },
      left: function () {
        if (this.slideindex > 0) {
          this.slideindex--;
        } else {
          this.slideindex = this.linkarrayimg.length - 1;
        }
      },
      selected: function (index) {
        this.slideindex = index;
      }
    }
});
