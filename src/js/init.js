function loader(){
    libs.create();
    libs.setTicker(25);

    loader_ini();
}

var LoaderDom = {};

function loader_ini(){

    LoaderDom.w = $("#Loader .loading");

    loader_index();
    loader_page();

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        LoaderDom.w.html(i+"%");
    };
    Loads.complete = function(){

        LoaderDom.w.hide();
        $("#Loader .index_btn").show().velocity({ opacity: 1}, { duration: 800});

        loader_index_html();
        loader_page_html();

        libs.iniDom();
        // setTimeout(function(){
        //     Room.Loader.run()
        // } , 300)
    };
    Loads.loading();
}

function loader_index(){

    Loads.loads("pic1",  "img/index/", "1.jpg");
    Loads.loads("pic2",  "img/index/", "2.jpg");
    Loads.loads("pic3",  "img/index/", "3.jpg");

    Loads.loads("tit",  "img/index/", "tit.png");
    Loads.loads("tit1",  "img/index/", "tit1.png");
    Loads.loads("tit2",  "img/index/", "tit2.png");
    Loads.loads("tit3",  "img/index/", "tit3.png");

    Loads.loads("nav1_1",  "img/index/", "nav1_1.png");
    Loads.loads("nav1_2",  "img/index/", "nav1_2.png");
    Loads.loads("nav1_3",  "img/index/", "nav1_3.png");
    Loads.loads("nav1_4",  "img/index/", "nav1_4.png");
    Loads.loads("nav1_5",  "img/index/", "nav1_5.png");

    Loads.loads("nav2_1",  "img/index/", "nav2_1.png");
    Loads.loads("nav2_2",  "img/index/", "nav2_2.png");
    Loads.loads("nav2_3",  "img/index/", "nav2_3.png");
    Loads.loads("nav2_4",  "img/index/", "nav2_4.png");
    Loads.loads("nav2_5",  "img/index/", "nav2_5.png");
    Loads.loads("nav2_6",  "img/index/", "nav2_6.png");

    Loads.loads("nav3_1",  "img/index/", "nav3_1.png");
    Loads.loads("nav3_2",  "img/index/", "nav3_2.png");
    Loads.loads("nav3_3",  "img/index/", "nav3_3.png");

}
function loader_index_html(){

    $("#Index .pic1").html(Loads.get("pic1"));
    $("#Index .pic2").html(Loads.get("pic2"));
    $("#Index .pic3").html(Loads.get("pic3"));

    $("#Index .tit").html(Loads.get("tit"));
    $("#Index .tit1").html(Loads.get("tit1"));
    $("#Index .tit2").html(Loads.get("tit2"));
    $("#Index .tit3").html(Loads.get("tit3"));

    $("#Index .nav1_1").html(Loads.get("nav1_1"));
    $("#Index .nav1_2").html(Loads.get("nav1_2"));
    $("#Index .nav1_3").html(Loads.get("nav1_3"));
    $("#Index .nav1_4").html(Loads.get("nav1_4"));
    $("#Index .nav1_5").html(Loads.get("nav1_5"));

    $("#Index .nav2_1").html(Loads.get("nav2_1"));
    $("#Index .nav2_2").html(Loads.get("nav2_2"));
    $("#Index .nav2_3").html(Loads.get("nav2_3"));
    $("#Index .nav2_4").html(Loads.get("nav2_4"));
    $("#Index .nav2_5").html(Loads.get("nav2_5"));
    $("#Index .nav2_6").html(Loads.get("nav2_6"));

    $("#Index .nav3_1").html(Loads.get("nav3_1"));
    $("#Index .nav3_2").html(Loads.get("nav3_2"));
    $("#Index .nav3_3").html(Loads.get("nav3_3"));
}


function loader_page(){
    Loads.loads("page1_1",  "img/", "page1_1.jpg");
    Loads.loads("page1_2",  "img/", "page1_2.jpg");
    Loads.loads("page1_3",  "img/", "page1_3.jpg");
    Loads.loads("page1_4",  "img/", "page1_4.jpg");
    Loads.loads("page1_5",  "img/", "page1_5.jpg");

    Loads.loads("page1_4_1",  "img/", "page1_4_1.jpg");
    Loads.loads("page1_4_2",  "img/", "page1_4_2.jpg");

    Loads.loads("page2_1",  "img/", "page2_1.jpg");
    Loads.loads("page2_2",  "img/", "page2_2.jpg");
    Loads.loads("page2_3",  "img/", "page2_3.jpg");
    Loads.loads("page2_4",  "img/", "page2_4.jpg");
    Loads.loads("page2_5",  "img/", "page2_5.jpg");
    Loads.loads("page2_6",  "img/", "page2_6.jpg");

    Loads.loads("page2_5_1",  "img/", "page2_5_1.jpg");

    Loads.loads("page3_1",  "img/", "page3_1.jpg");
    Loads.loads("page3_2",  "img/", "page3_2.jpg");
    Loads.loads("page3_3",  "img/", "page3_3.jpg");
}

function loader_page_html(){

    $("#Page1_1 .page").append(Loads.get("page1_1"));
    $("#Page1_2 .page").append(Loads.get("page1_2"));
    $("#Page1_3 .page").append(Loads.get("page1_3"));
    $("#Page1_4 .page").append(Loads.get("page1_4"));
    $("#Page1_5 .page").append(Loads.get("page1_5"));

    $("#Page1_4_1 .page").append(Loads.get("page1_4_1"));
    $("#Page1_4_2 .page").append(Loads.get("page1_4_2"));

    $("#Page2_1 .page").append(Loads.get("page2_1"));
    $("#Page2_2 .page").append(Loads.get("page2_2"));
    $("#Page2_3 .page").append(Loads.get("page2_3"));
    $("#Page2_4 .page").append(Loads.get("page2_4"));
    $("#Page2_5 .page").append(Loads.get("page2_5"));
    $("#Page2_6 .page").append(Loads.get("page2_6"));

    $("#Page2_5_1 .page").append(Loads.get("page2_5_1"));

    $("#Page3_1 .page").append(Loads.get("page3_1"));
    $("#Page3_2 .page").append(Loads.get("page3_2"));
    $("#Page3_3 .page").append(Loads.get("page3_3"));

}