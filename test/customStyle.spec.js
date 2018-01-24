import test from 'ava';
import NoticeZ from '../src/NoticeZ';
import browserEnv from 'browser-env';
import {rgbToHex} from './helpers/test-utility';

test.beforeEach(t => {
  browserEnv(['window', 'document']);
});

test("custom background and text color", t => {
  let customBackground = '#282828';
  let customTextColor = '#f7f7f7';

  let noti = NoticeZ('custom noti', 'hi', {
    background: customBackground,
    textColor: customTextColor
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
  t.is(rgbToHex(noti.style.background), customBackground);
  t.is(rgbToHex(noti_in_browser.style.background), customBackground);
  t.is(rgbToHex(noti.style.color), customTextColor);
  t.is(rgbToHex(noti_in_browser.style.color), customTextColor);
});

test("custom width and height", t => {
  let customHeight = 500;
  let customWidth = 700;

  let noti = NoticeZ('custom noti', 'hi', {
    width: customWidth,
    height: customHeight
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
	t.is(noti.style.width, customWidth + 'px');
  t.is(noti_in_browser.style.width, customWidth + 'px');
  t.is(noti.style.height, customHeight + 'px');
  t.is(noti_in_browser.style.height, customHeight + 'px');
});

test("custom roundness", t => {
  let customRoundness = 10;

  let noti = NoticeZ('custom noti', 'hi', {
    roundness: customRoundness
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
	t.is(noti.style.borderRadius, customRoundness + 'px');
  t.is(noti_in_browser.style.borderRadius, customRoundness + 'px');
  t.is(noti.style.borderRadius, customRoundness + 'px');
  t.is(noti_in_browser.style.borderRadius, customRoundness + 'px');
});