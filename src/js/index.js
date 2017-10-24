Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 800, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, 800);
    })
};
Room.Loader.dom = function(){

    $("#Loader .index_btn").tap(function(e){
        cc.tap(e);
        Room.Loader.ppt();
    });

    Dom.IndexP = new HammerPage("#Index", 2000);

    Dom.Page1_1 = new HammerPage("#Page1_1", 5294);
    Dom.Page1_2 = new HammerPage("#Page1_2", 1740);
    Dom.Page1_3 = new HammerPage("#Page1_3", 2781);
    Dom.Page1_4 = new HammerPage("#Page1_4", 1259);
    Dom.Page1_5 = new HammerPage("#Page1_5", 5025);

    Dom.Page1_4_1 = new HammerPage("#Page1_4_1", 5700);
    Dom.Page1_4_2 = new HammerPage("#Page1_4_2", 3902);

    Dom.Page2_1 = new HammerPage("#Page2_1", 2131);
    Dom.Page2_2 = new HammerPage("#Page2_2", 3753);
    Dom.Page2_3 = new HammerPage("#Page2_3", 15682);
    Dom.Page2_4 = new HammerPage("#Page2_4", 6815);
    Dom.Page2_5 = new HammerPage("#Page2_5", 1695);
    Dom.Page2_6 = new HammerPage("#Page2_6", 5286);

    Dom.Page2_5_1 = new HammerPage("#Page2_5_1", 5620);

    Dom.Page3_1 = new HammerPage("#Page3_1", 3883);
    Dom.Page3_2 = new HammerPage("#Page3_2", 4731);
    Dom.Page3_3 = new HammerPage("#Page3_3", 2978);


};


Room.Index = {};
Room.Index.dom = function(){
    var swiper_w = ["宏扬","智造","丰硕"];
    $("#Index").show();
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + swiper_w[index]  + '</span>';
        },
        autoplay : 3000
    });
    $("#Index").hide();

    $("#Index .nav").click(function(){
        Dom._unable.show();
        var _this = $(this);
        var id = _this.data("nav");

        $("#Index .nav"+id).velocity({ rotateY:"180deg" }, { duration: 800});

        setTimeout(function(){
            Dom._unable.hide();
            Room.Index.ppt(id);
        }, 500);

    });
};
Room.Index.ppt = function(id){

    cc.ppt(["Index", "Page"+id] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0 }, { duration: 800});
        cc.m["Page"+id].css({ opacity: 0 }).show().velocity({ opacity:1 }, { duration: 800});
    });

};
Room.Index.come_before = function(next){

    //$("#Index ._box").velocity({ translateY:"0px"}, { duration: 0});
    $("#Index .nav").velocity("stop").velocity({ rotateY:"0deg" }, { duration: 0});

    next();
};


Room.Page = {};
Room.Page.ppt = function(id){
    cc.ppt(["Page"+id,"Index"] , function(after , callback){
        cc.m["Page"+id].velocity({ opacity: 0 }, { duration: 800,display: "none",  complete:function(){
            cc.m["Page"+id].find("._box").velocity({ translateY:"0px"}, { duration: 0});
            Dom["Page"+id].y = 0;
        }});
        cc.m["Index"].css({ opacity: 0 }).show().velocity({ opacity:1 }, { duration: 800});
    });
};
Room.Page.ppt2 = function(back, id, i, sc){

    cc.ppt(["Page"+back , "Page"+id] , function(after , callback){
        cc.m["Page"+back].velocity({ opacity: 0 }, { duration: 800,display: "none"});

        if(i && sc) Dom["Page"+id].y = sc[i];
        if(i && sc) cc.m["Page"+id].find("._box").velocity({ translateY:sc[i]}, { duration: 0});
        cc.m["Page"+id].css({ opacity: 0 }).show().velocity({ opacity:1 }, { duration: 800});
    });
};
Room.Page.dom = function(){

    $(".Foot").tap(function(e){
        cc.tap(e);
        var _this = $(this);
        var id = _this.data("nav");
        Room.Page.ppt(id);
    });

    $(".Foot2").tap(function(e){
        cc.tap(e);
        var _this = $(this);
        var id = _this.data("nav");
        var back = _this.data("back");
        Room.Page.ppt2(back, id);
    });

};

Room.Page1_4 = {};
Room.Page1_4.dom = function(){

    $("#Page1_4 .btn1").click(function(){

        var _this = $(this);
        var id = _this.data("nav");
        var i = _this.data("i");

        var sc = [0,0,-1462, -2890];
        Room.Page.ppt2("1_4", id, i, sc);
    });

    $("#Page1_4 .btn2").click(function(){

        var _this = $(this);
        var id = _this.data("nav");
        var i = _this.data("i");

        var sc = [0,0,-1462, -2622];
        Room.Page.ppt2("1_4", id, i, sc);
    });

};

Room.Page2_5 = {};
Room.Page2_5.dom = function(){

    $("#Page2_5 .btn").click(function(){

        var _this = $(this);
        var id = _this.data("nav");
        var i = _this.data("i");

        var sc = [0,0,-1554, -2742, -3330, -3973, -4543];
        Room.Page.ppt2("2_5", id, i, sc);
    });

};