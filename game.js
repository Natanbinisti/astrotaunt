kaboom({
    global: true,
    fullscreen:true,
    scale: 2,
    clearColor: [0, 0, 0, 1],
})

// ########################### SPRITE ################################

loadRoot('https://i.imgur.com/')
loadSprite('mario','wunHyEq.png')
loadSprite('block','M6rwarW.png')
loadSprite('gun', '12IgStq.png')

// NATAN

loadSprite('astro', 'Q0FRlty.png')
loadSprite('battery', 'bOX5EXQ.png')
loadSprite('beam', 'fUwX4Jc.png')
loadSprite('beamsocket', '8cT5Yhy.png')
loadSprite('button', 'ThnSicB.png')
loadSprite('crate', 'Uz51WxL.png')
loadSprite('crate2', 'UPq5A74.png')
loadSprite('droplets', 'r13H16o.png')
loadSprite('dust', 'P0CwElc.png')
loadSprite('editorblock', '8cM0Be2.png')
loadSprite('explosion', 'NTmk76G.png')
loadSprite('explosion2', 'lOrfZSj.png')
loadSprite('jet', 'vaegfFS.png')
loadSprite('jet2', 'qtajq2q.png')
loadSprite('jet3', 'jtSXoc2.png')
loadSprite('messagebox', 'gUvvVXW.png')
loadSprite('pit', 'DFAfOnt.png')
loadSprite('pod', 'fnH45mO.png')
loadSprite('pod1', 'ylskanF.png')
loadSprite('portrait', 'gXUjnJr.png')
loadSprite('powerlight', 'uq3DEGN.png')
loadSprite('rocks', 'QzTqlac.png')
loadSprite('shipbits', 'oD1VIw6.png')
loadSprite('smoke', 'sjIQbV0.png')
loadSprite('socket', 'RhSljhH.png')
loadSprite('thinfont', 'eSsbWN1.png')
loadSprite('tiles', 'd87auk2.png')
loadSprite('timerswitch', 'UGMGRMu.png')

