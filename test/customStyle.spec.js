import test from 'ava';
import NoticeZ from '../dist/NoticeZ.min.js'
import browserEnv from 'browser-env';

test.beforeEach(t => {
  browserEnv(['window', 'document']);
});

test("custom background", t => {
  let noti = NoticeZ('custom background noti', 'hi', {
    background: '#282828'
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
	t.is(noti.style.background, noti_in_browser.style.background);
});