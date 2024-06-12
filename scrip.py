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
Aman bulguru kaynatırlar
Guzum bulguru kaynatırlar
Serinde yaylatırlar
Aman serinde yaylatırlar
Aman bizde âdet böyledir
Guzum bizde âdet böyledir
Güzeli ağlatırlar, aman çirkini söyletirler
Fidayda da Angaralı'm fidayda
500 altın yedirdin bir ayda
Gitti de gelmedi, ne fayda
Başını da yesin bu sevda
Fidayda da Angaralı'm fidayda
500 altın yedirdin bir ayda
Gitti de gelmedi, ne fayda
Başını da yesin bu sevda
Aman dama çıkma, başa çık
Haydi dama çıkma, başa çık
Arpalarda aradın, çık
Aman arpalarda aradın, çık
Aman eğer gönlün var ise
Haydi eğer gönlün var ise
Al bohçanı yola çık
Aman al bohçanı yola çık
Fidayda da Angaralı'm fidayda
500 altın yedirdin bir ayda
Gitti de gelmedi, ne fayda
Başını da yesin bu sevda
Fidayda da Angaralı'm fidayda
500 altın yedirdin bir ayda
Gitti de gelmedi, ne fayda
Başını da yesin bu sevda
"""

eklenen_sözler = eklenecek_br(sözler)
print(eklenen_sözler)

# Sonucu panoya kopyalama
pyperclip.copy(eklenen_sözler)
print("Sonuç panoya kopyalandı.")
