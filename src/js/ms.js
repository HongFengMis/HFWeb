Room.MS = {};
Room.MS.ppt = function(i){
    Dom._unable.show();
    cc.ppt(["Main", "M"+i] , function(after , callback){
        cc.m["Main"].velocity({ opacity:0 }, { duration: 500});
        cc.m["M"+i].css({ opacity:0}).show().velocity({ opacity:1 }, { duration: 500, complete:function(){
            //after.go();
            after.come();
            Dom._unable.hide();
        }});
    });
};
Room.MS.ppt_back = function(i){
    Dom._unable.show();
    cc.ppt(["M"+i , "Main"] , function(after , callback){
        cc.m["M"+i].velocity({ opacity:0 }, { duration: 500, display:"none"});
        cc.m["Main"].css({ opacity:0}).show().velocity({ opacity:1 }, { duration: 500, complete:function(){
            //after.go();
            //after.come();
            Dom._unable.hide();
        }});
    });
};


Room.M1 = {};
Room.M1.dom = function(){

    var m = "m1";
    var MS = "M1";

    Dom[m] = {};
    Dom[m].tit = $("#"+MS+" .tit");
    Dom[m].cloud1 = $("#"+MS+" .cloud1");
    Dom[m].cloud2 = $("#"+MS+" .cloud2");
    Dom[m].ball = $("#"+MS+" .ball");

    Dom[m].timebox1 = $("#"+MS+" .timebox1");
    Dom[m].time1 = $("#"+MS+" .time1");
    Dom[m].time1_fz = $("#"+MS+" .time1_fz");
    Dom[m].time1_sz = $("#"+MS+" .time1_sz");

    Dom[m].timebox2 = $("#"+MS+" .timebox2");
    Dom[m].time2 = $("#"+MS+" .time2");
    Dom[m].time2_fz = $("#"+MS+" .time2_fz");
    Dom[m].time2_sz = $("#"+MS+" .time2_sz");

    Dom[m].photo_img = $("#"+MS+" .photo_img");
    Dom[m].photo_man = $("#"+MS+" .photo_man");
    Dom[m].photo_tmp = $("#"+MS+" .photo_tmp");
    Dom[m].photo_line = $("#"+MS+" .photo_line");

    Dom[m].box = $("#"+MS+" .box");
    Dom[m].hand = $("#"+MS+" .hand");
    Dom[m].boxs = $("#"+MS+" .boxs");

    Dom[m].btn1 = $("#"+MS+" .btn1");
    Dom[m].btn2 = $("#"+MS+" .btn2");

    new HammerPage("#"+MS+"_box", 225, -50);

    Dom[m].btn1.tap(function(e){
        cc.tap(e);
        Room.MS.ppt_back(1);
    })
};
Room.M1.ppt = function(){
    Room.MS.ppt(1);
};
Room.M1.come_before = function(next){
    var m = "m1";
    var MS = "M1";

    Dom[m].tit.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].timebox1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_img.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_tmp.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_line.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_man.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].ball.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].box.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].boxs.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].hand.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].timebox2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].time1_fz.velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 2000, loop: true});
    Dom[m].time1_sz.velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 30000, loop: true});

    Dom[m].time2_fz.velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 2000, loop: true});
    Dom[m].time2_sz.velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 30000, loop: true});

    $("#"+MS+"_box ._box").velocity({ translateY:"60px" }, { duration: 0});
    next();
};
Room.M1.come_after = function(){

    var m = "m1";
    var MS = "M1";

    var duration = 1000;
    var delay = 100;

    $("#"+MS+" .box_tmp").show();
    Dom[m].tit.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration});

    Dom[m].timebox1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration});

    Dom[m].photo_img.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_tmp.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_line.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=20px" }, { duration: 1000, loop: true});

    Dom[m].photo_man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2.5,  easing:[200, 20], duration: duration});

    Dom[m].ball.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*3,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=20px" }, { duration: 3000, loop: true});
    Dom[m].cloud1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=150px" }, { duration: 10000, loop: true});

    Dom[m].box.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    //Dom[m].hand.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom[m].boxs.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});

    Dom[m].cloud2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"-=150px" }, { duration: 10000, loop: true});

    Dom[m].timebox2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*7,  easing:[200, 20], duration: duration});

    Dom[m].btn1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration});
    Dom[m].btn2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration, complete:function(){
        $("#"+MS+"_box ._box").velocity({ translateY:"-50px" }, { easing:"linear", duration: 3000, complete:function(){
            Dom[m].hand.velocity({ opacity:[1,0] }, {duration: 500}).velocity({ translateY:"+=20px" }, { duration: 1000, loop: true});
            $("#"+MS+" .box_tmp").hide();
        }});
    }});

};


