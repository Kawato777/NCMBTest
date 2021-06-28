var ncmb = new NCMB("8e043f4706a26a64b25e025a19d84abd9440421387079b3e31946a8a69e970fd","fe6b384c00b431aa428a4ed68241b527ecc5e241c573d66ea05cf79c7e370d08");
/* コード入力↓↓↓ */

// ファイルストア
var onFormSend = function(){
    var fileName = document.getElementById("file-name").value;
    var fileData = document.getElementById("file-data").files[0];

    ncmb.File
        .upload(fileName, fileData).then(function(res){
            // アップロード後処理
            document.getElementById("result").innerHTML = "OK!";
        })
        .catch(function(err){
            // エラー処理
            document.getElementById("result").innerHTML = err;
        });
}