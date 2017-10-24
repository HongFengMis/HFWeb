Room.Main = {};
Room.Main.dom = function(){
    Dom.main = {};
    Dom.main.bg2 = $("#Main .bg2");
    Dom.main.man = $("#Main .man");

    Dom.main.m1 = $("#Main .m1");
    Dom.main.m2 = $("#Main .m2");
    Dom.main.m3 = $("#Main .m3");
    Dom.main.m4 = $("#Main .m4");
    Dom.main.m5 = $("#Main .m5");

    Dom.main.b1 = $("#Main .b1");
    Dom.main.b2 = $("#Main .b2");
    Dom.main.b3 = $("#Main .b3");
    Dom.main.b4 = $("#Main .b4");
    Dom.main.b5 = $("#Main .b5");

    Dom.main.cake1 = $("#Main .cake1");
    Dom.main.cake2 = $("#Main .cake2");

    Dom.main.name = $("#Main .name");
    Dom.main.w = $("#Main .w");

    $("#Main .btn").tap(function(e){
        cc.tap(e);
        if(!Dom.Main_btn) return;
        var i = $(this).data("i");
        Room["M"+i].ppt();
    })

};
Room.Main.ppt = function(){
    Dom._unable.show();
    cc.ppt(["Page1", "Main"] , function(after , callback){
        cc.m["Page1"].velocity({ translateY:"-100%" }, { delay:30, easing:"linear", duration: 500});
        cc.m["Main"].velocity({ translateY:"100%"}, { duration: 0}).show().velocity({ translateY:0 }, { easing:"linear", duration: 500, complete:function(){
            after.go();
            after.come();
            Dom._unable.hide();
        }});
    });
};

Room.Main.come_after = function(){
    var duration = 1000;
    var delay = 100;

    Dom.main.bg2.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom.main.man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration});
    Dom.main.m1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-3deg" }, { duration: 400}).velocity({ rotateZ:["3deg","-3deg"] }, { duration: 1000, loop: true});
    Dom.main.m2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-3deg" }, { duration: 400}).velocity({ rotateZ:["3deg","-3deg"] }, { duration: 1000, loop: true});
    Dom.main.m3.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-3deg" }, { duration: 400}).velocity({ rotateZ:["3deg","-3deg"] }, { duration: 1000, loop: true});
    Dom.main.m4.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-3deg" }, { duration: 400}).velocity({ rotateZ:["3deg","-3deg"] }, { duration: 1000, loop: true});
    Dom.main.m5.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-3deg" }, { duration: 400}).velocity({ rotateZ:["3deg","-3deg"] }, { duration: 1000, loop: true});
    Dom.main.cake1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration, complete:function(){
        Dom.Main_btn = 1;
    }});
    Dom.main.cake2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ rotateZ:"-23deg" }, { duration: 500}).velocity({ rotateZ:["23deg","-23deg"] }, { duration: 1000, loop: true});

    Dom.main.b1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});
    Dom.main.b2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*3,  easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});
    Dom.main.b3.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*3,  easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});
    Dom.main.b4.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});
    Dom.main.b5.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration}).velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom.main.name.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom.main.w.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration}).velocity({ scale:[1.1,1] }, { duration: 1000, loop: true});
};

Room.Main.go_after = function(){

    Dom.main.bg2.velocity("stop");

    Dom.main.m1.velocity("stop");
    Dom.main.m2.velocity("stop");
    Dom.main.m3.velocity("stop");
    Dom.main.m4.velocity("stop");
    Dom.main.m5.velocity("stop");
    Dom.main.cake2.velocity("stop");

    Dom.main.b1.velocity("stop");
    Dom.main.b2.velocity("stop");
    Dom.main.b3.velocity("stop");
    Dom.main.b4.velocity("stop");
    Dom.main.b5.velocity("stop");

    Dom.main.w.velocity("stop");
};