Room.M2 = {};
Room.M2.dom = function(){

    var m = "m2";
    var MS = "M2";

    Dom[m] = {};
    Dom[m].tit = $("#"+MS+" .tit");
    Dom[m].cloud1 = $("#"+MS+" .cloud1");
    Dom[m].cloud2 = $("#"+MS+" .cloud2");
    Dom[m].sun3 = $("#"+MS+" .sun3");

    Dom[m].sun1 = $("#"+MS+" .sun1");
    Dom[m].sun2 = $("#"+MS+" .sun2");

    Dom[m].photo_img = $("#"+MS+" .photo_img");
    Dom[m].photo_man = $("#"+MS+" .photo_man");
    Dom[m].photo_tmp = $("#"+MS+" .photo_tmp");
    Dom[m].photo_line = $("#"+MS+" .photo_line");

    Dom[m].box = $("#"+MS+" .box");
    Dom[m].hand = $("#"+MS+" .hand");
    Dom[m].boxs = $("#"+MS+" .boxs");

    Dom[m].btn1 = $("#"+MS+" .btn1");
    Dom[m].btn2 = $("#"+MS+" .btn2");

    new HammerPage("#"+MS+"_box", 225, -50);

    Dom[m].btn1.tap(function(e){
        cc.tap(e);
        Room.MS.ppt_back(2);
    });

};
Room.M2.ppt = function(){
    Room.MS.ppt(2);
};
Room.M2.come_before = function(next){
    var m = "m2";
    var MS = "M2";

    $("#"+MS+" .box_tmp").show();
    Dom[m].tit.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].sun1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_img.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_tmp.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_line.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_man.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].sun3.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].box.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].boxs.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].hand.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].sun2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    $("#"+MS+"_box ._box").velocity({ translateY:"60px" }, { duration: 0});

    next();
};
Room.M2.come_after = function(){

    var m = "m2";
    var MS = "M2";

    var duration = 1000;
    var delay = 100;

    Dom[m].tit.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration});

    Dom[m].sun1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom[m].photo_img.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_tmp.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_line.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=20px" }, { duration: 1000, loop: true});

    Dom[m].photo_man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2.5,  easing:[200, 20], duration: duration});

    Dom[m].sun3.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*3,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=20px" }, { duration: 3000, loop: true});
    Dom[m].cloud1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=150px" }, { duration: 10000, loop: true});

    Dom[m].box.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    //Dom[m].hand.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom[m].boxs.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});

    Dom[m].cloud2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"-=150px" }, { duration: 10000, loop: true});

    Dom[m].sun2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*7,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=10px" }, { duration: 1000, loop: true});

    Dom[m].btn1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration});
    Dom[m].btn2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration, complete:function(){
        $("#"+MS+"_box ._box").velocity({ translateY:"-50px" }, { easing:"linear", duration: 3000, complete:function(){
            Dom[m].hand.velocity({ opacity:[1,0] }, {duration: 500}).velocity({ translateY:"+=20px" }, { duration: 1000, loop: true});
            $("#"+MS+" .box_tmp").hide();
        }});
    }});

};

