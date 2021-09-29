webix.protoUI({
    name:"autoform",
    $init:function(config) {
        if (!config.fields) {
            webix.message("Property field is undefined");
            console.error("Property field cannot be undefined");
            return;
        }
        config.elements = [];
        config.fields.forEach(value => {
            config.elements.push({ view:"text", label:value, name:value.toLowerCase() });
        });
        config.elements.push({view:"toolbar", css:"borderless", cols: [
            { view:"button", value:"Cancel", inputWidth:150, click:formCancelClick },
            { view:"button", value:"Save", css:"webix_primary", align:'right', inputWidth:150, click:formSaveClick },
        ]});
    },
}, webix.ui.form);

function formSaveClick() {
    webix.message("Saved!");
}

function formCancelClick() {
    const form = this.getParentView().getParentView();
    webix.confirm({
        title:"Cancel?",
        ok:"Yes", cancel:"No",
    })
    .then(function(){
        form.clear();
    })
}