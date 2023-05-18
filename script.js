let btn_nintendo = document.getElementById('nintendo');
let btn_sega = document.getElementById('sega');
let btn_sony = document.getElementById('sony');
let btn_microsoft = document.getElementById('microsoft');
let btn_wszystko = document.getElementById('wszystko');

btn_nintendo.addEventListener('click', pokaz_nintendo);
btn_sega.addEventListener('click', pokaz_sega);
btn_sony.addEventListener('click', pokaz_sony);
btn_microsoft.addEventListener('click', pokaz_microsoft);
btn_wszystko.addEventListener('click', pokaz_wszystko);

atari2600 = (i) => {
   
    let atari2600 = document.querySelector('.atari_2600_whole');
    let atari2600_fake = document.querySelector('.fake_atari_box');
    let atari2600_data = document.querySelector('.atari_date_box');

    switch(i) {
        case 0:
            atari2600.style.display = 'none';
            atari2600_fake.style.display = 'none';
            atari2600_data.style.display = 'none';
            break;
        case 1:
            atari2600.style.display = 'block';
            atari2600.style.marginTop = '0px'
            atari2600_fake.style.display = 'block';
            atari2600_data.style.display = 'flex';
            break;
        case 2:
            atari2600.style.display = 'block';
            atari2600_fake.style.display = 'block';
            atari2600_data.style.display = 'flex';
            break;
    }
}

nes = (i) => {
   
    let nes = document.querySelector('.nes_whole');
    let nes_fake = document.querySelector('.fake_nes_box');
    let nes_data = document.querySelector('.nes_date_box');

    switch(i) {
        case 0:
            nes.style.display = 'none';
            nes_fake.style.display = 'none';
            nes_data.style.display = 'none';
            break;
        case 1:
            nes.style.display = 'block';
            nes.style.marginTop = '0px'
            nes_fake.style.display = 'block';
            nes_data.style.display = 'flex';
            nes_data.style.marginTop = '-400px';
            break;
        case 2:
            nes.style.display = 'block';
            nes.style.marginTop = '40px'
            nes_fake.style.display = 'block';
            nes_data.style.display = 'flex';
            nes_data.style.marginTop = '0px';
            break;
    }
}

master = (i) => {
   
    let master = document.querySelector('.sega_master_system_whole');
    let master_fake = document.querySelector('.fake_master_box');
    let master_data = document.querySelector('.master_date_box');

    switch(i) {
        case 0:
            master.style.display = 'none';
            master_fake.style.display = 'none';
            master_data.style.display = 'none';
            break;
        case 1:
            master.style.display = 'block';
            master.style.marginTop = '0px'
            master_fake.style.display = 'block';
            master_data.style.display = 'flex';
            master_data.style.marginTop = '-930px';
            break;
        case 2:
            master.style.display = 'block';
            master.style.marginTop ='40px';
            master_fake.style.display = 'block';
            master_data.style.display = 'flex';
            master_data.style.marginTop = '0px';
            break;
    }
}

snes = (i) => {
   
    let snes = document.querySelector('.snes_whole');
    let snes_fake = document.querySelector('.fake_snes_box');
    let snes_data = document.querySelector('.snes_date_box');

    switch(i) {
        case 0:
            snes.style.display = 'none';
            snes_fake.style.display = 'none';
            snes_data.style.display = 'none';
            break;
        case 1:
            snes.style.display = 'block';
            snes.style.marginTop = '0px'
            snes_fake.style.display = 'block';
            snes_data.style.display = 'flex';
            snes_data.style.marginTop = '-905px';
            break;
        case 2:
            snes.style.display = 'block';
            snes.style.marginTop ='40px';
            snes_fake.style.display = 'block';
            snes_data.style.display = 'flex';
            snes_data.style.marginTop = '0px';
            break;
    }
}

