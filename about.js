// Bu fonksiyon butona tıklanınca çalışır
function selamla() {
    // Kullanıcıdan adını ister
    let ad = prompt("Adını gir lütfen:");
  
    // Ad girilmişse karşılama mesajı göster
    if (ad) {
      alert("Merhaba, " + ad + "! Web geliştirme dersine hoş geldin!");
    } else {
      // Eğer boş bırakılırsa uyarı verir
      alert("Bir ad girmen gerekiyordu!");
    }
  }
  