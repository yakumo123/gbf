function gbfbox() {
	rply = {
  "type": "template",
  "altText": "戰貨計算器",
  "template": {
      "type": "confirm",
      "text": "所需戰貨器【請複製副本後使用】",
      "actions": [
          {
            "type": "uri",
            "label": "活動戰貨",
            "uri": "https://docs.google.com/spreadsheets/d/1FvdXZYkymzfGPG1gTecwDmirj2eFODOX4HKoWIIKlU4/edit?usp=drivesdk"
          },
          {
            "type": "uri",
            "label": "古戰場戰貨",
            "uri": "https://docs.google.com/spreadsheets/d/1FvdXZYkymzfGPG1gTecwDmirj2eFODOX4HKoWIIKlU4/edit?usp=sharing"
          }
      ]
  }
};
	return rply;
}



module.exports = {
	gbfbox: gbfbox
};