// TILES
loadSpriteAtlas('d87auk2.png', {
    'tile':{ x: 0, y: 0, width: 720, height: 720, sliceX: 20, sliceY: 20,
    anims: {
        'fond-bleu': 0,
        'fond-bleu-1': 1,
        'fond-bleu-2': 2,
        'fond-bleu-3': 3,
        'fond-bleu-4': 4,
        'fond-bleu-5': 5,
        'fond-bleu-6': 6,
        'fond-bleu-7': 7,
        'fond-bleu-8': 8,
        'fond-bleu-9': 9,
        'fond-bleu-10': 10,

        'deco-bleu-11': 11,
        'deco-bleu-12': 12,
        'deco-bleu-13': 13,
        'deco-bleu-14': 14,
        'deco-bleu-15': 15,
        'deco-bleu-16': 16,
        'deco-bleu-17': 17,
        'deco-bleu-18': 18,
        'deco-bleu-19': 19,

        'fond-bleu-20':20,
        'fond-bleu-21':21,
        'fond-bleu-22':22,
        'fond-bleu-23':23,
        'fond-bleu-24':24,
        'fond-bleu-25':25,
        'fond-bleu-26':26,
        'fond-bleu-27':27,
        'fond-bleu-28':28,
        'fond-bleu-29':29,
        'fond-bleu-30':30,
        'fond-bleu-31':31,

        'deco-bleu-32':33,
        'deco-bleu-33':34,
        'deco-bleu-34':35,
        'deco-bleu-35':36,
        'deco-bleu-36':37,
        'deco-bleu-37':38,
        'deco-bleu-38':39,

        'fond-bleu-39':40,
        'fond-bleu-40':41,
        'fond-bleu-41':42,
        'fond-bleu-42':43,
        'fond-bleu-43':44,
        'fond-bleu-44':45,

        'deco-bleu-45':52,
        'deco-bleu-46':53,
        'deco-bleu-47':54,
        'deco-bleu-48':55,
        'deco-bleu-49':56,
        'deco-bleu-50':57,
        'deco-bleu-51':58,
        'deco-bleu-52':59,



        'fond-orange': 60,
        'fond-orange-1': 61,
        'fond-orange-2': 62,
        'fond-orange-3': 63,
        'fond-orange-4': 64,
        'fond-orange-5': 65,
        'fond-orange-6': 66,
        'fond-orange-7': 67,
        'fond-orange-8': 68,
        'fond-orange-9': 69,
        'fond-orange-10': 70,

        'deco-orange-11': 71,
        'deco-orange-12': 72,
        'deco-orange-13': 73,
        'deco-orange-14': 74,
        'deco-orange-15': 75,
        'deco-orange-16': 76,
        'deco-orange-17': 77,
        'deco-orange-18': 78,
        'deco-orange-19': 79,

        'fond-orange-20':80,
        'fond-orange-21':81,
        'fond-orange-22':82,
        'fond-orange-23':83,
        'fond-orange-24':84,
        'fond-orange-25':85,
        'fond-orange-26':86,
        'fond-orange-27':87,
        'fond-orange-28':88,
        'fond-orange-29':89,
        'fond-orange-30':90,
        'fond-orange-31':91,

        'deco-orange-32':93,
        'deco-orange-33':94,
        'deco-orange-34':95,
        'deco-orange-35':96,
        'deco-orange-36':97,
        'deco-orange-37':98,
        'deco-orange-38':99,

        'fond-orange-39':100,
        'fond-orange-40':101,
        'fond-orange-41':102,
        'fond-orange-42':103,
        'fond-orange-43':104,
        'fond-orange-44':105,

        'deco-orange-45':112,
        'deco-orange-46':113,
        'deco-orange-47':114,
        'deco-orange-48':115,
        'deco-orange-49':116,
        'deco-orange-50':117,
        'deco-orange-51':118,
        'deco-orange-52':119,


        'fond-vert': 120,
        'fond-vert-1': 121,
        'fond-vert-2': 122,
        'fond-vert-3': 123,
        'fond-vert-4': 124,
        'fond-vert-5': 125,
        'fond-vert-6': 126,
        'fond-vert-7': 127,
        'fond-vert-8': 128,
        'fond-vert-9': 129,
        'fond-vert-10': 130,

        'deco-vert-11': 131,
        'deco-vert-12': 132,
        'deco-vert-13': 133,
        'deco-vert-14': 134,
        'deco-vert-15': 135,
        'deco-vert-16': 136,
        'deco-vert-17': 137,
        'deco-vert-18': 138,
        'deco-vert-19': 139,

        'fond-vert-20':140,
        'fond-vert-21':141,
        'fond-vert-22':142,
        'fond-vert-23':143,
        'fond-vert-24':144,
        'fond-vert-25':145,
        'fond-vert-26':146,
        'fond-vert-27':147,
        'fond-vert-28':148,
        'fond-vert-29':149,
        'fond-vert-30':150,
        'fond-vert-31':151,

        'deco-vert-32':153,
        'deco-vert-33':154,
        'deco-vert-34':155,
        'deco-vert-35':156,
        'deco-vert-36':157,
        'deco-vert-37':158,
        'deco-vert-38':159,

        'fond-vert-39':160,
        'fond-vert-40':161,
        'fond-vert-41':162,
        'fond-vert-42':163,
        'fond-vert-43':164,
        'fond-vert-44':165,

        'deco-vert-45':172,
        'deco-vert-46':173,
        'deco-vert-47':174,
        'deco-vert-48':175,
        'deco-vert-49':176,
        'deco-vert-50':177,
        'deco-vert-51':178,
        'deco-vert-52':179,


        'deco-metalique-bleu': 180,
        'deco-metalique-bleu-1': 181,
        'deco-metalique-bleu-2': 182,
        'deco-metalique-bleu-3': 183,
        'deco-metalique-bleu-4': 184,
        'deco-metalique-bleu-5': 185,
        'deco-metalique-bleu-6': 186,

        'deco-metalique-orange': 200,
        'deco-metalique-orange-1': 201,
        'deco-metalique-orange-2': 202,
        'deco-metalique-orange-3': 203,
        'deco-metalique-orange-4': 204,
        'deco-metalique-orange-5': 205,
        'deco-metalique-orange-6': 206,

        'deco-metalique-vert': 220,
        'deco-metalique-vert-1': 221,
        'deco-metalique-vert-2': 222,
        'deco-metalique-vert-3': 223,
        'deco-metalique-vert-4': 224,
        'deco-metalique-vert-5': 225,
        'deco-metalique-vert-6': 226,

        'deco-metalique-argent': 240,
        'deco-metalique-argent-1': 241,
        'deco-metalique-argent-2': 242,
        'deco-metalique-argent-3': 243,
        'deco-metalique-argent-4': 244,
        'deco-metalique-argent-5': 245,
        'deco-metalique-argent-6': 246,

        'fond-liane-hg': 260,
        'fond-liane-hm': 261,
        'fond-liane-hd': 262,
        'fond-liane-mg': 280,
        'fond-liane-mm': 281,
        'fond-liane-md': 282,
        'fond-liane-bg': 300,
        'fond-liane-bm': 300,
        'fond-liane-bd': 300,

        'deco-liane-hg': 263,
        'deco-liane-hm': 264,
        'deco-liane-hd': 265,
        'deco-liane-mg': 283,
        'deco-liane-mm': 284,
        'deco-liane-md': 285,
        'deco-liane-bg': 303,
        'deco-liane-bm': 304,
        'deco-liane-bd': 305,


    }
    }
})



