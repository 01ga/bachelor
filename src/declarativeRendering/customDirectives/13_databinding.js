import React, { useRef, useEffect } from 'react';
import { MigrationClass } from '../../core/migrationCheck';

export class CustomDirectiveDataBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Parent Component Value"
    }
  }
  render() {
    return (
      <>
        <div>
          <p>
            <strong>Value in Parent Component: </strong>
            <span>{this.state.value}</span>
          </p>
          <ChildComponentWithoutState
            value={this.state.value}
          />
          <ChildComponentWithState
            value={this.state.value}
            componentProperty={this.state.value}
          />
        </div>
        <div>
          <h5>Demonstration of 'Transclusion' Alternative:</h5>
          <TransclusionAlternative
            content="Please, transclude this contetnt within this Component!"
          />
          <NodeTransclusionAlternative
            content="Please, transclude this contetnt within this Component!"
          />
        </div>
      </>
    )
  }
}
function ChildComponentWithoutState(props) {
  return (
    <p>
      <strong>Value in child Component without State: </strong>
      <span>{props.value}</span>
    </p>
  );
}
class ChildComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Value in child Component with State",
    }
    this.componentProperty = props.componentProperty;
  }
  render() {
    return (
      <>
        <p>
          <strong>Parent Component Value in child Component with State: </strong>
          <span>{this.props.value}</span>
        </p>
        <p>
          <strong>Internal Value in child Component with State: </strong>
          <span>{this.state.value}</span>
        </p>
        <p>
          <strong>Component Property Value in child Component with State : </strong>
          <span>{this.componentProperty}</span>
        </p>
      </>
    );
  }
}

function TransclusionAlternative(props) {
  const contentToTransclude = props.content;
  return (
    <>
      <p>
        <span><strong>Content of Component with alternative to Transclusion: </strong></span>
        <span>Components's internal content</span>
      </p>
      <p>
        <span><strong>'Tanscluded' from props content: </strong></span>
        <span>{contentToTransclude}</span>
      </p>
    </>
  )
}
function NodeTransclusionAlternative(props) {
  const ref = useRef(null);
  // read and append content value on every update
  useEffect(() => {
    ref.current.append(props.content)
  }, [props.content]);

  return (
    <>
      <p>
        <span><strong>Component with appending of Content into DOM Node: </strong></span>
        <span>Component's internal content</span>
      </p>
      <p>
        <span><strong>Content 'transcluded' using Node Reference: </strong></span>
        <span ref={ref}></span>
      </p>
    </>
  )
}

