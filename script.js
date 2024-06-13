$(document).ready(function() {
  const songs = [
    { title: "İLK YARI", lyrics: "",tur: "sozsuz",yari: "yari"},
    { title: "Uzun İnce Bir Yoldayım", lyrics: " Uzun, ince bir yoldayım<br> Gidiyorum gündüz gece<br> Uzun, ince bir yoldayım<br> Gidiyorum gündüz gece<br> Bilmiyorum ne hâldeyim<br> Gidiyorum gündüz gece<br> Gündüz gece<br> Gündüz gece<br> Gündüz gece, hey<br> Dünyaya geldiğim anda<br> Yürüdüm aynı zemanda<br> İki gapılı bir handa<br> Gidiyorum gündüz gece<br> Gündüz gece<br> Gündüz gece<br> Gündüz gece, hey<br> Şaşar Veysel işbu hâle, <br> Gâh ağlaya gâhi güle, <br> Yetişmek için menzile, <br> Gidiyorum gündüz gece. <br> Gündüz gece<br> Gündüz gece<br> Gündüz gece, hey"},
    { title: "Uyan Sunam", lyrics: " Şafak söktü yine sunam uyanmaz<br> Hasret çeken gönül derde dayanmaz<br> Şafak söktü yine sunam uyanmaz<br> Hasret çeken gönül derde dayanmaz<br> Çağırırım sunam sesim duyulmaz<br> Uyan sunam uyan derin uykudan<br> Çektiğim gönül elinden<br> Usandım gurbet elinden<br> Hiç kimse bilmez halimden<br> Uyan sunam derin uykudan<br> Çektiğim gönül elinden<br> Usandım gurbet elinden<br> Hiç kimse bilmez halimden<br> Uyan sunam derin uykudan<br> Bunca diyar gezdim gözlerin için<br> Niye küstün bana el sözü için<br> Bunca diyar gezdim gözlerin için<br> Niye küstün bana el sözü için<br> Dilerim Allah'tan sızlasın için<br> Uyan sunam uyan derin derin uykudan<br> Çektiğim gönül elinden<br> Usandım gurbet elinden<br> Hiç kimse bilmez halimden<br> Uyan sunam derin uykudan<br> Çektiğim gönül elinden<br> Usandım gurbet elinden<br> Hiç kimse bilmez halimden<br> Uyan sunam derin uykudan"},
    { title: "Şu Yüce Dağları Duman Kaplamış", lyrics: " Şu yüce dağları duman kaplamış, duman kaplamış<br> Yine mi gurbetten kara haber var, kara haber var, kara haber var<br> Seher vakti bu yerde kimler ağlamış<br> Çimenler üstünde gözyaşları var, gözyaşları var<br> Seher vakti bu yerde kimler ağlamış<br> Çimenler üstünde gözyaşları var, gözyaşları var"},
    { title: "Keklik Gibi", lyrics: " Keklik gibi kanadımı süzmedim<br> Murat alıp doya doya gezmedim<br> Bu kara yazıyı kendim yazmadım<br> Alnıma yazılmış bu kara yazı<br> Kader böyle imiş ağlarım bazı<br> Gönül ey ey ey sebebim ey<br> Alnıma yazılmış bu kara yazı<br> Kader böyle imiş ağlarım bazı<br> Gönül ey ey sebebim ey<br> Geceleri uyku girmez gözüme<br> Zalım yastık diken oldu yüzüme<br> Uyma dedim uydun eller sözüne<br> Alnıma yazılmış bu kara yazı<br> Kader böyle imiş ağlarım bazı<br> Gönül ey ey ey sebebim ey"},
    { title: "Ne Ağlarsın", lyrics: " Ne Ağlarsın Benim Zülfü Siyahim,<br> Bu Da Gelir Bu Da Geçer Ağlama.<br> Göklere Erişti Figânım Ahım,<br> Bu Da Gelir Bu Da Geçer Ağlama.<br> <br> Bir Gülün Çevresi Dikendir Hardır,<br> Bülbül Har Elinde Ah İle Zardır.<br> Ne Olsa Da Kışın Sonu Bahardır,<br> Bu Da Gelir Bu Da Geçer Ağlama.<br> <br> Daimi'yim Her Can Ermez Bu Sırra,<br> Gerçek Kamil Olan Yeter O Nura.<br> Yusuf Sabır İle Vardı Mısır'a,<br> Bu Da Gelir Bu Da Geçer Ağlama."},
    { title: "Allı Turnam", lyrics: " Allı turnam bizim ele varırsan<br> Allı turnam bizim ele varırsan<br> Şeker söyle, kaymak söyle, bal söyle<br> Gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey<br> Oy gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey<br> Eğer bizi sual eden olursa<br> Eğer bizi sual eden olursa<br> Boynu bükük benzi soluk yar söyle<br> Gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey<br> Oy gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey<br> Allı turnam ne gezersin havada?<br> Allı turnam ne gezersin havada?<br> Arabam devrildi kaldım burada<br> Gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey<br> Oy gülüm gülüm kırıldı kolum<br> Tutmuyor elim turnalar hey"},
    { title: "Ah Bir Ataş Ver", lyrics: " Ah, bir ataş ver, cıgaramı yakayım<br> Sen sallan gel, ben boyuna bakayım<br> <br> Uzun olur gemilerin direği<br> Çatal olur efelerin yüreği<br> <br> Ah, vur ataşı gavur, sinem ko yansın<br> Arkadaşlar uykulardan uyansın<br> <br> Uzun olur gemilerin direği<br> Çatal olur efelerin yüreği"},
    { title: "Hekimoğlu", lyrics: " Hekimoğlu derler benim aslıma<br> Aynalı martin yaptırdım da narinim kendi neslime<br> Aynalı martin yaptırdım da narinim kendi neslime<br> <br> Konaklar yaptırdım mermer direkli<br> Hekimoğlu dediğin de narinim aslan yürekli<br> Hekimoğlu dediğin de narinim aslan yürekli<br> <br> Konaklar Yaptırdım Döşetemedim,<br> Ünye Fatsa Bir Oldu Da(Narinim) Baş Edemedim.<br> Ünye Fatsa Bir Oldu Da(Narinim) Baş Edemedim.<br> <br> Ünye Fatsa arası ordu da kuruldu<br> Hekimoğlu dediğin de narinim o da vuruldu<br> Hekimoğlu dediğin de narinim o da vuruldu"},
    { title: "Erisin Dağların Karı", lyrics: " Bunca gamı, bunca derdi Mevlam yalnız bana mı verdi?<br> Bunca gamı, bunca derdi Mevlam yalnız bana mı verdi?<br> <br> Eller muradına erdi Yine cananım gelmedi<br> Eller muradına erdi Yine cananım gelmedi<br> <br> Erisin dağların karı Geçti ömrümün baharı<br> Ecel kapımı çalmadan Durma gel ömrümün varı<br> Erisin dağların karı Geçti ömrümün baharı<br> Ecel kapımı çalmadan Durma gel ömrümün varı<br> <br> Ali Baba çeker çile Felek vurdu bana sille<br> Ali Baba çeker çile Felek vurdu bana sille<br> <br> Ömrüm geldi geçti bile Yine cananım gelmedi<br> Ömrüm geldi geçti bile Yine cananım gelmedi<br> <br> Erisin dağların karı Geçti ömrümün baharı<br> Ecel kapımı çalmadan Durma gel ömrümün varı<br> Erisin dağların karı Geçti ömrümün baharı<br> Ecel kapımı çalmadan Durma gel ömrümün varı"},
    { title: "Dam Başında Sarı Çiçek", lyrics: " Dam Başında Sarı Çiçek (Oy Oy)<br> Burdan Kalkak Ürgüp'e Göçek (Nennide Feridem Nenni)<br> <br> Ürgüp'e Vardığımız Gece (Oy Oy)<br> Hak Yoluna Gurban Kesek (Nennide Feridem Nenni)<br> <br> Gidiyorum İşte Gör (Oy Oy)<br> Hayalde Gör Düşte Gör (Nennide Feridem Nenni)<br> <br> Kıymetimi Bilmeyon (Oy Oy)<br> Bir Kötüye Düş De Gör (Nennide Feridem Nenni)<br> <br> Odaları Köşeli (Oy Oy)<br> Gül-Ü Reyhan Döşelide (Nennide Feridem Nenni)<br> <br> Ne Ağladım Ne Güldüm (Oy Oy)<br> Ben Bu Aşka Düşeli (Nennide Feridem Nenni)"},
    { title: "İKİNCİ YARI", lyrics: "",tur: "sozsuz",yari: "yari"},
    { title: "Neredesin Sen", lyrics: " Şu garip halimden bilen şiveli nazlı<br> Gönlüm hep seni arıyor neredesin sen<br> Tatli dillim, güler yüzlüm, ey ceylan gözlüm<br> Gönlüm hep seni arıyor neredesin sen, neredesin sen, neredesin sen<br> Tatli dillim, güler yüzlüm, ey ceylan gözlümw<br> Gönlüm hep seni arıyor neredesin sen, neredesin sen, neredesin sen<br> <br> Sinemde gizli yaramı kimse bilmiyor<br> Hiç bir tabip şu yarama melhem olmuyor<br> Boynu bükük bir garibim yüzüm gülmüyor<br> Gönlüm hep seni arıyor neredesin sen, neredesin sen, neredesin sen<br> Boynu bükük bir garibim yüzüm gülmüyor<br> Gönlüm hep seni arıyor neredesin sen, neredesin sen, neredesin sen"},
    { title: "Bir Ay Doğar", lyrics: " Bir ay doğar ilk akşamdan geceden neydem neydem geceden<br> Şavkı vurur pencereden bacadan<br> Dağlar kışımış yolcum üşümüş nasıl edem ben<br> Uykusuz mu kaldın dünkü geceden neydem neydem geceden<br> Uyan uyan yâr sinene sar beni<br> Dağlar kışımış yolcum üşümüş nasıl edem ben<br> Uyan uyan yâr sinene sar beni<br> Dağlar harâmı açma yaramı perişânım ben<br> Yüce dağ başından aşırdın beni neydem neydem yâr beni<br> Tükenmez dertlere düşürdün beni<br> Dağlar kışımış yolcum üşümüş nasıl edem ben<br> Madem soysuz göynün bende yoğudu neydem neydem yoğudu<br> Niye doğru yoldan şaşırdın beni<br> Dağlar kışımış yolcum üşümüş perişânım ben<br> Niye doğru yoldan şaşırdın beni<br> Dağlar harâmı açma yaramı perişânım ben"},
    { title: "Ela Gözlüm", lyrics: " Ela gözlüm ben bu elden gidersem<br> Ela gözlüm ben bu elden gidersem<br> Zülfü perişanım kal melul melul, kal melul melul<br> Kerem et aklından çıkarma beni<br> Ağla gözyaşını sil melul melul<br> Kerem et aklından çıkarma beni<br> Ağla gözyaşını sil melul melul<br> <br> Elvan çiçekleri takma başına<br> Elvan çiçekleri takma başına<br> Kudret kalemini çekme kaşına, çekme kaşına<br> Beni ağlatırsan doyma yaşına<br> Ağla gözyaşını sil melul melul<br> Beni ağlatırsan doyma yaşına<br> Ağla gözyaşını sil melul melul"},
    { title: "Hey Onbeşli", lyrics: " Hey Onbeşli Onbeşli<br> Tokat Yolları Taşlı<br> Onbeşliler Gidiyor<br> Kızların Gözü Yaşlı<br> <br> Aslan Yârim Kız Senin Adın Hediye<br> Ben Dolandım Sen De Dolan Gel Gediye<br> Fistan Aldım Endazesi On Yediye<br> <br> Giderim Elinizden<br> Kurtulam Dilinizden<br> Yeşil Baş Ördek Olsam<br> Su İçmem Gölünüzden<br> <br> Aslan Yârim Kız Senin Adın Hediye<br> Ben Dolandım Sen De Dolan Gel Gediye<br> Fistan Aldım Endazesi On Yediye<br> <br> Gidiyom Gidemiyom<br> Sevdim Terkedemiyom<br> Sevdiğim Pek Gönüllü<br> Gönlünü Edemiyom<br> <br> Aslan Yârim Kız Senin Adın Hediye<br> Ben Dolandım Sen De Dolan Gel Gediye<br> Fistan Aldım Endazesi On Yediye"},
    { title: "Yolcu", lyrics: " Bir anadan dünyaya gelen yolcu<br> Bir anadan dünyaya gelen yolcu<br> Görünce dünyaya gönül verdin mi<br> Görünce dünyaya gönül verdin mi<br> Kimi böyük, kim böcek, kimi kul<br> Kimi böyük, kim böcek, kimi kul<br> Marak edip heçbirini sordun mu<br> Bunlar neden nedenini sordun mu<br> İnsan ölür ama uruhu ölmez<br> İnsan ölür ama uruhu ölmez<br> Bunca mahlukat var heç biri gülmez<br> Bunca mahlukat var heç biri gülmez<br> Cehennem azabı zordur çekilmez<br> Cehennem azabı zordur çekilmez<br> Azap çeken hayvanları gördün mü<br> Azap çeken hayvanları gördün mü<br> Insandan doganlar insan olurlar<br> Insandan doganlar insan olurlar<br> Hayvandan doganlar hayvan olurlar<br> Hayvandan doganlar hayvan olurlar<br> Hepiside bu dünyaya gelirler<br> Hepiside bu dünyaya gelirler<br> Ana haktır sen bu sirra erdin mi<br> Ana haktır sen bu sirra erdin mi"},
    { title: "Gurbet", lyrics: " Oy Kime desem derdimi ben, bulutlar?<br> Bizi dost bildiklerimiz vurdular<br> Bir de gurbet yarası var, hepsinden derin<br> Söyleyin memleketten bir haber mi var?<br> Yoksa yârin gözyaşları mı bu yağmurlar?<br> Söyleyin memleketten bir haber mi var?<br> Yoksa yârin gözyaşları mı bu yağmurlar?<br> İçerim yanıyor, yâr yâr, yaram pek derin<br> Bana nazlı yârdan, aman, bir haber verin<br> İçerim yanıyor, yâr yâr, yaram pek derin<br> Bana nazlı yârdan, aman, bir haber verin<br> Oy Bulutlar yârime selam söyleyin<br> Kavuşma günümüz yakınmış deyin<br> Felek yârdan ırak koyduysa bizi<br> Gurbet ilde bir başıma neyleyim?<br> Yârdan ırak yaşanır mı? Söyleyin<br> Gurbet ilde bir başıma neyleyim?<br> Yârdan ırak yaşanır mı? Söyleyin<br> İçerim yanıyor, yâr yâr, yaram pek derin<br> Bana nazlı yârdan, aman, bir haber verin<br> İçerim yanıyor, yâr yâr, yaram pek derin<br> Bana nazlı yârdan, aman, bir haber verin"},
    { title: "Gel Sevelim", lyrics: " Gel sevelim sevileni seveni<br> Sevgisiz suratlar gülmüyor canım<br> Gel sevelim sevileni seveni<br> Sevgisiz suratlar gülmüyor canım<br> Nice gördüm dizlerini döveni<br> Nice gördüm dizlerini döveni<br> Giden ömür geri gelmiyor canım<br> Giden ömür geri gelmiyor canım<br> Özü gülmeyenin yüzü güler mi<br> Sevgisiz muhabbet hakka değer mi<br> İçi gülmeyenin dışı güler mi<br> Gönülsüz muhabbet hakka değer mi<br> Seven insan kaşlarını eğer mi<br> Zorunan güzellik olmuyor canım<br> Zorunan güzellik olmuyor canım<br> Sevgi haktır seven alır bu hakkı<br> İçi güler dıştan görünür farkı<br> Sevgi haktır seven alır bu hakkı<br> İçi güler dıştan görünür farkı<br> Sevmeyene akmaz sevginin arkı<br> Sevmeyene akmaz sevginin arkı<br> Boş lafla oluklar dolmuyor canım<br> Boş lafla dümen dönmüyor canım"},
    { title: "Bahça Duvarından Aştım", lyrics: " Bahçe duvarından aştım<br> Bahçe duvarından aştım<br> Sarmaşık güllere dolaştım<br> Sarmaşık güllere dolaştım<br> Öptüm sevdim helallaştım<br> Öptüm sevdim helallaştım<br> Yanıyorum, yanıyorum, yanıyorum hele<br> Mayil oldum gonca güle<br> Acem şalı ince bele<br> Acem şalı ince bele<br> Bir bakışta yaktın beni<br> Bir bakışta yaktın beni<br> Dert ile bıraktın beni<br> Dert ile bıraktın beni<br> Yaktın beni, yaktın beni<br> Yaktın beni, yaktın beni<br> Yanıyorum, yanıyorum, yanıyorum hele<br> Mayil oldum gonca güle<br> Acem şalı ince bele<br> Acem şalı ince bele<br> Yeter naz eyleme bana<br> Gayri naz eyleme bana<br> Gel göreyim kana kana<br> Gel göreyim kana kana<br> Aşık oldum gülüm sana<br> Aşık oldum gülüm sana<br> Yanıyorum, yanıyorum, yanıyorum hele<br> Mayil oldum gonca güle<br> Acem şalı ince bele<br> Acem şalı ince bele"},
    { title: "Makaram Sarı Bağlar", lyrics: " Makaram sarı bağlar lo kız söyler gelin ağlar<br> Makaram sarı bağlar lo kız söyler gelin ağlar<br> Niye ben ölmüş müyem lo Asyam karalar bağlar<br> Niye ben ölmüş müyem lo Asyam karalar bağlar<br> Lö berde lö berde zülfün yüzüne perde<br> Devriyeler sardı da bizi meğer kaderim böyle<br> Devriyeler sardı da bizi meğer kaderim böyle<br> Makaramda ipliğim lo Asyam benim kekliğim<br> Makaramda ipliğim lo Asyam benim kekliğim<br> Hiç aklımdan çıkmıyor lo tenhalarda gezdiğim<br> Hiç aklımdan çıkmıyor lo tenhalarda gezdiğim<br> Lö berde lö berde zülfün yüzüne perde<br> Devriyeler sardı da bizi meğer kaderim böyle<br> Devriyeler sardı da bizi meğer kaderim böyle<br> Lö berde lö berde zülfün yüzüne perde<br> Devriyeler sardı da bizi meğer kaderim böyle<br> Devriyeler sardı da bizi meğer kaderim böyle"},
    { title: "Fidayda", lyrics: " Aman bulguru kaynatırlar<br> Guzum bulguru kaynatırlar<br> Serinde yaylatırlar<br> Aman serinde yaylatırlar<br> Aman bizde âdet böyledir<br> Guzum bizde âdet böyledir<br> Güzeli ağlatırlar, aman çirkini söyletirler<br> Fidayda da Angaralı'm fidayda<br> 500 altın yedirdin bir ayda<br> Gitti de gelmedi, ne fayda<br> Başını da yesin bu sevda<br> Fidayda da Angaralı'm fidayda<br> 500 altın yedirdin bir ayda<br> Gitti de gelmedi, ne fayda<br> Başını da yesin bu sevda<br> Aman dama çıkma, başa çık<br> Haydi dama çıkma, başa çık<br> Arpalarda aradın, çık<br> Aman arpalarda aradın, çık<br> Aman eğer gönlün var ise<br> Haydi eğer gönlün var ise<br> Al bohçanı yola çık<br> Aman al bohçanı yola çık<br> Fidayda da Angaralı'm fidayda<br> 500 altın yedirdin bir ayda<br> Gitti de gelmedi, ne fayda<br> Başını da yesin bu sevda<br> Fidayda da Angaralı'm fidayda<br> 500 altın yedirdin bir ayda<br> Gitti de gelmedi, ne fayda<br> Başını da yesin bu sevda"},

    
];

    const songContainer = $('<div class="container"></div>'); // Kapsayıcı bir div eklendi
    $('music').append(songContainer); // Kapsayıcıyı body'e ekle
  
    songs.forEach((song, index) => {
      const songElement = $(`
        <div class="mb-3"> 
          <button class="btn custom-btn ${song.yari} btn-block" type="button" data-toggle="collapse" data-target="#collapseLyrics${index}" aria-expanded="false" aria-controls="collapseLyrics${index}">
            ${song.title}
          </button>
          <div class="collapse" id="collapseLyrics${index}">
            <div class="card ${song.tur} custom-card card-body mt-2">
            <p>
              ${song.lyrics}
              </p>
            </div>
          </div>
        </div>
      `);
  
      songContainer.append(songElement); // Şarkı elementini kapsayıcıya ekle
    });
  });
  
