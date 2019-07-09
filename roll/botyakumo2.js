var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

function BotHelpYy() {
	rply = {
		"type": "template",
		"altText": "【GBF情報】",
		"template": {
			"type": "carousel",
			"columns": [
				{
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "製作十天眾素材及收集方法",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/23094"
						},
						{
							"type": "uri",
							"label": "天司武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/52819#final"
						},
						{
							"type": "uri",
							"label": "英雄武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/38000"
						}
					]
				},
				{
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "素材地圖",
							"uri": "https://gbf.huijiwiki.com/wiki/%E7%B4%A0%E6%9D%90%E5%9C%B0%E5%9B%BE"
						},
						{
							"type": "uri",
							"label": "素材指南",
							"uri": "https://forum.gamer.com.tw/Co.php?bsn=25204&sn=22833"
						},
						{
							"type": "uri",
							"label": "Side Story武器碎片及屬晶資源",
							"uri": "https://home.gamer.com.tw/creationDetail.php?sn=4258259"
						}
					]
				},
				{
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "巴哈武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show//48325"
						},
						{
							"type": "uri",
							"label": "U巴武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/62344"
						},
						{
							"type": "uri",
							"label": "英雄武器",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/38000"
						}
					]
				},
				{
					"title": "素材收集",
					"text": "素材收集",
					"actions": [
						{
							"type": "uri",
							"label": "共鬥素材表",
							"uri": "https://forum.gamer.com.tw/C.php?bsn=25204&snA=7522"
						},
						{
							"type": "uri",
							"label": "武器盤倍率介紹 及 100%升技表",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/33197"
						},
						{
							"type": "uri",
							"label": "Side Story 召喚石及武器的評價",
							"uri": "https://www.ptt.cc/man/GBF/DC71/DC36/M.1529890956.A.0FD.html"
						}
					]
				},
				{
					"title": "編成參考",
					"text": "編成參考",
					"actions": [
						{
							"type": "uri",
							"label": "武器盤及角色編成",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/37020"
						},
						{
							"type": "uri",
							"label": "角色評價",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/20722"
						},
						{
							"type": "uri",
							"label": "召喚石評價",
							"uri": "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/21495"
						}
					]
				},
				{
					"title": "其他",
					"text": "其他",
					"actions": [
						{
							"type": "uri",
							"label": "C4及EX2開啟指南",
							"uri": "https://pttgame.com/gbf/M.1528541729.A.6A4.html"
						},
						{
							"type": "uri",
							"label": "十天眾武器屬性選擇概念",
							"uri": "https://m.gamer.com.tw/forum/Co.php?bsn=25204&snB=11965"
						},
						{
							"type": "uri",
							"label": "Rank經驗對應表",
							"uri": "https://gbf-wiki.com/index.php?%C9%AC%CD%D7EXP%C9%BD"
						}
					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	BotHelpYy: BotHelpYy
};