Room.M3 = {};
Room.M3.ppt = function(){
    Room.MS.ppt(3);
};
Room.M3.dom = function(){

    var m = "m3";
    var MS = "M3";

    Dom[m] = {};
    Dom[m].tit = $("#"+MS+" .tit");
    Dom[m].cloud1 = $("#"+MS+" .cloud1");
    Dom[m].cloud2 = $("#"+MS+" .cloud2");

    Dom[m].qq1 = $("#"+MS+" .qq1");
    Dom[m].qq2 = $("#"+MS+" .qq2");
    Dom[m].qq3 = $("#"+MS+" .qq3");

    Dom[m].photo_img = $("#"+MS+" .photo_img");
    Dom[m].photo_man = $("#"+MS+" .photo_man");
    Dom[m].photo_tmp = $("#"+MS+" .photo_tmp");
    Dom[m].photo_line = $("#"+MS+" .photo_line");

    Dom[m].box = $("#"+MS+" .box");
    Dom[m].hand = $("#"+MS+" .hand");
    Dom[m].boxs = $("#"+MS+" .boxs");

    Dom[m].btn1 = $("#"+MS+" .btn1");
    Dom[m].btn2 = $("#"+MS+" .btn2");

    new HammerPage("#"+MS+"_box", 294, -130);

    Dom[m].btn1.tap(function(e){
        cc.tap(e);
        Room.MS.ppt_back(3);
    });

};
Room.M3.come_before = function(next){
    var m = "m3";
    var MS = "M3";

    $("#"+MS+" .box_tmp").show();
    Dom[m].tit.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_img.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_tmp.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_line.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_man.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].qq1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].qq2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].qq3.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].cloud1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].box.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].boxs.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].hand.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    $("#"+MS+"_box ._box").velocity({ translateY:"60px" }, { duration: 0});

    next();
};
Room.M3.come_after = function(){

    var m = "m3";
    var MS = "M3";

    var duration = 1000;
    var delay = 100;

    Dom[m].tit.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration});

    Dom[m].qq1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom[m].photo_img.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_tmp.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_line.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=20px" }, { duration: 1000, loop: true});

    Dom[m].photo_man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2.5,  easing:[200, 20], duration: duration});

    Dom[m].qq2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*3,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=20px" }, { duration: 3000, loop: true});
    Dom[m].cloud1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=150px" }, { duration: 10000, loop: true});

    Dom[m].box.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom[m].boxs.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});

    Dom[m].cloud2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"-=150px" }, { duration: 10000, loop: true});

    Dom[m].qq3.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*7,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=10px" }, { duration: 1000, loop: true});

    Dom[m].btn1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration});
    Dom[m].btn2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration, complete:function(){
        $("#"+MS+"_box ._box").velocity({ translateY:"-130px" }, { easing:"linear", duration: 3000, complete:function(){
            Dom[m].hand.velocity({ opacity:[1,0] }, {duration: 500}).velocity({ translateY:"+=20px" }, { duration: 1000, loop: true});
            $("#"+MS+" .box_tmp").hide();
        }});
    }});

};

Room.M4 = {};
Room.M4.ppt = function(){
    Room.MS.ppt(4);
};
Room.M4.dom = function(){

    var m = "m4";
    var MS = "M4";

    Dom[m] = {};
    Dom[m].tit = $("#"+MS+" .tit");
    Dom[m].cloud1 = $("#"+MS+" .cloud1");
    Dom[m].cloud2 = $("#"+MS+" .cloud2");

    Dom[m].dd1 = $("#"+MS+" .dd1");
    Dom[m].dd2 = $("#"+MS+" .dd2");

    Dom[m].photo_img = $("#"+MS+" .photo_img");
    Dom[m].photo_man = $("#"+MS+" .photo_man");
    Dom[m].photo_tmp = $("#"+MS+" .photo_tmp");
    Dom[m].photo_line = $("#"+MS+" .photo_line");

    Dom[m].box = $("#"+MS+" .box");
    Dom[m].hand = $("#"+MS+" .hand");
    Dom[m].boxs = $("#"+MS+" .boxs");

    Dom[m].btn1 = $("#"+MS+" .btn1");
    Dom[m].btn2 = $("#"+MS+" .btn2");

    new HammerPage("#"+MS+"_box", 266, -90);

    Dom[m].btn1.tap(function(e){
        cc.tap(e);
        Room.MS.ppt_back(4);
    });

};
Room.M4.come_before = function(next){
    var m = "m4";
    var MS = "M4";

    $("#"+MS+" .box_tmp").show();
    Dom[m].tit.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_img.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_tmp.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_line.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_man.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].dd1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].dd2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].cloud1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].box.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].boxs.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].hand.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    $("#"+MS+"_box ._box").velocity({ translateY:"60px" }, { duration: 0});

    next();
};
Room.M4.come_after = function(){

    var m = "m4";
    var MS = "M4";

    var duration = 1000;
    var delay = 100;

    Dom[m].tit.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration});

    Dom[m].dd1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom[m].photo_img.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_tmp.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_line.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=20px" }, { duration: 1000, loop: true});

    Dom[m].photo_man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2.5,  easing:[200, 20], duration: duration});


    Dom[m].cloud1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=150px" }, { duration: 10000, loop: true});

    Dom[m].box.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom[m].boxs.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});

    Dom[m].cloud2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"-=150px" }, { duration: 10000, loop: true});

    Dom[m].dd2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*7,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=10px" }, { duration: 1000, loop: true});

    Dom[m].btn1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration});
    Dom[m].btn2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration, complete:function(){
        $("#"+MS+"_box ._box").velocity({ translateY:"-90px" }, { easing:"linear", duration: 3000, complete:function(){
            Dom[m].hand.velocity({ opacity:[1,0] }, {duration: 500}).velocity({ translateY:"+=20px" }, { duration: 1000, loop: true});
            $("#"+MS+" .box_tmp").hide();
        }});
    }});

};

