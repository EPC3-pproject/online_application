function speak(text){
    guide_state=window.sessionStorage.getItem("state");
    const synth = window.speechSynthesis;
    const talk = new SpeechSynthesisUtterance(text);
    if(synth.speaking=true){
        synth.cancel();
    }
    if(guide_state==1){
        synth.speak(talk);
    }
}

t_child = "子育ての項目に分類される手続はこちらになります。手続を選択して下さい。"
t_daycare = "こちらの手続きは保育士施設などの利用申し込みになります。\
      制度は保育、対象は保育施設等の利用を希望する人、手続を行う人は対象となるお子様の保護者様になります。\
      お間違いなければ申請するのボタンをクリックしてください。"
t_application = "お客様が登録したプロフィール情報を手続に使用する場合は「プロフィール情報から自動入力」のボタンをクリックしてください。\
そうでない場合はお客様の情報を直接入力してください。"
t_prof="お客様が登録したプロフィール情報を手続に使用する場合は「プロフィール情報から自動入力」のボタンをクリックしてください。\
そうでない場合はお客様の情報を直接入力してください。"
t_mynumber = "次にお客様の「マイナンバー」を入力し、「次へ」ボタンをクリックしてください"
t_check = "確認画面が表示されます。入力した情報に間違いがないか再度確認してください。お間違いない場合は「はい」を情報の修正を行う場合は「いいえ」をクリックしてください。"
t_none = ""
