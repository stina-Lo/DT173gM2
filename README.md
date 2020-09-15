# DT173gM2
* vad automatiserings-processens syfte är.

Automatiseringsprocessens syte är att man på ett enkelt och rationellt sätt kan publicera ändringar. 
* anger om vilka paket och verktyg du använt, och varför du valt just dessa.

Jag har använt gulp-uglify-es för att minifiera innehållet i filerna och på så sätt göra filstorleken mindre och göra koden svårare att kopiera för oönskat bruk. gulp-sourcemaps kan vara bra eftersom man spårar källkoden. gulp-csso som komprimerar och konkatinerar css filer, Gulp-livereload som uppdaterar webbrowsern när ändringar sker. Jag har även använt gulp-concat som slår ihop flera filer av samma typ till en och samma. Detta för att rationalisera bland filerna i katalogen. 

* beskriv systemet du skapat, hur man startar upp det och de tasks som ingår.
Man startar genom att ange kommandot gulp i terminalen.

 Genom att använda gulp när man arbetar i utvecklingsprojekt så kan man skapa system som automatisk genererar en publicerbar hemsida genom att hålla koll på ändringar som görs i arbetsfiler och uppdatera ändringar som görs till den publicerade hemsidan. 
 
Tasks som körs :
```
[22:02:48] Tasks for ~/Development/dt173g-momen-2/gulpfile.js
[22:02:48] └─┬ default
[22:02:48]   └─┬ <series>
[22:02:48]     ├─┬ <parallel>
[22:02:48]     │ ├── copyHTML
[22:02:48]     │ ├── jsTask
[22:02:48]     │ ├── cssTask
[22:02:48]     │ ├── imgTask
[22:02:48]     │ ├── sourcemapsJsTask
[22:02:48]     │ ├── sourcemapsHTMLTask
[22:02:48]     │ ├── sourcemapsCSSTask
[22:02:48]     │ └── sourcemapsImgTask
[22:02:48]     └── watchTask
```
