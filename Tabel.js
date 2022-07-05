function generateCode(form){

tablewidth = document.TableGenerator.TableWidth.value;
tablewidthmetric = document.TableGenerator.TableWidthMetric.value;
backgroundcolor = document.TableGenerator.BackgroundColor.value;
rowcount = document.TableGenerator.RowCount.value;
columncount = document.TableGenerator.ColumnCount.value;
padding = document.TableGenerator.Padding.value;
paddingmetric = document.TableGenerator.PaddingMetric.value;
textcolor = document.TableGenerator.TextColor.value;
headercolor = document.TableGenerator.HeaderColor.value;
displaysampletext = document.TableGenerator.DisplaySampleText.checked;
borderwidth = document.TableGenerator.BorderWidth.value;
borderwidthmetric = document.TableGenerator.BorderWidthMetric.value;
bordercolor = document.TableGenerator.BorderColor.value;
borderstyle = document.TableGenerator.BorderStyle.value;
bordercollapse = document.TableGenerator.BorderCollapse.checked;

tablerows = '  <tbody>\n';
tablehead = '  <thead>\n    <tr>\n';
tableheadtext = '';
tabletext = '      <td></td>\n';

for (thisRow = 1; thisRow <= rowcount; thisRow++) {

	tablerows = tablerows + '    <tr>\n';
	
	for (thisColumn = 1; thisColumn <=  columncount; thisColumn++) {
		
		/* Header */
		if (thisRow == 1) {
			if (displaysampletext == "1") {
				tableheadtext = tableheadtext + '      <th>Header ' + thisColumn + '</th>\n';
				}
				else {
				tableheadtext = tableheadtext + '      <th></th>\n';
				}
		}		
		
		/* Normal Row */
		if (displaysampletext == "1") {
			
			tabletext = '      <td>Row ' + thisRow + ', Cell ' + thisColumn + '</td>\n';
			
			}

		tablerows = tablerows + tabletext;
	}
	tablerows = tablerows + '    </tr>\n';	
}

tablehead = tablehead + tableheadtext + '    </tr>\n  </thead>\n';
tablerows = tablerows + '  </tbody>\n';

output = '<!-- Kode CSS: Tempatkan kode ini di diatas head (di antara tag <head> -- </head>) -->\n' +
'<style>\n' +
'table.Jagoantabel {\n' +
	((tablewidth) ? '  width: ' + tablewidth + tablewidthmetric + ';\n' : '') + 
	((backgroundcolor) ? '  background-color: ' + backgroundcolor + ';\n' : '') +
	((bordercollapse) ? '  border-collapse: collapse;' + '\n' : '  border-collapse: separate;' + '\n') +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((textcolor) ? '  color: ' + textcolor + ';\n' : '') +
'}\n\n' +

'table.Jagoantabel td, table.Jagoantabel th {\n' +
	((borderwidth) ? '  border-width: ' + borderwidth + borderwidthmetric + ';\n' : '') +
	((bordercolor) ? '  border-color: ' + bordercolor + ';\n' : '') +
	((borderstyle) ? '  border-style: ' + borderstyle + ';\n' : '') +
	((padding) ? '  padding: ' + padding + paddingmetric + ';\n' : '') +
'}\n\n' +

'table.Jagoantabel thead {\n' +
	((headercolor) ? '  background-color: ' + headercolor + ';\n' : '') +
'}\n' +
'</style>\n\n' +

'<!-- Kode HTML -->\n' +
'<table class="Jagoantabel">\n' +
tablehead +
tablerows +
'</table>\n' +
'<!-- Dibuat di Jagoan Tools -->\n\n';

document.getElementById('displayResult').innerHTML = output;
document.getElementById("htmlcode").textContent = output;
Prism.highlightAll();

return output;
}
Zepto(function($){
  generateCode();
})
