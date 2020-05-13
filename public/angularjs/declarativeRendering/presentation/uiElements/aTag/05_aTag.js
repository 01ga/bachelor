angularjsApp.factory('aTagData', function() {
    const data = {
        section: {
        layer: "Deklaratives Rendern mit Angular", 
        group: "Darstellung",
        spec: "Definition von UI-Elementen"
        },
        article: {
        title:"a",
        codeSnippets: [
        {
            name:"index.html",
            lang:"html",
            code:
`<div class="result-box">   
<p>
    <span class="right-padding">Implicit default behavior prevention!</span>
    <a class="btn btn-default" href="" role="button">
        Empty link with href=""
    </a>
</p>
<p>
    <span class="right-padding">Navigates to top of the page. No reload.</span>
    <a class="btn btn-default" href="#top" role="button">
        Link with href="#top"
    </a>
</p>
<p><span class="right-padding">Input field to check the state</span><input /></p>
<p>
    <span class="right-padding">Loads the specified external link.</span>
    <a class="btn btn-default" href="http://www.mozilla.com/" role="button">
        External link 'http://www.mozilla.com/'
    </a>
</p>
</div>`
        }],
            templateUrl: 'angularjs/declarativeRendering/presentation/uiElements/aTag/atag.html',
            reactLink: "react-a"
        }
    };
    return function() {
        return data;
    };
});