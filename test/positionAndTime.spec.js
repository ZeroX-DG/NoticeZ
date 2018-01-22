import test from 'ava';
import NoticeZ from '../dist/NoticeZ.min.js'
import browserEnv from 'browser-env';

test.beforeEach(t => {
  browserEnv(['window', 'document']);
});

test('Display at bottom right by default', t => {
	let noti = NoticeZ('default noti', 'hi');
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');
	t.is(noti, noti_in_browser);
});

test('Display at bottom right', t => {
	let noti = NoticeZ('hello', 'hi', {
    position: 'bottom right'
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.right');

	t.is(noti, noti_in_browser);
});

test('Display at bottom left', t => {
	let noti = NoticeZ('hello', 'hi', {
    position: 'bottom left'
  });
  let noti_in_browser = document.querySelector('.NoticeZ.bottom.left');

	t.is(noti, noti_in_browser);
});

test('Display at top right', t => {
	let noti = NoticeZ('hello', 'hi', {
    position: 'top right'
  });
  let noti_in_browser = document.querySelector('.NoticeZ.top.right');

	t.is(noti, noti_in_browser);
});

test('Display at top left', t => {
	let noti = NoticeZ('hello', 'hi', {
    position: 'top left'
  });
  let noti_in_browser = document.querySelector('.NoticeZ.top.left');

	t.is(noti, noti_in_browser);
});

<<<<<<< HEAD
=======

>>>>>>> c6777b3b7d363eda654da7dd67d2079e76a88294
test.cb('Disappeared in 2 millisecond', t => {
	let noti = NoticeZ('hello', 'hi', {
    position: 'top left',
    time: 2
  });
  
  setTimeout(() => {
    let noti_in_browser = document.querySelector('.NoticeZ.top.left');
    let is_noti_in_browser = noti_in_browser !== null;
    t.false(is_noti_in_browser);
    t.end();
  }, 3);
});
