function readMap(inputMapText) {
	map = [[]];
	row = 0;
	column = 0;
	for(i=0;i<inputMapText.length;i++) {
		var symbol = inputMapText.charAt(i);
		if(symbol != '\n') {
			switch(symbol) {
				case 'X':
					map[row][column] = 1;
					break;
				case ' ':
				 	map[row][column] = 0;
				 	break;
				case 'S':
					map[row][column] = 2
			}

			column++;
		}
		else {
			row++
			column = 0;
			map.push([]);
		}
	}
	console.log(map);
	return map;
}