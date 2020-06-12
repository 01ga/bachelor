import React from 'react';
import { MigrationClass } from '../core/migrationCheck';

const DetectionLevel = {
  REFERENCE: 1,
  COLLECTION: 2,
  VALUE: 3
}

export class BusinessLogic extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      detectionLevel: DetectionLevel.REFERENCE,
      msg: "No Data Changes were detected",
      users: this.initProfile(),
      newUser: {name:"", score:""}
    }
    this.btn = null;
  }
  componentDidMount = () => {
    this.btn = document.querySelector("#externalInsertRBtn");
    this.btn.addEventListener("click", this.addNewProfileManually);
  }
  componentWillUnmount = () => {
    this.btn.removeEventListener("click", this.addNewProfileManually)
  }
  addNewProfileManually = () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "external");
    const span = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = "External User";
    span.append(strong);
    li.append(span);
    const button=document.createElement("button");
    button.classList.add("pull-right");
    button.textContent = "Delete";
    li.append(button);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "234");
    input.classList.add("pull-right");
    input.style = "margin:0 10px";
    li.append(input);
    const score = document.createElement("strong");
    score.textContent = "Score: ";
    score.classList.add("pull-right");
    li.append(score);
    document.querySelector("#profileListR").append(li);
    this.onExternalInsertion();
  }
  onExternalInsertion = () => {
    const ch = document.querySelector("#profileListR").children; 
    if(this.state.users.length < ch.length) {
      for(const index in ch) {
        if(ch[index].classList === undefined) return;
        const isExternal = ch[index].classList.contains("external");
        if(isExternal) {
          const name = ch[index].querySelector("strong").textContent;
          const score = ch[index].querySelector("input").value;
          const id = this.getNewId();
          ch[index].remove();
          const users = [...this.state.users, {id: id, name: name, score: score}]
          const oldVal = this.state.users;
          this.setState({users: users}, () => {
            // alternative to $watchCollection and $watch(..., true)
            if(this.state.detectionLevel !== DetectionLevel.REFERENCE) {
              this.watch(oldVal);
            }
          });
        }
      }
    }
  }
  watch = (oldVal) => {
    let msg = "";
    // watch by reference
    if(this.state.detectionLevel === DetectionLevel.REFERENCE) {
      msg = ">>>>> Change of reference: >>>>>\n";
    } // watch by collection
    else if(this.state.detectionLevel === DetectionLevel.COLLECTION) {
      msg = ">>>>> Change of collection: >>>>>\n";
    } // watch by value
    else {
      msg = ">>>>> Change of nested value: >>>>>\n";
    }
    msg += "Property this.state.users \n";
    msg += "   was: " + JSON.stringify(oldVal) + "; \n";
    msg += "   has become: " + JSON.stringify(this.state.users) + "\n";
    this.setState({msg: msg});
  }
  initProfile = () => { 
    return [
      {id: "100", name: 'Alice', score: 250},
      {id: "110", name: 'Alan', score: 320},
      {id: "120", name: 'Rian', score: 283}
   ];
  };
  getNewId = () => {
    const lastId = (this.state.users.length > 0) 
          ? this.state.users[this.state.users.length - 1].id
          : 200;
    return lastId + 1;
  }
  addProfile = () => {
    if(this.state.newUser && this.state.newUser.name.length > 0 && this.state.newUser.score) {
      try {
        const oldVal = this.state.users;
        const score = parseInt(this.state.newUser.score, 10);
        const id = this.getNewId();
        const users = [...this.state.users, {id: id, name: this.state.newUser.name, score: score}]
        this.setState({users: users}, () => {
          // alternative to $watchCollection and $watch(..., true)
          if(this.state.detectionLevel !== DetectionLevel.REFERENCE) {
            this.watch(oldVal);
          }
        });
        this.setState({newUser: {name:"", score:""}});
      } catch (e) {
        console.error(e);
      }  
    }
  }
	render() {
    const oldVal = this.state.users;
		return (
      <div>
        <h6>Console Output:</h6>
        <pre style={{minHeight:"90px"}}><code>{this.state.msg}</code></pre>
        <Profiler
          detectionLevel={this.state.detectionLevel}
          onLevelSelect={(level) => this.setState({detectionLevel: level})}
          users={this.state.users}
          onDelete={(profile) => {
            const users = this.state.users.filter(user=>user.id !== profile.id);
            this.setState({users:users},
              () => {
                if(this.state.detectionLevel !== DetectionLevel.REFERENCE){
                  // alternative to $watchCollection and $watch(..., true)
                  this.watch(oldVal);
                }
              }
            );
          }}
          onScoreChange={(profile, value) => {
            const users = this.state.users.map(user => {
              return user.id === profile.id 
              ? {...user, score:value}
              : user});
            this.setState({users:users}, () => {
              if(this.state.detectionLevel === DetectionLevel.VALUE){
                // alternative to $watch(..., true)
                this.watch(oldVal);
              }
            });
          }}
          onReinit={() => this.setState(
            {users:this.initProfile()},
            () => {
              // alternative to $watch
              this.watch(oldVal);
            }
          )}
          onClear={() => this.setState(
            {users:[]},
            () => {
              // alternative to $watch
              this.watch(oldVal);
            }
          )}
        />
        <h6>Create new Profile: </h6>
        <p>
          <strong>User Name: </strong>
          <input type="text" className="form-control"
            onChange={(e) => {
              const val = e.target.value;
              this.setState({newUser: {...this.state.newUser, name: val}})
             }} 
            value={this.state.newUser.name}/>
        </p>
        <p>
          <strong>Score: </strong>
          <input type="text" className="form-control"
            onChange={(e) => {
               const val = e.target.value;
               this.setState({newUser: {...this.state.newUser, score: val}})
              }}
            value={this.state.newUser.score}/>
        </p>
        <button className="btn btn-success" onClick={this.addProfile}>Add Profile</button>
      </div>
    );
  }
}
function Profiler(props) {
  return (<>
    <div>
      <h6>Active change detection mode: </h6>
      <span className="radio-inline">
        <label>
          <input type="radio" onChange={() => props.onLevelSelect(1)} value={DetectionLevel.REFERENCE} checked={props.detectionLevel === 1}/>
          By Reference
        </label>
      </span>
      <span className="radio-inline">
        <label>
          <input type="radio" onChange={() => props.onLevelSelect(2)} value={DetectionLevel.COLLECTION} checked={props.detectionLevel === 2}/>
          By Collection
        </label>
      </span>
      <span className="radio-inline">
        <label>
          <input type="radio" onChange={() => props.onLevelSelect(3)} value={DetectionLevel.VALUE} checked={props.detectionLevel === 3}/>
          By Value
        </label>
      </span>
    </div>
    <br/>
    <button className="btn btn-info" onClick={props.onClear}>Clear Profiler</button>
    <button className="btn btn-info" onClick={props.onReinit}>Reinit Profiler</button>
    <button id="externalInsertRBtn" className="btn btn-warning pull-right">Insert External Profile</button>
    <br/>
    <ul className="list-group" id="profileListR">
      {
        props.users.map((profile, index) => {
          return (
            <li className="list-group-item" key={index}>
              <span><strong>{profile.name}</strong></span>
              <button className="pull-right" onClick={()=>props.onDelete(profile)}>Delete</button>
              <input type="text" style={{margin:"0 10px"}} className="pull-right"
                value={profile.score}
                onChange={(e)=>{
                  const val = e.target.value;
                  props.onScoreChange(profile, val);
                
                }}
              />
              <strong className="pull-right">Score: </strong>
            </li>
          );
        })
      }
    </ul>
  </>
  )
}

const data = {
	section: {
		layer: "Komponenten-Systeme mit React", 
		group: "UI-Geschäftslogik",
		spec: "Anbindung der Logik in Reaktion auf Datenänderung bzw. UI-Ereignisse"
	},
	article: {
	  title:"Alternative für $watch und $apply",
	  codeSnippets: [{
		name:"code.js",
		  lang:"js",
		  code: 
``
	  }],
		result: <BusinessLogic/>,
		angularLink: "ang-$watchund$apply",
		migrationCheckData: {
		  info: [
			{
			  change: "Anhänden von Handler-Funktionen an DOM-Elemente",
			  ang: 
``,
			  react:
``,
			  isMigrationConform: MigrationClass.YES
			}
		  ]
		} 
	}
  };
  
  export const BusinessLogicModule =
  {
	module: BusinessLogic,
	data: data
  } 