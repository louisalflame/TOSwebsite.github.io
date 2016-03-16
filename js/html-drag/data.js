//==============================================================
// Skill Database
//==============================================================
var LEADER_SKILLS = {
    NONE : {
        id        : 'NONE',
        preSet    : noneSetting,
    },
    CHINA_D : {
        id        : "CHINA_D",
        attack    : ChinaDAttack,
    },
    GREEK : {
        id        : 'GREEK',
        newItem   : GreekSkill,
        preSet    : GreekSetting,
    },
    HEART_QUEEN : {
        id        : 'HEART_QUEEN',
        newItem   : GreekSkill,
        preSet    : HeartQueenSetting,
    },
    BABYLON : {
        id        : 'BABYLON',
        newItem   : BabylonSkill,
        attack    : BabylonAttack,
        preSet    : BabylonSetting,
    },
    DARK_LUCIFER : {
        id        : 'DARK_LUCIFER',
        newItem   : BabylonSkill,
        attack    : DarkLuciferAttack,
        preSet    : DarkLuciferSetting,        
    },
    COUPLE_F : {
        id        : 'COUPLE_F',
        end       : CoupleEndSkill,
        preSet    : CoupleSetting,
    },
    COUPLE_P : {
        id        : 'COUPLE_P',
        end       : CoupleEndSkill,
        preSet    : CoupleSetting,
    },
    SWORD_BROTHER : {
        id        : 'SWORD_BROTHER',
        attack    : SwordBrotherAttack,
        preSet    : noneSetting,
    },
};

//==============================================================
// Team Skill Database
//==============================================================
var TEAM_LEADER_SKILLS = {
    NONE : {
        id        : 'NONE',
    },
    GREEK : {
        id        : 'GREEK',
        newItem   : TeamGreekSkill,
        extraCombo: TeamGreekExtraCombo,
        extraReset: TeamGreekExtraComboReset,
        attack    : TeamGreekAttack,
        preSet    : TeamGreekSetting,
    },
    BABYLON : {
        id        : 'BABYLON',
        attack    : TeamBabylonAttack,
    },
    DARK_LUCIFER : {
        id        : 'DARK_LUCIFER',
        attack    : TeamDarkLuciferAttack,
    },
    COUPLE_FF : {
        id        : 'COUPLE_FF',
        attack    : TeamCoupleAttackFF,
    },
    COUPLE_PP : {
        id        : 'COUPLE_PP',
        attack    : TeamCoupleAttackPP,
    },
    COUPLE_FP : {
        id        : 'COUPLE_FP',
        attack    : TeamCoupleAttackFP,
    },
};

//==============================================================
// Wake Database
//==============================================================
var WAKES = {
    NONE : {
        id        : "NONE",
    },
    H_A_R_INCREASE : {
        id        : "H_A_R_INCREASE",
        preSet    : HealthAttackRecoveryIncrease,
        // wakeVar = "[+health,+attack,+recovery]"
    },
    DROP_INCREASE : {
        id        : "DROP_INCREASE",
        preSet    : DropIncrease,
        // wakeVar = color
    },
    STRAIGHT_ATTACK : {
        id        : "STRAIGHT_ATTACK",
        attack    : StraightAttack,
        // wakeVar = "[factor,straightSize]"
    },
    STRAIGHT_RECOVER : {
        id        : "STRAIGHT_RECOVER",
        recover   : StraightRecover,
        // wakeVar = "[factor,straightSize]"
    }
}