// ########################### SCENE GAME ################################


scene("game", () => {
    layers(["bg", "obj", "ui"], "obj")

    // ------------------- MAP / CONFIG  ------------------

    const map = [
        '                                               ',
        '                                               ',
        '              1   1                            ',
        '               1  1                            ',
        '                                               ',
        '                      /         ^     ^        ',
        '===============   =============================',

    ]

    const levelCfg = {
        width: 20,
        height: 20,
        "=": [sprite('block'), solid()],
        "/": [sprite ('gun'), solid(), scale(0.02),'gun'],

        // NATAN

        '1': [sprite('fond-bleu')],
        '2': [sprite('fond-bleu-mieux')],
        'a': [sprite('astro'), solid()],
        'b': [sprite('battery'), solid()],
        'c': [sprite('beam'), solid()],
        'd': [sprite('beamsocket'), solid()],
        'e': [sprite('button'), solid()],
        'f': [sprite('crate'), solid()],
        'g': [sprite('crate2'), solid()],
        'h': [sprite('droplets'), solid()],
        'i': [sprite('dust'), solid()],
        'j': [sprite('editorblock'), solid()],
        'k': [sprite('explosion'), ],
        'l': [sprite('explosion2'), ],
        'm': [sprite('jet'), solid()],
        'n': [sprite('jet2'), solid()],
        'o': [sprite('jet3'), solid()],
        'p': [sprite('messagebox'), ],
        'q': [sprite('pit'), solid()],
        'r': [sprite('pod'), solid(), body()],
        's': [sprite('pod1'), solid(), body()],
        't': [sprite('portrait'), ],
        'u': [sprite('powerlight'), solid()],
        'v': [sprite('rocks'), solid()],
        'w': [sprite('shipbits'), solid()],
        'x': [sprite('smoke'), ],
        'y': [sprite('socket'), solid()],
        'z': [sprite('thinfont'), ],
        ':': [sprite('tiles'), solid()],
        '%': [sprite('timerswitch'), solid()],


    }

    const ENEMY_SPEED = 20

    action('dangerous', (d) => {
        d.move(-ENEMY_SPEED, 0)
    })

    const gameLevel = addLevel(map, levelCfg)

// ----------------------- PLAYER ----------------------------

    const MOVE_SPEED = 100
    let CURRENT_JUMP_FORCE = 330

    const player = add([
        sprite('astro'), solid(),
        pos(30, 0),
        body(),
        origin('bot')
    ])

    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
    })

    keyDown('right', () => {
        player.move(MOVE_SPEED, 0)
    })


    keyPress('space', () => {
        if (player.grounded()) {
            player.jump(CURRENT_JUMP_FORCE)
        }
    })

    // ----------------------- GUN -------------------------------


    player.collides('gun', (m) =>{
        destroy(m)
    })

    // ---------------- SCORE ---------------------

    const scoreLabel = add([
        text('0'),
        pos(30, 6),
        layer('ui'),
        {
            value:0,
        }
    ])

    // -------------------- TIMER --------------------

    const TIME_RESET= 0

    const timer = add([
        text('O'),
        pos(90,50),
        scale(2),
        layer('ui'),
        {
            time: TIME_RESET,
        },
    ])

    timer.action(()=>{
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
        // if (timer.time <= 0){
        //     go('lose')
        // }
    })




})

// ########################### SCENE LOSE ################################

scene('lose',()=>{

    add([
        text('you lose'),
        origin('center'),
        scale(10),
        pos(width()/2, height()/2)
    ])

})

start('game')






