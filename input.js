function main() {
    var kanaTestElement;
    var userInputElement;
    var updateBankElement;

    var hiragana;
    var hiraganaDaku;
    var hiraganaYou;
    var katakana;
    var katakanaDaku;
    var katakanaYou;

    var row1;
    var row2;
    var row3;
    var row4;

    var testBank;

    gameStart();

    function createBank() {
        var hiraganaValue = document.getElementById('hiraganaID');
        var hiraganaDakuValue = document.getElementById('hiraganaDakuID');
        var hiraganaYouValue = document.getElementById('hiraganaYouID');
        var katakanaValue = document.getElementById('katakanaID');
        var katakanaDakuValue = document.getElementById('katakanaDakuID');
        var katakanaYouValue = document.getElementById('katakanaYouID');

        var row1Value = document.getElementById('row1ID')
        var row2Value = document.getElementById('row2ID')
        var row3Value = document.getElementById('row3ID')
        var row4Value = document.getElementById('row4ID')

        var bank = [];
        
        if(hiraganaValue.checked) {
            bank = bank.concat(hiragana);
        }
        if(hiraganaDakuValue.checked) {
            bank = bank.concat(hiraganaDaku);
        }
        if(hiraganaYouValue.checked) {
            bank = bank.concat(hiraganaYou);
        }
        if(katakanaValue.checked) {
            bank = bank.concat(katakana);
        }
        if(katakanaDakuValue.checked) {
            bank = bank.concat(katakanaDaku);
        }
        if(katakanaYouValue.checked) {
            bank = bank.concat(katakanaYou);
        }
        if(!hiraganaValue.checked){
            if(row1Value.checked){
                bank = bank.concat(row1);
            }
            if(row2Value.checked){
                bank = bank.concat(row2);
            }
            if(row3Value.checked){
                bank = bank.concat(row3);
            }
            if(row4Value.checked){
                bank = bank.concat(row4);
            }
        }
        return bank;
    }

    function linkHTML() {
        kanaTestElement = document.getElementById('kanaTestID');
        userInputElement = document.getElementById('userInputID');
        userInputElement.onkeydown = function(key) {
            if(key.code == "Enter") {
                if(userInputElement.value != ""){
                    userEnterPress();
                }
            }
        }
        document.getElementById("updateBankID").onclick = function() {
            testBank = createBank();
            newKana();
        }
    }

    function gameStart() {
        linkHTML();
        setupKanaVariables();
        testBank = createBank();
        newKana();
    }

    function userEnterPress() {
        input = userInputElement.value;
        answer = kanaTestElement.innerHTML;
        if(input.slice(-1) == answer){
            console.log("Correct");
        } else {
            console.log("Wrong");
        }
        userInputElement.value = "";
        newKana();
    }

    function newKana() {
        var nk = testBank[Math.floor(Math.random() * testBank.length)];
        while(nk == kanaTestElement.innerHTML){ //reroll until a new kana comes up
            nk = testBank[Math.floor(Math.random() * testBank.length)];
        }

        kanaTestElement.innerHTML = nk;
    }

    function setupKanaVariables() {
        hiragana        = ["あ","い","う","え","お",
                        "か","き","く","け","こ",
                        "さ","し","す","せ","そ",
                        "た","ち","つ","て","と",
                        "な","に","ぬ","ね","の",
                        "は","ひ","ふ","へ","ほ",
                        "ま","み","む","め","も",
                        "や","ゆ","よ",
                        "ら","り","る","れ","ろ",
                        "わ","を","ん"
                        ];
        hiraganaDaku    = ["が","ぎ","ぐ","げ","ご",
                        "ざ","じ","ず","ぜ","ぞ",
                        "だ","ぢ","づ","で","ど",
                        "ば","び","ぶ","べ","ぼ",
                        "ぱ","ぴ","ぷ","ぺ","ぽ"
                        ];
        hiraganaYou     = ["きゃ","きゅ","きょ",
                        "ぎゃ","ぎゅ","ぎょ",
                        "しゃ","しゅ","しょ",
                        "じゃ","じゅ","じょ",
                        "ちゃ","ちゅ","ちょ",
                        "にゃ","にゅ","にょ",
                        "ひゃ","ひゅ","ひょ",
                        "びゃ","びゅ","びょ",
                        "ぴゃ","ぴゅ","ぴょ",
                        "みゃ","みゅ","みょ",
                        "りゃ","りゅ","りょ"
                        ];
        katakana        =  ["ア","イ","ウ","エ","オ",
                        "カ","キ","ク","ケ","コ",
                        "サ","シ","ス","セ","ソ",
                        "タ","チ","ツ","テ","ト",
                        "ナ","ニ","ヌ","ネ","ノ",
                        "ハ","ヒ","フ","ヘ","ホ",
                        "マ","ミ","ム","メ","モ",
                        "ヤ","ユ","ヨ",
                        "ラ","リ","ル","レ","ロ",
                        "ワ","ヲ","ン"
                        ];
        katakanaDaku    = ["ガ","ギ","グ","ゲ","ゴ",
                        "ザ","ジ","ズ","ゼ","ゾ",
                        "ダ","ヂ","ヅ","デ","ド",
                        "バ","ビ","ブ","ベ","ボ",
                        "パ","ピ","プ","ペ","ポ"
                        ];
        katakanaYou     = ["キャ","キュ","キョ",
                        "ギャ","ギュ","ギョ",
                        "シャ","シュ","ショ",
                        "ジャ","ジュ","ジョ",
                        "チャ","チュ","チョ",
                        "ニャ","ニュ","ニョ",
                        "ヒャ","ヒュ","ヒョ",
                        "ビャ","ビュ","ビョ",
                        "ピャ","ピュ","ピョ",
                        "ミャ","ミュ","ミョ",
                        "リャ","リュ","リョ"
                        ];
        row1            = ["ぬ","ふ","あ","う","え","お","や","ゆ","よ","わ","ほ","へ"];
        row2            = ["た","て","い","す","か","ん","な","に","ら","せ","む"];
        row3            = ["ち","と","し","は","き","く","ま","の","り","れ","け"];
        row4            = ["つ","さ","そ","ひ","こ","み","も","ね","る","め","ろ"];
    }
}
