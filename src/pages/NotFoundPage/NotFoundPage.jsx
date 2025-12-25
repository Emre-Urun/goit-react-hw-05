import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <p className={s.message}>Üzgünüz, aradığınız sayfa bulunamadı!</p>
      <p>Yanlış bir adrese girmiş olabilirsiniz.</p>

      <Link to="/" className={s.btn}>
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;