Room.M5 = {};
Room.M5.ppt = function(){
    Room.MS.ppt(5);
};
Room.M5.dom = function(){

    var m = "m5";
    var MS = "M5";

    Dom[m] = {};
    Dom[m].tit = $("#"+MS+" .tit");
    Dom[m].cloud1 = $("#"+MS+" .cloud1");
    Dom[m].cloud2 = $("#"+MS+" .cloud2");

    Dom[m].xj1 = $("#"+MS+" .xj1");
    Dom[m].xj2 = $("#"+MS+" .xj2");

    Dom[m].photo_img = $("#"+MS+" .photo_img");
    Dom[m].photo_man = $("#"+MS+" .photo_man");
    Dom[m].photo_tmp = $("#"+MS+" .photo_tmp");
    Dom[m].photo_line = $("#"+MS+" .photo_line");

    Dom[m].box = $("#"+MS+" .box");
    Dom[m].hand = $("#"+MS+" .hand");
    Dom[m].boxs = $("#"+MS+" .boxs");

    Dom[m].btn1 = $("#"+MS+" .btn1");
    Dom[m].btn2 = $("#"+MS+" .btn2");

    new HammerPage("#"+MS+"_box", 256, -80);

    Dom[m].btn1.tap(function(e){
        cc.tap(e);
        Room.MS.ppt_back(5);
    });

};
Room.M5.come_before = function(next){
    var m = "m5";
    var MS = "M5";

    $("#"+MS+" .box_tmp").show();
    Dom[m].tit.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_img.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_tmp.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_line.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].photo_man.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].xj1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].xj2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    Dom[m].cloud1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].box.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].boxs.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].cloud2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].hand.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn1.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});
    Dom[m].btn2.css({opacity:0}).velocity("stop").velocity({translateY:0, translateX:0, rotateZ:"0deg"}, { duration: 0});

    $("#"+MS+"_box ._box").velocity({ translateY:"60px" }, { duration: 0});

    next();
};
Room.M5.come_after = function(){

    var m = "m5";
    var MS = "M5";

    var duration = 1000;
    var delay = 100;

    Dom[m].tit.velocity({ opacity:[1,0], translateY:[0, 500] }, { easing:[200, 20], duration: duration});

    Dom[m].xj1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"-=10px" }, { duration: 1000, loop: true});

    Dom[m].photo_img.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_tmp.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration});
    Dom[m].photo_line.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=20px" }, { duration: 1000, loop: true});

    Dom[m].photo_man.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*2.5,  easing:[200, 20], duration: duration});


    Dom[m].cloud1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*4,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"+=150px" }, { duration: 10000, loop: true});

    Dom[m].box.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});
    Dom[m].boxs.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*5,  easing:[200, 20], duration: duration});

    Dom[m].cloud2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*6,  easing:[200, 20], duration: duration})
        .velocity({ translateX:"-=150px" }, { duration: 10000, loop: true});

    Dom[m].xj2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*7,  easing:[200, 20], duration: duration})
        .velocity({ translateY:"+=10px" }, { duration: 1000, loop: true});

    Dom[m].btn1.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration});
    Dom[m].btn2.velocity({ opacity:[1,0], translateY:[0, 500] }, {delay:delay*8,  easing:[200, 20], duration: duration, complete:function(){
        $("#"+MS+"_box ._box").velocity({ translateY:"-80px" }, { easing:"linear", duration: 3000, complete:function(){
            Dom[m].hand.velocity({ opacity:[1,0] }, {duration: 500}).velocity({ translateY:"+=20px" }, { duration: 1000, loop: true});
            $("#"+MS+" .box_tmp").hide();
        }});
    }});

};
