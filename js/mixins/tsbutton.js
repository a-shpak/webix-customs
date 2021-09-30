import { isFieldValid } from "../helpers.js";

webix.protoUI({
    name:"tsbutton",
    $init:tsButtonInit,
    nextState:nextState,
    getCount() { 
        return Object.keys(this.config.states).length;
    },
    _clearCss(name) {
        this.$view.className = this.$view.className.replace(' ' + name, '');
    },
}, webix.ui.button);

// $init
function tsButtonInit(config) {
    console.log(config);
    setDefaultValues(config);
    config.value = config.states[config.state];
    this.define("css", "button-state");
    config.css = config.colors[0];
    console.log(this);
    this.attachEvent("onItemClick", function(id, e){
        this.nextState();
    });
    function setDefaultValues(config) {
        if (!isFieldValid(config.states)) {
            config.states = { 0:"State 1", 1:"State 2", 2:"State 3" };
        }
        if (!isFieldValid(config.colors)) {
            config.colors = { 0:"button-state-1", 1:"button-state-2", 2:"button-state-3" };
        }
    }
}

//nextState 
function nextState() {
    this._clearCss(this.config.colors[this.config.state]);
    
    this.config.state = (this.config.state + 1) % this.getCount();
    this.config.value = this.config.states[this.config.state];
    
    this.define("css", this.config.colors[this.config.state]);
    this.refresh();
    this.callEvent("onStateChanged", [this.config.state]);
}