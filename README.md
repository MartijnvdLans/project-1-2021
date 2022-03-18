# OBA voeding

## De opdracht
user story: Als sportieve twintiger wil ik mij verdiepen in het effect van gezonde voeding op mijn conditie, om te leren hoe ik mijn sport beter kan beoefenen.

## Features

* Boeken zoeken met een searchbar
* Rekentool om je recepten om te zetten naar de juiste hoeveelheid personen

## Het concept

Voor deze OBA opracht heb ik een webapp gemaakt die boeken kan vinden. Deze is vooral bedoeld voor voeding, kookboeken en recepten. Zo heeft deze webapp ook een omrekenoptie om je recepten om te rekenen van de originele hoeveelheid naar de werkelijke hoeveelheid

## API
Voor deze opdracht heb ik gebruik gemaakt van 2 API's van de OBA.

* OBA boeken zoeken API
* OBA liquid staging API voor leermateriaal

## Installatie

1. Open je terminal in VS code.
2. Clone de repository

```
git clone https://github.com/MartijnvdLans/project-1-2021.git
```

3. Ga via de terminal naar de juiste folder

```
cd ../project-1-2021
```

4. Open een live server.
```
Met VS code extensie ALT + L + O
```

of 

```
rechter muisklik in index.html > open with live server
```

## To do

| | Done  |
| ------------- | ------------- |
| Fetch Data van API  | ✅ |
| Render Data van API | ✅ |
| Boeken zoeken op naam | ✅ |
| Fetch Data van oba liquid api | ✅ |
| Render Data van oba liquid api | - |
| Routing | ✅ |
| Loading state | ✅ |
| Error State | ✅ |

## Wishlist

Nu dat ik klaar ben met mijn app zijn er nog een paar dingen die ik had willen toevoegen, maar helaas geen tijd meer voor heb kunnen vinden.

zo had ik graag nog een render willen toevoegen voor de data voor het open leer materiaal, maar pas op de vrijdag ochtend is deze data fetch mij gelukt. Naast deze data fetch kwam ik er door een typefout achter dat ik geen error state had toegevoegd voor wanneer er geen boeken beschikbaar waren op deze titel.

## Author

Martijn van der Lans

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)