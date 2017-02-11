import test from 'ava'
import fetch from './'

test('main', async t => {
  const $ = await fetch('http://output.jsbin.com/hawano')
  t.is($('#title').text(), 'hello')
})
