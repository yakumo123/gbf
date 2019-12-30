// Load `*.js` under roll directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./roll/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
	  var name = file.replace('.js', '');
	  exports[name] = require('../roll/' + file);
	}
  });

function parseInput(rplyToken, inputStr) {
	//console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) 	{
	return isNaN(parseInt(obj));  
	}

	let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階

	if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/\d+d+\d/)!=null) return exports.rollbase.nomalDiceRoller(inputStr,mainMsg[0],mainMsg[1],mainMsg[2]);

	if (trigger.match(/^(\d+)(b)(\d+)$/i)!= null) return exports.advroll.xBy(trigger,mainMsg[1],mainMsg[2]);
	if (trigger.match(/^(\d+)(u)(\d+)$/i)!= null && isNaN(mainMsg[1])== false) return exports.advroll.xUy(trigger,mainMsg[1],mainMsg[2],mainMsg[3]);
	
	if (trigger.match(/^ccb$|^cc$|^ccn[1-2]$|^cc[1-2]$/)!= null && mainMsg[1]<=1000 )
	{		
	if (trigger == 'ccb'&& mainMsg[1]<=99) return exports.coc.coc6(mainMsg[1],mainMsg[2]);
	
	if (trigger == 'cc'&& mainMsg[1]<=1000) return exports.coc.coc7(mainMsg[1],mainMsg[2]);
	if (trigger == 'cc1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'1',mainMsg[2]); 
	if (trigger == 'cc2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'2',mainMsg[2]);	
	if (trigger == 'ccn1'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-1',mainMsg[2]);	
	if (trigger == 'ccn2'&& mainMsg[1]<=1000) return exports.coc.coc7bp(mainMsg[1],'-2',mainMsg[2]);	
	}
	if (trigger.match(/(^ccrt$)/) != null) return exports.coc.ccrt();
	if (trigger.match(/(^ccsu$)/) != null) return exports.coc.ccsu();


	
	if (trigger.match(/^小車車$/)!= null ) return exports.image.imsnow();
	
	if (trigger.match(/(的能力值$)/) != null && mainMsg[1] != NaN )	return exports.character.build7char(mainMsg[1]);
	
	if (trigger.match(/綜合分數$/) != null) return exports.character.ability(mainMsg) ;	
	
	if (trigger.match(/^gbf情報$/)!= null ) return exports.botyakumo2.BotHelpYy();
	
	if (trigger.match(/^gbf情報電腦$/)!= null ) return exports.funny.gbf();
	
	
	if (trigger.match(/^gbf箱掘$/)!= null ) return exports.box.gbfbox();
	
	if (trigger.match(/^兔兔幫助$/)!= null ) return exports.botyakumo.BotHelpYy();
	
	if (trigger.match(/^[1-4]n[c|a][+|-][1-99]$|^[1-4]n[c|a]$/)!= null ) return exports.nc.nechronica(trigger,mainMsg[1]);

	if (trigger.match(/(^nm$)/) != null)	return exports.nc.nechronica_mirenn(mainMsg[1]);

	
	if (trigger.match(/^(\d+)(wd|wod)(\d|)((\+|-)(\d+)|)$/i)!= null)return exports.wod.wod(trigger,mainMsg[1]);

	if (trigger.match(/^(\d+)(dx)(\d|)(((\+|-)(\d+)|)((\+|-)(\d+)|))$/i)!= null)return exports.dx3.dx(trigger);


 	if (trigger.match(/排序|次序/)!= null && mainMsg.length >= 3) return exports.funny.SortIt(inputStr,mainMsg);
 	if (trigger.match(/^d66$/)!= null ) return exports.advroll.d66(mainMsg[1]);
	if (trigger.match(/^d66s$/)!= null ) return exports.advroll.d66s(mainMsg[1]);


	if (trigger.match(/選10/)!= null && mainMsg.length >= 3) return exports.funny.tenchoice(inputStr,mainMsg);
	if (trigger.match(/選1/)!= null && mainMsg.length >= 3) return exports.funny.choice(inputStr,mainMsg);
	if (trigger.match(/選2/)!= null && mainMsg.length >= 3) return exports.funny.twochoice(inputStr,mainMsg);
	if (trigger.match(/選3/)!= null && mainMsg.length >= 3) return exports.funny.threechoice(inputStr,mainMsg);
	if (trigger.match(/選4/)!= null && mainMsg.length >= 3) return exports.funny.fourchoice(inputStr,mainMsg);
	if (trigger.match(/選5/)!= null && mainMsg.length >= 3) return exports.funny.fivechoice(inputStr,mainMsg);
	if (trigger.match(/選6/)!= null && mainMsg.length >= 3) return exports.funny.sixchoice(inputStr,mainMsg);
	if (trigger.match(/選7/)!= null && mainMsg.length >= 3) return exports.funny.sevenchoice(inputStr,mainMsg);
	if (trigger.match(/選8/)!= null && mainMsg.length >= 3) return exports.funny.eightchoice(inputStr,mainMsg);
	if (trigger.match(/選9/)!= null && mainMsg.length >= 3) return exports.funny.ninechoice(inputStr,mainMsg);

	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
		if (trigger.match(/^單張|^每日|^daily/)!= null) return exports.funny.NomalDrawTarot(mainMsg[1], mainMsg[2]);//預設抽 79 張
		if (trigger.match(/^時間|^time/)!= null) 	return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
		if (trigger.match(/^大十字|^cross/)!= null) return exports.funny.MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
	}
	
	
	if (trigger.match(/隨機顏色|幸運顏色/) != null) return exports.funny.randomColour(mainMsg) ;	
		
	if (trigger.match(/ㄘ什麼|吃甚麼|吃什麼/) != null) return exports.funny.FoodChoices(mainMsg) ;	
	
	if (trigger.match(/喝甚麼|喝什麼/) != null) return exports.funny.randomDrink(mainMsg) ;	
	
	if (trigger.match(/(運勢$)/) != null) return exports.funny.randomLuck(mainMsg) ; 
	
	if (trigger.match(/(要打多少$|要打多少肉$)/) != null) return exports.funny.meat(mainMsg) ; 
	
	if (trigger.match(/猜拳/) != null) {
		return exports.funny.RockPaperScissors(inputStr, mainMsg[1]);	
	};

	
	if (trigger.match(/(的機率$)/) != null) return exports.funny.randomChance(mainMsg) ; 
	
	if (trigger.match(/角色背景/) != null) return exports.funny.BStyleFlagSCRIPTS(mainMsg) ;	

	
	if (trigger.match(/的黑歷史/) != null) return exports.funny.BlackHistory(mainMsg) ;	

}
module.exports = {
	parseInput:parseInput
};
