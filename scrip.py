import pyperclip

def eklenecek_br(sözler):
    """
    Girdi olarak şarkı sözlerini alan ve her satırın sonuna <br> ekleyip aynı satırda birleştiren bir fonksiyon.
    Ayrıca " yerine ' koyar.

    Args:
        sözler: Şarkı sözleri metni.

    Returns:
        <br> eklenmiş, aynı satırda birleştirilmiş ve " yerine ' konmuş şarkı sözleri.
    """

    # " yerine ' koyma
    sözler = sözler.replace('"', "'")

    # Satırlara ayırma
    satırlar = sözler.splitlines()

    # Her satırın sonuna <br> ekleyip aynı satırda birleştirme
    eklenen_sözler = " ".join([satir + "<br>" for satir in satırlar])

    # Başta ve sonda oluşan <br> etiketlerini silme
    if eklenen_sözler.startswith("<br>"):
        eklenen_sözler = eklenen_sözler[4:]
    if eklenen_sözler.endswith("<br>"):
        eklenen_sözler = eklenen_sözler[:-4]

    return eklenen_sözler

# Örnek kullanım:
sözler = """
Tatlı dile güler yüze
Doyulur mu doyulur mu
Aşkınan bakışan göze
Doyulur mu doyulur mu

Tatlı dile güler yüze
Doyulur mu doyulur mu
Aşkınan bakışan göze
Doyulur mu doyulur mu

Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı
Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı


Garibim geldik gitmeye
Muhabbetimiz bitmeye
Yârinen sohbet etmeye
Doyulur mu doyulur mu

Garibim geldik gitmeye
Muhabbetimiz bitmeye
Yârinen sohbet etmeye
Doyulur mu doyulur mu

Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı
Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı
Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı


Hem bahara hemi yaza
Yârin ettikleri naza
Yâr aşkına çalan saza
Doyulur mu doyulur mu

Hem bahara hemi yaza
Yârin ettikleri naza
Yâr aşkına çalan saza
Doyulur mu doyulur mu

Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı
Doyulur mu doyulur mu
Canâna kıyılır mı
Canâna kıyanlar
Hakk'ın kulu sayılır mı
"""

eklenen_sözler = eklenecek_br(sözler)
print(eklenen_sözler)

# Sonucu panoya kopyalama
pyperclip.copy(eklenen_sözler)
print("Sonuç panoya kopyalandı.")
