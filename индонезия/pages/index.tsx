import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Komunitas Esports Indonesia</title>
        <meta name="description" content="Portal komunitas esports Indonesia: acara, turnamen komunitas, artikel, dan newsletter." />
      </Head>
      <main className="container">
        <header className="hero">
          <h1>Komunitas Esports Indonesia</h1>
          <p className="subtitle">
            Berita, turnamen komunitas, dan konten edukasi untuk gamer Indonesia.
          </p>
          <a className="cta" href="#newsletter">Daftar Newsletter</a>
        </header>

        <section className="cards">
          <article className="card">
            <h2>Acara & Turnamen</h2>
            <p>
              Ikuti turnamen komunitas non-tunai setiap minggu. Raih pengalaman,
              bangun jaringan, dan temukan tim lokal.
            </p>
          </article>

          <article className="card">
            <h2>Artikel Terbaru</h2>
            <ul>
              <li>Strategi tim pemula untuk Mobile Legends</li>
              <li>Perangkat gaming terbaik untuk budget 2025</li>
              <li>Tips membangun tim esports lokal</li>
            </ul>
          </article>

          <article className="card">
            <h2>Komunitas & Dukungan</h2>
            <p>
              Bergabung ke Discord/Telegram kami untuk scrim, coaching, dan kolaborasi konten.
            </p>
            <p className="muted small">
              Catatan: Situs ini <strong>bukan</strong> platform perjudian. Tidak ada ajakan, tautan,
              atau fitur terkait taruhan/uang sungguhan.
            </p>
          </article>
        </section>

        <section id="newsletter" className="newsletter">
          <h3>Gabung Newsletter</h3>
          <p>Dapatkan info acara, konten, dan rilis komunitas setiap minggu.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="form">
            <input type="email" placeholder="Email Anda" aria-label="Email Anda" required />
            <button type="submit">Daftar</button>
          </form>
          <p className="small muted">
            Dengan mendaftar, Anda menyetujui Kebijakan Privasi dan S&K kami.
          </p>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Komunitas Esports Indonesia</p>
          <nav className="links">
            <a href="/privacy">Kebijakan Privasi</a>
            <a href="/tos">Syarat & Ketentuan</a>
            <a href="/responsible">Bermain Secara Bertanggung Jawab</a>
          </nav>
        </footer>
      </main>
    </>
  );
}
