h = prompt('Введите высоту');
document.write('<p>**************</p>')
r = prompt('Введите радиус');
s = Math.PI * (r * r);
dash = '<p>--------------------</p>'
document.write('<p>Обьем цилиндра с площадью основы ' + s + ', радиусом ' + r + ' и высотой ' + h + ' равен:</p>');
document.write(dash);

document.write('<p>V = ' + (s * h) + '</p>');
document.write(dash);
document.write('end.')