playstation = (i) => {
   
    let playstation = document.querySelector('.ps1_whole');
    let playstation_fake = document.querySelector('.fake_ps1_box');
    let playstation_data = document.querySelector('.ps1_date_box');

    switch(i) {
        case 0:
            playstation.style.display = 'none';
            playstation_fake.style.display = 'none';
            playstation_data.style.display = 'none';
            break;
        case 1:
            playstation.style.display = 'block';
            playstation.style.marginTop = '0px'
            playstation_fake.style.display = 'block';
            playstation_data.style.display = 'flex';
            playstation_data.style.marginTop = '-1950px';
            break;
        case 2:
            playstation.style.display = 'block';
            playstation.style.marginTop ='40px';
            playstation_fake.style.display = 'block';
            playstation_data.style.display = 'flex';
            playstation_data.style.marginTop = '0px';
            break;
    }
}

saturn = (i) => {
   
    let saturn = document.querySelector('.sega_saturn_whole');
    let saturn_fake = document.querySelector('.fake_saturn_box');
    let saturn_data = document.querySelector('.saturn_date_box');

    switch(i) {
        case 0:
            saturn.style.display = 'none';
            saturn_fake.style.display = 'none';
            saturn_data.style.display = 'none';
            break;
        case 1:
            saturn.style.display = 'block';
            saturn.style.marginTop = '0px'
            saturn_fake.style.display = 'block';
            saturn_data.style.display = 'flex';
            saturn_data.style.marginTop = '-1955px';
            break;
        case 2:
            saturn.style.display = 'block';
            saturn.style.marginTop ='40px';
            saturn_fake.style.display = 'block';
            saturn_data.style.display = 'flex';
            saturn_data.style.marginTop = '0px';
            break;
    }
}

n64 = (i) => {
   
    let n64 = document.querySelector('.n64_whole');
    let n64_fake = document.querySelector('.fake_n64_box');
    let n64_data = document.querySelector('.n64_date_box');

    switch(i) {
        case 0:
            n64.style.display = 'none';
            n64_fake.style.display = 'none';
            n64_data.style.display = 'none';
            break;
        case 1:
            n64.style.display = 'block';
            n64.style.marginTop = '0px'
            n64_fake.style.display = 'block';
            n64_data.style.display = 'flex';
            n64_data.style.marginTop = '-1925px';
            break;
        case 2:
            n64.style.display = 'block';
            n64.style.marginTop ='40px';
            n64_fake.style.display = 'block';
            n64_data.style.display = 'flex';
            n64_data.style.marginTop = '0px';
            break;
    }
}

dreamcast = (i) => {
   
    let dreamcast = document.querySelector('.dreamcast_whole');
    let dreamcast_fake = document.querySelector('.fake_dreamcast_box');
    let dreamcast_data = document.querySelector('.dreamcast_date_box');

    switch(i) {
        case 0:
            dreamcast.style.display = 'none';
            dreamcast_fake.style.display = 'none';
            dreamcast_data.style.display = 'none';
            break;
        case 1:
            dreamcast.style.display = 'block';
            dreamcast.style.marginTop = '0px'
            dreamcast_fake.style.display = 'block';
            dreamcast_data.style.display = 'flex';
            dreamcast_data.style.marginTop = '-2455px';
            break;
        case 2:
            dreamcast.style.display = 'block';
            dreamcast.style.marginTop ='40px';
            dreamcast_fake.style.display = 'block';
            dreamcast_data.style.display = 'flex';
            dreamcast_data.style.marginTop = '0px';
            break;
    }
}

ps2 = (i) => {
   
    let ps2 = document.querySelector('.ps2_whole');
    let ps2_fake = document.querySelector('.fake_ps2_box');
    let ps2_data = document.querySelector('.ps2_date_box');

    switch(i) {
        case 0:
            ps2.style.display = 'none';
            ps2_fake.style.display = 'none';
            ps2_data.style.display = 'none';
            break;
        case 1:
            ps2.style.display = 'block';
            ps2.style.marginTop = '0px'
            ps2_fake.style.display = 'block';
            ps2_data.style.display = 'flex';
            ps2_data.style.marginTop = '-3360px';
            break;
        case 2:
            ps2.style.display = 'block';
            ps2.style.marginTop ='40px';
            ps2_fake.style.display = 'block';
            ps2_data.style.display = 'flex';
            ps2_data.style.marginTop = '0px';
            break;
    }
}

