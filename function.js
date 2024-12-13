//#########################################################################################
// Console Mehthods
//#########################################################################################

// 1. log
// 2. table
// 3. asserts
// 4. trace
// 5. time
// 6. Fehler
// 7. Warnung
// 8. Information

//#########################################################################################

// Standardausgabe in der Konsole:
// "log"

console.log("Hello World");

// verzögerte Ausgabe, da Funktion setTimeout
setTimeout(() => {
  console.log("bye bye");
}, 2000);

const objectExample = { id: 1, name: "Yoda", occupation: "jedi" };

console.log(objectExample);

//Ausgabe:
// Hello World
// {id: 1, name: 'Yoda', occupation: 'jedi'}
// bye bye

//#########################################################################################

// Ausgabe eines Array in Tabellenform; dies ist wesentlich übersichtlicher:
// "table"

const jediArray = [
  { id: 1, name: "Yoda" },
  { id: 2, name: "Luke Skywalker" },
  { id: 3, name: "Mace Windu" },
  { id: 4, name: "Obi Wan" },
  { id: 5, name: "Ahsoka" },
];

// Standardausgabe eines Array
console.log(jediArray);
// Ausgabe des Array in tabelarischer Form
console.table(jediArray);

//#########################################################################################
// asserts

let name1 = "Max Mustermann";
let name2 = "Maria Mustermann";
let name3 = "mark";

const errorMsg = "Name has to be a String";

console.assert(typeof name1 === "string", errorMsg);
console.assert(typeof name2 === "string", errorMsg);
console.assert(typeof name3 === "string", name3 + " " + errorMsg);

//#########################################################################################
// trace

const function1 = () => {
  console.trace("Hello World from function1");
};
const function2 = () => {
  console.trace("Hello World from function2");
};

const mainfunction = () => {
  function1();
  function2();
};

mainfunction();

//#########################################################################################
// time
// Zeitmessung der Codeausführung zu Testzwecken
console.time("Timer");

let counter;

for (counter = 0; counter < 100; counter++) {
  //alert(counter);
}

console.timeEnd("Timer");

//#########################################################################################

//Fehler; Warnung; Information
console.log(
  "Error und Warnung sind auskommentiert, da es sonst immer einen Fehler im debugger anzeigt"
);
// console.error("Fehler - error");
// console.warn("Warnung - warn");
console.info("Information - info");

//#########################################################################################

//#########################################################################################
// String-Methoden
//#########################################################################################

// 1. charAt
// 2. concat
// 3. startsWith
// 4. endsWith
// 5. includes
// 6. indexOf
// 7. lastIndexOf
// 8. match
// 9. padStart
// 10. PadEnd
// 11. repeat
// 12. replace
// 13. search
// 14. slice
// 15. split
// 16. substring(x,y)
// 17. toLowerCase
// 18. toUpperCase
// 19. trim
// 20. trimStart
// 21. trimEnd

//

//
let testWord = "Hello";

// Ausgabe des Buchstabens an der angegebenen Stelle; 0 = erste Stelle
console.log(testWord.charAt(0));

// Es werden die Strings miteinander verkettet; mehrere Strings sind durch , zu trennen;
let testWordConcat;
testWordConcat = testWord.concat(" ", "World", " ", "0815");
console.log(testWordConcat);

//Überprüft ob das Word mit dem Buchstaben in der Klammer beginnt, gibt true oder false zurück
console.log(testWord.startsWith("H"));

//Überprüft ob das Word mit dem Buchstaben in der Klammer endet, gibt true oder false zurück
console.log(testWord.endsWith("o"));

// Überprüft ob der String den Buchstaben in der Klammer enthält, gibt true oder false zurück
console.log(testWord.includes("x"));

// Überprüft ob der String den Buchstaben in der Klammer enthält, gibt true oder false zurück
// Ausführung mit Variable
let enthältBuchstabe = "x";
console.log(testWord.includes(enthältBuchstabe));

// Überprüft ob der String den Buchstaben enthält und gibt die Position zurück
// der ersten Stelle des Auftretens, gibt -1 zurück wenn der Buchstabe nicht vorkommt
// Beispiel bei Suche nach "l" in "Hello" kommt immer 2 zurück, obwohl an der 3. Stelle
// ebenfalls ein "l" steht.
// .indexOf(" ")
console.log(testWord.indexOf("l"));

