var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function RockPaperScissors(chack,text) {
	let returnStr = '';
	let handArr = [1,2,3]；
	let hand = handArr[Math.floor((Math.random() * (handArr.length)) + 0)];
	
	if (TEXT[1] == 1 && hand == 1) returnStr += '我出石頭！\n哼哼你輸惹';
	if (TEXT[1] == 2 && hand == 1) returnStr += '我出石頭！\n看來我們不相上下阿';
	if (TEXT[1] == 3 && hand == 1) returnStr += '我出石頭！\n你好像有點強！';
	if (TEXT[1] == 1 && hand == 2) returnStr += '我出布！\n讓你一次而已啦！';
	if (TEXT[1] == 3 && hand == 2) returnStr += '我出布！\n原來平手...沒什麼嘛！';
	if (TEXT[1] == 2 && hand == 2) returnStr += '我出布！\n哈哈你看看你！';
	if (TEXT[1] == 1 && hand == 3) returnStr += '我出剪刀！\n平手 (  艸)';
	if (TEXT[1] == 3 && hand == 3) returnStr += '我出剪刀！\n贏了 (｀・ω・´)b';
	if (TEXT[1] == 2 && hand == 3) returnStr += '我出剪刀！\n輸惹 ゜。。゜(ノД‵)ノ・゜';
	if (hand == 3) returnStr += '我出剪刀！\n亂出打你喔 (｀・ω・´)凸';
	if (hand == 1) returnStr += '我出石頭！\n欸不對喔你亂出！';
	if (hand == 2) returnStr += '我出布！\n別亂出阿會壞掉的';

	}

	rply.text = returnStr;
	return rply;
}

function meat(TEXT) {
let FirArr = [1,2,3,4,5,6,7,8,9]
let SecArr = [500,0500,0000,1000,2000,3000,4000,5000,6000,7000,8000,9000,00000]
rply.text = TEXT[0] + ' ： ' + FirArr[Math.floor((Math.random() * (FirArr.length)) + 0)] + SecArr[Math.floor((Math.random() * (SecArr.length)) + 0)]; ; 
return rply;
}

function randomColour(TEXT) {
let rplyArr = ['鴇','赤白','油','紺桔梗','躑躅','肌','伽羅','花','桜','橙','青丹','瑠璃','薔薇','灰茶','鶯','琉璃紺','韓紅','茶','利久','紺','珊瑚','樺茶','媚茶','青藍','紅梅','枯茶',' 藍海松茶','杜若','桃','焦茶','青鈍','勝','薄柿','柑子','抹茶','羣青','薄紅梅','杏','黃綠','鐵紺','曙','蜜柑','苔','藍鐵','紅','褐','若草','青褐','赤丹','路考茶','若綠','褐返','紅赤','飴','萌黃','藤納戸','臙脂','丁子','苗','桔梗','真赭','丁子茶','草','紺藍','今様','黃櫨','柳','藤','梅染','土器','若草','藤紫','退紅','黃枯茶','松葉','青紫','蘇芳','狐','白綠','菫','茜','黃橡','薄綠','鳩羽','紅','銀煤竹','千草','薄','銀硃','涅','青綠','薄鼠','赤','胡桃','淺綠','鳩羽鼠','硃','香','綠','菖蒲','洗朱','國防','草','江戸紫','紅樺','練','木賊','紫','紅緋','肉','常盤','滅紫','樺','人','綠青','葡萄鼠','鉛丹','土','千歳綠','古代紫','赭','小麥','深綠','暗紅','緋','琥珀','萌葱','葡萄','丹','木蘭','青白橡','茄子紺','土','梔子','革','紫紺','焦香','朽葉','麴塵','濃','真紅','萱草','仙斎茶','藍','緋','黃金','若竹','菖蒲','紅海老茶','金','青磁','牡丹','淺蘇芳','金茶','青竹','赤紫','鳶','卵','鐵','白','小豆','山吹','錆鼠','胡粉','弁柄','黃土','鐵御納戸','生成','慄梅','朽葉','青綠','灰白','海老茶','空五倍子','錆淺葱','石竹','深緋','鶯茶','水淺葱','象牙','赤銅','向日葵','新橋','乳白','赤褐','鬱金','淺葱','薄鈍','金赤','砂','白羣','銀鼠','赤茶','芥子','御納戸','茶鼠','赤錆','淡黃','甕覗','鼠','黃丹','亜麻','水','薄墨','赤橙','枯','藍鼠','利休鼠','柿','鳥子','祕','鉛','肉桂','黃','空','灰','樺','蒲公英','青','鈍','煉瓦','中黃','藍','煤竹','錆','刈安','濃藍','黒茶','檜皮','黃檗','勿忘草','黒橡','栗','綠黃','露草','濃鼠','黃赤','鶸','縹','墨','代赭','海松','淺縹','黒','駱駝','鶸茶','薄縹','黒鐵','黃茶','山鳩','薄花','蝋','洗柿','生壁','紺青','紫黒','鴨黃','鵝黃','緗','秋香','橙黃','杏黃','橘黃','橘紅','琥珀','黃櫨','橙','薑黃','松花','豆綠','柳黃','蔥綠','草綠','油綠','綠沈','深綠','松花綠','松柏綠','青碧','縹','水藍','蔚藍','碧藍','湖藍','藍','群青','靛青','靛藍','青','藏藍','黛藍','蒼青','水紅','藕荷','藕','丁香','雪青','醬紫','黛紫','紫棠','青蓮','紫','紫醬','紫檀','精白','鉛白','霜','雪白','瑩白','月白','素','荼白','縞','魚肚白','象牙白','黎','黧','象牙黑','玄','緇','黝黑','烏','烏黑','玄青','漆黑','黑']
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '色';
return rply;
}

