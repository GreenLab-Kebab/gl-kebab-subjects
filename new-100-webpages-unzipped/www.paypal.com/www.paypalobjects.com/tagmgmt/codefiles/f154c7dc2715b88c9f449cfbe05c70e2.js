Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
            extract: function() {
                return dataLayer.contentCountry || ""
            },
            transform: function(val) {
                return val ? val.toLowerCase() : ""
            },
            load: "page",
            trigger: Bootstrapper.data.bottomOfBodyTrigger,
            dataDefName: "Content Country",
            collection: "Data Layer",
            source: "Manage",
            priv: "false"
        }, {
            id: "9852"
        })
    }, 9852)
}, -1, -1);