# 🎬 Film Arama Uygulaması (Movie Search App) | goit-react-hw-05

Bu proje, **React** ve **React Router v6** kullanılarak geliştirilmiş modern bir film arama ve inceleme uygulamasıdır. Kullanıcılar popüler filmleri görebilir, isimle film arayabilir, oyuncu kadrosu ve incelemeler gibi detaylara ulaşabilirler.

Veri kaynağı olarak [The Movie Database (TMDB)](https://www.themoviedb.org/) API'si kullanılmıştır.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 🚀 Özellikler

- **Ana Sayfa:** Günün trend olan (popüler) filmlerinin listelenmesi.
- **Film Arama:** Anahtar kelime ile film arama özelliği.
- **Film Detayları:** Seçilen filmin afişi, özeti, puanı ve tür bilgileri.
- **İç İçe Rotalar (Nested Routes):**
  - **Oyuncular (Cast):** Filmin oyuncu kadrosunun listelenmesi.
  - **İncelemeler (Reviews):** Film hakkındaki kullanıcı yorumları.
- **Akıllı Navigasyon:** Sayfalar arası geçişte geçmişi hatırlama (Örn: Arama yaptıktan sonra detaya gidip "Geri Dön" dendiğinde arama sonucunun kaybolmaması).
- **Lazy Loading:** `React.lazy` ve `Suspense` kullanılarak kod bölme (code splitting) ve performans optimizasyonu.
- **Responsive Tasarım:** Netflix tarzı modern **Dark Mode** (Karanlık Tema) tasarımı.
- **Kullanıcı Deneyimi:** Yükleme animasyonları (Spinners) ve hata bildirimleri (Toast notifications).

## 🛠️ Kullanılan Teknolojiler ve Kütüphaneler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- **React:** UI kütüphanesi.
- **Vite:** Hızlı geliştirme ve build aracı.
- **React Router DOM:** Sayfa yönlendirmeleri ve navigasyon yönetimi.
- **Axios:** HTTP istekleri ve API yönetimi.
- **CSS Modules:** Bileşen tabanlı stil yönetimi.
- **React Hot Toast:** Kullanıcı hata ve bilgi bildirimleri için.
- **React Loader Spinner:** Yükleme durumları için modern animasyonlar.
- **CLSX:** Koşullu CSS sınıfı birleştirme işlemleri için.

## 📂 Proje Yapısı

Proje, sürdürülebilirlik ve okunabilirlik açısından modüler bir yapıda düzenlenmiştir:

```text
src/
├── components/          # Tekrar kullanılabilir bileşenler
│   ├── Loader/          # Yükleme animasyonu
│   ├── MovieCast/       # Oyuncu listesi bileşeni
│   ├── MovieList/       # Film kartları listesi
│   ├── MovieReviews/    # Yorumlar bileşeni
│   └── Navigation/      # Üst menü (Header)
├── pages/               # Sayfa bileşenleri (Lazy Loaded)
│   ├── HomePage/        # Ana sayfa
│   ├── MoviesPage/      # Arama sayfası
│   ├── MovieDetailsPage/# Detay sayfası
│   └── NotFoundPage/    # 404 Hata sayfası
├── fetchers/            # API isteklerinin yönetildiği katman (Axios)
├── App.jsx              # Ana yönlendirme (Routing) konfigürasyonu
└── main.jsx             # Giriş noktası

## 🚀 Kurulum ve Çalıştırma
1. Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:
```bash
git@github.com:Emre-Urun/goit-react-hw-05.git
```
2.Gerekli Paketleri Yükleyin:
```bash
npm install
```
3.API Anahtarını Ayarlayın:
```bash
Unsplash Developers sitesinden bir hesap oluşturun ve bir uygulama (Application) yaratın.
Size verilen Access Key'i kopyalayın.
fetchers.js dosyasındaki ilgili alana yapıştırın.
```
4.Uygulamayı Başlatın:
```bash
npm run dev
```
5.Tarayıcıda Açın: Terminalde verilen yerel sunucu adresine `(genellikle http://localhost:5173)` gidin.


## 🤝 Katkıda Bulunma

Bu proje açık kaynaklıdır ve geliştirmeye açıktır. Herhangi bir hata fark ederseniz veya özellik eklemek isterseniz:

1. Bu repoyu Fork'layın.
  
2. Yeni bir dal (branch) oluşturun (`git checkout -b ozellik/yeni-ozellik`).

3. Değişikliklerinizi yapın ve Commit'leyin (`git commit -m 'Yeni özellik eklendi'`).

4. Dalınızı Push'layın (`git push origin ozellik/yeni-ozellik`).

5. Bir Pull Request oluşturun.

## 👨‍💻 Geliştirici

Bu proje Emre Ürün tarafından React öğrenme sürecinin bir parçası olarak geliştirilmiştir.

Eğer bu projeyi beğendiyseniz ⭐️ vermeyi unutmayın!
