import React, { useState } from 'react';

const Index = () => {
  // Menu categories
  const categories = ['Alle', 'Suppen', 'Vorspeisen', 'Vegetarische Gerichte', 'Hühnerfleisch', 'Entenfleisch', 'Schweinefleisch', 'Rind- und Lammfleisch', 'Trocken Wok', 'Meeresfrüchte', 'Dessert', 'Speziell Empfehlung'];
  const [activeCategory, setActiveCategory] = useState('Alle');

  // Menu data with categories
  const menuItems = [
    {
      id: 1,
      name: "锅包肉",
      description: "Knuspriger Schweinelachs süß-sauer",
      price: "€20,90",
      image: "/images/guobaorou.jpg",
      category: "Schweinefleisch"
    },
    {
      id: 2,
      name: "荷塘小炒",
      description: "Gebratene Baby-Bohne mit Lotus und verschiedenem Gemüse",
      price: "€16,90",
      image: "/images/hetangxiaochao.jpg",
      category: "Vegetarische Gerichte"
    },
    {
      id: 3,
      name: "明炉羊肉",
      description: "Lammfleisch Suppe mit Glasnudeln und Chinakohl. leicht scharf",
      price: "€23,90",
      image: "/images/mingluyangrou.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 4,
      name: "葱姜,香辣蟹",
      description: "Gebratene Krabbe mit Schnittlauch Ingwer/ oder\n" +
          " nach Sichan-Art, leicht scharf",
      price: "€22,90",
      image: "/images/xianglaxie.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 5,
      name: "香辣海瓜子",
      description: "Gebratene Muscheln nach Sichan-Art, leicht scharf",
      price: "€18,90",
      image: "/images/xianglahaiguazi.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 6,
      name: "红烧狮子头",
      description: "(Löwen-Kopf) Fleischklöße mit Sojasoße,4 Stück",
      price: "€18,90",
      image: "/images/hongshaoshizitou.jpg",
      category: "Schweinefleisch"
    },
    {
      id: 7,
      name: "松鼠鱼",
      description: "Gebackenes Wolfsbarsch mit süß-sauer-Soße",
      price: "€22,90",
      image: "/images/songshuyu.jpg",
      category: "Meeresfrüchte"
    },
    {
      id: 8,
      name: "干锅大虾",
      description: "Trocken gebratene Garnelen",
      price: "€19,90",
      image: "/images/ganguodaxia.jpg",
      category: "Trocken Wok"
    },
    {
      id: 9,
      name: "扫把茄子",
      description: "Aubergine Spezial mit Hackfleisch und Peperocini. leicht scharf",
      price: "€17,90",
      image: "/images/saobaqiezi.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 10,
      name: "宫保虾球",
      description: "Gebratene Garnelen mit Paprika und Cashewnüssen",
      price: "€19,90",
      image: "/images/gongbaoxiaqiu.jpg",
      category: "Meeresfrüchte"
    },
    {
      id: 11,
      name: "韭菜干丝",
      description: "Chinesisch Schnittlauch mit Trockenen Tofu",
      price: "€16,90",
      image: "/images/jiucaigansi.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 12,
      name: "清蒸多宝鱼",
      description: "Gedämpft Steinbuttfisch",
      price: "€29,90",
      image: "/images/qingzhengduobaoyu.jpg",
      category: "Meeresfrüchte"
    },
    {
      id: 13,
      name: "桂花莲藕",
      description: "Lottus mit eingefügt Klebriger Reis und Osmanthus söße",
      price: "€8,90",
      image: "/images/guihualianou.jpg",
      category: "Vorspeisen"
    },
    {
      id: 14,
      name: "海鲜豆腐煲",
      description: "Tofu-Bowl mit Meeresfrüchten",
      price: "€19,90",
      image: "/images/haixiandoufubao.jpg",
      category: "Meeresfrüchte"
    },
    {
      id: 15,
      name: "猪肉粉条",
      description: "Gekochte Schweinebauch mit Rotkartoffelnudeln und Chinakoh",
      price: "€21,90",
      image: "/images/zhuroufentiao.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 16,
      name: "鸭血肥肠",
      description: "Gekochte Ente Blut mit Schweine Darm, scharf",
      price: "€19,90",
      image: "/images/yaxuefeichang.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 17,
      name: "铁板沙茶牛",
      description: "Gebratene Rindfleisch mit Gemüse, Sha-Cha Soße auf Heiße-Platte",
      price: "€20,90",
      image: "/images/tiebanshachaniu.jpg",
      category: "Rind- und Lammfleisch"
    },
    {
      id: 18,
      name: "毛血旺",
      description: "Sichuan Specialtät, sehr scharf",
      price: "€22,90",
      image: "/images/maoxuewang.jpg",
      category: "Speziell Empfehlung"
    },
    {
      id: 19,
      name: "铁板气球鸭",
      description: "Aufgeblasene Ente auf der heißen Platte",
      price: "€24,90",
      image: "/images/tiebanqiqiuya.jpg",
      category: "Entenfleisch"
    },
    {
      id: 20,
      name: "火烧冰淇淋",
      description: "Gebackene Feuer Eis",
      price: "€7,50",
      image: "/images/huoshaobingqilin.jpg",
      category: "Dessert"
    },
    {
      id: 21,
      name: "草包牛肉",
      description: "Rindfleisch-Salat mit Gemüsestreifen, Koriander und Chilis",
      price: "€12,90",
      image: "/images/caobaoniurou.jpg",
      category: "Vorspeisen"
    },
    {
      id: 22,
      name: "杏仁鸡排",
      description: "Gebackenes Hühnerbrustfilet paniert mit Mandeln und süß sauer Soße",
      price: "€18,90",
      image: "/images/xingrenjipai.jpg",
      category: "Hühnerfleisch"
    },
    {
      id: 23,
      name: "功夫汤",
      description: "Kung Fu Suppe, mit Hühnerbrust und Gemüse",
      price: "€4,90",
      image: "/images/gongfutang.jpg",
      category: "Suppen"
    },
    {
      id: 24,
      name: "干锅排骨",
      description: "Trocken gebratene Schweine Rippchen",
      price: "€16,90",
      image: "/images/ganguopaigu.jpg",
      category: "Trocken Wok"
    },
    {
      id: 25,
      name: "鼎尚拼盘",
      description: "Dingshang Vorspeise platte (Mini-rollen, Wan-tan, Garnelen und Hühnerstücke)",
      price: "€9,90",
      image: "/images/dingshangpinpan.jpg",
      category: "Vorspeisen"
    },
    {
      id: 26,
      name: "干锅鱿鱼须",
      description: "Trocken gebratene Tintenfisch-Tentakel",
      price: "€18,90",
      image: "/images/ganguoyouyuxu.jpg",
      category: "Trocken Wok"
    },
    {
      id: 27,
      name: "干锅双花",
      description: "Trocken gebratener Brokkoli und Blumenkohl",
      price: "€15,90",
      image: "/images/ganguoshuanghua.jpg",
      category: "Trocken Wok"
    },
    {
      id: 28,
      name: "鱼香茄子",
      description: "Gebratene Aubergine nach Sichuan-Art, leicht scharf",
      price: "€13,90",
      image: "/images/yuxiangqiezi.jpg",
      category: "Vegetarische Gerichte"
    },
    {
      id: 29,
      name: "泰咖喱鸡",
      description: "Gebratenes Hühnerfilet mit Gemüse, rotem Curry und Kokosmilch",
      price: "€16,90",
      image: "/images/taigaliji.jpg",
      category: "Hühnerfleisch"
    },
    {
      id: 30,
      name: "口水鸡",
      description: "Hähnchenkeulen mit Gurken, Koriander und Erdnüsse",
      price: "€9,90",
      image: "/images/koushuiji.jpg",
      category: "Vorspeisen"
    },
    {
      id: 31,
      name: "干锅鸡块",
      description: "Trocken gebratene Hühnerfleisch",
      price: "€17,90",
      image: "/images/ganguojikuai.jpg",
      category: "Trocken Wok"
    },
    {
      id: 32,
      name: "炸香蕉 冰激凌",
      description: "Gebackene Banane mit Eis",
      price: "€7,90",
      image: "/images/zhaxiangjiaobingqilin.jpg",
      category: "Dessert"
    },
    {
      id: 33,
      name: "家常豆腐",
      description: "Gebratener Tofu mit Gemüse",
      price: "€14,90",
      image: "/images/jiachangdoufu.jpg",
      category: "Vegetarische Gerichte"
    }
  ];

  // Filter menu items by active category
  const filteredItems = activeCategory === 'Alle' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative h-[65vh] md:h-[80vh] lg:h-[70vh]">
        <img 
          src={`${import.meta.env.BASE_URL}images/dingshangdatingliang.jpg`}
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DingShang Restaurant</h1>
            <p className="text-xl md:text-2xl">Authentische chinesische Küche in München</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-red-800">Unsere Speisekarte</h2>
          <a
            href={`${import.meta.env.BASE_URL}menu.pdf`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-800 text-white hover:bg-red-700 shadow-md"
          >
            Mehr Menü öffnen
          </a>
        </div>
        
        {/* Category Tabs */}
        <div className="py-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2 mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-red-800 text-white shadow-md'
                    : 'bg-white text-gray-800 hover:bg-red-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} 
                alt={item.name} 
                className="w-full h-48 object-cover mx-auto"
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-semibold text-red-600">{item.price}</span>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Address Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontakt & Anfahrt</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div>
                    <p>Herzlich willkommen im China-Restaurant „Ding Shang“, einem
                      exquisiten chinesischem Restaurant in der malerischen Nähe des
                      Rosenheimer Platzes. Hier können Sie authentische SzechuanKüche, Huaiyang-Küche und einzigartige Fusionsgerichte
                      genießen. Unsere Spezialitäten umfassen verführerischen
                      Eichhörnchenfisch, köstlichen grünen Pfeffer-Barsch, geschmorte
                      Löwenkopfklöße, knusprig-zartes süß-saures Schweinefleisch,
                      aromatisch-kräftige Fischsuppe mit Tofu, verschiedene
                      vegetarische Gerichte, klassische Salzwasserente und viele weitere
                      Gerichte. Wir bieten Ihnen ein Fest für Ihren Geschmackssinn und
                      freuen uns auf Ihren Besuch!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p>089-51553888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Öffnungszeiten</p>
                    <p>Montag, Dienstag: 17:30 – 22:30</p>
                    <p>Mittwoch – Sonntag: 11:30 – 15:00 und 17:30 – 22:30</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Address & Map */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Unsere Adresse</h3>
              <div className="mb-6">
                <p className="font-semibold">DingShang Restaurant</p>
                <p>Franziskanerstr. 19</p>
                <p>81669 München</p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}images/cantingjingzi.jpg`}
                  alt="Restaurant Location Map" 
                  className="w-full h-64 object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p> 2025 DingShang Restaurant. Alle Rechte vorbehalten.</p>
      </footer>

      {/* Hide scrollbar for category tabs */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
