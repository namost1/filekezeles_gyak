import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [
    { vezeteknev: "Kovács", keresztnev: "Anna" },
    { vezeteknev: "Nagy", keresztnev: "Béla" },
    { vezeteknev: "Szabó", keresztnev: "Csaba" },
    { vezeteknev: "Tóth", keresztnev: "Dóra" }
];

// 1. Írás a osztaly.json fájlba
function writeStudentsToFile() {
    fs.writeFileSync('osztaly.json', JSON.stringify(students, 4), 'utf-8');
    console.log('Tanulók adatainak írása megtörtént.');
}

// 2. Olvasás a osztaly.json fájlból
function readStudentsFromFile() {
    const data = fs.readFileSync('osztaly.json', 'utf-8');
    const students = JSON.parse(data);
    console.log('Tanulók adatai:', students);
}

writeStudentsToFile();
readStudentsFromFile();

const timetable = {
    "Hétfő": ["Matematika", "Történelem"],
    "Kedd": ["Angol", "Fizika"],
    "Szerda": ["Biológia", "Kémia"],
    "Csütörtök": ["Irodalom", "Földrajz"],
    "Péntek": ["Testnevelés", "Informatika"]
};

// 1. Írás az orarend.json fájlba
function writeTimetableToFile() {
    fs.writeFileSync('orarend.json', JSON.stringify(timetable, 4), 'utf-8');
    console.log('Órarend írása megtörtént.');
}

// 2. Olvasás az orarend.json fájlból
function readTimetableFromFile() {
    const data = fs.readFileSync('orarend.json', 'utf-8');
    const timetable = JSON.parse(data);
    console.log('Órarend:', timetable);
}

// 3. Adatok módosítása és kiírása
function addClassesToDays() {
    timetable["Kedd"].push("Rajz");
    timetable["Péntek"].push("Zene");
    fs.writeFileSync('orarend.json', JSON.stringify(timetable, 4), 'utf-8');
    console.log('Órák hozzáadása megtörtént.');
}

writeTimetableToFile();
readTimetableFromFile();
addClassesToDays();
readTimetableFromFile();

let products = [
    { id: 1, name: "Laptop", description: "14 inch laptop", price: 120000 },
    { id: 2, name: "Okostelefon", description: "5G okostelefon", price: 80000 },
    { id: 3, name: "Fejhallgató", description: "Bluetooth fejhallgató", price: 20000 }
];

// 1. Írás a termekek.json fájlba
function writeProductsToFile() {
    fs.writeFileSync('termekek.json', JSON.stringify(products, 4), 'utf-8');
    console.log('Termékek adatainak írása megtörtént.');
}

// 2. Olvasás a termekek.json fájlból
function readProductsFromFile() {
    const data = fs.readFileSync('termekek.json', 'utf-8');
    const products = JSON.parse(data);
    console.log('Termékek:', products);
}

// 3. Termék törlése a felhasználó által megadott id alapján
function deleteProductById() {
    rl.question('Adja meg a törölni kívánt termék ID-ját: ', (productIdToDelete) => {
        productIdToDelete = parseInt(productIdToDelete);
        const indexToDelete = products.findIndex(product => product.id === productIdToDelete);
        
        if (indexToDelete !== -1) {
            products.splice(indexToDelete, 1);  
            console.log('A termék törlésre került.');
        } else {
            console.log('Nem található ilyen ID-jú termék.');
        }
        try {
            fs.writeFileSync('termekek.json', JSON.stringify(products, null, 4), 'utf-8');
            console.log('A fájl sikeresen frissítve lett!');
        } catch (err) {
            console.error('Hiba a fájlba íráskor:', err);
        }
        rl.close();
    });
}

writeProductsToFile();
readProductsFromFile();
deleteProductById();
readProductsFromFile();
