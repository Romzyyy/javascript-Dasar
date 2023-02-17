// const arraySaya = ['muka', 'tangan', 'bibir'];
// console.log(arraySaya.length);

// const arrayKamu = [];
// arrayKamu[0] = 'bunga';
// arrayKamu[1] = 'trompet';
// arrayKamu[2] = 'silang';

// console.log(arrayKamu);

// const arrayKita = new Array();
// arrayKita[0] = 'gelang';
// arrayKita[5] = 'bola';
// arrayKita[1] = 'lampu';
// console.log(arrayKita);

// const arraySaya = ['alpukat', 'strobery', 'jambu', 'semangka', 'jeruk'];
// const semangka = arraySaya.includes('semangka');

// if (semangka) {
//     const posisiSemangka = arraySaya.indexOf('semangka');
//     const indexBefore = posisiSemangka - 1;
//     const indexAfter = posisiSemangka + 1;
//     const before = arraySaya[indexBefore];
//     const after = arraySaya[indexAfter];
//     console.log(`buah sebelum semangka adalah ${before}`);
//     console.log(`buah setelah semangka adalah ${after}`);
//     const buahAwal = arraySaya[0];
//     console.log(`buah pertama dari array adalah ${buahAwal}`);
//     const buahAkhir = arraySaya[arraySaya.length - 1];
//     console.log(`buah terakhir di array adalah ${buahAkhir}`);
//     console.log(arraySaya);
// } else {
//     console.log('saya tidak tahu posisinya dimana');
// }

// const arraySaya = [];
// arraySaya['al'] = 'alpukat';
// arraySaya['je'] = 'jeruk';

// console.log(arraySaya['je']);

// const arraySaya = ['lemon', 'pisang', 'nanas', 'mangga', 'apel', 'anggur'];
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya));

// newArraySaya[0] = 'silang';

// console.log({ arraySaya });
// console.log({ newArraySaya });

// const arraySaya = [
//     'pisang',
//     10,
//     {
//         tomato: function () {
//             console.log('ini tomate');
//         },
//     },
//     ['eat', 'food'],
// ];

// // console.log(arraySaya[2].tomato);
// arraySaya[2].tomato();

// const arraySaya = ['anggur', 'pisang', 'alpukat'];
// const arrayKamu = ['bibir', 'setan', 'trompet'];

// const mergeArray = arraySaya.concat(arrayKamu);
// // for (list in mergeArray) console.log(list);
// mergeArray.map((value, index) => console.log(index, value));

const datas = [
    {
        name: 'dea afrizal',
        stack: 'js react dll',
        age: 30,
    },
    {
        name: 'mike wise',
        stack: 'vue next dll',
        age: 28,
    },
    {
        name: 'shelby',
        stack: 'CI ruby dll',
        age: 24,
    },
    {
        name: 'jhon doe',
        stack: 'GO djanggo dll',
        age: 26,
    },
];

// datas.map((values, index) => {
//     console.log(values);
// });

datas
    .sort((a, b) => a.age - b.age)
    .filter((x) => x.age >= 28)
    .map((values) => console.log(values));
