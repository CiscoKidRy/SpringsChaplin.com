// Created by iWeb 3.0.4 local-build-20140624

setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.rlhocking.com/SpringsChaplain/Album/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Album_files/AlbumMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
