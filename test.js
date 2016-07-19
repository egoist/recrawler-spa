import test from 'ava'
import nightmare from './'

test('main', async t => {
  const $ = await nightmare('http://output.jsbin.com/hawano')
  t.is($('#title').text(), 'hello')
})
