define(["libraui/components/popover"], function(Popover) {
    "use strict";
    Libra.Comp.register({
        name: "popover",
        initFct: function(elem) {
            new Popover(elem)
        },
        initTime: "immediate"
    });
    return Popover
});