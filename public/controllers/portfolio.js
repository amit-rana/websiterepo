angular.module('MyApp')
  .controller('portfolioCtrl', function($scope,$http) {
  	$scope.portfolios = [];
    	function append(d){
		  var grid = document.querySelector('#grid');
		  var item = document.createElement('div');
		  var h = '<div class="item panel panel-primary">';
		      h += '<div class="panel-heading">';
		      h += d.details.title;
		      h += '</div>';
		      h += '<div class="panel-body">';
		      h += d.details.description;
		      h += '<img src="images/'+d.details.image+'" width="100%">';
		      h += '</div>';
		      h += '</div>';
			  salvattore['append_elements'](grid, [item])
			  item.outerHTML = h;
		}

	  $http.get('/api/portfolio').
	  success(function(data, status, headers, config) {
	  	console.log(data);
	  	if(data.length > 0){

	  		data.forEach(function(d){
	  			// $scope.portfolios = data;
	  			append(d);		
	  		})
	  	}
	  }).
	  error(function(data, status, headers, config) {
	    
	  });
  });