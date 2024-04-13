const solal = [
            "Jangan menganggap sholat sebagai beban. Karena ALLAH jutru menjadikan sholat bagi kita untuk meringankan beban.",
            "Ada dua hal yang jika keduanya baik pada diri seorang hamba, akan baik pula selainnya. Dua hal tersebut adalah sholatnya dan lisannya.",
            "Apa yang berharga dari agamamu jika sholatmu saja tidak berharga bagimu? Padahal yang akan ditanyakan pertama kali padamu di hari kiamat nanti adalah tentang sholat .",
            "Semua orang ingin Doa dan keinginannya dijawab tepat waktu, tetapi berapa banyak dari kita yang benar-benar sholat tepat waktu?",
            "Sholat adalah sebuah pertukaran yang menakjubkan. Kamu menyerahkan segala kegelisahan kepada ALLAH, dan ALLAH menyerahkan berkah-Nya kepadamu.",
            "Kalau hidupmu tidak jadikan sholat sebagai penghapus dosa, maka dosa akan menghapus sholat dalam hidupmu.",
            "Jika kamu ingin berkomunikasi dengan ALLAH, kerjakanlah sholat. Jika kamu ingin ALLAH berkomunikasi kepadamu, bacalah Al-Qur an.",
            "Jangan biarkan setan tertawa karena kita; subuh kesiangan, dhuhur kerepotan, ashar di perjalanan, maghrib kecapean, isya ketiduran.",
            "Sholat satu cara untuk menguji apakah hatimu mati ataukah hidup adalah dengan cara menanggapi panggilan sholat dan seberapa cepat kamu meresponsnya.",
            "Mengerjakan sholat itu ibarat kamu mengetuk pintu ALLAH, dan siapapun yang mengetuk pintu ALLAH, maka ALLAH akan membukakan pintu itu untuknya.",
            "Dengan melaksanakan sholat seseorang akan mendapatkan perlindungan ALLAH di Bumi.",
            "Jangan terburu-buru dalam mengerjakan sholat demi urusan lain, karena kamu sedang menghadap Allah yang berkuasa atas urusan apapun itu yang membuat kamu terburu-buru. ",
            "Jangan terburu-buru dalam mengerjakan sholat demi urusan lain, karena kamu sedang menghadap Allah yang berkuasa atas urusan apapun itu yang membuat kamu terburu-buru.",
            "Sholat adalah perkara pertama yang akan dimintai pertanggung jawaban kelak, maka jangan jadikan shalat sebagai hal terakhir yang kamu pikirkan.",
            "Dosa akan menjauhkanmu dari ALLAH, sementara sholat akan membawamu kembali kepada ALLAH",
            "Sholat adalah obat bagi jiwa yang hampa, pikiran yang bimbang, dan hati yang terluka.",
            "Sholat bukanlah untuk ALLAH, tapi untuk dirimu sendiri. Allah tidak membutuhkan kita, tapi kitalah yang membutuhkan Allah.",
            "Amalan yang akan dihisab pertama kali pada hari kiamat nanti adalah sholat. Apabila sholatnya baik, maka dia akan mendapatkan keberuntungan dan keselamatan. Apabila sholatnya rusak, maka dia akan menyesal dan merugi.",
            "Mengharapkan surga tapi mengabaikan sholat, itu ibarat menunggu kereta api tiba di bandara.",
            "Jagalah sholatmu. Karena ketika kamu kehilangannya, kamu akan kehilangan yang lainnya.",
            "Bayangkan apabila kamu tertidur tanpa mengerjakan sholat isya’, dan kemudian terbangun di kuburmu.",
            "Yang membedakan antara orang beriman dengan tidak beriman adalah meninggalkan sholat.",
            "Seandainya kamu tahu betapa dahsyatnya sujud, kamu pasti tidak akan pernah mengangkat kepalamu dari tanah.",
            "Jangan pernah melewatkan sholat. Karena ada jutaan manusia di alam kubur yang ingin dihidupkan kembali hanya untuk bersujud kepada ALLAH sekali lagi.",
            "Seorang sahabat pernah bertanya kepada Rasulullah SAW, Amalan apa yang paling baik di sisi ALLAH wahai Rasulullah? Beliau menjawab, Ialah sholat tepat pada waktunya.",
            "Jadikanlah sabar dan sholat sebagai penolongmu.",
            "Tidak ada islam bagi orang yang tidak melaksanakan sholat.",
            "Jika pekerjaan adalah alasan kenapa kamu melewatkan sholat, maka tidak akan ada keberkahan dari penghasilan yang kamu peroleh dan pekerjaan itu tidak layak bagimu. Karena sholat tetap harus diutamakan.",
            "Jika  kaki yang kamu miliki saja tidak bisa membawamu mendatangi sholat, lalu bagaimana kamu mengharapkan kakimu itu akan membawamu ke surga?",
            "Sungguh aneh, telinga kita begitu sensitif saat mendengar bunyi nada dering hp, tapi seolah tuli saat mendengar panggilan untuk sholat.",
            "Menegakkan sholat lima kali sehari tidak serta merta menjadikanmu orang yang saleh, itu baru menjadikanmu seorang Muslim. Jika kamu tidak mengerjakan sholat maka coba tanyakan pada dirimu sendiri, kamu itu apa?",
          ];
          function sholat() {
          const solatl = solal[Math.floor(Math.random() * solal.length)];
res = {}
res.creator = "RzkyFdlh"
res.result = solatl
return res
}

module.exports = { sholat }