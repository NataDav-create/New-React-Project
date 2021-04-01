'use strict';
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].trim() != '') {
// 		command.push(employers[i]);
// 	}
// }
employers.forEach(employer => {
	if (employer.length > 0 && employer.trim() != '') {
		command.push(employer);
	}
});
// for (var i = 0; i < command.length; i++) {
// 	command[i] = command[i].toLowerCase().trim();
// 	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }

command = command.map(person => person.trim().charAt(0).toUpperCase() + person.trim().substr(1).toLowerCase());

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {
	cash,
	react,
	react: [firstEl],
	add
} = data;

// function calcCash(own = 0) {
// 	// own = own || 0;
// 	var everyCash = Array.prototype.slice.call(arguments);
// 	var total = own;
// 	for (var i = 0; i < everyCash[1].length; i++) {
// 		total += +everyCash[1][i];
// 	}
// 	return total;
// }

const calcCash = everyCash => everyCash.reduce((sum, item) => sum + item);

const lesson = calcCash(cash);

function makeBusiness(director, allModule, gang, course, teacher = `Максим`) {
	// teacher = teacher || 'Максим';
	const sumTech = [...react, ...add, 'и другие'];
	console.log(`Стартуем новый курс: ${course}. 
	Владелец: ${director}, преподаватель: ${teacher}. 
	Всего уроков: ${allModule}. 
	Команда Академии: ${gang}
	Первое что изучим будет ${firstEl}. Он очень похож на HTML!
	Технологии которые мы изучим: 
	${sumTech}`);

}

makeBusiness('Артем', lesson, command, nameCourse);