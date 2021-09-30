import { items } from "./list.js";

export const tsbutton = {
    id:"ts",
    view:"tsbutton",
    width:150,
    states:{ 0:"Off", 1:"Sort Asc", 2:"Sort Desc" },
    state:0,
    on:{
        onStateChanged:function(state) {
            switch(state) {
                case 0:
                    $$("list").clearAll();
                    $$("list").parse(webix.copy(items));
                    break;
                case 1:
                    $$("list").sort("#id#", "asc", "int");
                    break;
                case 2:
                    $$("list").sort("#id#", "desc", "int");
                    break;
            }
        }
    }
};