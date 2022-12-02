function speak(text){
    location.href = 'sample.html';
    window.onload = speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
    );
}

t_child = "子育ての項目に分類される手続はこちらになります。手続を選択して下さい。"
t_daycare = "こちらの手続きは保育士施設などの利用申し込みになります。\
      制度は保育、対象は保育施設等の利用を希望する人、手続を行う人は対象となるお子様の保護者様になります。\
      お間違いなければ申請するのボタンをクリックしてください。"
t_application = "お客様が登録したプロフィール情報を手続に使用する場合は「プロフィール情報から自動入力」のボタンをクリックしてください。\
そうでない場合はお客様の情報を直接入力してください。"
