## Commits

### Moved files to root
Du behöver inte ha kod filerna i en egen map och strukturera det på så sätt. Lägg som regel alltid kodfilerna i root. Det finns scenarion där detta inte görs vilket kan vara fallet med npm paket eller dyligt. Om man vill seperera dokumentation från kod brukar sådant läggas i en `/doc` folder.


### Changed structure
- Moved Views into own folder
- Moved dummy data into own folder and changed name

En särskiljning jag brukar göra bland mina react komponenter är att dela upp dem mellan presentation och container komponenter i egna folders. När du använder React Router blir oftast varje vy en container komponent som ansvarar för data och delegerar det nedåt. När du börjar använda en state manager så som Redux blir det lite svårare att kanske dra den särskiljningen (ska denna komponenten vara en presentation eller container komponent?) eftersom vissa komponenter kanske vill hämta en del av staten på egen hand även den ligger långt nere i strukturen. Men dela gärna upp vyer i en egen mapp typ `views` eller `pages`, det brukar underlätta väldigt mycket.
