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
Sevda olmasaydı da gönüle dolmasaydı
Sevda olmasaydı da gönüle dolmasaydı
Dünya neye yarardı da güzeli olmasaydı
Dünya neye yarardı da güzeli olmasaydı
Nar tanesi tanesi de seviyom nar danesi
Güzellerin içinde de sevdiğim bir tanesi

O yar zülfünü tarar da gönül dengini arar
O yar zülfünü tarar da gönül dengini arar 
Dünyada sevmeyen de ahrette neye yarar
Dünyada sevmeyen de ahrette neye yarar
Nar tanesi tanеsi de seviyom nar danesi
Güzеllerin içinde de sevdiğim bir tanesi
Nar tanesi tanеsi de seviyom nar danesi
Güzеllerin içinde de sevdiğim bir tanesi
"""

eklenen_sözler = eklenecek_br(sözler)
print(eklenen_sözler)

# Sonucu panoya kopyalama
pyperclip.copy(eklenen_sözler)
print("Sonuç panoya kopyalandı.")
