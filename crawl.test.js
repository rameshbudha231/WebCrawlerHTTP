

const { normalizeURL } = require("./crawl");

const { test, expect } = require("@jest/globals");

test("normalizeURL, strip protocol", () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);

    const expected = 'blog.boot.dev/path';
    
    expect(actual).toEqual(expected);
});


test('nomalizeURgL strip, trailing slash',()=>{
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);
})

test('normalizeURL, capitals', () => {
    const input = 'https:/BLOG.boot.dev/path'
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected);
})