import { tsbutton } from "./tsbutton/button.js";
import { list } from "./tsbutton/list.js";
import { text } from "./tsbutton/text.js";

webix.ui({
    padding:30,
    rows:[
        { cols:[ text, tsbutton ] },
        list
    ]
});