xbox = (i) => {
   
    let xbox = document.querySelector('.xbox_whole');
    let xbox_fake = document.querySelector('.fake_xbox_box');
    let xbox_data = document.querySelector('.xbox_date_box');

    switch(i) {
        case 0:
            xbox.style.display = 'none';
            xbox_fake.style.display = 'none';
            xbox_data.style.display = 'none';
            break;
        case 1:
            xbox.style.display = 'block';
            xbox.style.marginTop = '0px'
            xbox_fake.style.display = 'block';
            xbox_data.style.display = 'flex';
            xbox_data.style.marginTop = '-4365px';
            break;
        case 2:
            xbox.style.display = 'block';
            xbox.style.marginTop ='40px';
            xbox_fake.style.display = 'block';
            xbox_data.style.display = 'flex';
            xbox_data.style.marginTop = '0px';
            break;
    }
}

gamecube = (i) => {
   
    let gamecube = document.querySelector('.gamecube_whole');
    let gamecube_fake = document.querySelector('.fake_gamecube_box');
    let gamecube_data = document.querySelector('.gamecube_date_box');

    switch(i) {
        case 0:
            gamecube.style.display = 'none';
            gamecube_fake.style.display = 'none';
            gamecube_data.style.display = 'none';
            break;
        case 1:
            gamecube.style.display = 'block';
            gamecube.style.marginTop = '0px'
            gamecube_fake.style.display = 'block';
            gamecube_data.style.display = 'flex';
            gamecube_data.style.marginTop = '-3415px';
            break;
        case 2:
            gamecube.style.display = 'block';
            gamecube.style.marginTop ='40px';
            gamecube_fake.style.display = 'block';
            gamecube_data.style.display = 'flex';
            gamecube_data.style.marginTop = '0px';
            break;
    }
}

xbox360 = (i) => {
   
    let xbox360 = document.querySelector('.xbox360_whole');
    let xbox360_fake = document.querySelector('.fake_xbox360_box');
    let xbox360_data = document.querySelector('.xbox360_date_box');

    switch(i) {
        case 0:
            xbox360.style.display = 'none';
            xbox360_fake.style.display = 'none';
            xbox360_data.style.display = 'none';
            break;
        case 1:
            xbox360.style.display = 'block';
            xbox360.style.marginTop = '0px'
            xbox360_fake.style.display = 'block';
            xbox360_data.style.display = 'flex';
            xbox360_data.style.marginTop = '-4835px';
            break;
        case 2:
            xbox360.style.display = 'block';
            xbox360.style.marginTop ='40px';
            xbox360_fake.style.display = 'block';
            xbox360_data.style.display = 'flex';
            xbox360_data.style.marginTop = '0px';
            break;
    }
}

wii = (i) => {
   
    let wii = document.querySelector('.wii_whole');
    let wii_fake = document.querySelector('.fake_wii_box');
    let wii_data = document.querySelector('.wii_date_box');

    switch(i) {
        case 0:
            wii.style.display = 'none';
            wii_fake.style.display = 'none';
            wii_data.style.display = 'none';
            break;
        case 1:
            wii.style.display = 'flex';
            wii.style.marginTop = '0px'
            wii_fake.style.display = 'flex';
            wii_data.style.display = 'flex';
            wii_data.style.marginTop = '-4015px';
            break;
        case 2:
            wii.style.display = 'flex';
            wii.style.marginTop ='40px';
            wii_fake.style.display = 'flex';
            wii_data.style.display = 'flex';
            wii_data.style.marginTop = '0px';
            break;
    }
}

ps3 = (i) => {
   
    let ps3 = document.querySelector('.ps3_whole');
    let ps3_fake = document.querySelector('.fake_ps3_box');
    let ps3_data = document.querySelector('.ps3_date_box');

    switch(i) {
        case 0:
            ps3.style.display = 'none';
            ps3_fake.style.display = 'none';
            ps3_data.style.display = 'none';
            break;
        case 1:
            ps3.style.display = 'block';
            ps3.style.marginTop = '0px'
            ps3_fake.style.display = 'block';
            ps3_data.style.display = 'flex';
            ps3_data.style.marginTop = '-5635px';
            break;
        case 2:
            ps3.style.display = 'block';
            ps3.style.marginTop ='40px';
            ps3_fake.style.display = 'block';
            ps3_data.style.display = 'flex';
            ps3_data.style.marginTop = '40px';
            break;
    }
}

