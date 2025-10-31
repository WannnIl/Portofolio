export const materi = [
  {
    title: 'Cypress',
    description: 'Cypress adalah framework modern untuk end-to-end testing yang membuat pengujian aplikasi web menjadi lebih mudah, andal, dan menyenangkan.',
    topics: [
      'Cypress Overview',
      'Getting Started',
      'Essential Core Commands',
      'Cypress vs Selenium',
      'Why Choose Cypress',
      'Sample Test Cases (saucedemo.com)'
    ],
    content: `
<h3>Ringkasan</h3>
<p>Testing web applications sering terasa tidak pasti dan rumit. <strong>Cypress</strong> hadir sebagai framework end-to-end modern yang menyederhanakan proses pengujian—membuatnya lebih andal dan (dapat jadi) menyenangkan.</p>

<h3>Cypress Overview</h3>
<p>Cypress adalah framework untuk end-to-end testing yang juga mendukung integration dan component testing. Ia dirancang untuk alur kerja modern dengan API yang intuitif dan test runner interaktif.</p>

<h3>Getting started</h3>
<p>Instalasi sangat mudah. Jalankan perintah berikut untuk menambahkan Cypress ke proyek:</p>
<pre class="materi-code"><code class="language-bash">npm install cypress --save-dev</code></pre>
<p>Untuk membuka Test Runner (UI interaktif):</p>
<pre class="materi-code"><code class="language-bash">npx cypress open</code></pre>

<h3>Essential core commands (contoh)</h3>
<ul>
  <li><code>cy.visit('https://my-app.com')</code> — navigasi ke URL.</li>
  <li><code>cy.get('button').click()</code> — cari dan klik tombol.</li>
  <li><code>cy.get('input[name="username"]')</code> — pilih input berdasarkan atribut name.</li>
  <li><code>cy.contains('Welcome')</code> — cari elemen yang berisi teks tertentu.</li>
  <li><code>cy.get('input[name="password"]').type('secret123')</code> — mengetik di field password.</li>
  <li><code>cy.url().should('include', '/dashboard')</code> — assert URL saat ini.</li>
</ul>

<h3>Perbandingan singkat: Cypress vs Selenium</h3>
<table>
  <thead>
    <tr><th>Feature</th><th>Cypress</th><th>Selenium</th></tr>
  </thead>
  <tbody>
    <tr><td>Architecture</td><td>Berjalan di dalam browser, satu run-loop dengan aplikasi</td><td>Berjalan di luar browser lewat WebDriver</td></tr>
    <tr><td>Language</td><td>JavaScript / TypeScript</td><td>Banyak (Java, Python, JS, dll.)</td></tr>
    <tr><td>Test Runner</td><td>Interaktif, real-time</td><td>Tidak built-in, butuh tools pihak ketiga</td></tr>
    <tr><td>Automatic waits</td><td>Ya (lebih sedikit flaky tests)</td><td>Sering butuh wait manual</td></tr>
    <tr><td>Debugging</td><td>Time-travel, snapshots, DevTools</td><td>DevTools biasa, logs</td></tr>
  </tbody>
</table>

<h3>Mengapa memilih Cypress?</h3>
<ul>
  <li>Arsitektur modern: akses DOM native dari dalam browser.</li>
  <li>Test Runner interaktif: tonton eksekusi test langkah demi langkah.</li>
  <li>Time travel debugging: lihat snapshot aplikasi setiap perintah.</li>
  <li>Automatic waits: kurangi flaky tests.</li>
</ul>

<h3>Contoh Test Cases (saucedemo.com)</h3>
<p>Berikut adalah beberapa skenario login yang umum dan contoh test menggunakan JavaScript/Cypress.</p>

<h4>TC01 — Successful Login</h4>
<pre class="materi-code"><code class="language-javascript">cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
cy.url().should('include', '/inventory.html')</code></pre>

<h4>TC02 — Incorrect Password</h4>
<pre class="materi-code"><code class="language-javascript">cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('wrong_password')
cy.get('[data-test="login-button"]').click()
cy.get('[data-test="error"]').should('contain', 'Username and password do not match')</code></pre>

<h4>TC03 — Empty Username</h4>
<pre class="materi-code"><code class="language-javascript">cy.visit('https://www.saucedemo.com/')
cy.get('[data-test="username"]').clear()
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()
cy.get('[data-test="error"]').should('contain', 'Username is required')</code></pre>

<h3>Kesimpulan</h3>
<p>Cypress memberikan pendekatan segar untuk testing aplikasi web. Dengan API yang mudah dipahami, test runner interaktif, dan fitur debugging yang kuat, pengujian jadi lebih produktif dan lebih sedikit flaky tests.</p>
`,
    resources: [
      { title: 'Cypress Documentation', url: 'https://www.cypress.io/' },
      { title: 'Cypress Examples', url: 'https://docs.cypress.io/examples' }
    ]
  },
  {
  title: 'Selenium WebDriver',
  description: 'Selenium WebDriver adalah framework open-source untuk mengotomasi browser dan melakukan pengujian aplikasi web menggunakan banyak bahasa pemrograman.',
  topics: [
    'What is Selenium WebDriver?',
    'Key Features',
    'How it works',
    'Getting started (Python)',
    'Example actions',
    'Live coding: SauceDemo'
  ],
  content: `
<h3>Apa itu Selenium WebDriver?</h3>
<p>Selenium WebDriver adalah framework open-source yang dirancang untuk mengotomasi browser. Ia memungkinkan penulisan skrip dalam bahasa populer (Python, Java, C#, JavaScript, dll.) untuk berinteraksi dengan aplikasi web seperti pengguna nyata.</p>

<h3>Key features</h3>
<ul>
  <li>Open-source & free</li>
  <li>Multi-language support (Python, Java, C#, Ruby...)</li>
  <li>Cross-browser compatibility (Chrome, Firefox, Edge, Safari)</li>
  <li>Multi-platform (Windows, macOS, Linux)</li>
  <li>Integrates with testing frameworks (Pytest, JUnit, TestNG)</li>
</ul>

<h3>How it works (ringkasan)</h3>
<p>Alur umumnya: tulis skrip → interaksi dengan WebDriver → WebDriver mengontrol browser (klik, ketik, navigasi) → validasi hasil.</p>

<h3>Getting started (Python)</h3>
<p>Instalasi sederhana:</p>
<pre class="materi-code"><code class="language-bash">pip install selenium</code></pre>
<p>Anda juga butuh browser driver (mis. ChromeDriver) dan menempatkannya di PATH.</p>

<h3>Contoh penggunaan & contoh kode (SauceDemo)</h3>
<h4>1) Successful login</h4>
<pre class="materi-code"><code class="language-python">from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

driver.find_element(By.ID, "user-name").send_keys("standard_user")
driver.find_element(By.ID, "password").send_keys("secret_sauce")
driver.find_element(By.ID, "login-button").click()

assert "inventory" in driver.current_url
driver.quit()</code></pre>

<h4>2) Failed login</h4>
<pre class="materi-code"><code class="language-python">driver.get("https://www.saucedemo.com/")
driver.find_element(By.ID, "user-name").send_keys("wrong_user")
driver.find_element(By.ID, "password").send_keys("wrong_password")
driver.find_element(By.ID, "login-button").click()

error = driver.find_element(By.CLASS_NAME, "error-message-container")
assert error.is_displayed()</code></pre>

<h4>3) Add product to cart</h4>
<pre class="materi-code"><code class="language-python"># asumsi sudah login
driver.get("https://www.saucedemo.com/")
driver.find_element(By.ID, "add-to-cart-sauce-labs-backpack").click()
cart_badge = driver.find_element(By.CLASS_NAME, "shopping_cart_badge")
assert cart_badge.text == "1"
driver.quit()</code></pre>

<h3>Tip singkat</h3>
<p>Ingat untuk selalu menutup browser (<code>driver.quit()</code>) dan gunakan mekanisme wait/explicit wait untuk elemen dinamis supaya test tidak flaky.</p>

<h3>Kesimpulan</h3>
<p>Selenium WebDriver adalah alat yang kuat untuk menghemat waktu pengujian berulang dan memberikan fleksibilitas lintas bahasa dan browser.</p>
`,
  resources: [
    { title: 'Selenium Official', url: 'https://www.selenium.dev/' },
    { title: 'ChromeDriver', url: 'https://chromedriver.chromium.org/' }
  ]
},
  {
    title: 'API Testing',
    description: 'API Testing adalah tahap krusial dalam pengembangan perangkat lunak modern untuk memastikan antarmuka pemrograman aplikasi berfungsi sesuai harapan, aman, dan berkinerja tinggi.',
    topics: [
      'Apa Itu API Testing?',
      'Pentingnya Melakukan API Testing',
      'Struktur Permintaan dan Respons API',
      'Alat Utama untuk API Testing',
      'Panduan Praktis: Postman dan SoapUI'
    ],
    content: `
<h3>Apa Itu API Testing?</h3>
<p>API Testing adalah proses validasi sistematis terhadap fungsionalitas, keandalan, kinerja, dan keamanan API. Tujuannya adalah memverifikasi bahwa endpoint API mengembalikan respons yang diharapkan untuk berbagai permintaan dan kondisi, termasuk kasus batas (edge cases) dan skenario kesalahan.</p>

<h3>Pentingnya Melakukan API Testing</h3>
<p>Mengapa kita harus repot-repot menguji API? Berikut manfaat utamanya:</p>
<ul>
  <li><strong>Verifikasi Fungsi:</strong> Memastikan setiap endpoint API menjalankan operasi yang dimaksudkan dan menyajikan data yang benar.</li>
  <li><strong>Deteksi Cepat Bug:</strong> Mengidentifikasi cacat dan ketidaksesuaian pada tahap awal, yang secara signifikan mengurangi biaya dan kerumitan perbaikan di kemudian hari.</li>
  <li><strong>Jaminan Keamanan:</strong> Mendeteksi kerentanan kritis, seperti otentikasi yang salah, celah otorisasi, dan kebocoran data.</li>
  <li><strong>Pengukuran Kinerja:</strong> Menilai waktu respons dan throughput untuk menjamin API memenuhi persyaratan kinerja.</li>
  <li><strong>Dukungan Otomasi:</strong> Memungkinkan pengujian regresi yang terotomasi, mendukung pipeline integrasi dan pengiriman berkelanjutan (CI/CD).</li>
  <li><strong>Kesiapan Integrasi:</strong> Memastikan API dapat dikonsumsi dengan andal oleh berbagai layanan dan aplikasi lain.</li>
</ul>

<h3>Struktur Permintaan dan Respons API</h3>
<p>API Testing berpusat pada dua komponen utama:</p>
<table>
  <thead>
    <tr><th>Komponen</th><th>Elemen Kunci</th><th>Keterangan</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Permintaan (Request)</td>
      <td>Metode HTTP (GET, POST, PUT, DELETE), URL Target, Header, dan Body (opsional).</td>
      <td>Mendefinisikan operasi yang harus dijalankan di server.</td>
    </tr>
    <tr>
      <td>Respons (Response)</td>
      <td>Kode Status (misalnya, 200 OK, 404 Not Found), Header, dan Body Respons (biasanya JSON atau XML).</td>
      <td>Balasan dari server yang berisi informasi tentang hasil permintaan.</td>
    </tr>
  </tbody>
</table>

<h3>Alat Utama untuk API Testing</h3>
<p>Dua alat yang paling sering digunakan dalam API Testing adalah:</p>
<ul>
  <li><strong>Postman:</strong> Alat serbaguna untuk membuat dan mengirim permintaan HTTP, mengelola lingkungan pengujian, mengotomatisasi script pengujian, dan menghasilkan dokumentasi API.</li>
  <li><strong>SoapUI:</strong> Mendukung protokol SOAP dan REST. Dirancang untuk pengujian fungsional, keamanan, dan load testing API, sangat sesuai untuk skenario pengujian yang kompleks.</li>
</ul>

<h3>Panduan Praktis: Menguji API dengan Postman dan SoapUI</h3>

<h4>Menggunakan Postman</h4>
<ol>
  <li><strong>Siapkan Permintaan Baru:</strong> Di Postman, buat permintaan baru dan simpan ke dalam collection.</li>
  <li><strong>Konfigurasi Detail:</strong> Pilih Metode HTTP yang sesuai dan masukkan URL endpoint. Tambahkan header yang diperlukan (misalnya, <code>Content-Type: application/json</code>).</li>
  <li><strong>Kirim dan Analisis:</strong> Klik "Send" untuk menjalankan permintaan. Periksa Kode Status, header, dan Body Respons untuk memverifikasi hasilnya.</li>
  <li><strong>Otomasi Pengujian:</strong> Gunakan tab "Tests" untuk menulis asersi (penegasan) JavaScript.</li>
</ol>

<h5>Contoh Script Pengujian Postman:</h5>
<pre class="materi-code"><code class="language-javascript">pm.test("Status code must be 200", function () {
  pm.response.to.have.status(200);
});</code></pre>

<p><strong>Simpan:</strong> Simpan permintaan dan script pengujian agar dapat digunakan kembali untuk pengujian regresi di masa mendatang.</p>

<h4>Menggunakan SoapUI</h4>
<ol>
  <li><strong>Buat Proyek Baru:</strong> Di SoapUI, buat New SOAP Project (untuk WSDL) atau New REST Project (untuk URL endpoint).</li>
  <li><strong>Tambahkan Permintaan:</strong> Konfigurasikan Metode HTTP, endpoint, header, dan body pada permintaan pengujian.</li>
  <li><strong>Jalankan:</strong> Klik tombol play untuk mengeksekusi permintaan.</li>
  <li><strong>Buat Test Cases (Test Cases):</strong> Tambahkan Assertions untuk memvalidasi data respons, kode status, atau kepatuhan skema (misalnya, Contains, XPath Match, JSONPath Match).</li>
  <li><strong>Otomasi:</strong> Atur permintaan ke dalam test suites dan jalankan secara terotomasi untuk pengujian regresi menyeluruh.</li>
</ol>

<h3>Kesimpulan</h3>
<p>Dengan menguasai langkah-langkah ini menggunakan Postman atau SoapUI, kita dapat memvalidasi API secara efisien, mengotomatisasi pengujian regresi, dan memastikan aplikasi yang dibuat sangat tangguh dan andal. API Testing yang menyeluruh adalah investasi penting untuk stabilitas dan keamanan perangkat lunak modern.</p>
`,
    resources: [
      { title: 'Postman Documentation', url: 'https://learning.postman.com/docs/' },
      { title: 'SoapUI Documentation', url: 'https://www.soapui.org/docs/' },
      { title: 'REST API Testing Guide', url: 'https://www.postman.com/api-platform/api-testing/' }
    ]
  },
  {
    title: 'Unit Testing',
    description: 'Unit Testing adalah praktik fundamental yang memungkinkan pengembang mendeteksi dan memperbaiki cacat di awal siklus pengembangan dengan menguji bagian terkecil dari kode secara sistematis.',
    topics: [
      'Definisi dan Tujuan Unit Testing',
      'Karakteristik Unit Testing yang Baik',
      'Mengapa Berinvestasi dalam Unit Testing?',
      'Framework Pengujian Populer',
      'Pola AAA (Arrange, Act, Assert)',
      'Contoh Praktis: Pytest & JUnit 5',
      'Praktik Terbaik'
    ],
    content: `
<h3>Definisi dan Tujuan Unit Testing</h3>
<p>Unit Testing melibatkan penulisan kode untuk menguji bagian-bagian terkecil yang dapat diuji dari suatu aplikasi—seperti fungsi, metode, atau kelas—secara terpisah (in isolation) dari sisa sistem. Tujuannya adalah memverifikasi bahwa setiap unit melakukan tugasnya sesuai spesifikasi, tanpa terpengaruh oleh status komponen lain. Unit Testing umumnya terotomasi dan dijalankan secara sering selama pengembangan.</p>

<h3>Karakteristik Unit Testing yang Baik</h3>
<p>Pengujian yang berkualitas harus memenuhi kriteria berikut:</p>
<ul>
  <li><strong>Terisolasi (Isolated):</strong> Tidak boleh bergantung pada sistem eksternal (seperti basis data atau jaringan) atau status yang dibagikan.</li>
  <li><strong>Dapat Diulang (Repeatable):</strong> Setiap kali dijalankan, hasil harus selalu sama.</li>
  <li><strong>Cepat (Fast):</strong> Harus dieksekusi dengan cepat untuk mendorong pengembang agar sering menjalankannya.</li>
  <li><strong>Jelas (Clear):</strong> Setiap pengujian sebaiknya berfokus pada satu perilaku atau persyaratan spesifik.</li>
</ul>

<h3>Mengapa Kita Harus Berinvestasi dalam Unit Testing?</h3>
<p>Berinvestasi dalam Unit Testing menawarkan manfaat signifikan:</p>
<ul>
  <li><strong>Keandalan (Reliability):</strong> Pengujian terotomasi memvalidasi bahwa perubahan kode tidak memperkenalkan regresi (kerusakan fungsi yang sudah ada).</li>
  <li><strong>Kemudahan Pemeliharaan (Maintainability):</strong> Merefaktor kode menjadi lebih aman karena pengujian memverifikasi perilaku yang sudah ada.</li>
  <li><strong>Deteksi Bug Dini:</strong> Masalah tertangkap saat pengembangannya, mengurangi biaya dan kompleksitas perbaikan.</li>
  <li><strong>Dokumentasi yang Hidup:</strong> Pengujian berfungsi sebagai spesifikasi yang dapat dieksekusi tentang bagaimana kode seharusnya bekerja.</li>
  <li><strong>Peningkatan Kepercayaan Diri:</strong> Dengan pengujian yang komprehensif, pengembang dapat membuat perubahan dengan keyakinan yang lebih besar.</li>
</ul>

<h3>Kerangka Kerja (Framework) Pengujian Populer</h3>
<p>Berikut adalah beberapa kerangka kerja Unit Testing yang banyak digunakan:</p>
<table>
  <thead>
    <tr><th>Bahasa</th><th>Framework</th><th>Fitur Utama</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Java</td>
      <td>JUnit 5</td>
      <td>Standar industri, menggunakan anotasi, terintegrasi dengan build tool dan IDE.</td>
    </tr>
    <tr>
      <td>Python</td>
      <td>Pytest</td>
      <td>Sintaks sederhana, fixtures yang kuat, dan laporan yang terperinci.</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Jest</td>
      <td>Digunakan luas, mocking bawaan, snapshot testing, dan pengaturan minimal.</td>
    </tr>
  </tbody>
</table>

<h3>Pola Atur, Lakukan, Tegaskan (AAA Pattern)</h3>
<p>Struktur yang diadopsi secara luas untuk menulis Unit Testing adalah pola <strong>Arrange, Act, Assert (AAA)</strong>:</p>
<ul>
  <li><strong>Arrange (Atur):</strong> Siapkan objek dan status yang diperlukan untuk pengujian.</li>
  <li><strong>Act (Lakukan):</strong> Eksekusi kode yang diuji.</li>
  <li><strong>Assert (Tegaskan):</strong> Verifikasi bahwa hasilnya sesuai dengan harapan.</li>
</ul>
<p>Pola ini meningkatkan keterbacaan dan memastikan pengujian terfokus dan sistematis.</p>

<h3>Contoh Praktis</h3>
<p>Berikut adalah demonstrasi Unit Testing menggunakan Pytest (Python) dan JUnit 5 (Java):</p>

<h4>Contoh Pytest (Python)</h4>
<p>Misalnya kita memiliki kelas <code>ShoppingCart</code> untuk mengelola item:</p>
<pre class="materi-code"><code class="language-python"># shopping_cart.py
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add(self, item):
        self.items.append(item)
    
    def total_items(self):
        return len(self.items)</code></pre>

<pre class="materi-code"><code class="language-python"># test_shopping_cart.py (The Test)
from shopping_cart import ShoppingCart

def test_add_item_increments_count():
    # Arrange
    cart = ShoppingCart()
    
    # Act
    cart.add("apple")
    
    # Assert
    assert cart.total_items() == 1</code></pre>
<p><strong>Catatan:</strong> Pytest mengenali fungsi yang diawali dengan <code>test_</code>. Asersi dilakukan dengan pernyataan <code>assert</code> biasa.</p>

<h4>Contoh JUnit 5 (Java)</h4>
<p>Pertimbangkan kelas sederhana <code>BankAccount</code>:</p>
<pre class="materi-code"><code class="language-java">// BankAccount.java
public class BankAccount {
    private int balance = 0;
    
    public void deposit(int amount) {
        balance += amount;
    }
    
    public int getBalance() {
        return balance;
    }
}</code></pre>

<pre class="materi-code"><code class="language-java">// BankAccountTest.java (The Test)
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class BankAccountTest {
    @Test
    void depositIncreasesBalance() {
        // Arrange
        BankAccount account = new BankAccount();
        
        // Act
        account.deposit(100);
        
        // Assert
        assertEquals(100, account.getBalance());
    }
}</code></pre>
<p><strong>Catatan:</strong> Anotasi <code>@Test</code> menandai metode sebagai Test Cases. <code>assertEquals</code> adalah metode penegasan bawaan untuk membandingkan nilai.</p>

<h3>Praktik Terbaik untuk Unit Testing yang Efektif</h3>
<p>Untuk memastikan Unit Testing bekerja secara maksimal:</p>
<ul>
  <li><strong>Uji Kasus Batas (Edge Cases):</strong> Sertakan pengujian untuk kondisi batas (misalnya, angka nol, nilai minimum/maksimum) dan input yang tidak valid.</li>
  <li><strong>Gunakan Mocks/Stubs:</strong> Ganti ketergantungan eksternal (seperti layanan atau database) dengan pengganti (test doubles) agar unit tetap terisolasi.</li>
  <li><strong>Pastikan Independensi:</strong> Hindari status bersama antar pengujian untuk mencegah efek samping yang tidak terduga.</li>
  <li><strong>Otomatisasi Eksekusi:</strong> Integrasikan pengujian ke dalam pipeline CI/CD untuk umpan balik berkelanjutan dan otomatis.</li>
</ul>

<h3>Kesimpulan</h3>
<p>Unit Testing lebih dari sekadar mencari bug—ini adalah cara untuk membangun perangkat lunak yang tangguh dan mudah dipelihara. Sedikit upaya dalam menulis pengujian hari ini dapat menghemat waktu debugging yang banyak di masa depan.</p>
`,
    resources: [
      { title: 'JUnit 5 Documentation', url: 'https://junit.org/junit5/docs/current/user-guide/' },
      { title: 'Pytest Documentation', url: 'https://docs.pytest.org/' },
      { title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started' },
      { title: 'Unit Testing Best Practices', url: 'https://martinfowler.com/bliki/UnitTest.html' }
    ]
  },
  {
    title: 'Test Scenarios, Test Cases, and Bug Reports',
    description: 'Tiga artefak utama dalam pengujian perangkat lunak yang efektif: Test Scenarios, Test Cases, dan Bug Report adalah fondasi dari proses penjaminan kualitas yang kuat.',
    topics: [
      'Memahami Perbedaan Inti',
      'Test Scenarios',
      'Test Cases',
      'Bug Reports',
      'Implementasi Konsep: Kalkulator BMI',
      'Praktik Terbaik untuk Meminimalkan Bug'
    ],
    content: `
<h3>Memahami Perbedaan Inti</h3>
<p>Pengujian perangkat lunak yang efektif adalah kunci untuk menghasilkan aplikasi yang andal. Tiga artefak utama—Test Scenarios, test cases, dan Bug Report—adalah fondasi dari proses penjaminan kualitas yang kuat.</p>

<h3>Test Scenarios (Test Scenarios)</h3>
<p>Test Scenarios adalah deskripsi tingkat tinggi tentang apa yang perlu diuji dari perspektif pengguna atau perilaku sistem. Fokusnya adalah pada cakupan fungsional, memastikan aplikasi memenuhi persyaratan bisnis secara luas.</p>

<h4>Kerangka Skenario:</h4>
<table>
  <thead>
    <tr><th>Bidang</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>ID Skenario</td>
      <td>Pengenal unik (misalnya, TS001).</td>
    </tr>
    <tr>
      <td>Deskripsi</td>
      <td>Tujuan pengujian tingkat tinggi (misalnya, "Memvalidasi proses checkout").</td>
    </tr>
    <tr>
      <td>Modul/Fitur</td>
      <td>Bagian aplikasi yang diuji.</td>
    </tr>
  </tbody>
</table>

<h3>Test Cases (Test Cases)</h3>
<p>Test Cases memecah skenario menjadi instruksi langkah demi langkah yang sangat spesifik. Setiap Test Cases mendefinisikan kondisi awal, tindakan yang harus dilakukan, dan hasil yang diharapkan, menjadikannya alat penting untuk memverifikasi fungsi yang benar dan mendeteksi regresi.</p>

<h4>Kerangka Test Cases:</h4>
<table>
  <thead>
    <tr><th>Bidang</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>ID Test Cases</td>
      <td>Pengenal unik (misalnya, TC001).</td>
    </tr>
    <tr>
      <td>Deskripsi</td>
      <td>Tujuan pengujian spesifik.</td>
    </tr>
    <tr>
      <td>Pra-kondisi</td>
      <td>Kondisi yang harus dipenuhi sebelum pengujian dimulai.</td>
    </tr>
    <tr>
      <td>Langkah-Langkah Uji</td>
      <td>Urutan tindakan yang akan dilakukan.</td>
    </tr>
    <tr>
      <td>Data Uji</td>
      <td>Data input spesifik yang digunakan.</td>
    </tr>
    <tr>
      <td>Hasil yang Diharapkan</td>
      <td>Perilaku atau output yang benar dari sistem.</td>
    </tr>
    <tr>
      <td>Hasil Aktual</td>
      <td>Perilaku yang benar-benar diamati.</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>Lulus (Pass) atau Gagal (Fail).</td>
    </tr>
  </tbody>
</table>

<h3>Bug Report (Bug Reports)</h3>
<p>Bug Report adalah dokumentasi terperinci mengenai cacat yang ditemukan selama pengujian. Laporan yang baik harus memuat informasi yang cukup agar pengembang dapat mereproduksi dan memperbaiki masalah secara efisien, mengurangi komunikasi bolak-balik.</p>

<h4>Kerangka Bug Report:</h4>
<table>
  <thead>
    <tr><th>Bidang</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Judul Bug</td>
      <td>Ringkasan singkat dan jelas tentang masalah.</td>
    </tr>
    <tr>
      <td>ID Bug</td>
      <td>Pengenal unik dalam sistem pelacakan (bug tracker).</td>
    </tr>
    <tr>
      <td>Langkah Reproduksi</td>
      <td>Daftar langkah yang tepat untuk melihat masalah kembali.</td>
    </tr>
    <tr>
      <td>Hasil Aktual</td>
      <td>Apa yang terjadi di aplikasi.</td>
    </tr>
    <tr>
      <td>Hasil yang Diharapkan</td>
      <td>Apa yang seharusnya terjadi di aplikasi.</td>
    </tr>
    <tr>
      <td>Tingkat Keparahan (Severity)</td>
      <td>Dampak masalah pada fungsionalitas (Kritis, Mayor, Minor).</td>
    </tr>
    <tr>
      <td>Prioritas (Priority)</td>
      <td>Urgensi perbaikan (P1 hingga P4).</td>
    </tr>
    <tr>
      <td>Versi/Build</td>
      <td>Nomor build aplikasi tempat bug ditemukan.</td>
    </tr>
    <tr>
      <td>Ditugaskan Kepada (Assignee)</td>
      <td>Pengembang yang bertanggung jawab.</td>
    </tr>
    <tr>
      <td>Pelapor (Reporter)</td>
      <td>Nama penguji.</td>
    </tr>
  </tbody>
</table>

<h3>Implementasi Konsep: Contoh Kalkulator BMI</h3>
<p>Mari kita terapkan konsep ini pada aplikasi Kalkulator BMI:</p>

<h4>Test Scenarios & Test Cases</h4>
<table>
  <thead>
    <tr>
      <th>Skenario (TS)</th>
      <th>Test Cases (TC)</th>
      <th>Deskripsi</th>
      <th>Data Uji</th>
      <th>Hasil yang Diharapkan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">TS001<br/>Validasi Input</td>
      <td>TC001</td>
      <td>Verifikasi slider Berat menerima input valid (30–200 kg).</td>
      <td>30, 100, 200</td>
      <td>Nilai slider diperbarui dengan benar, tidak ada eror.</td>
    </tr>
    <tr>
      <td>TC002</td>
      <td>Verifikasi slider Tinggi menerima input valid (100–250 cm).</td>
      <td>100, 175, 250</td>
      <td>Nilai slider diperbarui dengan benar, tidak ada eror.</td>
    </tr>
    <tr>
      <td rowspan="2">TS002<br/>Validasi Kalkulasi</td>
      <td>TC003</td>
      <td>Hitung BMI untuk input Kekurangan Berat Badan.</td>
      <td>Berat=45kg, Tinggi=170cm</td>
      <td>BMI dihitung dan diklasifikasikan sebagai Underweight.</td>
    </tr>
    <tr>
      <td>TC004</td>
      <td>Hitung BMI untuk input Normal.</td>
      <td>Berat=70kg, Tinggi=175cm</td>
      <td>BMI dihitung dan diklasifikasikan sebagai Normal.</td>
    </tr>
    <tr>
      <td rowspan="2">TS003<br/>Validasi Riwayat</td>
      <td>TC007</td>
      <td>Simpan riwayat BMI setelah perhitungan selesai.</td>
      <td>Selesai perhitungan, tekan 'Simpan'.</td>
      <td>Catatan BMI yang baru muncul di bagian Riwayat.</td>
    </tr>
    <tr>
      <td>TC008</td>
      <td>Ambil dan tampilkan riwayat BMI yang telah disimpan.</td>
      <td>Navigasi ke layar riwayat.</td>
      <td>Semua catatan yang tersimpan terdaftar dengan benar.</td>
    </tr>
  </tbody>
</table>

<h4>Contoh Bug Report Efektif</h4>
<p>Ketika ditemukan cacat, laporkan dengan presisi:</p>
<div style="background: #f5f5f5; color: #333; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #ddd;">
  <p style="color: #333;"><strong>Judul Bug:</strong> Aplikasi macet (crash) saat input Berat adalah nol (0 kg).</p>
  <p style="color: #333;"><strong>ID Bug:</strong> BUG-2025-001</p>
  <p style="color: #333;"><strong>Langkah Reproduksi:</strong></p>
  <ol style="color: #333;">
    <li>Buka aplikasi Kalkulator BMI (build 1.0.3).</li>
    <li>Pilih Berat: 0 kg.</li>
    <li>Pilih Tinggi: 170 cm.</li>
    <li>Tekan tombol 'Hitung BMI'.</li>
  </ol>
  <p style="color: #333;"><strong>Hasil Aktual:</strong> Aplikasi berhenti bekerja secara tak terduga (crashes).</p>
  <p style="color: #333;"><strong>Hasil yang Diharapkan:</strong> Aplikasi menampilkan pesan validasi eror: "Berat harus lebih besar dari 0 kg."</p>
  <p style="color: #333;"><strong>Tingkat Keparahan:</strong> Kritis (Critical)</p>
  <p style="color: #333;"><strong>Prioritas:</strong> P1 (Mendesak)</p>
  <p style="color: #333;"><strong>Versi Ditemukan:</strong> 1.0.3</p>
</div>

<h3>Praktik Terbaik untuk Meminimalkan Bug</h3>
<p>Mencegah bug lebih baik daripada memperbaikinya. Beberapa praktik terbaik meliputi:</p>
<ul>
  <li><strong>Pahami Persyaratan secara Mendalam:</strong> Klarifikasi ambiguitas bisnis sebelum pengujian dimulai.</li>
  <li><strong>Tulis Pengujian Unit Komprehensif:</strong> Pengujian terotomasi menangkap regresi pada tingkat kode yang paling dasar.</li>
  <li><strong>Lakukan Tinjauan Kode (Code Reviews):</strong> Tinjauan rekan kerja membantu mengidentifikasi potensi masalah logika atau edge cases.</li>
  <li><strong>Automasi Pengujian Regresi:</strong> Otomatisasi untuk tes yang berulang dan regresi demi efisiensi berkelanjutan.</li>
  <li><strong>Dorong Kolaborasi Tim:</strong> Komunikasi teratur antara penguji dan pengembang memastikan pemahaman yang selaras.</li>
</ul>

<h3>Kesimpulan</h3>
<p>Dengan mendefinisikan skenario secara sistematis, memerinci Test Cases, dan mendokumentasikan bug dengan jelas, tim dapat meningkatkan kualitas perangkat lunak secara signifikan. Pendekatan disiplin ini membangun aplikasi yang tangguh dan ramah pengguna.</p>
`,
    resources: [
      { title: 'Test Case Writing Guide', url: 'https://www.guru99.com/test-case.html' },
      { title: 'Bug Report Best Practices', url: 'https://www.atlassian.com/software/jira/guides/bugs' },
      { title: 'Software Testing Documentation', url: 'https://www.softwaretestinghelp.com/test-case-template-examples/' }
    ]
  },
  {
    title: 'Testing Plan',
    description: 'Testing Plan yang terstruktur adalah dokumen vital untuk merilis perangkat lunak yang andal, berfungsi sebagai pendekatan sistematis terhadap jaminan kualitas dengan mengikuti standar IEEE 829.',
    topics: [
      'Definisi dan Peran Utama Testing Plan',
      'Pengantar dan Identifikasi',
      'Cakupan dan Risiko',
      'Strategi Pengujian',
      'Kebutuhan dan Administrasi',
      '19 Komponen Penting (IEEE 829)',
      'Catatan Praktis untuk Implementasi'
    ],
    content: `
<h3>Definisi dan Peran Utama Testing Plan</h3>
<p>Testing Plan adalah dokumen formal yang mendefinisikan cakupan, strategi, sumber daya, dan jadwal untuk semua aktivitas pengujian. Dokumen ini menjawab pertanyaan-pertanyaan utama: Apa yang akan diuji, bagaimana pengujian akan dilakukan, siapa yang bertanggung jawab atas setiap tugas, dan kriteria apa yang menentukan keberhasilan atau kegagalan.</p>

<h4>Tujuan Utama Testing Plan:</h4>
<ul>
  <li>Mendeteksi cacat sedini mungkin.</li>
  <li>Meminimalkan risiko proyek.</li>
  <li>Mengoptimalkan alokasi sumber daya.</li>
  <li>Menyediakan ketertelusuran (traceability) untuk audit.</li>
</ul>

<h3>19 Komponen Penting dari Testing Plan (Berdasarkan IEEE 829)</h3>
<p>Standar IEEE 829 menyediakan struktur komprehensif untuk dokumentasi pengujian. Berikut adalah komponen-komponen utamanya, dengan fokus pada detail teknis dan kepraktisan:</p>

<h4>I. Pengantar dan Identifikasi</h4>
<table>
  <thead>
    <tr><th>Komponen</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Test Plan Identifier</strong></td>
      <td>Pemberian pengenal unik (misalnya, <code>ProjA-ModulB-V1.0-20251031</code>). Ini sangat penting untuk kontrol versi dan audit.</td>
    </tr>
    <tr>
      <td><strong>References</strong></td>
      <td>Daftar dokumen terkait yang harus disertakan, seperti spesifikasi persyaratan, dokumen desain, dan laporan pengujian sebelumnya. Pastikan semua hyperlink atau jalur file berfungsi.</td>
    </tr>
    <tr>
      <td><strong>Introduction</strong></td>
      <td>Ringkasan singkat mengenai tujuan, cakupan, dan asumsi utama dari rencana pengujian ini.</td>
    </tr>
  </tbody>
</table>

<h4>II. Cakupan dan Risiko</h4>
<table>
  <thead>
    <tr><th>Komponen</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Test Items</strong></td>
      <td>Komponen perangkat lunak spesifik yang akan diuji (misalnya, modul login, API tertentu). Sertakan nomor versi yang relevan.</td>
    </tr>
    <tr>
      <td><strong>Software Risk Issues</strong></td>
      <td>Identifikasi risiko yang diketahui dan potensi risiko (misalnya, modul yang tidak stabil, ketergantungan pihak ketiga). Sertakan strategi mitigasi untuk setiap risiko.</td>
    </tr>
    <tr>
      <td><strong>Features to be Tested</strong></td>
      <td>Daftar rinci fungsi, user stories, atau persyaratan yang masuk dalam cakupan. Petakan setiap fitur ke persyaratan aslinya.</td>
    </tr>
    <tr>
      <td><strong>Features Not to be Tested</strong></td>
      <td>Pernyataan eksplisit mengenai fitur yang dikecualikan dari siklus pengujian ini, beserta alasan pembenarannya (misalnya, usang, belum siap).</td>
    </tr>
  </tbody>
</table>

<h4>III. Strategi Pengujian</h4>
<table>
  <thead>
    <tr><th>Komponen</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Approach</strong></td>
      <td>Deskripsi strategi pengujian secara keseluruhan. Tentukan tingkatan pengujian (unit, integrasi, sistem, UAT), teknik yang digunakan (otomatis, manual, eksplorasi), dan alat yang akan dipakai (misalnya, Selenium, Postman). Jelaskan bagaimana semua ini selaras dengan tujuan proyek.</td>
    </tr>
    <tr>
      <td><strong>Item Pass/Fail Criteria</strong></td>
      <td>Kriteria objektif yang menentukan kapan suatu item pengujian dianggap berhasil atau gagal (misalnya, nol cacat kritis, waktu respons API di bawah 200ms). Termasuk penanganan pengujian yang flaky.</td>
    </tr>
    <tr>
      <td><strong>Suspension Criteria and Resumption Requirements</strong></td>
      <td>Syarat untuk menghentikan sementara pengujian (misalnya, kegagalan lingkungan kritis) dan syarat untuk melanjutkan (misalnya, lingkungan diperbaiki, cacat pemblokiran diatasi).</td>
    </tr>
  </tbody>
</table>

<h4>IV. Kebutuhan dan Administrasi</h4>
<table>
  <thead>
    <tr><th>Komponen</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Test Deliverables</strong></td>
      <td>Daftar semua artefak yang harus dihasilkan (rencana pengujian, kasus uji, laporan bug, log eksekusi, laporan ringkasan). Tentukan format dan lokasi penyimpanan.</td>
    </tr>
    <tr>
      <td><strong>Remaining Test Tasks</strong></td>
      <td>Catatan tugas pengujian yang masih harus diselesaikan (misalnya, menyiapkan data uji, menyelesaikan skrip otomatisasi).</td>
    </tr>
    <tr>
      <td><strong>Environmental Needs</strong></td>
      <td>Rincian kebutuhan teknis: hardware, OS, browser, konfigurasi jaringan, data uji. Otomatisasi penyediaan lingkungan sangat disarankan.</td>
    </tr>
    <tr>
      <td><strong>Staffing and Training Needs</strong></td>
      <td>Identifikasi personel yang dibutuhkan, peran mereka, dan kebutuhan pelatihan yang diperlukan untuk domain atau alat baru.</td>
    </tr>
    <tr>
      <td><strong>Responsibilities</strong></td>
      <td>Penetapan kepemilikan yang jelas untuk setiap aktivitas (desain uji, eksekusi, triage cacat, pelaporan).</td>
    </tr>
    <tr>
      <td><strong>Schedule</strong></td>
      <td>Garis waktu terperinci dengan milestone untuk perencanaan, eksekusi, dan siklus regresi. Beri jeda waktu untuk resolusi cacat.</td>
    </tr>
    <tr>
      <td><strong>Planning Risks and Contingencies</strong></td>
      <td>Daftar risiko yang berpotensi memengaruhi proses pengujian itu sendiri (misalnya, penundaan tim dev, kegagalan alat) dan rencana mitigasi (contingency plans).</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>Persyaratan persetujuan (sign-off) dari pemangku kepentingan pada setiap fase, termasuk kriteria untuk maju ke tahap berikutnya.</td>
    </tr>
    <tr>
      <td><strong>Glossary</strong></td>
      <td>Definisi istilah teknis, akronim, dan jargon khusus proyek untuk memastikan kejelasan.</td>
    </tr>
  </tbody>
</table>

<h3>Catatan Praktis untuk Implementasi</h3>
<ul>
  <li><strong>Pendekatan:</strong> Selalu selaraskan jenis pengujian dengan area risiko. Prioritaskan otomatisasi untuk regresi.</li>
  <li><strong>Kriteria:</strong> Tetapkan ambang batas yang jelas untuk tingkat keparahan cacat dan catat setiap pengecualian.</li>
  <li><strong>Lingkungan:</strong> Dokumentasikan langkah-langkah penyiapan lingkungan secara tepat, dan gunakan otomatisasi jika memungkinkan.</li>
  <li><strong>Jadwal:</strong> Sertakan waktu untuk pemeliharaan tes, penyiapan lingkungan, dan komunikasi tim.</li>
</ul>

<h3>Kesimpulan</h3>
<p>Testing Plan yang komprehensif adalah landasan kualitas. Dengan mengikuti kerangka terstruktur seperti IEEE 829, tim dapat memastikan cakupan yang menyeluruh, mengelola risiko, dan menghasilkan perangkat lunak yang andal. Dokumen ini haruslah ringkas, dapat ditindaklanjuti, dan mudah beradaptasi terhadap perubahan proyek.</p>
`,
    resources: [
      { title: 'IEEE 829 Standard', url: 'https://standards.ieee.org/standard/829-2008.html' },
      { title: 'Test Plan Template', url: 'https://www.softwaretestinghelp.com/test-plan-sample-softwaretesting-and-quality-assurance-templates/' },
      { title: 'Test Planning Best Practices', url: 'https://www.guru99.com/what-everybody-ought-to-know-about-test-planing.html' }
    ]
  },
  {
    title: 'UI/UX Testing',
    description: 'Pengujian UI/UX adalah fase krusial dalam pengembangan perangkat lunak yang menjamin aplikasi berfungsi sesuai niat dan memberikan pengalaman positif bagi pengguna.',
    topics: [
      'Perbedaan Inti: UI Testing vs. UX Testing',
      'Area Fokus UI Testing',
      'Area Fokus UX Testing',
      'Metode & Alat Pengujian',
      'Daftar Periksa Heuristik (Jakob Nielsen)'
    ],
    content: `
<h3>Perbedaan Inti: UI Testing vs. UX Testing</h3>
<p>Meskipun saling terkait, pengujian antarmuka pengguna (UI) dan pengalaman pengguna (UX) memiliki fokus yang berbeda:</p>
<table>
  <thead>
    <tr><th>Jenis Pengujian</th><th>Fokus Utama</th><th>Contoh Verifikasi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>UI Testing</strong></td>
      <td>Kebenaran Elemen Visual & Interaksi.</td>
      <td>Memastikan warna, ikon, ukuran tombol, dan tata letak sesuai dengan spesifikasi desain di berbagai perangkat dan browser.</td>
    </tr>
    <tr>
      <td><strong>UX Testing</strong></td>
      <td>Perjalanan Pengguna & Kepuasan Keseluruhan.</td>
      <td>Mengevaluasi apakah pengguna dapat menyelesaikan tujuan mereka secara efisien (misalnya, menyelesaikan proses checkout). Mengidentifikasi titik gesekan (friction points).</td>
    </tr>
  </tbody>
</table>

<h3>Area Fokus UI Testing</h3>
<p>Pengujian UI berpusat pada konsistensi visual dan perilaku interaktif:</p>

<h4>1. Konsistensi Visual</h4>
<p>Memastikan gaya (style), font, dan warna seragam di semua halaman.</p>
<ul>
  <li><strong>Alat:</strong> Visual regression tools seperti Percy atau Applitools membantu mendeteksi perubahan tampilan yang tidak disengaja.</li>
</ul>

<h4>2. Responsivitas</h4>
<p>Memvalidasi bahwa tata letak beradaptasi dengan baik di berbagai ukuran layar (desktop, tablet, mobile).</p>
<ul>
  <li><strong>Alat:</strong> BrowserStack dan LambdaTest untuk pengujian lintas resolusi.</li>
</ul>

<h4>3. Kompatibilitas</h4>
<p>Memastikan aplikasi berfungsi dengan benar di berbagai browser (Chrome, Firefox, Safari) dan sistem operasi.</p>

<h4>4. Elemen Interaktif</h4>
<p>Menguji tombol, tautan, dan formulir merespons dengan benar terhadap tindakan pengguna, termasuk status hover dan click.</p>

<h3>Area Fokus UX Testing</h3>
<p>Pengujian UX berfokus pada efisiensi dan kepuasan pengguna:</p>

<h4>1. Analisis Alur Kerja (Workflow)</h4>
<p>Memetakan dan menguji alur pengguna utama (misalnya, onboarding) dengan pengguna nyata untuk mengidentifikasi hambatan dan kebingungan.</p>

<h4>2. Kegunaan (Usability)</h4>
<p>Menilai seberapa mudah pengguna menyelesaikan tugas-tugas kunci.</p>
<ul>
  <li><strong>Metode:</strong> Sesi pengujian kegunaan (usability testing) dengan skenario dunia nyata.</li>
</ul>

<h4>3. Aksesibilitas (Accessibility)</h4>
<p>Memastikan aplikasi dapat digunakan oleh orang-orang dengan disabilitas. Verifikasi ini mencakup kontras warna, navigasi keyboard, dan kepatuhan terhadap pedoman WCAG.</p>

<h4>4. Penanganan Kesalahan</h4>
<p>Mengevaluasi bagaimana sistem mengkomunikasikan kesalahan kepada pengguna dan memandu mereka menuju solusi, meminimalkan frustrasi.</p>

<h3>Metode & Alat Pengujian</h3>
<p>Pengujian yang efektif menggabungkan berbagai pendekatan:</p>

<table>
  <thead>
    <tr><th>Metode</th><th>Deskripsi</th><th>Alat</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pengujian Manual</strong></td>
      <td>Penguji manusia atau pengguna nyata menjalankan kasus uji dan membandingkan implementasi dengan desain.</td>
      <td>Figma (design handoff)</td>
    </tr>
    <tr>
      <td><strong>Pengujian UI Terotomasi</strong></td>
      <td>Alat mengotomatisasi pemeriksaan UI yang berulang, meningkatkan efisiensi.</td>
      <td>Selenium, Cypress, Playwright</td>
    </tr>
    <tr>
      <td><strong>Analitik dan Heatmaps</strong></td>
      <td>Memvisualisasikan interaksi pengguna (klik, gulir) untuk mengungkap perilaku yang tidak terduga.</td>
      <td>Hotjar, Crazy Egg</td>
    </tr>
    <tr>
      <td><strong>A/B Testing</strong></td>
      <td>Menyebarkan beberapa varian desain kepada subkelompok pengguna untuk mengukur varian mana yang memiliki kinerja metrik terbaik.</td>
      <td>Optimizely, Google Optimize</td>
    </tr>
    <tr>
      <td><strong>Evaluasi Heuristik</strong></td>
      <td>Pakar kegunaan meninjau produk berdasarkan prinsip-prinsip kegunaan yang sudah mapan.</td>
      <td>Nielsen's Heuristics</td>
    </tr>
    <tr>
      <td><strong>Audit Aksesibilitas</strong></td>
      <td>Menggabungkan alat otomatis dengan pengujian manual untuk menjamin kepatuhan standar.</td>
      <td>axe, Lighthouse</td>
    </tr>
  </tbody>
</table>

<h3>Daftar Periksa Heuristik (Diinspirasi oleh Jakob Nielsen)</h3>
<p>Prinsip-prinsip ini membantu mengidentifikasi masalah kegunaan:</p>
<ol>
  <li><strong>Visibilitas status sistem:</strong> Sistem harus selalu memberi tahu pengguna tentang apa yang sedang terjadi melalui umpan balik yang tepat dalam waktu yang wajar.</li>
  <li><strong>Kesesuaian antara sistem dan dunia nyata:</strong> Sistem harus berbicara dalam bahasa pengguna, dengan kata, frasa, dan konsep yang familiar.</li>
  <li><strong>Kontrol dan kebebasan pengguna:</strong> Pengguna sering memilih fungsi sistem secara tidak sengaja dan memerlukan "pintu keluar darurat" yang jelas.</li>
  <li><strong>Konsistensi dan standar:</strong> Pengguna tidak perlu bertanya-tanya apakah kata, situasi, atau tindakan yang berbeda memiliki arti yang sama.</li>
  <li><strong>Pencegahan kesalahan:</strong> Lebih baik mencegah kesalahan daripada menampilkan pesan kesalahan yang baik.</li>
  <li><strong>Pengakuan daripada mengingat:</strong> Minimalkan beban memori pengguna dengan membuat objek, tindakan, dan opsi terlihat.</li>
  <li><strong>Fleksibilitas dan efisiensi penggunaan:</strong> Accelerators dapat mempercepat interaksi bagi pengguna ahli.</li>
  <li><strong>Desain yang estetis dan minimalis:</strong> Dialog tidak boleh berisi informasi yang tidak relevan atau jarang diperlukan.</li>
  <li><strong>Bantuan kepada pengguna untuk mengenali, mendiagnosis, dan memulihkan dari kesalahan:</strong> Pesan kesalahan harus dinyatakan dalam bahasa yang jelas, menunjukkan masalah dengan tepat, dan secara konstruktif menyarankan solusi.</li>
  <li><strong>Bantuan dan dokumentasi yang memadai:</strong> Meskipun lebih baik jika sistem dapat digunakan tanpa dokumentasi, mungkin perlu untuk menyediakan bantuan dan dokumentasi.</li>
</ol>

<h3>Kesimpulan</h3>
<p>Menginvestasikan waktu dalam UI/UX Testing secara komprehensif mengurangi risiko cacat mencapai pengguna dan membantu menciptakan produk yang lebih andal, mudah diakses, dan menyenangkan. Pengujian yang dilakukan secara dini dan sering, dikombinasikan dengan alat dan metode yang tepat, menghasilkan hasil yang lebih baik bagi pengguna dan tim pengembangan.</p>
`,
    resources: [
      { title: 'Nielsen Norman Group - UX Research', url: 'https://www.nngroup.com/' },
      { title: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
      { title: 'UI Testing Best Practices', url: 'https://www.browserstack.com/guide/ui-testing-best-practices' },
      { title: '10 Usability Heuristics', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/' }
    ]
  },
  {
    title: 'Testing Strategies',
    description: 'Testing/Pengujian adalah proses penting dalam rekayasa perangkat lunak yang berfungsi sebagai penjaga kualitas, dengan tujuan untuk menemukan cacat dan memastikan perangkat lunak bekerja sesuai persyaratan.',
    topics: [
      'Tujuan Utama Pengujian',
      'Siklus Hidup Pengujian (STLC)',
      'Klasifikasi Berdasarkan Tingkat Abstraksi',
      'Klasifikasi Berdasarkan Tujuan Fungsional',
      'Klasifikasi Berdasarkan Domain Non-Fungsional',
      'Klasifikasi Berdasarkan Struktur dan Akses Kode'
    ],
    content: `
<h3>Tujuan Utama Pengujian Perangkat Lunak</h3>
<p>Tujuan utama dari pengujian adalah untuk:</p>
<ul>
  <li><strong>Verifikasi dan Validasi:</strong> Memastikan perangkat lunak dibangun dengan benar (verification) dan membangun produk yang tepat (validation).</li>
  <li><strong>Mengurangi Risiko:</strong> Meminimalkan peluang kegagalan yang tidak terduga di lingkungan produksi.</li>
  <li><strong>Membangun Kepercayaan:</strong> Meningkatkan keyakinan pemangku kepentingan (stakeholders) terhadap kualitas produk.</li>
  <li><strong>Menghemat Biaya Jangka Panjang:</strong> Menemukan dan memperbaiki bug di awal siklus pengembangan jauh lebih murah daripada memperbaikinya setelah rilis.</li>
  <li><strong>Meningkatkan Pengalaman Pengguna:</strong> Memastikan aplikasi aman, cepat, dan mudah digunakan.</li>
</ul>

<h3>Siklus Hidup Pengujian Perangkat Lunak (STLC)</h3>
<p>STLC adalah pendekatan sistematis untuk mengelola dan menjalankan semua aktivitas pengujian. Fase umumnya meliputi:</p>
<table>
  <thead>
    <tr><th>Fase</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Perencanaan Pengujian (Test Planning)</strong></td>
      <td>Mendefinisikan ruang lingkup, tujuan, strategi, dan sumber daya.</td>
    </tr>
    <tr>
      <td><strong>Desain Pengujian (Test Design)</strong></td>
      <td>Mengembangkan kasus uji (test cases) dan skrip yang akan dieksekusi.</td>
    </tr>
    <tr>
      <td><strong>Eksekusi Pengujian (Test Execution)</strong></td>
      <td>Menjalankan kasus uji pada perangkat lunak.</td>
    </tr>
    <tr>
      <td><strong>Pelaporan dan Analisis (Reporting and Analysis)</strong></td>
      <td>Mendokumentasikan bug dan menyiapkan laporan ringkasan.</td>
    </tr>
  </tbody>
</table>

<h3>Klasifikasi Strategi Pengujian</h3>
<p>Pengujian dapat diklasifikasikan berdasarkan beberapa dimensi, tergantung pada fokus dan kedalaman pemeriksaan:</p>

<h4>1. Berdasarkan Tingkat Abstraksi</h4>
<p>Ini mengacu pada seberapa besar bagian sistem yang sedang diuji:</p>
<table>
  <thead>
    <tr><th>Jenis Pengujian</th><th>Deskripsi</th><th>Analogi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pengujian Unit (Unit Testing)</strong></td>
      <td>Menguji bagian terkecil kode (fungsi, metode) secara terisolasi.</td>
      <td>Memeriksa setiap komponen mobil satu per satu (mesin, rem, ban).</td>
    </tr>
    <tr>
      <td><strong>Pengujian Integrasi (Integration Testing)</strong></td>
      <td>Memverifikasi bagaimana modul-modul yang berbeda bekerja sama.</td>
      <td>Memastikan mesin mobil bekerja dengan baik dengan sistem transmisi.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Sistem (System/End-to-End Testing)</strong></td>
      <td>Menguji aplikasi secara keseluruhan, mensimulasikan alur kerja pengguna penuh.</td>
      <td>Menguji mobil lengkap di jalan raya.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Penerimaan (Acceptance Testing)</strong></td>
      <td>Memvalidasi aplikasi dari sudut pandang dan kebutuhan pengguna atau klien.</td>
      <td>Test drive oleh calon pembeli untuk memastikan mobil sesuai kebutuhan.</td>
    </tr>
  </tbody>
</table>

<h4>2. Berdasarkan Tujuan Fungsional</h4>
<p>Ini mengacu pada apa yang dilakukan perangkat lunak:</p>
<table>
  <thead>
    <tr><th>Jenis Pengujian</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pengujian Fungsional (Functional Testing)</strong></td>
      <td>Memastikan semua fitur dan fungsi bekerja seperti yang ditentukan dalam persyaratan.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Non-Fungsional (Non-Functional Testing)</strong></td>
      <td>Mengevaluasi atribut seperti kecepatan, keamanan, dan kegunaan.</td>
    </tr>
  </tbody>
</table>

<h4>3. Berdasarkan Domain Non-Fungsional</h4>
<p>Fokus pada bagaimana sistem beroperasi:</p>
<table>
  <thead>
    <tr><th>Jenis Pengujian</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pengujian Kinerja (Performance Testing)</strong></td>
      <td>Mengukur kecepatan, responsivitas, dan stabilitas aplikasi di bawah berbagai beban.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Keamanan (Security Testing)</strong></td>
      <td>Mencari kerentanan dalam sistem untuk mencegah akses tidak sah atau kebocoran data.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Kegunaan (Usability Testing)</strong></td>
      <td>Memastikan kemudahan pengguna dalam berinteraksi dengan aplikasi dan menyelesaikan tugas.</td>
    </tr>
  </tbody>
</table>

<h4>4. Berdasarkan Struktur dan Akses Kode</h4>
<p>Ini mengacu pada bagaimana pengujian dirancang:</p>
<table>
  <thead>
    <tr><th>Jenis Pengujian</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pengujian Kotak Hitam (Black-Box Testing)</strong></td>
      <td>Fokus hanya pada input dan output sistem tanpa melihat struktur kode internal.</td>
    </tr>
    <tr>
      <td><strong>Pengujian Kotak Putih (White-Box Testing)</strong></td>
      <td>Memeriksa struktur, logika, dan jalur kode internal untuk memastikan kode itu sendiri sehat dan tertutup (covered) sepenuhnya.</td>
    </tr>
  </tbody>
</table>

<h3>Kesimpulan</h3>
<p>Pengujian adalah fase krusial dari Siklus Hidup Pengembangan Perangkat Lunak (SDLC). Dengan mengadopsi strategi pengujian yang komprehensif, tim dapat menghasilkan perangkat lunak yang andal dan ramah pengguna. <strong>Ingatlah prinsipnya: uji sedini mungkin, uji sesering mungkin.</strong></p>
`,
    resources: [
      { title: 'Software Testing Fundamentals', url: 'https://softwaretestingfundamentals.com/' },
      { title: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/certified-tester-foundation-level' },
      { title: 'Testing Strategies Guide', url: 'https://www.guru99.com/software-testing-introduction-importance.html' }
    ]
  }
];
