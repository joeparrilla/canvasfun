function enoughTimePassed(prevTime,timeAllowed) {
	let currentTime = Date.now();
	let retVal = currentTime - prevTime > timeAllowed ? true : false;
	return retVal;
}