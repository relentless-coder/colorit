var app = angular.module("colorIt",[]);
app.controller("ColorCtrl",function() {
  this.shape = '';
  this.style = {
    'border-color': '',
    'background-color': '',
    'border-width': '',
    'border-style': '',
    'box-shadow': ''
  };
});
