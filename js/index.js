import { accordion } from "./main.js";

webix.ready(function(){
    webix.ui(
        {
            view:"scrollview",
            body:accordion
        }
    );
});