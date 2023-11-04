const val = document.querySelectorAll('#val');
const btn = document.querySelector('.btn');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const echange = document.querySelector('.echange');

const langPays= {
   "am-ET": "Amharic",
   "ar-SA": "Arabic",
   "be-BY": "Bielarus",
   "bem-ZM": "Bemba",
   "bi-VU": "Bislama",
   "bjs-BB": "Bajan",
   "bn-IN": "Bengali",
   "bo-CN": "Tibetan",
   "br-FR": "Breton",
   "bs-BA": "Bosnian",
   "ca-ES": "Catalan",
   "cop-EG": "Coptic",
   "cs-CZ": "Czech",
   "cy-GB": "Welsh",
   "da-DK": "Danish",
   "dz-BT": "Dzongkha",
   "de-DE": "German",
   "dv-MV": "Maldivian",
   "el-GR": "Greek",
   "en-GB": "English",
   "es-ES": "Spanish",
   "et-EE": "Estonian",
   "eu-ES": "Basque",
   "fa-IR": "Persian",
   "fi-FI": "Finnish",
   "fn-FNG": "Fanagalo",
   "fo-FO": "Faroese",
   "fr-FR": "French",
   "gl-ES": "Galician",
   "gu-IN": "Gujarati",
   "ha-NE": "Hausa",
   "he-IL": "Hebrew",
   "hi-IN": "Hindi",
   "hr-HR": "Croatian",
   "hu-HU": "Hungarian",
   "id-ID": "Indonesian",
   "is-IS": "Icelandic",
   "it-IT": "Italian",
   "ja-JP": "Japanese",
   "kk-KZ": "Kazakh",
   "km-KM": "Khmer",
   "kn-IN": "Kannada",
   "ko-KR": "Korean",
   "ku-TR": "Kurdish",
   "ky-KG": "Kyrgyz",
   "la-VA": "Latin",
   "lo-LA": "Lao",
   "lv-LV": "Latvian",
   "men-SL": "Mende",
   "mg-MG": "Malagasy",
   "mi-NZ": "Maori",
   "ms-MY": "Malay",
   "mt-MT": "Maltese",
   "my-MM": "Burmese",
   "ne-NP": "Nepali",
   "niu-NU": "Niuean",
   "nl-NL": "Dutch",
   "no-NO": "Norwegian",
   "ny-MW": "Nyanja",
   "ur-PK": "Pakistani",
   "pau-PW": "Palauan",
   "pa-IN": "Panjabi",
   "ps-PK": "Pashto",
   "pis-SB": "Pijin",
   "pl-PL": "Polish",
   "pt-PT": "Portuguese",
   "rn-BI": "Kirundi",
   "ro-RO": "Romanian",
   "ru-RU": "Russian",
   "sg-CF": "Sango",
   "si-LK": "Sinhala",
   "sk-SK": "Slovak",
   "sm-WS": "Samoan",
   "sn-ZW": "Shona",
   "so-SO": "Somali",
   "sq-AL": "Albanian",
   "sr-RS": "Serbian",
   "sv-SE": "Swedish",
   "sw-SZ": "Swahili",
   "ta-LK": "Tamil",
   "te-IN": "Telugu",
   "tet-TL": "Tetum",
   "tg-TJ": "Tajik",
   "th-TH": "Thai",
   "ti-TI": "Tigrinya",
   "tk-TM": "Turkmen",
   "tl-PH": "Tagalog",
   "tn-BW": "Tswana",
   "to-TO": "Tongan",
   "tr-TR": "Turkish",
   "uk-UA": "Ukrainian",
   "uz-UZ": "Uzbek",
   "vi-VN": "Vietnamese",
   "wo-SN": "Wolof",
   "xh-ZA": "Xhosa",
   "yi-YD": "Yiddish",
   "zu-ZA": "Zulu"
}

echange.addEventListener('click', () =>{
   let changertext = text1.value;
   text1.value = text2.value;
   text2.value = changertext;
   /*******/
   changerlang = val[0].value;
   val[0].value = val[1].value;
   val[1].value = changerlang;
})
val.forEach((deb,index) => {
   for(langcode in langPays ){
      let sel;
      if(index == 0 && langcode == 'fr-FR' ){
         sel = 'selected'
      }else if(index == 1 && langcode == 'zu-ZA'){
      }
   let opt = `<option value="${langcode}" ${sel}>${langPays[langcode]}</option>`;
   deb.insertAdjacentHTML('beforeend', opt);
}
});
btn.addEventListener('click', () =>{
  let text = text1.value;
  transletaFrom = val[0].value;
  transletaTo = val[1].value;
  let msg = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${transletaFrom}|${transletaTo}`
   fetch(msg).then(resultat => resultat.json()).then(data =>{
      text2.value = data.responseData.translatedText;
   })

});