const data = {
  section: {
    layer: "I. Deklaratives Rendern mit React",
    group: "1.5. Benutzerdefinierte Direktiven",
    spec: "1.5.2. Datenbindung"
  },
  article: {
    title: "Alternative für scope, bindToController, ngTransclude, transclude()",
    codeSnippets: [{
      name: "parent.js",
      lang: "js",
      code:
`class CustomDirectiveDataBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Parent Component Value"
    }
  }
  render() {
    return (
      <>
        <div>
          <p>
            <strong>Value in Parent Component: </strong>
            <span>{this.state.value}</span>
          </p>
          <ChildComponentWithoutState
            value={this.state.value}
          />
          <ChildComponentWithState
            value={this.state.value}
            componentProperty={this.state.value}
          />
        </div>
        <div>
          <h5>Demonstration of 'Transclusion' Alternative:</h5>
          <TransclusionAlternative
            content="Please, transclude this contetnt within this Component!"
          />
          <NodeTransclusionAlternative
            content="Please, transclude this contetnt within this Component!"
          />
        </div>
      </>
    )
  }
}`
    }, {
      name: "withoutState.js",
      lang: "js",
      code:
`function ChildComponentWithoutState(props) {
  return (
    <p>
      <strong>Value in child Component without State: </strong>
      <span>{props.value}</span>
    </p>
  );
}`
    }, {
      name: "state.js",
      lang: "js",
      code:
`class ChildComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Value in child Component with State",
    }
    this.componentProperty = props.componentProperty;
  }
  render() {
    return (
      <>
        <p>
          <strong>Parent Component Value in child Component with State: </strong>
          <span>{this.props.value}</span>
        </p>
        <p>
          <strong>Internal Value in child Component with State: </strong>
          <span>{this.state.value}</span>
        </p>
        <p>
          <strong>Component Property Value in child Component with State : </strong>
          <span>{this.componentProperty}</span>
        </p>
      </>
    );
  }
}`
    }, {
      name: "transclude.js",
      lang: "js",
      code:
`function TransclusionAlternative(props) {
  const contentToTransclude = props.content;
  return (
    <>
      <p>
        <span><strong>Content of Component with alternative to Transclusion: </strong></span>
        <span>Components's internal content</span>
      </p>
      <p>
        <span><strong>'Tanscluded' from props content: </strong></span>
        <span>{contentToTransclude}</span>
      </p>
    </>
  )
}`
    }, {
      name: "transclFn.js",
      lang: "js",
      code:
`function NodeTransclusionAlternative(props) {
  const ref = useRef(null);
  // read and append content value on every update
  useEffect(() => {
    ref.current.append(props.content)
  }, [props.content]);

  return (
    <>
      <p>
        <span><strong>Component with appending of Content into DOM Node: </strong></span>
        <span>Component's internal content</span>
      </p>
      <p>
        <span><strong>Content 'transcluded' using Node Reference: </strong></span>
        <span ref={ref}></span>
      </p>
    </>
  )
}`
    }],
    result: <CustomDirectiveDataBinding />,
    angularLink: "ang-scope,bindToController,ngTransclude,transclude()",
    migrationCheckData: {
      info: [
        {
          change: "Direktiven ohne eigenen Scope",
          ang:
            `// dirctive definition objekt
{
  scope: false,
  template: '<span ng-bind="envVal"/>'
}
`,
          react:
            `function ComponentWithoutState(props) {
  return <span>{props.envVal}</span>
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Direktiven mit eigenem Scope",
          ang:
            `// dirctive definition objekt
{
  scope: true,
  controllerAs: "ctrl",
  controller: function($scope) {
    $scope.ctrl.value = "Internal";
  },
  template: 
    '<span ng-bind="envVal"/>
    <span ng-bind="ctrl.value"/>'
}
`,
          react:
            `
class ComponentWithState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "Internal"
    }
  }
  rendern() {
    return (<>
      <spn>{this.props.envVal}</span>
      <span>{this.sate.val}</span>
    </>)
  }
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Isolierter Scope",
          ang:
            `// dirctive definition objekt
{
  scope: {external: "="},
  controllerAs: "ctrl",
  controller: function($scope) {
    $scope.ctrl.value = "Internal";
  },
  template: 
    '<span ng-bind="external"/>
    <span ng-bind="ctrl.value"/>'
}
`,
          react:
            `class ComponentWithState extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "Internal"
    }
  }
  rendern() {
    return (<>
      <spn>{this.props.envVal}</span>
      <span>{this.sate.val}</span>
    </>)
  }
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "ngTransclude",
          ang:
            `// dirctive definition objekt
{
  transclude: true,
  template: '<span ng-transclude/>'
}
`,
          react:
            `
function ComponentWithoutState(props) {
  return <span>{props.envVal}</span>
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Transclusion Funktion als Argument der link() und Manipulationen mit DOM",
          ang:
            `// dirctive definition objekt
{
  transclude: true,
  template: '<span/>',
  link: 
    function(scope, el, attr, ctrl,   
    transcludeFn) {
      el.find("#id").append(
        transcludeFn()
      );
  }
}
`,
          react:
            `function DomTransclusionComp(props){
  const ref = useRef(null);
  useEffect(()=>{
    ref.current.append(props.content)
  }, [props.content]);
  
  return <span ref={ref}></span>;
}
`,
          isMigrationConform: MigrationClass.YES
        }
      ]
    }
  }
};

export const CustomDirectiveDataBindingModule =
{
  module: CustomDirectiveDataBinding,
  data: data
} 