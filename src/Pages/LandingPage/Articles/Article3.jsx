import React from "react";
import "./Articles.css";
import { Footer } from "../../../Components/Footer/Footer";

const Article3 = () => {
  return (
    <>
      <div className="article-container">
        <div className="article-title">
          <h1>Manfaat dan Jenis Probiotik untuk Mengatasi Diare</h1>
        </div>
        <div className="article-image">
          <img
            src="https://cms.sehatq.com/public/img/article_img/manfaat-dan-jenis-probiotik-untuk-mengatasi-diare-1639558252.jpg"
            alt=""
          />
        </div>
        <div className="article-content">
          <p>
            Mengonsumsi probiotik bisa mengobati diare jenis tertentu. Probiotik
            adalah kombinasi dari bakteri hidup yang bermanfaat dan/atau ragi yang
            secara alami hidup di dalam tubuh. Walaupun bakteri identik dengan
            kuman penyebab penyakit, sebenarnya ada juga bakteri menguntungkan
            yang bermanfaat bagi kesehatan tubuh.
          </p>
          <p>
            Mikroba yang masuk sebagai probiotik memiliki karakteristik khusus
            seperti bisa hidup terisolasi dari manusia, tetap bertahan hidup
            setelah melalui sistem pencernaan, aman dikonsumsi dan terbukti
            bermanfaat bagi manusia. Saat ini produk probiotik bisa didapatkan
            dari makanan seperti kimchi dan tempe, minuman seperti yogurt dan
            kombucha, hingga suplemen.
          </p>
          <p>Jenis probiotik yang baik untuk diare antara lain:</p>
          <h3>1. Bifidobacterium lactis</h3>
          <p>
            Probiotik dari strain B. lactis bermanfaat untuk menambah kekebalan
            sekaligus melindungi usus. Bakteri ini juga dapat secara signifikan
            mengurangi keparahan dan frekuensi diare pada anak-anak.
          </p>

          <h3>2. Lactobacillus rhamnosus GG (LGG)</h3>
          <p>
            Penelitian menunjukkan bahwa Lactobacillus rhamnosus adalah salah satu
            probiotik yang paling sering ditambahkan pada produk probiotik serta
            paling efektif untuk mengobati diare pada orang dewasa dan anak-anak.
          </p>
          <h3>3. Saccharomyces boulardii</h3>
          <p>
            Strain S. boulardii telah terbukti mengatasi diare terkait dengan
            penggunaan antibiotik dan infeksi. Ini adalah jenis ragi yang sangat
            bermanfaat dan umumnya digunakan dalam suplemen probiotik.
          </p>
          <h3>4. Lactobacillus casei</h3>
          <p>
            Lactobacillus casei adalah strain mikroba lainnya yang memiliki
            potensi digunakan sebagai probiotik untuk diare. Beberapa penelitian
            menunjukkan bahwa L. casei dapat mengobati diare terkait antibiotik
            dan diare infeksi pada anak-anak serta orang dewasa.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article3;