dlugosc_linii = (i) => {
    let line = document.querySelector('.line');
    let strzalka = document.querySelector('.end_date_box');

    switch(i) {
        case 0:
            line.style.height = '2650px';
            strzalka.style.marginTop = '-4520px';
            break;
        case 1:
            line.style.height = '1500px';
            strzalka.style.marginTop = '-5670px';
            break;
        case 2:
            line.style.height = '1580px';
            strzalka.style.marginTop = '-5580px';
            break;
        case 3:
            line.style.height = '1200px';
            strzalka.style.marginTop = '-5960px';
            break;
        case 4:
            line.style.height = '7200px';
            strzalka.style.marginTop = '40px';
            break;
    }
}

zmiana_koloru = (i) => {
    switch(i) {
        case 0:
            btn_nintendo.style.color = 'rgb(138, 138, 26)';
            btn_sega.style.color = 'black';
            btn_sony.style.color = 'black';
            btn_microsoft.style.color = 'black';
            btn_wszystko.style.color = 'black';
            break;
        case 1:
            btn_nintendo.style.color = 'black';
            btn_sega.style.color = 'rgb(138, 138, 26)';
            btn_sony.style.color = 'black';
            btn_microsoft.style.color = 'black';
            btn_wszystko.style.color = 'black';
            break;
        case 2:
            btn_nintendo.style.color = 'black';
            btn_sega.style.color = 'black';
            btn_sony.style.color = 'rgb(138, 138, 26)';
            btn_microsoft.style.color = 'black';
            btn_wszystko.style.color = 'black';
            break;
        case 3:
            btn_nintendo.style.color = 'black';
            btn_sega.style.color = 'black';
            btn_sony.style.color = 'black';
            btn_microsoft.style.color = 'rgb(138, 138, 26)';
            btn_wszystko.style.color = 'black';
            break;
        case 4:
            btn_nintendo.style.color = 'black';
            btn_sega.style.color = 'black';
            btn_sony.style.color = 'black';
            btn_microsoft.style.color = 'black';
            btn_wszystko.style.color = 'rgb(138, 138, 26)';
            break;
    }
}

function pokaz_nintendo() {
    atari2600(0);
    nes(1);
    master(0);
    snes(1);
    playstation(0);
    saturn(0);
    n64(1);
    dreamcast(0);
    ps2(0);
    xbox(0);
    gamecube(1);
    xbox360(0);
    wii(1);
    ps3(0);
    dlugosc_linii(0);
    zmiana_koloru(0);
}

function pokaz_sega() {
    atari2600(0);
    nes(0);
    master(1);
    snes(0);
    playstation(0);
    saturn(1);
    n64(0);
    dreamcast(1);
    ps2(0);
    xbox(0);
    gamecube(0);
    xbox360(0);
    wii(0);
    ps3(0);
    dlugosc_linii(1);
    zmiana_koloru(1);
}

function pokaz_sony() {
    atari2600(0);
    nes(0);
    master(0);
    snes(0);
    playstation(1);
    saturn(0);
    n64(0);
    dreamcast(0);
    ps2(1);
    xbox(0);
    gamecube(0);
    xbox360(0);
    wii(0);
    ps3(1);
    dlugosc_linii(2);
    zmiana_koloru(2);
}

function pokaz_microsoft() {
    atari2600(0);
    nes(0);
    master(0);
    snes(0);
    playstation(0);
    saturn(0);
    n64(0);
    dreamcast(0);
    ps2(0);
    xbox(1);
    gamecube(0);
    xbox360(1);
    wii(0);
    ps3(0);
    dlugosc_linii(3);
    zmiana_koloru(3);
}

function pokaz_wszystko() {
    atari2600(2);
    nes(2);
    master(2);
    snes(2);
    playstation(2);
    saturn(2);
    n64(2);
    dreamcast(2);
    ps2(2);
    xbox(2);
    gamecube(2);
    xbox360(2);
    wii(2);
    ps3(2);
    dlugosc_linii(4);
    zmiana_koloru(4);
}