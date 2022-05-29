// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
	return data.filter((passenger) => {
		return passenger.fields.survived == 'Yes'
	}).length;
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
	return data.filter((passenger) => {
		return passenger.fields.survived == 'No'
	}).length;
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	return data.filter((passenger) => {
		return passenger.fields.pclass == pclass
	}).length;
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
	return data.filter((passenger) => {
		return passenger.fields.pclass == pclass && passenger.fields.survived === 'Yes'
	}).length;
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	return data.filter((passenger) => {
		return passenger.fields.pclass == pclass && passenger.fields.survived === 'No'
	}).length;
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	let i = 0;

	while (data[i].fields.age == undefined) {
		i += 1;
	}

	let min = data[i].fields.age;

	for (passenger of data) {
		if (passenger.fields.age && passenger.fields.age < min) {
			min = passenger.fields.age;
		}
	}

	return min;
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
	let i = 0;

	while (data[i].fields.age == undefined) {
		i += 1;
	}

	let max = data[i].fields.age;

	for (passenger of data) {
		if (passenger.fields.age && passenger.fields.age > max) {
			max = passenger.fields.age;
		}
	}

	return max;
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
	return data.filter((passenger) => {
		return passenger.fields.embarked == embarked;
	}).length;
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
	let i = 0;

	while (data[i].fields.fare == undefined) {
		i += 1;
	}

	let min = data[i].fields.fare;

	for (passenger of data) {
		if (passenger.fields.fare == 0) {
			return 0;
		}
		if (passenger.fields.fare && passenger.fields.fare < min) {
			min = passenger.fields.fare;
		}
	}

	return min;
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
	let i = 0;

	while (data[i].fields.fare == undefined) {
		i += 1;
	}

	let max = data[i].fields.fare;

	for (passenger of data) {
		if (passenger.fields.fare && passenger.fields.fare > max) {
			max = passenger.fields.fare;
		}
	}

	return max;
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
	return data.filter((passenger) => {
		return passenger.fields.sex == gender;
	}).length;
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
	return data.filter((passenger) => {
		return passenger.fields.sex == gender && passenger.fields.survived == 'Yes';
	}).length;
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	return data.filter((passenger) => {
		return passenger.fields.sex == gender && passenger.fields.survived == 'No';
	}).length;
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
	let total = 0;
	for ( passenger of data ) {
		if ( passenger.fields.fare !== undefined ) {
			total += passenger.fields.fare;
		}
	}
	return total;
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
	let total = 0;
	for ( passenger of data ) {
		if ( passenger.fields.fare !== undefined ) {
			total += passenger.fields.fare;
		}
	}
	return total/data.length;
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
	let fares = [];
	
	for ( passenger of data ) {
		if ( passenger.fields.fare !== undefined ) {
			fares.push(passenger.fields.fare);
		}
	}

	fares = fares.sort((a, b) => a - b);
	const middle = Math.floor(fares.length / 2);

	if (fares.length % 2 == 0) {
		return (fares[middle - 1] + fares[middle]) / 2;
	}
	
	return fares[middle];
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
	let total = 0;
	let count = 0;

	for ( passenger of data ) {
		if ( passenger.fields.age !== undefined ) {
			total += passenger.fields.age;
			count += 1;
		}
	}
	return total / count;
}

// 19 --------------------------------------------------------------
// Return the median age from passengers.

const getMedianAge = (data) => {
	let ages = [];
	
	for ( passenger of data ) {
		if ( passenger.fields.age !== undefined ) {
			ages.push(passenger.fields.age);
		}
	}

	ages = ages.sort((a, b) => a - b);
	const middle = Math.floor(ages.length / 2);

	if (ages.length % 2 == 0) {
		return (ages[middle - 1] + ages[middle]) / 2;
	}

	return ages[middle];
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
	data = data.filter((passenger) => {
		return passenger.fields.sex === gender;
	});

	let total = 0;
	let count = 0;

	for ( passenger of data ) {
		if ( passenger.fields.age !== undefined ) {
			total += passenger.fields.age;
			count += 1;
		}
	}
	return total / count;
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}