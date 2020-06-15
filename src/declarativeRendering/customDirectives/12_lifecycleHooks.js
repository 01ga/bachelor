import React, { useEffect } from 'react';
import { MigrationClass } from '../../core/migrationCheck';

const Role = {
  HERO: 1,
  SUPERHERO: 2,
  MUSTER: 5
}

export class LifecycleHooks extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <UserProfile />
  }
}
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // $postLink updating DOM alternative
    // creating direct DOM reference to manipulate DOM manually
    this.element = React.createRef();
    // $onInit alternative
    this.state = {
      onProfilePage: true,
      historyTabClass: "",
      profileTabClass: "active",
      history: [{
        date: new Date('December 10, 2019 07:03:00'),
        role: Role.SUPERHERO,
        score: 12
      }, {
        date: new Date('February 17, 2019 03:24:00'),
        role: Role.HERO,
        score: 150
      }, {
        date: new Date('July 25, 2019 09:19:00'),
        role: Role.MUSTER,
        score: 3
      }],
      user: "Oliver"
    };
  }
  // alternative for accessing parent component within $onInit
  // callback that is specified in child Props
  setUserScoreCtrationTime = (creationTime) => {
    // intercomponent comunication
    // reading some info from child component
    console.log("Instantiating userScore Component: " + creationTime.toLocaleString());
  }

  // $postLink updating DOM alternative
  componentDidMount() {
    this.prevTimeOfScoreChange = this.state.history[0].date;
    // getting DOM element through reference
    const node = this.element.current;
    const p = document.createElement("p");
    p.textContent = "An Element appended to userProfile directive from componentDidMount() hook";
    const br = document.createElement("br");
    node.appendChild(br);
    node.appendChild(p);
  }
  // $doCheck can be partialy substituted with componentDidUpdate()
  componentDidUpdate = () => {
    // detecting how much time has passed since
    // last score modifications
    if (this.state.history[0].date !== this.prevTimeOfScoreChange) {
      const mlsecDiff = this.state.history[0].date - this.prevTimeOfScoreChange;
      this.prevTimeOfScoreChange = this.state.history[0].date;
      const minDiff = Math.round(mlsecDiff / 60000);
      if (minDiff > 1) {
        console.log("The last modification happened more than a minute ago");
      }
    }
  };
  togglePage = (source) => {
    if (source === "profile" && !this.state.onProfilePage) {
      this.setState((prev) => {
        return {
          onProfilePage: !prev.onProfilePage,
          historyTabClass: "",
          profileTabClass: "active"
        }
      });
    }
    if (source === "history" && this.state.onProfilePage) {
      this.setState((prev) => {
        return {
          onProfilePage: !prev.onProfilePage,
          historyTabClass: "active",
          profileTabClass: ""
        }
      });
    }
  }
  decrementScore = () => {
    this.setState(
      (prev) => {
        const history = [...prev.history];
        history[0] = {
          date: new Date(),
          role: history[0].role,
          score: history[0].score - 1
        };
        return { history: history };
      }
    );
  }
  incrementScore = () => {
    this.setState(
      (prev) => {
        const history = [...prev.history];
        history[0] = {
          date: new Date(),
          role: history[0].role,
          score: history[0].score + 1
        }
        return { history: history }
      }
    );
  }
  render() {
    return (
      <div ref={this.element}>
        <div className="btn-group btn-group-justified" role="group" aria-label="Justified button group">
          <div className="btn-group" role="group">
            <button type="button"
              className={"btn btn-default " + this.state.profileTabClass}
              onClick={() => this.togglePage('profile')}>Profile</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button"
              className={"btn btn-default " + this.state.historyTabClass}
              onClick={() => this.togglePage('history')}>History</button>
          </div>
        </div>
        {this.state.onProfilePage &&
          <div>
            <br />
            <div>
              <span><strong>Username: </strong></span>
              <span>{this.state.user}</span>
              <ul className="list-group">
                <UserScore
                  // callback to be used in child
                  setCreationTime={this.setUserScoreCtrationTime}
                  date={this.state.history[0].date}
                  role={this.state.history[0].role}
                  score={this.state.history[0].score}
                />
              </ul>
            </div>
            <div>
              <p className="lead">Change Score: </p>
              <button className="btn btn-default"
                onClick={this.incrementScore}>Increment</button>
              <span>  </span>
              <button className="btn btn-default"
                onClick={this.decrementScore}>Decrement</button>
            </div>
          </div>
        }
        {!this.state.onProfilePage &&
          <div>
            <ul className="list-group">
              {this.state.history.map(
                (entry, index) => {
                  return (
                    <UserScore
                      key={index}
                      setCreationTime={this.setUserScoreCtrationTime}
                      date={entry.date}
                      role={entry.role}
                      score={entry.score}
                    />
                  )
                }
              )}
            </ul>
          </div>
        }
        <br />
        <Time />
      </div>
    );
  }
};
function UserScore(props) {
  useEffect(() => { props.setCreationTime(new Date()) }, []);
  const formatDate = (date) => {
    return date.toLocaleString();
  }
  const getRoleName = (role) => {
    switch (role) {
      case Role.HERO:
        return "Hero";
      case Role.SUPERHERO:
        return "Super-Hero";
      case Role.MUSTER:
        return "Muster";
      default:
        throw Error("Unnown Role Index: " + role);
    }
  }
  const calculateScore = (basicScore, role) => {
    switch (role) {
      case Role.HERO:
        return basicScore;
      case Role.SUPERHERO:
        return basicScore * 10;
      case Role.MUSTER:
        return basicScore * 100;
      default:
        throw Error("Unnown Role Index: " + role);
    }
  }

  return (
    <>
      <br />
      <li className="list-group-item">
        <span><strong>Date: </strong></span>
        <span className="pull-right">{formatDate(props.date)}</span>
      </li>
      <li className="list-group-item">
        <span><strong>Role: </strong></span>
        <span className="pull-right">{getRoleName(props.role)}</span>
      </li>
      <li className="list-group-item">
        <span><strong>Score: </strong></span>
        <span className="badge">{calculateScore(props.score, props.role)}</span>
      </li>
    </>
  );
}
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  updateTime = () => {
    this.setState({ time: new Date().toLocaleString() });
  };

  // lifecycle hook instead of $interval
  componentDidMount() {
    this.timeoutId = setInterval(
      () => this.updateTime(),
      1000
    );
  };

  // $onDestroy alternative
  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }

  render() {
    return <div>{this.state.time}</div>
  };
}

