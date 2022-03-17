const menu = [
    {
      id: 1,
      title: "Turşu Kavurması",
      category: "Karadeniz",
      price: 10.99,
      img:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2017/09/tursu-kavurmasi-tarifi.jpg",
      desc: `Piyazlık soğan, ezilmiş sarımsak ve pul biberle beraber kavrulan fasulye turşusuna kimi zaman biber salçası da eşlik eder.`,
    },
    {
      id: 2,
      title: "Mulama",
      category: "Karadeniz",
      price: 7.99,
      img:
        "https://i2.milimaj.com/i/milliyet/75/0x410/5eedcea5adcdeb1cf4a4f7c5.jpg",
      desc: `Peynir, tereyağı ve mısır unu ile birlikte kavrulmasıyla hazırlanan Karadeniz bölgesinde popüler bir yemektir.`,
    },
    {
      id: 3,
      title: "Laz Böreği",
      category: "Karadeniz",
      price: 8.99,
      img:
        "https://cdn.yemek.com/mncrop/940/625/uploads/2014/12/laz-boregi-yemekcom.jpg",
      desc: `Bu meşhur Karadeniz tatlısı, böreğin katları arasına hafif bir muhallebinin döşenmesi ile hazırlanır. Laz böreği, çayla kahveyle, yemeklerden sonra günün her saatinde reddedilemeyen bir tatlı olarak çok sevilir.`,
    },
    {
      id: 4,
      title: "Karalahana Sarması",
      category: "Karadeniz",
      price: 5.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/zeytinyagli_karalahana_sarmasi-019692d6-dd06-4bc2-9a9e-c5ca1d0903ec.jpg",
      desc: `Yediden yetmişe herkesin en sevdiği yemeklerin arasında yer alan dolma, karalahana ile bir başka lezzetli olur.`,
    },
    {
      id: 5,
      title: "Börülce",
      category: "Ege",
      price: 12.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/deniz_borulcesi_salatasi-c82c5aaf-c763-43c6-a193-f76127c4d695.jpg",
      desc: `Ege'de börülcenin birden fazla çeşidi bulunuyor aslında. Bol zeytinyağı ve limonlu salata olarak yenebildiği gibi çorbası ve yemeği de yapılabilen börülcenin yöredeki çeşitleri arasında kuru, taze ve deniz börülcesi yer alıyor. `,
    },
    {
      id: 6,
      title: "Kabak Çiçeği Dolması",
      category: "Ege",
      price: 9.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/kabak-cicegi-dolmasi-8f0b72e6-c5ea-49d5-9186-d0ec436a5930.jpg",
      desc: `Öyle herkesin bilmediği ama bir kez deneyince vazgeçemediği lezzetlerden biridir kabak çiçeği dolması. Zeytinyağının dahil olup da tadının güzelleşmediği yemek neredeyse yoktur ama kabak çiçeği dolması Ege ile adeta bütünleşmiştir.`,
    },
    {
      id: 7,
      title: "Analı Kızlı Çorba",
      category: "Akdeniz",
      price: 15.99,
      img:
        "https://i.sozcu.com.tr/wp-content/uploads/2019/12/04/iecrop/anali-kizli_16_9_1575482620.jpg",
      desc: `Adana ile özdeşleştirilen analı kızlı çorbası, Akdeniz Bölgesi'nin en sevilen lezzetleri arasındadır. Nefis başlangıç yapmak isteyenler için idealdir. Analı kızlı çorbası yapımında kıyma, dana eti ve bulgur kullanılır.`,
    },
    {
      id: 8,
      title: "Testi Kebabı",
      category: "Akdeniz",
      price: 12.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/testi_kebabi-79091d63-d582-439c-ac8f-2a2ec62ff0db.jpg",
      desc: `Türk mutfağında önemli bir yere sahip olan testi kebabı, ismini etin testide pişirilmesinden alır. Yapımında kuzu veya koyun eti kullanılmaktadır. İsteğe göre deniz ürünleri ile zenginleştirilebilir.`,
    },
    {
      id: 9,
      title: "Babagannuş",
      category: "Akdeniz",
      price: 3.99,
      img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/babagannus-bf3f830c-225d-4c26-a664-e8946d0de764.jpg",
      desc: `Hatay mutfağına özgü bir meze olan babagannuş, özellikle kebap çeşitlerinin yanında sunulmaktadır. Yalnızca ülkemizde değil, Filistin, Suriye ve Lübnan sofralarında da yer verilir.`,
    },
    {
      id: 10,
      title: "Şevketi Bostan",
      category: "Ege",
      price: 3.99,
      img:
        "https://cdn.neredekal.com/image/sevketi-bostan.jpg",
      desc: `Ege demek tabi ki bol bol ot demek. Şevketi bostan ise yörede sıklıkla tüketilen ve çok sevilen lezzetlerinden biri.`,
    },
  ];


const section=document.querySelector(".section");
const btnContainer=document.querySelector(".btn-container");


const menuList=(menuItems)=>{

  let showMenu=menuItems.map((item)=> {
    return `
      <div class="col-md-12 col-lg-12 col-xl-6">
        <div class="card mb-5 border-0 me-2 " style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                  <img class="img-responsive" src="${item.img}" alt="${item.title}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.desc}</p>
                  <p class="card-text fw-bold">${item.price}</p>
                </div>
            </div>
          </div>
      </div>
    </div>
    `;
  });
  showMenu=showMenu.join("");
  section.innerHTML=showMenu;

};

const categories=menu.reduce((values,item)=>{
  if(!values.includes(item.category)){
    values.push(item.category);
  }
  return values;
},["All"]
);



const categoryList=()=>{
  let categoryBtns=categories.map((category)=>{
    return `<button class="btnItems ${category} me-3 mb-2" data-id=${category}>${category}</button>`;


  })
  .join("");

  btnContainer.innerHTML=categoryBtns;
  const filterBtns=document.querySelectorAll(".btnItems");

  console.log(typeof filterBtns)

  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
}

console.log(categories)
menuList(menu);
categoryList();