function gbf() {	
rply.text = '========\n素材收集\n========\n\n\n製作十天眾素材及收集方法\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/23094\n\n天司武器\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/52819#final\n\n素材地圖\nhttps://gbf.huijiwiki.com/wiki/%E7%B4%A0%E6%9D%90%E5%9C%B0%E5%9B%BE\n\n素材指南\nhttps://forum.gamer.com.tw/Co.php?bsn=25204&sn=22833\n\nSide Story武器碎片及屬晶資源\nhttps://home.gamer.com.tw/creationDetail.php?sn=4258259\n\n巴哈武器\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show//48325\n\nU巴武器\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/62344\n\n英雄武器\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/38000\n\n共鬥素材表\nhttps://forum.gamer.com.tw/C.php?bsn=25204&snA=7522\n\n武器盤倍率介紹 及 100%升技表\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/33197\n\nSide Story 召喚石及武器的評價\nhttps://www.ptt.cc/man/GBF/DC71/DC36/M.1529890956.A.0FD.html\n\n\n========\n編成參考\n========\n\n\n武器盤及角色編成\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/37020\n\n角色評價\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/20722\n\n召喚石評價\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/21495\n\n\n========\n其他\n========\n\n\nC4及EX2開啟指南\nhttps://pttgame.com/gbf/M.1528541729.A.6A4.html\n\n十天眾武器屬性選擇概念\nhttps://m.gamer.com.tw/forum/Co.php?bsn=25204&snB=11965\n\nRank經驗對應表\nhttps://gbf-wiki.com/index.php?%C9%AC%CD%D7EXP%C9%BD\n\n技能基礎值計算\nhttps://gbf-wiki.com/index.php?%A5%B9%A5%AD%A5%EB%B8%FA%B2%CC\n\nRaidFinder【找路人場】\nhttp://gbfraider.herokuapp.com/\n\n其他GBF資訊 Gamewith\nhttps://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/\n\nGBF中文維基\nhttps://gbf.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5'
return rply;
}