// Überprüft ob der String den Buchstaben enthält und gibt die Position zurück
// der letzten Stelle des Auftretens, gibt -1 zurück wenn der Buchstabe nicht vorkommt
// Beispiel bei Suche nach "l" in "Hello" kommt 3 zurück
// lastIndexOf
console.log(testWord.lastIndexOf("l"));

// Sucht nach dem regulären Ausdruck in dem angegeben String und gibt ein Array zurück, wenn was gefunden wird
// Weitere Infos dazu:
// https://wiki.selfhtml.org/wiki/JavaScript/Objekte/String/match#:~:text=match()%20durchsucht%20eine%20Zeichenkette,gibt%2C%20ist%20das%20Ergebnis%20null.&text=Erwartet%20als%20Parameter%20den%20regul%C3%A4ren%20Ausdruck.
// .match
console.log(testWord.match(/[A-Z]/g));

// Füllt einen String auf die angebenen Stellen auf, wenn die Anzahl kleiner als der bereits
// vorhanden Stellen ist, bleibt der String unverändert. Wenn kein Zeichen angebenen ist, dann
// wird mit Leerzeichen aufgefüllt.
// Bei padStart werden die Zeichen an den Anfang gestellt, bei padEnd ans Ende
// .padStart
console.log(testWord.padStart(4, "?")); // Hello
console.log(testWord.padStart(5, "?")); // Hello
console.log(testWord.padStart(6, "?")); // ?Hello
console.log(testWord.padStart(7, "?")); // ??Hello
console.log(testWord.padStart(7)); //   Hello --> zwei Leerzeichen vorne angestellt

// .PadEnd
console.log(testWord.padEnd(6)); // Hello --> mit Leerzeichen am Ende, das mit Trim wieder entfernt werden könnte
console.log(testWord.padEnd(6, "?")); // Hello?
console.log(testWord.padEnd(7, "?")); // Hello??
console.log(testWord.padEnd(8, "?")); // Hello???

// der angegebene String wird sooft wie angegeben wiederholt und verkettet
// .repeat
console.log(testWord.repeat(3)); //HelloHelloHello

// Es wird innerhalb des String nach der Zeichenkette gesucht und durch die angegebene Zeichen-
// kette ersetzt. Wird kein Ersatz angegeben kommt undefined raus. Wird ein Leerstring angegeben
// wird die gesuchte Zeichenkette ausgeschnitten.
// .replace
console.log(testWord.replace("llo", "y")); // Hey
console.log(testWord.replace("llo")); // Heundefind
console.log(testWord.replace("llo", "")); // He
console.log(testWord.replace("llo", "").length); // 2
console.log(testWord.replace("ll", "")); // Heo
console.log(testWord.replace("ll", "").length); // 3

// Mit search wird ein String innerhalb des Strings gesucht und die Position zurückgegeben
// .search
console.log("search case sensitiv");
console.log(testWord.search("E")); // -1 --> nichts gefunden
console.log("search case insensitiv");

console.log(testWord.search(/E/i)); // 1 --> Wert wird gefunden, da das i dafür sorgt, dass
// die Groß-/Kleinschreibung ingoriert wird

console.log(testWord.search("l")); // 2

console.log("Hello".search("l")); // 2

// Mit slice werden aus dem String die angebenen Stellen ausgeschnitten und zurückgegeben
// Die erste Stelle ist dabei, wie überall, 0 und die zweite Stelle 1.
// Beispiel example.slice(1,2) gibt den Wert "x" zurück. Das Ausschneiden beginnt an der zweiten
// Stelle und endet vor der dritten Stelle ( Null ist die erste Stelle)
// .slice
console.log(testWord.slice(2, 3)); // l
console.log(testWord.slice(1, 3)); // el
console.log(testWord.slice(1, 4)); // ell

// Gibt ein Array mit den einzelnen Buchstaben wieder; das Zeichen in Klammer ist der Trenner;
// wird "" angegeben, dann wird jedes Zeichen einzeln in das Array geschrieben
// .split
console.table(testWord.split("")); // Arraylänge = 5
console.table("Hello World".split(" ")); // Arraylänge = 2
// console.table("Hello World".split("")); // Arraylänge = 11
// console.table("Hello,Wor,ld".split(",")); // Arraylänge = 3

