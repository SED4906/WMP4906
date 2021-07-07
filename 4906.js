var slideout1Open = false;
var slideout2Open = false;
var mixMode = 3;

function TogglePlaylistSlideout() {
  if(!slideout1Open) {
    plsb.left = 0;
    plsb.width = 177;
    plv.enabled = true;
    plv.visible = true;
  }else{
    plsb.left = 160;
    plsb.width = 17;
    plv.enabled = false;
    plv.visible = false;
  }
  slideout1Open = !slideout1Open;
}

function ToggleVideoSlideout() {
  if(!slideout2Open) {
    vvsb.left = 431;
    vve.visible = true;
    remote.width = 254;
  }else{
    vvsb.left = 271;
    vve.visible = false;
    remote.width = 94;
  }
  slideout2Open = !slideout2Open;
}

function TogglePlayPause() {
  if(player.playState == 3) { player.controls.pause();
  }else{ player.controls.play();}
}

function ChangeMixMode() {
  mixMode = (mixMode + 1)%4;
  if(mixMode == 0) { player.settings.setMode('loop',false);player.settings.setMode('shuffle',false);mmb.upToolTip = "Loop off, Shuffle off";}
  else if(mixMode == 1){ player.settings.setMode('loop',true);player.settings.setMode('shuffle',false);mmb.upToolTip = "Loop on, Shuffle off";}
  else if(mixMode == 2){ player.settings.setMode('loop',false);player.settings.setMode('shuffle',true);mmb.upToolTip = "Loop off, Shuffle on";}
  else if(mixMode == 3){ player.settings.setMode('loop',true);player.settings.setMode('shuffle',true);mmb.upToolTip = "Loop on, Shuffle on";}
}