const data = {
  section: {
    layer: "I. Deklaratives Rendern mit React",
    group: "1.5. Benutzerdefinierte Direktiven",
    spec: "1.5.1. Lebenszyklus-Hooks"
  },
  article: {
    title: "Alternative für $onInit, $onChanges, $onDestroy, $postLink, $doCheck",
    codeSnippets: [{
      name: "userProfile.js",
      lang: "js",
      code:
`class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // $postLink updating DOM alternative
    // creating direct DOM reference to manipulate DOM manually
    this.element = React.createRef();
    // $onInit alternative
    this.state = {
      onProfilePage: true,
      historyTabClass: "",
      profileTabClass: "active",
      history: [{
        date: new Date('December 10, 2019 07:03:00'),
        role: Role.SUPERHERO,
        score: 12
      }, {
        date: new Date('February 17, 2019 03:24:00'),
        role: Role.HERO,
        score: 150
      }, {
        date: new Date('July 25, 2019 09:19:00'),
        role: Role.MUSTER,
        score: 3
      }],
      user: "Oliver"
    };
  }
  // alternative for accessing parent component within $onInit
  // callback that is specified in child Props
  setUserScoreCtrationTime = (creationTime) => {
    // intercomponent comunication
    // reading some info from child component
    console.log("Instantiating userScore Component: " + creationTime.toLocaleString());
  }

  // $postLink updating DOM alternative
  componentDidMount() {
    this.prevTimeOfScoreChange = this.state.history[0].date;
    // getting DOM element through reference
    const node = this.element.current;
    const p = document.createElement("p");
    p.textContent = "An Element appended to userProfile directive from componentDidMount() hook";
    const br = document.createElement("br");
    node.appendChild(br);
    node.appendChild(p);
  }
  // $doCheck can be partialy substituted with componentDidUpdate()
  componentDidUpdate = () => {
    // detecting how much time has passed since
    // last score modifications
    if (this.state.history[0].date !== this.prevTimeOfScoreChange) {
      const mlsecDiff = this.state.history[0].date - this.prevTimeOfScoreChange;
      this.prevTimeOfScoreChange = this.state.history[0].date;
      const minDiff = Math.round(mlsecDiff / 60000);
      if (minDiff > 1) {
        console.log("The last modification happened more than a minute ago");
      }
    }
  };
  togglePage = (source) => {
    if (source === "profile" && !this.state.onProfilePage) {
      this.setState((prev) => {
        return {
          onProfilePage: !prev.onProfilePage,
          historyTabClass: "",
          profileTabClass: "active"
        }
      });
    }
    if (source === "history" && this.state.onProfilePage) {
      this.setState((prev) => {
        return {
          onProfilePage: !prev.onProfilePage,
          historyTabClass: "active",
          profileTabClass: ""
        }
      });
    }
  }
  decrementScore = () => {
    this.setState(
      (prev) => {
        const history = [...prev.history];
        history[0] = {
          date: new Date(),
          role: history[0].role,
          score: history[0].score - 1
        };
        return { history: history };
      }
    );
  }
  incrementScore = () => {
    this.setState(
      (prev) => {
        const history = [...prev.history];
        history[0] = {
          date: new Date(),
          role: history[0].role,
          score: history[0].score + 1
        }
        return { history: history }
      }
    );
  }
  render() {
    return (
      <div ref={this.element}>
        <div className="btn-group btn-group-justified" role="group" aria-label="Justified button group">
          <div className="btn-group" role="group">
            <button type="button"
              className={"btn btn-default " + this.state.profileTabClass}
              onClick={() => this.togglePage('profile')}>Profile</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button"
              className={"btn btn-default " + this.state.historyTabClass}
              onClick={() => this.togglePage('history')}>History</button>
          </div>
        </div>
        {this.state.onProfilePage &&
          <div>
            <br />
            <div>
              <span><strong>Username: </strong></span>
              <span>{this.state.user}</span>
              <ul className="list-group">
                <UserScore
                  // callback to be used in child
                  setCreationTime={this.setUserScoreCtrationTime}
                  date={this.state.history[0].date}
                  role={this.state.history[0].role}
                  score={this.state.history[0].score}
                />
              </ul>
            </div>
            <div>
              <p className="lead">Change Score: </p>
              <button className="btn btn-default"
                onClick={this.incrementScore}>Increment</button>
              <span>  </span>
              <button className="btn btn-default"
                onClick={this.decrementScore}>Decrement</button>
            </div>
          </div>
        }
        {!this.state.onProfilePage &&
          <div>
            <ul className="list-group">
              {this.state.history.map(
                (entry, index) => {
                  return (
                    <UserScore
                      key={index}
                      setCreationTime={this.setUserScoreCtrationTime}
                      date={entry.date}
                      role={entry.role}
                      score={entry.score}
                    />
                  )
                }
              )}
            </ul>
          </div>
        }
        <br />
        <Time />
      </div>
    );
  }
};`
    }, {
      name: "userScore.js",
      lang: "js",
      code:
`function UserScore(props) {
  useEffect(() => { props.setCreationTime(new Date()) }, []);
  const formatDate = (date) => {
    return date.toLocaleString();
  }
  const getRoleName = (role) => {
    switch (role) {
      case Role.HERO:
        return "Hero";
      case Role.SUPERHERO:
        return "Super-Hero";
      case Role.MUSTER:
        return "Muster";
      default:
        throw Error("Unnown Role Index: " + role);
    }
  }
  const calculateScore = (basicScore, role) => {
    switch (role) {
      case Role.HERO:
        return basicScore;
      case Role.SUPERHERO:
        return basicScore * 10;
      case Role.MUSTER:
        return basicScore * 100;
      default:
        throw Error("Unnown Role Index: " + role);
    }
  }

  return (
    <>
      <br />
      <li className="list-group-item">
        <span><strong>Date: </strong></span>
        <span className="pull-right">{formatDate(props.date)}</span>
      </li>
      <li className="list-group-item">
        <span><strong>Role: </strong></span>
        <span className="pull-right">{getRoleName(props.role)}</span>
      </li>
      <li className="list-group-item">
        <span><strong>Score: </strong></span>
        <span className="badge">{calculateScore(props.score, props.role)}</span>
      </li>
    </>
  );
}`
    }, {
      name: "Time.js",
      lang: "js",
      code:
`class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  updateTime = () => {
    this.setState({ time: new Date().toLocaleString() });
  };

  // lifecycle hook instead of $interval
  componentDidMount() {
    this.timeoutId = setInterval(
      () => this.updateTime(),
      1000
    );
  };

  // $onDestroy alternative
  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }

  render() {
    return <div>{this.state.time}</div>
  };
}`
    }],
    result: <LifecycleHooks />,
    angularLink: "ang-$onInit,$onChanges,$onDestroy,$postLink,$doCheck",
    migrationCheckData: {
      info: [
        {
          change: "Initialisierung von Daten",
          ang:
            `// im controller
this.$onInit = () => {
  $scope.ctrl.data = { … }
};
`,
          react:
            `// React Komponente
constructor(props) {
  super(props);
  this.state = { … }
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Unterkomponenten-Kommunikation: Kind greift auf eine Elternmethode zu",
          ang:
            `// Kind-Controller
this.$onInit = () => {	      
  $scope.$parent.ctrl.parentFn(data);
}

// Eltern-Controller
this.parentFn = (data) => { … }
`,
          react:
            `// Kind-Komponente
constructor(props) {
 super(props);
 props.callback(data);
}

//Eltern-Komponente
parentFn = (data) => { … }
...
<Kind callback=parentFn />
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "$onChange wird in Kind-Komponente benutzt, um die geänderten in der Eltern-Komponente Daten zu klonen",
          ang:
            `// Kind-Controller
this.$onChanges = (changeObj) => {
  const {currentValue, previousValue}     
    = { ...changeObj.data};
  if (changeObj.data.isFirstChange())    
  { … };
  $scope.childCtrl.data =    
    currentValue.data;
}
`,
          react:
            `//Kind-Komponente
constructor(props) {
  super(props);
  props.data; // immutable
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "direkte Manipulation mit DOM",
          ang:
            `this.$postLink = () => {
  $element.append('<p>text</p>');
}
`,
          react:
            `constructior(props) {
  ...
  this.element = React.createRef();
componentDidMount() {
  const node = this.element.current;
  const p = document.createElement("p");
  p.textContent = "Text";
  node.appendChild(p);
}
render() {
 return 
   <div ref={this.element}>...</div>;
}
`,
          isMigrationConform: MigrationClass.YES
        },
        {
          change: "Aufräumen",
          ang:
            `this.timeoutId = 
$interval(callback, 1000);


this.$onDestroy = () => {		 
$interval.cancel(this.timeoutId);
}
`,
          react:
            `componentDidMount() {
  this.timeoutId = setInterval(
    callback,1000)};

componentWillUnmount() {
  clearInterval(this.timeoutId);
}
`,
          isMigrationConform: MigrationClass.YES
        }
      ]
    }
  }
};

export const LifecycleHooksModule =
{
  module: LifecycleHooks,
  data: data
} 