// Einführung subString und Erklärung bzw. Abgrenzung zu .slice
/*
In JavaScript werden sowohl `substring` als auch `slice` verwendet, um Teile eines Strings zu extrahieren, aber es gibt einige Unterschiede in ihrem Verhalten:

---

### **Gemeinsamkeiten:**
- Beide Methoden geben einen Teil des Strings zurück, ohne den Originalstring zu verändern.
- Beide verwenden Start- und Endpositionen, um den Teil des Strings zu bestimmen.

### **Unterschiede:**

#### 1. **Umgang mit negativen Indizes:**
- **`substring`**:
  - Negative Indizes werden als `0` behandelt.
  - Beispiel:
    ```javascript
    const str = "Hello, world!";
    console.log(str.substring(-3, 5)); // "Hello"
    ```
  - Hier wird `-3` ignoriert und durch `0` ersetzt.

- **`slice`**:
  - Unterstützt negative Indizes, die von hinten zählen.
  - Beispiel:
    ```javascript
    const str = "Hello, world!";
    console.log(str.slice(-3, 5)); // ""
    console.log(str.slice(-3));    // "ld!"
    ```

#### 2. **Reihenfolge der Indizes:**
- **`substring`**:
  - Wenn `start` größer ist als `end`, vertauscht `substring` die Werte.
  - Beispiel:
    ```javascript
    const str = "Hello, world!";
    console.log(str.substring(5, 0)); // "Hello"
    ```
  - Hier wird die Reihenfolge geändert und von `0` bis `5` extrahiert.

- **`slice`**:
  - Wenn `start` größer ist als `end`, gibt `slice` einen leeren String zurück.
  - Beispiel:
    ```javascript
    const str = "Hello, world!";
    console.log(str.slice(5, 0)); // ""
    ```

#### 3. **Anwendungsbereich:**
- Beide Methoden arbeiten auf Strings, aber **`slice`** kann auch auf Arrays angewendet werden:
  - Beispiel:
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.slice(1, 3)); // [2, 3]
    ```

---

### **Wann benutzt man was?**
- Verwende `slice`, wenn du negative Indizes nutzen möchtest oder konsistentes Verhalten bevorzugst.
- Verwende `substring`, wenn du sicher bist, dass keine negativen Indizes verwendet werden, und du den Komfort der automatischen Indexumkehrung nutzen möchtest.

Zusammengefasst:
- **`slice`** ist vielseitiger und flexibler.
- **`substring`** ist eher für einfache Fälle geeignet, ohne negative Indizes.
*/

// .substring(x,y)
console.log(testWord.substring(2, 3)); // l

// .toLowerCase
console.log(testWord.toUpperCase()); // HELLO

// .toUpperCase
console.log(testWord.toLowerCase()); // hello

// .trim
console.log("     Hello    ".trim()); // "Hello" --> ohne Leerzeichen

//. trimStart
console.log("     Hello    ".trimStart()); // "Hello       " --> ohne Leerzeichen am Anfang

//. trimEnd
console.log("     Hello    ".trimEnd()); // "       Hello" --> ohne Leerzeichen am Ende
//

//

//#########################################################################################
// Console Mehthods
//#########################################################################################

//

// 1. toString
// 2. join
// 3. push
// 4. pop
// 5. shift
// 6. unshift
// 7. concat
// 8. sort
// 9. splice
// 10. slice
// 11. reverse
// 12. isArray
// 13. indexOf
// 14. lastIdexOf
// 15. find
// 16. findIndex
// 17. includes
// 18. entries
// 19. every
// 20. some
// 21. fill
// 22. copyWithin
// 23. valueOf
// 24. forEach
// 25. map
// 26. filter
// 27. reduce
// 28. reduceRight
// 29. flat
// 30. flatMap
// 31. from
// 32. keys
// 33. delete Operator
// 34. length property

// 1. toString
// Returns string with Array values separated by commas (,); No overwriting
let toStringArray = [1, 2, 3];
console.log(toStringArray.toString()); // 1,2,3

