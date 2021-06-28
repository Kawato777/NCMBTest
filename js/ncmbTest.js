var ncmb = new NCMB("8e043f4706a26a64b25e025a19d84abd9440421387079b3e31946a8a69e970fd","fe6b384c00b431aa428a4ed68241b527ecc5e241c573d66ea05cf79c7e370d08");
/* コード入力↓↓↓ */
// クラスのTestClassを作成
var TestClass = ncmb.DataStore("TestClass");

// データストアへの登録
var testClass = new TestClass();
testClass.set("message", "Hello, NCMB!");
testClass.save()
            .then(function(){
                // 保存に成功した場合の処理
            })
            .catch(function(err)){
                // 保存に失敗した場合の処理
            }