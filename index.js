function tasKagitMakas(kullaniciSecimi) {
  const secimler = ['taş', 'kağıt', 'makas'];

  const bilgisayarSecimi =
    secimler[Math.floor(Math.random() * secimler.length)];

  if (kullaniciSecimi === bilgisayarSecimi) {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '.' +
      ' Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '.' +
      ' Beraberlik!'
    );
  }

  const winConditions = {
    taş: 'makas',
    kağıt: 'taş',
    makas: 'kağıt',
  };

  if (winConditions[kullaniciSecimi] === bilgisayarSecimi) {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '.' +
      ' Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '.' +
      ' Kazandın!'
    );
  } else {
    return (
      'Senin seçimin: ' +
      kullaniciSecimi +
      '.' +
      ' Bilgisayarın seçimi: ' +
      bilgisayarSecimi +
      '.' +
      ' Kaybettin!'
    );
  }
}

console.log(tasKagitMakas('makas'));
console.log(tasKagitMakas('kağıt'));
console.log(tasKagitMakas('taş'));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