// 2. join
// Retund arras string, Any separator can be specified, comma is default; No overwriting
let joinArray = ["Hello", "World"];
console.table(joinArray); // Array
console.log(joinArray.join(" ")); // Hello,World
console.log(typeof joinArray.join()); // string
console.table(joinArray);

// 3. push
// Adds new element to the end of an array, returns new lenght of array; Overwriting
let pushArray = ["a", "b", "c"];
console.table(pushArray);
pushArray.push("z");
console.table(pushArray);

// 4. pop
// Removes the last element from the end of an array, returns new lenght of array; Overwriting
let popArray = ["a", "b", "c"];
console.table(popArray);
popArray2 = popArray.pop(); // removes "c"
console.table(popArray); //new array with a, b,
console.log(typeof popArray2); // string
console.log(popArray2); // c

// 5. shift
// Remmoves the first element of an array, returns removed Element; Overwriting
let shiftArray = ["a", "b", "c"];
console.table(shiftArray);
shiftArray2 = shiftArray.shift(); // removes "a"
console.table(shiftArray); //new array with b, c,
console.log(typeof shiftArray2); // string
console.log(shiftArray2); // a

// 6. unshift
// Adds new element to the begin of an array, returns new lenght of array; Overwriting
let unshiftArray = ["a", "b", "c"];
console.table(unshiftArray);
unshiftArray.push("z");
console.table(unshiftArray); // z, a, b, c,

// 7. concat
// Concatenates (joins) two or more arrays
// Returns a new array, joined arrays; Overwriting
let concatArray1 = [1, 2];
let concatArray2 = [3, 4];
let concatArray3 = ["a", "b"];
let concatArrayNew = concatArray1.concat(concatArray2, concatArray3);
console.table(concatArrayNew);

// 8. sort
// Sorts the elements of an array, strings in alphabetical and ascending order; Overwriting
let sortArrayNum = [2, 5, 8, 15, 16, 9, 3, 5, 4];
let sortArrayStr = ["Apfel", "Zwetschge", "Apfelsine", "Traube", "Birne"];
console.table(sortArrayNum);
console.table(sortArrayStr);
sortArrayNum.sort((a, b) => a - b); //aufsteigende Sortierung
console.table(sortArrayNum);
sortArrayNum.sort((a, b) => b - a); // absteigende Sortierung
sortArrayStr.sort();
console.table(sortArrayNum);
console.table(sortArrayStr);

// 9. splice
// Adds and/or removes array elements. Returns removed items in array (if any)
// Overwriting
console.log("Orginal");
let spliceArray = ["a", "b", "c", "d"];
console.table(spliceArray);
console.log("Änderung 1: hier wird b + c gelöscht und X eingefügt ");
console.table(spliceArray.splice(1, 2, "X")); // hier wird b + c gelöscht und X eingefügt
console.table(spliceArray);

console.log("Änderung 2: hier wird b gelöscht und X eingefügt ");
spliceArray = ["a", "b", "c", "d"];
console.table(spliceArray.splice(1, 1, "X")); // hier wird b gelöscht und X eingefügt
console.table(spliceArray);

console.log("Änderung 3: hier wird nichts gelöscht und X eingefügt ");
spliceArray = ["a", "b", "c", "d"];
console.table(spliceArray.splice(1, 0, "X")); // hier wird nichts gelöscht und X eingefügt
console.table(spliceArray);

// 10. slice
// Returns selected element in an array, as a new array, default start = 0, end = last Element; No overwriting
let sliceNums= [11,22,33,44,55]
  console.table(sliceNums)
  let sliceArray = sliceNums.slice(2,4)
  console.table(sliceNums)
  console.table(sliceArray)


// 11. reverse

// 12. isArray

// 13. indexOf

// 14. lastIdexOf

// 15. find

// 16. findIndex

// 17. includes

// 18. entries

// 19. every

// 20. some

// 21. fill

// 22. copyWithin

// 23. valueOf

// 24. forEach

// 25. map

// 26. filter

// 27. reduce

// 28. reduceRight

// 29. flat

// 30. flatMap

// 31. from

// 32. keys

// 33. delete Operator

// 34. length property