function like() {	
let rplyArr = ['\
我喜歡', '\
我很喜歡', '\
我還滿喜歡的'];
rply.text = rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomDrink(TEXT) {
let rplyArr = ['青草茶','冬瓜茶','牧場鮮乳','葡萄柚綠','青蛙撞奶','紅茶牛奶','紫薯奶綠','玉荷清蘆薈蜜','芋頭鮮','地瓜鮮奶','多多綠','蘆薈蜜','楊枝甘露','抹茶','玄米茶','抹茶拿鐵','梅酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','桃酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','蜜桃葡萄柚星冰樂','彈珠汽水','芭樂汁','檸檬愛玉冰','青蛙下蛋','黑松沙士','啤酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','木瓜牛奶','珍珠奶茶','奶茶','可樂','汽水','紅茶','綠茶','巧克力','水果酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','日本酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','雞尾酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','麥茶','檸檬紅茶','檸檬汁','蘋果汁','甘蔗汁','椰子汁','吹雪','橙汁','西瓜汁','鳳梨汁','蜂蜜檸檬','咖啡','好立克','阿華田','豆奶','牛奶','黑糖珍奶','檸檬水','鴛鴦','茶走','鴦走','綜合果汁','蔬菜汁','蔬果汁','烏龍茶','巧克力牛奶','草莓汁','火龍果汁','草莓牛奶','芒果汁','芒果紅茶','芒果綠茶','乳酸飲品','拿鐵','芒果沙冰','草莓沙冰','蘋果沙冰','鳳梨沙冰','果汁','水果沙冰','冰滴咖啡','早餐店清腸胃的大冰奶','水','水也沒得你喝','紅豆冰','蘋果西打','野 格 爆 彈\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','白茶','黑茶','葡萄酒\n(未滿20歲不能喝酒喔，酒後也不能駕駛喔)','萄葡汁','花茶','摩卡','柚子茶','拉茶','薏米水','檸檬碳酸水']
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function FoodChoices(TEXT) {
let rplyArr = ['蕎麥麵 ','小籠包','拉麵','瓜仔肉','壽司','刺身','炸雞','排骨飯','意大利麵','滷肉飯','銅鑼燒','米粉炒','肉燥飯','不吃','吃土','八雲','吹雪','安特','牛丼','親子丼','麵包','麥當勞','漢堡','KFC','銅鑼燒','鹽酥雞','胡椒餅','鍋貼','粽子','披薩','烤雞','烤肉','石頭鍋飯','羊肉爐','麻油雞','肉羹','擔仔麵','排骨麵','蔥抓餅','刈包','薑汁番茄','生煎包','蚵仔煎','肉粽','炸雞排','烤玉米、烤番薯','烤香腸','蔥油餅','臭豆腐','肉圓','蚵仔麵線','筒仔米糕','豬血糕','蛋包飯','摩斯','海南雞飯','阿忠麵線','麵線','火鍋','三明治','涼麵','拌麵','烏冬','燒臘飯','海鮮丼','部隊鍋','魷魚焿','熱狗堡','豬腳飯','炒飯','雞腿飯','炸雞排','蛋餅','沙拉','咖哩','雞肉咖哩','瑞典肉丸','德國豬腳','雞塊','鐵板燒','印度薄餅','豬排飯','牛排飯','便當','貢丸湯','泰式炒河粉','韓式炒年糕','紫菜包飯','韓式燒烤','酸辣湯麵','西班牙海鮮飯','坦都里烤雞','千層麵','春捲'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '  /  ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}


function BlackHistory(TEXT) {
let actionArr = ['幹上了', '捏死了', '打爆了', '綁架了', '捉住了', '偷走了', '愛上了', '抱住了', '上了', '變成了', '成為了', '吃了', '拉出了', '排出了', '睡了', 'NTR了', '每天都親']
let targetArr = ['一個偽娘', '偽娘八雲', '玩具', '異形', '外星人', '可愛的八雲', '萌萌的八雲', '八雲妹妹', '吹雪姐姐', '女裝八雲', '女裝吹雪', '萌萌的吹雪', '偽娘吹雪', '偽男', '扶他', '扶他吹雪', '安特', '瘟疫安特', '大叔吹雪', '被父愛如山的安', '筱亞叔叔', '肌肉魔法少女~☆', '血小板', '別人的老公', '一個布偶', '自己', '吹雪的大雞雞', '破魔蟲', '神', '奶油蒼蠅', '白血球', '史萊姆', '式神', 'LM', '小魚', '土耳其火雞', '鳳梨披薩', '八爪魚', '一根木棒', '一隻火雞', '女生', '12歲的女孩', '蘿莉', 'BBA', '老太婆', 'FBI隊員', '一隻手機', '一張光碟', '貓娘', '狐娘', '魔王', '爆肌男', '獸人', '妖精', '吸血鬼', '魔法使']
let consequenceArr = ['令他懷孕了', '令他哭了', '令他變姓了', '被羈押了', '快樂地和他生活下去', '和他永不分離', '和他結婚了', '得了不女裝就會死的病', '喜歡上女裝', '每天都女裝', '當上了一個偽娘', '變成了扶他', '變了大叔控', '變了蘿莉控', '變了老太婆控', '變了獸人控', '變了獸耳控', '變了御姐控', '令吹雪懷孕了']

rply.text = TEXT[0] + ': \n' + '他曾經' + actionArr[Math.floor((Math.random() * (actionArr.length)) + 0)] + targetArr[Math.floor((Math.random() * (targetArr.length)) + 0)] + '。從而' +  consequenceArr[Math.floor((Math.random() * (consequenceArr.length)) + 0)] + '\n這就是'  +  TEXT[0] ;
return rply;
}

function BStyleFlagSCRIPTS(TEXT) {
let PersonalDescriptionArr = ['神族', '魔族', '妖精族', '人族', '森精族', '天翼族', '機凱族', '魚人族', '吸血鬼族']
let IdeologyBeliefsArr = ['男性', '女性', '八雲', '吹雪', '偽娘', '偽男', '不明','露菈','無性別'];
let BodyArr = ['嬌小','結實','豐滿','粗壯','苗條','健壯','魁梧','肥胖','瘦小','有點肉感','凹凸有致'];
let SignificantPeopleArr = ['非洲的', '抽不到主戰的', '歐洲的', '帥氣的', '粗鄙的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的', '感覺疲憊的', '毛髮茂盛的', '優雅的', '邋遢的', '敦實的', '虛弱的', '蒼白的', '平庸的', '臉色紅潤的', '皮膚黝黑色', '滿臉皺紋的', '古板的', '有狐臭的', '萌萌的', '帥氣的', '有獸耳的','爆肌的','賈巴的','經常女裝的','現充的','邊緣的','狗幹的','心理變態的','兄控的','蘿莉控的','姐控的','妹控的','怪物控的','肥宅的'];
let EyeArr = ['綠色','金色','藍色','紅色','左眼紅色右眼藍色','天藍色','桃紅色','天藍色','咖啡色','靛色','海棠紅色','銀紅色','絳紫色','殷紅','淺黃色','淺橄欖色','淺黃綠色','橙黃','杏黃','橘黃','橘紅','花黃綠色','橙色','黃白色','水藍','蔚藍','碧藍','湖藍','藍色','深藍色','藍色','紺紫色','藏藍色','黛藍色','蒼青色','松花色','淺黃綠色','柳黃色','蔥綠色','草綠色','深綠色','松花綠色','墨綠色','水紅色','淺藍紫色','醬紫色','深紫色','黑紅色','偏藍的紫色','紫色','紫檀色','銀白色','霜色','雪白色','月白色','淡藍色','黝黑','烏黑色','黑色'];
let HairArr = ['單馬尾','雙馬尾','中分','刺蝟頭','爆炸頭','公主頭','長髮辮子','短髮','飄逸長髮','姬髮式','包包頭','瀏海','背頭','分頭','雷鬼頭'];
let HairColourArr = ['紅色','橙色','黃色','咖啡色','藍色','綠色','琥珀色','棕色','桃紅色','粉紅色','水藍色','天藍色','海棠紅色','銀紅色','絳紫色','殷紅','淺黃色','淺橄欖色','淺黃綠色','橙黃','杏黃','橘黃','橘紅','花黃綠色','橙色','黃白色','水藍','蔚藍','碧藍','湖藍','藍色','深藍色','藍色','紺紫色','藏藍色','黛藍色','蒼青色','松花色','淺黃綠色','柳黃色','蔥綠色','草綠色','深綠色','松花綠色','墨綠色','水紅色','淺藍紫色','醬紫色','深紫色','黑紅色','偏藍的紫色','紫色','紫檀色','銀白色','霜色','雪白色','月白色','淡藍色','黝黑','烏黑色','黑色'];
let DecorationArr = ['頭髮頂着呆毛','有着狐狸耳朵跟尾巴','有着貓耳朵跟尾巴','配戴着華麗的寶石吊飾','配戴着寶石耳環','身上有着刺青','拿着恐怖的狼牙棒','拿着水藍色的魔杖','拿着聖劍'];
let AtiArr = ['甲爆','變態','傲嬌','色色','傲慢','可愛','變態','甲甲','智障','狡猾','遲鈍','陰沉','青春洋溢','機靈','無口','電波系','腹黑','中二','病嬌','天然呆','傻傻','冒失','經常黑化','性格容易壞掉','像大和撫子','鬼畜','嗜血','兇狠','很惡','文靜','溫柔','邪惡','充滿心機','容易害羞','狡猾','固執','執着','可愛','恐怖','傻呼呼','陰鬱'];
let ClothingArr = ['貓耳裝','水手服','女僕裝','洛麗塔','泳衣','浴衣','巫女服','斗篷','緊身衣 ','卡通圖案的睡衣 ','學校制服和黑色過膝襪','毛衣','和服','吊帶褲','西裝','可愛的睡衣','睡衣','條紋上衣和牛仔褲'];
let SignificantPeopleWhyArr = ['虔誠信仰著某個神祈', '覺得人類不需要依靠宗教也可以好好生活，從而毀滅了世界上1/3的宗教', '割腕尋妻而失去過多','成了一個頂級的非洲人','和吹雪結婚了從而過上幸福美滿的生活','因為闖了一間幼兒園而被FBI捉走了','壁咚了八雲','和偽娘笑臉度過了一個美好的結婚蜜月旅行','做出了一個有超巨大威力的武器希望藉此毀滅地球，但最後被阻止了', '改變了世界上一切的因果循環與命運', '創立了世界上最神秘的秘密結','剷除了一個國家', '是神秘學的信徒', '在學校令一整個班級的人懷孕了', '覺得金錢至上，且為了金錢不擇手段', '是一個激進主義分子，活躍於社會運動','女裝並被室友幹上了','當過偽娘','愛上了一隻怪獸','在路上拔掉所有他遇到的男性的雞雞','變成了安特','毀滅了他所看到的現充','生過10個小孩','被100個女生告白','令100個女生懷孕了','交過50個女朋友','交過100個男朋友','令一個男生懷孕了']
let MeaningfulLocationsArr = ['和平底鍋談戀愛','用全消滅教報復社會','當偽娘','當偽男','和笑臉親親','變噁心','抽主戰','被焦糖化','被碳化','被怪物強上','被推倒','抱住吹雪','抱住八雲','被八雲打臉','和洗衣機做朋友','親吻垃圾桶','女裝','淋雨','看血小板','令人懷孕','被壁咚','抽不到主戰','當非洲人','和偽娘笑臉結婚','從八樓跳下去咬別人的頭','用手砍樹','用杯麵的杯蓋吃麵','把馬桶當鍋子用','舔電視','拿浴缸煮湯','幹砲中離','後空翻打手…','24小時親吻大地','吃土','把內褲套在頭上上學','用愛發電','舔吹雪','不空腹吃早餐','被FBI帶走','每天都生日','跟公司請假','打給張老師','吃手手'];
	
rply.text = TEXT[0] + ' ： ' + '\n【種族】：' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '\n【性別】：' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '\n【身形】：他身形' + BodyArr[Math.floor((Math.random() * (BodyArr.length)) + 0)] + '\n【眼睛】：他擁有一雙' + EyeArr[Math.floor((Math.random() * (EyeArr.length)) + 0)] + '的眼睛' + '\n【髮色】：他有着一頭' + HairColourArr[Math.floor((Math.random() * (HairColourArr.length)) + 0)] + '的頭髮' + '\n【髮型】：他的髮型是' + HairArr[Math.floor((Math.random() * (HairArr.length)) + 0)] + '\n【特徵】：他是一個' + DecorationArr[Math.floor((Math.random() * (DecorationArr.length)) + 0)] + '的人' + '\n【給人的印象】：他給人的印象是一個' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '人' + '\n【性格】：在性格上來說，他是一個' + AtiArr[Math.floor((Math.random() * (AtiArr.length)) + 0)] + '的人' + '\n【服飾】：他平常的衣着為' + ClothingArr[Math.floor((Math.random() * (ClothingArr.length)) + 0)] + '。 \n【興趣】：在他的生命中，他最喜歡' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + ' \n【往事】：他曾經' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)];
return rply;
}


function randomLuck(TEXT) {
let rplyArr = ['來~先跪下來我才告訴你','都2019年了 還問甚麼運勢','你問多少次運勢你也不抽到主戰的 放棄吧','為何你會覺得問運勢 能令你的人生可以脫離苦痛','問你媽的運勢','沒有希望','你就陷入絕望吧','沒人可以幫到你的','(無視中)','運氣這東西 你會有嗎??','別妄想了 你運氣不會好的','非洲人不是一朝一夕就可以養成的 同理歐洲人也是','我都保持在歐洲 你留着非洲就行','為何你會覺得你運勢有好的一刻?','抽不到絲碧涅憑甚麼問運勢','你就沒運勢 別再問了','吉 吉 大 爆 炸','我…我才不告訴你呢……!哼!','我才不要說呢!','如果我不說 我會怎樣','你的樣子如何 你的命運也必如何','為何…為何你要問我……','我不會告訴你的','明明人家都不知道','要爆炸啦~','麻糬','吉爆','爆吉','大爆吉','大吉吉','你大吉吉','這我一定吉','你真的凶爆呃','請選擇：凶爆 爆凶','吉到爆啦','別吉啦','超吉','超級上吉','大吉','吉','中吉','小吉','末吉','中吉','凶','小凶','沒凶','大凶','很凶','你不要知道比較好呢','命運在手中,何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…殘念','有吉也沒用 唉…','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去'];
rply.text = TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
return rply;
}

function randomChance(TEXT) {
let levelArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
let level = levelArr[Math.floor((Math.random() * (levelArr.length)) + 0)];
let norArr = ['來~先跪下來我才告訴你','機率有多高也救不到你吧？','你有甚麼資格問資料？','わからない！','哈！！？？','你在開玩笑對吧？','為何我要理你？','大概就那幾%啦~','我想1%也沒有吧','100%？我覺得是0%吧','問機率前要女裝是常識吧？？','還沒女裝憑甚麼問機率','先交出你的女裝再說吧','你下體要爆炸了，你先看一下吧','先向我主人八芸提出申請再來問我？','你這噁心人別過來！！！','再過來我會叫的喔！！！','你消失的機率大概是50%','你頭上有團破邪之光！拜拜囉~','吃我的○○啦！！','叮噹叮噹','閣下所訊問的問答暫時未能產生，請女裝後再提問。','今天就是你的最後一天的','我手中掌握住你的未來了 你問啥都沒用','這裡是那裡！！？？我是誰！！？？你又是誰！！？？你變態嗎！！？？','你可以先穿女裝啊','(母湯の微笑)','歐金爆！','你是童蘿騷','你問多少次機率你也不抽到主戰的 放棄吧','為何你會覺得問機率可以改變你命運','問你媽的運勢','沒有希望','你就陷入絕望吧','沒人可以幫到你的','(無視中)','運氣這東西，你會有嗎？？','別妄想了 你運氣不會好的','非洲人不是一朝一夕就可以養成的 同理歐洲人也是','為何你會覺得你機率會如你所願？','我…我才不告訴你呢……！哼！','我才不要說呢!','如果我不說，我會怎樣？','你的樣子如何 你的機率也必如何','為何…為何你要問我……','我不會告訴你的','明明人家都不知道','要爆炸啦~','你雞雞大爆炸','你不要知道比較好呢','命運在手中，何必問我','凶爆','你好凶','凶屁凶','乖 你不會想知道的','嗯…？','應該只有0%','你猜猜看','嗯咦 嗯… 嗯','這是世界的真理','你不能看透這世界','我勸你 不要追問下去','100%！並沒有','笑wwww','當你想要100%時，這機率就是0%\n當你想要0%時，這機率就是100%','打我阿！來阿！','母湯','狗幹','非洲','歐洲','%%%','你不會知道的','啥？','沒有希望','你雞雞大爆炸的','問你媽機率','誰准你問機率','別再問了','你要被…沒事','我就這樣看着你被wwww','樓上說要被樓下嘲諷'];
let nor = norArr[Math.floor((Math.random() * (norArr.length)) + 0)];
let dependArr = [1,2,2]
let depend = dependArr[Math.floor((Math.random() * (dependArr.length)) + 0)];

if (depend == 1) {
rply.text = TEXT[0] + ' ： ' + level + '%' ;
}
else
{
rply.text = TEXT[0] + ' ： ' + nor ;
}
return rply;
}


////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
	let aHand = ['石頭','布','剪刀'];
	HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = rollbase.FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
	case 0: //石頭
		returnStr = '我出石頭！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
		else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
		else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
		else returnStr += '欸不對喔你亂出！';

		break;

	case 1: //布
		returnStr = '我出布！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
		else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
		else returnStr += '別亂出阿會壞掉的';

		break;

	case 2: //剪刀
		returnStr = '我出剪刀！\n';

		if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
		else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
		else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
		else returnStr += '亂出打你喔 (｀・ω・´)凸';

		break;

	default:
		returnStr = '我出的是...欸不對你沒出喔！\n';
		break;
	}

	rply.text = returnStr;
	return rply;
}



