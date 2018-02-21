## Commits

### Moved files to root
Du behöver inte ha kod filerna i en egen map och strukturera det på så sätt. Lägg som regel alltid kodfilerna i root. Det finns scenarion där detta inte görs vilket kan vara fallet med npm paket eller dyligt. Om man vill seperera dokumentation från kod brukar sådant läggas i en `/doc` folder.


### Changed structure
- Moved Views into own folder
- Moved dummy data into own folder and changed name

En särskiljning jag brukar göra bland mina react komponenter är att dela upp dem mellan presentation och container komponenter i egna folders. När du använder React Router blir oftast varje vy en container komponent som ansvarar för data och delegerar det nedåt. När du börjar använda en state manager så som Redux blir det lite svårare att kanske dra den särskiljningen (ska denna komponenten vara en presentation eller container komponent?) eftersom vissa komponenter kanske vill hämta en del av staten på egen hand även den ligger långt nere i strukturen. Men dela gärna upp vyer i en egen mapp typ `views` eller `pages`, det brukar underlätta väldigt mycket.

### Refactoring
- Divided some reoccurring elements into components
- Added PropTypes to components which uses props
- Added stars to the data dummy

En bra egenskap du har är att rita upp appen, dess flöde och dess komponenter. Du kan ta det ännu ett steg och dela upp återkommande UI element till egna komponenter. Jag har refaktoriserat headern, betygsättningen och rullgardinen till egna komponenter. Börja att läsa och följa https://reactjs.org/docs/thinking-in-react.html (om du inte redan har gjort det) sen gräv in dig djupare in i ämnet. Medium.com är en bra portal för att hitta mycket kunskap om React och annat utvecklings relaterat. Du kan hitta flera element som skulle kunna bli egna komponenter.

PropTypes är ett sätt att under utvecklingsfasen upptäcka eller försäkra sig om att typen av datan som rör sig in i en komponent är den typen som komponenten förväntar sig. PropTypes gör underverk för att förhindra vanliga buggar. Exempelvis komponent A förväntade sig att en prop ska vara en sträng men istället av någon outgrundlig anledning kom det en siffra vilket crashade komponenten. Med PropTypes får du en varning om det inträffade och kan ta tag i det innan buggen når produktion. Använd alltid PropTypes när en komponent använder props. En annan fördel är också att PropTypes förtydligar för andra hur den ska användas och vad den kan tänkas användas till.

## Vidare forskning och utvecklings

Vad du kan göra eller lära dig härnäst är:
- Implementera Redux
- Sätt upp redux flödet. Dvs konstruera hela redux flödet exempelvis `GET_SALONS_REQUESTED` -> Mock API Request -> `GET_SALONS_SUCCESS` eller `GET_SALONS_FAILED`.

https://redux.js.org/
https://egghead.io/courses/getting-started-with-redux

Lär dig använda:
- Immutable JS (https://facebook.github.io/immutable-js/) - Konverterar om vanliga "mutable" konstruktioner till Immutable data strukturen med egna hjälpsamma funktioner. Det lirar väldigt bra tillsammans med Redux.
- Reselect (https://github.com/reactjs/reselect) - Bra bibliotek för tillfällen där du vill ha funktioner så som filtrering.
- Skapa några enklare tester med Jest (https://github.com/facebook/jest/) och Enzyme (airbnb.io/enzyme/)

Ställ gärna frågor om det är något du undrar eller om något har varit oklart.
