






// $(function(){ //お約束jq

//     // $("どこが").on("どうされたとき",関数を実行(){
//     //     実行したいプログラム
//     //     実行したいプログラム
//     //     実行したいプログラム
//     // })

//     $("#submit_btn").on("click",function(e) {
//         e.preventDefault();
//         let post_code = $("#post_code").val();
//         console.log("post_code");
//     });

//     function zipCloud(){
//         let url = "https://zipcloud.ibsnet.co.jp/api/search=7830060";

//         fetch(url) //urlにリクエストを送る
//         //結果を分析していく
//         .then(response => response.json())
//         .then((data)=>{
//             if(!data.results){
//                 render_html(data.massege);
//             }else{
//                 console.log(data);
//             }
//         })
//     }
// zipCloud()


// }); //お約束jq

// 入力フォームからユーザーが入力した郵便番号を受け取る
// 受け取った郵便番号をAPIのURLの後ろにつける
// 完成したURLでアクセスする（リクエストを送る）
// 結果を解析（データを取得）
// 取得したデータを加工してサイトに表示


$(function(){ //jQueryのお約束

    $("#submit_btn").on("click",function(e){
        e.preventDefault();
        let post_code = $("#post_code").val();
        zipCloud(post_code);
    });

    function zipCloud(post_code){
        let url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="+post_code;

        fetch(url)//urlにリクエストを送る
        //結果を解析していくよ
        .then(response => response.json())
        .then((data)=>{
            if(!data.results){
                render_html(data.message);
            }else{
                // console.log(data);
                let results = data.results;
                let results_data = results["0"];

                let format_address =
                results_data.address1+results_data.address2+results_data.address3+results_data.kana1+results_data.kana2+results_data.kana3;
                render_html(format_address)
            }
        })
        .catch((response)=>{
            console.info(response);
            render_html("エラーが発生しました");
        })
    }
    function render_html(massage){
        $("#address p").text(massage);
    }




}); //jQueryのお約束