////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 3; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 3; i++) {
		if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
	}

	} else if (type == 2) //塞爾特大十字
	{
	cards[0] = rollbase.FunnyDice(79); //先抽第0張
	revs[0] = rollbase.FunnyDice(2);

	for (i = 1; i < 10; i++) {
		for (;;) {
		tmpcard = rollbase.FunnyDice(79);
		if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
		{
			cards.push(tmpcard);
			revs[i] = rollbase.FunnyDice(2);
			break;
		}
		}
	}

	if (text != null)
		returnStr += text + ': \n';

	for (i = 0; i < 10; i++) {
		if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 1) {
		if (revs[i] == 0) //正位
			returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		if (i == 8) {
		if (revs[i] == 0) //正位
			returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		else
			returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
		}
		if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

	}

	} else {

	if (text == null)
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
		returnStr = tarotCardReply(rollbase.FunnyDice(79)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	}


	rply.text = returnStr;
	return rply;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2));
	else
	returnStr = tarotCardReply(rollbase.FunnyDice(22)) + ' ' + tarotRevReply(rollbase.FunnyDice(2)) + ' ; ' + text;
	rply.text = returnStr;
	return rply;
}


function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
	//return rply;
}


function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';
	return returnStr;
	//return rply;

}
////////////////////////////////////////
//////////////// choice 及SORT
////////////////////////////////////////
function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	rply.text = str[0] + '\n' + '['+ a + '] \n→ ' + a[rollbase.Dice(a.length)-1];
	return rply;
}

function twochoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] ;
	return rply;
 }

function threechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] ;
	return rply;
 }

function fourchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] ;
	return rply;
 }

function fivechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] ;
	return rply;
 }

function sixchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] ;
	return rply;
 }

function sevenchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] ;
	return rply;
 }

function eightchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3]  + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] ;
	return rply;
 }

function ninechoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] + '/' + a[8] ;
	return rply;
 }

function tenchoice(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ' + a[0] + '/' + a[1] + '/' + a[2] + '/' + a[3] + '/' + a[4] + '/' + a[5] + '/' + a[6] + '/' + a[7] + '/' + a[8] + '/' + a[9] ;
	return rply;
 }


 function SortIt(input,mainMsg) {	
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
	for (var i = a.length-1; i >=0; i--) {
 
	var randomIndex = Math.floor(Math.random()*(i+1));
	var itemAtIndex = a[randomIndex];
	a[randomIndex] = a[i];
	a[i] = itemAtIndex;
	}
	rply.text = mainMsg[0] + '\n' + ' → ['+ a + ']' ;
	return rply;
 }

module.exports = {
	RockPaperScissors,
	meat,
	randomColour,
	randomDrink,
	FoodChoices,
	BlackHistory,
	gbf,
	BStyleFlagSCRIPTS,
	randomLuck,
	randomChance,
	RockPaperScissors,
	MultiDrawTarot,
	NomalDrawTarot,
	SortIt,
	tarotRevReply,
	choice,
	twochoice,
	threechoice,
	fourchoice,
	fivechoice,
	sixchoice,
	sevenchoice,
	eightchoice,
	ninechoice,
	tenchoice,
	tarotCardReply
};
