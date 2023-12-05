function isUrl(url) {
  return !!url.match(/^https?:\/\/\S+\.com$/)
}

isUrl('https://launchschool.com');   // -> true
isUrl('http://example.com');         // -> true
isUrl('https://example.com hello');  // -> false
isUrl('   https://example.com');     // -> false