//==============================================================
// Character Database
//==============================================================
var CHARACTERS = {
    NONE : {
        id       : "NONE",      img      : "img/Material/00/w1-1.png",
        color    : "w",         type     : "MATERIAL",
        health   : 2600,        attack   : 100,         recovery : 100,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "NONE",      active   : 0,
    },
    CHINA_D : {
        id       : "CHINA_D",   img      : "img/Special/4/d5.png",
        color    : "d",         type     : "SPIRIT",
        health   : 2353,        attack   : 1407,        recovery : 786,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[0,0,50]", "[1.1,3]", "[0,100,0]", "[1.1,4]" ],
        leader   : "CHINA_D",     active   : 0,
    },
    GREEK_W : {
        id       : "GREEK_W",   img      : "img/Special/2/w3.png",
        color    : "w",         type     : "GOD",
        health   : 2927,        attack   : 1646,        recovery : 403,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,0,50]", "[1.1,4]", "[340,0,0]", "w" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_F : {
        id       : "GREEK_F",   img      : "img/Special/2/f3.png",
        color    : "f",         type     : "GOD",
        health   : 3080,        attack   : 1760,        recovery : 358,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "f" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_P : {
        id       : "GREEK_P",   img      : "img/Special/2/p3.png",
        color    : "p",         type     : "GOD",
        health   : 3385,        attack   : 1516,        recovery : 376,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "p" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_L : {
        id       : "GREEK_L",   img      : "img/Special/2/l3.png",
        color    : "l",         type     : "GOD",
        health   : 3049,        attack   : 1634,        recovery : 414,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "l" ],
        leader   : "GREEK",     active   : 0,
    },
    GREEK_D : {
        id       : "GREEK_D",   img      : "img/Special/2/d3.png",
        color    : "d",         type     : "GOD",
        health   : 2866,        attack   : 1810,        recovery : 373,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_ATTACK", "H_A_R_INCREASE", "DROP_INCREASE" ],
        wake_var : [ "[0,90,0]", "[1.1,4]", "[340,0,0]", "d" ],
        leader   : "GREEK",     active   : 0,
    },
    HEART_QUEEN : {
        id       : "HEART_QUEEN", img    : "img/Boss/1/f1-1.png",
        color    : "f",         type     : "HUMAN",
        health   : 1954,        attack   : 1392,        recovery : 431,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "HEART_QUEEN", active   : 0,
    },
    BABYLON_W : {
        id       : "BABYLON_W", img      : "img/Special/23/w2.png",
        color    : "w",         type     : "GOD",
        health   : 3011,        attack   : 1399,        recovery : 421,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_F : {
        id       : "BABYLON_F", img      : "img/Special/23/f2.png",
        color    : "f",         type     : "GOD",
        health   : 3167,        attack   : 1496,        recovery : 375,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_P : {
        id       : "BABYLON_P", img      : "img/Special/23/p2.png",
        color    : "p",         type     : "GOD",
        health   : 3481,        attack   : 1288,        recovery : 394,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_L : {
        id       : "BABYLON_L", img      : "img/Special/23/l2.png",
        color    : "l",         type     : "GOD",
        health   : 3136,        attack   : 1302,        recovery : 433,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",   active   : 0,
    },
    BABYLON_D : {
        id       : "BABYLON_D", img      : "img/Special/23/d2.png",
        color    : "d",         type     : "GOD",
        health   : 2948,        attack   : 1537,        recovery : 390,
        wake     : [ "NONE", "NONE", "NONE", "NONE" ],
        wake_var : [ 0, 0, 0, 0 ],
        leader   : "BABYLON",     active   : 0,
    },
    DARK_LUCIFER : {
        id       : "DARK_LUCIFER", img   : "img/Special/34/d1-2.png",
        color    : "d",         type     : "SPIRIT",
        health   : 2416,        attack   : 1485,        recovery : 601,
        wake     : [ "H_A_R_INCREASE", "STRAIGHT_RECOVER", "H_A_R_INCREASE", "STRAIGHT_ATTACK" ],
        wake_var : [ "[110,0,0]", "[1.1,4]", "[0,110,0]", "[1.1,4]" ],
        leader   : "DARK_LUCIFER", active   : 0,
    },
    COUPLE_F : {
        id       : "COUPLE_F",  img      : "img/Special/15/f3.png",
        color    : "f",         type     : "GOD",
        health   : 3102,        attack   : 1604,        recovery : 376,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "NONE" ],
        wake_var : [ "[0,90,0]", 0, "[340,0,0]", 0 ],
        leader   : "COUPLE_F",  active   : 0,
    },
    COUPLE_P : {
        id       : "COUPLE_P",  img      : "img/Special/15/p3.png",
        color    : "p",         type     : "HUMAN",
        health   : 3132,        attack   : 1372,        recovery : 384,
        wake     : [ "H_A_R_INCREASE", "NONE", "H_A_R_INCREASE", "STRAIGHT_ATTACK"],
        wake_var : [ "[0,0,50]", 0, "[0,120,0]", "[1.1,4]" ],
        leader   : "COUPLE_P",  active   : 0,
    },
    SWORD_BROTHER : {
        id       : "SWORD_BROTHER", img  : "img/Special/21/d2-2.png",
        color    : "d",         type     : "HUMAN",
        health   : 2393,        attack   : 1560,        recovery : 431,
        wake     : [ "H_A_R_INCREASE", "NONE", "DROP_INCREASE", "NONE" ],
        wake_var : [ "[150,120,0]", 0, "d", 0 ],
        leader   : "SWORD_BROTHER",  active   : 0,
    },
};

function NewCharacter( id ){
    return {
        id       : id,
        img      : CHARACTERS[id]["img"],
        color    : CHARACTERS[id]["color"],
        type     : CHARACTERS[id]["type"],
        health   : CHARACTERS[id]["health"],
        attack   : CHARACTERS[id]["attack"],
        recovery : CHARACTERS[id]["recovery"],
        wake     : [
            CHARACTERS[id]["wake"][0],
            CHARACTERS[id]["wake"][1],
            CHARACTERS[id]["wake"][2],
            CHARACTERS[id]["wake"][3]
        ],
        wake_var : [
            CHARACTERS[id]["wake_var"][0],
            CHARACTERS[id]["wake_var"][1],
            CHARACTERS[id]["wake_var"][2],
            CHARACTERS[id]["wake_var"][3]
        ],
        leader   : CHARACTERS[id]["leader"],
        active   : CHARACTERS[id]["active"],
    };
}