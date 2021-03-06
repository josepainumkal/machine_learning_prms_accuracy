$(document).ready(function(){

	$('#get_error_result_id').on('click',function(){
		  $.ajax({
		    type: 'GET',
		    url: '/api/decision_tree_data',
		    success: function (data) {
		      var received_json = JSON.parse(data);
		       $('#result_info_id').html('<div style="margin-left: 60px;">Please find below our report on the model evaluation statistics.<br><br>'+

		       	     //                    'Original RMSE &nbsp;: <span style="color:blue;font-weight: bold;">'+received_json['original_rmse']+'</span><br>'+
		      							// 'Improved RMSE : <span style="color:blue;font-weight: bold;">'+received_json['improved_rmse']+'</span><br>'+
		      							// '&Delta;<sub>error</sub> RMSE : <span style="color:blue;font-weight: bold;">'+received_json['delta_error_rmse']+'</span><br>'+
		      							// 'Original PBIAS : <span style="color:blue;font-weight: bold;">'+received_json['original_pbias']+'</span><br>'+
		      							// 'improved PBIAS : <span style="color:blue;font-weight: bold;">'+received_json['improved_pbias']+'</span><br>'+
		      							// '&Delta;<sub>error</sub> PBIAS is: <span style="color:blue;font-weight: bold;">'+received_json['delta_error_pbias']+'</span><br>'+
		      							// 'original CD : <span style="color:blue;font-weight: bold;">'+received_json['original_cd']+'</span><br>'+
		      							// 'improved CD : <span style="color:blue;font-weight: bold;">'+received_json['improved_cd']+'</span><br>'+
		      							// '&Delta;<sub>error</sub> CD is: <span style="color:blue;font-weight: bold;">'+received_json['delta_error_cd']+'</span><br>'+
		      							// 'Original NSE : <span style="color:blue;font-weight: bold;">'+received_json['original_nse']+'</span><br>'+
		      							// 'Improved NSE : <span style="color:blue;font-weight: bold;">'+received_json['improved_nse']+'</span><br>'+
		      							// '&Delta;<sub>error</sub> NSE : <span style="color:blue;font-weight: bold;">'+received_json['delta_error_nse']+'</span><br></div><br>'); 







    '<table class="table"><tbody>'+
	    '<tr><td class="col-md-2">Original RMSE</td><td>'+received_json['original_rmse']+'</td></tr>'+
		'<tr><td>Improved RMSE</td><td>'+ received_json['improved_rmse'] +'</td></tr>'+
   		'<tr> <td>&Delta;<sub>error</sub> RMSE</td><td>'+ received_json['delta_error_rmse'] +'</td></tr></tbody>'+
   		'<tr><td class="col-md-2">Original PBIAS</td><td>'+received_json['original_pbias']+'</td></tr>'+
		'<tr><td>Improved PBIAS</td><td>'+ received_json['improved_pbias'] +'</td></tr>'+
   		'<tr> <td>&Delta;<sub>error</sub> PBIAS</td><td>'+ received_json['delta_error_pbias']+'</td></tr></tbody>'+
   		'<tr><td class="col-md-2">Original CD</td><td>'+received_json['original_cd']+'</td></tr>'+
		'<tr><td>Improved CD</td><td>'+ received_json['improved_cd'] +'</td></tr>'+
   		'<tr> <td>&Delta;<sub>error</sub> CD</td><td>'+ received_json['delta_error_cd'] +'</td></tr></tbody>'+
   		'<tr><td class="col-md-2">Original NSE</td><td>'+received_json['original_nse']+'</td></tr>'+
		'<tr><td>Improved NSE</td><td>'+ received_json['improved_nse'] +'</td></tr>'+
   		'<tr> <td>&Delta;<sub>error</sub> NSE</td><td>'+ received_json['delta_error_nse'] +'</td></tr></tbody>'+
    '</table>');








		     
		      original_p_list = received_json['original_p_list'];
		      improved_p_list = received_json['improved_p_list'];
		      o_list = received_json['o_list'];
		      draw_line_chart(original_p_list,improved_p_list,o_list);
		    }
		  });
	});
	// these functions should be moved into decision tree vis js
	function draw_line_chart(o_p_list,i_p_list,o_list){
		// prepare dataset
		var data_array = [['index','model_predictions','improved_model_predictions','observed values']];
		for(var i=0; i< o_p_list.length; i++){
			data_array.push([i,o_p_list[i],i_p_list[i],o_list[i]]);	
		}
		

		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
	        var data = google.visualization.arrayToDataTable(data_array);
			var options = {
	          title: 'Model Predictions VS Improved Model Predictions VS Obervations',
	          curveType: 'function',
	          legend: { position: 'bottom' }
	        };

	        var chart = new google.visualization.LineChart(document.getElementById('line_chart_id'));

	        chart.draw(data, options);
	    }

	}
	


});

