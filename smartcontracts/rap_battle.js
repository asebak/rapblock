"use strict";

var RapBattleItem = function(text) {
	if (text) {
		var obj = JSON.parse(text);
		this.audio1 = obj.audio1;
        this.audio2 = obj.audio2;
	} else {
		this.audio1 = "";
        this.audio2 = "";
	}
};

RapBattleItem.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var RapBattle = function () {
    LocalContractStorage.defineMapProperty(this, "rapbattle", {
        parse: function (text) {
            return new RapBattleItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

RapBattle.prototype = {
    init: function () {
    },

    start: function(challengedId, endDate) {
        //starts a battle
        if ( endDate === "" ) {
            throw new Error("empty end date")
        }
        var battleId = Blockchain.transaction.hash;
        var userId1 = Blockchain.transaction.from;
        var userId2 = challengedId || "";

        var battles = this.rapbattle.get(userId1);

        battles.push({
            battleId: battleId,
            userId1: userId1,
            userId2: userId2,
            endDate: endDate
        });
    },

    get: function(battleId){
            //gets the battle context
    },

    join: function(){
        //user joins
    },

    submit: function(){
        //submitting an audio
    }


};
module.exports = UserProfile;