/*
  IN: two version numbers (strs)
  OUT: 1, -1, or 0; 1 if n1 greater, -1 if not, 0 if eq

  DATA: strs, arrs, nums
  ALGO: split strs on periods
        sort of these arrs, iterate length times of shortest array
        compare by index
        return -1 if, break
        return 1 if, break
        else continue iterating
        
        return 0

*/

function compareVersions(ver1, ver2) {
  ver1 = ver1.split('.');
  ver2 = ver2.split('.');
  // let shortest = ver1.length <= ver2 ? ver1 : ver2;
  let [shortest, longest] = [ver1, ver2].sort((a, b) => a.length - b.length);

  for (let i = 0; i < shortest.length; i += 1) {
    if (ver1[i] > ver2[i]) {
      return 1;
    } else if (ver2[i] > ver1[i]) {
      return -1;
    }
  }

  if (Number(longest.slice(shortest.length).join('')) > 0) {
    return longest === ver1 ? 1 : -1;
  }

  return 0;
}

compareVersions('1', '2')