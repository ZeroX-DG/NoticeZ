import test from 'ava';
import NoticeZ from '../src/NoticeZ';
import browserEnv from 'browser-env';


test.beforeEach(t => {
  browserEnv(['window', 'document']);
});

test('enable html in noti body', t => {
  let content = '<b>Important message</b>';
  let noti = NoticeZ('default noti', content);
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
  
  t.is(noti_in_browser.content, content);
});

test('enable html in noti title', t => {
  let title = '<b>Important message</b>';
  let noti = NoticeZ(title, 'content');
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
  
  t.is(noti_in_browser.title, title);
});