## Begleitende Anwendung zur Bachelorarbeit "Bestimmung der auf React migrierbaren Teile von AngularJS-basierten Webanwendungen"

Die Anwendung enthält die Beispiele der Migrationsfälle, welche aufgrund der AngularJS-Schnittstellen aus der 
Liste der Migrationskandidaten modelliert wurden.

Die Migrationsfälle sind in Form eines Katalogs aufgelistet. Jeder Fall wurde erst mit AngularJS implementiert. 
Danach fand ein Migrationsversuch auf React.js statt. Deswegen kommt ein funktionales Feature
zweimal vor: erst in AngularJS-Version, dann in React-Version. Die Tasten "AngularJS Version" 
bzw. "React Version" helfen, zwischen den beiden Varianten zu navigieren.

Jeder Migrationsfall besteht aus dem Code-Teil (Code Beispiel) und aus der UI-Darstellung dieses Codes (Ergebnis). 
Die React-Beispiele enthalten auch eine Tabelle, in welcher die während der Migration vorgenommenen Schritte 
analysiert werden.

### Installation

**Voraussetzungen:** [node.js](https://nodejs.org/de/download/) und [git](https://git-scm.com/downloads) müssen installiert sein.

#### `git clone`
Dieses Repository kann mit dem Befehl `git clone` lokal heruntergeladen werden.
Nachdem der Projekt heruntergeladen wird, gehen Sie in den Projektordner `cd ./bachelor`.
```
$ git clone https://github.com/01ga/bachelor.git
$ cd ./bachelor
```

#### `npm install`
Um die Projekt-Abhängigkeiten zu installieren wird `npm install` 
im Projektordener `bachelor` ausgeführt.
```
$ npm install
```

#### `npm run build`
Danach wird das gesamte Projekt kompiliert
```
$ npm run build
```

#### `node server`
Starten Sie den Server auf dem Port 9000
```
$ node server
```

#### `localhost:9000`
Geben Sie im Browser [localhost:9000](http://localhost:9000) an, um die Anwendung zu benutzen.
