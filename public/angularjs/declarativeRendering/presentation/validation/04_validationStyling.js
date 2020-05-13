angularjsApp.factory('validationStylingData', function() {
    const data = {
        section: {
        layer: "Deklaratives Rendern mit Angular", 
        group: "Darstellung",
        spec: "Validierungs- und Fehlergestaltung"
        },
        article: {
        title:"Form und Input Validierungsklassen",
        codeSnippets: [{
            name:"input.css",
            lang:"css",
            code:
`///// INPUT VALIDIERUNGSKLASSEN:///////////////

// Das Feld wurde noch nicht berührt bzw. wurde berührt
input.ng-untouched { ... }
input.ng-touched { ... }

// Das Feld wurde noch nicht geändert bzw. wurde geändert
input.ng-pristine { ... }
input.ng-dirty { ... }

// Der Feldinhalt ist gültig bzw. ungültig
input.ng-valid { ... }
input.ng-invalid { ... }

// Ein Schlüssel für jede Validierung. 
// Nützlich, wenn mehr als eine Sache validiert werden muss.
// Vordefinierte key-Werte: required, pattern, minlength, maxlength, min, max
input.ng-valid-[key] { ... }
input.ng-invalid-[key] { ... }`
        },
        {
            name:"form.css",
            lang:"css",
            code:
`///// FORM VALIDIERUNGSKLASSEN:///////////////

// Es wurden noch keine Felder geändert bzw. 
// Ein oder mehrere Felder wurden geändert
form.ng-pristine { ... }
form.ng-dirty { ... }

// Der Formularinhalt ist gültig bzw. ungültig
form.ng-valid { ... }
form.ng-invalid { ... }
form.ng-valid-[key] { ... }
form.ng-invalid-[key] { ... }`
        }],
            templateUrl: undefined,
            reactLink: undefined
        }
    };
        return function() {
        return data;
        };
    });