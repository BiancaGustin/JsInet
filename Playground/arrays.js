var names = ["John", "Mary", "Abe", "Kevin"];
names.sort();
console.log(names[0]);
console.log(names[3]);

for (var a = 0; a < names.length; a++) {
    console.log(names[a]);
}

var ages = [20, 25, 23, 27, 21, 19, 18 , 19,25,20,28];

for (var a = 0; a < ages.length; a++) {
    if (ages[a] % 2 == 0) {
        console.log(ages[a]);
    }
}



function minima(list) {
    var minima = list[0];
    for (var a = 0; a < list.length; a++) {
        if (minima > list[a]) {
            {
                minima = list[a];
            }
        }

    }
    return minima;
}

function maxima(list) {
    var maxima = list[0];
    for (var a = 0; a < list.length; a++) {
        if (maxima < list[a]) {
            maxima = list[a];
        }

    }
    return maxima;
}

console.log("Minimo: ", minima(ages));
console.log("Maximo: ", maxima(ages));

function mostrar(list, index) {
    console.log(list[index]);
}

mostrar(ages, 3);

function repetido(list) {
    console.log("repetidos: ");
    list.sort();
    for (var a = 0; a < list.length; a++) {
        if (list[a] == list[a + 1])
        {
            console.log(list[a]);
        }
    }
}
repetido(ages);


var myColor = ["Red", "Green", "White", "Black"];
function union (list) {
    console.log(list.join("-"));
}
union(myColor)