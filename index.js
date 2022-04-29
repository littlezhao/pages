const originalWords = [
  {
    derivation: '无',
    example: '无',
    explanation: '情感表现在言辞当中。同情见乎辞”。',
    pinyin: 'qíng jiàn hū cí',
    word: '情见乎词',
    abbreviation: 'qjhc',
  },
  {
    derivation: '《史记·魏其武安侯列传》武安遂怒，劾灌夫骂座不敬，系居室。”',
    example:
      '推门看竹，何妨王子乘舆，索酒指瓶，便仿～。★明·陈汝元《金莲记·郊遇》',
    explanation: '灌夫西汉著名将领。指灌夫酒后骂人泄愤。形容为人刚直敢言。',
    pinyin: 'guàn fū mà zuò',
    word: '灌夫骂座',
    abbreviation: 'gfmz',
  },
  {
    derivation: '《老子》善者不辩，辩者不善。”',
    example:
      '～，善者不来”，亦本《老子》善者不辩，辩者不善”句。★清·赵翼《陔余丛考·成语》',
    explanation: '善亲善，友好。强调来人不怀好意，要警惕防范。',
    pinyin: 'lái zhě bù shàn',
    word: '来者不善',
    abbreviation: 'lzbs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '前进后退均合规矩。',
    pinyin: 'jìn tuì yīng jǔ',
    word: '进退应矩',
    abbreviation: 'jtyj',
  },
  {
    derivation:
      '夏丐尊、叶圣陶《文心》十三专从书上去学文字，即使学的好，也只是些陈言老套，有什么用处呢？”',
    example: '无',
    explanation: '陈旧的言词和套数。',
    pinyin: 'chén yán lǎo tào',
    word: '陈言老套',
    abbreviation: 'cylt',
  },
  {
    derivation:
      '《新唐书·酷吏传·来俊臣》后信之，诏于丽景门别置狱，敕俊臣等颛按事，百不一贷。”',
    example: '无',
    explanation: '犹言无一宽免。',
    pinyin: 'bǎi bù yī dài',
    word: '百不一贷',
    abbreviation: 'bbyd',
  },
  {
    derivation: '无',
    example:
      '发表意见之前须对事情的真实情况先有所了解，不可一只半解便～，否则必将遭人耻笑。',
    explanation: '指空泛不切合实际的言论。',
    pinyin: 'dà fā miù lùn',
    word: '大发谬论',
    abbreviation: 'dfml',
  },
  {
    derivation:
      '《南史·孔休源传》［孔休源］迁御史中丞，正色直绳，无所回避，百僚惮之。”',
    example: '无',
    explanation: '指严正执法。',
    pinyin: 'zhèng sè zhí shéng',
    word: '正色直绳',
    abbreviation: 'zszs',
  },
  {
    derivation:
      '《文选·刘孝标》青简尚新，而宿草将列，泫然不知涕之无从也。虽隙驷不留，尺波电谢，而秋菊春兰，英华靡绝。”',
    example: '～，今昔同悲；嗟我吉人，而止于斯。★宋·洪适《又同寮祭文》',
    explanation: '波，水波。指人世短促，如波逝电闪。',
    pinyin: 'chǐ bō diàn xiè',
    word: '尺波电谢',
    abbreviation: 'cbdx',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第八十七回诸将皆拜伏曰‘丞相机算，神鬼莫测。’”',
    example:
      '想到这里，他抬头一看，威虎厅离他只有五十余步了，三十秒钟后，这场吉凶难卜，神鬼难测的斗争就要开始。★曲波《林海雪原》二０',
    explanation: '测推测。事情极诡秘，神鬼也难测度。形容谁也推测不出。',
    pinyin: 'shén guǐ mò cè',
    word: '神鬼莫测',
    abbreviation: 'sgmc',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第四十七回周瑜小子，偏怀浅戆，自负其能，辄欲以卵敌石；兼之擅作威福，无罪受刑，有功不赏。盖系旧臣，无端为所摧辱，心实恨之！”',
    example: '无',
    explanation: '用蛋去抵挡石头，比喻不自量力。',
    pinyin: 'yǐ luǎn dí shí',
    word: '以卵敌石',
    abbreviation: 'ylds',
  },
  {
    derivation:
      '清·李绿园《歧路灯》第一○二回这三人将篮子内物件，一齐摆出仔细瞧看，或者寸纸，或者只字，鉴影度形，一概俱无，又仍一件一件装入篮内。”',
    example: '无',
    explanation: '观察揣度人的形迹。',
    pinyin: 'jiàn yǐng duó xíng',
    word: '鉴影度形',
    abbreviation: 'jydx',
  },
  {
    derivation:
      '《五灯会元·东土祖师》王闻师言，涕泪交集曰‘此国何罪，彼土何祥。’”',
    example: '无',
    explanation: '犹涕泪交零。',
    pinyin: 'tì lèi jiāo jí',
    word: '涕泪交集',
    abbreviation: 'tljj',
  },
  {
    derivation: '《宋书·乐志一》移风改俗，致和乐之极。”',
    example: '公闲邪纳正，～。★《南史·宋纪上·武帝》',
    explanation: '改变旧的风俗习惯。同移风易俗”。',
    pinyin: 'yí fēng gǎi sú',
    word: '移风改俗',
    abbreviation: 'yfgs',
  },
  {
    derivation:
      '曹靖华《罗汉岭前吊秋白》对全世界来说，这些热情洋溢的报导，正是拨云雾而见青天啊！”',
    example: '无',
    explanation: '热烈的感情充分地流露出来。',
    pinyin: 'rè qíng yáng yì',
    word: '热情洋溢',
    abbreviation: 'rqyy',
  },
  {
    derivation:
      '《晋书·张轨传》圣王将举大事，必崇三讯之法，朝置谏官以匡大理，疑承弼以补阙拾遗。”',
    example: '其次扬清激浊，能～。★《明史·孙磐传》',
    explanation: '阙通缺”，缺失。拾遗补录遗漏。补录缺失遗漏的内容。',
    pinyin: 'bǔ quē shí yí',
    word: '补阙拾遗',
    abbreviation: 'bqsy',
  },
  {
    derivation: '明沈鲤《序》嗟乎，斯亦禁鼎一脔，尝者可以知其味已。”',
    example: '无',
    explanation: '御用鼎器中的一块肉。比喻珍美之物。',
    pinyin: 'jìn dǐng yī luán',
    word: '禁鼎一脔',
    abbreviation: 'jdyl',
  },
  {
    derivation:
      '宋·胡仔《苕溪渔隐从话后集》卷一余谓渊明高风峻节，固已无愧于四皓，然犹仰慕之，尤见其好贤尚友之情也。”',
    example:
      '蓝先生不佩服世界史中的任何圣哲与伟人，因而也就不去摹仿他们的～。★老舍《四世同堂》二十三',
    explanation: '高风高尚的品格；亮节坚贞的节操。形容道德和行为都很高尚。',
    pinyin: 'gāo fēng liàng jié',
    word: '高风亮节',
    abbreviation: 'gflj',
  },
  {
    derivation:
      '《汉书·霍光传》宣帝始立，谒见高庙，大将军光从骖乘。上内严惮之，若有芒刺在背。”',
    example: '无',
    explanation: '形容极度不安。',
    pinyin: 'rú máng zài bèi',
    word: '如芒在背',
    abbreviation: 'rmzb',
  },
  {
    derivation: '唐·韩愈《祭柳子厚文》玉佩琼琚，大放厥词。”',
    example: '有美人兮，～，吾梦见之。★宋·辛弃疾《沁园春》词',
    explanation:
      '玉佩玉做的佩饰。琼琚赤玉做的佩饰。①泛指玉制的佩饰。②对诗文作品的美称。',
    pinyin: 'yù pèi qióng jū',
    word: '玉佩琼琚',
    abbreviation: 'ypqj',
  },
  {
    derivation:
      '清·昭梿《啸亭杂录·梁提督》自丛岚叠嶂间以刀掘路，士卒各怀一铁钉，踵迹相接，攀钉而上。”',
    example: '无',
    explanation: '谓脚迹相连。形容人数众多，接连不断。同踵趾相接”。',
    pinyin: 'zhǒng jì xiāng jiē',
    word: '踵迹相接',
    abbreviation: 'zjxj',
  },
  {
    derivation:
      '《周礼·夏官·职方氏》其浸五湖。”《论语·颜渊》四海之内，皆兄弟也。”唐·吕岩《绝句》斗笠为帆扇作舟，五湖四海任遨游。”',
    example:
      '我们都是来自～，为了一个共同的革命目标，走到一起来了。★毛泽东《为人民服务》',
    explanation: '指全国各地，有时也指世界各地。现有时也比喻广泛的团结。',
    pinyin: 'wǔ hú sì hǎi',
    word: '五湖四海',
    abbreviation: 'whsh',
  },
  {
    derivation:
      '明·李贽《与汪鼎甫书》所谓水中盐味，可取不可得，是为千古绝唱，当与古文远垂不朽者也。”',
    example: '无',
    explanation: '永垂不朽。',
    pinyin: 'yuǎn chuí bù xiǔ',
    word: '远垂不朽',
    abbreviation: 'ycbx',
  },
  {
    derivation: '唐·权德舆《赠老将》诗白草黄云塞上秋，曾随骠骑出并州。”',
    example:
      '急觅是人，不知何往，惟独立沙碛中，～，四边无际。★清·纪昀《阅微草堂笔记·滦阳续录五》',
    explanation: '形容边塞秋季的荒凉景象。',
    pinyin: 'bái cǎo huáng yún',
    word: '白草黄云',
    abbreviation: 'bchy',
  },
  {
    derivation:
      '《孟子·尽心上》于不可已而已者，无所不已。于所厚者薄，无所不薄也。其进锐者，其退速。”',
    example:
      '～，助长也；所恶于智者，为其凿助长也。★清·陈澧《东塾读书记·孟子》',
    explanation: '锐迅速。急于求进者往往后退也快。',
    pinyin: 'jǐn ruì tuì sù',
    word: '进锐退速',
    abbreviation: 'jrts',
  },
  {
    derivation:
      '《黑籍冤魂》第六回可笑我们中国的官员，胆小如豆，莫说见着短衣窄袖蜂目高鼻的洋人惊得发慌，就是见了一个没辫子的光棍，手里提着一根赶狗棒，也要害怕起来。”',
    example: '无',
    explanation: '极言胆子小。',
    pinyin: 'dǎn xiǎo rú dòu',
    word: '胆小如豆',
    abbreviation: 'dxrd',
  },
  {
    derivation:
      '《庄子·秋水》盖师是而无非，师治而无乱呼？是未明天地之理，万物之情者也。是犹师天而无地，师阴而无阳，其不可行明矣。然且语而不舍，非愚则诬也。”',
    example: '无',
    explanation: '诬诬蔑。不是生性愚蠢的话，就是故意污蔑。',
    pinyin: 'fēi yú zé wū',
    word: '非愚则诬',
    abbreviation: 'fyzw',
  },
  {
    derivation:
      '宋·刘克庄《后村全集·和实之读邸报之一》鬼谷纵横舌，终南诡秘踪。”',
    example: '无',
    explanation: '诡秘神秘不可知；莫测无法捉摸。指人的行为态度神秘难以揣测。',
    pinyin: 'guǐ mì mò cè',
    word: '诡秘莫测',
    abbreviation: 'gmmc',
  },
  {
    derivation: '《法华经·宝塔品》若持八万四千法藏，十二部经，为人演说。”',
    example: '～颠倒想，与君同付醉眠中。★宋·陆游《醉歌》',
    explanation: '本为佛教表示事物众多的数字，后用以形容极多。',
    pinyin: 'bā wàn sì qiān',
    word: '八万四千',
    abbreviation: 'bwsq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '头脑昏晕，眼睛发花。同头昏目晕”。',
    pinyin: 'tóu hūn mù xuàn',
    word: '头昏目眩',
    abbreviation: 'thmx',
  },
  {
    derivation: '《庄子·人间世》知其不可奈何而安之若命，德之至也。”',
    example: '无',
    explanation: '指人遭受的不幸看作命中注定，因而甘心承受。',
    pinyin: 'ān zhī ruò mìng',
    word: '安之若命',
    abbreviation: 'azrm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻凶残的权臣。同九关虎豹”。',
    pinyin: 'jiǔ hūn hǔ bào',
    word: '九阍虎豹',
    abbreviation: 'jhhb',
  },
  {
    derivation:
      '元·刘君锡《来生债》楔子到家中我将这远年近日欠少我钱钞的文契，我都烧了。” 元·秦简夫《东堂老》第三折恰才柳隆卿胡子传把那远年近日欠下我的银子，都对付在你身上，你还我银子来。”',
    example: '无',
    explanation: '过去至现在；长期以来。同远年近岁”。',
    pinyin: 'yuǎn nián jìn rì',
    word: '远年近日',
    abbreviation: 'ynjr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '劣恶劣；昭著明显。恶劣的事迹非常明显。',
    pinyin: 'liè jì zhāo zhe',
    word: '劣迹昭着',
    abbreviation: 'ljzz',
  },
  {
    derivation:
      '明·陶宗仪《辍耕录》卷二十九骨咄犀，蛇角也，其性至毒，而能解毒，盖以毒攻毒也。”',
    example:
      '～，反而证明了反对白话者自己的不识字，不通文。★鲁迅《且介亭杂文二集·从别字”说开去》',
    explanation:
      '攻治。中医用语，指用含有毒性的药物治疗毒疮等恶性病。比喻利用不良事物本身的矛盾来反对不良事物，或利用恶人来对付恶人。',
    pinyin: 'yǐ dú gōng dú',
    word: '以毒攻毒',
    abbreviation: 'ydgd',
  },
  {
    derivation: '见背井离乡”。',
    example:
      '老夫做了二十年仕宦，万一遇见贼徒，岂能幸免，所以～，寄迹他方。★清·李渔《巧团圆·梦讯》',
    explanation: '指远离家乡，流落他方。',
    pinyin: 'bèi xiāng lí jǐng',
    word: '背乡离井',
    abbreviation: 'bxlj',
  },
  {
    derivation: '宋·朱熹《朱文公文集》十一宰相植党营私，孤负任使。”',
    example:
      '但昔日既与叛逆结盟，究非安分之辈。今名登黄榜，将来出仕，恐不免～。★清·李汝珍《镜花缘》第七回',
    explanation: '党集团；营谋求。坏人集结在一起，谋求私利，专干坏事。',
    pinyin: 'jié dǎng yíng sī',
    word: '结党营私',
    abbreviation: 'jdys',
  },
  {
    derivation: '南朝·梁·萧统《古诗十九首》葫马依北风，越鸟巢南枝。”',
    example:
      '但闻～，狐死首丘，万里亲戚坟墓，俱在南朝，早暮思想，食不甘味。★明·冯梦龙《醒世恒言》',
    explanation: '从南方飞来的鸟，筑巢时一定在南边的树枝上。比喻难忘故乡情。',
    pinyin: 'yuè niǎo nán qī',
    word: '越鸟南栖',
    abbreviation: 'ynnq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容拥挤或包围的非常严密。同水泄不通”。',
    pinyin: 'shuǐ xiè bù tòu',
    word: '水泄不透',
    abbreviation: 'sxbt',
  },
  {
    derivation:
      '唐·韩愈《争臣论》彼二圣一贤者，岂不知自安佚之为乐哉？诚畏天命而悲人穷也。”',
    example:
      '君生平绝口弗谈政治，独其～之怀，流露于不自觉，有如此者。★柳亚子《燕子龛遗诗序》',
    explanation:
      '悲天哀叹时世；悯人怜惜众人。指哀叹时世的艰难，怜惜人们的痛苦。',
    pinyin: 'bēi tiān mǐn rén',
    word: '悲天悯人',
    abbreviation: 'btmr',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '迷恋过度爱好而难以舍弃；骸骨尸骨。迷恋着尸骨。比喻舍不得丢弃陈旧腐朽的事物。',
    pinyin: 'mí liàn hài gǔ',
    word: '迷恋骸骨',
    abbreviation: 'mlhg',
  },
  {
    derivation: '南朝陈徐陵《陈文皇帝哀册文》勤民听政，昃食宵衣。”',
    example: '无',
    explanation: '入夜才吃晚饭，天不亮就穿衣起床。指勤于政务。',
    pinyin: 'zè shí xiāo yī',
    word: '昃食宵衣',
    abbreviation: 'zsxy',
  },
  {
    derivation: '《史记·孟子荀卿列传》为开第康庄之衢，高门大屋，尊宠之。”',
    example: '亲戚同～，朋友共肥马轻车。★元·无名氏《九世同居》第一折',
    explanation: '厦高大的房子。指高耸的楼房。',
    pinyin: 'gāo lóu dà shà',
    word: '高楼大厦',
    abbreviation: 'glds',
  },
  {
    derivation:
      '《淮南子·修务训》听其自流，待其自生，则鲧禹之功不立，而后稷之智不用。”',
    example: '无',
    explanation: '指不加约束、引导，听任自由发展。',
    pinyin: 'rèn qí zì liú',
    word: '任其自流',
    abbreviation: 'rqzl',
  },
  {
    derivation: '《吕氏春秋·禁塞》早朝晏罢，以告制兵者。”',
    example: '陛下～，以冀中兴日月之功。★宋·陈亮《上孝宗皇帝第一书》',
    explanation: '很早上朝，很迟退朝。指勤于政事。',
    pinyin: 'zǎo cháo yàn bà',
    word: '早朝晏罢',
    abbreviation: 'zcyb',
  },
  {
    derivation:
      '《资治通鉴·唐纪·太宗贞观元年》吾闻西域贾胡得美珠，剖身以藏之，有诸？”',
    example:
      '就失了手也有限的，怎么忽然又变出这～”和脾气来。★清·曹雪芹《红楼梦》第四十五回',
    explanation: '破开肚子把珍珠藏进去。比喻为物伤身，轻重颠倒。',
    pinyin: 'pōu fù cáng zhū',
    word: '剖腹藏珠',
    abbreviation: 'pfcz',
  },
  {
    derivation:
      '《后汉书·顺帝纪》王圣等惧有后祸，遂与丰京其构陷太子，太子坐废为济阴王。”',
    example: '无',
    explanation:
      '罗织收集编造；构陷用虚构的罪名去陷诬人。形容千方百计地陷害别人。',
    pinyin: 'luò zhī gòu xiàn',
    word: '罗织构陷',
    abbreviation: 'lzgx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容军队因受惊扰而乱纷纷地四下溃散。同鸟散鱼溃”。',
    pinyin: 'niǎo jīng yú sàn',
    word: '鸟惊鱼散',
    abbreviation: 'njys',
  },
  {
    derivation: '唐·王勃《滕王阁诗序》落霞与孤鹜齐飞，秋水共长天一色。”',
    example: '那洞庭湖真个波涛万顷，～。★清·钱彩《说岳全传》第四十九回',
    explanation: '水光与天色相浑。形容水天相接的辽阔景象。',
    pinyin: 'shuǐ tiān yī sè',
    word: '水天一色',
    abbreviation: 'stys',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》卷十七况宗族远离，夫家存亡未卜，随缘快活，亦足了一生矣。”',
    example: '无',
    explanation: '卜猜测，估计。或是活着，或是死了，不能预测。',
    pinyin: 'cún wáng wèi bǔ',
    word: '存亡未卜',
    abbreviation: 'cwwb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '深而大的仇恨。同深仇大恨”。',
    pinyin: 'shēn chóu dà hèn',
    word: '深雠大恨',
    abbreviation: 'scdh',
  },
  {
    derivation:
      '郭沫若《洪波曲·后记》仅仅相隔两年，所写的东西，读起来就已经有隔世之感了。”',
    example: '无',
    explanation:
      '世古代以三十年为一世。指因人事或景物变化大而引起的、象隔了一个时代似的感觉。',
    pinyin: 'gé shì zhī gǎn',
    word: '隔世之感',
    abbreviation: 'gszg',
  },
  {
    derivation: '唐·禇亮《临高台》诗浮光随日度，漾影逐波深。”',
    example:
      '学问从实地上用功，议论自然确有根据；若～，中无成见，自然随波逐流，无所适从。★清·李汝珍《镜花缘》第十八回',
    explanation:
      '水面的光和掠过的影子，一晃就消逝。比喻观察不细致，学习不深入，印象不深刻。',
    pinyin: 'fú guāng lüè yǐng',
    word: '浮光掠影',
    abbreviation: 'fgly',
  },
  {
    derivation:
      '《老子》第八十章民各甘其食，美其服，安其俗，乐其业，至老死不相往来。”《汉书·货殖列传》各安其居而乐其业，甘其食而美其服。”',
    example:
      '一家正～，不想安禄山兵乱，潼关失守，天子西幸。★明·冯梦龙《醒世恒言》卷六',
    explanation: '安安定；乐喜爱，愉快；业职业。指安定愉快地生活和劳动。',
    pinyin: 'ān jū lè yè',
    word: '安居乐业',
    abbreviation: 'ajly',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '①一株麦子长出两个穗子。为丰收之兆，多用来称颂吏治成绩卓著。②唐教坊曲名。',
    pinyin: 'mài xiù liǎng qí',
    word: '麦秀两歧',
    abbreviation: 'mxlq',
  },
  {
    derivation: '《论语·阳货》吾岂匏瓜也哉？焉能系而不食。”',
    example: '无',
    explanation:
      '孔子比喻自己无法像匏瓜那样系悬着而不让人食用，应该出仕为官，有所作为◇用以比喻有才能的人却不为世所用。',
    pinyin: 'páo guā kōng xuán',
    word: '匏瓜空悬',
    abbreviation: 'pgkx',
  },
  {
    derivation:
      '《管子·明法》是故官之失其治也，是主以誉为赏，以毁为罚也，然则喜赏恶罚之人离公道而行私术矣。”尹知章注以毁誉为赏罚，则官自然失理。”',
    example:
      '以誉为赏，～也，则好赏恶罚之人，释公行，行私术，比周以相为也。★《韩非子·有度》',
    explanation: '根据人们的非毁给以惩罚。',
    pinyin: 'yǐ huǐ wéi fá',
    word: '以毁为罚',
    abbreviation: 'yhwf',
  },
  {
    derivation:
      '《孟子·尽心上》孟子曰‘天下有道，以道殉身；天下无道，以身殉道；未闻以道殉乎人者也。’”',
    example:
      '（白求恩）去年春上到延安，后来到五台山工作，不幸～。★毛泽东《纪念白求恩》',
    explanation: '殉为实现某一目标而献出生命。为忠于本职工作而献出生命。',
    pinyin: 'yǐ shēn xùn zhí',
    word: '以身殉职',
    abbreviation: 'ysxz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '通晓古代的学问，根据实际情况灵活行事。',
    pinyin: 'tōng gǔ dá biàn',
    word: '通古达变',
    abbreviation: 'tgdb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '血泪满面，心为之碎。形容极度悲痛。',
    pinyin: 'yǐn xuè bēng xīn',
    word: '饮血崩心',
    abbreviation: 'yxbx',
  },
  {
    derivation: '《三国志·魏志·邓艾传》将士皆攀木缘崖，鱼贯而进。”',
    example:
      '众才女除卞、孟两家姊妹在后，其余都是按名～。★清·李汝珍《镜花缘》第六十七回',
    explanation:
      '象游鱼一样一个跟着一个地接连着走。形容一个接一个地依次序进入。',
    pinyin: 'yú guàn ér rù',
    word: '鱼贯而入',
    abbreviation: 'yger',
  },
  {
    derivation:
      '《水浒传》第六二回谁知被赃官污吏，淫妇奸夫，通情陷害，监在死囚牢里。”',
    example:
      '[焦面鬼]口里喊叫杀了～，替民除害，要性命的，各自回避！”★《禅真后史》第二一回',
    explanation: '犹贪官污吏。',
    pinyin: 'zāng guān wū lì',
    word: '赃官污吏',
    abbreviation: 'zgwl',
  },
  {
    derivation: '《周易·系辞上》慢藏诲盗，冶容诲淫。”',
    example: '诲淫”诲盗”只是代表统治者的利益的说话。★朱自清《论雅俗共赏》',
    explanation:
      '原意是财物不仔细保管，招致别人来偷盗；女子打扮得十分妖艳，也是引诱别人来调戏。现指引诱人做奸淫盗窃的事。',
    pinyin: 'huì yín huì dào',
    word: '诲淫诲盗',
    abbreviation: 'hyhd',
  },
  {
    derivation:
      '清·吴敬梓《儒林外史》第十一回十一二岁就讲书、读文章，先把一部王守溪的稿子读的滚瓜烂熟。”',
    example: '曹寅从小对唐诗就背得～。★端木蕻良《曹雪芹》四',
    explanation: '象从瓜蔓上掉下来的瓜那样熟。形容读书或背书流利纯熟。',
    pinyin: 'gǔn guā làn shú',
    word: '滚瓜烂熟',
    abbreviation: 'ggls',
  },
  {
    derivation:
      '汉·元王皇后《赐公孙弘子孙当为后者爵诏》股肱宰臣，身行俭约，轻财重义，较然著明。”',
    example:
      '原来汪革素性～，枢密府里的人，一个个和他相好。★明·冯梦龙《喻世明言》卷三十九',
    explanation: '犹言轻财重义。指轻视财利而看重道义。',
    pinyin: 'qīng cái hào yì',
    word: '轻财好义',
    abbreviation: 'qchy',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第四十五回只怕燕窝我们家里还有，与你送几两。每日叫丫头们就熬了，又便宜，又不惊师动众的。”',
    example: '无',
    explanation: '师众人。比喻惊动很多人来做一件事。',
    pinyin: 'jīng shī dòng zhòng',
    word: '惊师动众',
    abbreviation: 'jsdz',
  },
  {
    derivation:
      '明·吴承恩《西游记》第七十三回浑身解数如花锦，双手腾那似辘轳。”',
    example: '无',
    explanation:
      '浑身全身，指所有的；解数那套数，指武艺。所有的本领，全部的权术手腕。',
    pinyin: 'hún shēn xiè shù',
    word: '浑身解数',
    abbreviation: 'hsxs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '行做，实行。藏；退隐。用任用。舍不用。',
    pinyin: 'xíng cáng yòng shě',
    word: '行藏用舍',
    abbreviation: 'xcys',
  },
  {
    derivation: '《宋书·王僧达传》再造之恩，不可妄属。”',
    example:
      '求大贤细细诊视。可有几希之望？倘能救其一命，真是～。★清·李汝珍《镜花缘》第三十回',
    explanation:
      '再造再生。使人再生的恩惠。比喻恩情极大，象救了自己的性命一样。',
    pinyin: 'ēn tóng zài zào',
    word: '恩同再造',
    abbreviation: 'etzz',
  },
  {
    derivation: '晋·潘岳《西征赋》终童山东之英妙，贾生洛阳之才子。”',
    example: '洛阳城里春光好，～他乡老。★前蜀·韦庄《菩萨蛮》',
    explanation: '本指西汉贾谊。泛指有文学才华的人。',
    pinyin: 'luò yáng cái zǐ',
    word: '洛阳才子',
    abbreviation: 'lycz',
  },
  {
    derivation:
      '《孔丛子·嘉言》十五许嫁而后从夫，是阳动而阴应，男唱而女随之义也。”',
    example: '无',
    explanation: '指女方必须附和男方。形容夫妻和睦。',
    pinyin: 'nán chàng nǚ suí',
    word: '男唱女随',
    abbreviation: 'ncns',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容描写或模仿得非常巧妙，非常逼真。',
    pinyin: 'wéi miào wéi xiāo',
    word: '唯妙唯肖',
    abbreviation: 'wmwx',
  },
  {
    derivation: '《论语·子罕》夫子循循善诱人，博我以文，约我以礼，欲罢不能。”',
    example:
      '设或命运坎坷，从中别生枝节，拖延日久，虽要将就了事，～。★清·李汝珍《镜花缘》第十二回',
    explanation: '欲想；罢停，歇。要停止也不能停止。',
    pinyin: 'yù bà bù néng',
    word: '欲罢不能',
    abbreviation: 'ybbn',
  },
  {
    derivation: '宋·欧阳修《憎苍蝇赋》奈何引类呼朋，摇头鼓翼。”',
    example: '丹士～，又去约了两三个帮手来做。★明·凌濛初《初刻拍案惊奇》卷十八',
    explanation: '呼叫；引招来；类同类。指招引志趣相同的人。',
    pinyin: 'hū péng yǐn lèi',
    word: '呼朋引类',
    abbreviation: 'hpyl',
  },
  {
    derivation:
      '《乐府诗集·郊庙歌辞十二·积善歌》饮福受胙，舞降歌迎，滔滔不竭，洪惟水行。”',
    example:
      '张九龄善谈论，每与宾客议论经旨，～，如下阪走丸也。★五代·王仁裕《开元天宝遗事·走丸之辩》',
    explanation: '比喻像流水一样连续不断。',
    pinyin: 'tāo tāo bù jié',
    word: '滔滔不竭',
    abbreviation: 'ttbj',
  },
  {
    derivation:
      '《左传·僖公二年》齐寺人貂始漏师於多鱼。”杜预注多鱼，地名……《传》言貂於此始擅贵宠，漏洩桓公军事，为齐乱张本。”',
    example:
      '约以晦日同时进袭，而汉奸有～，洋人踞城者皆预为准备。★清·夏燮《中西纪事·海疆殉难》',
    explanation: '指泄漏军事机密。',
    pinyin: 'duō yú zhī lòu',
    word: '多鱼之漏',
    abbreviation: 'dyzl',
  },
  {
    derivation: '《战国策·楚策四》见兔而顾犬，未为晚也。”',
    example:
      '夫～，或未为晚，今能议及，岂不犹愈于已。★清·梁启超《我政府之对俄政策》',
    explanation:
      '顾回头看。看到了兔子，再回头叫唤猎狗去追捕。比喻动作虽稍迟，但赶紧想办法，还来得及。',
    pinyin: 'jiàn tù gù quǎn',
    word: '见兔顾犬',
    abbreviation: 'jtgq',
  },
  {
    derivation: '无',
    example: '这次贿选的丑闻，使得他～，真是太不值得了。',
    explanation: '完全丧失了威严和信誉。',
    pinyin: 'wēi fēng sǎo dì',
    word: '威风扫地',
    abbreviation: 'wfsd',
  },
  {
    derivation:
      '明·吴承恩《西游记》第三十五回三藏闻言，惊恐失色道‘徒弟，似此如何？’行者笑道‘放心！放心！’把他这宝贝都拿来与我。”',
    example: '无',
    explanation: '害怕得脸都变了色。',
    pinyin: 'jīng kǒng shī sè',
    word: '惊恐失色',
    abbreviation: 'jkss',
  },
  {
    derivation: '《论语·为政》吾十有五而志于学，三十而立。”',
    example: '无',
    explanation: '指人在三十岁前后有所成就。',
    pinyin: 'sān shí ér lì',
    word: '三十而立',
    abbreviation: 'ssel',
  },
  {
    derivation:
      '元·秦简夫《东堂老》第二折你道有左慈术踢天弄井，项羽力拔山也那举鼎。”',
    example:
      '咱们城里的孩子，个个～，鬼聪明倒是有的。★清·曹雪芹《红楼梦》第81回',
    explanation: '能上天，能入地。比喻本领极大。也形容顽皮到极点。。',
    pinyin: 'tī tiān nòng jǐng',
    word: '踢天弄井',
    abbreviation: 'ttnj',
  },
  {
    derivation:
      '《诗经·王风·黍离》序周大夫行役，至于宗周，过宗庙宫室，尽为禾黍，闵周室之颠覆。”',
    example:
      '一路上晓行夜宿，只觉得景物都非，不胜～之感。★清·吴趼人《痛史》第十七回',
    explanation: '比喻怀念祖国的情思。',
    pinyin: 'gù gōng hé shǔ',
    word: '故宫禾黍',
    abbreviation: 'gghs',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '众人一心，共同努力。亦作齐心同力”、朋心合力”、齐心协力”、齐心合力”。',
    pinyin: 'qí xīn bìng lì',
    word: '齐心并力',
    abbreviation: 'qxbl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容花样多，有些神秘莫测。',
    pinyin: 'shén méi guǐ dào',
    word: '神眉鬼道',
    abbreviation: 'smgd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '眼睛都要望穿了。形容盼望殷切。同望眼欲穿”。',
    pinyin: 'wàng yǎn jiāng chuān',
    word: '望眼将穿',
    abbreviation: 'wyjc',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第三十三回因为幕友赵大架子被参在内，留在衙门恐怕不便，就叫自己兄弟二大人通信给他，叫他暂时搬出衙门，好遮人耳目。”',
    example: '无',
    explanation: '遮遮掩。遮掩他人视听。指玩弄手法，掩盖真相。',
    pinyin: 'zhē rén ěr mù',
    word: '遮人耳目',
    abbreviation: 'zrem',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '可以数日子看到功效。谓成功极快。',
    pinyin: 'jì rì zòu gōng',
    word: '计日奏功',
    abbreviation: 'jrzg',
  },
  {
    derivation: '《诗经·卫风·考盘》独寐寤言，永矢弗谖。”',
    example: '无',
    explanation: '决心永远牢记着。',
    pinyin: 'yǒng shǐ fú xuān',
    word: '永矢弗谖',
    abbreviation: 'ysfx',
  },
  {
    derivation:
      '《隋书·李德林传》且临敌代将，自古所难，乐毅所以辞燕，赵括以之败赵。”',
    example: '无',
    explanation: '易改变，变换。临到作战之前调换将领。',
    pinyin: 'lín dí yì jiàng',
    word: '临敌易将',
    abbreviation: 'ldyj',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第二十一回真是吃的，喝的，穿的，戴的，无一不精，无一不备。”',
    example: '无',
    explanation: '指样样齐全。',
    pinyin: 'wú yī bù bèi',
    word: '无一不备',
    abbreviation: 'wybb',
  },
  {
    derivation: '《庄子·人间世》今吾朝受命而夕饮冰，我其内热与？”',
    example: '无',
    explanation: '形容十分惶恐焦灼。',
    pinyin: 'yǐn bīng nèi rè',
    word: '饮冰内热',
    abbreviation: 'ybnr',
  },
  {
    derivation: '《论语·季氏》及其壮也，血气方刚，戒之在斗。”',
    example:
      '公子杨干，乃悼公之同母弟，年方一十九岁，新拜中军戎御之职，～，未经战阵。★明·冯梦龙《东周列国志》第六十回',
    explanation: '血气精力；方正；刚强劲。形容年青人精力正旺盛。',
    pinyin: 'xuè qì fāng gāng',
    word: '血气方刚',
    abbreviation: 'xqfg',
  },
  {
    derivation:
      '明·谢榛《四溟诗话》卷四以诗志别，分韵得‘秋’字，援笔立就，一气浑成。”',
    example:
      '诗有有篇无句者，通首清老，～，恰无佳句令人传诵。★清·袁枚《随园诗话》卷五',
    explanation: '形容诗文首尾贯通，完满自然，不见雕凿。',
    pinyin: 'yī qì hún chéng',
    word: '一气浑成',
    abbreviation: 'yqhc',
  },
  {
    derivation: '《庄子·养生主》提刀而立，为之四顾，为之踌躇满志。”',
    example:
      '这在胡景伊自然是～，而在尹昌衡则会义愤填膺了。★郭沫若《少年时代·黑猫》',
    explanation:
      '踌躇从容自得的样子；满满足；志志愿。形容对自己取得的成就非常得意。',
    pinyin: 'chóu chú mǎn zhì',
    word: '踌躇满志',
    abbreviation: 'ccmz',
  },
  {
    derivation:
      '明·凌濛初《二刻拍案惊奇》卷二十二又有一班猛勇骁悍之辈，揎拳舞袖，说强夸胜，自称好汉，相见了便觉分外兴高，说话处脾胃多燥，行事时举步生风。”',
    example: '无',
    explanation: '伸出拳头，挥动衣袖。一种粗野蛮横的姿态。',
    pinyin: 'xuān quán wǔ xiù',
    word: '揎拳舞袖',
    abbreviation: 'xqwx',
  },
  {
    derivation:
      '明·凌濛初《〈二刻拍案惊奇〉小引》支言俚说不足供酱瓿，而翼飞胫走，较拈髭呕血笔冢研穿者，售不售反霄壤隔也。”',
    example: '无',
    explanation: '秃笔成坟，砚磨穿孔。指写作著述功力极深。',
    pinyin: 'bǐ zhǒng yán chuān',
    word: '笔冢研穿',
    abbreviation: 'bzyc',
  },
  {
    derivation:
      '《晋书·嵇康传》自卜已审，若道尽涂殚则已耳，足下无事冤之令转于沟壑也。”',
    example:
      '国学国学，新学家既薄为不足道”，国学家又道而不能亨，你真要～了！★鲁迅《热风·以震其艰深”》',
    explanation: '道、途路。走到路的尽头。形容无路可走，面临末日。',
    pinyin: 'dào jìn tú qióng',
    word: '道尽途穷',
    abbreviation: 'djtq',
  },
  {
    derivation:
      '《晏子春秋·外篇·不合经术者》东海之中，有水而赤，其中有枣，华而不实，何也。”《左传·文公五年》且华而不实，怨之所聚也。”',
    example: '～，脆而不坚。★毛泽东《改造我们的学习》',
    explanation: '华开花。花开得好看，但不结果实。比喻外表好看，内容空虚。',
    pinyin: 'huá ér bù shí',
    word: '华而不实',
    abbreviation: 'hebs',
  },
  {
    derivation:
      '《礼记·大学》君子贤其贤而亲其亲，小人乐其乐而利其利。此以没世不忘也。”',
    example:
      '惟在深入其心，斯～，而穆然足千古也。★清·李棒阊《守一斋笔记·副戎传》',
    explanation: '没世死。一辈子也忘不了。',
    pinyin: 'mò shì nán wàng',
    word: '没世难忘',
    abbreviation: 'msnw',
  },
  {
    derivation: '《诗·周南·羔羊》羔羊之皮，素丝五陀，退食自公，委蛇委蛇。”',
    example: '无',
    explanation: '指正直廉洁的官吏。',
    pinyin: 'sù sī gāo yáng',
    word: '素丝羔羊',
    abbreviation: 'ssgy',
  },
  {
    derivation:
      '唐·吕令问《云中古城赋》歌台舞榭，月殿云堂。”宋·辛弃疾《永遇乐·京口北固亭怀古》舞榭歌台，风流总被雨打风吹去。”',
    example: '无',
    explanation: '榭建筑在高台上的房屋。演奏乐曲、表演歌舞的场所。',
    pinyin: 'gē tái wǔ xiè',
    word: '歌台舞榭',
    abbreviation: 'gtwx',
  },
  {
    derivation: '唐·韩愈《进学解》记事者必提其要，篡言者必钩其玄。”',
    example: '读记事篡言之书，博矣，详矣，～，则已约矣。★清·陈澧《与王峻之书》',
    explanation: '提要指出纲要；钩玄探索精微。精辟而简明地指明主要内容。',
    pinyin: 'tí yào gōu xuán',
    word: '提要钩玄',
    abbreviation: 'tygx',
  },
  {
    derivation:
      '毛泽东《〈农村调查〉的序言和跋》假若我们缩小自己的机构，使兵精政简，我们的战争机构虽然小了，仍然是有力量的；而因克服了鱼大水小的矛盾，使我们的战争的机构适合战争的情况，我们就将显得越发有力量……”',
    example: '无',
    explanation: '比喻生产不够消费。也比喻机构臃肿，行动不灵。',
    pinyin: 'yú dà shuǐ xiǎo',
    word: '鱼大水小',
    abbreviation: 'ydsx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指名节得以保全。',
    pinyin: 'wán míng quán jié',
    word: '完名全节',
    abbreviation: 'wmqj',
  },
  {
    derivation:
      '《儒林外史》第六回但自古道‘公而忘私，国而忘家。’我们科场是朝廷大典，你我为朝廷办事，就是不顾私亲，也还觉得于心无愧。”',
    example: '无',
    explanation: '指为国事而忘其家。',
    pinyin: 'guó ér wàng jiā',
    word: '国而忘家',
    abbreviation: 'gewj',
  },
  {
    derivation: '唐·李商隐《北齐》诗之一小莲玉体横陈夜，已报周师入晋阳。”',
    example: '无',
    explanation: '形容人在床上横躺着。',
    pinyin: 'yī tà héng chén',
    word: '一榻横陈',
    abbreviation: 'ythc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容人多语杂。同七嘴八张”。',
    pinyin: 'qī zhāng bā zuǐ',
    word: '七张八嘴',
    abbreviation: 'qzbz',
  },
  {
    derivation:
      '蔡东藩、许廑父《民国通俗演义》第三六回袁总统得此奇袭，未免顾盼自豪。”',
    example: '或猜拳，或赋诗，酒酣耳热，～。★曹禺《北京人》第三幕',
    explanation: '形容得意忘形的样子。同顾盼自雄”。',
    pinyin: 'gù pàn zì háo',
    word: '顾盼自豪',
    abbreviation: 'gpzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻非常勉强。同强死强活”。',
    pinyin: 'qiǎng sǐ lài huó',
    word: '强死赖活',
    abbreviation: 'qslh',
  },
  {
    derivation: '《封神演义》第九二回梅山七怪阻周兵，逞异夸能苦战争。”',
    example: '无',
    explanation: '施展奇异本事，夸耀能力高强。',
    pinyin: 'chěng yì kuā néng',
    word: '逞异夸能',
    abbreviation: 'cykn',
  },
  {
    derivation:
      '古乐府《孔雀东南飞》磐石方且厚，可以卒千年。”《文选·古诗十九首》良无磐石固，虚名复何有？”',
    example: '我们伟大的祖国～。',
    explanation: '坚坚固，结实；磐大石头。象大石头一样坚固。比喻不可动摇。',
    pinyin: 'jiān rú pán shí',
    word: '坚如磐石',
    abbreviation: 'jrps',
  },
  {
    derivation:
      '罗广斌、杨益言《红岩》第十六章楼三室的对联，引用了古人的诗句‘满园春色关不住，一枝红杏出墙头。’横额是‘大地春回’。”',
    example: '无',
    explanation:
      '指冬去春来，草木萌生，大地上出现一片生机景象。有时亦用比喻形势好转。',
    pinyin: 'dà dì chūn huí',
    word: '大地春回',
    abbreviation: 'ddch',
  },
  {
    derivation:
      '汉·枚乘《上书谏吴王》欲汤之沧，一人炊之，百人扬之，无益也；不如绝薪止火而已。”《三国志·魏书·刘弇传》扬汤止沸，使不焦烂。”',
    example: '无',
    explanation:
      '把锅里开着的水舀起来再倒回去，使它凉下来不沸腾。比喻办法不彻底，不能从根本上解决问题。',
    pinyin: 'yáng tāng zhǐ fèi',
    word: '扬汤止沸',
    abbreviation: 'ytzf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用心揣摩，追随仿效。',
    pinyin: 'xīn mó shǒu zhuī',
    word: '心摹手追',
    abbreviation: 'xmsz',
  },
  {
    derivation: '《左传·桓公十年》匹夫无罪，怀璧其罪。”',
    example: '无',
    explanation: '匹夫古指平民中的男子，后泛指一般人。一般人是没有罪过的。',
    pinyin: 'pǐ fū wú zuì',
    word: '匹夫无罪',
    abbreviation: 'pfwz',
  },
  {
    derivation: '梁启超《知耻学会叙》越惟无耻，故安于城下之辱。”',
    example: '无',
    explanation: '指兵临城下屈膝求和的耻辱。',
    pinyin: 'chéng xià zhī rǔ',
    word: '城下之辱',
    abbreviation: 'cxzr',
  },
  {
    derivation:
      '唐·张彦远《法书要录》第七卷颉首四目，通于神明，仰观奎星圆曲之势，俯察龟文鸟迹之象，博彩众美，合而为字，是曰古文。”',
    example: '无',
    explanation: '指古代的象形文字。',
    pinyin: 'guī wén niǎo jì',
    word: '龟文鸟迹',
    abbreviation: 'gwnj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容女子走路姿态美好。同分花约柳”。',
    pinyin: 'fēn huā fú liǔ',
    word: '分花拂柳',
    abbreviation: 'fhfl',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '犹言舞文弄墨。故意玩弄文笔。原指曲引法律条文作弊◇常指玩弄文字技巧。',
    pinyin: 'wǔ cí nòng zhá',
    word: '舞词弄札',
    abbreviation: 'wcnz',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第六十九回日久天长，这些奴才们跟前，怎么说嘴呢？”',
    example: '学习外语没有什么诀窍，只有靠～地积累。',
    explanation: '时间长，日子久。',
    pinyin: 'rì jiǔ tiān cháng',
    word: '日久天长',
    abbreviation: 'rjtc',
  },
  {
    derivation:
      '宋·欧阳修《〈归田录〉序》又不依阿取容以循世俗，使怨嫉谤怒丛于一身，以受侮于群小。”',
    example: '你没有丝毫～的姿态，但你也不荒伧。★郭沫若《银杏》诗',
    explanation: '指依附随顺以取悦于人。',
    pinyin: 'yī ē qǔ róng',
    word: '依阿取容',
    abbreviation: 'yeqr',
  },
  {
    derivation:
      '《礼记·大学》所谓治国必先齐其家者，其家不可教，而能教人者，无之。故君子不出家而成教于国。”',
    example: '无',
    explanation: '整治家庭和治理国家。',
    pinyin: 'qí jiā zhì guó',
    word: '齐家治国',
    abbreviation: 'qjzg',
  },
  {
    derivation:
      '《孟子·梁惠王上》王坐于堂上，有牵牛而过堂下者。……曰‘何可废也，以羊易之。’”',
    example:
      '东床已招佳选，何知～；西邻纵有责言，终难指鹿为马。★明·冯梦龙《醒世恒言》卷七',
    explanation: '易更换。用羊来替换牛。比喻用这个代替另一个。',
    pinyin: 'yǐ yáng yì niú',
    word: '以羊易牛',
    abbreviation: 'yyyn',
  },
  {
    derivation: '语出《汉书·司马迁传赞》其文直，其事核。”',
    example:
      '然且一人绘一图，一图叙一事，附一赞，～，理明词约，直闺壸之箴鉴也。★明·沈德符《野获编补遗·刑部·重刊闺范序》',
    explanation: '事情确实，文辞直捷。',
    pinyin: 'shì hé yán zhí',
    word: '事核言直',
    abbreviation: 'shyz',
  },
  {
    derivation: '元·尚仲贤《气英布》第一折非是咱起风波，都自己惹灾招祸。”',
    example: '无',
    explanation: '给自己引来麻烦。同惹祸招灾”。',
    pinyin: 'rě zāi zhāo huò',
    word: '惹灾招祸',
    abbreviation: 'rzzh',
  },
  {
    derivation:
      '《韩非子·难势》；且夫尧、舜、桀、纣千世而一出，是比肩随踵而生也，世之治者不绝于中。”',
    example: '无',
    explanation: '犹比肩继踵。形容接连不断。',
    pinyin: 'bǐ jiān suí zhǒng',
    word: '比肩随踵',
    abbreviation: 'bjsz',
  },
  {
    derivation:
      '清·李绿园《歧路灯》第一○三回即如家嫂，是名门世族，他本族家进士一大堆，他偏是异样的难讲。”',
    example: '无',
    explanation: '有名望的世家大族。',
    pinyin: 'míng mén shì zú',
    word: '名门世族',
    abbreviation: 'mmsz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '取容讨好。为追求正义而不取悦于人。指人刚直不阿。',
    pinyin: 'yì bù qǔ róng',
    word: '义不取容',
    abbreviation: 'ybqr',
  },
  {
    derivation: '《管子·君臣下》墙有耳，伏寇在侧。墙有耳者，微谋外泄之谓也。”',
    example:
      '又谁料知己倾谈，忘了～，全灌进了杨子衢的耳中。★清·曾朴《孽海花》第三十三回',
    explanation:
      '隔着一道墙，也有人偷听。比喻即使秘密商量，别人也可能知道。也用于劝人说话小心，免得泄露。',
    pinyin: 'gé qiáng yǒu ěr',
    word: '隔墙有耳',
    abbreviation: 'gqye',
  },
  {
    derivation:
      '《左传·宣公十四年》楚子闻之，投袂而起，屦及于窒皇，剑及于寝门之外，车及于蒲胥之市。秋九月，楚子围宋。”',
    example: '无',
    explanation: '屦鞋；及赶上。形容行动坚决迅速。',
    pinyin: 'jiàn jí jù jí',
    word: '剑及屦及',
    abbreviation: 'jjjj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指披上冰雪的树木。也比喻品格高洁的人。',
    pinyin: 'qióng zhī yù shù',
    word: '琼枝玉树',
    abbreviation: 'qzys',
  },
  {
    derivation:
      '茅盾《夜读偶记》五他们都是些逃避现实的无病呻吟的梦想家，或者是啸傲风月的隐士。”',
    example: '无',
    explanation: '啸傲随意长啸吟咏游乐。在江湖山野中自由自在地吟咏游赏。',
    pinyin: 'xiào ào fēng yuè',
    word: '啸傲风月',
    abbreviation: 'xafy',
  },
  {
    derivation: '无',
    example: '希特勒是一个臭名远扬的战争罪犯。',
    explanation: '名名声；扬传播。坏名声传得很远。',
    pinyin: 'chòu míng yuǎn yáng',
    word: '臭名远扬',
    abbreviation: 'cmyy',
  },
  {
    derivation:
      '春秋·无名氏《灵枢·逆顺肥瘦篇》瘦人者，皮薄色少，肉廉廉然，薄唇轻言。”',
    example: '无',
    explanation: '形容多嘴，说话随便。',
    pinyin: 'báo chún qīng yán',
    word: '薄唇轻言',
    abbreviation: 'bcqy',
  },
  {
    derivation: '汉·扬雄《答刘歆书》少不得学，而心好沈博绝丽之文。”',
    example: '行卷～，脍炙一时。★清·平步清《霞外捃屑》卷五',
    explanation: '指文章的含意深远，内容渊博，文辞美妙。',
    pinyin: 'chén bó jué lì',
    word: '沈博绝丽',
    abbreviation: 'cbjl',
  },
  {
    derivation:
      '清·梁启超《论权利思想》试一读欧美诸国法律发达史，如立宪政，废奴隶……等诸大法律，何一不自血风肉雨中熏沐而来。”',
    example: '虽说～的精神，断无惜香怜玉的心绪。★清·曾朴《孽海花》',
    explanation: '形容剧烈残酷的屠杀或性格刚强。',
    pinyin: 'xuè fēng ròu yǔ',
    word: '血风肉雨',
    abbreviation: 'xfry',
  },
  {
    derivation:
      '《旧唐书·张瀎传》若能此际排难解纷，陈师鞠旅，共诛寇盗，迎奉銮舆，则富贵功名，指掌可取。”',
    example: '无',
    explanation: '掌手掌。手掌里的东西随时可以取得。形容非常容易。',
    pinyin: 'zhǐ zhǎng kě qǔ',
    word: '指掌可取',
    abbreviation: 'zzkq',
  },
  {
    derivation:
      '语出《战国策·赵策四》昔者尧见舜于草茅之中，席陇亩而荫庇桑，荫移而授天下传。”',
    example: '无',
    explanation: '指人之意气相投，相知无须时日长久。亦指时间短暂。',
    pinyin: 'sāng yīn bù xǐ',
    word: '桑荫不徙',
    abbreviation: 'sybx',
  },
  {
    derivation:
      '清·孔尚任《桃花扇·逃难》便天涯海崖，天涯海崖，十洲方外，铁鞋踏破三千界。”',
    example: '无',
    explanation: '比喻长途跋涉，到处寻求。',
    pinyin: 'tiě xié tà pò',
    word: '铁鞋踏破',
    abbreviation: 'txtp',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '黄鹂歌唱，燕子呢喃。形容春天的美好景象。',
    pinyin: 'yīng gē yàn yǔ',
    word: '莺歌燕语',
    abbreviation: 'ygyy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指沉迷于酒色和女色之中。同恋酒迷花”。',
    pinyin: 'liàn jiǔ tān huā',
    word: '恋酒贪花',
    abbreviation: 'ljth',
  },
  {
    derivation:
      '宋·苏轼《宝绘堂记》见可喜者，虽时复蓄之，然为人取去，亦不复惜也。譬之烟云之过眼，百鸟之感耳，岂不欣然接之，然去而不复念也。”',
    example:
      '余于器玩不甚留意，后为人取去，～矣。★清·纪昀《阅微草堂笔记》卷十七',
    explanation:
      '象烟云在眼前一晃而过。比喻事物很快就成为过去。也比喻身外之物，不必重视。',
    pinyin: 'yān yún guò yǎn',
    word: '烟云过眼',
    abbreviation: 'yygy',
  },
  {
    derivation:
      '《史记·秦本纪》第五卷造父以善御幸于周缪王……西巡狩，乐而忘归。”',
    example:
      '但凡有可以消遣处，不是十天，就是半月，～。★清·石玉昆《三侠五义》第八十九回',
    explanation: '非常快乐，竟忘记回家。形容沉迷于某种场合，舍不得离开。',
    pinyin: 'lè ér wàng fǎn',
    word: '乐而忘返',
    abbreviation: 'lewf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻随口乱说一气。同信口开合”。',
    pinyin: 'xìn kǒu kāi hē',
    word: '信口开喝',
    abbreviation: 'xkkh',
  },
  {
    derivation: '《左传·宣公十五年》瑾瑜匿瑕，国君含垢。”',
    example: '无',
    explanation: '比喻为长远利益而能包容大度。',
    pinyin: 'nì xiá hán gòu',
    word: '匿瑕含垢',
    abbreviation: 'nxhg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言买官鬻爵。指买卖官爵。',
    pinyin: 'mǎi jué fàn guān',
    word: '买爵贩官',
    abbreviation: 'mjfg',
  },
  {
    derivation:
      '明·施耐庵《水浒全传》第三十四回两个就清风山下厮杀，真乃是棋逢敌手难藏幸，将遇良材好用功。”',
    example: '无',
    explanation: '良材本领高的人。大将遇上本领高的人。比喻两雄争斗，本领相当。',
    pinyin: 'jiàng yù liáng cái',
    word: '将遇良材',
    abbreviation: 'jylc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '自瓮窥天，以瓢测海。比喻识见短浅。',
    pinyin: 'wèng tiān lí hǎi',
    word: '瓮天蠡海',
    abbreviation: 'wtlh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言顺应时俗。',
    pinyin: 'shì sú suí shí',
    word: '适俗随时',
    abbreviation: 'ssss',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '做得像真的一样。同假门假事”。',
    pinyin: 'jiǎ mén jiǎ shì',
    word: '假门假氏',
    abbreviation: 'jmjs',
  },
  {
    derivation: '《论语·述而》用之则行，舍之则藏，唯我与尔有是夫。”',
    example: '无',
    explanation: '任用就出来做事，不得任用就退隐。这是早时世大夫的处世态度。',
    pinyin: 'yòng shě xíng cáng',
    word: '用舍行藏',
    abbreviation: 'ysxc',
  },
  {
    derivation: '元·刘君锡《来生债》第二折爹家里论千论万满箱满柜无数的银子。”',
    example: '无',
    explanation: '指成千上万，数量极多。',
    pinyin: 'lùn qiān lùn wàn',
    word: '论千论万',
    abbreviation: 'lqlw',
  },
  {
    derivation:
      '浩然《石山柏》为了证明他说的这些话有根有底，他又跟我翻起石山柏的历史。”',
    example: '无',
    explanation: '犹言有根有据。',
    pinyin: 'yǒu gēn yǒu dǐ',
    word: '有根有底',
    abbreviation: 'ygyd',
  },
  {
    derivation: '《晋书·石勒载记下》大丈夫行事，磊磊落落，如日月皎然。”',
    example: '腷腷膊膊鸡初鸣，～向曙星。（元·左克明《古乐府·两头纤纤诗》）',
    explanation: '一一分明的样子。也形容胸怀坦荡。',
    pinyin: 'lěi lěi luò luò',
    word: '磊磊落落',
    abbreviation: 'llll',
  },
  {
    derivation:
      '元·尚仲贤《单鞭夺槊》第二折据着他全忠尽孝真良将，怎肯做背义忘恩那死囚，干费了百计千谋。”',
    example: '无',
    explanation: '想尽或用尽一切办法。同千方百计”。',
    pinyin: 'bǎi jì qiān móu',
    word: '百计千谋',
    abbreviation: 'bjqm',
  },
  {
    derivation:
      '三国·魏·阮籍《咏怀》之八出处殊途，俯仰异容。瞻叹古烈，思迈高踪。”',
    example: '～听所安，山林何得贱衣冠。★金·元好问《论诗》之十四',
    explanation: '指出仕与隐居的态度各不相同。',
    pinyin: 'chū chǔ shū tú',
    word: '出处殊途',
    abbreviation: 'ccst',
  },
  {
    derivation:
      '①唐·白居易《浪淘沙》词之六随波逐浪到天涯，迁客西还有几家。”②元·孟汉卿《魔合罗》第三折详察这生分女作歹为非，更和这忤逆男随波逐浪。”③明·罗贯中《三国演义》第七四回七军乱窜，随波逐浪者，不计其数。”',
    example:
      '这样没主意、～的人，不打他便打那个？★④清·西周生《醒世姻缘传》第五十三回',
    explanation:
      '①颠沛的样子。②谓同行同止。③随着波浪飘荡。④犹言随波逐流，随大流。',
    pinyin: 'suí bō zhú làng',
    word: '随波逐浪',
    abbreviation: 'sbzl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容篇幅过多，文辞冗长。同连篇累牍”。',
    pinyin: 'lián piān lèi fú',
    word: '连篇累幅',
    abbreviation: 'lplf',
  },
  {
    derivation: '宋·欧阳修《绿竹堂独饮》诗姚黄魏紫开次第，不觉成恨俱零凋。”',
    example: '无',
    explanation:
      '姚黄千叶黄花牡丹，出于姚氏民家；魏紫千叶肉红牡丹，出于魏仁溥家。原指宋代洛阳两种名贵的牡丹品种◇泛指名贵的花卉。',
    pinyin: 'yáo huáng wèi zǐ',
    word: '姚黄魏紫',
    abbreviation: 'yhwz',
  },
  {
    derivation: '《易·干》‘见龙在田’，德施普也。”',
    example: '无',
    explanation: '指恩德广被，无所不在。',
    pinyin: 'lóng dé zài tián',
    word: '龙德在田',
    abbreviation: 'ldzt',
  },
  {
    derivation: '无',
    example: '为人主管者必须公正无私，～，才能树立良好的纪律，使众人信服。',
    explanation: '该赏的赏，该罚的罚，绝不含糊。',
    pinyin: 'jiǎng fá fēn míng',
    word: '奖罚分明',
    abbreviation: 'jffm',
  },
  {
    derivation:
      '《后汉书·樊英传》而子始以不訾之身，怒万乘之主；及其享受爵禄，又不闻匡救之术，进退无所据矣。”',
    example: '～，两无所容，此可谓调和者之戒矣。★章炳麟《诸子学略说》',
    explanation: '前进和后退都失去了依据。形容无处容身。也指进退两难。',
    pinyin: 'jìn tuì shī jù',
    word: '进退失据',
    abbreviation: 'jtsj',
  },
  {
    derivation:
      '清·陈康祺《郎潜纪闻》卷一都兴阿诸公，忠贞朴劲，屡摧狂寇，栉风酾雨，始终戎幕。”',
    example: '无',
    explanation: '风梳发，雨洗头。形容奔波劳苦。同栉风沐雨”。',
    pinyin: 'zhì fēng shī yǔ',
    word: '栉风酾雨',
    abbreviation: 'zfsy',
  },
  {
    derivation:
      '元·王实甫《西厢记》第三本第二折直待我拄着拐帮闲钻懒，缝合唇送暖偷寒。”',
    example: '妄想～，谁与我传书寄简。★明·周履靖《锦笺记·传私》',
    explanation:
      '元曲中指暗中为男女私情牵线撮合。也指男女偷情苟合，幽会叙情◇比喻奉承拍马。也比喻对人关切。',
    pinyin: 'sòng nuǎn tōu hán',
    word: '送暖偷寒',
    abbreviation: 'snth',
  },
  {
    derivation: '《左传·隐公四年》大义灭亲，其是之谓乎。”',
    example: '这是一条汉子，～，死活只有一个党。★丁玲《太阳照在桑干河上》二四',
    explanation:
      '大义正义，正道；亲亲属。为了维护正义，对犯罪的亲属不循私情，使受到应得的惩罚。',
    pinyin: 'dà yì miè qīn',
    word: '大义灭亲',
    abbreviation: 'dymq',
  },
  {
    derivation:
      '蒲韧《二千年间》九王安石得到神宗皇帝的支持，大权在握，就全力来推行一些新的政治。”',
    example: '无',
    explanation: '手中掌握有很大权力。',
    pinyin: 'dà quán zài wò',
    word: '大权在握',
    abbreviation: 'dqzw',
  },
  {
    derivation: '清谭嗣同《报贝元微书》稽古振今，士风一奋。”',
    example: '无',
    explanation: '指考查古事作为借鉴，以振兴现代。',
    pinyin: 'jī gǔ zhèn jīn',
    word: '稽古振今',
    abbreviation: 'jgzj',
  },
  {
    derivation:
      '明·沈德符《万历野获编·贾鲁河故道》计其功费，用银不过二三万，用夫不过三万余名，而大工告成矣。 ”',
    example: '无',
    explanation: '指巨大工程或重要任务宣告完成。同大功告成”。',
    pinyin: 'dà gōng gào chéng',
    word: '大工告成',
    abbreviation: 'dggc',
  },
  {
    derivation:
      '唐·冯贽《云仙杂记·俗耳针砭诗肠鼓吹》引《高隐外书》戴飆春携双柑斗酒，人问何之，曰‘往听黄鹺声。’”',
    example: '无',
    explanation: '指春日胜游。',
    pinyin: 'dòu jiǔ shuāng gān',
    word: '斗酒双柑',
    abbreviation: 'djsg',
  },
  {
    derivation: '《易·系辞下》君子上交不谄，下交不渎。”',
    example: '无',
    explanation: '谄奉承；渎轻慢，亵渎。奉承上级，轻慢下属。',
    pinyin: 'shàng chǎn xià dú',
    word: '上谄下渎',
    abbreviation: 'scxd',
  },
  {
    derivation: '元·金仁杰《追韩信》第二折干功名千难万难，求身仕两次三番。”',
    example: '小生来这里走一遭，～。★明·施耐庵《水浒传》第十五回',
    explanation: '犹言好不容易。',
    pinyin: 'qiān nán wàn nán',
    word: '千难万难',
    abbreviation: 'qnwn',
  },
  {
    derivation: '明·张敬修《文忠公行实》每进讲经执义，广譬曲谕，词极剀切。”',
    example: '无',
    explanation: '指多方晓谕，委婉开导。',
    pinyin: 'guǎng pì qǔ yù',
    word: '广譬曲谕',
    abbreviation: 'gpqy',
  },
  {
    derivation: '《战国策·齐策四》归真反璞，则终身不辱。”',
    example: '无',
    explanation:
      '璞蕴藏有玉的石头，也指未雕琢的玉；归返回；真天然，自然。去掉外饰，还其本质。比喻回复原来的自然状态。',
    pinyin: 'fǎn pǔ guī zhēn',
    word: '反璞归真',
    abbreviation: 'fpgz',
  },
  {
    derivation: '《礼记·内则》父母有过，下气怡色，柔声以谏。”',
    example: '且如孝子事亲，须是～，起敬起孝。★《朱子语类》卷七四',
    explanation: '形容气色和悦，态度恭顺。同下气怡声”。',
    pinyin: 'xià qì yí sè',
    word: '下气怡色',
    abbreviation: 'xqys',
  },
  {
    derivation: '《孟子·公孙丑上》故事半古之人，功必倍之。”',
    example:
      '把这民间事业整顿得件件整齐，桩桩发达，这岂不是～吗？★清·梁启超《新中国未来记》第三回',
    explanation: '指工作费力大，收效小。',
    pinyin: 'shì bèi gōng bàn',
    word: '事倍功半',
    abbreviation: 'sbgb',
  },
  {
    derivation:
      '南朝·梁·刘勰《文心雕龙·事类》事类者，盖文章之外，据事以类义，援古以证今者也。”',
    example: '～，极力为之。★清·黄宗羲《柳敬亭传》',
    explanation: '援引。引述古事来证明今事。',
    pinyin: 'yá gǔ zhèng jīn',
    word: '援古证今',
    abbreviation: 'ygzj',
  },
  {
    derivation:
      '唐·王维《送郑五赴任新都序》牵衣肘见，步雪履穿，获戾由中，是贫非病。”',
    example: '无',
    explanation: '形容人穷困潦倒。',
    pinyin: 'bù xuě lǚ chuān',
    word: '步雪履穿',
    abbreviation: 'bxlc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻自夸其才以求任用或信任。同衒玉自售”。',
    pinyin: 'zuì yù qiú shòu',
    word: '衒玉求售',
    abbreviation: 'zyqs',
  },
  {
    derivation:
      '汉·陈淋《为曹洪与魏文帝书》且夫墨子之守，萦带为垣，高不可登。”',
    example: '无',
    explanation: '形容难以达到。也形容人高高在上，使人难接近。同高不可攀”。',
    pinyin: 'gāo bù kě dēng',
    word: '高不可登',
    abbreviation: 'gbkd',
  },
  {
    derivation: '《元史·胡长孺传》卓行危论，奇文瑰句。”',
    example: '无',
    explanation: '瑰珍奇。优美的文章。',
    pinyin: 'qí wén guī jù',
    word: '奇文瑰句',
    abbreviation: 'qwgj',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第四回小的闻得老爷补升此任，亦系贾府王府之力，此薛蟠即贾府之亲，老爷何不顺水行舟，作个整人情，将此案了结，日后也好去见贾府王府。”',
    example: '这男女二家，便～，不费推移之力。★清·李绿园《歧路灯》第一○七回',
    explanation: '顺着水流的方向行船。比喻顺应情势说话行事。',
    pinyin: 'shùn shuǐ xíng zhōu',
    word: '顺水行舟',
    abbreviation: 'ssxz',
  },
  {
    derivation: '《论语·述而》默而识之，学而不厌，诲人不倦，何有于我哉？”',
    example:
      '对自己，～”，对人家，诲人不倦”，我们应取这种态度。★毛泽东《中国共产党在民族战争中的地位》',
    explanation: '厌满足。学习总感到不满足。形容好学。',
    pinyin: 'xué ér bù yàn',
    word: '学而不厌',
    abbreviation: 'xeby',
  },
  {
    derivation: '无',
    example: '多挖一锹煤，也是给社会主义建设增砖添瓦嘛！',
    explanation: '犹添砖加瓦。比喻做一些工作，尽一点力量。',
    pinyin: 'zēng zhuān tiān wǎ',
    word: '增砖添瓦',
    abbreviation: 'zztw',
  },
  {
    derivation:
      '元·关汉卿《窦娥冤》第四折那山阳县有用毒药谋死公公犯妇窦娥，他问斩之时，曾发愿道‘若是果有冤枉，着你楚州三年不雨，寸草不生。’可有这件事来？”',
    example: '无',
    explanation:
      '寸草一点儿草。形容土地贫瘠，连一点儿草都不长。亦形容灾情严重。',
    pinyin: 'cùn cǎo bù shēng',
    word: '寸草不生',
    abbreviation: 'ccbs',
  },
  {
    derivation:
      '鲁迅《且介亭杂文·病后杂谈之余》今人标点古书而古书亡，因为他们乱点一通，佛头着粪这是古书的水火兵虫以外的三大厄。”',
    example: '无',
    explanation:
      '指使古书遭受损毁的四种灾害水灾、火灾、战乱和书蠹。也泛指各种天灾人祸。',
    pinyin: 'shuǐ huǒ bīng chóng',
    word: '水火兵虫',
    abbreviation: 'shbc',
  },
  {
    derivation:
      '明·吴承恩《西游记》第七十五回兄弟，你虽无甚本事，好道也是个人。俗云‘放屁添风。’你也可壮我些胆气。”',
    example: '无',
    explanation: '比喻在一边助威。',
    pinyin: 'fàng pì tiān fēng',
    word: '放屁添风',
    abbreviation: 'fptf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '在长江边给战马喝水。指渡江南下进行征伐。',
    pinyin: 'yǐn mǎ cháng jiāng',
    word: '饮马长江',
    abbreviation: 'ymcj',
  },
  {
    derivation:
      "茅盾《雨天杂写》则此一特点不能不有一佳名，故拟题曰'鸡零狗碎'云尔。”",
    example:
      '那～的事，恕不细说，但值得大书特书的奇迹，放过未免可惜。★高晓声《李顺大造屋》',
    explanation: '形容事物零碎细小，不成系统。',
    pinyin: 'jī líng gǒu suì',
    word: '鸡零狗碎',
    abbreviation: 'jlgs',
  },
  {
    derivation: '宋·苏轼《和子由渑池怀旧》人生到处知何似？应似飞鸿踏雪泥。”',
    example: '无',
    explanation: '比喻事情经过所留下的痕迹。',
    pinyin: 'fēi hóng yìn xuě',
    word: '飞鸿印雪',
    abbreviation: 'fhyx',
  },
  {
    derivation:
      '《后汉书·赵岐传》[孙嵩]密问岐曰‘视子非卖饼者，以相问而色动，不有重怨，即亡命乎？我北海孙宾石，阖门百口，势均力敌能相济。’”',
    example:
      '臣～，仰戴隆恩，无可报答，惟有竭诚尽力，为臣死忠，为子死孝，庶以少酬造之万一耳。★明张居正《归葬事毕谢恩疏》',
    explanation: '指全家所有人。',
    pinyin: 'hé mén bǎi kǒu',
    word: '阖门百口',
    abbreviation: 'hmbk',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第四十回娘儿俩先哭了个事不有余，大家劝住，他便忙着到祠堂行礼。”',
    example:
      '那婆子乐了个～，然后大家方才动身。★清·石昆玉《三侠五义》第五十三回',
    explanation: '谓达到极点。',
    pinyin: 'shì bù yǒu yú',
    word: '事不有余',
    abbreviation: 'sbyy',
  },
  {
    derivation:
      '清·昭槤《啸亭杂录·阿文成相度》陪臣汗流夹背，出谓人曰‘此诚宰相语。’”',
    example: '无',
    explanation: '形容非常恐惧或非肠怕。同汗流浃背”。',
    pinyin: 'hàn liú jiā bèi',
    word: '汗流夹背',
    abbreviation: 'hljb',
  },
  {
    derivation:
      '明·无名氏《鸣凤记·驿里相逢》追想我昔日纠劾仇贼，岂是沽名干誉。”',
    example: '无',
    explanation: '犹沽名钓誉。指用某种不正当的手段捞取名誉。',
    pinyin: 'gū míng gàn yù',
    word: '沽名干誉',
    abbreviation: 'gmgy',
  },
  {
    derivation:
      '《孟子·滕文公下》子不通功易事，以羡补不足，则农有余粟，女有余布。”',
    example: '于是～，择其公且贤者，立而为之君。★严复《辟韩》',
    explanation: '分工合作，互通有无，拿多余的换没有的。',
    pinyin: 'tōng gōng yì shì',
    word: '通功易事',
    abbreviation: 'tgys',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》第十卷梅氏和善述到来，见十亲九眷都在眼前，一一相见了，也不免说几句求情的话儿。”',
    example:
      '只那刘家～，也就够他周流列国，辙环天下，传食于诸侯了。★《醒世姻缘传》第八回',
    explanation: '指众多亲戚。',
    pinyin: 'shí qīn jiǔ juàn',
    word: '十亲九眷',
    abbreviation: 'sqjj',
  },
  {
    derivation: '元·无名氏《闺怨》曲风，吹灭残灯，不由的见景生情，伤心。”',
    example: '人在～的时候，能联想起很多往事。',
    explanation: '受到眼前景物的触动，引起联想，产生某种感情。',
    pinyin: 'chù jǐng shēng qíng',
    word: '触景生情',
    abbreviation: 'cjsq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '精神愉悦，心胸开阔。',
    pinyin: 'shén yí xīn kuàng',
    word: '神怡心旷',
    abbreviation: 'syxk',
  },
  {
    derivation:
      '华而实《汉衣冠》第二回想借着师友渊源、故旧情谊来笼络这位锋芒毕露的身居要位的武将。”',
    example: '鲁迅的杂文～。',
    explanation: '锋刀锋；芒枪头。比喻言词锋利，给人以威胁。',
    pinyin: 'fēng máng bī rén',
    word: '锋芒逼人',
    abbreviation: 'fmbr',
  },
  {
    derivation: '《周易·系辞下》上古结绳而治，后世圣人易之以书契。”',
    example:
      '曹蜍、李志虽见在，厌厌如九泉下人，人皆如此，便可～。★南朝·宋·刘义庆《世说新语·品藻》',
    explanation:
      '原指上古没有文字，用结绳记事的方法治理天下◇也指社会清平，不用法律治国的空想。',
    pinyin: 'jié shéng ér zhì',
    word: '结绳而治',
    abbreviation: 'jsez',
  },
  {
    derivation:
      '《荀子·劝学》我尝跂高而望矣，不如登高之博见也。”《吕氏春秋·顺说》顺风而呼，声不加疾也，际高而望，目不加明也，所因便也。”',
    example: '无',
    explanation: '登上高处，看得更远。也比喻思想境界高，目光远大。',
    pinyin: 'dēng gāo wàng yuǎn',
    word: '登高望远',
    abbreviation: 'dgwy',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》第五卷一生挣得一副好酒量，闷来时只是饮酒，尽醉方休，日常饭食，有一顿，没一顿，都不计较，单少不得杯中之物。”',
    example: '无',
    explanation: '杯子中的东西，指酒。同杯中物”。',
    pinyin: 'bēi zhōng zhī wù',
    word: '杯中之物',
    abbreviation: 'bzzw',
  },
  {
    derivation:
      '《庄子·马蹄》夫赫胥氏之时，民居不知所为，行不知所之，含哺而熙，鼓腹而游，民能以此矣。”',
    example: '尧天舜日庆三多，～遍地歌。★清·钱彩《说岳全传》第一回',
    explanation:
      '鼓腹鼓起肚子，即饱食；哺口中所含的食物。口含食物，手拍肚子。形容太平时代无忧无虑的生活。',
    pinyin: 'gǔ fù hán bǔ',
    word: '鼓腹含哺',
    abbreviation: 'gfhb',
  },
  {
    derivation:
      '《黄金世界》第一回只要于己有一丝的好处，且把良心歪到半边，千方百计，竭力钻谋，便像心如意了，还不住手。”',
    example: '无',
    explanation: '指顺心如意。',
    pinyin: 'xiàng xīn rú yì',
    word: '像心如意',
    abbreviation: 'xxry',
  },
  {
    derivation:
      '宋·朱熹《朱子语类》第115卷所谓一杖一条痕，一掴一掌血，使之历历落落，分明开去，莫要含糊。”',
    example: '船夫们往来上下～若甚杂乱。★茅盾《归途杂拾》',
    explanation: '清清楚楚。指零乱不堪、参差不齐的样子。',
    pinyin: 'lì lì luò luò',
    word: '历历落落',
    abbreviation: 'llll',
  },
  {
    derivation:
      '《三国志平话》卷中‘吾乃燕人张翼德，谁敢共吾决死？’叫声如雷灌耳，桥梁皆断。”',
    example:
      '季苇萧道‘先生大名，～。小弟献丑，真是弄斧班门了。’★清·吴敬梓《儒林外史》第二十八回',
    explanation: '①形容声音大（多指语音）。②形容人的名声很大。',
    pinyin: 'rú léi guàn ěr',
    word: '如雷灌耳',
    abbreviation: 'rlge',
  },
  {
    derivation:
      '唐·高適《后汉贼臣董卓庙议》母妻屠戮，种族无留，悬首燃脐，遗臭万代。”',
    example: '无',
    explanation: '死后恶名流传，永远受人唾骂。同遗臭万载”。',
    pinyin: 'yí chòu wàn dài',
    word: '遗臭万代',
    abbreviation: 'ycwd',
  },
  {
    derivation: '南朝·梁·王僧孺《夜愁示诸宾》诗谁知心眼乱，看朱忽成碧。”',
    example: '催弦拂柱与君饮，～眼始红。★唐·李白《前有樽酒行》',
    explanation: '朱大红色；碧翠绿色。将红的看成绿的。形容眼睛发花，视觉凝。',
    pinyin: 'kàn zhū chéng bì',
    word: '看朱成碧',
    abbreviation: 'kzcb',
  },
  {
    derivation: '唐·李白《秋夕书怀》诗海怀结沧洲，霞想游赤城。”',
    example:
      '解兰焚芰非吾事，只是～春水涨。★清·朱彜尊《迈陂塘·题王咸中坞山房图》',
    explanation: '本托意仙游◇指远游隐居之思。',
    pinyin: 'hǎi huái xiá xiǎng',
    word: '海怀霞想',
    abbreviation: 'hhxx',
  },
  {
    derivation:
      '《论语·阳货》其未得之也，患得之；既得之，患失之。苟患失之，无所不至矣！”',
    example:
      '既无～”的念头，心情也自然安泰，决非欲骗人安心，所以这样说”的切祈明鉴为幸。★鲁迅《两地书》六○',
    explanation:
      '患忧患，担心。担心得不到，得到了又担心失掉。形容对个人得失看得很重。',
    pinyin: 'huàn dé huàn shī',
    word: '患得患失',
    abbreviation: 'hdhs',
  },
  {
    derivation:
      '《春阿氏谋夫案》第六回街坊四邻，你们都听听。如今这年月，颠倒儿颠拉，媳妇是祖宗，婆婆是家奴，你们给评评，是我昏瞶了，是她欺辱我。”',
    example: '无',
    explanation: '街坊邻居。指住处邻近的人。同街坊邻里”。',
    pinyin: 'jiē fāng sì lín',
    word: '街坊四邻',
    abbreviation: 'jfsl',
  },
  {
    derivation:
      '《孝经·广至德》君子之教以孝也，非家至而日见之也”汉·郑玄注言教非门到户至而日见而语之也。”',
    example: '无',
    explanation: '到各家各户宣传解说。',
    pinyin: 'mén dào hù shuō',
    word: '门到户说',
    abbreviation: 'mdhs',
  },
  {
    derivation:
      '《礼记·文王世子》遂设三老五更，群老之席位焉。”《乐记》食三老五更于大学。”',
    example: '无',
    explanation: '相传古代统治者设三老五更，以尊养老人。',
    pinyin: 'sān lǎo wǔ gēng',
    word: '三老五更',
    abbreviation: 'slwg',
  },
  {
    derivation:
      '明·施耐庵《水浒传》第四十三回打虎功思悬赏，杀人身被官拿，试看螳螂黄雀，劝君得意休夸。”',
    example: '无',
    explanation:
      '比喻目光短浅，只见眼前利益而不顾后患。螳螂捕蝉，黄雀在后”的略语。',
    pinyin: 'táng láng huáng què',
    word: '螳螂黄雀',
    abbreviation: 'tlhq',
  },
  {
    derivation:
      '宋·王禹偁《答丁谓书》夫刚直之名，吾诚有之。盖嫉恶过当，而贤、不肖太分，亦天性然也。而又齿少气锐，勇于立事，今四十有三矣。”',
    example: '无',
    explanation: '指年轻气盛，锐意进取。',
    pinyin: 'chǐ shǎo qì ruì',
    word: '齿少气锐',
    abbreviation: 'csqr',
  },
  {
    derivation: '《宋书·礼志三》爰洎姬汉，风流尚存，遗芬余荣，绵映纪纬。”',
    example: '无',
    explanation: '比喻前人留下的盛德美名和功烈业绩。',
    pinyin: 'yí fēn yú róng',
    word: '遗芬余荣',
    abbreviation: 'yfyr',
  },
  {
    derivation: '元·吴澄《八骏图》诗阴山铁骑千千匹，雨鬣霜蹄神鬼出。”',
    example: '无',
    explanation: '形容骏马奔驰时马鬃耸起，状如飘雨，四蹄飞翻，色白如霜。',
    pinyin: 'yǔ liè shuāng tí',
    word: '雨鬣霜蹄',
    abbreviation: 'ylst',
  },
  {
    derivation: '明·沈受先《三元记·格天》积善存仁，蹈矩循规太古民。”',
    example: '无',
    explanation: '指遵守规矩。',
    pinyin: 'dǎo jǔ xún guī',
    word: '蹈矩循规',
    abbreviation: 'djxg',
  },
  {
    derivation:
      '《诗比·大雅·生民》实覃实訏，厥声载路。”《后汉书·李固传》开门受赂，署用非次，天下纷然，怨声满道。”',
    example:
      '凡有些余利的，一概入了官中，那时里外～，岂不失了你们这样人家的大体？★清·曹雪芹《红楼梦》第五十六回',
    explanation: '载充满。怨恨的声音充满道路。形容人民群众普遍强烈不满。',
    pinyin: 'yuàn shēng zài dào',
    word: '怨声载道',
    abbreviation: 'yszd',
  },
  {
    derivation:
      '明·张居正《拟唐回鹘率众内附贺表》垂衣而治，际河清海宴之期；乘钺有虔，鼓雷厉风飞烈。”',
    example: '无',
    explanation: '比喻天下太平。同河清海晏”。',
    pinyin: 'hé qīng hǎi yàn',
    word: '河清海宴',
    abbreviation: 'hqhy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容闹得很凶。',
    pinyin: 'pū dì xiān tiān',
    word: '扑地掀天',
    abbreviation: 'pdxt',
  },
  {
    derivation: '《论语·微子》四体不勤，五谷不分，孰为夫子？”',
    example: '我们新时代的青年绝不能做～的书呆子。',
    explanation:
      '五谷通常指稻、黍、稷、麦、菽。指不参加劳动，不能辨别五谷。形容脱离生产劳动，缺乏生产知识。',
    pinyin: 'wǔ gǔ bù fēn',
    word: '五谷不分',
    abbreviation: 'wgbf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容屋舍毗连不绝。',
    pinyin: 'lián lǐ jìng jiē',
    word: '连里竟街',
    abbreviation: 'lljj',
  },
  {
    derivation:
      '老舍《老张的哲学》第三二一辆汽车碰在一株老树上，并没伤人……谁能刨根问底的要证据。”',
    example:
      '你～，是啥意思？你既不是治安组长，又不是民兵队长！★柳青《创业史》第一部第九章',
    explanation: '比喻追究底细。',
    pinyin: 'páo gēn wèn dǐ',
    word: '刨根问底',
    abbreviation: 'pgwd',
  },
  {
    derivation:
      '清·袁枚《随园诗话》第三卷阮亭之意，必欲其描头画角若明七子，而后谓之窥盛唐乎？”',
    example:
      '写法又明朗简洁，绝无旧文人～，宛转抑扬的恶习。★鲁迅《集外集拾遗·后记》',
    explanation: '比喻刻意模仿，毫无新意。',
    pinyin: 'miáo tóu huà jiǎo',
    word: '描头画角',
    abbreviation: 'mthj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '已亡国家的祠社。古代天子将其作为亡国的象征，以自儆戒。',
    pinyin: 'wáng guó zhī shè',
    word: '亡国之社',
    abbreviation: 'wgzs',
  },
  {
    derivation: '唐·李白《与韩刑州书》所以龙蟠凤逸之士，皆欲收名定价于君侯。”',
    example: '无',
    explanation: '如龙盘曲，如凤深藏。比喻有才能而没有人赏识。',
    pinyin: 'lóng pán fèng yì',
    word: '龙蟠凤逸',
    abbreviation: 'lpfy',
  },
  {
    derivation: '《梁书·何胤传》兼以世道浇暮，争诈繁起，改俗迁风，良有未易。”',
    example: '无',
    explanation: '迁改。改变风俗习气。',
    pinyin: 'gǎi sú qiān fēng',
    word: '改俗迁风',
    abbreviation: 'gsqf',
  },
  {
    derivation:
      '魏巍《路标》却有人认为糊糊涂涂地吃喝玩乐，那才算没有虚掷自己的年华。”',
    example: '无',
    explanation: '指过恣意享乐的生活。',
    pinyin: 'chī hē wán lè',
    word: '吃喝玩乐',
    abbreviation: 'chwl',
  },
  {
    derivation:
      '晋·干宝《晋记》是故不攻而自败也。”唐·顾德章《上中书门下及礼院详议东都太庙修废状》是有都立庙之言，不攻而自破也。”',
    example: '郢都无主，～。★明·冯梦龙《东周列国志》第七十六回',
    explanation: '无须攻击，自己就会破灭。形容论点站不住脚，经不起反驳或攻击。',
    pinyin: 'bù gōng zì pò',
    word: '不攻自破',
    abbreviation: 'bgzp',
  },
  {
    derivation:
      '宋·王观国《学林·诗卜》曾参不入胜母，汉祖不留柏人，避凶趋吉，所不可废。”',
    example: '无',
    explanation: '避开凶险，趋向吉祥。',
    pinyin: 'bì xiōng qū jí',
    word: '避凶趋吉',
    abbreviation: 'bxqj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容福气特别大。',
    pinyin: 'rú tiān zhī fú',
    word: '如天之福',
    abbreviation: 'rtzf',
  },
  {
    derivation: '《易·乾》确乎其不可拔。”',
    example: '无',
    explanation: '刚强坚决，不可动摇。',
    pinyin: 'què hū bù bá',
    word: '确乎不拔',
    abbreviation: 'qhbb',
  },
  {
    derivation: '无',
    example: '学习要勤奋刻苦，踏踏实实，不能靠投机取巧取得成功。',
    explanation: '指用不正当的手段谋取私利。也指靠小聪明占便宜。',
    pinyin: 'tóu jī qǔ qiǎo',
    word: '投机取巧',
    abbreviation: 'tjqq',
  },
  {
    derivation: '唐·白居易《禽虫十二章》诗何异浮生临老日，一弹指顷报恩仇。”',
    example: '无',
    explanation: '手指一弹的时间。比喻时间极短暂。',
    pinyin: 'yī tán zhǐ qǐng',
    word: '一弹指顷',
    abbreviation: 'ytzq',
  },
  {
    derivation: '无',
    example: '车队几乎就在～边上行驶，司机们格外聚精会神。',
    explanation: '形容山势险峻。',
    pinyin: 'dǒu bì xuán yá',
    word: '陡壁悬崖',
    abbreviation: 'dbxy',
  },
  {
    derivation:
      '明·王玉峰《梦香记·饯别》无奈分离一旦，你功名傥万全，也思恩爱有三年。苦只为鹗荐鹏骞，博得凤愁鸾怨。”',
    example: '无',
    explanation: '比喻夫妻间因思念而生的愁怨。',
    pinyin: 'fèng chóu luán yuàn',
    word: '凤愁鸾怨',
    abbreviation: 'fcly',
  },
  {
    derivation:
      '《南史·徐陵传》年数岁，家人携以候沙门释宝志，宝志摩其顶曰‘天上石麒麟也。’”',
    example: '无',
    explanation: '旧时称人有文采的儿子。',
    pinyin: 'tiān shàng shí lín',
    word: '天上石麟',
    abbreviation: 'tssl',
  },
  {
    derivation: '无',
    example: '这次联欢会的节目安排得非常～，大家都十分尽兴。',
    explanation: '内容和形式的丰富、活跃。',
    pinyin: 'shēng dòng huó pō',
    word: '生动活泼',
    abbreviation: 'sdhp',
  },
  {
    derivation:
      '清·石玉昆《三侠五义》第三回只见小和尚左手拿一只灯，右手提一壶茶，走进来贼眉贼眼，将灯放下，又将茶壶放在桌上，两只贼眼东瞧西看，连话也不说，回头就走。”',
    example: '无',
    explanation: '形容神情鬼鬼祟祟。',
    pinyin: 'zéi méi shǔ yǎn',
    word: '贼眉鼠眼',
    abbreviation: 'zmsy',
  },
  {
    derivation:
      '宋·黄伯思《记石经与今文不同》此石刻在洛阳，本在洛宫前御史台中，年久摧散。洛人好事者时时得之，若骐骥一毛，虬龙片甲。”',
    example: '无',
    explanation: '比喻珍品的极小部分。',
    pinyin: 'qí jì yī máo',
    word: '骐骥一毛',
    abbreviation: 'qjym',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻有限的一点本领。同黔驴之技”。',
    pinyin: 'qián lǘ jì gū',
    word: '黔驴技孤',
    abbreviation: 'qljg',
  },
  {
    derivation:
      '清·曾国藩《圣哲画像记》我朝学者，以顾亭林为宗，《国史儒林传》褎然冠首。”',
    example: '无',
    explanation: '指出众，超出同辈而居首席。同褎然举首”。',
    pinyin: 'yòu rán guàn shǒu',
    word: '褎然冠首',
    abbreviation: 'yrgs',
  },
  {
    derivation:
      '《左传·宣公三年》石癸曰‘吾闻，姬、姞耦，其子孙必蕃。姞，吉人也。’”又《昭公四年》晋楚唯天所相，不可与争。”',
    example:
      '既然庚贴返去，原聘也必然还璧。但～，令郎尊恙，终有好日，还要三思而行。★明·冯梦龙《醒世恒言》卷九',
    explanation:
      '吉人善人；相帮助，保佑。迷信的人认为好人会得到天的帮助。多用作对别人的患病或遇到困难、不幸的安慰话。',
    pinyin: 'jí rén tiān xiàng',
    word: '吉人天相',
    abbreviation: 'jrtx',
  },
  {
    derivation:
      '《汉书·郦食其传》食其曰‘足下起瓦合之卒，收散乱之兵，不满万人，欲以径入强秦，此所谓探虎口者也。’”',
    example: '无',
    explanation:
      '瓦合碎瓦相拼合。卒士兵。像破碎的瓦片凑合在一起一样的士兵。比喻没有组织纪律的军队。',
    pinyin: 'wǎ hé zhī zú',
    word: '瓦合之卒',
    abbreviation: 'whzz',
  },
  {
    derivation: '无',
    example: '我们要注意此事的连锁反应。',
    explanation: '连锁像锁链似的一环扣一环。比喻相关的事物发生相应的变化。',
    pinyin: 'lián suǒ fǎn yìng',
    word: '连锁反应',
    abbreviation: 'lsfy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '遍天下的人一同欢庆。',
    pinyin: 'pǔ tiān tóng qìng',
    word: '溥天同庆',
    abbreviation: 'pttq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '宫中的女官依次受到宠爱。同贯鱼之次”。',
    pinyin: 'guàn yú zhī xù',
    word: '贯鱼之序',
    abbreviation: 'gyzx',
  },
  {
    derivation: '《论语·阳货》怀其宝而迷其邦，可谓仁乎？”',
    example:
      '老汉常听得秀才每说道幼而学，壮而行，～，谓之不仁。”（《琵琶记》第四出）',
    explanation: '怀宝具有才德；迷邦让国家迷乱。旧指有才德而不出来为国家效力。',
    pinyin: 'huái bǎo mí bāng',
    word: '怀宝迷邦',
    abbreviation: 'hbmb',
  },
  {
    derivation:
      '前蜀·杜光庭《本命醮南斗词》垂回凶度厄之慈，开辍死上生之路，使一境之兵销革偃，四时之雨顺风调。”',
    example: '无',
    explanation: '销毁兵器，放下甲盾。指太平无战事。',
    pinyin: 'bīng xiāo gé yǎn',
    word: '兵销革偃',
    abbreviation: 'bxgy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '吃饭不用两道菜肴。指饮食节俭。同食不二味”。',
    pinyin: 'shí bù jiān wèi',
    word: '食不兼味',
    abbreviation: 'sbjw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻山川雄踞蜿蜒，有王者气象。',
    pinyin: 'lóng pán fèng wǔ',
    word: '龙盘凤舞',
    abbreviation: 'lpfw',
  },
  {
    derivation: '宋·程颢、程颐《河南程氏遗书》读之愈久，但觉意味深长。”',
    example: '书中所述的人生哲理，～。★朱自清《经典常谈·四书第七》',
    explanation: '意味情调，趣味。意思含畜深远，耐人寻味。',
    pinyin: 'yì wèi shēn cháng',
    word: '意味深长',
    abbreviation: 'ywsc',
  },
  {
    derivation:
      '《明史·文苑传三·李攀龙》所拟乐府，或更古数字为己作，文则聱牙戟口，读者至不能终篇。”',
    example:
      '而不知只从形式上着眼，就必然走上～的道路。★郭绍虞《中国文学批评史》',
    explanation: '形容文词艰涩，拗口难读。',
    pinyin: 'áo yá jǐ kǒu',
    word: '聱牙戟口',
    abbreviation: 'ayjk',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻不由得不服从的话。',
    pinyin: 'lún yīn fó yǔ',
    word: '纶音佛语',
    abbreviation: 'lyfy',
  },
  {
    derivation:
      '《封神演义》第五三回你往我来，遭着兵刃命随倾；顾后瞻前，错了心神身不保。”',
    example: '无',
    explanation: '形容做事之前考虑周密慎重。同瞻前顾后”。',
    pinyin: 'gù hòu zhān qián',
    word: '顾后瞻前',
    abbreviation: 'ghzq',
  },
  {
    derivation:
      '柳琴戏《状元打更》沈文素呀！沈文素！你蟾宫折桂，莫大还有乘龙配凤的好运么？”',
    example: '无',
    explanation: '比喻得佳偶，结良缘。',
    pinyin: 'chéng lóng pèi fèng',
    word: '乘龙配凤',
    abbreviation: 'clpf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指事物的花样或名称非常多。',
    pinyin: 'míng mù fán duō',
    word: '名目繁多',
    abbreviation: 'mmfd',
  },
  {
    derivation: '汉·刘向《说苑·臣术》泰誓曰‘附下而罔上者死，附上而罔下者刑。’”',
    example: '无',
    explanation: '附附和；上君王，罔欺骗；下臣下。亲附君王，欺骗臣下。',
    pinyin: 'fù shàng wǎng xià',
    word: '附上罔下',
    abbreviation: 'fswx',
  },
  {
    derivation: '《宋书·沈庆之传》治国如治家。耕当问奴，织当访婢。”',
    example: '无',
    explanation: '比喻办事应该向内行请教。',
    pinyin: 'gēng dāng wèn nú',
    word: '耕当问奴',
    abbreviation: 'gdwn',
  },
  {
    derivation:
      '《新唐书·萧遘传》君臣报国极矣，战力殚矣，尚能垂头塌翅求生于黄门哉！”',
    example: '无',
    explanation: '形容受挫后萎靡不振的样子。',
    pinyin: 'chuí tóu tā chì',
    word: '垂头塌翅',
    abbreviation: 'cttc',
  },
  {
    derivation:
      '南朝宋·刘义庆《世说新语·文学》纡谟定命，远猷辰告。’谓此句偏有雅人深致。”',
    example: '无',
    explanation:
      '雅高雅，高尚；致情趣。人品高尚，情趣深远。原是赞赏《诗经·大雅》的作者有深刻的见解◇形容人的言谈举止不俗。',
    pinyin: 'yǎ rén shēn zhì',
    word: '雅人深致',
    abbreviation: 'yrsz',
  },
  {
    derivation: '《书·大禹漠》野无遗贤，万邦咸宁。”',
    example: '无',
    explanation: '有才能的人都受到任用。指任人唯贤，人尽其才。',
    pinyin: 'yě wú yí xián',
    word: '野无遗贤',
    abbreviation: 'ywyx',
  },
  {
    derivation:
      '宋·李纲《上道君太上皇帝札子》犬戎之众，蜂屯蚁附，渡壕临城，梯长如云，箭落如雨。”',
    example: '无',
    explanation: '形容人群蜂蚁般杂乱地聚集在一起。同蜂屯蚁聚”。',
    pinyin: 'fēng tún yǐ fù',
    word: '蜂屯蚁附',
    abbreviation: 'ftyf',
  },
  {
    derivation:
      '《红楼梦》第九九回贾政便也生气，说‘往常还好，怎么今日不齐集至此？’抬头看那执事，却是搀前落后。”',
    example: '无',
    explanation: '抢前落后，不整肃。',
    pinyin: 'chān qián luò hòu',
    word: '搀前落后',
    abbreviation: 'cqlh',
  },
  {
    derivation: '汉·扬雄《甘泉赋》于是大厦云谲波诡，摧摧而成观。”',
    example: '无',
    explanation:
      '谲诡怪异，变化∶象云彩和水波那样，形态不可捉摸。原形容房屋构造就象云彩、波浪一样千姿百态◇多形容事物变幻莫测。',
    pinyin: 'yún jué bō guǐ',
    word: '云谲波诡',
    abbreviation: 'yjbg',
  },
  {
    derivation:
      '《三国志·吴志·三嗣主传》裴松之注引孙皓侍中李仁之言视人君相忤，是乃祀所谓傲慢；傲慢则无礼，无礼则不臣，不臣则犯罪，犯罪则陷不测矣。”',
    example:
      '自襄阳赶刘玄德不着，来投韩玄；玄怪其～，不肯重用。★明·罗贯中《三国演义》第五十三回',
    explanation: '态度傲慢，对人不讲礼节。',
    pinyin: 'ào màn shǎo lǐ',
    word: '傲慢少礼',
    abbreviation: 'amsl',
  },
  {
    derivation:
      '宋·欧阳修《记旧本韩文后》韩氏之文，没而不见者二百年，而后大施于今，此又非特好恶之所上下，盖其久而愈明，不可磨灭，虽蔽于暂而终耀于无穷者，其道当然也。”',
    example: '但是我又不知道这是～的事实。★巴金《春雨》八',
    explanation:
      '磨灭消失。永远消失不了。指事迹言论等将始终保留在人们的记忆中。',
    pinyin: 'bù kě mó miè',
    word: '不可磨灭',
    abbreviation: 'bkmm',
  },
  {
    derivation: '《粉妆楼》第一回百年和合，千载团圆恭喜！”',
    example: '今日你们缔结了良缘，祝福你们～，万事如意。',
    explanation: '夫妻永远和好之意。',
    pinyin: 'bǎi nián hǎo hé',
    word: '百年好合',
    abbreviation: 'bnhh',
  },
  {
    derivation: '北齐·颜之推《颜氏家训·文章》钝学累功，不妨精熟。”',
    example: '无',
    explanation: '愚笨的人只要刻苦学习，也能取得成就。',
    pinyin: 'dùn xué lěi gōng',
    word: '顿学累功',
    abbreviation: 'dxlg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指错误地相信虚假的名声。同谬采虚声”。',
    pinyin: 'miù cǎi xū yù',
    word: '谬采虚誉',
    abbreviation: 'mcxy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指在霜露中行走，草野中息宿。形容奔波劳苦。',
    pinyin: 'shuāng xíng cǎo xiǔ',
    word: '霜行草宿',
    abbreviation: 'sxcx',
  },
  {
    derivation: '《三国志·魏志·武帝纪》当有真人，起于梁沛之间，锋不可当。”',
    example: '无',
    explanation:
      '锋锋芒，指刀剑的刃和尖；当阻挡、承受。锋芒纯利，没有东西可以承受。形容气势极盛，不可阻挡。',
    pinyin: 'fēng bù kě dāng',
    word: '锋不可当',
    abbreviation: 'fbkd',
  },
  {
    derivation: '汉·班固《西都赋》列卒周匝，星罗云布。”',
    example:
      '到了晚上，那电气灯，自来火，～，照耀得彻夜通明，光辉如同白昼。★清·彭养鸥《黑籍冤魂》第十五回',
    explanation:
      '罗罗列；布分布。象天空的星星和棋盘上的棋子那样分布着。形容数量很多，分布很广。',
    pinyin: 'xīng luó qí bù',
    word: '星罗棋布',
    abbreviation: 'xlqb',
  },
  {
    derivation: '宋·文及翁《贺新郎·西湖》词回首洛阳花世界，烟渺黍离之地。”',
    example:
      '史见满园青翠萦目，红紫迎人，真是锦绣乾坤，～。★清·李汝珍《镜花缘》第四回',
    explanation: '指繁华的、吃喝玩乐的地方。也泛指人世间。',
    pinyin: 'huā huā shì jiè',
    word: '花花世界',
    abbreviation: 'hhsj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指无关大体的细小行为。',
    pinyin: 'mò jié xì xíng',
    word: '末节细行',
    abbreviation: 'mjxx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指买卖官爵。',
    pinyin: 'mǎi guān yù jué',
    word: '买官鬻爵',
    abbreviation: 'mgyj',
  },
  {
    derivation:
      '汉·桓宽《盐铁论·相刺》屈原行吟泽畔，曰‘安得皋陶而察之！’夫人君莫不欲求贤以自辅，任能以治国，然牵于流说，惑于道谀，是以贤圣蔽掩，而谗佞用事，以此亡国破家，而贤士饥于岩穴也。”',
    example: '～皆有恨，捧心无语泪苏台。★唐·湘妃庙《与崔渥冥会杂诗》',
    explanation: '国家覆灭、家庭毁灭。',
    pinyin: 'wáng guó pò jiā',
    word: '亡国破家',
    abbreviation: 'wgpj',
  },
  {
    derivation: '宋·张元幹《庐川词·醉落魄》年华垂暮犹离索。”',
    example: '无',
    explanation: '垂将，快要；暮晚，老年。快要到老年。',
    pinyin: 'nián huá thuí mù',
    word: '年华垂暮',
    abbreviation: 'nhtm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '敌国相当于一国。指对国家起举足轻重作用的人。同隐若敌国”。',
    pinyin: 'yǐn rán dí guó',
    word: '隐然敌国',
    abbreviation: 'yrdg',
  },
  {
    derivation: '唐·虞世南《琵琶赋》愿百龄兮眉寿，重千金之巧笑。”',
    example: '无',
    explanation: '眉寿长寿。祝人高寿的颂辞。',
    pinyin: 'bǎi líng méi shòu',
    word: '百龄眉寿',
    abbreviation: 'blms',
  },
  {
    derivation: '汉·王充《论衡·别通篇》夫闭户塞意，不高瞻览者，死人之徒也哉。”',
    example:
      '他们的切身的问题，也使他们无暇去～的去关心与分析世界问题。★老舍《四世同堂》七十三',
    explanation: '瞻视，望；瞩注视。站得高，看得远。比喻眼光远大。',
    pinyin: 'gāo zhān yuǎn zhǔ',
    word: '高瞻远瞩',
    abbreviation: 'gzyz',
  },
  {
    derivation:
      '《资治通鉴·唐纪·则天皇后天授二年》兴曰‘此甚易尔！取大瓮，令囚入中，何事不承！’俊臣乃索大瓮，火围如兴法，因起谓兴曰‘有内状推兄，请兄入此瓮。’兴惶恐叩头伏罪。”',
    example:
      '掬西江之水，为尔洗肠，即烧东壁之床，～。★清·蒲松龄《聊斋志异·席方平》',
    explanation: '瓮一种陶制的盛器。比喻用某人整治别人的办法来整治他自己。',
    pinyin: 'qǐng jūng rù wèng',
    word: '请君入瓮',
    abbreviation: 'qjrw',
  },
  {
    derivation: '《商君书·开塞》二者名贸实易，不可不察也。”',
    example: '无',
    explanation: '贸齐等；易变易。指名称相似，实质不同。',
    pinyin: 'míng mào shí yì',
    word: '名贸实易',
    abbreviation: 'mmsy',
  },
  {
    derivation: '清·蒲松龄《寒森曲》第五回一伙人疾忙扶起，只见他鼻肿眼青。”',
    example: '无',
    explanation: '鼻子肿起，眼圈发青。形容脸部伤势严重。',
    pinyin: 'bí zhǒng yǎn qīng',
    word: '鼻肿眼青',
    abbreviation: 'bzyq',
  },
  {
    derivation:
      '元·关汉卿《望江亭》第一折夫人，放着你这一表人物，怕没有中意的丈夫？”',
    example:
      '太子波前妃生子名夫差，年已二十六岁矣，生得昂藏英伟，～。★明·冯梦龙《东周列国志》第七十九回',
    explanation: '表指外貌。形容人容貌俊秀端正。',
    pinyin: 'yī biǎo rén cái',
    word: '一表人才',
    abbreviation: 'ybrc',
  },
  {
    derivation:
      '清·曾朴《孽海花》第二十五回珏斋不禁义愤填膺，自己办了个长电奏，力请宣战。”',
    example:
      '畿辅士民，屡遭虏骑蹂躏，莫不～，恨之切骨。★姚雪垠《李自成》第一卷第二章',
    explanation:
      '义愤对违反正义的事情所产生的愤怒；膺胸。发于正义的愤懑充满胸中。',
    pinyin: 'yì fèn tián yīng',
    word: '义愤填膺',
    abbreviation: 'yfty',
  },
  {
    derivation:
      '唐·李德裕《〈异域归忠传〉序》惟嗢没斯精诚上达，天诱其衷。拔自狼居之山，愿拜龙颜之主，封章沥恳，指日誓心，不夺之诚，介如石矣。”',
    example: '无',
    explanation: '对着太阳发誓，表明忠诚无二。',
    pinyin: 'zhǐ rì shì xīn',
    word: '指日誓心',
    abbreviation: 'zrsx',
  },
  {
    derivation:
      '《后汉书·杨秉传》尝从容言曰‘我有三不惑酒、色、财也。’”元·马致远《黄梁梦》第四折一梦中十八年，见了酒色财气，人我是非，贪嗔痴爱，风霜雨雪。”',
    example:
      '李生起而观之，乃是一首词，名《西江月》，是说～四件的短处。★明·冯梦龙《警世通言》卷十一',
    explanation: '旧时以此为人生四戒。泛指各种不良品德、习气。',
    pinyin: 'jiǔ sè cái qì',
    word: '酒色财气',
    abbreviation: 'jscq',
  },
  {
    derivation:
      '明·陶宗仪《南村辍耕录·连枝秀》锦心绣腹，宣扬《老子》经文，发科打诨，不离机锋；课嘴撩牙，长存道眼。”',
    example: '无',
    explanation: '搬唇弄舌。课，用同嗑”。',
    pinyin: 'kè zuǐ liáo yá',
    word: '课嘴撩牙',
    abbreviation: 'kzly',
  },
  {
    derivation:
      '高阳《玉座珠帘》下册明明他心里也巴不得杀了安德海，偏是嘴里假人假义。”',
    example: '无',
    explanation: '伪装仁慈善良。',
    pinyin: 'jiǎ rén jiǎ yì',
    word: '假人假义',
    abbreviation: 'jrjy',
  },
  {
    derivation:
      '《三国志·蜀书·先主传》是时曹公从容谓先主曰‘今天下英雄，唯使君与操耳。本初之徒，不足数也。’先主方食，失匕箸。”',
    example: '无',
    explanation: '比喻借别的事情掩饰自己的真实情况。',
    pinyin: 'wén léi shī zhù',
    word: '闻雷失箸',
    abbreviation: 'wlsz',
  },
  {
    derivation:
      '清·吴敬梓《儒林外史》第四十回肖云仙呼天抢地，晶尽礼，治办丧事，十分尽心。”',
    example: '彼等何辜，忍令其～而死也。★《清史稿·韩朋赋》',
    explanation: '抢地触地。大声叫天，用头撞地。形容极度悲伤。',
    pinyin: 'hū tiān qiāng dì',
    word: '呼天抢地',
    abbreviation: 'htqd',
  },
  {
    derivation: '无',
    example: '希望黄老先生能鼎力介绍，俾得～。',
    explanation: '比喻找到一份职业或栖身之所。',
    pinyin: 'yī zhī yī qī',
    word: '一枝一栖',
    abbreviation: 'yzyq',
  },
  {
    derivation:
      '郭绍虞《中国文学批评史》十四感兴不来，也不能勉强去酝酿。当它来的时候，酝酿成熟，故能提起锐笔，一呵而就。”',
    example: '无',
    explanation: '一口气完成。',
    pinyin: 'yī hē ér jiù',
    word: '一呵而就',
    abbreviation: 'yhej',
  },
  {
    derivation: '《史记·陈丞相世家》平虽美大夫，如冠玉耳，其中未必有也。”',
    example:
      '曾有一个道士，有长生不老之术，自说已经百余岁了，看去却～”，象二十左右一样。★鲁迅《准风月谈·青年与老子》',
    explanation: '冠帽子。原比喻只是外表好看◇形容男子长相漂亮。',
    pinyin: 'měi rú guān yù',
    word: '美如冠玉',
    abbreviation: 'mrgy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指人主掌握兵权以制政权。',
    pinyin: 'jū zhòng yù qīng',
    word: '居重驭轻',
    abbreviation: 'jzyq',
  },
  {
    derivation:
      '《资治通鉴·晋安帝义熙十三年》关中华戎杂错，风俗劲悍；裕欲以荆扬之化，施之函秦，此无异解衣包火，张罗捕虎。”清·唐训方《里语征实》卷下引作解衣抱火”。',
    example: '无',
    explanation: '比喻不解决问题，只招致危险。同解衣包火”。',
    pinyin: 'jiě yī bào huǒ',
    word: '解衣抱火',
    abbreviation: 'jybh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '避开强暴的，欺凌弱小的。',
    pinyin: 'wéi qiáng líng ruò',
    word: '违强陵弱',
    abbreviation: 'wqlr',
  },
  {
    derivation: '《尚书·微子之命》作宾于王家，与国咸休，永世无穷。”',
    example: '无',
    explanation: '永世永远。永远没有穷尽。',
    pinyin: 'yǒng shì wú qióng',
    word: '永世无穷',
    abbreviation: 'yswq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容用手或用一般的器皿分东西，难免多少有出入。',
    pinyin: 'shǒu gāo shǒu dī',
    word: '手高手低',
    abbreviation: 'sgsd',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》卷十一我是一刀两断的性子，不学那粘皮带骨。”',
    example: '无',
    explanation: '形容言行不干脆，不爽快。',
    pinyin: 'zhān pí dài gǔ',
    word: '粘皮带骨',
    abbreviation: 'zpdg',
  },
  {
    derivation:
      '《韩非子·亡征》缓心而无成，柔茹而寡断，好恶无决，而无所定立者，可亡也。”',
    example: '他做什么事都没有主见，是一个～的人。',
    explanation: '优柔犹豫不决；寡少。指做事犹豫，缺乏决断。',
    pinyin: 'yōu róu guǎ duàn',
    word: '优柔寡断',
    abbreviation: 'yrgd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '能治各种病的灵药。比喻一种能解决各种疑难问题的办法。',
    pinyin: 'wàn yìng líng dān',
    word: '万应灵丹',
    abbreviation: 'wyld',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻勇猛冲击，势不可当。同龙腾虎蹴”。',
    pinyin: 'lóng téng hǔ zhí',
    word: '龙腾虎踯',
    abbreviation: 'lthz',
  },
  {
    derivation:
      '宋·张君房《云笈七签》第66卷嗟见南山尘，积年为丘山。芒芒苦海中，生死成波澜。”',
    example: '～，回头是岸。',
    explanation: '佛教语，辽阔深远的样子。比喻苦难无穷无尽。',
    pinyin: 'máng máng kǔ hǎi',
    word: '芒芒苦海',
    abbreviation: 'mmkh',
  },
  {
    derivation:
      '元·明本述《天目中峰和尚广录》卷十六今日特为你起模画样，和盘托出。”',
    example:
      '现在除非把这事～，再添上些枝叶，或者可以激怒于他，稍助一臂之力。★清·李宝嘉《官场现形记》第二十七回',
    explanation: '和连同。连盘子也端出来了。比喻全都讲出来，毫不保留。',
    pinyin: 'hé pán tuō chū',
    word: '和盘托出',
    abbreviation: 'hptc',
  },
  {
    derivation: '《诗经·小雅·鸿雁》鸿雁于飞，哀鸣嗸嗸。”',
    example: '无',
    explanation: '哀悲哀。比喻流离失所的灾民生活凄惨。',
    pinyin: 'hóng yàn āi míng',
    word: '鸿雁哀鸣',
    abbreviation: 'hyam',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '捆起来以后放在高高的架子上。比喻放着不用。同束之高阁”。',
    pinyin: 'shù zhì gāo gé',
    word: '束置高阁',
    abbreviation: 'szgg',
  },
  {
    derivation:
      '南朝·宋·刘义庆《幽明录》载东汉刘晨阮肇在天台山遇仙，归来已是晋代◇刘等重访天台山，旧踪渺然。',
    example: '浑无绪！～，空记来时路。★宋·周紫芝《点绛唇》词',
    explanation: '诗文中以之称去而复来的人。',
    pinyin: 'liú láng qián dù',
    word: '刘郎前度',
    abbreviation: 'llqd',
  },
  {
    derivation: '无',
    example: '自从这匆匆一别，他～，久久不能平静。',
    explanation: '各种思虑一齐聚集在心头。',
    pinyin: 'bǎi lǜ zǎn xīn',
    word: '百虑攒心',
    abbreviation: 'blzx',
  },
  {
    derivation:
      '《荀子·礼论》礼者，断长续短，损有余，益不足，达敬爱之文，而滋成行义之美者也。”',
    example: '无',
    explanation:
      '续接、补。截断长的来补短的。比喻取别人的长处，来补自己的短处。',
    pinyin: 'duàn chāng xù duǎn',
    word: '断长续短',
    abbreviation: 'dcxd',
  },
  {
    derivation: '《左传·宣公四年》若敖氏之鬼，不其馁尔？”',
    example: '无',
    explanation:
      '若敖指春秋时楚国的若敖氏；馁饿。若敖氏的鬼受饿了。比喻没有后代，无人祭祀。',
    pinyin: 'ruò áo guǐ něi',
    word: '若敖鬼馁',
    abbreviation: 'ragn',
  },
  {
    derivation: '南朝·梁·钟嵘《诗品》卷中谢诗如芙蓉出水，颜如错彩镂金。”',
    example:
      '马娇字婉容，姿首清丽，濯濯如春月柳，滟滟如～，真不愧娇之一字也。★清·余怀《板桥杂记·马娇》',
    explanation:
      '芙蓉荷花。刚开放的荷花。比喻诗文清新不俗。也形容天然艳丽的女子。',
    pinyin: 'chū shuǐ fú róng',
    word: '出水芙蓉',
    abbreviation: 'csfr',
  },
  {
    derivation:
      '《庄子·逍遥游》子独不见狸牲乎，卑身而伏，以候敖者，东西跳梁，不辟高下。”《国语·周语上》王犹不堪，况尔小丑乎？”',
    example: '这些～，真正是何足道哉！★陈白尘、贾霁《宋景诗》第三章',
    explanation:
      '跳梁腾跃跳动；小丑对人的卑称。比喻猖狂捣乱而成不了大气候的坏人。',
    pinyin: 'tiào liáng xiǎo chǒu',
    word: '跳梁小丑',
    abbreviation: 'tlxc',
  },
  {
    derivation: '汉·焦赣《易林·萃之巽》众口销金，愆言不验。”',
    example: '无',
    explanation:
      '众人的言论能够熔化金属。比喻舆论影响的强大。亦喻众口同声可混淆视听。见众口铄金”。',
    pinyin: 'zhòng kǒu xiāo jīn',
    word: '众口销金',
    abbreviation: 'zkxj',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》第二十四回知县听玉姐说了一会，叫‘皮氏，想你见那男子弃旧迎新，你怀恨在心，药死亲夫，此情理或有之。’”',
    example: '无',
    explanation: '把怨恨藏在心里。形容对人记下仇恨，以伺机报复。',
    pinyin: 'huái hèn zài xīn',
    word: '怀恨在心',
    abbreviation: 'hhzx',
  },
  {
    derivation: '《隋书·高祖纪上》申部残贼，充斥一隅，蝇飞蚁聚，攻州略地。”',
    example: '无',
    explanation: '比喻人众多杂沓，聚集一处。',
    pinyin: 'yíng fēi yǐ jù',
    word: '蝇飞蚁聚',
    abbreviation: 'yfyj',
  },
  {
    derivation: '《诗经·豳风·鸱号》迨天之未阴雨，彻彼桑土，绸缪牖户。”',
    example:
      '那是不关我教习的事，在乎你们自己～的。★清·无名氏《官场维新记》第四回',
    explanation:
      '绸缪紧密缠缚。天还没有下雨，先把门窗绑牢。比喻事先做好准备工作。',
    pinyin: 'wèi yǔ chóu móu',
    word: '未雨绸缪',
    abbreviation: 'wycm',
  },
  {
    derivation:
      '宋·蔡绦《西清诗话》引杨鸾诗白日苍蝇满饭盘，夜间蚁子又成团；每到更深人静后，定来头人咬杨鸾。”',
    example: '无',
    explanation:
      '更旧时夜间计时单位，一夜分五更，每更约两小时；阑将尽；人静没有人的吵杂声，一片寂静。夜已很深，没有人声，一片寂静。',
    pinyin: 'gēng lán rén jǐng',
    word: '更阑人静',
    abbreviation: 'glrj',
  },
  {
    derivation: '《诗经·周南·螽斯》螽斯羽，诜诜兮。”',
    example: '无',
    explanation: '螽斯昆虫名，产卵极多；衍延续；庆喜庆。旧时用于祝颂子孙众多。',
    pinyin: 'zhōng sī yǎn qìng',
    word: '螽斯衍庆',
    abbreviation: 'zsyq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容赶得上或达得到。',
    pinyin: 'wàng qí jiān xiàng',
    word: '望其肩项',
    abbreviation: 'wqjx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指雕琢淫词艳句。亦作拈华摘艳”。',
    pinyin: 'niān huā zhāi yàn',
    word: '拈花摘艳',
    abbreviation: 'nhzy',
  },
  {
    derivation: '《鹖冠子·著希》故君子弗径情而行也。”',
    example: '事物是往返曲折的，不是～的。（毛泽东《论持久战》）',
    explanation: '径情任意，随心；遂成功。随着意愿，顺利地得到成功。',
    pinyin: 'jìng qíng zhí suì',
    word: '径情直遂',
    abbreviation: 'jqzs',
  },
  {
    derivation:
      '鲁迅《彷徨·肥皂》好容易给他进了中西折中的学堂，英文又专是‘口耳并重’的。”',
    example: '无',
    explanation: '对说和听的训练同等重视。',
    pinyin: 'kǒu ěr bìng zhòng',
    word: '口耳并重',
    abbreviation: 'kebz',
  },
  {
    derivation:
      '郭沫若《苏联纪行·六月二十七日》她把说明小册子的英文部分似乎已经读得倒背如流了。”',
    example: '无',
    explanation:
      '背背诵。把书或文章倒过来背，背得像流水一样流畅。形容背得非常熟练，记得非常牢。',
    pinyin: 'dào bèi rú liú',
    word: '倒背如流',
    abbreviation: 'dbrl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻怀才不遇。',
    pinyin: 'lóng pán fèng yì',
    word: '龙盘凤逸',
    abbreviation: 'lpfy',
  },
  {
    derivation: '《荀子·荣辱》非不欲也，几不长虑顾后而恐无以继之故也。”',
    example: '无',
    explanation: '虑思考；顾回头看。从长远考虑问题。',
    pinyin: 'cháng lǜ gù hòu',
    word: '长虑顾后',
    abbreviation: 'clgh',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '没有立锥子的地方。比喻连极小的地方也没有◇常形容贫穷。同无立锥之地”。',
    pinyin: 'wú zhì zhuī dì',
    word: '无置锥地',
    abbreviation: 'wzzd',
  },
  {
    derivation:
      '宋·陈师道《代贺兴龙节表》庶邦有众，愿效忠臣之心，万年无疆，请祝圣人之寿。”',
    example:
      '是希望～的与宇宙共悠久的全中国的历史，每一页都充满着‘五四’运动的精神。★郭沫若《羽书集·青年化永远青年化》',
    explanation: '形容年代久远。同万世无疆”。',
    pinyin: 'wàn nián wú jiāng',
    word: '万年无疆',
    abbreviation: 'wnwj',
  },
  {
    derivation: '唐·韩愈《答胡生书》愈不善自谋，口多而食寡。”',
    example:
      '解放前夕，我们全家六口流落在这座小城市里，～，连一天三顿饭都无法维持。',
    explanation: '吃饭的人多，但是食物很少。',
    pinyin: 'kǒu duō shí guǎ',
    word: '口多食寡',
    abbreviation: 'kdsg',
  },
  {
    derivation: '唐·韩鄂《岁华纪丽·风》飞砂走石，风则从箕，月离于毕。”',
    example: '狂风大作，～，如同骤雨。★明·罗贯中《三国演义》第90回',
    explanation: '砂土飞扬，小石翻滚。形容风力迅猛。',
    pinyin: 'fēi shā zǒu shí',
    word: '飞砂走石',
    abbreviation: 'fszs',
  },
  {
    derivation:
      '宋·周密《齐东野语》卷四实之莆人，登甲科，甚有文名，落魄不羁。”',
    example: '无',
    explanation:
      '落魄穷困，不得意；羁束缚。潦倒失意，行为放纵。也指豪迈不受拘束。',
    pinyin: 'luò pò bù jī',
    word: '落魄不羁',
    abbreviation: 'lpbj',
  },
  {
    derivation:
      '三国·魏·锺会《移蜀檄》若偷安旦夕，迷而不反，大兵一发，玉石皆碎，虽欲悔之，亦无及已。”',
    example: '无',
    explanation: '犹玉石俱焚。',
    pinyin: 'yù shí jiē suì',
    word: '玉石皆碎',
    abbreviation: 'ysjs',
  },
  {
    derivation:
      '《论语·宪问》或曰‘以德报怨何如？’子曰‘何以报德？以直报怨，以德报德。’”',
    example:
      '九公才说恐女儿国将舅兄留下，日后倘有此事，我们就去救你出来，也算～”了。★清·李汝珍《镜花缘》第十九回',
    explanation: '德恩惠。用恩惠报答恩惠。',
    pinyin: 'yǐ dé bào yu',
    word: '以德报德',
    abbreviation: 'ydby',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '贪污受贿，违犯法纪。',
    pinyin: 'tān zāng wǎng fǎ',
    word: '贪脏枉法',
    abbreviation: 'tzwf',
  },
  {
    derivation:
      '李大钊《国民之薪胆》吾国对日关系之痛史，宜镌骨铭心，纪其深仇大辱者，有三事焉曰甲午，曰甲辰，曰甲寅。”',
    example: '无',
    explanation: '镌雕刻；铭刻写。指牢牢记在心上。',
    pinyin: 'juān gǔ míng xīn',
    word: '镌骨铭心',
    abbreviation: 'jgmx',
  },
  {
    derivation:
      '元·无名氏《盆儿鬼》楔子此卦洽谈室一百日内，有血光之灾，只怕躲不过去。”',
    example: '无',
    explanation: '迷信指有被杀的灾祸，',
    pinyin: 'xuè guāng zhī zāi',
    word: '血光之灾',
    abbreviation: 'xgzz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '解脱苦难，消除灾祸。',
    pinyin: 'jiù kǔ mǐ zāi',
    word: '救苦弭灾',
    abbreviation: 'jkmz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '知知识。探求知识像口渴想喝水一样迫切。形容求知愿望十分迫切。',
    pinyin: 'qiú zhī ruò kě',
    word: '求知若渴',
    abbreviation: 'qzrk',
  },
  {
    derivation:
      '《韩非子·五蠹》尧之王天下也，茅茨不翦，采椽不斫。”汉·曹操《度关山》诗不及唐尧，采椽不斫。世叹伯夷，欲以厉俗。”',
    example: '无',
    explanation: '采柞木。比喻生活简朴。',
    pinyin: 'cǎi chuán bù zhuó',
    word: '采椽不斫',
    abbreviation: 'ccbz',
  },
  {
    derivation:
      '蔡东潘《民国通俗演义》第一百八回政府与诸生期许之重，凡兹再三申谕，固期有所鉴戒，勉为成材，其各砥砺琢磨，毋负谆谆告诫之意。”',
    example: '无',
    explanation: '琢磨雕刻和打磨玉石。比喻磨练自己的品德，在学业上不断上进。',
    pinyin: 'dǐ lì zhuó mó',
    word: '砥砺琢磨',
    abbreviation: 'dlzm',
  },
  {
    derivation:
      '宋·文天祥《沁园春·题张许双庙》词人生歨翕云亡，好烈烈轰轰做一场。”',
    example: '无',
    explanation:
      '烈烈火焰炽盛的样子；轰轰象声词，形容巨大的声响。形容事业的兴旺。也形容声势浩大，气魄宏伟。',
    pinyin: 'liè liè hōng hōng',
    word: '烈烈轰轰',
    abbreviation: 'llhh',
  },
  {
    derivation:
      '唐·刘禹锡《送别四十六首·洛中逢韩七中丞之吴兴口号五首》昔年意气结群英，几度朝回一字行。北天南零落尽，两人相见洛阳城。”',
    example: '无',
    explanation: '形容万里之遥，相距极远。亦形容地区各异。',
    pinyin: 'hǎi běi tiān nán',
    word: '海北天南',
    abbreviation: 'hbtn',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '议论别人的是非好坏。同论长说短”。',
    pinyin: 'lùn duǎn dào cháng',
    word: '论短道长',
    abbreviation: 'lddc',
  },
  {
    derivation: '汉·韩婴《韩诗外传》第五卷当前快意，一呼再诺者，人隶也。”',
    example:
      '罗公独坐当中，～，掌着生杀之权。★清·孔尚任《桃花扇·哭主》第十三回',
    explanation: '一人呼唤，百人应答。形容有钱有势，仆从很多。',
    pinyin: 'yī hū bǎi nuò',
    word: '一呼百诺',
    abbreviation: 'yhbn',
  },
  {
    derivation:
      '《三国志·魏志·曹爽传》裴松之注引《世语》及爽解印绶，将出，主簿杨综止之曰‘公挟主握权，舍此以至东市乎？’爽不从。有司奏综导爽反，宣王曰‘各为其主也。’宥之，以为尚书郎。”',
    example:
      '徐茂公，你放手，往日咱两个是朋友，今日～也。★元·尚仲贤《单鞭夺槊》第三折',
    explanation: '各人为自己的主人效力。',
    pinyin: 'gè wèi qí zhǔ',
    word: '各为其主',
    abbreviation: 'gwqz',
  },
  {
    derivation:
      '元·无名氏《合同文字》第四折这小厮本说的丁一确二，这婆子生扭做差三错四。”',
    example: '这小厮本说的丁一确二，这婆子生扭做～。★《元曲选·合同文字》',
    explanation: '颠倒错乱。形容差错很多或虚假不实。',
    pinyin: 'chā sān cuò sì',
    word: '差三错四',
    abbreviation: 'cscs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '说三道四，花言巧语。',
    pinyin: 'liǎng dào sān kē',
    word: '两道三科',
    abbreviation: 'ldsk',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻重大的事变。也形容巨大的声响。同天崩地坼”。',
    pinyin: 'tiān bēng dì jiě',
    word: '天崩地解',
    abbreviation: 'tbdj',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第73回这倒不是道家法术，倒是用兵最精的所谓‘守如处女，出如脱兔’，‘出其不备’的妙策。”',
    example: '无',
    explanation: '指行动出乎人的意料。',
    pinyin: 'chū qí bù bèi',
    word: '出其不备',
    abbreviation: 'cqbb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '喻指老而无妻的人。',
    pinyin: 'dú mù cǎi xīn',
    word: '犊牧采薪',
    abbreviation: 'dmcx',
  },
  {
    derivation:
      '明·施耐庵《水浒全传》第二十二回却才说不了，他便是真大丈夫，有头有尾，有始有终，我如今只等病好时，便去投奔他。”',
    example: '无',
    explanation: '有开头，有结尾。指做事能坚持到底。',
    pinyin: 'yǒu tóu yǒu wěi',
    word: '有头有尾',
    abbreviation: 'ytyw',
  },
  {
    derivation:
      '南朝·宋·刘义庆《世说新语·品藻》孔愉有公才而无公望；丁潭有公望而无公才，兼之者其在卿乎？”',
    example: '～当黑头，姓名指顾书金瓯。★清·沈曾植《陈庸庵尚书水流云在图册》诗',
    explanation: '才才识；望名望。才识名望可称公辅的地位。',
    pinyin: 'gōng cái gōng wàng',
    word: '公才公望',
    abbreviation: 'gcgw',
  },
  {
    derivation:
      '明·冯梦龙《醒世恒言》第三卷初时父子坐店甚好，后因十老得了腰痛的病，十眠九坐，劳碌不得，另招个伙计，叫做邢权，在店相帮。”',
    example: '无',
    explanation: '时躺时坐。形容病体难支。',
    pinyin: 'shí mián jiǔ zuò',
    word: '十眠九坐',
    abbreviation: 'smjz',
  },
  {
    derivation: '《书·仲虺之诰》惟王不迩声色，不殖货利。”',
    example:
      '长官有所不知，那宝玉”原是灵的，只因为～所迷，故此不灵了。★清·曹雪芹《红楼梦》第二十五回',
    explanation:
      '货指钱财；利指私利。贪恋歌舞、女色、钱财、私利。泛指寻欢作乐和要钱等行径。',
    pinyin: 'shēng sè huò lì',
    word: '声色货利',
    abbreviation: 'sshl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '一口咬定，死不承认。',
    pinyin: 'shǐ kǒu dǐ lài',
    word: '矢口抵赖',
    abbreviation: 'skdl',
  },
  {
    derivation:
      '王西彦《隔膜》在这乡下孩子的观念里，难民应该都是一些脸黄肌瘦、衣著褴褛的人。”',
    example: '无',
    explanation: '脸色黄，肌体瘦。形容营养不良或有病的样子。',
    pinyin: 'liǎn huáng jī shòu',
    word: '脸黄肌瘦',
    abbreviation: 'lhjs',
  },
  {
    derivation:
      '《南史·刘穆之传》载，刘裕召刘穆之为主簿（军吏），穆之坏布裳为裤”，往见刘裕。',
    example: '卖剑买牛衰可笑，～老犹能。★宋·陆游《叹息》诗',
    explanation: '裳，下衣，指老百姓的服装；裤，指军装◇以之代指从军。',
    pinyin: 'huài shang wéi kù',
    word: '坏裳为裤',
    abbreviation: 'hswk',
  },
  {
    derivation:
      '《管子·形势解》明主之官物也，任其所长，不任其所短，故事无不成，而功无不立。乱主不知物之各有所长所短也。”',
    example: '无',
    explanation: '长长处、优点。各有各的长处、优点。一般多指人才而言。',
    pinyin: 'gè yǒu suǒ chéng',
    word: '各有所长',
    abbreviation: 'gysc',
  },
  {
    derivation: '金·元好问《送端甫西行》渭城朝雨三年别，平地青云万里程。”',
    example:
      '自唐以降，设科取士，～，更无论矣。★清·梁启超《论中国与欧洲国体异同》二',
    explanation:
      '平平稳；青云高空。比喻境遇突然变好，顺利无阻地一下子达到很高的地位。',
    pinyin: 'píng dì qīng yún',
    word: '平地青云',
    abbreviation: 'pdqy',
  },
  {
    derivation: '清·曾国藩《圣哲画像记》班氏闳识孤怀，不逮子长远甚。”',
    example:
      '下笔放眼，偃然若有古人之在我眼前，则～，窃叹古今人不数觏矣。★金松芩《文学观》',
    explanation: '远大的见解，独特的情操。',
    pinyin: 'hóng shí gū huái',
    word: '闳识孤怀',
    abbreviation: 'hsgh',
  },
  {
    derivation:
      '唐·温大雅《大唐创业起居注》卷二敦煌公至眛厔，所过诸县及诸贼界，莫不风驰草靡，裹粮卷甲，唯命是从。”',
    example: '无',
    explanation: '比喻强大的势力能制服一切。同风行草靡”。',
    pinyin: 'fēng chí cǎo mǐ',
    word: '风驰草靡',
    abbreviation: 'fccm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指为争取财利而斤斤较量，连极微小的数量也不放过。',
    pinyin: 'jì jiào zī zhū',
    word: '计较锱铢',
    abbreviation: 'jjzz',
  },
  {
    derivation:
      '《后汉书·孝桓帝纪》幸赖股肱御侮之助，残丑消荡，民和年稔，普天率土，遐迩洽同。”',
    example: '无',
    explanation: '犹言民乐年丰。',
    pinyin: 'mín hé nián rěn',
    word: '民和年稔',
    abbreviation: 'mhnr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容十分想念。',
    pinyin: 'kě chén wàn hú',
    word: '渴尘万斛',
    abbreviation: 'kcwh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '把手放在额上，表示庆幸。',
    pinyin: 'é shōu chēng qìng',
    word: '额首称庆',
    abbreviation: 'escq',
  },
  {
    derivation:
      '明·杨慎《丹铅续录·春秋·隐公元年》自共和以来，诸侯如蜂房蚁穴，不用天子之元年矣。”',
    example: '无',
    explanation: '比喻各自占据一方。',
    pinyin: 'fēng fáng yǐ xué',
    word: '蜂房蚁穴',
    abbreviation: 'ffyx',
  },
  {
    derivation: '宋·范成大《水龙吟·寿留寺》词物外新闻，凤歌鸾翥，龙蟠虎绕。”',
    example: '无',
    explanation: '犹言龙盘虎踞。形容地势雄伟险要。',
    pinyin: 'lóng pán hǔ rào',
    word: '龙蟠虎绕',
    abbreviation: 'lphr',
  },
  {
    derivation: '晋·葛洪《抱朴子·勖学》荡汰积埃，革邪反正。”',
    example: '无',
    explanation: '革除错误，回到正道上。',
    pinyin: 'gé xié fǎn zhèng',
    word: '革邪反正',
    abbreviation: 'gxfz',
  },
  {
    derivation: '汉·王充《论衡·自纪》俗性贪进忽退，收成弃败。”',
    example: '无',
    explanation: '趋附得势的人，轻视遭贬黜的人。',
    pinyin: 'shōu chéng qì bài',
    word: '收成弃败',
    abbreviation: 'scqb',
  },
  {
    derivation:
      '明·刘若愚《酌中志·内府衙门职掌》；纵有真心为国、束身自好者，恐亦孤掌难鸣也。东海逝波，其奈之何哉！”',
    example: '无',
    explanation: '东逝大海的波涛。比喻大势已去，无法挽回。',
    pinyin: 'dōng hǎi shì bō',
    word: '东海逝波',
    abbreviation: 'dhsb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指一窍不通。',
    pinyin: 'yī kǒng bù dá',
    word: '一孔不达',
    abbreviation: 'ykbd',
  },
  {
    derivation:
      '《汉书·宣帝纪》[宣帝]受《诗》于东海澓中翁，高材好学，然亦喜游侠，斗鸡走马。”',
    example: '鸣鸾佩玉青云间，～红尘里。★明·何景明《邯郸行》',
    explanation: '斗鸡赛马。古代的赌博游戏。',
    pinyin: 'dòu jī zǒu mǎ',
    word: '斗鸡走马',
    abbreviation: 'djzm',
  },
  {
    derivation:
      '《宋史·陈亮传》亮为人才气超迈，喜谈兵；论议风生，下笔数千言立就。”',
    example: '无',
    explanation: '谈论得极其生动而又风趣。',
    pinyin: 'lùn yì fēng shēng',
    word: '论议风生',
    abbreviation: 'lyfs',
  },
  {
    derivation: '唐·王勃《七夕赋》金声玉韵，蕙心兰质。”',
    example: '无',
    explanation: '形容美丽而聪明。',
    pinyin: 'lán zhì huì xīn',
    word: '兰质蕙心',
    abbreviation: 'lzhx',
  },
  {
    derivation:
      '宋·周敦颐《通书·文辞》文所以载道也。轮辕饰而人弗庸，徒饰也，况虚车乎。”',
    example:
      '古人说～”，用现在的话说，写文章就是表达思想。★郭沫若《关于文风问题答〈新观察〉记者问》',
    explanation:
      '载装载，引伸为阐明；道道理，泛指思想。指文章是为了说明道理的。',
    pinyin: 'wén yǐ zài dào',
    word: '文以载道',
    abbreviation: 'wyzd',
  },
  {
    derivation: '《商君书·画策》以杀去杀，虽杀可也。”',
    example: '无',
    explanation: '用严峻的法律禁止人犯法。',
    pinyin: 'yǐ shā qù shā',
    word: '以杀去杀',
    abbreviation: 'ysqs',
  },
  {
    derivation:
      '元·蒋子正《山房随笔》引刘改之（过）诗拔毫已付管城子，烂首曾封关内候。死后不知身外物，也随尊酒伴风流。”',
    example: '无',
    explanation: '指财物等身体以外的东西，表示无足轻重的意思。',
    pinyin: 'shēn wài zhī wù',
    word: '身外之物',
    abbreviation: 'swzw',
  },
  {
    derivation: '明·罗贯中《三国演义》第十八回我乘其不备而更追之，故能胜也。”',
    example: '无',
    explanation: '乘趁。利用别人没有防备的时机，去侵害对方。',
    pinyin: 'chéng qí bù bèi',
    word: '乘其不备',
    abbreviation: 'cqbb',
  },
  {
    derivation:
      '《水浒传》第四五回婶子且住，休要急速行，我从长计较，慢慢地商量。”',
    example: '我这意见对不对，请大家～。★茅盾《蚀·动摇》',
    explanation: '犹言从长计议。',
    pinyin: 'cóng cháng jì jiào',
    word: '从长计较',
    abbreviation: 'ccjj',
  },
  {
    derivation: '《诗经·小雅·何人斯》为鬼为蜮，则不可得。”',
    example:
      '这般胥役棍徒，但知鹜利，不知畏法，逞其鬼蜮之伎俩，则法令亦有时而穷。★清·彭养鸥《黑籍冤魂》第四回',
    explanation:
      '鬼蜮阴险害人之物；伎俩花招，手段。比喻用心险恶，暗中伤人的卑劣手段。',
    pinyin: 'guǐ yù jì liǎng',
    word: '鬼蜮伎俩',
    abbreviation: 'gyjl',
  },
  {
    derivation:
      '唐·徐夤《上卢三拾遗以言见黜》疾危必厌神明药，心惑多嫌正直言，冷眼静看真可笑，倾怀与说却为冤。”',
    example: '无',
    explanation: '形容从旁冷静而仔细地观察。',
    pinyin: 'lěng yǎn jìng kàn',
    word: '冷眼静看',
    abbreviation: 'lyjk',
  },
  {
    derivation:
      '宋·罗大经《鹤林玉露》卷二春秋之时，天王之使，交驰于列国，而列国之君，如京师者绝少。夫子谨而书之，固以正列国之罪，而端本澄源之意，其致责于天王者尤深矣。”',
    example:
      '《易》闲有家，《礼》严内则，皆以齐家为～之要，先生窥其深矣。★清·周亮工《书影》卷一',
    explanation: '犹正本清源。从根本上加以整顿清理。',
    pinyin: 'duān běn chéng yuán',
    word: '端本澄源',
    abbreviation: 'dbcy',
  },
  {
    derivation:
      '《后汉书·来歙传》中郎将来歙，攻战连年，平定羌、陇，忧国忘家，忠孝彰著。”',
    example: '～，用意深远，所谓朝之耆德老成人者。★唐·韩愈《论孔戣致仕状》',
    explanation: '因忧虑国事而不考虑自己的家事。',
    pinyin: 'yōu guó wàng jiā',
    word: '忧国忘家',
    abbreviation: 'ygwj',
  },
  {
    derivation: '《左传·襄公十一年》居安思危，思则有备，有备无患。”',
    example: '得宠思辱，～（清·钱彩《说岳全传》第六十回）',
    explanation:
      '居处于；思想。虽然处在平安的环境里，也想到有出现危险的可能。指随时有应付意外事件的思想准备。',
    pinyin: 'jū ān sī wēi',
    word: '居安思危',
    abbreviation: 'jasw',
  },
  {
    derivation: '《宋史·范如圭传》公不丧心病狂，奈何为此？必遗臭万世矣。”',
    example:
      '但是顽固派反对派对于进步文化机关的违法摧残其合法的事业，其～，可谓已达极点。★邹韬奋《患难余生记·进步文化的遭难》',
    explanation:
      '丧失理智，象发了疯一样。形容言行昏乱而荒谬，或残忍可恶到了极点。',
    pinyin: 'sàng xīn bìng kuáng',
    word: '丧心病狂',
    abbreviation: 'sxbk',
  },
  {
    derivation: '宋·刘克庄《送洪侍御》诗之一青霄直上云梯易，白首能坚铁壁难。”',
    example: '无',
    explanation: '指迅速升到很高的地位。同青云直上”。',
    pinyin: 'qīng xiāo zhí shàng',
    word: '青霄直上',
    abbreviation: 'qxzs',
  },
  {
    derivation:
      '宋·朱熹《已酉拟上封事》国家财用皆出人民，如有不节而用度有阙，则横赋暴敛必将有及于民，虽有爱人之心，而民不被其泽矣。”',
    example:
      '[冉求]反替他取民米粟，比往日又加了一倍，～，日甚一日。★明·李东阳《杂记·孟子直解》',
    explanation:
      '横、暴残暴，强横，凶狠；赋、敛征税，聚财。强横残暴地征收苛捐杂税。形容反动统治阶级贪婪凶狠、搜刮人民的罪行。',
    pinyin: 'héng fù bào liǎn',
    word: '横赋暴敛',
    abbreviation: 'hfbl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指锻炼身心。',
    pinyin: 'mó xíng liàn xìng',
    word: '磨形炼性',
    abbreviation: 'mxlx',
  },
  {
    derivation:
      '《太平御览》引《吴录》张温英才瓖玮，拜中郎将，聘蜀与诸葛亮义结金兰之好焉。”',
    example: '无',
    explanation: '结交很投合的朋友。',
    pinyin: 'yì jié jīn lán',
    word: '义结金兰',
    abbreviation: 'yjjl',
  },
  {
    derivation: '《三国志·蜀志·蒋琬传》蒋琬，社稷之器，非百里之才也。”',
    example: '无',
    explanation:
      '百里方圆百里之地。指能治理方圆百里地区的人才◇称才能平常的人。',
    pinyin: 'bǎi lǐ zhī cái',
    word: '百里之才',
    abbreviation: 'blzc',
  },
  {
    derivation:
      '《南史·谢灵运传》灵运表陈疾，赐假东归。将行，上书劝伐河北，而游娱宴集，以夜续昼。”',
    example: '无',
    explanation: '犹言以夜继日。',
    pinyin: 'yǐ yè xù zhòu',
    word: '以夜续昼',
    abbreviation: 'yyxz',
  },
  {
    derivation:
      '《红楼梦》第十四回一切张罗款待，都是凤姐一人周全承应……[凤姐]洒爽风流，典则俊雅，真是‘万绿丛中一点红’了，——那里还把众人放在眼里，挥霍指示，任其所为。”',
    example: '无',
    explanation: '端庄高雅而标致。',
    pinyin: 'diǎn zé jùn yǎ',
    word: '典则俊雅',
    abbreviation: 'dzjy',
  },
  {
    derivation:
      '梁启超《天演学初祖尔文之学说及其略传》[达尔文]千百四十二年，遂去伦敦，卜居于京特省附近之一村落，屏绝尘俗，潜心涤虑，将航海五年内所搜之材料，所悟之新说，整齐之，锻炼之。”',
    example: '无',
    explanation: '指专心致志。',
    pinyin: 'qián xīn dí lǜ',
    word: '潜心涤虑',
    abbreviation: 'qxdl',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '明清时为各部司员的低级官吏。一般由没有考中庶吉士的进士充任，也可以由皇帝赏赐。',
    pinyin: 'é wai zhǔ shì',
    word: '额外主事',
    abbreviation: 'ewzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻变化莫测。',
    pinyin: 'shén cáng guǐ fú',
    word: '神藏鬼伏',
    abbreviation: 'scgf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '不偏向；不邪曲。同无偏无陂”。',
    pinyin: 'wú piān wú pō',
    word: '无偏无颇',
    abbreviation: 'wpwp',
  },
  {
    derivation:
      '《晋书·王敦传》进人退士，高下任心，奸狡饕餮，未有隗（刘隗）比。”',
    example: '无',
    explanation: '形容能胸有成竹地处理事情。同高下在心”。',
    pinyin: 'gāo xià rèn xīn',
    word: '高下任心',
    abbreviation: 'gxrx',
  },
  {
    derivation:
      '明·袁宏道《钦叔阳秀才》三代而下，尽是此一种人，驰声走誉，比善人有恒，更觉完美。”',
    example: '无',
    explanation: '指名声传扬。',
    pinyin: 'chí shēng zǒu yù',
    word: '驰声走誉',
    abbreviation: 'cszy',
  },
  {
    derivation: '《关尹子·一宇》言之如吹影，思之如镂尘，圣智造迷，鬼神不识。”',
    example: '无',
    explanation: '吹影子，刻尘土。比喻工艺精细到不见形迹。',
    pinyin: 'lòu chén chuī yǐng',
    word: '镂尘吹影',
    abbreviation: 'lccy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '喻指亲兄弟。',
    pinyin: 'tóng bāo gòng qì',
    word: '同胞共气',
    abbreviation: 'tbgq',
  },
  {
    derivation: '战国·楚·屈原《卜居》黄钟毁弃，瓦缶雷鸣；谗人高张，贤士无名。”',
    example:
      '噫！鼠辈邸张，其若是哉！～，瓦缶雷鸣，蠢兹幺么，毒害乃尔。★清·汇阴百一居士《壶天录》',
    explanation:
      '黄钟黄铜铸的钟，我国古代音乐有十二律，阴阳各六，黄钟为阳六律的第一律；毁毁坏；弃抛弃。比喻贤人遭受摈斥。',
    pinyin: 'huáng zhōng huǐ qì',
    word: '黄钟毁弃',
    abbreviation: 'hzhq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '①犹言差不多。②犹言零零碎碎，各式各样。',
    pinyin: 'qī qī bā bā',
    word: '七七八八',
    abbreviation: 'qqbb',
  },
  {
    derivation:
      '明·杨慎《洞天玄记》四折人生一世，犹如石火电光，寿算百年，恍若风烛草露。”',
    example: '无',
    explanation: '风中之烛易灭，草上之露易干。比喻人已衰老，临近死亡。',
    pinyin: 'fēng zhú cǎo lù',
    word: '风烛草露',
    abbreviation: 'fzcl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '雾气消散冰块融化。比喻疑难消除尽净。',
    pinyin: 'wù shì bīng róng',
    word: '雾释冰融',
    abbreviation: 'wsbr',
  },
  {
    derivation: '后魏·卢之明《剧鼠赋》跖实排虚，巢居穴处，皆饮噬于山泽。”',
    example:
      '他为逃避法律的制裁，躲藏于深山老林，从此～。但法网恢恢，最终没有躲过应有的惩罚。',
    explanation: '栖身于树上或岩洞里。指人类未有房屋前的生活状况。',
    pinyin: 'cháo jū xué chǔ',
    word: '巢居穴处',
    abbreviation: 'cjxc',
  },
  {
    derivation: '《诗经·小雅·巷伯》取彼谮人，投畀豺虎。”',
    example:
      '况且，未能将坏人～”于生前，当然也只好口诛笔伐之于后身。★鲁迅《华盖集续编·有趣的消息》',
    explanation:
      '畀给与。原指那种好搬弄是非的人，要把他扔出去喂豺狼虎豹。形容人民群众对坏人的愤恨。',
    pinyin: 'tóu bì chái hǔ',
    word: '投畀豺虎',
    abbreviation: 'tbch',
  },
  {
    derivation:
      '《续孽海花》第四十二回燕公真爽快，真是分风劈流的话，我们就算决定了。”',
    example: '无',
    explanation: '比喻说话干脆而有力量。',
    pinyin: 'fēn fēng pǐ liú',
    word: '分风劈流',
    abbreviation: 'ffpl',
  },
  {
    derivation: '《左传·昭公十八年》于是乎下陵上替，能无乱乎？”',
    example: '～，虽令不从，此其效也。★明·刘基《春秋明经·城费叔弓帅师围费》',
    explanation:
      '在下者凌驾于上，在上者废弛无所作为。谓上下失序，纲纪废坠。陵，通凌”。',
    pinyin: 'xià líng shàng tì',
    word: '下陵上替',
    abbreviation: 'xlst',
  },
  {
    derivation: '《礼记·檀弓下》公子丧，诸达官之长杖。”',
    example:
      '～，略有些名目在世者，其死后必有部诗文刻集。★清·张贵胜《遣愁集·感慨》',
    explanation: '达官大官。指地位高的大官和出身侯门身价显赫的人。',
    pinyin: 'dá guān guì rén',
    word: '达官贵人',
    abbreviation: 'dggr',
  },
  {
    derivation:
      '宋·王禹偁《陈情表》望云就日，非无恋阙之心；玉粒桂薪，未有住京之计。”《宋史·外国传三·高丽》縜袍短褐，玉粒桂薪，堪忧食贫，若为卒岁。”',
    example: '无',
    explanation: '米如玉，薪如桂。极言生活费用之高。',
    pinyin: 'yù lì guì xīn',
    word: '玉粒桂薪',
    abbreviation: 'ylgx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '表示时刻不忘报仇。同寝苫枕干”。',
    pinyin: 'qǐn shān zhěn gē',
    word: '寝苫枕戈',
    abbreviation: 'qszg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指身居重要职位。',
    pinyin: 'jū zhóu chǔ zhōng',
    word: '居轴处中',
    abbreviation: 'jzcz',
  },
  {
    derivation: '《南史·王融传》宋弁曰‘当是不习地土。’”',
    example: '无',
    explanation: '对于一个地方的气候条件或饮食习惯不能适应。',
    pinyin: 'bù xí dì tǔ',
    word: '不习地土',
    abbreviation: 'bxdt',
  },
  {
    derivation:
      '《史记·越王勾践世家》吴既赦越，越王勾践反国，乃苦身焦思，置胆于坐，坐卧即仰胆，饮食亦尝胆也。”',
    example: '无',
    explanation: '焦焦急。形容人为某事忧心苦思。',
    pinyin: 'kǔ shēn jiāo sī',
    word: '苦身焦思',
    abbreviation: 'ksjs',
  },
  {
    derivation:
      "清·文康《儿女英雄传》第23回细想了想，这事不但无法，而且有理；料是'一不扭众'，只得点头依允。”",
    example: '无',
    explanation: '一个人难违反众人的意见。',
    pinyin: 'yī bù niǔ zhòng',
    word: '一不扭众',
    abbreviation: 'ybnz',
  },
  {
    derivation: '《史记·孟子荀卿列传》为开第康庄之衢，高门大屋，尊宠之。”',
    example: '亲戚同～，朋友共肥马轻车。★元·无名氏《九世同居》第一折',
    explanation: '厦高大的房子。指高耸的楼房。',
    pinyin: 'gāo lóu dà shà',
    word: '高楼大厦',
    abbreviation: 'glds',
  },
  {
    derivation: '《孟子·尽心上》仰不愧于天，俯不怍于人，二乐也。”',
    example: '无',
    explanation: '怍惭愧。对天对人，都感到惭愧。指做了亏心事无脸见人。',
    pinyin: 'kuì tiān zuò rén',
    word: '愧天怍人',
    abbreviation: 'ktzr',
  },
  {
    derivation: '宋·王安石《扇子词》青冥风霜非人世，鬓乱钗横特地寒。”',
    example: '人未寢，欹枕～。★宋·苏轼《洞仙歌》词',
    explanation:
      '鬓耳边的头发；钗妇女的首饰，由两股合成。耳边的头发散乱，首饰横在一边。形容妇女睡眠初醒时未梳妆的样子。',
    pinyin: 'chāi héng bìn luàn',
    word: '钗横鬓乱',
    abbreviation: 'chbl',
  },
  {
    derivation: '战国·楚·屈原《九章·惜诵》惩于羹者而吹齑兮，何不变此志也。”',
    example: '～岂其非，亡羊补牢理所宜。★宋·陆游《秋兴》诗',
    explanation:
      '羹用肉、菜等煮成的汤；齑细切的冷食肉菜。被热汤烫过嘴，吃冷食时也要吹一吹。比喻受到过教训，遇事过分小心。',
    pinyin: 'chéng gēng chuī jī',
    word: '惩羹吹齑',
    abbreviation: 'cgcj',
  },
  {
    derivation:
      '元·关汉卿《玉镜台》第三折你说领着省事，掌着军权，居着高位，又道会亲处倚官挟势。”元·武汉臣《玉壶春》第四折从公道，依正理，怎做得倚官挟势。”',
    example:
      '打一棍时问一句，～要欺人。★《明成化说唱词话丛刊·包龙图陈州粜米记》',
    explanation: '倚仗官府的权势。',
    pinyin: 'yǐ guān xié shì',
    word: '倚官挟势',
    abbreviation: 'ygxs',
  },
  {
    derivation: '唐·李贺《梦天》诗遥望齐州九点烟，一泓海水杯中泻。”',
    example: '无',
    explanation: '俯视九州，小如烟点。',
    pinyin: 'qí yān jiǔ diǎn',
    word: '齐烟九点',
    abbreviation: 'qyjd',
  },
  {
    derivation: '宋·苏轼《出都来陈所乘船上有题》蛙鸣青草泊，蝉噪垂杨浦。”',
    example: '无',
    explanation: '蛙声和蝉声，使人听了厌烦。比喻拙劣的议论或文章。',
    pinyin: 'wā míng chán zào',
    word: '蛙鸣蝉噪',
    abbreviation: 'wmcz',
  },
  {
    derivation:
      '宋·龚开《高马小儿图》此儿此马俱可怜，马方三齿儿未冠。天真烂漫好容仪，楚楚衣裳无不宜。”',
    example: '他的性情又是那样～，笃实敦厚。★邹韬奋《经历·难兄难弟”的又一个》',
    explanation:
      '天真指心地单纯，没有做作和虚伪；烂漫坦率自然的样子。形容儿童思想单纯、活泼可爱，没有做作和虚伪。',
    pinyin: 'tiān zhēn làn màn',
    word: '天真烂漫',
    abbreviation: 'tzlm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '利用战争中获取来的人力、物力和财力，继续进行战争。',
    pinyin: 'yǐ zhàn yǎng zhàn',
    word: '以战养战',
    abbreviation: 'yzyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指呼喊天地以求救助。',
    pinyin: 'hū tiān yào dì',
    word: '呼天钥地',
    abbreviation: 'htyd',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '蠹居像蛀虫一样，深居在蛀坏的器物里。棊同棋”。像蛀虫一样深居，像棋子一样密布。形容坏人隐蔽很深，散布在各个要害地方。',
    pinyin: 'dù jū què chǔ',
    word: '蠹居棊处',
    abbreviation: 'djqc',
  },
  {
    derivation: '清·洪升《长生殿·献发》秋风团扇原吾分，多谢连枝特过存。”',
    example: '无',
    explanation: '秋风起后，扇子就弃置不用。比喻女子色衰失宠。',
    pinyin: 'qiū fēng tuán shàn',
    word: '秋风团扇',
    abbreviation: 'qfts',
  },
  {
    derivation: '《群英类选·〈鲛绡记·鲛绡会合〉》到今日天付良缘重聚首。”',
    example: '无',
    explanation:
      '付给予。上天给予的美好姻缘或缘份。也指难得的好机会。同天假良缘”。',
    pinyin: 'tiān fù liáng yuán',
    word: '天付良缘',
    abbreviation: 'tfly',
  },
  {
    derivation:
      '唐·韩愈《送浮屠文畅师序》夫兽深居而简出，惧物之为己害也，犹且不脱焉。”',
    example: '自摈弃以来，尤自刻励，～，几不与世人相通。★宋·秦观《谢王学士书》',
    explanation:
      '简简省。原指野兽藏在深密的地方，很少出现◇指常呆在家里，很少出门。',
    pinyin: 'shēn jū jiǎn chū',
    word: '深居简出',
    abbreviation: 'sjjc',
  },
  {
    derivation:
      '语出《易·谦》谦谦君子，卑以自牧也。”王弼注牧，养也。”高亨注余谓牧犹守也，卑以自牧谓以谦卑自守也。”',
    example:
      '普天下的男子凡是在恋爱的时侯，他的～”的情怀都不亚于张生。★郭沫若《断断集·旋转乾坤论》',
    explanation: '指以谦卑自守。',
    pinyin: 'bēi yǐ zì mù',
    word: '卑以自牧',
    abbreviation: 'byzm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '由于羞愧到了极点，下不了台而发怒。同恼羞成怒”。',
    pinyin: 'nǎo xiū biàn nù',
    word: '恼羞变怒',
    abbreviation: 'nxbn',
  },
  {
    derivation: '唐·蒋防《霍小玉传》生素多才思，援笔成章。”',
    example: '无',
    explanation: '援笔拿起笔来。拿起笔来就写文章。形容文思敏捷。',
    pinyin: 'yuán bǐ chéng zhāng',
    word: '援笔成章',
    abbreviation: 'ybcz',
  },
  {
    derivation: '清·蒲松龄《聊斋志异》语甚凄楚，惊问之，欲言而止者再。”',
    example: '无',
    explanation: '想说又停止不说。形容有难言的苦衷。',
    pinyin: 'yù yán yòu zhǐ',
    word: '欲言又止',
    abbreviation: 'yyyz',
  },
  {
    derivation:
      '宋·郭熙淳《林泉高致·山水训》今得妙手郁然出之，不下堂筵，坐穷泉壑，猿声鸟啼依约在耳，山光水色滉漾夺目，此岂不快人意，实获我心哉，此世之所以贵夫画山之本意也。”',
    example: '无',
    explanation: '表示别人说得跟自己的想法一样。',
    pinyin: 'shí huò wǒ xīn',
    word: '实获我心',
    abbreviation: 'shwx',
  },
  {
    derivation:
      '元·王实甫《西厢记》第五本第三折偏我不如他，我仁者能仁，身里出身的根脚，又是亲上做亲，况兼他父命。”',
    example: '无',
    explanation: '指原是亲戚，又再结姻亲。',
    pinyin: 'qīn shàng zuò qīn',
    word: '亲上做亲',
    abbreviation: 'qszq',
  },
  {
    derivation:
      '《水浒传》第六八回[苏定]也道‘梁山泊吴用那厮，诡计多谋，不可轻敌，只宜退守；待救兵到来，从长商议。’”',
    example: '须与郎～一个计策便好。★《初刻拍案惊奇》卷二三',
    explanation: '犹言从长计议。',
    pinyin: 'cóng cháng shāng yì',
    word: '从长商议',
    abbreviation: 'ccsy',
  },
  {
    derivation: '无',
    example: '社会动荡，群魔乱舞的时代早已一去不复返了。',
    explanation: '成群的魔鬼乱跳乱蹦。比喻一批坏人在政治舞台上猖狂活动。',
    pinyin: 'qún mó luàn wǔ',
    word: '群魔乱舞',
    abbreviation: 'qmlw',
  },
  {
    derivation:
      '唐·杨炯《送并州昮上人诗序》良时美景，始云蒸而电激；临水登山，忽风流而雨散。”',
    example: '无',
    explanation: '美好的时光和景物。同良辰美景”。',
    pinyin: 'liáng shí měi jǐng',
    word: '良时美景',
    abbreviation: 'lsmj',
  },
  {
    derivation:
      '宋·释普济《五灯会元》卷十一问‘如何是大悲境？’师曰‘千眼都来一只收。’曰‘如何是境中人？’师曰‘手忙脚乱。’”',
    example: '惊得舌吐头摇，～。★明·郭勋《英烈传》第七十九回',
    explanation: '形容遇事慌张，不知如何是好。',
    pinyin: 'jiǎo máng shǒu luàn',
    word: '脚忙手乱',
    abbreviation: 'jmsl',
  },
  {
    derivation:
      '《论语·阳货》道听而途说，德之弃也。”《汉书·艺文志》小说家者流，盖出于稗官，街谈巷语，道听途说者之所造也。”',
    example: '妹子～，不知是否？尚求指示。★清·李汝珍《镜花缘》第五十三回',
    explanation: '道、途路。路上听来的、路上传播的话。泛指没有根据的传闻。',
    pinyin: 'dào tīng tú shuō',
    word: '道听途说',
    abbreviation: 'dtts',
  },
  {
    derivation: '明·卢象昻《与豫抚某书》戎马倥偬之场，屡荷足下训诲指提。”',
    example:
      '然而于～，大势已烈，只手难撑，不得不以一死报国家。（清·淮阴百一居士《壶天录》）',
    explanation: '戎马本指战马，借指军事；倥偬繁忙。形容军务繁忙。',
    pinyin: 'róng mǎ kǒng zǒng',
    word: '戎马倥偬',
    abbreviation: 'rmkz',
  },
  {
    derivation:
      '《诗·小雅·小宛》握粟出卜，是何能谷。”郑玄笺但持粟行卜，求其胜负。”',
    example: '无',
    explanation: '后用以指祈求神明护佑，去凶赐吉。',
    pinyin: 'wò sù chū bo',
    word: '握粟出卜',
    abbreviation: 'wscb',
  },
  {
    derivation:
      '《晋书·贾充传》时西域有贡奇香，一著人则经月不歇，帝甚贵之，惟以赐充及大司马陈骞。其女密盗以遗寿，充僚属与寿燕处，闻其芬馥，称之于充。……”',
    example:
      '稳坐了七香车，高揭了三檐伞，请受了金花诰，再不赴～期。★元·石子章《竹坞听琴》第四折',
    explanation: '比喻引诱妇女。',
    pinyin: 'tōu xiāng qiè yù',
    word: '偷香窃玉',
    abbreviation: 'txqy',
  },
  {
    derivation:
      '明·无名氏《大破蚩尤》第二折我我我，仗神锋断怪除妖，是是是，赁道法驱邪斩虎。”',
    example: '据着他～，我道来恰便似班门弄斧。★明·无名氏《锁白猿》第三折',
    explanation: '指铲除妖魔鬼怪。',
    pinyin: 'duàn guài chú yāo',
    word: '断怪除妖',
    abbreviation: 'dgcy',
  },
  {
    derivation:
      '元·杨讷《西游记》第四出陈光蕊运蹇時乖，著王安雇咱船只，一见他媳妇丰姿，又爱他钱财段匹，将主仆命丧江心。”',
    example: '我李靖居官二十五载，谁知今日～。★明·许仲琳《封神演义》第十三回',
    explanation: '指时运不佳，处于逆境。',
    pinyin: 'yùn jiǎn shí guāi',
    word: '运蹇时乖',
    abbreviation: 'yjsg',
  },
  {
    derivation:
      '元·乔孟符《两世姻缘》第三折末将不才，便求小娘子以成秦晋之好，亦不玷辱了他，他如何便不相容。”',
    example:
      '主公仰慕将军，欲求令爱为儿妇，永结～。★明·罗贯中《三国演义》第十六回',
    explanation: '春秋时，秦晋两国不止一代互相婚嫁。泛指两家联姻。',
    pinyin: 'qín jìn zhī hǎo',
    word: '秦晋之好',
    abbreviation: 'qjzh',
  },
  {
    derivation:
      '元·郑廷玉《后庭花》第四折休惊吓着他，你看这小厮到这开封府里，吓的他眼脑剔抽秃刷的。”',
    example: '无',
    explanation:
      '形容着急时眼睛迅速转动，或仔细打量别人的样子。亦作剔抽禿揣”。',
    pinyin: 'tī chōu tū shuā',
    word: '剔抽禿刷',
    abbreviation: 'tcts',
  },
  {
    derivation: '战国·楚·宋玉《神女赋》陈嘉辞而云对兮，吐芬芳其若兰。”',
    example: '宫人丽娟，年十四，玉肤柔软，～。★明·李贽《初谭集·夫妇三》',
    explanation: '气息象兰花那样香。形容美女的呼吸。',
    pinyin: 'chuī qì shèng lán',
    word: '吹气胜兰',
    abbreviation: 'cqsl',
  },
  {
    derivation:
      '宋·苏辙《陈汝义学士南京谢表》岂谓圣恩未弃，见桑榆，枯木再生，重沾雨露。”',
    example: '无',
    explanation: '枯死的树木又恢复了生命力。比喻历经挫折又获得生机。',
    pinyin: 'kū mù zài shēng',
    word: '枯木再生',
    abbreviation: 'kmzs',
  },
  {
    derivation:
      '《左传·成公四十年》《春秋》之称，微而显，志而晦，婉而成章，尽而不污，惩恶而劝善，非圣人谁能修之。”',
    example: '其于～之意，片言只字之奇，或可取焉。★明·赵弼《效颦集后序》',
    explanation: '劝勉励；惩责罚。惩罚坏人，奖励好人。',
    pinyin: 'quàn shàn chéng è',
    word: '劝善惩恶',
    abbreviation: 'qsce',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容大声哭叫，声音凄厉。同神号鬼哭”。',
    pinyin: 'shén háo guǐ kū',
    word: '神嚎鬼哭',
    abbreviation: 'shgk',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指攻击别人的弱点或错误。',
    pinyin: 'dí xiá dǎo xī',
    word: '涤瑕蹈隙',
    abbreviation: 'dxdx',
  },
  {
    derivation:
      '《孟子·梁惠王上》挟太山以超北海，语人曰‘我不能，’是诚不能也。”',
    example:
      '于此人也，而欲望以拿云之手段，回天之事功，～之意气，能乎不能？★清·梁启超《少年中国说》',
    explanation:
      '挟挟持，夹着；刱超越，跨过。夹着泰山跨越北海。比喻做绝对办不到的事。',
    pinyin: 'xié shān chāo hǎi',
    word: '挟山超海',
    abbreviation: 'xsch',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '劝慰人的话。指努力加餐，保重身体。',
    pinyin: 'qiǎng shí zì ài',
    word: '强食自爱',
    abbreviation: 'qsza',
  },
  {
    derivation:
      '三国·魏·曹植《黄初六年令》将以全陛下厚德，究孤犬马之年，此难能也。”',
    example: '老媳妇～七十有五。★《京本通俗小说·西山一窟鬼》',
    explanation: '对尊上卑称自己的年龄。',
    pinyin: 'quǎn mǎ zhī nián',
    word: '犬马之年',
    abbreviation: 'qmzn',
  },
  {
    derivation: '语出《榖梁传·隐公八年》不期而会曰遇。”',
    example:
      '晚上九点钟光景，吴公馆里～的来了些至亲好友，慰问吴荪甫在厂所受的惊吓。★茅盾《子夜》十四',
    explanation: '①未经约定而意外地遇见。②未经约定而自动聚集。',
    pinyin: 'bù qī ér huì',
    word: '不期而会',
    abbreviation: 'bqeh',
  },
  {
    derivation:
      '毛泽东《整顿党的作风》马克思列宁主义理论和中国革命实际，怎样互相联系呢？拿一句通俗的话来讲，就是有的放矢”。”',
    example: '无',
    explanation: '的箭靶子；矢箭。放箭要对准靶子。比喻说话做事有针对性。',
    pinyin: 'yǒu dǐ fàng shǐ',
    word: '有的放矢',
    abbreviation: 'ydfs',
  },
  {
    derivation: '唐·常建《题破山寺后禅院》诗万赖此俱寂，唯闻钟磬音。”',
    example:
      '这时～，只听到滴搭的钟声和可以微闻得到的母亲的呼吸。★邹韬奋《我的母亲》',
    explanation:
      '籁从孔穴中发出的声音；万籁自然界中万物发出的各种声响；寂静。形容周围环境非常安静，一点儿声响都没有。',
    pinyin: 'wàn lài jù jì',
    word: '万籁俱寂',
    abbreviation: 'wljj',
  },
  {
    derivation:
      '元·本高明《琵琶记·五娘葬公婆》这坟呵，只愿得中干燥，福孙荫子也者难料；便荫得个三公，也济不得亲老。”',
    example: '无',
    explanation: '指福荫及于子孙。',
    pinyin: 'fú sūn yìn zǐ',
    word: '福孙荫子',
    abbreviation: 'fsyz',
  },
  {
    derivation: '语出《易·系辞上》参伍以变，错综其数。”',
    example:
      '四象经过～，而成了八个和六十四个，天下之文”和天下之数”于是尽在其中。圣人再根据这些象，作成许多厚生利用的人间器物。★《原道》',
    explanation: '指交互错杂。',
    pinyin: 'cēn wǔ cuò zōng',
    word: '参伍错综',
    abbreviation: 'cwcz',
  },
  {
    derivation: '《礼记·经解》《易》曰‘君子慎始，差若毫厘，缪以千里。’”',
    example:
      '若认此法便可超凡入圣，岂非～之谬！★明·施耐庵《水浒全传》第九十七回',
    explanation:
      '毫、厘两种极小的长度单位。开始时虽然相差很微小，结果会造成很大的错误。',
    pinyin: 'háo lí qiān lǐ',
    word: '毫厘千里',
    abbreviation: 'hlql',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容豪迈激越的文章风格。',
    pinyin: 'tiě bǎn tóng xián',
    word: '铁板铜弦',
    abbreviation: 'tbtx',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '比喻境遇突然变好，顺利无阻地一下子达到很高的地位。同平地青云”。',
    pinyin: 'píng dì dēng yún',
    word: '平地登云',
    abbreviation: 'pddy',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第二十一回不免盟山誓海，难舍难分。”清·李宝嘉《官场现形记》难舍难分，所以一直就在船上打了‘水公馆’。”',
    example: '无',
    explanation: '舍放下。形容感情很好，不愿分离。亦作难分难舍。”。',
    pinyin: 'nán shě nán fēn',
    word: '难舍难分',
    abbreviation: 'nsnf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指掩藏锋芒，隐匿踪迹，等待时机。',
    pinyin: 'tāo huì dài shí',
    word: '韬晦待时',
    abbreviation: 'thds',
  },
  {
    derivation: '《诗经·小雅·鼓钟》鼓瑟鼓琴，笙磬同音。”',
    example: '无',
    explanation: '比喻人事协调，关系和睦。',
    pinyin: 'shēng qìng tóng yīn',
    word: '笙磬同音',
    abbreviation: 'sqty',
  },
  {
    derivation:
      '宋·苏轼《乞增修弓箭社条约状》之一如本地分内人户分烟析生，即各据户眼定差，或外来人户典买到本社田地，亦许收入差充弓箭社户。”',
    example: '无',
    explanation: '指分家。分割财产，各自过活。同分烟析产”。',
    pinyin: 'fēn yān xī shēng',
    word: '分烟析生',
    abbreviation: 'fyxs',
  },
  {
    derivation: '元·无名氏《昊天塔》第一折俺不能勾青史标名，留芳万古。”',
    example: '同心报国，～，有何不美。★明·施耐庵《水浒全传》第七十一回',
    explanation: '青史史书。历史上留下好名声。',
    pinyin: 'qīng shǐ chuán míng',
    word: '青史传名',
    abbreviation: 'qscm',
  },
  {
    derivation: '《战国策·韩策》臣闻鄙语曰‘宁为鸡口，无为朋。’”',
    example: '无',
    explanation:
      '宁愿做小而洁的鸡嘴，而不愿做大而臭的牛肛门。比喻宁在局面小的地方自主，不愿在局面大的地方听人支配。',
    pinyin: 'jī kǒu niú hòu',
    word: '鸡口朋',
    abbreviation: 'jknh',
  },
  {
    derivation:
      '唐·顾况《行路难三首》君不见担雪塞井空用力，炊沙作饭岂堪吃。”宋·释正受《嘉泰普灯录》多少痴禅和尚挑雪去填井。”',
    example: '无',
    explanation: '比喻劳而无功。',
    pinyin: 'tiāo xuě tián jǐng',
    word: '挑雪填井',
    abbreviation: 'txtj',
  },
  {
    derivation: '明·高明《琵琶记·牛相教女》棨戟门前，平沙堤上，何事车填马隘？”',
    example: '无',
    explanation: '指车马填塞门庭道路。形容宾客众多。',
    pinyin: 'chē tián mǎ ài',
    word: '车填马隘',
    abbreviation: 'ctma',
  },
  {
    derivation: '《左传·宣公十五年》虽鞭之长，不及马腹。”',
    example:
      '岂谓～，榻侧容一隅之鼾睡？不知燕巢在幕，釜底得几日之游魂。★清·蒲松龄《大捷二》',
    explanation: '比喻躲脱惩罚。',
    pinyin: 'mǎ fù táo biān',
    word: '马腹逃鞭',
    abbreviation: 'mftb',
  },
  {
    derivation:
      '清·吴敬梓《儒林外史》第二十回象你做这样慷慨仗义的事，我心里喜欢，只是也要看来说话的是个什么样的人。”',
    example: '黄兄～，弟虽力薄，亦可少助之。★清·黄小配《洪秀全演义》第九回',
    explanation: '仗义讲义气。为了讲情谊或主持公道而毫不吝啬地帮助别人。',
    pinyin: 'kāng kǎi zhàng yì',
    word: '慷慨仗义',
    abbreviation: 'kkzy',
  },
  {
    derivation:
      '《淮南子·修务训》听其自流，待其自生，则鲧禹之功不立，而后稷之智不用。”',
    example: '无',
    explanation: '指不加约束、引导，听任自由发展。',
    pinyin: 'tīng qí zì liú',
    word: '听其自流',
    abbreviation: 'tqzl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用手握腕，击着手掌。表示很激动、振奋的神态。',
    pinyin: 'è wàn dǐ zhǎng',
    word: '扼腕抵掌',
    abbreviation: 'ewdz',
  },
  {
    derivation: '《庄子·逍遥游》鹪鹩巢于深林，不过一枝；偃鼠饮河，不过满腹。”',
    example: '无',
    explanation:
      '鹪鹩小鸟名，以麻发为窝，系于树枝。鹪鹩做窝，只占用一根树枝。比喻一个安身之处或一个工作位置。',
    pinyin: 'jiāo liáo yī zhī',
    word: '鹪鹩一枝',
    abbreviation: 'jlyz',
  },
  {
    derivation: '宋·苏轼《满庭芳》词蜗角虚名，蝇头微利。”',
    example: '只为～，抛却鸳被良缘。★明·冯梦龙《古今小说》卷一',
    explanation: '如同苍蝇头那样的小利。比喻非常微小的利润。',
    pinyin: 'yíng tóu wēi lì',
    word: '蝇头微利',
    abbreviation: 'ytwl',
  },
  {
    derivation:
      '《文选·王融〈三月三日曲水诗序〉》尔乃回舆驻罕，岳镇渊渟。”李善注《孙子兵法》曰‘其镇如山，其渟如渊。’”',
    example: '无',
    explanation:
      '如山岳屹立，如渊水停滞。本用以形容军队稳定，不可动摇◇多用以形容人坚定沉着。',
    pinyin: 'yuè zhèn yuān tīng',
    word: '岳镇渊渟',
    abbreviation: 'yzyt',
  },
  {
    derivation:
      '明·张居正《陈六事疏》近来风俗人情，积习生弊，有颓靡不振之渐，有积重难反之几。若不稍加改易，恐无以新天下之耳目，一天下之心志。”',
    example: '无',
    explanation: '经过长时间形成的思想作风或习惯，很难改变。同积重难返”。',
    pinyin: 'jī zhòng nán fǎn',
    word: '积重难反',
    abbreviation: 'jznf',
  },
  {
    derivation:
      '明·沈德符《野获编·兵部·西南诸捷》惟近日东北用兵，聚三大帅娄十万众，尽没辽水，坐成厝火燎原之势，差为不竞耳。”',
    example: '无',
    explanation: '放火燎原，比喻小乱子酿成大祸患。',
    pinyin: 'cuò huǒ liǎo yuán',
    word: '厝火燎原',
    abbreviation: 'chly',
  },
  {
    derivation: '《淮南子·诠言训》至德，道者若丘山，嵬然不动，行者以为期也。”',
    example: '敌军围困万千重，我自～。★毛泽东《西江月·井冈山》',
    explanation:
      '岿然高峻独立的样子。象高山一样挺立着一动不动。形容高大坚固，不能动摇。',
    pinyin: 'kuī rán bù dòng',
    word: '岿然不动',
    abbreviation: 'krbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '了然；完全。完全没有听见。',
    pinyin: 'le rán wú wén',
    word: '了然无闻',
    abbreviation: 'lrww',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容静悄悄不出声息。同屏声敛息”。',
    pinyin: 'píng shēng jìng qì',
    word: '屏声静气',
    abbreviation: 'psjq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '衔含。茹吃。胸中藏有悲痛与仇恨。亦作衔悲蓄恨”。',
    pinyin: 'xián bēi rú hèn',
    word: '衔悲茹恨',
    abbreviation: 'xbrh',
  },
  {
    derivation: '唐·韩愈《争臣论》庶岩穴之士闻而慕之，束带结发，愿进于阙下。”',
    example: '无',
    explanation: '束系衣带，挽起发髻。指出仕。',
    pinyin: 'shù dài jié fā',
    word: '束带结发',
    abbreviation: 'sdjf',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第四十三回不过瞿耐庵惧内得很，一直不敢接他上任。那爱珠又是堂子里出身，杨花水性。”',
    example: '无',
    explanation: '柳絮飘扬，水性流动，因以杨花水性”比喻轻薄女子等用情不专。',
    pinyin: 'yáng hu huǐ xìng',
    word: '杨花水性',
    abbreviation: 'yhhx',
  },
  {
    derivation: '《管子·戒》君外舍而不鼎馈，非有内忧，必有外患。”',
    example:
      '摆着那些七零八落的人才，要支撑这个～的天下，越想越觉危险。★清·曾朴《孽海花》第二十一回',
    explanation: '多指国内不安定和外敌侵略。有时也比喻个人的情况。',
    pinyin: 'nèi yōu wài huàn',
    word: '内忧外患',
    abbreviation: 'nywh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '谓时间紧迫。',
    pinyin: 'kè bù dài shí',
    word: '刻不待时',
    abbreviation: 'kbds',
  },
  {
    derivation:
      '清·张南庄《何典》第六回活死人便知他是个仗官托势的花花公子了。”',
    example:
      '他和小丑的不同，是不扮横行无忌的～，也不扮一味仗势的宰相家丁。★鲁迅《二丑艺术》',
    explanation: '指衣着华丽，只会吃喝玩乐，不务正业的、有钱有势人家的女弟。',
    pinyin: 'huā huā gōng zǐ',
    word: '花花公子',
    abbreviation: 'hhgz',
  },
  {
    derivation: '明·沈鲸《双珠记·母子分珠》叹骨肉拊膺顿足，曷胜哀痛。”',
    example: '无',
    explanation: '捶胸跺脚。形容哀痛之极。',
    pinyin: 'fǔ yīng dùn zú',
    word: '拊膺顿足',
    abbreviation: 'fydz',
  },
  {
    derivation:
      '明·顾大典《青衫记·茶客娶兴》况且刘员外是个为客的人，贩夫俗子，教我怎生伴着他。”',
    example: '无',
    explanation: '贩夫指贩卖货物的小商人。泛指商贩等下层平民。',
    pinyin: 'fàn fū sú zǐ',
    word: '贩夫俗子',
    abbreviation: 'ffsz',
  },
  {
    derivation: '《左传·定公四年》会同难，啧有烦言，莫之治也。”',
    example:
      '我辈与之遗老，本不能志同道合，其～，正是应有之事。★《鲁迅书信集·致许寿裳》',
    explanation: '啧争辩；烦言气愤不满的话。形容议论纷纷，报怨责备。',
    pinyin: 'zé yǒu fán yán',
    word: '啧有烦言',
    abbreviation: 'zyfy',
  },
  {
    derivation: '汉·赵晔《吴越春秋》民富国强，众安道泰。”',
    example: '无',
    explanation: '国家富足，人民强健。',
    pinyin: 'guó fù mín qiáng',
    word: '国富民强',
    abbreviation: 'gfmq',
  },
  {
    derivation:
      '明·吴承恩《西游记》第二十一回全凭着手疾眼快，必须要身强力壮。”',
    example:
      '那时，忠大伯还～，墩实个子，红脸庞，短胡子黑里带黄。★梁斌《红旗谱》十',
    explanation: '形容身体强壮有力。',
    pinyin: 'shēn qiáng lì zhuàng',
    word: '身强力壮',
    abbreviation: 'sqlz',
  },
  {
    derivation: '唐·韩愈《祭柳子厚文》玉佩琼琚，大放厥辞。”',
    example: '无',
    explanation: '指写出大量优美的辞章。',
    pinyin: 'dà fàng jué cí',
    word: '大放厥辞',
    abbreviation: 'dfjc',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》丈六金身，能变能化，无大无不大，无通无不通，普渡众生，号作无人师。”',
    example:
      '所谓文学上的人道主义，当然不是庸俗的～，也不是惩恶劝善。★孙犁《秀露集·文学和生活的路》',
    explanation:
      '众生指一切有生命的动物及人。佛教语。普遍引渡所有的人，使他们脱离苦海，登上彼岸。',
    pinyin: 'pǔ dù zhòng shēng',
    word: '普渡众生',
    abbreviation: 'pdzs',
  },
  {
    derivation:
      '南宋淳熙二年（1175年）在信州（今江西上饶）鹅湖寺举行的一次著名的哲学辩论会。由吕祖谦邀集，意图调和朱熹和陆九渊两派争执。实质上是朱的客观唯心主义和陆的主观唯心主义的一场争论。它是中国哲学史上一次堪称典范的学术讨论会，首开书院会讲之先河。',
    example: '无',
    explanation: '比喻具有开创性的辩论会。',
    pinyin: 'é hú zhī huì',
    word: '鹅湖之会',
    abbreviation: 'ehzh',
  },
  {
    derivation:
      '明·徐光启《恭承新命谨陈急切事宜疏》只今辽左用饷不赀，司农束手，臣又一一求多，实是点金无术。”',
    example: '无',
    explanation:
      '没有点铁成金的法术。比喻没有最好的方法筹集钱财，解决贫困。同点金乏术”。',
    pinyin: 'diǎn jīn wú shù',
    word: '点金无术',
    abbreviation: 'djws',
  },
  {
    derivation: '唐·韩愈《读〈荀子〉》荀与扬，大醇而小疵。”',
    example: '知其有醇乎醇者，有大醇而小疵者也。★清·陈澧《与周孟贻书》',
    explanation: '醇纯正；疵毛病。大体纯正，而略有缺点。',
    pinyin: 'dà chún xiǎo cī',
    word: '大醇小疵',
    abbreviation: 'dcxc',
  },
  {
    derivation:
      '宋·袁去华《浣溪沙》词一夕高唐梦里狂，云情雨意两茫茫。袖间依约去年香。”',
    example: '季玉，年十一，～，小而了了。★清·李斗《扬州画舫录·小秦淮录》',
    explanation: '①云和雨的状态。②指男女欢会之情。',
    pinyin: 'yún qíng yǔ yì',
    word: '云情雨意',
    abbreviation: 'yqyy',
  },
  {
    derivation:
      '《庄子·齐物论》六合之外，圣人存而不论；六合之内，圣人论而不存。”',
    example: '无',
    explanation: '六合天地及东南西北。指天下。',
    pinyin: 'liù hé zhī nèi',
    word: '六合之内',
    abbreviation: 'lhzn',
  },
  {
    derivation: '唐·韩愈《为裴相公让官表》启中兴之宏图，当太平之昌历。”',
    example: '无',
    explanation:
      '展把卷画打开，比喻实现；宏图比喻宏伟远大的谋略与计划。大规模地实施宏伟远大的计划或抱负。',
    pinyin: 'dà zhǎn hóng tú',
    word: '大展宏图',
    abbreviation: 'dzht',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言车水马龙。形容来往车马很多，连续不断的热闹情景。',
    pinyin: 'mǎ shuǐ chē lóng',
    word: '马水车龙',
    abbreviation: 'mscl',
  },
  {
    derivation:
      '《诗刊》1978年第3期诗味的浓淡，与比兴之运用关系非常密切。李贺的诗歌在这方面是独具匠心的。”',
    example: '他的这种设计真是独具匠心。',
    explanation:
      '匠心巧妙的心思。具有独到的灵巧的心思。指在技巧和艺术方面的创造性。',
    pinyin: 'dú jù jiàng xīn',
    word: '独具匠心',
    abbreviation: 'djjx',
  },
  {
    derivation: '《庄子·徐无鬼》奎蹄曲隈，乳间股脚，自以为安室利处。”',
    example: '无',
    explanation: '比喻自以为安全的处所。',
    pinyin: 'rǔ jiān gǔ jiǎo',
    word: '乳间股脚',
    abbreviation: 'rjgj',
  },
  {
    derivation:
      '明·杨士聪《玉堂荟记》外而督托，内而各部，无一刻不痛痒相关，凡奏疏所不能及者，竿牍往来，罔非至计。”',
    example:
      '想起稷如远别半载，荷生出师关外，客边～的人，目前竟无一个。（清·魏秀仁《花月痕》第三十八回）',
    explanation: '形容彼此关系密切。',
    pinyin: 'tòng yǎng xiāng guān',
    word: '痛痒相关',
    abbreviation: 'tyxg',
  },
  {
    derivation:
      '《水浒传》第三五回既是天教我知了，正是度日如年，烧眉之急。我马也不要，从人也不带一个，连夜自赶回家。”',
    example: '望乞员外借贷些须，以救～。★明沈受先《三元记·博施》',
    explanation: '比喻非常迫切。',
    pinyin: 'shāo méi zhī jí',
    word: '烧眉之急',
    abbreviation: 'smzj',
  },
  {
    derivation: '无',
    example: '对自己的错误和缺点，决不可～，应该去寻求他人的帮助并尽快改正。',
    explanation: '隐瞒得很紧，不让别人知道。',
    pinyin: 'huì mò gāo shēn',
    word: '讳莫高深',
    abbreviation: 'hmgs',
  },
  {
    derivation: '汉·王褒《洞箫赋》哀悁悁之可怀兮，良醰醰而有味。”',
    example:
      '话是这样说，可是谈起理论，许宁还是一套套地向道静谈得～，头头是道。★杨沫《青春之歌》第一部第十二章',
    explanation: '津津兴趣浓厚的样子。指吃得很有味道或谈得很有兴趣。',
    pinyin: 'jīn jīn yǒu wèi',
    word: '津津有味',
    abbreviation: 'jjyw',
  },
  {
    derivation:
      '《左传.襄公十五年》，我以不贪为宝，尔以玉为宝，若以与我，皆丧宝也。',
    example: '无',
    explanation: '表示以不贪为可贵、崇高，也表示廉洁奉公。',
    pinyin: 'bù tān wé bǎo',
    word: '不贪为宝',
    abbreviation: 'btwb',
  },
  {
    derivation:
      '①唐·白居易《浪淘沙》词之六随波逐浪到天涯，迁客西还有几家。”②元·孟汉卿《魔合罗》第三折详察这生分女作歹为非，更和这忤逆男随波逐浪。”③明·罗贯中《三国演义》第七四回七军乱窜，随波逐浪者，不计其数。”',
    example:
      '这样没主意、～的人，不打他便打那个？★④清·西周生《醒世姻缘传》第五十三回',
    explanation:
      '①颠沛的样子。②谓同行同止。③随着波浪飘荡。④犹言随波逐流，随大流。',
    pinyin: 'suí bō zhú làng',
    word: '随波逐浪',
    abbreviation: 'sbzl',
  },
  {
    derivation:
      '元·无名氏《连环计》第二折俺好意的张筵置酒，你走将来卖俏行奸。”',
    example: '难道你～，认我做桃花墙外柯？★明·梁辰鱼《浣纱记·捧心》',
    explanation: '指卖弄媚态诱惑人，搞不正当男女关系。',
    pinyin: 'mài qiào xíng jiān',
    word: '卖俏行奸',
    abbreviation: 'mqxj',
  },
  {
    derivation: '《吕氏春秋·义赏》文公曰‘雍季之言，百世之利也。”',
    example: '然而为大王计者，皆为一时之说，不顾～。★《史记·张仪列传》',
    explanation: '世世代代长远的利益。',
    pinyin: 'bǎi shì zhī lì',
    word: '百世之利',
    abbreviation: 'bszl',
  },
  {
    derivation:
      '清·魏源《〈国朝古文类钞〉序》矧我圣清皞皞二百载，由治平升平而进于太平，元气长于汉，经术盛于唐，兵力物力幅员雄于宋，列圣御制诗文集、康煕《图书》、乾隆《四库》官书尤富轹万古。”',
    example: '无',
    explanation: '形容极其丰富，超越千秋万代。',
    pinyin: 'fù lì wàn gǔ',
    word: '富轹万古',
    abbreviation: 'flwg',
  },
  {
    derivation: '《吕氏春秋·荡兵》夫有以噎死者，欲禁天下之食，悖。”',
    example:
      '若是后人不问来由，一律的奉以为法，岂不～了么？★清·吴趼人《二十年目睹之怪现状》第二十一回',
    explanation:
      '原意是说，因为有人吃饭噎死了，就想让天下人都不吃饭，这太荒谬了。比喻要做的事情由于出了点小毛病或怕出问题就索性不去干。',
    pinyin: 'yīn yē fèi shí',
    word: '因噎废食',
    abbreviation: 'yyfs',
  },
  {
    derivation: '唐·杜甫《北征》诗乾坤含疮痍，忧虞何时毕？”',
    example: '征鼙聒耳乡音杳，～亲人少。★清·李渔《风筝误·和鹤》',
    explanation: '疮痍创伤。满眼创伤。比喻眼前看到的都是灾祸的景象。',
    pinyin: 'chuāng yí mǎn mù',
    word: '疮痍满目',
    abbreviation: 'cymm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '四通八达的宽广大路。',
    pinyin: 'tōng qú guǎng mò',
    word: '通衢广陌',
    abbreviation: 'tqgm',
  },
  {
    derivation:
      '《礼记·檀弓下》丧礼，哀戚之至也；节哀，顺变也。君子念始之者也。”',
    example: '吾兄～，保全金玉之躯。★清·无名氏《西湖二集·洒雪堂巧结良缘》',
    explanation: '节节制；变事变。抑制哀伤，顺应变故。用来慰唁死者家属的话。',
    pinyin: 'jié āi shùn biàn',
    word: '节哀顺变',
    abbreviation: 'jasb',
  },
  {
    derivation: '《汉书·匡衡传》臣闻教化之流之流，非家至而人说之也。”',
    example: '无',
    explanation: '传到每一家，人人都知道。',
    pinyin: 'jiā zhì rén shuō',
    word: '家至人说',
    abbreviation: 'jzrs',
  },
  {
    derivation:
      '三国·魏·曹操《褒扬泰山太守吕虔令》卿在郡以来，擒奸讨暴，百姓获安，躬蹈矢石，年征辄克。”',
    example: '无',
    explanation: '指将帅亲临前线，冒着敌人的箭矢祑石，不怕牺牲自己。',
    pinyin: 'gōng dǎo shǐ shí',
    word: '躬蹈矢石',
    abbreviation: 'gdss',
  },
  {
    derivation:
      '宋·马廷鸾《题汪水云诗》余展读甲子初作，微有汗出，读至丙子诸作，潸然泪下。”',
    example: '无',
    explanation: '潸然流泪的样子。形容泪流不止。',
    pinyin: 'shān rán lèi xià',
    word: '潸然泪下',
    abbreviation: 'srlx',
  },
  {
    derivation:
      '元·无名氏《马陵道》第四折俺如今拚的个不做不休，这就是至诚心为人为彻。”',
    example: '无',
    explanation: '指事情既然开了头，就索性干到底。',
    pinyin: 'bù zuò bù xiū',
    word: '不做不休',
    abbreviation: 'bzbx',
  },
  {
    derivation: '《宋书·明帝纪》日月所照，梯山航海，风雨所均，削衽袭带。”',
    example: '无',
    explanation: '登山航海。比喻长途跋涉，经历险远的旅程。',
    pinyin: 'tī shān háng hǎi',
    word: '梯山航海',
    abbreviation: 'tshh',
  },
  {
    derivation: '汉·韩婴《韩诗外传》第五卷当前快意，一呼再诺者，人隶也。”',
    example:
      '农会会员漫山遍野，梭镖短棍～，土匪无处藏踪。★毛泽东《湖南农民运动考察报告》',
    explanation: '一个人呼喊，马上有很多人响应。',
    pinyin: 'yī hū bǎi yìng',
    word: '一呼百应',
    abbreviation: 'yhby',
  },
  {
    derivation:
      '三国·蜀·诸葛亮《出师表》先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中。”',
    example: '无',
    explanation:
      '顾拜访。刘备为请诸葛亮，三次到草庐中去拜访他◇用此典故表示帝王对臣下的知遇之恩。也比喻诚心诚意地邀请或过访。',
    pinyin: 'cǎo lú sān gù',
    word: '草庐三顾',
    abbreviation: 'clsg',
  },
  {
    derivation: '《明史·五行志一》贵州暴雪，形如土砖，民居片瓦无存者。”',
    example:
      '疯僧，你就把相府烧个～，我也要把你解到有司衙门，打你八十竹棍，方出我胸中之气。”★《济公全传》第十九回',
    explanation: '一块瓦都没有了。形容房屋全部毁坏。',
    pinyin: 'piàn wǎ wú cún',
    word: '片瓦无存',
    abbreviation: 'pwwc',
  },
  {
    derivation:
      '郭沫若《文艺论集读·梁任公〈墨子新社会之组织法〉》便是胡適和梁任也都很知道他这种宗教的循环论证不足以满足我们近代人的要求，所以极力在用改梁换柱的方法，要把他的根本观念改移到另一个较为好看一点的节目上去。”',
    example: '无',
    explanation: '比喻玩弄手法，暗中改变事物的内容或事情的性质。',
    pinyin: 'gǎi liáng huàn zhù',
    word: '改梁换柱',
    abbreviation: 'glhz',
  },
  {
    derivation: '《孙子·谋攻》知己知彼，百战不殆。”',
    example: '对付敌人，一定要～，才能百战百胜。★曲波《林海雪原》十一',
    explanation:
      '原意是如果对敌我双方的情况都能了解透彻，打起仗来就可以立于不败之地。泛指对双方情况都很了解。',
    pinyin: 'zhī jǐ zhī bǐ',
    word: '知己知彼',
    abbreviation: 'zjzb',
  },
  {
    derivation:
      '《礼记·中庸》或生而知之，或学而知之，或困而知之，及其知之一也。或安而行之，或利而行之，或勉强而行之，及其成功一也。”',
    example: '无',
    explanation:
      '困知遇困而求知；勉行尽力实行。在不断克服困难中求得知识，有了知识就勉力实行。',
    pinyin: 'kùn zhī miǎn xíng',
    word: '困知勉行',
    abbreviation: 'kzmx',
  },
  {
    derivation: '汉·刘向《新序·杂事三》砥砺名号者，不以利伤行。”',
    example: '无',
    explanation: '指自修品节，以保令名。同砥厉名号”。',
    pinyin: 'dǐ lì míng hào',
    word: '砥砺名号',
    abbreviation: 'dlmh',
  },
  {
    derivation:
      '宋·辛弃疾《渔家傲·为余伯熙察院寿》道德文章传几世，到君合上三台位。”',
    example: '无',
    explanation: '指思想品德和学识学问。',
    pinyin: 'dào dé wén zhāng',
    word: '道德文章',
    abbreviation: 'ddwz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指天然生就。',
    pinyin: 'tiān shēng tiān huà',
    word: '天生天化',
    abbreviation: 'tsth',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹连夜。形容办事赶紧，毫不拖延。同连更晓夜”。',
    pinyin: 'lián gèng xīng yè',
    word: '连更星夜',
    abbreviation: 'lgxy',
  },
  {
    derivation:
      '明·兰陵笑笑生《金瓶梅词话》第78回你娘与我些什么儿？他还说我小眼薄皮爱人家的东西。”',
    example: '无',
    explanation: '比喻眼界小，爱贪小便宜。',
    pinyin: 'xiǎo yǎn bó pí',
    word: '小眼薄皮',
    abbreviation: 'xybp',
  },
  {
    derivation: '清·无名氏《杜诗言志》卷一‘荡胸’句，言其量之无所不包。”',
    example: '写总结要突出重点，不要面面俱到，～。',
    explanation: '没有什么不被包括。形容包含的东西非常多。',
    pinyin: 'wú suǒ bù bāo',
    word: '无所不包',
    abbreviation: 'wsbb',
  },
  {
    derivation:
      '元·王实甫《西厢记》第二本第二折我不曾出声，他连忙答应。金圣叹‘真正出神入化之笔’。”',
    example:
      '不知道这位老画师是观察了多少的活虾，才能够画虾画得这样～的。★秦牧《虾趣》',
    explanation:
      '神、化指神妙的境域。极其高超的境界。形容文学艺术达到极高的成就。',
    pinyin: 'chū shén rù huà',
    word: '出神入化',
    abbreviation: 'csrh',
  },
  {
    derivation: '三国·魏·王粲《赠蔡子笃》诗风流云散，一别如雨。”',
    example:
      '今则天各一方，～，兼之玉碎香埋，不堪回首矣。★清·沈复《浮生六记·闲情记趣》',
    explanation: '象风和云那样流动散开。比喻在一起的人分散到四面八方。',
    pinyin: 'fēng liú yún sàn',
    word: '风流云散',
    abbreviation: 'flys',
  },
  {
    derivation: '《尚书·大禹漠》明于五刑，以弼五教，期于予治。”',
    example: '～，道尊老氏。★唐·张说《起义堂颂》',
    explanation:
      '弼辅助。用刑法晓喻人民，使人们都知法、畏法而守法，以达到教化所不能收到的效果。',
    pinyin: 'míng xíng bì jiào',
    word: '明刑弼教',
    abbreviation: 'mxbj',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '指男女相爱时立下的誓言，表示爱情要象山和海一样永恒不变。同山盟海誓”。',
    pinyin: 'shì shān méng hǎi',
    word: '誓山盟海',
    abbreviation: 'ssmh',
  },
  {
    derivation:
      '《旧唐书·神秀传》昔后魏末，有僧达摩者，本天竺王子，以护国出家，入南海，得禅宗妙法，云自释迦相传，有衣钵为记，世相付授。”',
    example: '无',
    explanation:
      '中国禅宗师徒间道法传授，常常举行授与衣钵的仪式。比喻技术、学术的师徒相传。',
    pinyin: 'yī bō xiāng chuán',
    word: '衣钵相传',
    abbreviation: 'ybxc',
  },
  {
    derivation:
      '清·石昆玉《三侠五义》第三回正说话间，只见小和尚左手拿一只灯，右手提一壶茶，走进来贼眉贼眼，将灯放下，又将茶壶放在桌上，两只贼眼东瞧西看，连话也不说，回头就走。”',
    example: '无',
    explanation: '形容神情鬼鬼祟祟。',
    pinyin: 'zéi méi zéi yǎn',
    word: '贼眉贼眼',
    abbreviation: 'zmzy',
  },
  {
    derivation:
      '清·吕留良《与董方白书》度所费不下数千金，时绌举盈，极为民害。”',
    example: '无',
    explanation:
      '绌不足、不够。盈有余、多余。当衰败之时，而强作奢侈之事。盈，通赢”。同时绌举赢”。',
    pinyin: 'shí chù jǔ yíng',
    word: '时绌举盈',
    abbreviation: 'scjy',
  },
  {
    derivation:
      '清·赵翼《题黄陶庵手书诗册》诗呜呼公已骑箕去，故纸残零亦何有。一鳞片甲乃幸存，其字其诗遂不朽。”',
    example: '无',
    explanation: '比喻零星片段的事物。同一鳞半甲”。',
    pinyin: 'yī lín piàn jiǎ',
    word: '一鳞片甲',
    abbreviation: 'ylpj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指人死了以后尸体腐朽得越快越好。人死入土为安。',
    pinyin: 'sǐ yù sù xiǔ',
    word: '死欲速朽',
    abbreviation: 'sysx',
  },
  {
    derivation:
      '《天雨花》第五回逼得我，此一身，走投无路，因此上，来披剃，遁迹空门。”',
    example:
      '智明长老迟疑不语，自己是个萍踪浪迹之人，生生死死，恩恩怨怨，已成过眼烟云，今已～。★《今古传奇》1983年第4辑',
    explanation: '指出家。避开尘世而入佛门。同遁入空门”。',
    pinyin: 'dùn jì kōng mén',
    word: '遁迹空门',
    abbreviation: 'djkm',
  },
  {
    derivation:
      '唐·韩愈《关石处士序》若驷马驾轻车，就熟路，而王良、造父为之先后也。”',
    example:
      '到了场期日迫，只得把功令所有条件略为照顾，以求风檐寸晷，有～之乐。（清·李绿园《歧路灯》第一○二回）',
    explanation:
      '驾赶马车。驾轻车，走熟路。比喻对某事有经验，很熟悉，做起来容易。',
    pinyin: 'jià qīng jiù shú',
    word: '驾轻就熟',
    abbreviation: 'jqjs',
  },
  {
    derivation: '清·陶曾佑《论文学之势力及其关系》锢蔽见闻，淆混是非。”',
    example: '他们颠倒黑白，～，结帮营私，横行霸道。★巴金《一封信》',
    explanation: '混淆使界限不清。故意把正确的说成错误的，把错误的说成正确的。',
    pinyin: 'hùn xiáo shì fēi',
    word: '混淆是非',
    abbreviation: 'hxsf',
  },
  {
    derivation: '清·吴伟业《梅村诗话》贪吏放手无罚，而寸蹄尺缣，辄加逮治。”',
    example: '无',
    explanation: '比喻收受小贿。蹄，兽蹄；缣，黄色的细绢。',
    pinyin: 'cùn tí chǐ jiān',
    word: '寸蹄尺缣',
    abbreviation: 'ctcj',
  },
  {
    derivation:
      '《孽海花》第二六回再者我的手头散漫惯的，从小没学过做人家的道理，到了老爷这里，又由着我的性儿，成千累万的花。”',
    example: '无',
    explanation: '形容数量极多。',
    pinyin: 'chéng qiān lèi wàn',
    word: '成千累万',
    abbreviation: 'cqlw',
  },
  {
    derivation:
      '元·关汉卿《望江亭》第三折则这今晚开筵，正是中秋令节。只合低唱浅酌，莫待他花残月缺。”',
    example: '无',
    explanation:
      '低唱轻柔地歌唱；酌饮酒。听人轻柔地歌唱，并自在地慢慢饮酒。形容一种安乐自在的神态。',
    pinyin: 'dì chàng qiǎn zhuó',
    word: '低唱浅酌',
    abbreviation: 'dcqz',
  },
  {
    derivation:
      '鲁迅《彷徨·伤逝》况且她又这样地终日汗流满面，短发都粘在脑额上；两只手又只是这样地粗糙起来。”',
    example: '无',
    explanation: '形容极度紧张或非常劳累。',
    pinyin: 'hàn liú mǎn miàn',
    word: '汗流满面',
    abbreviation: 'hlmm',
  },
  {
    derivation:
      '宋·陈师道《代贺兴龙节表》庶邦有众，愿效忠臣之心，万年无疆，请祝圣人之寿。”',
    example:
      '是希望～的与宇宙共悠久的全中国的历史，每一页都充满着‘五四’运动的精神。★郭沫若《羽书集·青年化永远青年化》',
    explanation: '形容年代久远。同万世无疆”。',
    pinyin: 'wàn nián wú jiāng',
    word: '万年无疆',
    abbreviation: 'wnwj',
  },
  {
    derivation: '《庄子·盗跖》自是之后，以强凌弱，以众暴寡。”',
    example: '无',
    explanation: '倚仗，凭借；凌欺压。仗着自己强大就欺侮弱者。',
    pinyin: 'yǐ qiáng líng ruò',
    word: '倚强凌弱',
    abbreviation: 'yqlr',
  },
  {
    derivation: '元·无名氏《昊天塔》第一折俺不能勾青史标名，留芳万古。”',
    example: '同心报国，～，有何不美。★明·施耐庵《水浒全传》第七十一回',
    explanation: '青史史书。在历史上留下好名声。',
    pinyin: 'qīng shǐ liú míng',
    word: '青史留名',
    abbreviation: 'qslm',
  },
  {
    derivation:
      '清·徐大椿《洄溪道情·祭顾碧筠》我天生顽鲁，狂放粗豪。性别形殊，一冰一炭，情投谊合，如漆如胶。”',
    example: '无',
    explanation: '双方感情和心意都很投合。',
    pinyin: 'qíng tóu yì hé',
    word: '情投谊合',
    abbreviation: 'qtyh',
  },
  {
    derivation:
      '《战国策·楚策一》秦地半天下，兵敌四国，被山带河，四塞以为固。”',
    example:
      '秦地最胜，无如咸阳，～，金城千里。★明·冯梦龙《东周列国志》第八十七回',
    explanation: '靠着山，环着河。指形势险要的地方。',
    pinyin: 'pī shān dài hé',
    word: '被山带河',
    abbreviation: 'psdh',
  },
  {
    derivation:
      '《朱子语类》卷二四秦之所谓损益，亦见得周末许多烦文缛礼如此，故直要损其太过，益其欠处，只是损益得太甚。”',
    example: '～之疲其形，惕谗畏谴之斗其心。★明·唐顺之《赠宜兴令冯少虚序》',
    explanation: '繁琐而不必要的礼节。',
    pinyin: 'fán wén rù lǐ',
    word: '烦文缛礼',
    abbreviation: 'fwrl',
  },
  {
    derivation:
      '《史记·封禅书》自威（齐威王）、宣（齐宣王）、燕昭使人入海求蓬莱、方丈、瀛洲。此三神山者，其傅在勃海中……盖尝有至者，诸仙人及不死之药皆在焉。其物禽兽咀，而黄金银为宫阙。未至，望之如云；及到，三神山反居水下。临之，风辄引去，',
    example:
      '忽闻海上有仙山，山在虚无缥缈间。楼阁玲珑五云起，其中绰约多仙子。★唐白居易《长恨歌》',
    explanation:
      '指仙人所居住的仙境。多用于形容奇异不凡或美妙空幻的境界或景象等。',
    pinyin: 'xiān shān lóu gé',
    word: '仙山楼阁',
    abbreviation: 'xslg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '原指古凉州治内贺兰山一带◇泛指塞外富庶之地。',
    pinyin: 'sāi běi jiāng nán',
    word: '塞北江南',
    abbreviation: 'sbjn',
  },
  {
    derivation:
      '《三国志·魏志·陈思王植传》夫能使天下倾耳注目者，当权者是矣，故谋能移主，威能慑下。”',
    example: '无',
    explanation:
      '注目集中视线注意看。原形容权势极大，为众敬畏◇也形容注意力极其集中。',
    pinyin: 'qīng ěr zhù mù',
    word: '倾耳注目',
    abbreviation: 'qezm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指人主掌握兵权以制政权。',
    pinyin: 'jū zhòng yù qīng',
    word: '居重驭轻',
    abbreviation: 'jzyq',
  },
  {
    derivation: '晋·袁宏《后汉纪·光武帝纪八》广通宾客，门庭如市。”',
    example: '真正是～，有求必应。★《中国现在记》第七回',
    explanation:
      '门家门；庭庭院；如像；市集市。门前像市场一样。形容来的人很多。',
    pinyin: 'mén tíng rú shì',
    word: '门庭如市',
    abbreviation: 'mtrs',
  },
  {
    derivation:
      '《晋书·索靖传》或若登高望其类，或若既往而中顾，或若倜傥不群，或若自检于常度。”',
    example: '余友毕怡庵，～，豪纵自喜。★清·蒲松龄《聊斋志异·狐梦》',
    explanation: '倜傥洒脱，不拘束。形容洒脱豪放与众不同。',
    pinyin: 'tì tǎng bù qún',
    word: '倜傥不群',
    abbreviation: 'ttbq',
  },
  {
    derivation:
      '唐·柳宗元《东海若》刳而振其犀以嬉，取海水杂粪壤蟯蛓而实之，臭不可当也。”',
    example:
      '原来公坊那年自以为～的文章，竟被霞郎估着，居然掇了巍科。★《孽海花》第五回',
    explanation: '当承受。臭得使人受不了。比喻人名声极坏。',
    pinyin: 'chòu bù kě dāng',
    word: '臭不可当',
    abbreviation: 'cbkd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指彻底地推究本源。',
    pinyin: 'jí běn qióng yuán',
    word: '极本穷源',
    abbreviation: 'jbqy',
  },
  {
    derivation:
      '《庄子·天运》推舟于陆也，劳而无功。”《管子·形势》与不可，强不能，告不知，谓之劳而无功。”',
    example: '博洛兴师动众，旷费时日，～。★华而实《汉衣冠》七',
    explanation: '白白付出劳动而没有成效。',
    pinyin: 'tú láo wú gōng',
    word: '徒劳无功',
    abbreviation: 'tlwg',
  },
  {
    derivation:
      '汉·王充《论衡╞实知》凡圣人见祸福也，亦揆端推类，原始见终。”《三国志·魏书·臧洪传》仆虽不敏，又素不能原始见终。”',
    example: '无',
    explanation: '考察事物的开端而预见到它的结果。',
    pinyin: 'yuán shǐ jiàn zhōng',
    word: '原始见终',
    abbreviation: 'ysjz',
  },
  {
    derivation: '《晋书·何曾传》食日万钱，犹曰无下箸处。”',
    example: '无',
    explanation: '每天饮食要花费上万的钱。形容饮食极奢侈。',
    pinyin: 'shí rì wàn qián',
    word: '食日万钱',
    abbreviation: 'srwq',
  },
  {
    derivation:
      '清·宣鼎《夜雨秋灯录·麻疯女邱丽玉》生不知就里，趋近软语，代为卸妆。”',
    example: '无',
    explanation: '就里其中，内情。不知道内幕。',
    pinyin: 'bù zhī jiù lǐ',
    word: '不知就里',
    abbreviation: 'bzjl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '刚强坚决，不可动摇。同确乎不拔”。',
    pinyin: 'què gù bù bá',
    word: '确固不拔',
    abbreviation: 'qgbb',
  },
  {
    derivation:
      '毛泽东《论联合政府》过去和现在都有这样的人，企图孤行己见，不尊重我们的意见，但是结果都不通。”',
    example: '无',
    explanation: '不接受别人的意见，固执地照自己的意见行事。',
    pinyin: 'gū xíng jǐ jiàn',
    word: '孤行己见',
    abbreviation: 'gxjj',
  },
  {
    derivation: '清·卓发之《裓园嫘史》诗序清凉山之畔，竹径数转，别有人间。”',
    example: '无',
    explanation: '犹别有天地。',
    pinyin: 'bié yǒu rén jiān',
    word: '别有人间',
    abbreviation: 'byrj',
  },
  {
    derivation: '《周易·系辞上》乐天知命，故不忧。”',
    example: '无',
    explanation: '识天命者无忧虑。',
    pinyin: 'zhī mìng bù yōu',
    word: '知命不忧',
    abbreviation: 'zmby',
  },
  {
    derivation:
      '语出《汉书·西域传赞》自是之后，明珠、文甲、通犀、翠羽之珍盈于后宫，蒲梢、龙文、鱼目、汗血之马充于黄门，钜象、师子、猛犬、大雀之群食于外囿。殊方异物，四面而至。”',
    example: '无',
    explanation: '泛指珍禽异兽。',
    pinyin: 'què mǎ yú lóng',
    word: '雀马鱼龙',
    abbreviation: 'qmyl',
  },
  {
    derivation:
      '清·西周生《醒世姻缘传》第七十八回又兼陆好善的母亲、妻子帮虎吃食，狐假虎威，陪看皇姑寺，煞是有趣，……。”',
    example: '无',
    explanation: '比喻帮助恶人做坏事。',
    pinyin: 'bāng hǔ chī shí',
    word: '帮虎吃食',
    abbreviation: 'bhcs',
  },
  {
    derivation: '唐·白居易《琵琶行》大弦嘈嘈如急雨，小弦切切如私语。”',
    example: '无',
    explanation: '指私下小声说话。',
    pinyin: 'qiè qiè sī yǔ',
    word: '切切私语',
    abbreviation: 'qqsy',
  },
  {
    derivation: '汉·班固《汉武帝内传》庸主对坐，悒悒不乐。”',
    example: '郎君年渐长，合求官职。～，何以遣时。★唐·薛调《无双传》',
    explanation: '悒悒忧愁不安的样子。心里郁闷，感到不快。',
    pinyin: 'yì yì bù lè',
    word: '悒悒不乐',
    abbreviation: 'yybl',
  },
  {
    derivation:
      '清·章学诚《文史统义·古文十弊》夫文章变化，侔于鬼神，斗然而来，戛然而止，何尝无此景象？”',
    example: '就这一句，～，听来格外令人注意。★高阳《玉座珠帘》下册',
    explanation: '戛象声词。形容声音突然终止。',
    pinyin: 'jiá rán ér zhǐ',
    word: '戛然而止',
    abbreviation: 'jrez',
  },
  {
    derivation:
      '《荀子·富国》为名者否，为利者否，为忿者否，则国安于磐石，筹于旗翼。”',
    example: '无',
    explanation: '磐石巨石。比喻坚固不可动摇。',
    pinyin: 'pán shí zhī gù',
    word: '磐石之固',
    abbreviation: 'pszg',
  },
  {
    derivation:
      '汉·焦延寿《焦氏易林·巽》蹇驴不材，骏骥失时，筋劳力尽，罢于沙丘。”唐·韩愈《论淮西事宜状》虽时侵掠，小有所得，力尽筋疲，不偿其费。”',
    example:
      '赵家一门大小，日夜忙碌，早已弄得～，人仰马翻。★清·李宝嘉《官场现形记》第一回',
    explanation: '筋筋骨；尽完。形容非常疲乏，一点力气也没有了。',
    pinyin: 'jīn pí lì jìn',
    word: '筋疲力尽',
    abbreviation: 'jplj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容十分害怕。同心惊胆战”。',
    pinyin: 'xīn jīng dǎn chàn',
    word: '心惊胆颤',
    abbreviation: 'xjdc',
  },
  {
    derivation:
      '古乐府诗《鸡鸣》桃生露井上，李树生桃旁。虫来啮桃根，李树代桃僵。树木深相待，兄弟还相忘。”',
    example: '芝焚蕙叹嗟僚友，～泣弟兄。★清·黄遵宪《感事》诗',
    explanation:
      '僵枯死。李树代替桃树而死。原比喻兄弟互相爱护互相帮助◇转用来比喻互相顶替或代人受过。',
    pinyin: 'lǐ dài táo jiāng',
    word: '李代桃僵',
    abbreviation: 'ldtj',
  },
  {
    derivation:
      '《列子·说符》白公问曰‘若以石投水，何如？’孔子曰‘吴之善没者能取之。’”三国魏·李萧远《运命论》及其遭汉祖，其言也，如以石投水，莫之逆也。”',
    example: '无',
    explanation: '象石头投入水里就沉没。比喻互相合得来。',
    pinyin: 'yǐ shí tóu shuǐ',
    word: '以石投水',
    abbreviation: 'ysts',
  },
  {
    derivation:
      '宋·赵师侠《扑蝴蝶》一杯洗涤无余，万事消磨去远，浮名薄利休羡。”',
    example: '无',
    explanation: '浮名虚浮的名声；薄利微薄的利益。形容名利微不足道。',
    pinyin: 'fú míng bó lì',
    word: '浮名薄利',
    abbreviation: 'fmbl',
  },
  {
    derivation:
      '《邓析子·转辞》一言而非，驷马不能追；一言而急，驷马不能及。”《魏书·刑罚志》何得非正刑书，施行四海。刑名一失，驷马不追。”',
    example: '无',
    explanation: '指话说出口，就不能再收回，一定要算数。同驷马难追”。',
    pinyin: 'sì mǎ bù zhuī',
    word: '驷马不追',
    abbreviation: 'smbz',
  },
  {
    derivation:
      '《史记·高祖功臣侯者年表》封爵之誓曰‘使河如带，泰山若砺，国以永宁，爱及苗裔。’”',
    example: '无',
    explanation:
      '带衣带；砺磨刀石；山泰山；河黄河。黄河细得象条衣带，泰山小得象块磨刀石。比喻时间久远，任何动荡也决不变心。',
    pinyin: 'dài lì shān hé',
    word: '带砺山河',
    abbreviation: 'dlsh',
  },
  {
    derivation: '宋·苏洵《六国论》日削月割，以趋于亡。”',
    example: '无',
    explanation: '每日每月割让土地。形容一味割地求和。',
    pinyin: 'rì xuē yuè gē',
    word: '日削月割',
    abbreviation: 'rxyg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻读书多，学识渊博。',
    pinyin: 'wǔ chē fù sì',
    word: '五车腹笥',
    abbreviation: 'wcfs',
  },
  {
    derivation:
      '《醒世姻缘传》第一百回素姐那乖唇蜜舌，又拿着没疼热的东西交结童奶奶这伙子人，不惟把他可恶，且都说起他的好处。”',
    example: '无',
    explanation: '形容口齿伶俐，惯于说讨人喜欢的甜言蜜语。',
    pinyin: 'guāi chún mì shé',
    word: '乖唇蜜舌',
    abbreviation: 'gcms',
  },
  {
    derivation: '《庄子·大宗师》反复终始，不知端倪。”',
    example: '无',
    explanation: '端倪头绪。不知头绪。',
    pinyin: 'bù zhī duān ní',
    word: '不知端倪',
    abbreviation: 'bzdn',
  },
  {
    derivation: '《庄子·逍遥游》偃鼠饮河，不过满腹。”',
    example: '无',
    explanation: '比喻所需极有限。',
    pinyin: 'yǎn shǔ yǐn hé',
    word: '偃鼠饮河',
    abbreviation: 'ysyh',
  },
  {
    derivation:
      '宋·陆游《除宝谟阁待制谢表》窃慕隐居求志之风，尤耻哗世取名之事。”',
    example: '无',
    explanation: '用浮夸的言行使世人兴奋激动，博取虚名。',
    pinyin: 'huá shì qǔ míng',
    word: '哗世取名',
    abbreviation: 'hsqm',
  },
  {
    derivation:
      '金·元好问《普照范炼师写真》诗之三鹤骨松姿又一奇，化身千亿更无疑。”',
    example:
      '操请人。见其人～，形貌苍古。问之，乃京兆人也，隐居终南山。★《三国演义》第五九回',
    explanation: '清奇不凡的气质。多指修道者的形貌。',
    pinyin: 'hè gǔ sōng zī',
    word: '鹤骨松姿',
    abbreviation: 'hgsz',
  },
  {
    derivation:
      '宋·秦观《越州请立程给事祠堂状》［程给事］发隐擿伏，敏捷如神。”',
    example: '无',
    explanation: '揭露隐蔽的坏人坏事。',
    pinyin: 'fā yǐn tī fú',
    word: '发隐擿伏',
    abbreviation: 'fytf',
  },
  {
    derivation:
      '清·龚自珍《金缕曲·沈虹桥广文小像题词》词只东抹西涂还肯。两载云萍交谊在，更十行斜墨匆匆印。”',
    example: '无',
    explanation: '比喻用笔随便写写画画◇用作自己写作或绘画的谦词。同东涂西抹”。',
    pinyin: 'dōng mò xī tú',
    word: '东抹西涂',
    abbreviation: 'dmxt',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容奇异怪诞之极。',
    pinyin: 'miǎo ruò hé hàn',
    word: '邈若河汉',
    abbreviation: 'mrhh',
  },
  {
    derivation:
      '汉·班固《白虎通·三纲六纪》若罗网之有纪纲而万目张也。”汉·郑玄《诗谱序》举一纲而万目张，解一卷而众篇明。”',
    example:
      '有句古语，～”。拿起纲，目才能张，纲就是主题。★毛泽东《善于农业互助合作的两次谈话》',
    explanation:
      '纲鱼网上的总绳；举提起。把大绳子一提起来，一个个网眼就都张开。比喻抓住事物的关键，带动其他环节。也比喻文章条理分明。',
    pinyin: 'gāng jǔ mù zhāng',
    word: '纲举目张',
    abbreviation: 'gjmz',
  },
  {
    derivation: '茅盾《一九六０年短篇小说漫评》这一段涉笔成趣。”',
    example: '无',
    explanation: '涉笔动笔趣风趣，意味。形容一动笔就画出或写出很有意趣的东西。',
    pinyin: 'shè bǐ chéng qù',
    word: '涉笔成趣',
    abbreviation: 'sbcq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言无风起浪。比喻无端生事。',
    pinyin: 'wú fēng yáng bō',
    word: '无风扬波',
    abbreviation: 'wfyb',
  },
  {
    derivation:
      '明·冯惟敏《正官端正好·徐我亭归田》祖孙空切陈情表，母子遥悬陟屺怀，到如今谢天谢地全恩爱。”',
    example: '～，这件事总算办成了。',
    explanation: '表示目的达到或困难解除后满意轻松的心情。',
    pinyin: 'xiè tiān xiè dì',
    word: '谢天谢地',
    abbreviation: 'xtxd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指神闲意定，不拘形迹◇亦指行为随便，不受拘束。同解衣般礴”。',
    pinyin: 'jiě yī pán páng',
    word: '解衣盘磅',
    abbreviation: 'jypp',
  },
  {
    derivation:
      '朱自清《你我·子夜”》他笔下是些有血有肉能说能做的人，不是些扁平的人形，凝的影子。”',
    example: '无',
    explanation: '比喻富有生命的活力和内容。多用来形容文艺作品中人物形象生动。',
    pinyin: 'yǒu xuè yǒu ròu',
    word: '有血有肉',
    abbreviation: 'yxyr',
  },
  {
    derivation:
      '《潜确类书》卷六十李白少读书，未成，弃去。道逢老妪磨杵，白问其故。曰‘欲作针。’白感其言，遂卒业。”',
    example: '没有～的毅力，学问上就不可能有很深的造诣。',
    explanation:
      '把铁棒磨成了针。比喻做任何艰难的工作，只要有毅力，下苦功，就能够克服困难，做出成绩。',
    pinyin: 'mó chǔ chéng zhēn',
    word: '磨杵成针',
    abbreviation: 'mccz',
  },
  {
    derivation:
      '清·梁启超《新民说》才智之士，既得此以为阿世盗名之一秘钥，于是名节闲检，荡然无所顾复。',
    example: '无',
    explanation: '阿世曲意博取世人的欢心。用博取世人的欢心的方法来窃取名誉。',
    pinyin: 'ē shì dào míng',
    word: '阿世盗名',
    abbreviation: 'esdm',
  },
  {
    derivation:
      '《晋书·解系阎鼎等传论》于是武皇之胤，惟有建兴，众望攸归，曾无与二。”',
    example: '无',
    explanation: '众人所期望和敬仰的。形容在群众中威望很高。',
    pinyin: 'zhòng wàng yōu guī',
    word: '众望攸归',
    abbreviation: 'zwyg',
  },
  {
    derivation:
      '清·昭槤《啸亭杂录·内务府定制》福晋父率阖族谢恩，行三跪九叩礼。”',
    example:
      '于是，三支高香，一盅酒，二尺红布挂枝头，俞文芊～，拜了大柳树做干娘。★刘绍棠《小荷才露尖尖角》',
    explanation: '叩磕头。最敬重的礼节。',
    pinyin: 'sān guì jiǔ kòu',
    word: '三跪九叩',
    abbreviation: 'sgjk',
  },
  {
    derivation:
      '清·蒲松龄《聊斋志异·附各本序跋题辞〈陈序〉》维时雪停段君，踊跃付梓，快人快事，其有古人不见我之思乎？”',
    example: '无',
    explanation: '爽快人办爽快事。',
    pinyin: 'kuài rén kuài shì',
    word: '快人快事',
    abbreviation: 'krks',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指前进和后退均从容不费力。',
    pinyin: 'jìn tuì yù rú',
    word: '进退裕如',
    abbreviation: 'jtyr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '细长秀美如柳叶的宫妆画眉。借指美女。',
    pinyin: 'yáng liǔ gōng méi',
    word: '杨柳宫眉',
    abbreviation: 'ylgm',
  },
  {
    derivation: '晋·葛洪《抱朴子·外篇自序》一时莫论，经国之才。”',
    example: '无',
    explanation: '经治理。有治理国家的才能。形容才能卓著。',
    pinyin: 'jīng guó zhī cái',
    word: '经国之才',
    abbreviation: 'jgzc',
  },
  {
    derivation:
      '语出《后汉书·皇后纪上·明德马皇后》前过濯龙门上，见外家问起居者，车如流水，马如游龙，仓头衣绿褠，领袖正白，顾视御者，不及远矣。”',
    example: '～日夜弛，品题素竹与哀丝。★清·李慈铭《大风有感》诗',
    explanation: '比喻川流不息的车马。',
    pinyin: 'liú shuǐ yóu lóng',
    word: '流水游龙',
    abbreviation: 'lsyl',
  },
  {
    derivation:
      '宋·释道原《景德传灯录》卷二十五诸法寂灭相，不可以宣言，和尚如何为人？”',
    example: '无',
    explanation:
      '言言语；宣发表，表达。指不是言语所能表达的（用在说事物的奥妙、味道）。',
    pinyin: 'bù kě yán xuān',
    word: '不可言宣',
    abbreviation: 'bkyx',
  },
  {
    derivation: '宋·秦观《官制下》爵禄者，天下之砥石，圣人所以砺世磨钝者也。”',
    example: '仰见我皇上右文之至意，～，鼓舞激劝。★清·戴名世《序》',
    explanation: '激励世俗，磨炼愚钝。',
    pinyin: 'lì shì mó dùn',
    word: '砺世磨钝',
    abbreviation: 'lsmd',
  },
  {
    derivation:
      '唐·柳宗元《宣城县开国伯柳公行状》凡为文，去藻饰之华靡，汪洋自肆，以适己为用。”',
    example: '无',
    explanation:
      '汪洋形容文章气势浑厚，义理深广。肆放纵。形容人的气度或文章等大气磅礴，豪放自如。',
    pinyin: 'wāng yáng zì sì',
    word: '汪洋自肆',
    abbreviation: 'wyzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '消耗精神，丧失意志。',
    pinyin: 'xiāo shén liú zhì',
    word: '销神流志',
    abbreviation: 'xslz',
  },
  {
    derivation:
      '《诗经·周南·桃夭》桃之夭夭，灼灼其华。”毛传桃有华之盛者，夭夭，其少壮也。”《礼记·大学》诗云，‘桃之夭夭，其叶蓁蓁，之子于归，宜其家人。’宜其家人，而后可以教国人。”',
    example:
      '那知卢才听见钮成死了，料道不肯干休，已先～，不在话下。★明·冯梦龙《醒世恒言》第二十九卷',
    explanation: '喻事物的繁荣兴盛。亦形容逃跑。桃，谐音逃”。有时含诙谐义。',
    pinyin: 'táo zhī yāo yāo',
    word: '桃之夭夭',
    abbreviation: 'tzyy',
  },
  {
    derivation: '唐·韩愈《进学解》动而得谤，名亦随之。投闲置散，乃分之宜。”',
    example: '无',
    explanation:
      '投、置安放；闲、散没有事干。指安排在不重要的职位或没有安排工作。',
    pinyin: 'tóu xián zhì sàn',
    word: '投闲置散',
    abbreviation: 'txzs',
  },
  {
    derivation: '《左传·宣公十二年》筚路蓝缕，以启山林。”',
    example:
      '～，孙公既开其先；发扬光大，我公宜善其后。★蔡东藩、许廑父第九回《民国通俗演义》',
    explanation:
      '筚路柴车；蓝缕破衣服。驾着简陋的车，穿着破烂的衣服去开辟山林。形容创业的艰苦。',
    pinyin: 'bì lù lán lǚ',
    word: '筚路蓝缕',
    abbreviation: 'blll',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻腐败之极。',
    pinyin: 'jué yóu kuì yōng',
    word: '决疣溃痈',
    abbreviation: 'jyky',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第四十七回破家荡产，鬻儿卖女，时有所闻。”',
    example: '洛阳饥民～。★姚雪垠《李自成》第二卷第三十六章',
    explanation: '鬻卖。指生活无依，被迫卖掉自己的女儿。',
    pinyin: 'mài ér yù nǚ',
    word: '卖儿鬻女',
    abbreviation: 'meyn',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '广泛收集采纳。',
    pinyin: 'páng shōu bó cǎi',
    word: '旁收博采',
    abbreviation: 'psbc',
  },
  {
    derivation:
      '《三国志·蜀书·诸葛亮传》臣不胜受恩感激，今当远离，临表涕零，不知所言。”',
    example:
      '公长民短，临时～，既后觉其不可耳。★南朝·宋·刘义庆《世说新语·政事》',
    explanation: '形容说话内容混乱，无法理解。同不知所云”。',
    pinyin: 'bù zhī suǒ yán',
    word: '不知所言',
    abbreviation: 'bzsy',
  },
  {
    derivation:
      '《南宫词纪·题情·琥珀猫儿坠》移山回海，招赘相公宅。多就了除名烟月牌。”',
    example: '无',
    explanation: '移动山岳，旋转大海。比喻竭尽全力，克服巨大困难。',
    pinyin: 'yí shān huí hǎi',
    word: '移山回海',
    abbreviation: 'yshh',
  },
  {
    derivation:
      '语出《南史·曹景宗传》我昔在乡里，骑快马如龙……觉耳后生风，鼻头出火。”',
    example: '西家骁骑绕如龙，～耳生风。★元·杨维桢《奉题子昂骝马图》诗',
    explanation: '以之形容马行疾速。',
    pinyin: 'bí duān shēng huǒ',
    word: '鼻端生火',
    abbreviation: 'bdsh',
  },
  {
    derivation: '《王守仁全集》卷一 务收一篑之功，勿为九仞之弃。”',
    example:
      '我舒坦其外紧张其里的生活已久，此千钧一发之际，不可亏～。★丁中江《北洋军阀史话·曹锟变成阶下囚》',
    explanation: '篑盛土的筐。指成功前的最后一筐土。比喻成功前的最后一份努力。',
    pinyin: 'yī kuì zhī gōng',
    word: '一篑之功',
    abbreviation: 'ykzg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指老师的教诲。',
    pinyin: 'táo lǐ zhī jiào',
    word: '桃李之教',
    abbreviation: 'tlzj',
  },
  {
    derivation: '《孟子·公孙丑下》天时不如地利，地利不如人和。”',
    example:
      '虽然犯了一次错误，红军已卷土重来此～之边界，前途希望还是不恶。★毛泽东《井岗山的斗争》',
    explanation: '地利地理的优势；人和得人心。表示优越的地理条件和群众基础。',
    pinyin: 'dì lì rén hé',
    word: '地利人和',
    abbreviation: 'dlrh',
  },
  {
    derivation: '元·高则诚《琵琶记·谏父》又道是养儿代老，积谷防饥。”',
    example: '无',
    explanation: '储存粮食，防备饥荒。',
    pinyin: 'jī gǔ fáng jī',
    word: '积谷防饥',
    abbreviation: 'jgfj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '捣鬼，无中生有的挑拨。',
    pinyin: 'chuō wú lù ér',
    word: '戳无路儿',
    abbreviation: 'cwle',
  },
  {
    derivation:
      '宋·史达祖《隔浦莲·荷花》词西湖游子，惯识雨愁烟恨。只恐吴娃暗折赠。耿耿。柔丝容易萦损。”',
    example: '无',
    explanation: '烟雨所引起的人的惆怅哀愁。',
    pinyin: 'yǔ chóu yān hèn',
    word: '雨愁烟恨',
    abbreviation: 'ycyh',
  },
  {
    derivation:
      '典出《易·解》六三负且乘，致寇至，贞吝。《象》曰‘负且乘，亦可丑也。自我致戎，又谁咎也。’”',
    example: '城峻冲生，～，惟陛下图之。★《晋书·张祚传》',
    explanation: '指居非其位，才不称职，就会招致祸患。',
    pinyin: 'fù chéng zhì kòu',
    word: '负乘致寇',
    abbreviation: 'fczk',
  },
  {
    derivation: '毛泽东《沁园春·雪》词须晴日，看红装素裹，分外妖娆。”',
    example: '无',
    explanation: '指衣着淡雅的妇女。也形容雪后天晴，红日和白雪相映衬的景色。',
    pinyin: 'hóng zhuāng sù guǒ',
    word: '红装素裹',
    abbreviation: 'hzsg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指通过类比而探知渊源。',
    pinyin: 'tǎo lèi zhī yuán',
    word: '讨类知原',
    abbreviation: 'tlzy',
  },
  {
    derivation: '无',
    example:
      '秦王道孤当初不听先生们之谏，致有此难，将来后车之戒，孤当谨重。”（清·褚人获《隋唐演义》五十二回）',
    explanation:
      '对后面跟上来的车子的警戒。比喻以前的失败或挫折，可以作为以后做事情的借鉴或教训。',
    pinyin: 'hòu chē zhī jiè',
    word: '后车之戒',
    abbreviation: 'hczj',
  },
  {
    derivation:
      '毛泽东《新民主主义论》二十年来，这个文化新军的锋芒所向，从思想到形式（文字等），无不起了极大的革命。”',
    example: '无',
    explanation: '向指向。指斗争中矛头所指的地方。',
    pinyin: 'fēng máng suǒ xiàng',
    word: '锋芒所向',
    abbreviation: 'fmsx',
  },
  {
    derivation: '郭沫若《虎符》第二幕群众起来，鼓乐齐鸣。”',
    example: '无',
    explanation: '击鼓和奏乐声一齐响。形容热闹景象。',
    pinyin: 'gǔ yuè qí míng',
    word: '鼓乐齐鸣',
    abbreviation: 'gyqm',
  },
  {
    derivation: '《老子》第五十章出生入死，生之徒十有三，死之徒十有三。”',
    example:
      '这一层，不烦圣虑，他们是～的老兄弟，何况国家如此，不至于还闹义气。★高阳《清宫外史》上册',
    explanation: '原意是从出生到死去◇形容冒着生命危险，不顾个人安危。',
    pinyin: 'chū shēng rù sǐ',
    word: '出生入死',
    abbreviation: 'csrs',
  },
  {
    derivation:
      '《汉书·韩延寿传》因入卧传舍，闭阁思过。”三国·蜀·诸葛亮《黜来敏教》自谓能敦厉薄俗，帅之以义。今既不能，表退职，使闭门思愆。”',
    example:
      '小仙自知身获重罪，追悔莫及，惟有～，敬听天命。★清·李汝珍《镜花缘》第六回',
    explanation: '过过失。关起门来反省。',
    pinyin: 'bì mén sī guò',
    word: '闭门思过',
    abbreviation: 'bmsg',
  },
  {
    derivation: '唐·高适《封丘作》诗生事应须南亩田，世事尽付东流水。”',
    example:
      '缉捕使臣等听得这话，传在耳朵里，也只好笑笑，谁敢向他家道个不”字？这件事只索～了。★明·凌濛初《二刻拍案惊奇》卷二十',
    explanation:
      '扔在东流的水里冲走。比喻希望落空，成果丧失，前功尽弃，好象随着流水冲走了一样。',
    pinyin: 'fù zhī dōng liú',
    word: '付之东流',
    abbreviation: 'fzdl',
  },
  {
    derivation:
      '明胡应麟《少室山房笔丛·华阳博议下》古今绩学之士，磨弗以勤政者。”',
    example:
      '～，读书必有札记，以记所得著所疑。★徐特立《国文教授之研究》第一章',
    explanation: '指学问渊博的人；学者。',
    pinyin: 'jì xué zhī shì',
    word: '绩学之士',
    abbreviation: 'jxzs',
  },
  {
    derivation: '北魏《张猛龙碑》冬温夏清，晓夕承奉。”',
    example: '无',
    explanation: '冬天使父母温暖，夏天使父母凉爽。指人子孝道。亦泛称冬暖夏凉。',
    pinyin: 'dōng wēn xià qīng',
    word: '冬温夏清',
    abbreviation: 'dwxq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '知知识。探求知识像口渴想喝水一样迫切。形容求知愿望十分迫切。',
    pinyin: 'qiú zhī ruò kě',
    word: '求知若渴',
    abbreviation: 'qzrk',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第三十一回这长苗子是我们中国原有的，如今搀在这德国操内，中又不中，外又不外，倒成了一个中外合璧。”',
    example: '无',
    explanation: '中西合璧。',
    pinyin: 'zhōng wài hé bì',
    word: '中外合璧',
    abbreviation: 'zwhb',
  },
  {
    derivation: '《孟子·离娄下》君之视臣如土芥，则臣视君如寇仇。”',
    example:
      '倘明哲君子，洞察其奸，于家中妇女不时正言规劝，以三姑六婆～。★清·李汝珍《镜花缘》第十二回',
    explanation: '寇仇仇敌。看得象仇人一样。',
    pinyin: 'shì rú kòu chóu',
    word: '视如寇仇',
    abbreviation: 'srkc',
  },
  {
    derivation: '《墨子·尚贤》《汤誓》曰‘聿求元圣，与之戮力同心，以治天下。’”',
    example: '往后咱们～，一块打反动派！★冯德英《迎春花》第十九章',
    explanation: '形容认识一致，共同努力。',
    pinyin: 'qí xīn xié lì',
    word: '齐心协力',
    abbreviation: 'qxxl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言惟命是听。指绝对服从。',
    pinyin: 'wéi mìng shì cóng',
    word: '惟命是从',
    abbreviation: 'wmsc',
  },
  {
    derivation:
      '明·许仲琳《封神演义》第六十九回一员将使五股托天叉；一员将使八楞熟铜锤；一员将使五爪烂银抓；三将大战，杀得难解难分。”',
    example: '这盘棋，两人杀得～，不分高下。',
    explanation:
      '指双方争吵、斗争、比赛等相持不下，难以分开。有时也形容双方关系十分亲密，分不开。',
    pinyin: 'nán jiě nán fēn',
    word: '难解难分',
    abbreviation: 'njnf',
  },
  {
    derivation:
      '宋·洪迈《夷坚志·沈见鬼》夏六月，真若赤目，肿痛特甚，寝食俱废。”',
    example:
      '最令我～，乐而忘返的，是传统的、一年一度的书会。★曹靖华《雪雾迷濛访书画》',
    explanation:
      '觉也不睡，饭也顾不上吃。比喻极其焦虑不安，或学习、工作极其紧张。',
    pinyin: 'qǐn shí jù fèi',
    word: '寝食俱废',
    abbreviation: 'qsjf',
  },
  {
    derivation: '《礼记·聘义》气如白虹，天也。”',
    example:
      '斗争结盟友，殉难慷慨同。　人民柴市节，浩气贯长虹。★陈毅《纪念李大钊同志殉难三十周年》诗',
    explanation:
      '贯贯穿。正义的精神直上高空，穿过彩虹。形容精神极其崇高，气概极其豪壮。',
    pinyin: 'qì guàn cháng hóng',
    word: '气贯长虹',
    abbreviation: 'qgch',
  },
  {
    derivation: '晋·陆机《文赋》滔藻联翩。”',
    example: '无',
    explanation: '联翩鸟联着翅膀疾飞的样子。形容人接连来到。',
    pinyin: 'lián piān ér zhì',
    word: '联翩而至',
    abbreviation: 'lpez',
  },
  {
    derivation: '叶圣陶《母》‘我如梦如醉的离开了他。”伊揩着眼泪，继续说。”',
    example: '无',
    explanation: '形容处于不清醒、迷糊状态中。同如醉如梦”。',
    pinyin: 'rú mèng rú zuì',
    word: '如梦如醉',
    abbreviation: 'rmrz',
  },
  {
    derivation: '汉·王符《潜夫论·贤难》谚曰一犬吠形，百犬吠声。”',
    example: '无',
    explanation: '比喻一经他人唆使，便不分是非曲直，对人大加攻击。',
    pinyin: 'suí shēng fèi yǐng',
    word: '随声吠影',
    abbreviation: 'ssfy',
  },
  {
    derivation:
      '孙中山《上李鸿章书》若国家不为体恤，不为保护，则小者无以觅蝇头微利，大者无以展鸿业远图。”',
    example: '无',
    explanation: '鸿大￡伟的事业，远大的志向或谋划。',
    pinyin: 'hóng yè yuǎn tú',
    word: '鸿业远图',
    abbreviation: 'hyyt',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '比喻由于偶然的机缘而有富贵贫贱的不同命运。亦多指女子堕落风尘。同飘茵堕溷”。',
    pinyin: 'piāo yīn suí hùn',
    word: '飘茵随溷',
    abbreviation: 'pysh',
  },
  {
    derivation:
      '南朝·宋刘·义庆《世说新语·言语》过江诸人，每至美日，辄相邀新亭，藉卉饮宴。周侯（周顗）中坐而叹曰‘风景不殊，正自有山河之异！’皆相视流泪。唯王丞相（王导）愀然变色曰‘当共戮力王室，克复神州，何至作楚囚相对！’”',
    example: '夫和妇～，血泪满襟臆。★明·徐复祚《红梨记忆友》',
    explanation: '形容人们遭遇国难或其他变故，相对无策，徒然悲伤。',
    pinyin: 'chǔ qiú xiāng duì',
    word: '楚囚相对',
    abbreviation: 'cqxd',
  },
  {
    derivation: '《管子·重令》国不虚重，兵不虚胜，民不虚用，令不虎行。”',
    example: '无',
    explanation: '指制定的法令必须切实执行。',
    pinyin: 'lìng bù xū xíng',
    word: '令不虚行',
    abbreviation: 'lbxx',
  },
  {
    derivation: '唐·韩愈《贞曜先生墓志铭》神施鬼设，间见层出。”',
    example: '无',
    explanation: '形容诗文十分精妙。',
    pinyin: 'shén shī guǐ shè',
    word: '神施鬼设',
    abbreviation: 'ssgs',
  },
  {
    derivation: '无',
    example: '天空中那只老鹰～，真让人羡慕。',
    explanation: '指自由自在的样子。',
    pinyin: 'áo xiáng zì dé',
    word: '遨翔自得',
    abbreviation: 'axzd',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '封赏官职和许诺报酬。现多指为了使他人为己所用而答应给以名利地位。',
    pinyin: 'fēng guān xǔ yuán',
    word: '封官许原',
    abbreviation: 'fgxy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指拯救饥饿和危急中的人。',
    pinyin: 'jiù jī zhěng nì',
    word: '救饥拯溺',
    abbreviation: 'jjzn',
  },
  {
    derivation:
      '元·费唐臣《苏子瞻风雪贬黄州》第一折旦本官志大言浮，离经畔道。”',
    example:
      '他早就说过，与其目击儿子那样的～”的生活，倒不如死了好！他绝对不愿意到上海。★茅盾《子夜》一',
    explanation:
      '离背离，不遵守。原指违反封建统治阶级所尊奉的经典和教条。现泛指背离占主导地位的理论或学说。',
    pinyin: 'lí jīng pàn dào',
    word: '离经叛道',
    abbreviation: 'ljpd',
  },
  {
    derivation:
      '陈登科《活人塘》三咱薛家祖上是锅碗一担挑到新河集的，落了户，靠两只手苦，可怜，熬肠刮肚的买了这几亩田。”',
    example: '无',
    explanation: '指从事饮食方面尽力节俭。',
    pinyin: 'áo cháng guā dù',
    word: '熬肠刮肚',
    abbreviation: 'acgd',
  },
  {
    derivation:
      '毛泽东《抗日游击战争的战略问题》集中使用兵力，即所谓化零为整”的办法，多半是在敌人进攻之时为了消灭敌人而采取的。”',
    example: '无',
    explanation: '把零散的部分集中为一个整体。',
    pinyin: 'huà líng wéi zhěng',
    word: '化零为整',
    abbreviation: 'hlwz',
  },
  {
    derivation:
      '清·石玉昆《三侠五义》第一回谁知早有人将信暗暗透于冷宫，秦凤一闻此言，胆裂魂飞，忙忙奏知李娘娘。李娘娘闻听，登时昏迷不醒。”',
    example: '无',
    explanation: '神志昏沉，不省人事。',
    pinyin: 'hūn mí bù xǐng',
    word: '昏迷不醒',
    abbreviation: 'hmbx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '可以作为准绳、合乎道德圣智的言论。',
    pinyin: 'shéng mò zhī yán',
    word: '绳墨之言',
    abbreviation: 'smzy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指隐居不仕。同凿坏以遁”。',
    pinyin: 'záo pī ér dùn',
    word: '凿坯而遁',
    abbreviation: 'zped',
  },
  {
    derivation: '《三国志·吴书·周鲂传》鲂在郡十三年卒，赏善罚恶，恩威并行。”',
    example:
      '为朝廷计，宜先赦其矫诏之罪，然后赏其斩曦之功，则～，折冲万里之外矣。★宋·周密《齐东野语·文庄论安丙矫诏》',
    explanation:
      '安抚和强制同时施行。现也指掌权者对手下人，同时用给以小恩小惠和给以惩罚的两种手段。',
    pinyin: 'ēn wēi bìng yòng',
    word: '恩威并用',
    abbreviation: 'ewby',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '犹言卖剑买牛。原指放下武器，从事耕种◇比喻改业务农或坏人改恶从善。',
    pinyin: 'mǎi dú mài dāo',
    word: '买犊卖刀',
    abbreviation: 'mdmd',
  },
  {
    derivation:
      '梁启超《新罗马·党狱》况且你们那豪门贵胄做官读书的上等人物，个个都做了我家吮痈舐痔一呼百诺的孝顺孙儿。”',
    example: '无',
    explanation: '指权们贵族的子孙。',
    pinyin: 'háo mén guì zhòu',
    word: '豪门贵胄',
    abbreviation: 'hmgz',
  },
  {
    derivation:
      '《左传·哀公十四年》千乘之国，不信其盟，而信子之言，子何辱焉？”',
    example: '此事君亲见之，惟～，无他言也。★清·蒲松龄《聊斋志异·李伯言》',
    explanation: '比喻信用极好。',
    pinyin: 'jì lù yī yán',
    word: '季路一言',
    abbreviation: 'jlyy',
  },
  {
    derivation:
      '《春秋运斗枢》飞翔羽翮为阳，阳气仁，故乌反哺也。”清·蒲松龄《聊斋志异·青凤》君如念妾，还祈以楼宅相假，使妾得以返哺之私。”',
    example: '无',
    explanation: '返哺雏鸟长大，衔食哺其母。比喻报答亲恩。',
    pinyin: 'fǎn bǔ zhī ēn',
    word: '返哺之恩',
    abbreviation: 'fbze',
  },
  {
    derivation: '《朱子全书·论语》言其于忠信笃敬，念念不忘。”',
    example: '此吾所以感刻于心，而～者也。★清·无名氏《杜诗言志》卷三',
    explanation: '念念时刻思念着。形容牢记于心，时刻不忘。',
    pinyin: 'niàn niàn bù wàng',
    word: '念念不忘',
    abbreviation: 'nnbw',
  },
  {
    derivation:
      '《三国志·蜀书·正传》子虽光丽，既美且绝艳，管窥筐举，守厥所见。”',
    example: '无',
    explanation: '比喻学识浅陋，见闻不广。',
    pinyin: 'guǎn kuī kuāng jǔ',
    word: '管窥筐举',
    abbreviation: 'gkkj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻故意做出一种要行动的姿态。',
    pinyin: 'kāi gōng bù fàng jiàn',
    word: '开弓不放箭',
    abbreviation: 'kgbfj',
  },
  {
    derivation: '《史记·孙子吴起列传》',
    example:
      '倘用～之计，且不来解此处之危，反去取我梁山大寨，如之奈何！★明·施耐庵《水浒全传》第六十四回',
    explanation:
      '原指战国时齐军用围攻魏国的方法，迫使魏国撤回攻赵部队而使赵国得救◇指袭击敌人后方的据点以迫使进攻之敌撤退的战术。',
    pinyin: 'wéi wèi jiù zhào',
    word: '围魏救赵',
    abbreviation: 'wwjz',
  },
  {
    derivation:
      '汉·王符《潜夫论·救边》不一命大将以扫丑虏而州郡稍稍肖役，连连不已。若排糠障风，掏沙壅河。”',
    example: '无',
    explanation: '扬场而障住风，糠皮排去不了。比喻行动跟目的相反。',
    pinyin: 'pái kāng zhàng fēng',
    word: '排糠障风',
    abbreviation: 'pkzf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻卑贱或粗鄙的人。同泥猪疥狗”。',
    pinyin: 'ní zhū lài gǒu',
    word: '泥猪癞狗',
    abbreviation: 'nzlg',
  },
  {
    derivation:
      '宋·秦观《贺孙中丞启》恭惟中丞侍郎，受天间气，为世直儒；力足以扶颠持危，器足以致远任重。”',
    example: '无',
    explanation: '颠倒，倾倒；持握，把握。指能够挽回颠危的局面。',
    pinyin: 'fú diān chí wēi',
    word: '扶颠持危',
    abbreviation: 'fdcw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指性情高傲。',
    pinyin: 'kàng xīn xià qì',
    word: '亢心憍气',
    abbreviation: 'kxxq',
  },
  {
    derivation: '《清朝野史大观》卷九萧然物外，自得天机，吾不如傅青主。”',
    example: '无',
    explanation: '物外自身以外的一切。形容极为超脱，不为俗情杂务所烦扰。',
    pinyin: 'xiāo rán wù wài',
    word: '萧然物外',
    abbreviation: 'xrww',
  },
  {
    derivation: '唐·孟棨《本事诗》载红叶题诗的故事。',
    example: '无',
    explanation: '唐代宫女良缘巧合的故事。比喻姻缘的巧合。',
    pinyin: 'hóng yè tí shī',
    word: '红叶题诗',
    abbreviation: 'hyts',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指遍布天地之间。',
    pinyin: 'màn tiān gài dì',
    word: '漫天盖地',
    abbreviation: 'mtgd',
  },
  {
    derivation:
      '明·袁宏道《由水溪至水心崖记》四面峰峦如花蕊，纤苞浓朵，横见侧出，二十里内，秀蒨阁眉，殆不可状。”',
    example:
      '释氏止因圣人之言平易正直，习之生厌，故更将其理，翻新换异，～，以使人鼓舞不倦耳。★清·周亮工《书影》卷八',
    explanation: '指不自正面而从侧面表露出来。',
    pinyin: 'héng jiàn cè chū',
    word: '横见侧出',
    abbreviation: 'hjcc',
  },
  {
    derivation:
      '《礼记·乐记》所以官序贵贱各得其宜也，所以示后世有尊卑长幼之序也。”',
    example:
      '部队是最讲究～的。一般都是官衔高的首长谦虚地说你们就叫我老某好了，透出官兵一致的亲热。其实谁敢叫他老某呢？★毕淑敏《最后一支西地兰》一',
    explanation: '指辈分大小，地位高低。',
    pinyin: 'zhǎng yòu zūn bēi',
    word: '长幼尊卑',
    abbreviation: 'zyzb',
  },
  {
    derivation:
      '明·冯梦龙《平妖传》众人挨三顶四，簇拥将来，一个个伸出手来，求太医看脉。”',
    example:
      '但见红尘滚滚，车马纷纷，许多商贩客人驮着货物，～的进店安歇。★明·冯梦龙《古今小说》卷五',
    explanation: '形容人多，连接不断。',
    pinyin: 'āi sān dǐng wǔ',
    word: '挨三顶五',
    abbreviation: 'asdw',
  },
  {
    derivation:
      '明·高濂《玉簪记·合庆》京兆府当年指腹，女贞观重会玉簪。慢写出风情月思，画堂前侑酒承欢。”明·杨柔胜《玉环记·韦皋延宾》记当年与那人初见，只指望邮亭一夜姻缘，谁想他风情月思深留恋，安甜静，乐幽闲。”',
    example: '无',
    explanation: '指男女相互爱恋的情思。亦作风情月意”。',
    pinyin: 'fēng qíng yuè sī',
    word: '风情月思',
    abbreviation: 'fqys',
  },
  {
    derivation:
      '《后汉书·袁绍传》袁绍孤客穷军，仰我鼻息，譬如婴儿在股掌之上，绝其哺乳，立可饿杀。”',
    example:
      '百年梦，国势弱，叹蹉跎。～，奴才思想奈天何！★陈毅《水调歌头·四游良口》词',
    explanation:
      '仰依赖；息呼吸时进出的气。依赖别人的呼吸来生活。比喻依赖别人，不能自主。',
    pinyin: 'yǎng rén bí xī',
    word: '仰人鼻息',
    abbreviation: 'yrbx',
  },
  {
    derivation:
      '鲁迅《花边文学·序言》然而他们不经世故，偶尔‘忘其所以’也就大碰其钉子。”',
    example: '无',
    explanation: '经经历；世故人情世事的变故。形容缺乏为人处世的经验。',
    pinyin: 'bù jīng shì gù',
    word: '不经世故',
    abbreviation: 'bjsg',
  },
  {
    derivation: '唐·刘损《愤惋诗》之三莫道诗成无泪下，泪如泉滴亦须干。”',
    example: '无',
    explanation: '形容触动伤心事，眼泪象泉水一样流出。',
    pinyin: 'lèi rú quán dī',
    word: '泪如泉滴',
    abbreviation: 'lrqd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '寒木不凋，春华吐艳。比喻各具特色。',
    pinyin: 'hán mù chūn huá',
    word: '寒木春华',
    abbreviation: 'hmch',
  },
  {
    derivation: '《新唐书·狄仁杰传》狄公之贤，北斗之南，一人而已。”',
    example: '无',
    explanation:
      '斗南北斗星以南。指天下，海内。指天下绝无仅有的人才。形容品德或才识独一无二。',
    pinyin: 'dǒu nán yī rén',
    word: '斗南一人',
    abbreviation: 'dnyr',
  },
  {
    derivation: '唐·宋之问《灵隐寺》诗桂子月中落，天香云外飘。”',
    example: '无',
    explanation: '指中秋前后桂花开放，散发馨香。',
    pinyin: 'guì zǐ piāo xiāng',
    word: '桂子飘香',
    abbreviation: 'gzpx',
  },
  {
    derivation: '语本《论语·季氏》隐居以求其志，行义以达其道。”',
    example: '无',
    explanation:
      '指隐居以保全自己的意志，行义以贯彻自己的主张。是儒家一种理想的人生观。',
    pinyin: 'qiú zhì dá dào',
    word: '求志达道',
    abbreviation: 'qzdd',
  },
  {
    derivation:
      '杜鹏程《在和平的日子里》第一章办公室的床上、桌子上、地上，横三顺四地睡着人。”',
    example: '无',
    explanation: '形容纵横杂乱。',
    pinyin: 'héng sān shùn sì',
    word: '横三顺四',
    abbreviation: 'hsss',
  },
  {
    derivation:
      '《汉书·张敞传》（敞）又为妇画眉，长安中传张京兆眉怃。有司以奏敞。上问之，对曰‘臣闻闺房之内，夫妇之私，有过于画眉者。’”',
    example:
      '奏晋交欢，喜兰闺芳质，玉堂名彦，看瑟调琴弄，～。★明·杨琫《龙膏记·错媾》',
    explanation:
      '画眉指汉张敞为妻画眉毛的故事；举案指汉朝孟光为夫送饭的故事。比喻夫妻互敬互爱。',
    pinyin: 'huà méi jǔ àn',
    word: '画眉举案',
    abbreviation: 'hmja',
  },
  {
    derivation:
      '清·陈忱《水浒后传》第二回看那山势，虽不比梁山广，却也险峻，周围重峦复嶂，只有山前一条大路。”',
    example: '无',
    explanation: '形容山岭重重叠叠，连绵不断。同重峦叠嶂”。',
    pinyin: 'chóng luán fù zhàng',
    word: '重峦复嶂',
    abbreviation: 'clfz',
  },
  {
    derivation: '宋·苏轼《赠潘谷》诗布衫漆黑手如龟，未害冰壶贮秋月。”',
    example: '愿中如～，莹彻无瑕，非吾曹所及。★《宋史·李侗传》',
    explanation: '比喻人品德清白廉洁。',
    pinyin: 'bīng kǔn qiū yuè',
    word: '冰壸秋月',
    abbreviation: 'bkqy',
  },
  {
    derivation:
      '《旧唐书·哥舒翰传》先是，翰数奏禄山虽窃河朔，而不得人心，请持重以弊之，彼自离心，因而翦灭之，可不伤兵擒兹寇矣。”',
    example: '只恨那婆子～，劈手夺了他宝贝去。★清·曾朴《孽海花》第七回',
    explanation: '心心愿，愿望。得不到群众的支持拥护；得不到众人的好评。',
    pinyin: 'bù dé rén xīn',
    word: '不得人心',
    abbreviation: 'bdrx',
  },
  {
    derivation: '华而实《汉衣冠》三施天福坦率地注视郑成功，泰然自若地摇头。”',
    example: '无',
    explanation: '不以为意，神情如常。形容在紧急情况下沉着镇定，不慌不乱。',
    pinyin: 'tài rán zì ruò',
    word: '泰然自若',
    abbreviation: 'trzr',
  },
  {
    derivation:
      '汉·应邵《风俗通》俗说齐人有女，二人求之。东家子丑而富，西家子好而贫。父母疑不能决，问其女，定所欲适。……女便两袒，怪问其故。云‘欲东家食，西家宿。’”',
    example: '～”，廉者当不如是，马亦自笑无以对。★清·蒲松龄《聊斋志异·黄英》',
    explanation: '比喻贪婪的人各方面的好处都要。',
    pinyin: 'dōng shí xī sù',
    word: '东食西宿',
    abbreviation: 'dsxs',
  },
  {
    derivation:
      '《魏书·逸士传·李谧》每曰‘丈夫拥书万卷，何假南面百城。’遂绝迹下帏，杜门却扫，弃产营书，手自删削，卷无重复者四千有余矣。”',
    example: '无',
    explanation: '形容藏书非常丰富。',
    pinyin: 'fù miàn bǎi chéng',
    word: '富面百城',
    abbreviation: 'fmbc',
  },
  {
    derivation:
      '北魏·郦道元《水经注·注水》或王命急宣，有时朝发白帝，暮到江陵。”唐·韩愈《祭鳄鱼文》以生以食，鳄鱼朝发而夕至也。”',
    example: '防边防海，转运枪炮，～。★高阳《清宫外史》上册',
    explanation: '早上出发晚上就能到达。形容路程不远或交通方便。',
    pinyin: 'zhāo fā xī zhì',
    word: '朝发夕至',
    abbreviation: 'zfxz',
  },
  {
    derivation:
      '南朝宋代的谢灵运给曹植下的评语天下文才共一石，而子建独得八斗！” 注一石等于十斗。石，念 dàn 。',
    example: '奉家才子不一般，世盛业旺坐高堂。江山多娇你独秀。～超群芳。',
    explanation: '才文才，才华。形容人学问高，文才好。',
    pinyin: 'cái zhān bā dǒu',
    word: '才占八斗',
    abbreviation: 'czbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容人多拥挤。同骈肩累迹”。',
    pinyin: 'pián jiān jiē jì',
    word: '骈肩接迹',
    abbreviation: 'pjjj',
  },
  {
    derivation: '汉·焦赣《易林·损之井》秦失其鹿，疾走先得。”',
    example: '无',
    explanation: '比喻行动迅速的人首先达到目的。同疾足先得”。',
    pinyin: 'jí zǒu xiān dé',
    word: '疾走先得',
    abbreviation: 'jzxd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指极端错误，毫无根据。',
    pinyin: 'miù wàng wú jī',
    word: '谬妄无稽',
    abbreviation: 'mwwj',
  },
  {
    derivation:
      '清·俞樾《群经平议·周官二》巫马下士二人医四人”凡邦之有疾病者，痟疡者造焉，则使医分而治之，是亦不自医也。”',
    example:
      '维护国与国之间友爱关系，互利与和平事业，反对民族奴役，反对～的策略。★宋庆龄《人民团结起来是不可战胜的》',
    explanation:
      '①分别治理。②利用手段使国家、民族或宗教等产生分裂，然后对其进行控制和统治。',
    pinyin: 'fēn ér zhì zhī',
    word: '分而治之',
    abbreviation: 'fezz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容山峦重迭。',
    pinyin: 'qiān fēng bǎi zhàng',
    word: '千峰百嶂',
    abbreviation: 'qfbz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容贵人相貌不同寻常。',
    pinyin: 'lóng méi fèng mù',
    word: '龙眉凤目',
    abbreviation: 'lmfm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '振奋精神，尽力设法治好国家。',
    pinyin: 'lì jīng qiú zhì',
    word: '励精求治',
    abbreviation: 'ljqz',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第11回既作绿林大盗，便与那偷猫盗狗的不同。”',
    example: '无',
    explanation: '指聚集山林的强盗。',
    pinyin: 'lù lín dà dào',
    word: '绿林大盗',
    abbreviation: 'lldd',
  },
  {
    derivation:
      '宋·吴自牧《梦梁录·山川神》每岁海潮太溢，冲激州城，春秋醮祭，诏命学士院，撰青词以祈国泰民安。”',
    example: '百姓每家家庆，庆道是～，法正官清。★元·宫大用《垂钓七里滩》第三折',
    explanation: '泰平安，安定。国家太平，人民安乐。',
    pinyin: 'mín ān guó tài',
    word: '民安国泰',
    abbreviation: 'magt',
  },
  {
    derivation: '清·洪昻《长生殿·合围》抵多少雷轰电转，可正是海沸河翻。”',
    example: '无',
    explanation: '比喻声势或力量极大。同海沸江翻”。',
    pinyin: 'hǎi fèi hé fān',
    word: '海沸河翻',
    abbreviation: 'hfhf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '费尽心思，万分忧虑。',
    pinyin: 'jiāo xīn rè zhōng',
    word: '焦心热中',
    abbreviation: 'jxrz',
  },
  {
    derivation: '《旧唐书·李藩传》伏望陛下每以汉文孔子之意为准，则百福具臻。”',
    example: '无',
    explanation: '形容各种福运一齐来到。',
    pinyin: 'bǎi fú jù zhēn',
    word: '百福具臻',
    abbreviation: 'bfjz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言冬去春来。指时光的流逝。',
    pinyin: 'shuāng diāo xià lǜ',
    word: '霜凋夏绿',
    abbreviation: 'sdxl',
  },
  {
    derivation:
      '汉·杨雄《法言·渊骞》离（要离）也，火妻灰子，以求反于庆忌，实蛛蝥之劘也，焉可谓之义也？”李轨注离，山平人，而焚烧妻子，诈为吴雠，求信于庆忌，反而刺之。”',
    example: '无',
    explanation: '焚妻灭子。指毁弃家室。',
    pinyin: 'huǒ qī huī zǐ',
    word: '火妻灰子',
    abbreviation: 'hqhz',
  },
  {
    derivation:
      '《晏子春秋·内篇问上》夫社，束木而涂之，鼠因而托焉，薰之则恐烧其木，灌之则恐败其涂。此鼠所以不可得杀者，以社故也。”《晋书·谢鲲传》隗诚始祸，然城狐社鼠也。”',
    example:
      '以事论，则现在的教育界中实无豺虎，但有些～之流，那是当然不能免的。★鲁迅《华盖集·公理”的把戏》',
    explanation:
      '社土地庙。城墙上的狐狸，社庙里的老鼠。比喻依仗权势作恶，一时难以驱除的小人。',
    pinyin: 'chéng hú shè shǔ',
    word: '城狐社鼠',
    abbreviation: 'chss',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指心境十分悲伤。',
    pinyin: 'qíng qī yì qiē',
    word: '情凄意切',
    abbreviation: 'qqyq',
  },
  {
    derivation:
      '《儿女英雄传》第十八回先生见了那没头没脑辟空而来的十五个大字，正不知从那里开口，才入得进这中庸两个字，只得先看了一遍高头讲章，照着那讲章往下敷衍半日，才得讲完。”',
    example:
      '鬼嗫嚅良久曰‘昨过君塾，君方昼寝。见君胸中～一部。’★清·纪昀《阅微草堂笔记·滦阳消夏录一》',
    explanation:
      '经书正文上端留有较宽空白，刊印讲解文字，这些文字称为高头讲章”◇来泛指这类格式的经书。',
    pinyin: 'gāo tóu jiǎng zhāng',
    word: '高头讲章',
    abbreviation: 'gtjz',
  },
  {
    derivation:
      '《神异经·东荒经》东荒山中有大石室，东王公居焉……恒与一玉女投壶，每投千二百矫，设有入不出者，……矫出而脱悮不接者，天为之笑。”张华注言笑者，天口流火照灼，今天不下雨而有电光是天笑也。”',
    example: '无',
    explanation: '后为闪电不雨之典。',
    pinyin: 'tóu hú diàn xiào',
    word: '投壶电笑',
    abbreviation: 'thdx',
  },
  {
    derivation: '《吕氏春秋·论威》知其不可久处，则知所兔起凫举，死 之地矣。”',
    example: '无',
    explanation: '象兔敢奔跑，象野鸭急飞。比喻行动迅速。',
    pinyin: 'tǔ sǐ fú jǔ',
    word: '兔死凫举',
    abbreviation: 'tsfj',
  },
  {
    derivation: '清·二石生《十洲春语》卷下修月生与文香甚昵，素有啮臂之好。”',
    example: '无',
    explanation: '旧时指男女密约婚嫁之事。',
    pinyin: 'niè bì zhī hǎo',
    word: '啮臂之好',
    abbreviation: 'nbzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指寄托所怀于文词议论。同托之空言”。',
    pinyin: 'tuō yú kōng yán',
    word: '托于空言',
    abbreviation: 'tyky',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指力挽危局。同鲁阳挥戈”。',
    pinyin: 'lǔ gē huí rì',
    word: '鲁戈回日',
    abbreviation: 'lghr',
  },
  {
    derivation:
      '唐·王维《送郑五赴任新都序》牵衣肘见，步雪履穿，获戾由中，是贫非病。”',
    example: '无',
    explanation: '形容人穷困潦倒。',
    pinyin: 'bù xuě lǚ chuān',
    word: '步雪履穿',
    abbreviation: 'bxlc',
  },
  {
    derivation:
      '宋·叶適《司农卿湖广总领詹公墓志铭》已而遍观诸书，博求百家，融会通浃，天文、地理、象数、异书，无不该极。”',
    example: '无',
    explanation: '把各方面的知识和道理融化汇合，得到全面透彻的理解。',
    pinyin: 'róng huì tōng jiā',
    word: '融会通浃',
    abbreviation: 'rhtj',
  },
  {
    derivation: '清·陈确《翠薄山房帖》若一本于公明正大之心，则岂直如此而已。”',
    example:
      '以其磊磊落落之志，出之以～之行为，则其与立宪党之地位，为相对的，而非绝对的。★与之《论中国现在之党派及将来之政党》',
    explanation: '公正无私，光明磊落。',
    pinyin: 'gōng míng zhèng dà',
    word: '公明正大',
    abbreviation: 'gmzd',
  },
  {
    derivation: '《荀子·大略》子夏贫，衣若县鹑。”',
    example: '～走风尘，落魄谁怜此一身？★清·程麟《此中人语·乞丐风流》',
    explanation:
      '鹑鹌鹑鸟；结悬挂连缀。鹌鹑的尾巴短而秃，象打满补丁一样。形容衣服非常破烂。',
    pinyin: 'chún yī bǎi jié',
    word: '鹑衣百结',
    abbreviation: 'cybj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指救助别人，对世事有益。',
    pinyin: 'jì rén lì wù',
    word: '济人利物',
    abbreviation: 'jrlw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不切实际的幻想是不能实现的，只能存在于梦幻之中。',
    pinyin: 'hǎo mèng bù cháng',
    word: '好梦不长',
    abbreviation: 'hmbc',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '重重一层又一层。一层又一层的顾虑。形容顾虑极多，难于放手行事。',
    pinyin: 'gù lǜ chóng chóng',
    word: '顾虑重重',
    abbreviation: 'glcc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指一并被拘禁。',
    pinyin: 'pián shǒu jiù xì',
    word: '骈首就系',
    abbreviation: 'psjx',
  },
  {
    derivation: '《明史·韩文传》击球走马，放鹰逐犬，俳优杂剧，错陈于前。”',
    example:
      '忽一日带了二三百家将，往乡村打围作乐，一路来到一个地方，名为孟家庄。一众人～。★清·钱彩《说岳全传》第三十二回',
    explanation: '指打猎。',
    pinyin: 'fàng yīng zhú quǎn',
    word: '放鹰逐犬',
    abbreviation: 'fyzq',
  },
  {
    derivation:
      '宋·李冠《蝶恋花·佳人》词贴鬓香云双绾绿，柳弱花娇，一点春心足。”',
    example: '无',
    explanation: '形容女子苗条妍美。',
    pinyin: 'liǔ ruò huā jiāo',
    word: '柳弱花娇',
    abbreviation: 'lrhj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '到每家每户；遍及每家每户。',
    pinyin: 'jiā zhì hù dào',
    word: '家至户到',
    abbreviation: 'jzhd',
  },
  {
    derivation:
      '明·李日华《南西厢记·猜诗雪案》你用心拨雨撩云，我好意与你传书递缄。小姐呵，不肯搜自己狂为，待要寻人破绽。”',
    example:
      '妆聋做哑，担惊受怕，无端～，成就了鸾孤凤寡。★明·陈所闻《桂枝香·合欢》曲',
    explanation: '指挑逗、试探对方的情意。泛指调情。',
    pinyin: 'bō yǔ liáo yún',
    word: '拨雨撩云',
    abbreviation: 'byly',
  },
  {
    derivation: '《论语·子罕》有鄙夫问于我，空空如也，我叩其两端而竭焉。”',
    example:
      '多少只眼睛也都向王忠的座位搜寻的时候，却见这个小人儿的座位早已～。★杨沫《青春之歌》第二部第三十八章',
    explanation: '空空诚恳，虚心。原形容诚恳、虚心的样子。现形容一无所有。',
    pinyin: 'kōng kōng rú yě',
    word: '空空如也',
    abbreviation: 'kkry',
  },
  {
    derivation:
      '宋·邵雍《邵氏闻见前录》卷十八公尝问康节曰‘某何如人？’曰‘君实脚踏实地人也。’”',
    example: '他们渐渐丢了那空架子，～向前走去。★朱自清《论书生的酸气》',
    explanation: '脚踏在坚实的土地上。比喻做事踏实，认真。',
    pinyin: 'jiǎo tà shí dì',
    word: '脚踏实地',
    abbreviation: 'jtsd',
  },
  {
    derivation: '《史记·周本纪》民皆歌乐之，颂其德。”',
    example: '保持艰苦奋斗作风，制止～现象。★毛泽东《党委会的工作方法》',
    explanation: '歌、颂颂扬。颂扬功绩和德行。',
    pinyin: 'gē gōng sòng dé',
    word: '歌功颂德',
    abbreviation: 'ggsd',
  },
  {
    derivation:
      '《晋书·陆机传》制曰‘故足远超枚（枚乘）马（司马相如），……百代文宗，一人而已。’”',
    example: '无',
    explanation: '宗被人所效法的人物。在久远的年代里堪为文人楷模的人物。',
    pinyin: 'bǎi dài wén zōng',
    word: '百代文宗',
    abbreviation: 'bdwz',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '匡纠正。逮及，达到。不逮达不到的地方。对于达不到的地方给予纠正或帮助。亦作匡所不逮”。',
    pinyin: 'kuāng qí bù dǎi',
    word: '匡其不逮',
    abbreviation: 'kqbd',
  },
  {
    derivation:
      '宋·黄庭坚《四休导士诗序》粗茶淡饭饱即休，补破遮寒暖即休，三平二满过即休，不贪不妒老即休。”',
    example: '连顿～也吃不饱。★清·李宝嘉《官场现形记》第三十四回',
    explanation: '粗粗糙、简单；淡饭指饭菜简单。形容饮食简单，生活简朴。',
    pinyin: 'cū chá dàn fàn',
    word: '粗茶淡饭',
    abbreviation: 'ccdf',
  },
  {
    derivation:
      '《书·召诰》厥终智藏瘝在。”周秉钧易解纣政不善，贤者藏匿，病民者在位。”',
    example: '无',
    explanation: '指贤人隐遁，病民之臣在位。',
    pinyin: 'zhì cáng guān zài',
    word: '智藏瘝在',
    abbreviation: 'zcgz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指在某一方面略有知识就逞能的人。',
    pinyin: 'fú dì shèng rén',
    word: '伏地圣人',
    abbreviation: 'fdsr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不为人知的德行。',
    pinyin: 'qián dé yǐn xíng',
    word: '潜德隐行',
    abbreviation: 'qdyx',
  },
  {
    derivation:
      '元·王子一《误入桃源》第二折光闪闪贝阙珠宫，齐臻臻碧瓦朱甍，宽绰绰罗帏绣成栊，郁巍巍画梁雕栋。”',
    example:
      '正面五间上房，皆是～，两边穿山游廊厢房，挂着各色鹉画眉等雀儿。★清·曹雪芹《红楼梦》第三回',
    explanation: '指有彩绘装饰的十分华丽的房屋。',
    pinyin: 'diāo liáng huà dòng',
    word: '雕梁画栋',
    abbreviation: 'dlhd',
  },
  {
    derivation:
      '清·吴趼人《痛史》第六回他却少陪也不说一声，就此溜之乎也去了。”',
    example: '三荷包见此光景，搭讪着就～。★清·李宝嘉《官场现形记》第五回',
    explanation: '溜走（讽刺的、风趣的说法）。',
    pinyin: 'liū zhī hū yě',
    word: '溜之乎也',
    abbreviation: 'lzhy',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》第二卷那田氏比先前二妻，更有姿色。肌肤若冰雪，绰约似神仙。庄生不是好色之徒，却也十分相敬，真个如鱼似水。”',
    example: '无',
    explanation: '比喻关系融洽、亲密。',
    pinyin: 'rú yú sì shuǐ',
    word: '如鱼似水',
    abbreviation: 'ryss',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容冒着生命危险。',
    pinyin: 'rù sǐ chū shēng',
    word: '入死出生',
    abbreviation: 'rscs',
  },
  {
    derivation:
      '清·平步青《霞外捃屑》卷四使白太夫人，谓欲礼佛行也者，迎抵会城卒岁，无功为亲者讳，故隐约其辞不尽也。”',
    example: '无',
    explanation: '隐约不明显，不清楚。形容说话躲躲闪闪，使人不易完全明白。',
    pinyin: 'yǐn yuē qí cí',
    word: '隐约其辞',
    abbreviation: 'yyqc',
  },
  {
    derivation:
      '宋·释普济《五灯会元》卷十一僧问慧然‘如何是祖师西来意？’曰‘臭肉来蝇。’”',
    example: '无',
    explanation:
      '腐臭的肉招来苍蝇。比喻自己的思想作风有问题，就会招致坏人的引诱。',
    pinyin: 'chòu ròu lái yíng',
    word: '臭肉来蝇',
    abbreviation: 'crly',
  },
  {
    derivation:
      '明·兰陵笑笑生《金瓶梅词话》第五十七回你又发起善念，广结良缘，岂不是俺一家的福份。”',
    example: '无',
    explanation: '多做善事，以得到众人的赞赏。',
    pinyin: 'guǎng jié liáng yuán',
    word: '广结良缘',
    abbreviation: 'gjly',
  },
  {
    derivation:
      '宋·释普济《五灯会元·漳州保福院从展禅师》有人赞叹此事如虎戴角；有人轻毁此事分文不值。”',
    example: '这个东西～。',
    explanation: '形容毫无价值。',
    pinyin: 'fēn wén bù zhí',
    word: '分文不值',
    abbreviation: 'fwbz',
  },
  {
    derivation:
      '《清史稿·刘韵珂传》洋人在粤，曾经就抚，迨给银后，滋扰不休，反覆性成，前车可鉴。”',
    example: '有时句法也大约受些影响，而且～。★鲁迅《二心集·译本序五》',
    explanation: '鉴引申为教训。指用前人的失败作为教训。',
    pinyin: 'qián chē kě jiàn',
    word: '前车可鉴',
    abbreviation: 'qckj',
  },
  {
    derivation: '《孟子·梁惠王上》以若所为，求若所欲，犹缘木而求鱼也。”',
    example:
      '若想善出此关，大王乃～，非徒无益，而又害之也。★明·许仲琳《封神演义》第三十三回',
    explanation:
      '缘木爬树。爬到树上去找鱼。比喻方向或办法不对头，不可能达到目的。',
    pinyin: 'yuán mù qiú yú',
    word: '缘木求鱼',
    abbreviation: 'ymqy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指一年到头。',
    pinyin: 'wú dōng lì xià',
    word: '无冬历夏',
    abbreviation: 'wdlx',
  },
  {
    derivation: '汉·崔瑗《座佑铭》无道人之短，无说己之长。”',
    example:
      '她的性格有一面很像我的一个妹妹，就是心直口快，对什么都没有顾忌，也不怕别人～。★巴金《谈〈秋〉》',
    explanation: '说长处，讲短处。形容议论别人的好坏是非。',
    pinyin: 'shuō cháng lùn duǎn',
    word: '说长论短',
    abbreviation: 'scld',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指帝王后裔。',
    pinyin: 'lóng chú fèng zhǒng',
    word: '龙雏凤种',
    abbreviation: 'lcfz',
  },
  {
    derivation:
      '《白雪遗音·八角鼓·才郎夜读书》发悬梁，锥刺股；如囊萤，雪当烛。必不叫尔自辛苦。到后来，才得这万里鹏程，青云独步。”',
    example: '无',
    explanation: '比喻人的地位或学问无与伦比。',
    pinyin: 'qīng yún dú bù',
    word: '青云独步',
    abbreviation: 'qydb',
  },
  {
    derivation:
      '章炳麟《訄书·平等难》揉曲木者，不得不过其直，恣言至其极，则以为鷇卵毛鳞，皆有佛性，其冥极亦与人等。此特其左证之义，觊以齐一四类，而闳侈不经，以至于滥，有牛鼎之意焉。”',
    example: '无',
    explanation: '指不着边际，不合常理；近乎荒诞，没有根据。同闳大不经”。',
    pinyin: 'hóng chǐ bù jīng',
    word: '闳侈不经',
    abbreviation: 'hcbj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '收集离散者。同收离纠散”。',
    pinyin: 'shōu lí jù sàn',
    word: '收离聚散',
    abbreviation: 'sljs',
  },
  {
    derivation:
      '《国语·楚语上》赖君用之也，故言。不然，巴浦之犀犛兕象，其可尽乎！其又以规为瑱也。”',
    example: '无',
    explanation:
      '规规劝；瑱古人冠冕上垂在两侧以塞耳的玉。把规劝的话当作塞耳的瑱。比喻不听别人的规劝。',
    pinyin: 'yǐ guī wéi tiàn',
    word: '以规为瑱',
    abbreviation: 'ygwt',
  },
  {
    derivation: '宋·王安石《祭欧阳文忠文》呜呼！盛衰兴废之理，自古如此。”',
    example: '人都会有～的时候，犹如生老病死一样。',
    explanation: '盛兴盛；衰衰败；兴兴旺；废废弃。指人与事变化发展的各种情况。',
    pinyin: 'shèng shuāi xīng fèi',
    word: '盛衰兴废',
    abbreviation: 'ssxf',
  },
  {
    derivation:
      '明·张凤翼《红拂记·掷家图国》为郎才女姿，非是云邀雨期，这情踪傍人怎知？”',
    example: '无',
    explanation: '形容男女双方很相配。同郎才女貌”。',
    pinyin: 'láng cái nǚ zī',
    word: '郎才女姿',
    abbreviation: 'lcnz',
  },
  {
    derivation:
      '清·袁枚《随园诗话》卷一人称才大者，如万里黄河，与泥沙俱下。余以为，此粗才，非大才也。”',
    example: '无',
    explanation:
      '指在江河的急流中泥土和沙子随着水一起冲下。比喻好人和坏人混杂在一起。',
    pinyin: 'ní shā jù xià',
    word: '泥沙俱下',
    abbreviation: 'nsjx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹尤云殢雨。比喻缠绵于男女欢爱。',
    pinyin: 'yóu yún tì xuě',
    word: '尤云殢雪',
    abbreviation: 'yytx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指无法可施。同无计奈何”。',
    pinyin: 'wú jì suǒ nài',
    word: '无计所奈',
    abbreviation: 'wjsn',
  },
  {
    derivation:
      '宋·朱熹《朱子语类》卷三十七如道之正体，却一定于此，而随事制宜，自莫不当。”',
    example: '无',
    explanation: '根据事实，采取适当措施。',
    pinyin: 'suí shì zhì yí',
    word: '随事制宜',
    abbreviation: 'sszy',
  },
  {
    derivation:
      '《旧唐书·苏味道传》处事不欲决断明白，若有错误，必贻咎谴，但模棱以持两端可矣。”',
    example:
      '他害怕事情一旦变化，他将有不测大祸，所以跪在地上回答了一句～的话。（姚雪垠《李自成》第二卷第三十章）',
    explanation:
      '模棱含糊，不明确；两可可以这样，也可以那样。指不表示明确的态度，或没有明确的主张。',
    pinyin: 'mó léng liǎng kě',
    word: '模棱两可',
    abbreviation: 'mllk',
  },
  {
    derivation:
      '明·凌濛初《二刻拍案惊奇》第19卷只因财利迷心，身家念重，时时防贼发火起，自然梦魂颠倒。”',
    example: '合上眼还只～，满口胡话，惊怖异常。★清·曹雪芹《红楼梦》第12回',
    explanation: '比喻心神恍惚，失去常态。',
    pinyin: 'mèng hún diān dǎo',
    word: '梦魂颠倒',
    abbreviation: 'mhdd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容迫切的心情或要求。同如饥如渴”。',
    pinyin: 'rú kě rú jī',
    word: '如渴如饥',
    abbreviation: 'rkrj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容惊恐万状。',
    pinyin: 'hún shè sè jǔ',
    word: '魂慴色沮',
    abbreviation: 'hssj',
  },
  {
    derivation:
      '清·陈廷焯《白雨斋词话》第五卷余于别集中求其措语无害大雅者择录一二，非赏其工也，聊备一格而已。”',
    example:
      '但是以为谈论文艺，思想、生活问题应该大谈特谈，谈技巧则只宜‘～’，否则就有些不妙。★秦牧《跋》',
    explanation: '姑且备为一种风格或格式。',
    pinyin: 'liáo bèi yī gé',
    word: '聊备一格',
    abbreviation: 'lbyg',
  },
  {
    derivation:
      '语出《韩非子·亡徵》缓心面无成，柔茹而寡断，好恶无决，而无所定立者，可亡也。”茹，通懦”。',
    example:
      '[边镐]及冠翘秀……后嗣主爱其博雅，累用之，然而～，惟好释氏。★宋·文莹《玉壶清话》',
    explanation: '指软弱面不果断。',
    pinyin: 'róu nuò guǎ duàn',
    word: '柔懦寡断',
    abbreviation: 'rngd',
  },
  {
    derivation: '《淮南子·诠言训》上下一心，君臣同志。”',
    example: '无',
    explanation: '上上下下一条心。',
    pinyin: 'shàng xià yī xīn',
    word: '上下一心',
    abbreviation: 'sxyx',
  },
  {
    derivation: '战国楚·屈原《九章·抽思》心郁郁之忧思兮，独永叹乎增伤。”',
    example:
      '在她给余永泽和王晓燕的信中充满了悲天悯人和～的情绪。★杨沫《青春之歌》第一部第六章',
    explanation: '郁郁发愁的样子；寡少。形容心里苦闷。指闷闷不乐。',
    pinyin: 'yù yù guǎ huān',
    word: '郁郁寡欢',
    abbreviation: 'yygh',
  },
  {
    derivation:
      '语出《东观汉记·光武帝纪》帝闻之，下诏让吴汉副将刘禹曰‘城降，婴儿老母，口以万数，一旦放兵纵火，闻之可谓酸鼻。家有敝帚，享之千金。禹宗室子孙，故尝更职，何忍行此！”',
    example:
      '里语曰‘家有弊帚，享之千金。’斯不自见之患也。★三国·魏·曹丕《典论·论文》',
    explanation:
      '对自家的破旧扫帚，也看成价值千金。比喻对己物的珍视。弊，一本作敝”。',
    pinyin: 'bì zhǒu qiān jīn',
    word: '弊帚千金',
    abbreviation: 'bzqj',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第十六回别讲银子成了黄土，凭是世上有的，没有不堆山积海的。”',
    example: '无',
    explanation: '堆积的如山似海。原形容占有的财富非常多。也比喻东西极多。',
    pinyin: 'duī shān jī hǎi',
    word: '堆山积海',
    abbreviation: 'dsjh',
  },
  {
    derivation:
      '元·无名氏《争报恩》第二折尽着他放荡形骸，我可也万千事，不折证。”',
    example: '彼～者，安得如此肉锅子以锔之哉！★清·和邦额《夜谭随录·锔人》',
    explanation: '行为放纵，不拘礼节。',
    pinyin: 'fàng dàng xíng hái',
    word: '放荡形骸',
    abbreviation: 'fdxh',
  },
  {
    derivation: '《晋书·阮种传》臣诚蒙昧，所以为罪。”',
    example:
      '那些将马克思列宁主义当宗教教条看待的人，就是这种～的人。（毛泽东《整顿党的作风》）',
    explanation: '蒙昧知识未开。没有知识，不明事理。指糊涂不懂事理。',
    pinyin: 'méng mèi wú zhī',
    word: '蒙昧无知',
    abbreviation: 'mmwz',
  },
  {
    derivation:
      '《东观汉记·公孙术传》蜀地沃野千里，土壤膏腴……所谓用天因地，成功之资也。”',
    example: '无',
    explanation: '利用天时，顺应地利。',
    pinyin: 'yòng tiān yīn dì',
    word: '用天因地',
    abbreviation: 'ytyd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻安定稳固。',
    pinyin: 'tài shān pán shí',
    word: '泰山磐石',
    abbreviation: 'tsps',
  },
  {
    derivation:
      '《史记·张释之冯唐列传》夫士卒尽家人子，起田中从军，安知尺籍伍符。”司马贞索隐尺籍者，谓书其斩首之功于一尺之板。伍符者，命军人伍伍相保，不容奸诈。”',
    example:
      '～之必计，而一粒一锾之不遗。★清·钱谦益《兵部职方清吏司主事王弘祖授承德郎制》',
    explanation: '指记载军令、军功的簿籍和军士中各伍互相作保的守则。',
    pinyin: 'chǐ jí wǔ fú',
    word: '尺籍伍符',
    abbreviation: 'cjwf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不倚外力而自然有所成就。同无为而成”。',
    pinyin: 'wú wéi zì chéng',
    word: '无为自成',
    abbreviation: 'wwzc',
  },
  {
    derivation:
      '清·黄宗羲《余恭人传》柴天改玉之交，皇风未畅，鼎族阽危，谣言沸火。”',
    example: '无',
    explanation: '指改朝换代。柴天，烧柴祭天；改玉，改换佩玉。',
    pinyin: 'chái tiān gǎi yù',
    word: '柴天改玉',
    abbreviation: 'ctgy',
  },
  {
    derivation: '无',
    example: '雄心壮志是促使一个人永远奋斗的发动机。',
    explanation: '伟大的理想，宏伟的志愿。',
    pinyin: 'xióng xīn zhuàng zhì',
    word: '雄心壮志',
    abbreviation: 'xxzz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '主动承担错误的责任并作自我批评。同引咎自责”。',
    pinyin: 'yǐn jiù zé gōng',
    word: '引咎责躬',
    abbreviation: 'yjzg',
  },
  {
    derivation:
      '宋·洪迈《夷坚三志己》卷二畜生之言何足为信？我已数月来知之矣。见怪不怪，其怪自坏。”',
    example:
      '～，其怪自败。”不用砍他，随他去就是了。★清·曹雪芹《红楼梦》第九十四回',
    explanation:
      '看到怪异的现象不要大惊小怪。指遇到不常见的事物或意外情况，要沉着镇静。',
    pinyin: 'jiàn guài bù guài',
    word: '见怪不怪',
    abbreviation: 'jgbg',
  },
  {
    derivation:
      '宋·陆游《文章》诗文章本天成，妙手偶得之。粹然无疵瑕，岂复须人为。”',
    example: '若不是～，便确是经过锤炼的语言的精华。★茅盾《白杨礼赞》',
    explanation:
      '技术高超的人，偶然间即可得到。也用来形容文学素养很深的人，出于灵感，即可偶然间得到妙语佳作。',
    pinyin: 'miào shǒu ǒu dé',
    word: '妙手偶得',
    abbreviation: 'msod',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指只论职位，不论年龄。',
    pinyin: 'shòu bù yā zhí',
    word: '寿不压职',
    abbreviation: 'sbyz',
  },
  {
    derivation:
      '《战国策·楚策三》楚国之食贵于玉，薪贵于桂，谒者难得见如鬼，王难得见如天帝，今令臣食玉炊桂，因鬼见帝。”',
    example: '无',
    explanation: '食品贵如油，燃料贵如桂。比喻物价昂贵。',
    pinyin: 'shí yù chuī guì',
    word: '食玉炊桂',
    abbreviation: 'sycg',
  },
  {
    derivation:
      '《孟子·滕文公下》昔者禹抑洪水而天下平，周公兼夷狄、驱猛兽而百姓宁。”',
    example:
      '当初革命军来了，以为全是～一般的家伙，原来倒不少我辈中人。★叶圣陶《丁祭》',
    explanation: '猛兽残食人畜的野兽。比喻极大的祸害。',
    pinyin: 'hóng shuǐ měng shòu',
    word: '洪水猛兽',
    abbreviation: 'hsms',
  },
  {
    derivation:
      '《歧路灯》第六七回[杜氏]怒将起来，几乎要打，这张类村只得学刘寄如饱飨老拳的本领。”',
    example: '无',
    explanation: '指挨一顿痛打。参见饱以老拳”。',
    pinyin: 'bǎo xiǎng lào quán',
    word: '饱飨老拳',
    abbreviation: 'bxlq',
  },
  {
    derivation:
      '清·曾朴《孽海花》第三回他脾气越发坏了，不是捶床拍枕，就是咒天骂地。”',
    example: '无',
    explanation: '形容辗转难以入睡。同捶床捣枕”。',
    pinyin: 'chuí chuáng pāi zhěn',
    word: '捶床拍枕',
    abbreviation: 'ccpz',
  },
  {
    derivation: '元·无名氏《碧桃花》第三折他将山盟海誓言，向罗帏锦帐眠。”',
    example: '想当初～，可现在怎么就要分手了？',
    explanation:
      '盟盟约；誓誓言。指男女相爱时立下的誓言，表示爱情要象山和海一样永恒不变。',
    pinyin: 'shān méng hǎi shì',
    word: '山盟海誓',
    abbreviation: 'smhs',
  },
  {
    derivation: '《孟子·告子上》恻隐之心，人皆有之。”',
    example:
      '此人为官清正，作事廉明，每怀～，常有仁慈之念。★明·施耐庵《水浒全传》第十三回',
    explanation: '恻隐对别人的不幸表示同情。形容对人寄予同情。',
    pinyin: 'cè yǐn zhī xīn',
    word: '恻隐之心',
    abbreviation: 'cyzx',
  },
  {
    derivation:
      '宋·无名氏《张协状元》第十二出谢荷公公！张协人非土木，必有报谢之期。”',
    example:
      '[珠蕊小姐]念我双星如此，则言言金玉也。双星～，焉敢不从！★清·无名氏《定情人》十五',
    explanation: '指人是有思想感情的。',
    pinyin: 'rén fēi tǔ mù',
    word: '人非土木',
    abbreviation: 'rftm',
  },
  {
    derivation:
      '宋·周密《武林旧事》此十卷之本，乃从毛氏汲古阁之版传抄。首尾完其，其间遗闻轶事，皆可备考稽。”',
    example: '其他～，皆前代倅臣所录。★清·章炳麟《訄书·哀焚书》',
    explanation: '散失，遗留下来的事迹。',
    pinyin: 'yí wén yì shì',
    word: '遗闻轶事',
    abbreviation: 'ywys',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指精致而好吃的食物。',
    pinyin: 'diāo hān lòu gé',
    word: '雕蚶镂蛤',
    abbreviation: 'dhlg',
  },
  {
    derivation:
      '《宋书·袁粲传》朕以眇疚，未弘政道，囹圄尚繁，枉滞犹积，晨兢夕厉，每恻于怀。”',
    example: '无',
    explanation: '兢，小心谨慎；厉，严格。指终日勤勉谨慎。',
    pinyin: 'chén jīng xī lì',
    word: '晨兢夕厉',
    abbreviation: 'cjxl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹毫发不爽。形容一点不差。',
    pinyin: 'máo fā bù shuǎng',
    word: '毛发不爽',
    abbreviation: 'mfbs',
  },
  {
    derivation: '《梁书·刘之遴传》省所撰《春秋》义，比事论书，辞微旨远。”',
    example: '无',
    explanation:
      '辞文词，言词。微隐蔽，精深。旨意思，目的。言词隐微而表达的意思很深远。',
    pinyin: 'cí wēi zhǐ yuǎn',
    word: '辞微旨远',
    abbreviation: 'cwzy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指风月场中的吃喝之事。',
    pinyin: 'làng jiǔ xián chá',
    word: '浪酒闲茶',
    abbreviation: 'ljxc',
  },
  {
    derivation: '唐·李贺诗《李凭箜篌引》女娲炼石补天处，石破天惊逗秋雨。”',
    example:
      '陈继泰被他们这样的一来，好似那雷霆乍震，～，只吓得个肺腑皆崩，神魂出窍。★清·张春帆《宦海》第十九回',
    explanation:
      '原形容箜篌的声音，忽而高亢，忽而低沉，出人意外，有能以形容的奇境◇多比喻文章议论新奇惊人。',
    pinyin: 'shí pò tiān jīng',
    word: '石破天惊',
    abbreviation: 'sptj',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》卷十七况宗族远离，夫家存亡未卜，随缘快活，亦足了一生矣。”',
    example: '无',
    explanation: '卜猜测，估计。或是活着，或是死了，不能预测。',
    pinyin: 'cún wáng wèi bǔ',
    word: '存亡未卜',
    abbreviation: 'cwwb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '满耳朵满鼻子都是。形容听得烂熟。',
    pinyin: 'ěr mǎn bí mǎn',
    word: '耳满鼻满',
    abbreviation: 'embm',
  },
  {
    derivation:
      '清·李宝嘉《活地狱》第九回或者阳示和好，暗施奸刁的，亦在所难免。”',
    example: '无',
    explanation: '免避免。指由于某种限制而难于避免。',
    pinyin: 'zài suǒ nán miǎn',
    word: '在所难免',
    abbreviation: 'zsnm',
  },
  {
    derivation:
      '马烽《太阳刚刚出山》我熬心费力办农业，结果给组织上留下这么个印象。”',
    example: '无',
    explanation: '耗费心神和气力。',
    pinyin: 'áo xīn fèi lì',
    word: '熬心费力',
    abbreviation: 'axfl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指恰好可以相辅相成。',
    pinyin: 'shì yǐ xiāng chéng',
    word: '适以相成',
    abbreviation: 'syxc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指可以奉为行为准则的教诲之言。',
    pinyin: 'xùn gé zhī yán',
    word: '训格之言',
    abbreviation: 'xgzy',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第三十二回羊质虎皮功不就，凤毛鸡胆事难成。”',
    example: '无',
    explanation: '凤的羽毛，鸡的胆子。比喻外表英武而实际怯弱。',
    pinyin: 'fèng máo jī dǎn',
    word: '凤毛鸡胆',
    abbreviation: 'fmjd',
  },
  {
    derivation:
      '宋·释道原《景德传灯录》卷九长老身材勿量大，笠子太小生。师云‘虽然如此大千世界总在里许。’”',
    example: '～无奇不有，充满了矛盾。',
    explanation:
      '佛教用语，世界的千倍叫小千世界，小千世界的千倍叫中千世界，中千世界的千倍叫大千世界◇指广大无边的人世。',
    pinyin: 'dà qiān shì jiè',
    word: '大千世界',
    abbreviation: 'dqsj',
  },
  {
    derivation:
      '梁启超《中国积弱溯源论》第四节大臣既以身许国，则但当计国民之利害，不当计一身之利害，营私罔利，固不可也。”',
    example: '无',
    explanation: '指谋求私利。',
    pinyin: 'yíng sī wǎng lì',
    word: '营私罔利',
    abbreviation: 'yswl',
  },
  {
    derivation:
      '宋·王谠《唐语林·政事上》岑文本谓人曰‘吾见周论事多矣，援引事类，扬榷古今，举要删芜，会文切理。一字不可加，也不可减。听之靡靡，令人忘倦。”',
    example: '无',
    explanation:
      '要主要部分。芜杂乱。选取重要的，删除杂乱的、没有条理的。多指写文章时应抓住重点。',
    pinyin: 'jǔ yào shān wú',
    word: '举要删芜',
    abbreviation: 'jysw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指体内致命的疾病。比喻严重的隐患。同心腹之疾”。',
    pinyin: 'xīn fù zhī bìng',
    word: '心腹之病',
    abbreviation: 'xfzb',
  },
  {
    derivation:
      '《后汉书·明帝纪赞》显宗不承，业业兢兢。危心恭德，政察奸胜。”《晋书·潘尼传》左辅右弼，前疑后承。一日万机，业业兢兢。”',
    example: '一日万几，崇高益危，早朝晏罢，～。★康有为《大同书》甲部第三章',
    explanation: '犹兢兢业业。小心谨慎、认真负责貌。',
    pinyin: 'yè yè jīng jīng',
    word: '业业兢兢',
    abbreviation: 'yyjj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '即井蛙。',
    pinyin: 'jǐng dǐ xiā má',
    word: '井底虾蟆',
    abbreviation: 'jdxm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '水流汹涌貌。比喻连续不断。',
    pinyin: 'hùn hùn chā kē',
    word: '混混泇泇',
    abbreviation: 'hhck',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容惶恐无主的样子。',
    pinyin: 'sàng dǎn yóu hún',
    word: '丧胆游魂',
    abbreviation: 'sdyh',
  },
  {
    derivation:
      '宋·李昿《太平广记》卷十七引唐·牛僧孺《续玄怪录·裴谌》香风飒来，神清气爽，飘飘然有凌云之意。”',
    example:
      '长揖而坐，～，满坐风生，顾眄炜如也。★宋·张君房《云笈七签》卷一一二',
    explanation: '①形容人神志清爽，心情舒暢。②形容人长得神态清明，气质爽朗。',
    pinyin: 'shén qīng qì shuǎng',
    word: '神清气爽',
    abbreviation: 'sqqs',
  },
  {
    derivation: '唐·韩愈、孟郊《斗鸡联句》一喷一醒然，再接再砺乃。”',
    example: '无',
    explanation:
      '接交战；砺磨砺。原谓鸡再磨嘴，然后再相斗◇用以指继续努力，坚持不懈。',
    pinyin: 'zài jiē zài lì',
    word: '再接再砺',
    abbreviation: 'zjzl',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '穷穷尽、尽头。指某一事物带来的乐趣无穷无尽。亦作其乐无穷”、其乐无涯”。',
    pinyin: 'qí lè bù qióng',
    word: '其乐不穷',
    abbreviation: 'qlbq',
  },
  {
    derivation:
      '元关汉聊《蝴蝶梦》第一折我这里急忙忙过六街三市，行行里挠腮撧耳，抹泪揉眵。”',
    example: '无',
    explanation: '抓搔腮颊，揪扯耳朵。形容慌乱焦急。',
    pinyin: 'náo sāi juē ěr',
    word: '挠腮撧耳',
    abbreviation: 'nsje',
  },
  {
    derivation:
      '《三国志·魏志·鲍勋传》大军还洛阳，曜有罪，勋奏绌遣。而曜密表勋私解邕事。昭曰‘勋指鹿作马，收付廷尉。’”',
    example: '无',
    explanation: '比喻有意颠倒黑白，混淆是非。同指鹿为马”。',
    pinyin: 'zhǐ lù zuò mǎ',
    word: '指鹿作马',
    abbreviation: 'zlzm',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第六十五回无奈二姐儿倒是个多情人，以为贾琏是终身之主了，凡事倒还知疼着热。”',
    example: '无',
    explanation: '形容对人十分关心爱护（多指亲人）。',
    pinyin: 'zhī téng zháo rè',
    word: '知疼着热',
    abbreviation: 'ztzr',
  },
  {
    derivation: '《梁书·范缜传》亦可张甲之情寄王乙之躯，李丙之性托赵丁之体。”',
    example: '无',
    explanation: '泛指一些人。也指寻常之辈。',
    pinyin: 'zhāng wáng zhào lǐ',
    word: '张王赵李',
    abbreviation: 'zwzl',
  },
  {
    derivation:
      '明·许仲林《封神演义》第九十七回那军士见妲己美貌，已自有十分怜惜，再加他娇滴滴，叫了几声将军长，将军短。便把这些军士，叫得骨软筋酥，口呆目瞪，软痴痴作一堆麻，酥酥成一块，莫能动履。”',
    example:
      '林氏却又把凶菜的事情，细细向刘锡彤说了一遍，刘锡彤听得，不禁吓得～。★《杨乃武与凶菜》第三十回',
    explanation: '嘴说不出话，眼发直。形容很吃惊的样子。',
    pinyin: 'kǒu dāi mù dèng',
    word: '口呆目瞪',
    abbreviation: 'kdmd',
  },
  {
    derivation:
      '《三国志·蜀书·先主传》裴松之注引晋·司马彪《九州春秋》备曰‘吾常身不离鞍，髀肉皆消；今不复骑，髀里肉生。’”',
    example: '无',
    explanation:
      '髀大腿。因为长久不骑马，大腿上的肉又长起来了。形容长久过着安逸舒适的生活，无所作为。',
    pinyin: 'bì lǐ ròu shēng',
    word: '髀里肉生',
    abbreviation: 'blrs',
  },
  {
    derivation:
      '《诗经·大雅·荡》人亦有言，颠沛之揭。”《汉书·薛广德传》窃见关东困极，人民流离。”',
    example:
      '我所感到悲哀的，是有几个同我来的学生，至今还找不到学校进，还在～。★鲁迅《而已集·通信》',
    explanation:
      '颠沛跌倒，比喻穷困，受挫折；流离浪落。由于灾荒或战乱而流转离散。形容生活艰难，四处流浪。',
    pinyin: 'diān pèi liú lí',
    word: '颠沛流离',
    abbreviation: 'dpll',
  },
  {
    derivation:
      '鲁迅《坟·摩罗诗力说》上述诸人，其为品性言行思惟，虽以种族有殊，外缘多别，因现种种状，而实统于一宗无不刚健不挠，抱诚守真。”',
    example: '无',
    explanation: '抱存在心里。志在真诚，恪守不违。',
    pinyin: 'bào chéng shǒu zhēn',
    word: '抱诚守真',
    abbreviation: 'bcsz',
  },
  {
    derivation:
      '《醒世姻缘传》第二四回合家俱到那园中石凳上坐下……团头聚面的说说笑笑，或是与儿子讲说些读过的书文，或是与女儿说些什么贤孝的古记。”',
    example: '无',
    explanation: '形容非常亲密地相聚在一起。',
    pinyin: 'tuàn tóu jù miàn',
    word: '团头聚面',
    abbreviation: 'ttjm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言上下班。卯时签到，酉时签退。',
    pinyin: 'shū huà mǎo yǒu',
    word: '书画卯酉',
    abbreviation: 'shmy',
  },
  {
    derivation:
      '《敦煌变文集·伍子胥变文》子胥随帝部卒入城，检纳干戈，酬功给效。”',
    example: '无',
    explanation: '效，呈献，献出（生命者）。指赏赐有功劳者。',
    pinyin: 'chóu gōng gěi xiào',
    word: '酬功给效',
    abbreviation: 'cggx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '财富过于充足会招致祸患。',
    pinyin: 'yíng mǎn zhī jiù',
    word: '盈满之咎',
    abbreviation: 'ymzj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言谈今说古。从今到古无所不谈，无不评论。',
    pinyin: 'pān jīn diào gǔ',
    word: '攀今吊古',
    abbreviation: 'pjdg',
  },
  {
    derivation: '汉·枚乘《七发》皓齿蛾眉，命曰伐性之斧。”',
    example: '无',
    explanation:
      '皓白色的样子；蛾眉女子修长而美丽的眉毛。洁白的牙齿，修美的眉毛。形容女子容貌端庄美丽，也喻称美女。',
    pinyin: 'hào chǐ é méi',
    word: '皓齿蛾眉',
    abbreviation: 'hcem',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第二十六回一般儿大的人，怎么我的赔送就该那等苟简，姐姐有这些人给办妆奁还嫌长道短？这话怎么讲？”',
    example: '无',
    explanation: '犹苛求责备。',
    pinyin: 'xián cháng dào duǎn',
    word: '嫌长道短',
    abbreviation: 'xcdd',
  },
  {
    derivation:
      '《左传·宣公十五年》谚曰‘高下在心，川泽纳污，山薮藏疾，瑾瑜匿瑕。’国君含垢，天之道也。”',
    example:
      '大概是明末的王思任说的罢会稽乃报仇雪耻之乡，非～之地。”★鲁迅《且介亭杂文附集·女吊》',
    explanation: '垢、污肮脏的东西。包藏容纳肮脏之物。比喻隐藏或包容坏人坏事。',
    pinyin: 'cáng gòu nà wū',
    word: '藏垢纳污',
    abbreviation: 'cgnw',
  },
  {
    derivation: '唐·韩愈《黄家贼事宜状》本无运虑深谋，意在邀功求赏。”',
    example: '州北乡团练不～，如此役也。★王闿运《桂阳陈侍郎行状》',
    explanation: '求取功劳和奖赏。',
    pinyin: 'yāo gōng qiú shǎng',
    word: '邀功求赏',
    abbreviation: 'ygqs',
  },
  {
    derivation: '《庄子·逍遥游》抟扶摇而上九万里。”',
    example: '无',
    explanation: '扶摇急剧盘旋而上的暴风。暴风从下而上盘旋很高，风势急且大。',
    pinyin: 'fú yáo wàn lǐ',
    word: '扶摇万里',
    abbreviation: 'fywl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '①代指四时景色。②比喻男女情事。',
    pinyin: 'xuě yuè fēng huā',
    word: '雪月风花',
    abbreviation: 'xyfh',
  },
  {
    derivation:
      '《新唐书·郭子仪传赞》子仪自朔方提孤军，转战逐北，谊不还顾……虽唐命方永，亦有忠贯日月，神明扶持者哉！”',
    example:
      '功盖天地，～，进则毅然身任天下之重，退则怡然了无愠戚之容，求之于古，其伊周之亚与？★宋·刘炎《迩言》',
    explanation: '忠诚之心可以贯通日月。形容忠诚至极。',
    pinyin: 'zhōng guàn rì yuè',
    word: '忠贯日月',
    abbreviation: 'zgry',
  },
  {
    derivation:
      '唐·张固《幽闲鼓吹》白尚书应举，初至京，以诗谒著作顾况，顾睹姓名，熟视白公曰‘米价方贵，居亦弗易。’”',
    example:
      '我虽不惮荒凉，但若购买食物，须奔波数里，则亦～耳。★《鲁讯书信集·致许寿裳》',
    explanation:
      '本为唐代诗人顾况以白居易的名字开玩笑◇比喻居住在大城市，生活不容易维持。',
    pinyin: 'jū dà bù yì',
    word: '居大不易',
    abbreviation: 'jdby',
  },
  {
    derivation:
      '《后汉书·应奉传》李贤注引谢承《后汉书》造车匠于内开扇出半面视奉，奉即委去◇数十年于路见车匠，识而呼之。”《北齐书·杨愔传》其聪记强识，半面不忘。”',
    example: '无',
    explanation: '见过面就不遗忘。形容记忆力极强。',
    pinyin: 'bàn miàn bù wàng',
    word: '半面不忘',
    abbreviation: 'bmbw',
  },
  {
    derivation:
      '唐·韩愈《送石处士序》若驷马驾轻车就熟路，而王良、造父为之先后也。”',
    example: '逸气轩眉宇，似王良～，骅骝欲舞。★宋·辛弃疾《贺新郎》词',
    explanation: '赶着装载很轻的车子走熟悉的路。比喻事情又熟悉又容易。',
    pinyin: 'qīng chē shú lù',
    word: '轻车熟路',
    abbreviation: 'qcsl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容社会安宁，风气良好。',
    pinyin: 'mén bù yè guān',
    word: '门不夜关',
    abbreviation: 'mbyg',
  },
  {
    derivation:
      '《晋书·乐广传》广善清言而不长于笔，将让尹，请潘岳为表。岳曰‘当得君意。’广乃作二百句语，述己之志。岳因取次比，便成名笔。时人咸云‘若广不假岳之笔，岳不取广之旨，无以成斯美也。’”',
    example: '雅擅～，妙参羊体嵇心。★清·吴伟业《偶成》诗之八',
    explanation: '指美好文章的文辞与意旨。',
    pinyin: 'pān wén lè zhǐ',
    word: '潘文乐旨',
    abbreviation: 'pwlz',
  },
  {
    derivation:
      '元·无名氏《马陵道》第三折你自慢慢的从大路上行，我便落慌而走。”明·罗贯中《三国演义》三十一回玄德见势危，落荒而走。”',
    example:
      '兽马争持，剑戟并举。未及数合，子牙便走，不进城，落荒而逃。殷洪见子牙～，急忙赶来。★明·许仲琳《封神演义》六十一回',
    explanation: '指离开战场，向荒野逃命。形容战败逃命。',
    pinyin: 'luò huāng ér zǒu',
    word: '落荒而走',
    abbreviation: 'lhez',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻趁着有利的情势行事。同顺风使帆”。',
    pinyin: 'shùn fēng zhāng fān',
    word: '顺风张帆',
    abbreviation: 'sfzf',
  },
  {
    derivation: '参见冯髈弹铗”。',
    example: '张掾秋风频怅望，～未归来。★清·钱芳标《击鲜行》',
    explanation: '指怀才不遇或有才华的人希望得到恩遇。',
    pinyin: 'féng shēng dàn jiá',
    word: '冯生弹铗',
    abbreviation: 'fsdj',
  },
  {
    derivation: '《清史稿·高宗纪五》刘宗周、黄道周立朝守正，熊廷弼材优干济。”',
    example: '无',
    explanation: '指才能优异，有干练的办事能力。',
    pinyin: 'cái yōu gàn jǐ',
    word: '材优干济',
    abbreviation: 'cygj',
  },
  {
    derivation:
      '《魏书·宗室晖传》侍中卢昶，亦蒙恩眄，故时人号曰‘饿虎将军，饥鹰侍中。’”',
    example: '无',
    explanation: '比喻凶残贪婪。',
    pinyin: 'jī yīng è hǔ',
    word: '饥鹰饿虎',
    abbreviation: 'jyeh',
  },
  {
    derivation: '金·侯善渊《杨柳枝·乷岁飘蓬住远山》词换骨脱胎归旧路，返童颜。”',
    example: '无',
    explanation:
      '原为道教用语。指修道者得道以后，就转凡胎为圣胎，换凡骨为仙骨。现比喻通过教育，思想得到彻底改造。',
    pinyin: 'huàn gǔ tuō tāi',
    word: '换骨脱胎',
    abbreviation: 'hgtt',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言·陈御史巧勘金钗钿》又且他家差老园公请你，有凭有据，须不是你自轻自贱。”',
    example:
      '那色鬼又未曾目睹其间，听他们说得～，便也以讹缠讹，信以为实。★清·张南庄《何典》第八回',
    explanation: '既有凭证，又有依据。',
    pinyin: 'yǒu píng yǒu jù',
    word: '有凭有据',
    abbreviation: 'ypyj',
  },
  {
    derivation: '无',
    example: '长辈们的谆谆教导，晚辈们当耳听心受。',
    explanation: '用耳朵听，并记在心里。',
    pinyin: 'ěr tīng xīn shòu',
    word: '耳听心受',
    abbreviation: 'etxs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指牛与千里马同槽而食。比喻贤愚不分。亦作牛骥同槽”。',
    pinyin: 'niú jì tóng wěn',
    word: '牛骥同皁',
    abbreviation: 'njtw',
  },
  {
    derivation:
      '《诗·小雅·十月之交》高岸为谷，深谷为陵。”毛传言易位也。”郑玄笺易位者，君子居下小人处上之谓也。”',
    example: '属当岸谷之变，门户衰微，无能光其大业。★清顾炎武《贞烈堂记》',
    explanation: '比喻政治上的重大变化。',
    pinyin: 'àn gǔ zhī bìan',
    word: '岸谷之变',
    abbreviation: 'agzb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '审谨慎。申明法令，使人人遵守，谨慎发布命令，避免出现差错。',
    pinyin: 'míng fǎ shěn lìng',
    word: '明法审令',
    abbreviation: 'mfsl',
  },
  {
    derivation:
      '明·张居正《答总统凌洋山言边地种树设险书》昔谢病山居，手植榆柳，今已郁然参天。若以官法为之，积岁累月，竟成虚谬矣。”',
    example: '无',
    explanation: '指经过的时间长。同积年累月”。',
    pinyin: 'jī suì lěi yuè',
    word: '积岁累月',
    abbreviation: 'jsly',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻忠于职守，廉洁奉公。同洗手奉职”。',
    pinyin: 'xǐ shǒu fèng gōng',
    word: '洗手奉公',
    abbreviation: 'xsfg',
  },
  {
    derivation: '《论语·子罕》沽之哉！沽之哉！，我待贾者也。”',
    example:
      '象中世纪骑士那样站在虹的桥上，高揭着什么怪好听的旗号，而实在只是出风头，或竟是～。★茅盾《虹》一',
    explanation: '沽卖。等有好价钱才卖。比喻谁给好的待遇就替谁工作。',
    pinyin: 'dài jià ér gū',
    word: '待价而沽',
    abbreviation: 'djeg',
  },
  {
    derivation: '《尚书·胤征》火焱昆岗，玉石俱焚。”',
    example: '内无良将，外无救兵，若然攻破，～。★清·陈忱《水浒后传》第十二回',
    explanation: '俱全，都；焚烧。美玉和石头一样烧坏。比喻好坏不分，同归于尽。',
    pinyin: 'yù shí jù fén',
    word: '玉石俱焚',
    abbreviation: 'ysjf',
  },
  {
    derivation: '《战国策·燕策一》冯几据杖，眄视指使，则厮役之人至。”',
    example: '无',
    explanation: '形容傲慢不以礼待客。',
    pinyin: 'píng jī jù zhàng',
    word: '凭几据杖',
    abbreviation: 'pjjz',
  },
  {
    derivation: '清·和邦额《夜谭随录·修鳞》流言飞语，何足凭信。”',
    example: '无',
    explanation: '毫无根据的话。指背后散布的诽谤性的坏话。同流言蜚语”。',
    pinyin: 'liú yán fēi yǔ',
    word: '流言飞语',
    abbreviation: 'lyfy',
  },
  {
    derivation:
      '语本《左传·僖公九年》天威不违颜咫尺。原谓天鉴察不远，威严如常在面前。”',
    example: '～，瞻仰尤为亲切。★清·陈康祺《郎潜纪闻》卷一',
    explanation: '比喻离天子容颜极近。亦指天子之颜。',
    pinyin: 'zhǐ chǐ tiān yán',
    word: '咫尺天颜',
    abbreviation: 'zcty',
  },
  {
    derivation:
      '《战国策·赵策三》秦之攻我也，不遗余力矣，必以倦而归也。”《史记·平原君虞卿列传》秦不遗余力矣，必且欲破赵军。”',
    example:
      '委员和事，调停惟赖孔方；绅士责言，控诉～。★清·李宝嘉《文明小史》第四回',
    explanation: '遗留；余力剩下的力量。把全部力量都使出来，一点不保留。',
    pinyin: 'bù yí yú lì',
    word: '不遗余力',
    abbreviation: 'byyl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻没有功效的做法。',
    pinyin: 'shǔ xué xún yáng',
    word: '鼠穴寻羊',
    abbreviation: 'sxxy',
  },
  {
    derivation: '唐·李华《吊古战场文》汉倾天下，财殚力痡。”',
    example:
      '鏖斗历四五年，肝脑涂地，～。★蔡东藩、许廑父《民国通俗演义》第四十四回尾注',
    explanation: '殚竭尽；痡过度疲劳。钱财枯竭，民力疲困。',
    pinyin: 'cái dān lì pū',
    word: '财殚力痡',
    abbreviation: 'cdlp',
  },
  {
    derivation: '无',
    example: '他是个～的人，对名利得失看得很淡薄。',
    explanation: '经历过很多艰苦的日子。',
    pinyin: 'jiǔ lì fēng chén',
    word: '久历风尘',
    abbreviation: 'jlfc',
  },
  {
    derivation:
      '元·关汉卿《青杏子·离情》曲常言道好事天悭。美姻缘他娘间阻，生拆散鸾交凤友。”',
    example: '无',
    explanation: '犹言好事多磨。',
    pinyin: 'hǎo shì tiān qiān',
    word: '好事天悭',
    abbreviation: 'hstq',
  },
  {
    derivation:
      '《三国志·吴志·陆瑁传》至于中夏鼎沸，九域槃亘之时，率须深根固本，爱力惜费。” 《晋书·文苑传·伏滔》令之有渐，轨之有度，宠之有节，权不外授，威不下黩，所以杜其萌际，深根固本，传之百世。”',
    example:
      '天元实无积德；视其相貌，寿亦不长。又，诸籵微弱，各令就国，曾无～之计。★宋·司马光《资治通鉴》卷第一百七十三',
    explanation: '使根基深固而不可动摇。同深根固柢”。',
    pinyin: 'shēn gēn gù běn',
    word: '深根固本',
    abbreviation: 'sggb',
  },
  {
    derivation:
      '《红楼梦》五五回幸而平姐姐在这里，没得臊一鼻子灰，趁早知会他们去。”',
    example: '无',
    explanation: '比喻碰壁或受斥责。',
    pinyin: 'yī bí zǐ huī',
    word: '一鼻子灰',
    abbreviation: 'ybzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻彼此经济上没有往来。旧时指官吏清廉。同水米无干”。',
    pinyin: 'shuǐ cài bù jiāo',
    word: '水菜不交',
    abbreviation: 'scbj',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '指显贵。银，银印；紫，紫绶『制，相国、丞相、太尉、公侯皆紫绶；秩二千石皆银印。',
    pinyin: 'huái yín yū zǐ',
    word: '怀银纡紫',
    abbreviation: 'hyyz',
  },
  {
    derivation:
      '宋·洪迈《夷坚三志己善谑诗词》……御史论其白衣吃菜，遂赋《鹊桥仙》词云‘远公莲社，流传图画，千古声名犹在◇人多少继遗踪，到我便失惊打怪。’”',
    example: '空着我便耳热眼跳，心神恍忽，～。★元·刘庭信《新水令·春恨》套曲',
    explanation: '①形容大惊小怪。②形容神色慌张或动作忙乱。',
    pinyin: 'shī jīng dǎ guài',
    word: '失惊打怪',
    abbreviation: 'sjdg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻没有实际用处的东西。',
    pinyin: 'ní chē wǎ mǎ',
    word: '泥车瓦马',
    abbreviation: 'ncwm',
  },
  {
    derivation: '明·王錂《春芜记·反目》天网恢恢真可信，须知祸福由人。”',
    example: '无',
    explanation: '是祸是福均取决于人自身的所作所为。同祸福惟人”。',
    pinyin: 'huò fú yóu rén',
    word: '祸福由人',
    abbreviation: 'hfyr',
  },
  {
    derivation: '《礼记·郊特牲》此降尊以就卑也。”',
    example: '无',
    explanation: '尊贵的人委曲自己的身分与地位较低的人交往。',
    pinyin: 'jiàng zūn lín bēi',
    word: '降尊临卑',
    abbreviation: 'jzlb',
  },
  {
    derivation: '《晋书·左思传》于是豪贵之家竞相传写，洛阳为之纸贵。”',
    example:
      '人说～”，谁知今日闹到长安扇贵”。此时画的手也酸了，眼也花了。（清·李汝珍《镜花缘》第七十七回）',
    explanation: '比喻著作有价值，流传广。',
    pinyin: 'luò yáng zhǐ guì',
    word: '洛阳纸贵',
    abbreviation: 'lyzg',
  },
  {
    derivation:
      '周立波《暴风骤雨》第二部萧队长笑着，对于这连根带梢、清清楚楚的说法，他最喜欢。”',
    example: '无',
    explanation: '比喻事情的情节十分完整。',
    pinyin: 'lián gēn dài shāo',
    word: '连根带梢',
    abbreviation: 'lgds',
  },
  {
    derivation:
      '唐·沈既济《枕中记》载卢生在邯郸客店中遇道士吕翁，目昏思睡，吕翁授以青瓷枕，卢生进入梦乡，历尽富贵荣华。及醒，店主炊黄粱未熟。',
    example:
      '[阿松]谓曰‘请母安眠也。’母唯唯应，其音凝，亡何而～矣。★叶圣陶《穷愁》',
    explanation: '比喻进入梦乡。',
    pinyin: 'hán dān zhóng bù',
    word: '邯郸重步',
    abbreviation: 'hdzb',
  },
  {
    derivation: '《孔子家语·六本》小棰则待过，大杖则逃走。”',
    example: '无',
    explanation:
      '轻打就忍受，重打就逃跑。儒家认为这是孝子受父母责罚时应抱的态度。',
    pinyin: 'xiǎo shòu dà zǒu',
    word: '小受大走',
    abbreviation: 'xsdz',
  },
  {
    derivation: '唐·陈集源《龙龛道场铭序》地平天成，河溓海晏。”',
    example: '无',
    explanation: '犹言河清海晏。比喻天下太平。',
    pinyin: 'hé lián hǎi yàn',
    word: '河溓海晏',
    abbreviation: 'hlhy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用眉眼向人示意。有贬意。',
    pinyin: 'nòng méi jǐ yǎn',
    word: '弄眉挤眼',
    abbreviation: 'nmjy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '相传马肝有毒，食之能致人于死。比喻不应研讨的事不去研讨。',
    pinyin: 'bù shí mǎ gān',
    word: '不识马肝',
    abbreviation: 'bsmg',
  },
  {
    derivation:
      '郭沫若《怎样使双十节更值得纪念》武汉三镇的人真是欢喜若狂，一直热闹了一个通夜。”',
    example: '无',
    explanation: '欢喜高兴的样子。高举得象发狂一样。',
    pinyin: 'huān xǐ ruò kuáng',
    word: '欢喜若狂',
    abbreviation: 'hxrk',
  },
  {
    derivation:
      '《水浒传》第三七回宋江不晓得梢公话里藏阄，在船舱里悄悄的和两个公人说‘也难得这个梢公救了我们三个性命。’”',
    example: '无',
    explanation: '话里藏着哑谜儿。',
    pinyin: 'huà lǐ cáng jiū',
    word: '话里藏阄',
    abbreviation: 'hlcj',
  },
  {
    derivation:
      '晋·成公绥《云赋》于是玄气仰散，归云四聚；冰消瓦解，奕奕翩翩。”',
    example:
      '你们的一场闹剧，给我一席话，弄得～。★清·吴趼人《二十年目睹之怪现状》第十一回',
    explanation: '比喻完全消逝或彻底崩溃。',
    pinyin: 'wǎ jiě bīng xiāo',
    word: '瓦解冰消',
    abbreviation: 'wjbx',
  },
  {
    derivation:
      '清翟灏《通俗编·伦常》《元典章》有‘新附军人、弟男子侄结连恶少为害’，四字始见。”',
    example: '不一时，催命鬼领了几个～来到庙前。★《何典》第二回',
    explanation: '泛指晚辈男子。',
    pinyin: 'dì nán zǐ zhí',
    word: '弟男子侄',
    abbreviation: 'dnzz',
  },
  {
    derivation: '《北齐书·元晖业传》（元）孝友临刑，惊慌失措，晖业神色自若。”',
    example:
      '告以连称作乱之事。遂造寝室，告于襄公。襄公～。★明·冯梦龙《东周列国志》第十四回',
    explanation: '由于惊慌，一下子不知怎么办才好。',
    pinyin: 'jīng huáng wú cuò',
    word: '惊惶无措',
    abbreviation: 'jhwc',
  },
  {
    derivation:
      '《诗经·邺风·凯风序》卫之淫风流行，虽有七子之母，犹不能安其室。”',
    example: '无',
    explanation: '指已婚妇女又乱搞男女关系。',
    pinyin: 'bù ān yú shì',
    word: '不安于室',
    abbreviation: 'bays',
  },
  {
    derivation:
      '明·冯梦龙《古今小说·蒋兴歌重会珍珠衫》这婆子俐齿伶牙，能言快语，又半痴不颠的惯与丫环们打诨，所以上下都喜欢他。”',
    example: '无',
    explanation: '痴呆傻；颠同癲”，疯癲。装疯卖傻的意思。',
    pinyin: 'bàn chī bù diān',
    word: '半痴不颠',
    abbreviation: 'bcbd',
  },
  {
    derivation: '宋·苏轼《前赤壁赋》飘飘乎遗世独立，羽化而登仙。”',
    example: '七古、近体，豪宕磊落，～。★清·归庄《顾天石诗序》',
    explanation:
      '欲将要。飘飞上升，像要超脱尘世而成仙。多指人的感受轻松爽快。亦形容诗文、书法等的情致轻快飘逸。',
    pinyin: 'piāo piāo yù xiān',
    word: '飘飘欲仙',
    abbreviation: 'ppyx',
  },
  {
    derivation:
      '明·唐顺之《答翁东厓总制书》俟公破虏功成，当以向时雕虫末伎，作为铙歌鼓吹曲，以继《采芑》《江汉》之余响。”',
    example: '无',
    explanation: '犹言雕虫小技。同雕虫末技”。',
    pinyin: 'diāo chóng mò jì',
    word: '雕虫末伎',
    abbreviation: 'dcmj',
  },
  {
    derivation: '宋·陆游《老学庵笔记》卷四乃知朝士妄想，自古已然，可付一笑。”',
    example:
      '康有为两人去后，袁世凯犹是～，觉他们举动都不必理他。★清·黄小配《大马扁》第十二回',
    explanation: '用笑一笑来回答。比喻不计较，不当一回事。',
    pinyin: 'fù zhī yī xiào',
    word: '付之一笑',
    abbreviation: 'fzyx',
  },
  {
    derivation: '汉·袁康《越绝书·德序外传记》故圣人见微知著，睹始知终。”',
    example: '无',
    explanation: '指看见事物的开始阶段就预见到它的最终结果。',
    pinyin: 'dǔ shǐ zhī zhōng',
    word: '睹始知终',
    abbreviation: 'dszz',
  },
  {
    derivation: '语本《礼记·孔子闲居》天无私覆，地无私载，日月无私照。”',
    example: '无',
    explanation: '比喻帝王的德泽。',
    pinyin: 'wú sī zhī guāng',
    word: '无私之光',
    abbreviation: 'wszg',
  },
  {
    derivation:
      '鲁迅《且介亭杂文附集·我的第一个师父》台下有人骂起来。师父不甘示弱，也给他们一个回骂。”',
    example: '无',
    explanation:
      '示显示，表现。不甘心表示自己比别人差。表示要较量一下，比个高低。',
    pinyin: 'bù gān shì ruò',
    word: '不甘示弱',
    abbreviation: 'bgsr',
  },
  {
    derivation: '元·高则诚《琵琶记·谏父》又道是养儿代老，积谷防饥。”',
    example: '无',
    explanation: '储存粮食，防备饥荒。',
    pinyin: 'jī gǔ fáng jī',
    word: '积谷防饥',
    abbreviation: 'jgfj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻人的地位上升。',
    pinyin: 'qiān qiáo chū gǔ',
    word: '迁乔出谷',
    abbreviation: 'qqcg',
  },
  {
    derivation: '无',
    example: '他干什么都不稳重，慌手慌脚的。',
    explanation: '形容动作忙乱。',
    pinyin: 'huāng shǒu huāng jiǎo',
    word: '慌手慌脚',
    abbreviation: 'hshj',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第六十五回紫芝妹妹嘴虽厉害，好在心口如一，直截了当，倒是一个极爽快的。”',
    example: '～，不说假话，这是做人起码应具有的品质。',
    explanation: '心里想的和嘴里说的一样。形容诚实直爽。',
    pinyin: 'xīn kǒu rú yī',
    word: '心口如一',
    abbreviation: 'xkry',
  },
  {
    derivation:
      '碧野《大巴山人》最使她痛恨的是，有些坏人滥伐森林，把木材明抢暗偷运出山去贩卖。”',
    example: '无',
    explanation: '公开抢劫，暗中偷盗。',
    pinyin: 'míng qiǎng àn tōu',
    word: '明抢暗偷',
    abbreviation: 'mqat',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指没有根据信口乱说。',
    pinyin: 'yóu tán wú gēn',
    word: '游谈无根',
    abbreviation: 'ytwg',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第九十八回阳衍正在心荡神迷，一闻此语，慌忙接过芍药道‘承女郎见爱，何福能消！但未识芳闺何处？’”',
    example: '无',
    explanation: '荡摇动。形容心神不定，难以自持。',
    pinyin: 'xīn dàng shén mí',
    word: '心荡神迷',
    abbreviation: 'xdsm',
  },
  {
    derivation: '见闭门塞窦”。',
    example:
      '居民互相惊告，以为鬼至，每日向夕，辄～。★清·钮琹《觚剩续编·雁翎刀》',
    explanation: '关闭门窗，堵塞洞穴。多谓防备之严。',
    pinyin: 'bì kǒu jǐn hù',
    word: '闭门墐户',
    abbreviation: 'bkjh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '古代国家收藏重要文献的地方。同石室金匮”。',
    pinyin: 'shí jiān jīn kuì',
    word: '石缄金匮',
    abbreviation: 'sjjk',
  },
  {
    derivation:
      '宋·释普济《五灯会元·东土祖师》光自幼志气不群，博涉诗书，尤精玄理，而不事家产，好游山水，后览佛书，超然自得。”',
    example: '无',
    explanation: '超脱世事，自觉快乐和满足。',
    pinyin: 'chāo rán zì dé',
    word: '超然自得',
    abbreviation: 'crzd',
  },
  {
    derivation:
      '元·无名氏《博望烧屯》第二折我也不信，我豹头环眼，倒拿不住一目的夏侯惇。”',
    example: '无',
    explanation: '形容人的面目威严凶狠。',
    pinyin: 'bào tóu huán yǎn',
    word: '豹头环眼',
    abbreviation: 'bthy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指只讲空话，而不实行。同徒托空言”。',
    pinyin: 'tú tún kōng yán',
    word: '徒讬空言',
    abbreviation: 'ttky',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指孤身一人，无妻小。',
    pinyin: 'wú jiā wú shì',
    word: '无家无室',
    abbreviation: 'wjws',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '太阳偏西天色晚了才吃饭。形容勤于政事。',
    pinyin: 'rì zè gàn shí',
    word: '日昃旰食',
    abbreviation: 'rzgs',
  },
  {
    derivation: '东汉·班固《汉书·艺文志》茅屋采椽，是以贵俭。”',
    example: '无',
    explanation: '指住宿简陋。',
    pinyin: 'máo wū cǎi chuán',
    word: '茅屋采椽',
    abbreviation: 'mwcc',
  },
  {
    derivation:
      '《后汉书·马援传》援自还京师，数被进见。为人明须发，眉目如画。”',
    example: '帝姿貌端华，～。★《南史·宋顺帝纪》',
    explanation: '形容容貌端正秀丽。',
    pinyin: 'méi mù rú huà',
    word: '眉目如画',
    abbreviation: 'mmrh',
  },
  {
    derivation:
      '汉·贾谊《过秦论上》试使山东之国与陈涉度长絜大，比权量力，则不可同年而语矣。”',
    example:
      '设我中国至此时而不一变，安能埒于欧洲诸大国，而与之～也哉！清·王韬《变法中》',
    explanation: '比较衡量两方面的权力和力量。也用来指衡量两方面的轻重。',
    pinyin: 'bǐ quán liàng lì',
    word: '比权量力',
    abbreviation: 'bqll',
  },
  {
    derivation:
      '南朝·宋·刘义庆《世说新语·言语》我与王安丰说延陵、子房，亦超超玄箸。”',
    example:
      '读此诗而思此景，即不必有此景。而但读此诗已令人～矣。★清·无名氏《杜诗言志》第十卷',
    explanation: '超超高超；玄微妙；箸通著”，明显。指言论文辞高妙又明切。',
    pinyin: 'chāo chāo xuán zhù',
    word: '超超玄箸',
    abbreviation: 'ccxz',
  },
  {
    derivation:
      '《荀子·正论》浅不足与测深，愚不足与谋知，坎井之蛙，不可与语东海之乐。”',
    example:
      '宇栋之内，燕雀不知天地之高也；～，不知江海之大。★汉·桓宽《盐铁论·复古》',
    explanation: '坎井坏井，废井。废井里的青蛙。比喻见识不多的人。',
    pinyin: 'kǎn jǐng zhī wā',
    word: '坎井之蛙',
    abbreviation: 'kjzw',
  },
  {
    derivation: '《易经·否卦》内阴而外阳，内柔而外刚。”',
    example: '无',
    explanation: '内心柔弱，外表刚强。亦作外刚内柔”。',
    pinyin: 'nèi róu wai gāng',
    word: '内柔外刚',
    abbreviation: 'nrwg',
  },
  {
    derivation: '唐·张说《巡边河北作》诗之一沙场积路何为尔，重气轻生如许国。”',
    example: '无',
    explanation: '指看重义行而轻视生命。',
    pinyin: 'zhòng qì qīng shēng',
    word: '重气轻生',
    abbreviation: 'zqqs',
  },
  {
    derivation: '语出《后汉书·李固传》固貌状有奇表，鼎角匿犀，足履龟文。”',
    example: '～何肯相，雷光泡影认眉须。★康有为《自题三十影像》诗',
    explanation: '头顶骨隆起如犀角，脚掌上有龟背纹。旧时所谓贵人之相。',
    pinyin: 'xī dǐng guī wén',
    word: '犀顶龟文',
    abbreviation: 'xdgw',
  },
  {
    derivation: '无',
    example: '蓬门荜户，鸟语花香，真是世外桃源。',
    explanation: '用树枝、草等做成的房子。形容穷苦人家所住的简陋的房屋。',
    pinyin: 'péng mén bì hù',
    word: '蓬门荜户',
    abbreviation: 'pmbh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '趋向善良，远离罪恶。',
    pinyin: 'xǐ shàn yuǎn zuì',
    word: '徙善远罪',
    abbreviation: 'xsyz',
  },
  {
    derivation: '《新唐书·李绛传》趋利之人，常为朋比，同其私也。”',
    example: '平时与古老三～，也非一次。（清·姬文《市声》第二十三回）',
    explanation: '朋比依附，互相勾结。坏人勾结在一起干坏事。',
    pinyin: 'péng bǐ wéi jiān',
    word: '朋比为奸',
    abbreviation: 'pbwj',
  },
  {
    derivation:
      '清王夫之《姜斋诗话》卷下起承转收以诗……一篇之中，四起四收，非喏虫相衔成青竹蛇而何？两间万物之生，无有尻下出头，枝末生根之理。”',
    example: '无',
    explanation: '树木的枝梢上生根。比喻不合事理，不可能。',
    pinyin: 'zhī mò shēng gēn',
    word: '枝末生根',
    abbreviation: 'zmsg',
  },
  {
    derivation:
      '《镜花缘》第七一回你到女儿国酒楼戏馆去看，只怕异姓姐妹聚在一处的，还成千论万哩。”',
    example: '无',
    explanation: '犹言成千成万。形容数量极多。',
    pinyin: 'chéng qiān lùn wàn',
    word: '成千论万',
    abbreviation: 'cqlw',
  },
  {
    derivation:
      '《旧唐书·后妃传上》妇人智识不远，有忤盛情，然贵妃久承恩顾，何惜宫中一席之地，使其京戮，安忍取辱于外哉！”',
    example:
      '那占着玻璃柜～的彩塑泥人，却比什么都吸引我。★邓炬云《漫步南京路》',
    explanation: '放一个席位的地方。比喻应有的一个位置。',
    pinyin: 'yī xí zhī dì',
    word: '一席之地',
    abbreviation: 'yxzd',
  },
  {
    derivation:
      '《水浒传》第十一回[柴进]叫庄客取一笼衣裳出来，叫林冲彻里至外都换了。”',
    example: '无',
    explanation: '指从里到外。',
    pinyin: 'chè lǐ zhì wài',
    word: '彻里至外',
    abbreviation: 'clzw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '双方互相看着，发出会心的微笑。形容二者情合意洽的情态。',
    pinyin: 'xiāng shì ér xiào',
    word: '相视而笑',
    abbreviation: 'xsex',
  },
  {
    derivation: '《尚书·旅獒》犬马非其土性不畜，珍禽奇兽不育于国。”',
    example: '无',
    explanation: '珍贵重的；奇特殊的。珍奇的飞禽，罕见的走兽。',
    pinyin: 'zhēn qín qí shòu',
    word: '珍禽奇兽',
    abbreviation: 'zqqs',
  },
  {
    derivation:
      '元·无名氏《桃花女》第二折则你这媒人一个个，啜人口似蜜钵，都只是随风倒舵，索媒钱赚少争多。”',
    example: '眼见得城池不济事了，各人自思～。★明·施耐庵《水浒全传》第九十八回',
    explanation: '随着风向转换舵位。比喻顺着情势改变态度（含贬义）。',
    pinyin: 'suí fēng zhuǎn duò',
    word: '随风转舵',
    abbreviation: 'sfzd',
  },
  {
    derivation:
      '唐·徐夤《上卢三拾遗以言见黜》冷眼静看真好笑，倾怀与说却为冤。”宋·朱熹《答黄直卿》故其后复申炎所陈，荐举之说，乃是首尾专为王地，冷眼旁观，手足俱露，甚可笑也。”',
    example:
      '诗云一局输赢料不真，香销茶尽尚逡巡。欲知目下兴衰兆，顺问傍观冷眼人。”★《脂砚斋评红楼梦》第二回',
    explanation: '冷眼冷静或冷漠的眼光。指不参与其事，站在一旁看事情的发展。',
    pinyin: 'lěng yǎn páng guān',
    word: '冷眼旁观',
    abbreviation: 'lypg',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第五十八回比如男子丧了妻，或有必当续弦者，也必要续弦为是。便只是不把死的丢过不提，便是情深意重了。”',
    example: '无',
    explanation: '情意深重。',
    pinyin: 'qíng shēn yì zhòng',
    word: '情深意重',
    abbreviation: 'qsyz',
  },
  {
    derivation:
      '冯德英《迎春花》第九章但这几天热火朝天的参军运动，也冲击着他们的身心。”',
    example: '无',
    explanation:
      '形容群众性的活动情绪热烈，气氛高涨，就象炽热的火焰照天燃烧一样。',
    pinyin: 'rè huǒ cháo tiān',
    word: '热火朝天',
    abbreviation: 'rhct',
  },
  {
    derivation: '明·沈受先《三元记·格天》积善存仁，蹈矩循规太古民。”',
    example: '无',
    explanation: '指遵守规矩。',
    pinyin: 'dǎo jǔ xún guī',
    word: '蹈矩循规',
    abbreviation: 'djxg',
  },
  {
    derivation: '明·李贽《焚书·杂述·杂说》一旦见景生情，触目兴叹。”',
    example: '无',
    explanation: '看到某种情况而引起感叹。',
    pinyin: 'chù mù xīng tàn',
    word: '触目兴叹',
    abbreviation: 'cmxt',
  },
  {
    derivation: '汉·司马迁《报任少卿书》而事乃有大谬不然者夫。”',
    example:
      '从表面看，似乎既称红军，就可以不要党代表了，实在～。★《毛泽东选集·井岗山的斗争》',
    explanation: '谬荒谬，错误；然如此，这样。大错特错，完全不是这样。',
    pinyin: 'dà miù bù rán',
    word: '大谬不然',
    abbreviation: 'dmbr',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '骖古代驾在车前两侧的马。解下驾在车前两侧的马匹，换取食物送给急需的人。指以自己的财物解救他人之急。',
    pinyin: 'jiě cān tuī shí',
    word: '解骖推食',
    abbreviation: 'jcts',
  },
  {
    derivation:
      '清·曾朴《孽海花》第三十五回老汉平生最喜欢劫富济贫，抑强扶弱，打抱不平。”',
    example:
      '会因南北统一，所谋未遂，乃想学王天纵的行为，～，自张一帜。（蔡东藩、许厪父《民国通俗演义》第二十五回）',
    explanation: '劫强取；济救济。夺取富人的财产，救济穷人。',
    pinyin: 'jié fù jì pín',
    word: '劫富济贫',
    abbreviation: 'jfjp',
  },
  {
    derivation:
      '《人民日报》1983.11.15市有关领导要求各企业反骄破满，把主要精力从增加产品数量转移到主要抓提高产品质量、搞好产品更新换代和新产品开发上来，增产国内外市场畅销产品。”',
    example: '无',
    explanation: '反对骄傲，破除自满。',
    pinyin: 'fǎn jiāo pò mǎn',
    word: '反骄破满',
    abbreviation: 'fjpm',
  },
  {
    derivation: '《礼记·檀弓上》献子加于人一等矣。”',
    example:
      '你这见解，一定～，这等玄妙高超法，我两个怎能帮助你得来★清·文康《儿女英雄传》第三十回',
    explanation: '加超过。超过别人一等。比喻学问才能超过一般人。也指争强好胜。',
    pinyin: 'jiā rén yī děng',
    word: '加人一等',
    abbreviation: 'jryd',
  },
  {
    derivation:
      '清·赵曦明《跋》至于补阙挂漏，俾臻完善，不能无望于将伯之助云。”',
    example: '无',
    explanation: '阙缺；漏遗漏。指弥补事物的缺陷和漏洞。',
    pinyin: 'bǔ quē guà lòu',
    word: '补阙挂漏',
    abbreviation: 'bqgl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容十分想念。',
    pinyin: 'kě chén wàn hú',
    word: '渴尘万斛',
    abbreviation: 'kcwh',
  },
  {
    derivation:
      '清·墨憨斋《醒名花》第十四回贤侄今日，奋笔直书，如行云流水，珠玑错落，俊爽之才，有同健鹰之摩秋汉，真命世杰也，与古人何多让焉，将来正未可量。”',
    example:
      '于是那幕友～春霆军门雅蜀”，见了的人，无不是想笑不敢笑。★高阳《慈禧全传》十九',
    explanation: '奋笔提起笔来。指精神昂扬地挥笔快速书写。同奋笔疾书”。',
    pinyin: 'fèn bǐ zhí shū',
    word: '奋笔直书',
    abbreviation: 'fbzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用一个单位或地方的成功经验来带动许多单位或成片地区的工作。',
    pinyin: 'yǐ diǎn dài miàn',
    word: '以点带面',
    abbreviation: 'yddm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指弯腰曲膝。',
    pinyin: 'qū yào ráo yù',
    word: '诎要桡膎',
    abbreviation: 'qyry',
  },
  {
    derivation: '无',
    example: '巴黎和谈，国人皆～。',
    explanation: '以此事为自己的羞耻。',
    pinyin: 'yǐn yǐ wéi chǐ',
    word: '引以为耻',
    abbreviation: 'yywc',
  },
  {
    derivation:
      '《旧唐书·李密传》尸骸蔽野，血流成河，积怨满于山川，号哭动于天地。”',
    example: '须臾～，顷刻尸如山积。★明·施耐庵《水浒全传》第一百九回',
    explanation: '形容被杀的人极多。',
    pinyin: 'xuè liú chéng hé',
    word: '血流成河',
    abbreviation: 'xlch',
  },
  {
    derivation: '《三国志·吴书·陆逊传》今不忍小忿而发雷霆之怒。”',
    example:
      '不知说了一句甚么话，符老爷登时～起来，把那独脚桌子一掀。(清·吴趼人《二十年目睹之怪现状》第七十四回)',
    explanation: '霆极响的雷，比喻震怒。比喻大发脾气，大声斥责。',
    pinyin: 'dà fā léi tíng',
    word: '大发雷霆',
    abbreviation: 'dflt',
  },
  {
    derivation:
      '《晋书·陶璜传》夷帅范熊世为逋寇，自称为王，数攻百姓；且连接扶南，种类猥多，朋党相倚，负险不宾。”',
    example: '无',
    explanation: '犹言负固不服。',
    pinyin: 'fù xiǎn bù bīn',
    word: '负险不宾',
    abbreviation: 'fxbb',
  },
  {
    derivation: '南朝·宋·鲍照《芜城赋》出入三代，五百余载，竟瓜剖而豆分。”',
    example: '自五季乱离，各据城垒，～，七十余年。★《宋史·王禹偁传》',
    explanation: '象瓜被剖开，豆从荚里裂出一样。比喻国土被分割。同豆剖瓜分”。',
    pinyin: 'dòu fēn guā pōu',
    word: '豆分瓜剖',
    abbreviation: 'dfgp',
  },
  {
    derivation:
      '明·名教中人《好俅传》第十二回承长兄厚爱，本当领教，只奈归心似箭，今日立刻就要行了。”',
    example:
      '不多时，穿过松林，渡过小溪，过了水月村，越过镜花岭，真是～。★清·李汝珍《镜花缘》第二十一回',
    explanation: '想回家的心情象射出的箭一样快。形容回家心切。',
    pinyin: 'guī xīn sì jiàn',
    word: '归心似箭',
    abbreviation: 'gxsj',
  },
  {
    derivation:
      '清·袁枚《随园诗话补遗》卷九余雅不喜诗坛吟社之说，大概起于前明末年鸱张门户之恶习。”',
    example: '无',
    explanation: '树立门户，标榜门庭。',
    pinyin: 'chī zhāng mén hù',
    word: '鸱张门户',
    abbreviation: 'czmh',
  },
  {
    derivation:
      '宋·周密《齐东野语·书种文种》山谷云‘士大夫子弟，不可令读书种子断绝，有才气者出，便当名世矣。’”',
    example:
      '城下之日，彼必不降，幸勿杀之。杀孝孺，天下～绝矣。★《明史·方孝孺传》',
    explanation: '指在文化上能承先启后的读书人。',
    pinyin: 'dú shū zhǒng zǐ',
    word: '读书种子',
    abbreviation: 'dszz',
  },
  {
    derivation:
      '《论语·卫灵公》子曰‘群居终日，言不及义，好行小慧，难矣哉！’”何晏集解引郑玄曰小慧，谓小小之才知。”慧，一本作惠”。',
    example: '无',
    explanation: '爱耍小聪明。',
    pinyin: 'hǎo xíng xiǎo huì',
    word: '好行小慧',
    abbreviation: 'hxxh',
  },
  {
    derivation:
      '北魏·杨衒之《洛阳伽蓝记·白马寺》庭列修竹；檐拂高松，奇花异草，骈阗堦砌。”《西京杂记》卷三奇树异草，靡不具植。”',
    example:
      '奉命前往洛阳，不问权豪势要之家，选拣～，和买花栽子，趁时栽接。★元·白朴《墙头马上》第一折',
    explanation: '卉草的总称。原意是指希奇少见的花草。也比喻美妙的文章作品等。',
    pinyin: 'qí huā yì huì',
    word: '奇花异卉',
    abbreviation: 'qhyh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '眼光一接触便知道”之所在。形容悟性好。',
    pinyin: 'mù jī dào cún',
    word: '目击道存',
    abbreviation: 'mjdc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '款曲殷勤。待人殷勤，照顾周到细致。',
    pinyin: 'kuǎn qǔ zhōu zhì',
    word: '款曲周至',
    abbreviation: 'kqzz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻加进了不好的东西，从而破坏了原来美的事物。',
    pinyin: 'shǔ shǐ wū gēng',
    word: '鼠屎汙羹',
    abbreviation: 'sswg',
  },
  {
    derivation:
      '《礼记·文王世子》凡语于郊者必取贤敛才焉，或以德进，或以事举，或以言扬。”',
    example: '无',
    explanation: '根据德行和名声来选择人才。',
    pinyin: 'yán yáng xíng jǔ',
    word: '言扬行举',
    abbreviation: 'yyxj',
  },
  {
    derivation:
      '语出《诗·豳风·伐柯》伐柯伐柯，其则不远。”《中庸》引此文，朱熹集注柯，斧柄。则，法也……言人执柯伐木以为柯者，彼柯长短之法，在此柯耳。”',
    example: '至于～，虽取则不远，若夫随手之变，良难以辞逮。★晋·陆机《文赋》',
    explanation: '执斧砍伐斧柄。比喻可就近取法。',
    pinyin: 'cāo fù fá kē',
    word: '操斧伐柯',
    abbreviation: 'cffk',
  },
  {
    derivation: '《论语·先进》由也升堂矣，未入于室也。”',
    example: '无',
    explanation:
      '堂、室古代宫室，前面是堂，后面是室。登上厅堂，进入内室。比喻学问或技能从浅到深，达到很高的水平。',
    pinyin: 'dēng táng rù shì',
    word: '登堂入室',
    abbreviation: 'dtrs',
  },
  {
    derivation:
      '元·无名氏《碧桃花》第一折俺那里有的是秦人晋人，你可也休将咱盘问，则管里絮叨叨拔树寻根。”',
    example:
      '雪娥恐怕西门庆来家～，归罪于己，在上房打磨。★明·兰陵笑笑生《金瓶梅词话》第二十六回',
    explanation: '比喻追究到底。',
    pinyin: 'bá shù xún gēn',
    word: '拔树寻根',
    abbreviation: 'bsxg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不加文饰，保留本旨。',
    pinyin: 'qì wén cún zhì',
    word: '弃文存质',
    abbreviation: 'qwcz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用心机。亦作使心用幸”。',
    pinyin: 'shǐ xīn zuò xìng',
    word: '使心作幸',
    abbreviation: 'sxzx',
  },
  {
    derivation: '《汉书·河间献王传》从民得善书，必为好写与之，留其真。”',
    example: '无',
    explanation: '指借别人的书，抄写后留下正本，把抄本还给别人。',
    pinyin: 'jiè shū liú zhēn',
    word: '借书留真',
    abbreviation: 'jslz',
  },
  {
    derivation: '无',
    example: '老师举的这个例子恰如其分，同学们很快就掌握了这种方法。',
    explanation: '指办事或说话正合分寸。',
    pinyin: 'qià rú qí fèn',
    word: '恰如其分',
    abbreviation: 'qrqf',
  },
  {
    derivation:
      '《庄子·在宥》广成子南首而卧，黄帝顺下风膝行而进，再拜稽首而问。”《左传·僖公十五年》皇天后土实闻君之言，群臣敢在下风。”',
    example:
      '我们全体女民兵向你们男同志挑战，十天过去，那样赶不上你们，我们～，自动解散。（冯德英《迎春花》第二十二章）',
    explanation: '甘情愿，乐意；下风风向的下方。对人自认不如，真心佩服。',
    pinyin: 'gān bài xià fēng',
    word: '甘败下风',
    abbreviation: 'gbxf',
  },
  {
    derivation: '《晋书·武帝纪》廓清梁、岷、包怀扬、越，八纮同轨，祥瑞屡臻。”',
    example: '无',
    explanation: '指天下一统。八纮，指八方极远之地。',
    pinyin: 'bā hóng tóng guǐ',
    word: '八纮同轨',
    abbreviation: 'bhtg',
  },
  {
    derivation:
      '秦牧《长街灯语一九七九年的晨钟》抚今思昔，心头掀起了思想的浪花。”',
    example: '无',
    explanation: '因眼前事物而引起对往事的追思。同抚今悼昔”。',
    pinyin: 'fǔ jīn sī xī',
    word: '抚今思昔',
    abbreviation: 'fjsx',
  },
  {
    derivation:
      '《左传·文公十八年》流四凶族，浑敦、穷奇、寿杌、饕餮，投诸四裔，以御螭魅。”',
    example: '无',
    explanation: '比喻流放到边远的地区。',
    pinyin: 'tóu zhū sì yì',
    word: '投诸四裔',
    abbreviation: 'tzsy',
  },
  {
    derivation:
      '《后汉书桓谭冯衍传》又见法令决事，轻重不齐。或一事殊法，同罪异论，奸吏得因缘为市。”',
    example: '无',
    explanation: '旧指官吏借不公正的判决，收受贿赂。',
    pinyin: 'yīn yuán wéi shì',
    word: '因缘为市',
    abbreviation: 'yyws',
  },
  {
    derivation:
      '《清史稿·许友信传》且郑成功出没闽、浙，奉其伪号，遥相应和，声势颇张。”',
    example: '无',
    explanation: '遥远远地；应照应。远远地互相联系，互相配合。',
    pinyin: 'yáo xiāng hū yìng',
    word: '遥相呼应',
    abbreviation: 'yxhy',
  },
  {
    derivation: '唐·杜甫《雨不绝》诗鸣雨既过渐细微，映空摇扬如丝飞。”',
    example: '对于～的婚姻，我们要通过法律手段解决。',
    explanation: '既成已成。已经形成的事实。',
    pinyin: 'jì chéng shì shí',
    word: '既成事实',
    abbreviation: 'jcss',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹强干弱枝。比喻削减地方势力，加强中央权力。',
    pinyin: 'qiáng běn ruò mò',
    word: '强本弱末',
    abbreviation: 'qbrm',
  },
  {
    derivation: '无',
    example:
      '春节的文化庙会，各色传统手工艺品摆满店铺的柜台，～，令人眼花缭乱。',
    explanation: '形容色彩华丽。',
    pinyin: 'xuàn lì duō cǎi',
    word: '绚丽多彩',
    abbreviation: 'xldc',
  },
  {
    derivation: '《庄子·山木》无誉无訾，一龙一蛇，与时俱化，而无肯专为。”',
    example:
      '将以乡党自好，～者为完人乎？则趼人怒目翕张，不屑为也。★鲁迅《小说旧闻钞·二十年目睹之怪现状》',
    explanation: '既无毁谤，也无称誉。形容很平常。',
    pinyin: 'wú huǐ wú yù',
    word: '无毁无誉',
    abbreviation: 'whwy',
  },
  {
    derivation: '无',
    example: '小王最近几天都一副～的样子，不知葫芦里卖的是什么药。',
    explanation: '高深不易了解。',
    pinyin: 'shēn ào mò cè',
    word: '深奥莫测',
    abbreviation: 'samc',
  },
  {
    derivation: '汉·王褒《洞箫赋》哀悁悁之可怀兮，良醰醰而有味。”',
    example:
      '话是这样说，可是谈起理论，许宁还是一套套地向道静谈得～，头头是道。★杨沫《青春之歌》第一部第十二章',
    explanation: '津津兴趣浓厚的样子。指吃得很有味道或谈得很有兴趣。',
    pinyin: 'jīn jīn yǒu wèi',
    word: '津津有味',
    abbreviation: 'jjyw',
  },
  {
    derivation:
      '元·王实甫《西厢记》第三本第四折心不存学海文林，梦不离柳影花阴，则去那窃玉偷香上用心。”',
    example: '无',
    explanation: '指男女幽会之处。引申为男女情爱之事。',
    pinyin: 'liǔ yǐng huā yīn',
    word: '柳影花阴',
    abbreviation: 'lyhy',
  },
  {
    derivation:
      '唐·范摅《云溪友议》卷上凡所书判，或是卒然，故趋事皆惊神破胆矣。”',
    example: '无',
    explanation: '形容极其恐惧。',
    pinyin: 'jīng shén pò dǎn',
    word: '惊神破胆',
    abbreviation: 'jspd',
  },
  {
    derivation:
      '宋·朱熹《朱子语类·论语三》‘巧言’即今所谓花言巧语，如今世举子弄笔端做文字者是也。”',
    example:
      '我以为法律上的许多罪名，都是～，只有一语以包括之，曰可恶罪。★鲁迅《而已集·可恶罪》',
    explanation:
      '原指铺张修饰、内容空泛的言语或文辞◇多指用来骗人的虚伪动听的话。',
    pinyin: 'huā yán qiǎo yǔ',
    word: '花言巧语',
    abbreviation: 'hyqy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指攀附结交高贵的人。',
    pinyin: 'pān gāo jiē guì',
    word: '攀高接贵',
    abbreviation: 'pgjg',
  },
  {
    derivation:
      '《晋书·阮孚传》迁黄门侍郎、散骑常侍。尝以金貂换酒，复为所司弹劾，帝宥之。”',
    example: '无',
    explanation:
      '金貂汉以后皇帝左右侍臣的冠饰。取下金冠换美酒。形容不拘礼法，恣情纵酒。',
    pinyin: 'jīn diāo huàn jiǔ',
    word: '金貂换酒',
    abbreviation: 'jdhj',
  },
  {
    derivation:
      '陈夔龙《梦蕉亭杂记》卷一责备之严，诚不足怪。庸讵知当局之负诟忍尤，艰难应付，有非楮墨所能罄者。”',
    example: '无',
    explanation: '忍受指责和怨恨。',
    pinyin: 'fù gòu rěn yóu',
    word: '负诟忍尤',
    abbreviation: 'fgry',
  },
  {
    derivation: '唐·吕岩《徽宗斋会》高谈阔论若无人，可惜明君不遇真。”',
    example:
      '柴进～，一片言语，娄敏中大喜，就留柴进在相府管待。★明·施耐庵《水浒全传》第一百十六回',
    explanation: '高高深；阔广阔。多指不着边际地大发议论。',
    pinyin: 'gāo tán kuò lùn',
    word: '高谈阔论',
    abbreviation: 'gtkl',
  },
  {
    derivation: '唐·韩愈《答李翊书》仁义之人，其言蔼如也。”',
    example: '子恺为他家华瞻写的文章，真是‘～’之言。★朱自清《儿女》',
    explanation: '对人和善的有仁德的人。',
    pinyin: 'ǎi rán rén zhě',
    word: '蔼然仁者',
    abbreviation: 'arrz',
  },
  {
    derivation:
      '沙汀《酒后》保长王大廷只有一宗缺点有点好酒贪杯。一喝醉了又会变得十足脓包，失掉了他那分坚韧的好性格。”',
    example: '无',
    explanation: '指喜欢喝酒。',
    pinyin: 'hào jiǔ tān bēi',
    word: '好酒贪杯',
    abbreviation: 'hjtb',
  },
  {
    derivation:
      '清·李渔《怜香伴·毡集》下官知从选了这个穷教官，坐了这条冷板凳，终日熬姜呷醋，尚不能色问舍求田，哪里再经得进口添人。”',
    example: '无',
    explanation: '比喻生活清苦。',
    pinyin: 'áo jiāng xiā cù',
    word: '熬姜呷醋',
    abbreviation: 'ajxc',
  },
  {
    derivation: '《诗经·大雅·绵》绵绵瓜瓞，民之初生，自土沮漆。”',
    example: '无',
    explanation:
      '绵绵延续不断的样子；瓞小瓜。如同一根连绵不断的藤上结了许多大大小小的瓜一样。引用为祝颂子孙昌盛。',
    pinyin: 'mián mián guā dié',
    word: '绵绵瓜瓞',
    abbreviation: 'mmgd',
  },
  {
    derivation:
      '元·无名氏《隔江斗智》第一折我如今并不推三阻四，任哥哥自主之。”',
    example: '无',
    explanation: '找各种借口推托。',
    pinyin: 'tuī sān zǔ sì',
    word: '推三阻四',
    abbreviation: 'tszs',
  },
  {
    derivation: '元·高安得《皮匠说谎》好一场恶一场，哭不得笑不得。”',
    example: '否则咬着了辣椒，～的时候，我不能负责。★鲁迅《伪自由书·止哭文学》',
    explanation: '哭也不好，笑也不好。形容很尴尬。',
    pinyin: 'kū xiào bù dé',
    word: '哭笑不得',
    abbreviation: 'kxbd',
  },
  {
    derivation: '无',
    example: '这是一个严肃的问题，决不允许使用村学究语。',
    explanation: '指迂腐浅陋的言辞。',
    pinyin: 'cūn xué jiū yǔ',
    word: '村学究语',
    abbreviation: 'cxjy',
  },
  {
    derivation: '《左传·成公三年》无怨无德，不知所报。”',
    example: '无',
    explanation: '既没有怨恨，也没有恩德。指彼此间没有恩怨关系。',
    pinyin: 'wú yuàn wú dé',
    word: '无怨无德',
    abbreviation: 'wywd',
  },
  {
    derivation: '唐·牟融《送客之杭》西风吹冷透貂裘，行色匆匆不暂留。”',
    example: '又是在～里，一两天要到新汉寿。★冰心《寄小读者》',
    explanation: '行色出发前后的神态。行走或出发前后的神态举止急急忙忙的样子。',
    pinyin: 'xíng sè cōng cōng',
    word: '行色匆匆',
    abbreviation: 'xscc',
  },
  {
    derivation: '《左传·闵公元年》不去庆父，鲁难未已。”',
    example:
      '～。战犯不除，国无宁日。这个道理，难道现在还不明白么？★毛泽东《南京政府向何处去？》',
    explanation:
      '不杀掉庆父，鲁国的灾难不会停止。比喻不清除制造内乱的罪魁祸首，就得不到安宁。',
    pinyin: 'qìng fù bù sǐ，lǔ nàn wèi yǐ',
    word: '庆父不死，鲁难未已',
    abbreviation: 'qfbsnwy',
  },
  {
    derivation:
      '朱自清《那里走·我们的路》所以那些没法奈何的人，我想都将向这三条路里躲了进去。”',
    example: '无',
    explanation: '指没有办法，无计可施。',
    pinyin: 'méi fǎ nài hé',
    word: '没法奈何',
    abbreviation: 'mfnh',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第八十二回好！宝玉，我今日才知道你是个无情无义的人了！”',
    example: '无',
    explanation: '没有一点情义。形容冷酷无情。',
    pinyin: 'wú qíng wú yì',
    word: '无情无义',
    abbreviation: 'wqwy',
  },
  {
    derivation:
      '宋·朱熹《答吕方子约（九月十三日）》随语生解，节上生枝，则更读万卷书，亦无用处也。”',
    example: '兀的是闲言语甚意思，他怎肯道～。★元·杨显之《潇湘雨》第二折',
    explanation:
      '本不应该生枝的地方生枝。比喻在原有问题之外又岔出了新问题。多指故意设置障碍，使问题不能顺利解决。',
    pinyin: 'jié wài shēng zhī',
    word: '节外生枝',
    abbreviation: 'jwsz',
  },
  {
    derivation:
      '《水浒传》第七二回柴进唤燕青，附耳低言‘你与我如此如此。’燕青是个点头会意的人，不必细问，火急下楼。”',
    example: '鸳鸯的魂听了～，便跟了秦氏，可卿而去。★《红楼梦》第一一一回',
    explanation: '①形容机灵乖觉。②表示允可、赞许。',
    pinyin: 'diǎn tóu huì yì',
    word: '点头会意',
    abbreviation: 'dthy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '风景优美的著名河山。同名山胜川”。',
    pinyin: 'míng shān shèng shuǐ',
    word: '名山胜水',
    abbreviation: 'msss',
  },
  {
    derivation: '无',
    example: '能临危不惧，～的人才是真正有骨气的人。',
    explanation: '宁愿被处死也不肯受辱。',
    pinyin: 'níng sǐ bù rǔ',
    word: '宁死不辱',
    abbreviation: 'nsbr',
  },
  {
    derivation: '《庄子·天道》不徐不疾，得之于手而应于心。”',
    example:
      '挟了七八万现款的冯云卿就此走进了公债市场，半年来总算～，扯起息来，二分半是有的。★茅盾《子夜》',
    explanation:
      '得得到，想到；应反应，配合。心里怎么想，手就能怎么做。比喻技艺纯熟或做事情非常顺利。',
    pinyin: 'dé xīn yìng shǒu',
    word: '得心应手',
    abbreviation: 'dxys',
  },
  {
    derivation:
      '《北齐书·酷吏传·卢裴》又伺察官人罪失，动即奏闻，朝士见之，莫不重迹屏气，皆目之为卢校事。”《北史·恩幸传·穆提婆》令萱则自太后以下，皆受其指麾；提婆则唐邕之徒，皆重迹屏气。”',
    example: '无',
    explanation: '指畏惧之甚。',
    pinyin: 'chóng jì bǐng qì',
    word: '重迹屏气',
    abbreviation: 'cjbq',
  },
  {
    derivation: '汉·杨雄《甘泉赋》函甘棠之惠，挟东征之意。”',
    example: '无',
    explanation: '甘棠木名，即棠梨。指对官吏的爱戴。同甘棠之爱”。',
    pinyin: 'gān táng zhī huì',
    word: '甘棠之惠',
    abbreviation: 'gtzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指温柔亲密的情意。',
    pinyin: 'róu qíng mì yì',
    word: '柔情密意',
    abbreviation: 'rqmy',
  },
  {
    derivation: '《诗经·周南·关雎》窈窕淑女，寤寐求之。”',
    example: '无',
    explanation: '比喻迫切地希望得到某种事物。',
    pinyin: 'wù mèi qiú zhī',
    word: '寤寐求之',
    abbreviation: 'wmqz',
  },
  {
    derivation:
      '清·宋荦《漫堂说诗》三至于杜之涵地负，韩之鳌掷鲸呿，尚有所未逮。”',
    example: '无',
    explanation: '比喻文辞气势磅礴，跌宕起伏。同鳌掷鲸吞”。',
    pinyin: 'áo zhì jīng qù',
    word: '鳌掷鲸呿',
    abbreviation: 'azjq',
  },
  {
    derivation:
      '《儿女英雄传》第二六回讲到姐姐今日这喜事，不但有媒有妁，并且不请得是成双成对的媒妁，余外更多着一位月下老人。”',
    example:
      '当然，这都是那些春风满面的少男少女，～，含情脉脉。★俞天白《危栏》',
    explanation: '配成一对，多指夫妻或情侣。',
    pinyin: 'chéng shuāng chéng duì',
    word: '成双成对',
    abbreviation: 'cscd',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '经、纬本指丝织物的纵线和横线，引申为治理、规划。邦国家。指治理国家。',
    pinyin: 'jīng bāng wěi guó',
    word: '经邦纬国',
    abbreviation: 'jbwg',
  },
  {
    derivation:
      '语出《诗·豳风·伐柯》伐柯伐柯，其则不远。”《中庸》引此文，朱熹集注柯，斧柄。则，法也……言人执柯伐木以为柯者，彼柯长短之法，在此柯耳。”',
    example: '至于～，虽取则不远，若夫随手之变，良难以辞逮。★晋·陆机《文赋》',
    explanation: '执斧砍伐斧柄。比喻可就近取法。',
    pinyin: 'cāo fù fá kē',
    word: '操斧伐柯',
    abbreviation: 'cffk',
  },
  {
    derivation: '元·马致远《任风子》第一折争奈他赤手空拳。”',
    example: '老人没了主意，日本兵有枪，他自己～。★老舍《四世同堂》三十五',
    explanation: '赤手空手。两手空空。比喻没有任何依靠。',
    pinyin: 'chì shǒu kōng quán',
    word: '赤手空拳',
    abbreviation: 'cskq',
  },
  {
    derivation:
      '明·屠隆《昙花记·冥司断案》众生多犯悭贪谋夺强占，瘠人肥己，毫厘不舍，共若干起。”',
    example: '无',
    explanation:
      '瘠瘦，引申为悭吝；肥胖，引申为贪婪。对待别人很吝啬，而自己却很贪婪。',
    pinyin: 'jí rén féi jǐ',
    word: '瘠人肥己',
    abbreviation: 'jrfj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指公开行贿受赂。同贿赂公行”。',
    pinyin: 'huò huì gōng xíng',
    word: '货贿公行',
    abbreviation: 'hhgx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言头破血流。多用来形容惨败。',
    pinyin: 'pò tóu làn é',
    word: '破头烂额',
    abbreviation: 'ptle',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第九十七回宝玉一日家和我们姑娘好的蜜里调油，这时候总不见面了，也不知是真病假病。”',
    example:
      '他就合人家好了个～，临走合那个怪哭的只问人家多早晚还瞧他来。（清·文康《儿女英雄传》第三十九回）',
    explanation: '比喻非常亲密和好。',
    pinyin: 'mì lǐ tiáo yóu',
    word: '蜜里调油',
    abbreviation: 'mlty',
  },
  {
    derivation: '宋·陆游《休日感化》宦海风波实饱经，入将人世寄邮亭。”',
    example: '经了这场～，益发心灰意懒。（清·文康《儿女英雄传》第十三回）',
    explanation:
      '宦海旧指官场。旧指官场沉浮，像海洋中的浪涛和大风，变化莫测；亦指官场中出现的风险和波折。',
    pinyin: 'huàn hǎi fēng bō',
    word: '宦海风波',
    abbreviation: 'hhfb',
  },
  {
    derivation: '无',
    example: '这个山区基本上是与世隔绝的。',
    explanation:
      '与社会上的人们隔离，断绝来往。形容隐居或人迹不到的极偏僻地方。',
    pinyin: 'yǔ shì gé jué',
    word: '与世隔绝',
    abbreviation: 'ysgj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '刁钻、油滑、奸邪、诡诈。极其阴险狡猾。',
    pinyin: 'diāo huá jiān zhà',
    word: '刁滑奸诈',
    abbreviation: 'dhjz',
  },
  {
    derivation:
      '权延赤《走下圣坛的周恩来·休息与娱乐》冰峰林立，白云徜徉其间；碧空万里，与皑皑白雪上下辉映，幻化流转着七彩光芒。”',
    example: '二百万年前的一天，～无云，太阳炙烤着大地。★《黄河象》',
    explanation: '万里指面积大，距离长。形容天气晴朗。',
    pinyin: 'bì kōng wàn lǐ',
    word: '碧空万里',
    abbreviation: 'bkwl',
  },
  {
    derivation: '《老子》六十三章夫轻诺必寡信，多易必多难。”',
    example: '佳人应怪我，别后～。记得当初，翦香云为约。★宋·柳永《正宫·尾犯》',
    explanation: '轻易答应人家要求的，一定很少守信用。',
    pinyin: 'guǎ xìn qīng nuò',
    word: '寡信轻诺',
    abbreviation: 'gxqn',
  },
  {
    derivation: '战国·楚·宋玉《神女赋》徊肠伤气，颠倒失据。”',
    example: '无',
    explanation: '肠回转，气伤断。形容内心伤感。',
    pinyin: 'huí cháng shāng qì',
    word: '徊肠伤气',
    abbreviation: 'hcsq',
  },
  {
    derivation:
      '《史记·五帝本纪赞》非好学深思，心知其意，固难为浅见寡闻道也。”',
    example:
      '在这事实发生以前，以我的浅见寡识，是万万想不到的。★鲁迅《华盖集续编的续编·阿Ｑ正传的成因》',
    explanation: '浅见肤浅的见解；寡闻听到的很少。形容见闻不广，所知不多。',
    pinyin: 'qiǎn jiàn guǎ wén',
    word: '浅见寡闻',
    abbreviation: 'qjgw',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第十七回可见字音一道，乃读书人不可忽略的。大贤学问渊博，故视为无关紧要；我们后学，却是不可少的。”',
    example: '无',
    explanation: '紧要急切的，重要的。不重要，不会影响大局。',
    pinyin: 'wú guān jǐn yào',
    word: '无关紧要',
    abbreviation: 'wgjy',
  },
  {
    derivation: '《史记·货殖列传》天下熙熙，皆为利来；天下攘攘，皆为利往。”',
    example: '无',
    explanation: '形容人来人往，非常热闹拥挤。',
    pinyin: 'rǎng lái xī wǎng',
    word: '攘来熙往',
    abbreviation: 'rlxw',
  },
  {
    derivation:
      '宋张栻《答胡季随书》近来士子肯向学者，亦时有之，但实作工夫耐久者极难得也。且是要鞭擗向里，如此下工，方自觉病痛多耳。”',
    example: '无',
    explanation:
      '意指深入剖析，使靠近最里层。形容探求透彻，深入精微。同鞭辟近里”。',
    pinyin: 'biān bì xiàng lǐ',
    word: '鞭擗向里',
    abbreviation: 'bbxl',
  },
  {
    derivation: '西汉·刘安《淮南子·览冥训》于是女娲炼五色石以补苍天。”',
    example: '传说雨花石是～留下的石头。',
    explanation:
      '神话故事，伏羲的妹妹女娲炼五色石补天。形容改造天地的雄伟气魄和大无畏的斗争精神。',
    pinyin: 'nǚ wā bǔ tiān',
    word: '女娲补天',
    abbreviation: 'nwbt',
  },
  {
    derivation:
      '《金瓶梅词话》第一回终日闲游浪荡，一自父母亡后，专一在外眠花宿柳，惹草招风。”',
    example:
      '把他逼得房帏以内，生趣毫无，荆棘满眼，就不免在外～，荡检逾闲。★《儿女英雄传》第五回',
    explanation: '比喻狎妓。',
    pinyin: 'mián huā sù liǔ',
    word: '眠花宿柳',
    abbreviation: 'mhsl',
  },
  {
    derivation:
      '蔡东藩、许廑父《民国通俗演义》第一二六回吴帅无论怎样威望，怎比得上老帅的勋高望重，震古烁今。”',
    example: '无',
    explanation: '烁光亮的样子。震动古代，显耀当世。形容事业或功绩非常伟大。',
    pinyin: 'zhèn gǔ shuò jīn',
    word: '震古烁今',
    abbreviation: 'zgsj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不避艰险。同水火不避”。',
    pinyin: 'shuǐ huǒ bù cí',
    word: '水火不辞',
    abbreviation: 'shbc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指胡扯，瞎说。',
    pinyin: 'lǘ chún mǎ zī',
    word: '驴唇马觜',
    abbreviation: 'lcmz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻变化迅速。',
    pinyin: 'huáng chén qīng shuǐ',
    word: '黄尘清水',
    abbreviation: 'hcqs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '双方力量相等，不分高低。同势均力敌”。',
    pinyin: 'shì jūn lì dí',
    word: '势钧力敌',
    abbreviation: 'sjld',
  },
  {
    derivation:
      '元·无名氏《看钱奴》第二折饿的我肚里饥失魂丧魄，冻的我身上冷无颜落色。”',
    example: '那知我福气薄，叫神鬼支使的～。★清·曹雪芹《红楼梦》第一百七回',
    explanation:
      '魂、魄旧指人身中离开形体能存在的精神为魂，依附形体而显现的精神为魄。形容惊慌忧虑、心神不定、行动失常的样子。',
    pinyin: 'shī hún luò pò',
    word: '失魂落魄',
    abbreviation: 'shlp',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第二十五回曹操指山下颜良排的阵势，旗帜鲜明，枪刀森布，严整有威，乃谓关公曰‘河北人马，如此雄壮！’关公曰‘以吾观之，如土鸡瓦犬耳！’”',
    example: '无',
    explanation: '用泥捏的鸡，用瓦做的狗。比喻徒有虚名而无实用的东西。',
    pinyin: 'tǔ jī wǎ quǎn',
    word: '土鸡瓦犬',
    abbreviation: 'tjwq',
  },
  {
    derivation: '《列子·黄帝》自此之后，范氏门徒，路遇乞儿马医，弗敢辱也。”',
    example: '既与～同贱，为民请命，是其故常。★章炳麟《驳神我宪政说》',
    explanation: '乞儿乞丐；马医兽医中专治马病的人。旧指卑贱的人。',
    pinyin: 'qǐ ér mǎ yī',
    word: '乞儿马医',
    abbreviation: 'qemy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '敬奉天命，爱护百姓。',
    pinyin: 'jìng tiān ài mín',
    word: '敬天爱民',
    abbreviation: 'jtam',
  },
  {
    derivation:
      '《秉烛谈》招贤大师赠一偈曰百丈竿头不动人，虽然得人未为真。百丈竿头须进步，十方世界是全身。”',
    example: '无',
    explanation: '竿头竹竿尖头；上上升。比喻学业进步很快。',
    pinyin: 'gān tóu rí shàng',
    word: '竿头日上',
    abbreviation: 'gtrs',
  },
  {
    derivation:
      '《后汉书·刘盆子传》帝曰‘卿所谓铁中铮铮，佣中佼佼者也。’”李贤注佼，好貌也……言佼佼者，凡佣之人稍为胜也。”',
    example: '无',
    explanation: '指在平凡之人中才能较为特出。',
    pinyin: 'yòng zhōng jiǎo jiǎo',
    word: '佣中佼佼',
    abbreviation: 'yzjj',
  },
  {
    derivation:
      '明·唐顺之《答曾石塘总制》使继此而进以秉钧持轴，则夫不动声色而坐销天下之隐忧。',
    example: '无',
    explanation: '执政掌权。',
    pinyin: 'bǐng jūn chí zhóu',
    word: '秉钧持轴',
    abbreviation: 'bjcz',
  },
  {
    derivation:
      '明·张景《飞丸记·园中落穽》若要行刺呵，要隐。当遁迹潜形，翦蔓除根才事稳。”',
    example: '无',
    explanation: '遁、潜隐藏。迹、形踪迹，形迹。指隐藏踪纪身形。',
    pinyin: 'dùn jì qián xíng',
    word: '遁迹潜形',
    abbreviation: 'djqx',
  },
  {
    derivation: '唐·李白《采莲曲》岸上谁家游冶郎，三三五五映垂杨。”',
    example:
      '却有那恶薄同袍，轻浮年少，～，去看苏秀才前妻。★明·东鲁古狂生《醉醒石》第十四回',
    explanation: '三个一群，五个一伙。',
    pinyin: 'sān sān wǔ wǔ',
    word: '三三五五',
    abbreviation: 'ssww',
  },
  {
    derivation:
      '南朝·宋·谢灵运《拟魏太子邺中集诗序》天下良辰、美景、赏心、乐事，四者难并。”',
    example: '想人生，～堪惜。★宋·聂冠卿《多丽·李艮定公席上赋》',
    explanation: '良美好；辰时辰。美好的时光和景物。',
    pinyin: 'měi jǐng liáng chén',
    word: '美景良辰',
    abbreviation: 'mjlc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '鸮鸟的心，黄鹂的鸣声。比喻居心狠毒，但说话动听。',
    pinyin: 'xiāo xīn lí shé',
    word: '鸮心鹺舌',
    abbreviation: 'xxls',
  },
  {
    derivation:
      '郭沫若《反正前后》第一篇他一进一出要受学生们的冷嘲热骂，然而也不能不忍耐着装聋卖哑。”',
    example: '无',
    explanation: '尖刻的嘲笑和谩骂。',
    pinyin: 'lěng cháo rè mà',
    word: '冷嘲热骂',
    abbreviation: 'lcrm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻英勇善战、行动迅捷的军队。',
    pinyin: 'shén bīng tiān jiāng',
    word: '神兵天将',
    abbreviation: 'sbtj',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第四十回当时同多九公议定，把兰音，若花送了过去。二人摸不着头脑，又不敢违拗，只得暂且住下。”',
    example:
      '那人低着头，亦看不出面貌。羊统领满腹狐疑更是～。★清·李宝嘉《官场现形记》第三十一回',
    explanation: '指弄不清是怎么回事。',
    pinyin: 'mō bù zháo tóu nǎo',
    word: '摸不着头脑',
    abbreviation: 'mbztn',
  },
  {
    derivation:
      '唐·杜牧《隋苑（红霞一抹广陵春）》诗却笑丘墟隋炀帝，破家亡国誊谁人？”',
    example: '却笑吃虚隋炀帝，～为何人。★唐·李商隐《定子（檀槽一抹广陵春）》诗',
    explanation: '国家覆灭、家庭毁灭。',
    pinyin: 'pò jiā wáng guó',
    word: '破家亡国',
    abbreviation: 'pjwg',
  },
  {
    derivation: '《孔子家语·屈节解》民寒耕热耘，曾不得食。”',
    example: '无',
    explanation: '泛指农作辛苦。',
    pinyin: 'hán gēng rè yùn',
    word: '寒耕热耘',
    abbreviation: 'hgry',
  },
  {
    derivation: '《后汉书·霍胥传》光之所至，情既可原，而守阙连年，终不见理。”',
    example: '他既不是存心去参加，似乎～。★叶圣陶《一个练习生》',
    explanation: '按情理，有可原谅的地方。',
    pinyin: 'qíng yǒu kě yuán',
    word: '情有可原',
    abbreviation: 'qyky',
  },
  {
    derivation: '晋·李密《陈情表》臣少多疾病，九岁不行。零丁孤苦，至于成立。”',
    example:
      '头里有老太太，到底还疼我些；如今也死了，留下我～，如何了局？★清·曹雪芹《红楼梦》第一一二回',
    explanation: '伶仃孤独，没有依靠。孤单困苦，没有依靠。',
    pinyin: 'gū kǔ líng dīng',
    word: '孤苦伶仃',
    abbreviation: 'gkld',
  },
  {
    derivation:
      '清·杨懋建《帝城花样·纫芗传》当万葩竞秀时，培植妙卉，寸土尺金，顾令此无足重轻之小草，蔓延庭阶，大是恨事。”',
    example: '无',
    explanation: '比喻土地收益极高，极其贵重。',
    pinyin: 'cùn tǔ chǐ jīn',
    word: '寸土尺金',
    abbreviation: 'ctcj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '衣食无着，又饿又冷。形容生活极端贫困。同饥寒交迫”。',
    pinyin: 'jī hán jiāo zhì',
    word: '饥寒交至',
    abbreviation: 'jhjz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指了解客观形势。',
    pinyin: 'tōng shí dá wù',
    word: '通时达务',
    abbreviation: 'tsdw',
  },
  {
    derivation: '明·宋濂《走笔送金贤良》诗蛋雨蛮烟十年梦，龙韬豹略一生心。”',
    example: '无',
    explanation: '指兵法。',
    pinyin: 'lóng tāo bào lüè',
    word: '龙韬豹略',
    abbreviation: 'ltbl',
  },
  {
    derivation:
      '唐·李白《答王十二寒夜独钓有怀》诗世人闻此皆掉头，有如东风射马耳。”',
    example:
      '我当初劝谏你多少来，你就当东风吹马耳，反被旁人说我是苛待妾的，今日你可省得了！★清·黄小配《廿载繁华梦》第四十回',
    explanation: '比喻把别人的话当作耳边风。',
    pinyin: 'dōng fēng mǎ ěr',
    word: '东风马耳',
    abbreviation: 'dfme',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容自由自在，没有牵挂。同无拘无束”。',
    pinyin: 'wú jū wú fù',
    word: '无拘无缚',
    abbreviation: 'wjwf',
  },
  {
    derivation:
      '宋·陆游《雍煕请机老疏》伏望尊官长者，达士通人，共燃续慧命灯，不惜判虚空笔，起难遭想，结果胜缘。”',
    example: '无',
    explanation: '通人学识渊博贯通古今的人。指心胸豁达，学识渊博的人。',
    pinyin: 'dá shì tōng rén',
    word: '达士通人',
    abbreviation: 'dstr',
  },
  {
    derivation: '明·朱有燉《灵芝庆寿》第一折皆因中国雨顺风调，民安物阜。”',
    example:
      '可见当时君明臣良，～，致治之隆非无故也。（清·郑观应《盛世危言·吏治下》）',
    explanation: '阜多。人民平安，物产丰富。形容社会安定，经济繁荣的景象。',
    pinyin: 'mín kāng wù fù',
    word: '民康物阜',
    abbreviation: 'mkwf',
  },
  {
    derivation:
      '《晋书·阮修传》常步行，以百姓挂杖头，至酒店，便独酣畅。”宋·欧阳修《释秘演诗集序》无所放其意，则往往从布衣野老，酣嬉淋漓，颠倒而不厌。”',
    example:
      '老舍先生写老张的钱本位”的哲学，确乎是～，阐扬尽致。★朱自清《〈老张的哲学〉与〈赵子曰〉》',
    explanation: '酣畅畅饮，引伸为舒适、畅快；淋漓畅快的样子。形容非常畅快。',
    pinyin: 'hān chàng lín lí',
    word: '酣畅淋漓',
    abbreviation: 'hcll',
  },
  {
    derivation: '唐·王勃《九成宫颂》一阴一阳，神道也。乃文乃武，圣图也。”',
    example: '无',
    explanation: '赞美人文、武兼备。见乃武乃文。',
    pinyin: 'nǎi wén nǎi wǔ',
    word: '乃文乃武',
    abbreviation: 'nwnw',
  },
  {
    derivation: '宋·陈亮《念奴娇·登多景楼》词鬼设神使，浑认作、天限南疆北界。”',
    example: '无',
    explanation: '指天造地设，非人力所能成就。',
    pinyin: 'guǐ shè shén shǐ',
    word: '鬼设神使',
    abbreviation: 'gsss',
  },
  {
    derivation: '无',
    example: '他采取土洋结合的办法解决了这个难题。',
    explanation: '把简单的设备或技术同现代化的设备或技术结合起来。',
    pinyin: 'tǔ yáng jié hé',
    word: '土洋结合',
    abbreviation: 'tyjh',
  },
  {
    derivation:
      '周立波《暴风骤雨》第一部九他屋里的，瘦骨梭梭的，一天愁到黑，愁米、愁柴又愁盐。”',
    example:
      '木木姐惊慌地赶进门去，正好撞见那个白面鬼耸着～的肩膀，气虎虎地跨着大步跑出来。★王西彦《古城的忧郁》',
    explanation: '形容人或动物消瘦露骨。',
    pinyin: 'shòu gǔ léng léng',
    word: '瘦骨梭棱',
    abbreviation: 'sgll',
  },
  {
    derivation:
      '清·李宝嘉《文明小史》第二回倘有一长半短，岂不于我的风水也有关碍？”',
    example: '无',
    explanation: '指意外的灾祸或事故。同一长二短”。',
    pinyin: 'yī cháng bàn duǎn',
    word: '一长半短',
    abbreviation: 'ycbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '居心存心；险阴险；恶恶毒。心地阴险恶毒。',
    pinyin: 'jū xīn xiǎn è',
    word: '居心险恶',
    abbreviation: 'jxxe',
  },
  {
    derivation: '《论语·颜渊》一朝之忿，忘其身，以及其亲，非惑与？”',
    example: '小人～，曾身之不遑恤，非其性之尽也。★《二程全书·粹言二》',
    explanation: '朝早晨；忿气忿。一时的气忿。',
    pinyin: 'yī zhāo zhī fèn',
    word: '一朝之忿',
    abbreviation: 'yzzf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '小心胆怯张望的样子。',
    pinyin: 'tàn tóu suō nǎo',
    word: '探头缩脑',
    abbreviation: 'ttsn',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指无可奈何。',
    pinyin: 'wú rú nài hé',
    word: '无如奈何',
    abbreviation: 'wrnh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻贫穷人家。同瓮牖绳枢”。',
    pinyin: 'wèng yǒu sāng shū',
    word: '瓮牖桑枢',
    abbreviation: 'wyss',
  },
  {
    derivation:
      '老舍《鼓书艺人》十九她遭到了不幸，比个寡妇还不如。往后怎么办？想到这里，她心里火烧火燎，呆呆坐着，急得一身汗。”',
    example: '无',
    explanation: '燎烧。被火烧烤。比喻心里非常着急或身上热得难受。',
    pinyin: 'huǒ shāo huǒ liǎo',
    word: '火烧火燎',
    abbreviation: 'hshl',
  },
  {
    derivation:
      '冯德英《苦菜花》第十章敌人围得甚紧，村外又是一马平川，敌人展开重火力，我们几次冲锋都被敌人压回来了。”',
    example: '这里～，连座小山也没有。',
    explanation:
      '平川地势平坦的地方。能够纵马疾驰的一片广阔平地。指广阔的平原。',
    pinyin: 'yī mǎ píng chuān',
    word: '一马平川',
    abbreviation: 'ympc',
  },
  {
    derivation:
      '《三国志·吴书·孙林传》因缘肺腑，位极人臣。”北魏·杨衒之《洛阳伽蓝记·高阳王寺》贵极人臣，富兼山海，居止第宅，匹于帝宫。”',
    example: '无',
    explanation: '君主时代指大臣中地位最高的人。',
    pinyin: 'guì jí rén chén',
    word: '贵极人臣',
    abbreviation: 'gjrc',
  },
  {
    derivation: '高珪《岳坟感赋》诗东海鲸波谁可靖，只今惜少岳家军。”',
    example: '无',
    explanation: '东海上的汹涌波涛。比喻来自东方的侵略。',
    pinyin: 'dōng hǎi jīng bō',
    word: '东海鲸波',
    abbreviation: 'dhjb',
  },
  {
    derivation:
      '晋·陈寿《三国志·魏书·文帝纪》今吾德至薄也，人至鄙也，遭遇际会，幸承先王馀业，恩未被四海，泽未及天下，虽倾仓竭府以振魏国百姓，犹寒者未尽暖，饥者未尽饱。”',
    example: '～，毕力遐方。★唐·房玄龄《晋书·宣帝纪》',
    explanation: '犹言逢遇时机。',
    pinyin: 'zāo yù jì huì',
    word: '遭遇际会',
    abbreviation: 'zyjh',
  },
  {
    derivation:
      '汉·韩婴《韩诗外传》卷七使骥不得伯乐，安得千里之足。”唐·韩愈《杂说》四世有伯乐，然后有千里马。千里马常有，而伯乐不常有。”',
    example: '无',
    explanation:
      '伯乐相传为秦穆公时的人，姓孙名阳，善相马。指个人或集体发现、推荐、培养和使用人才的人。',
    pinyin: 'bó lè xiàng mǎ',
    word: '伯乐相马',
    abbreviation: 'blxm',
  },
  {
    derivation: '唐·孙揆《灵应传》众寡不敌，三战三北。”',
    example:
      '群众是浮躁，急不可待的。忍耐不过，～，自难免日久变生，越发不可收拾。★鲁迅《两地书·二一》',
    explanation: '众多；寡少；敌抵挡。少数敌不过多数。',
    pinyin: 'zhòng guǎ bù dí',
    word: '众寡不敌',
    abbreviation: 'zgbd',
  },
  {
    derivation:
      '宋·叶梦得《避暑录话》卷下己酉冬，金自江西犯饶信，所在居民皆空城去，颠仆流离道上。”',
    example: '无',
    explanation:
      '由于灾荒或战乱而流转离散。形容生活艰难，四处流浪。同颠沛流离”。',
    pinyin: 'diān pú liú lí',
    word: '颠仆流离',
    abbreviation: 'dpll',
  },
  {
    derivation: '《汉书·匈奴传下》故北狄不服，中国未得高枕安寝也。”',
    example: '与妇共视被中人，～，正是其形，了无一异。★晋·陶潜《搜神后记》卷三',
    explanation: '垫高枕头安心地睡觉。形容无忧无虑。平安无事。同高枕而卧”。',
    pinyin: 'gāo zhěn ān qǐn',
    word: '高枕安寝',
    abbreviation: 'gzaq',
  },
  {
    derivation: '明·罗贯中《三国演义》第一百五回此事当深虑远议，不可造次。”',
    example: '无',
    explanation: '造次急遽，匆忙。不能匆匆忙忙地进行。意为要慎重。',
    pinyin: 'bù kě zào cì',
    word: '不可造次',
    abbreviation: 'bkzc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指趁势行事。同借水推船”。',
    pinyin: 'jiè shuǐ xíng zhōu',
    word: '借水行舟',
    abbreviation: 'jsxz',
  },
  {
    derivation:
      '《史记·货殖列传》汉兴，海内为一，开关梁，弛山泽之禁，是以富商大贾周流天下，交易之物莫不通，得其所欲，而徒豪杰诸侯于京师。”',
    example:
      '历史上有名的～，像陶朱、猗顿、计然、白圭，络绎出现了。★郭沫若《奴隶制的下限在春秋与战国之交》',
    explanation: '指拥有大量钱财的商人。',
    pinyin: 'fù shāng dà jiǎ',
    word: '富商大贾',
    abbreviation: 'fsdj',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '战战备。危危险，危机。国虽大，好战必亡，天下虽平，忘记了战备就一定会产生危机。',
    pinyin: 'wàng zhàn bì wēi',
    word: '忘战必危',
    abbreviation: 'wzbw',
  },
  {
    derivation:
      '《宋书·志序》司马迁制一家之言，始区别名题，至乎礼仪刑政，有所不尽，乃于纪传之外，创立八书，片文只事，鸿纤备举。”',
    example: '无',
    explanation: '指零碎不全的佚文轶事。',
    pinyin: 'piàn wén zhī shì',
    word: '片文只事',
    abbreviation: 'pwzs',
  },
  {
    derivation: '《宋史·陈良翰传》无术，第公此心，如虚堂悬镜耳。”',
    example: '无',
    explanation: '旧时比喻地方官廉明公正。',
    pinyin: 'xū táng xuán jìng',
    word: '虚堂悬镜',
    abbreviation: 'xtxj',
  },
  {
    derivation: '《左传·文公三年》秦伯伐晋，济河楚舟。”',
    example:
      '若文度来，我以偏师待之；康伯来，～。★南朝·宋·刘义庆《世说新语·言语》',
    explanation: '济渡；焚烧。渡过了河，把般烧掉。比喻有进无退，决一死战。',
    pinyin: 'jì hé fén zhōu',
    word: '济河焚舟',
    abbreviation: 'jhfz',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '禁制止。正纠正。抑制强暴势力，治理混乱局面；或禁除暴行，根治叛乱。亦作禁暴止乱”、禁暴诛乱”、禁乱除暴”、救乱除暴”、拨乱诛暴”、止暴',
    pinyin: 'jìn bào zhèng luàn',
    word: '禁暴正乱',
    abbreviation: 'jbzl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹死有余辜。形容罪大恶极，即使处死刑也抵偿不了他的罪恶。',
    pinyin: 'sǐ yǒu yú zhū',
    word: '死有余诛',
    abbreviation: 'syyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻借他人之力办事。',
    pinyin: 'jiè péng shǐ fēng',
    word: '借篷使风',
    abbreviation: 'jpsf',
  },
  {
    derivation: '汉·荀悦《汉纪·武帝纪四》富者田连阡陌，贫者无立锥之地。”',
    example: '无',
    explanation: '阡陌田间小路。形容田地方袤，接连不断。',
    pinyin: 'tián lián qiān mò',
    word: '田连阡陌',
    abbreviation: 'tlqm',
  },
  {
    derivation:
      '《尚书·仲虺之诰》有夏昏德，民坠涂炭。”《晋书·苻丕载记》先帝晏驾贼庭，京师鞠为戎穴，神州萧条，生灵涂炭。”',
    example:
      '狼心狗行之辈，滚滚当道，奴颜婢膝之徒，纷纷秉政。以致社稷丘墟，～。★明·罗贯中《三国演义》第九十三回',
    explanation: '涂泥淖。形容老百姓像陷入泥坑、掉进火坑那样痛苦。',
    pinyin: 'cāng shēng tú tàn',
    word: '苍生涂炭',
    abbreviation: 'cstt',
  },
  {
    derivation: '《老子》第四十五章大直若屈，大巧若拙，大辨若讷。”',
    example: '无',
    explanation: '拙笨。指真正聪明的人，不显露自己，从表面看，好象笨拙。',
    pinyin: 'dà qiǎo ruò zhuō',
    word: '大巧若拙',
    abbreviation: 'dqrz',
  },
  {
    derivation:
      '宋·黄庭坚《豫章文集·卷二十六·跋俞秀老清老诗颂》清老往与余共学于涟水，其傲睨万物，滑稽以玩世，白首不哀”。',
    example:
      '更有那放荡不羁，～，偏低首下心，作儿女之态。★清·魏秀仁《花月痕》第一回',
    explanation: '睨斜视。斜着眼看一切事物。形容目空一切，什么都瞧不起。',
    pinyin: 'ào nì yī qiè',
    word: '傲睨一切',
    abbreviation: 'anyq',
  },
  {
    derivation:
      '宋·李纲《宫词谢表》众毁销骨，虽贻投抒之嗟；太阳中天，必冀容光之照。”',
    example: '无',
    explanation: '指众多的毁谤，可以销熔人的骨骼。比喻谗言多可以混淆是非。',
    pinyin: 'zhòng huǐ xiāo gǔ',
    word: '众毁销骨',
    abbreviation: 'zhxg',
  },
  {
    derivation:
      '清·昭梿《啸亭杂录·梁提督》自丛岚叠嶂间以刀掘路，士卒各怀一铁钉，踵迹相接，攀钉而上。”',
    example: '无',
    explanation: '谓脚迹相连。形容人数众多，接连不断。同踵趾相接”。',
    pinyin: 'zhǒng jì xiāng jiē',
    word: '踵迹相接',
    abbreviation: 'zjxj',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '听到有人吃饭噎了一下，自己就连饭也不吃了。比喻因为怕出问题，索性不干。',
    pinyin: 'wén yē fèi shí',
    word: '闻噎废食',
    abbreviation: 'wyfs',
  },
  {
    derivation:
      '好古主人《赵太祖三下南唐》第四十五回今朕作主，准赐婚配。花之慈母亦无不俯依之理，况又与前四少将御侄等撮合，如出一辙。更见姻缘相配出于千古奇闻也。”',
    example:
      '一个信洋教的恶霸，敢说拿孔门弟子开刀，真乃～！奇闻！★老舍《神拳》第二幕',
    explanation: '奇闻惊奇动听的事情。少有的使人惊奇的事情。',
    pinyin: 'qiān gǔ qí wén',
    word: '千古奇闻',
    abbreviation: 'qgqw',
  },
  {
    derivation: '唐·王维《重酬苑郎中》诗扬子《解嘲》徒自遣，冯唐已老复何论。”',
    example: '谢杋每篇堪讽诵，～听吹嘘。★唐·杜甫《寄岑嘉州》诗',
    explanation:
      '汉朝冯唐身历三朝，到武帝时，举为贤良，但年事已高不能为官。感慨生不逢时或表示年寿老迈。同冯唐易老”。',
    pinyin: 'féng táng yǐ lǎo',
    word: '冯唐已老',
    abbreviation: 'ftyl',
  },
  {
    derivation: '清·石玉昆《三侠五义》第十二回闻得包公秉正无私，不畏权势。”',
    example: '可又俨然是为了工作，～！★康濯《春种秋收·三面宝镜》',
    explanation: '主持正义，没有私念。',
    pinyin: 'bǐng zhèng wú sī',
    word: '秉正无私',
    abbreviation: 'bzws',
  },
  {
    derivation:
      '汉·陈宠《清盗源疏》臣闻轻者重之端，小者大之源，故堤溃蚁孔，气泄针芒，是以明者慎微，智者识几。”',
    example: '无',
    explanation: '堤坝因蚂蚁洞而崩溃。比喻忽视小处会酿成大祸。',
    pinyin: 'dī kuì yǐ kǒng',
    word: '堤溃蚁孔',
    abbreviation: 'dkyk',
  },
  {
    derivation:
      '明·吴承恩《西游记》第八十九回他三人辞了师父，在城外大显神通。”',
    example:
      '惟有召西乃明心见性之人，学佛未成者来，～，将此辈一扫而空之。★清·袁枚《续子不语》卷五',
    explanation:
      '神通原为佛家语，指无所不能的力量◇指特别高超的本领。形容充分显示出高明的本领。',
    pinyin: 'dà xiǎn shén tōng',
    word: '大显神通',
    abbreviation: 'dxst',
  },
  {
    derivation: '姚华《曲海一勺》折揽胜登临，亦传啸傲湖山之作。”',
    example: '无',
    explanation: '啸傲随意长啸吟咏游乐。在江湖山野中自由自在地吟咏游赏。',
    pinyin: 'xiào ào hú shān',
    word: '啸傲湖山',
    abbreviation: 'xahs',
  },
  {
    derivation:
      '《商君书·赏刑》故禁奸止过，莫若重刑；刑重而必得，则民不敢试，故国无刑民。国无刑民，故曰‘明刑不戮。’”',
    example: '无',
    explanation: '指刑罚严明，人民就很少犯法而被杀。',
    pinyin: 'míng xíng bù lù',
    word: '明刑不戮',
    abbreviation: 'mxbl',
  },
  {
    derivation:
      '《魏书·郭祚传》是以先王沿物之情，为之轨法，故八刑备于昔典，奸律炳于来制，皆所以谋其始迹，访厥成罪，敦风厉俗，永资世范者也。”',
    example: '无',
    explanation: '使民风纯朴敦厚。',
    pinyin: 'dūn fēng lì sú',
    word: '敦风厉俗',
    abbreviation: 'dfls',
  },
  {
    derivation: '清·王夫之《读通鉴论·后汉光武二十》仁人之言，其利溥如此哉！”',
    example: '号电诵悉，关怀桑梓，～，至堪钦佩。★孙中山《致上海各粤侨团体书》',
    explanation: '指有德行的人说的话益处很大。',
    pinyin: 'rén yán lì pǔ',
    word: '仁言利溥',
    abbreviation: 'rylp',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '图谋求，设法。厉奋勉。治治理。振奋精神，设法把国家治理好。亦作励精图治”、厉精求治”、厉精为治”。',
    pinyin: 'lì jīng tú zhì',
    word: '厉精图治',
    abbreviation: 'ljtz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指不费心机，反而越来越好。',
    pinyin: 'xīn yì rì xiū',
    word: '心逸日休',
    abbreviation: 'xyrx',
  },
  {
    derivation:
      '明·凌濛初《二刻拍案惊奇》卷十七舍人是簪缨世胄，况又是黉宫名士，指日飞腾，岂分什么文武门楣？”',
    example: '无',
    explanation: '指世代做官的人家.。',
    pinyin: 'zān yīng shì zhòu',
    word: '簪缨世胄',
    abbreviation: 'zysz',
  },
  {
    derivation: '《金瓶梅词话》第七二回人喧呼海沸波翻，马嘶喊山崩地裂。”',
    example: '无',
    explanation: '比喻声势或力量极大。同海沸江翻”。',
    pinyin: 'hǎi fèi bō fān',
    word: '海沸波翻',
    abbreviation: 'hfbf',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第七十一回老太太也太想的到。实在我们年轻力壮的人，捆上十个也赶不上。”',
    example: '无',
    explanation: '壮健壮。年纪轻，体力强。',
    pinyin: 'nián qīng lì zhuàng',
    word: '年轻力壮',
    abbreviation: 'nqlz',
  },
  {
    derivation: '南朝·宋·刘义庆《世说新语·赏誉下》士龙为人，文弱可爱。”',
    example: '无',
    explanation: '文弱文雅而体弱。举目文雅，身体柔弱的读书人。',
    pinyin: 'wén ruò shū shēng',
    word: '文弱书生',
    abbreviation: 'wrss',
  },
  {
    derivation: '战国·楚·宋玉《神女赋》徊肠伤气，颠倒失据。”',
    example: '无',
    explanation: '肠回转，气伤断。形容内心伤感。',
    pinyin: 'huí cháng shāng qì',
    word: '徊肠伤气',
    abbreviation: 'hcsq',
  },
  {
    derivation:
      '清·李渔《玉搔头飞舸》只要你忙上紧赶得那人近至尊，便是分茅锡土也非吾吝。”',
    example: '无',
    explanation: '指分封侯位和土地。',
    pinyin: 'fēn máo xī tǔ',
    word: '分茅锡土',
    abbreviation: 'fmxt',
  },
  {
    derivation:
      '明·董说《西游补》第六回忽有一对侍儿跪在面前，请大王娘娘赴宴，行者暗想道‘我还不要千依万顺。’”',
    example:
      '第三，但是潘侯爷来了，不论什么客人在房间里头，都要让他。沉二宝如何不肯？～，满口应承。★清·张春帆《九尾龟》第一百六十七回',
    explanation: '形容非常顺从。同千依百顺”。',
    pinyin: 'qiān yī wàn shùn',
    word: '千依万顺',
    abbreviation: 'qyws',
  },
  {
    derivation: '元·岳伯川《铁拐李》第一折不是我千错万错，大刚来一还一报。”',
    example:
      '黛玉听了笑道阿弥陀佛。到底是我的好姐姐。你一般也遇见对子了。可知～，不爽不错的。★清·曹雪芹《红楼梦》第十九回',
    explanation: '指做一件坏事后必受一次报复。',
    pinyin: 'yī huán yī bào',
    word: '一还一报',
    abbreviation: 'yhyb',
  },
  {
    derivation:
      '清·龚自珍《己卯自春徂夏在京师作》诗之七十年提倡受思身，惨绿年华记忆真。”',
    example:
      '喜狎俊少，见有翩翩白袷～者，纡望连而不置。★清·二石生《十洲春语》卷上',
    explanation: '指风华正茂的青年时期。',
    pinyin: 'cǎn lǜ nián huá',
    word: '惨绿年华',
    abbreviation: 'clnh',
  },
  {
    derivation:
      '《魏书·高祖纪下》虽不足纲范万度，永垂不朽，且可释滞目前，釐整时务。”',
    example:
      '小将军丹心忠义，为国捐躯，青史简篇，～，亦不辜负将军教养之功。★明·许仲琳《封神演义》第七十四回',
    explanation:
      '垂留传后世；朽腐烂，磨灭。指光辉的事纪伟大的精神永远流传，不会磨灭。',
    pinyin: 'yǒng chuí bù xiǔ',
    word: '永垂不朽',
    abbreviation: 'ycbx',
  },
  {
    derivation: '清·陈裴之《汀烟小录·闰湘居士序》个侬吹气如兰，奉身如玉。”',
    example:
      '彭羡门惊才绝艳，词家推为独步。王阮亭称其～，每当十郎，辄自愧伧父。★清·王晫《今世说·企羡》',
    explanation: '气息象兰花那样香。形容美女的呼吸。也用于形容文词华美。',
    pinyin: 'chuī qì rú lán',
    word: '吹气如兰',
    abbreviation: 'cqrl',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第六十九回告谕城内居民，尽张灯结彩，庆赏佳节。”',
    example: '国庆节期间，广场上～，好不热闹。',
    explanation: '挂上灯笼，系上彩绸。形容节日或有喜庆事情的景象。',
    pinyin: 'zhāng dēng jié cǎi',
    word: '张灯结彩',
    abbreviation: 'zdjc',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第二十六回这位姑娘虽是细针密缕的一个心思，却是海阔天空的一个性气。”',
    example: '无',
    explanation: '缕线。针线细密。比喻工作细致或处理事情周到。',
    pinyin: 'xì zhēn mì lǚ',
    word: '细针密缕',
    abbreviation: 'xzml',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指男女偷情。同逾墙钻穴”。',
    pinyin: 'yú qiáng zuàn pín',
    word: '逾墙钻蠙',
    abbreviation: 'yqzp',
  },
  {
    derivation:
      '晋·杨泉《物理论》夫清忠之士，乃千人之表，万人之英。得其人则事易于反手；不得其人，则难于拔筋。”',
    example: '无',
    explanation: '犹易如反掌。比喻事情非常容易做。',
    pinyin: 'yì yú fǎn shǒu',
    word: '易于反手',
    abbreviation: 'yyfs',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '动常常，动不动。中切中，打中。竨空处、中空。要要害。要引申为要害、关键。常常切中要害或抓住问题的关键。',
    pinyin: 'dòng zhōng zhe yào',
    word: '动中竨要',
    abbreviation: 'dzzy',
  },
  {
    derivation: '闻一多《贾岛》眼看见前进也是枉然，不要说他们早已声嘶力竭。”',
    example: '无',
    explanation: '嘶哑；竭尽。嗓子喊哑，气力用尽。形容竭力呼喊。',
    pinyin: 'shēng sī lì jié',
    word: '声嘶力竭',
    abbreviation: 'sslj',
  },
  {
    derivation:
      '《诗经·鄘风·相鼠》相鼠有皮，人而无仪（通义”）；人而无仪，不死何为！”',
    example: '无',
    explanation: '相视。看看老鼠尚且还有皮。旧指人须知廉耻，要讲礼义。',
    pinyin: 'xiàng shǔ yǒu pí',
    word: '相鼠有皮',
    abbreviation: 'xsyp',
  },
  {
    derivation:
      '清·昭槤《啸亭杂录·朱白泉狱中上百朱二公书》今以愚昧，于此获罪，所知为之流涕，路人为之叹息。抚躬自问，为幸多矣！”',
    example: '无',
    explanation: '反躬自问，指自我反省。',
    pinyin: 'fǔ gōng zì wèn',
    word: '抚躬自问',
    abbreviation: 'fgzw',
  },
  {
    derivation:
      '郭澄清《大刀记》第七章叫我看，一进了他们这个大染缸，就全变成一路货色了。”',
    example: '无',
    explanation: '一路同一类；货色货物。比喻同一类丑货。',
    pinyin: 'yī lù huò sè',
    word: '一路货色',
    abbreviation: 'ylhs',
  },
  {
    derivation:
      '郭沫若《洪波曲》第五章一武汉三镇，自北伐以来，在刀光血影之下已经窒息了整整十年。”',
    example: '在～面前，他昂然直视。★胡旷《短促而光辉的生命》',
    explanation: '形容血腥的杀戮。',
    pinyin: 'dāo guāng xuè yǐng',
    word: '刀光血影',
    abbreviation: 'dgxy',
  },
  {
    derivation: '明·施耐庵《水浒传》第十三回指挥说地谈天口，来诱翻江搅海人。”',
    example: '无',
    explanation: '天上地下，无所不谈。形容话题广泛或巧于言辞。',
    pinyin: 'shuō dì tán tiān',
    word: '说地谈天',
    abbreviation: 'sdtt',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '对平凡人物的蔑称。',
    pinyin: 'wú míng xiǎo bèi',
    word: '无名小辈',
    abbreviation: 'wmxb',
  },
  {
    derivation:
      '李准《两代人》三不能大大落落的，一定得认真负责，多向支部汇报，争蕊助。”',
    example: '无',
    explanation: '形容态度大方。亦形容随随便便，满不在乎。',
    pinyin: 'dà dà luò luò',
    word: '大大落落',
    abbreviation: 'ddll',
  },
  {
    derivation:
      '唐·韩愈《送石处士序》若驷马驾轻车就熟路，而王良、造父为之先后也。”',
    example: '逸气轩眉宇，似王良～，骅骝欲舞。★宋·辛弃疾《贺新郎》词',
    explanation: '赶着装载很轻的车子走熟悉的路。比喻事情又熟悉又容易。',
    pinyin: 'qīng chē shú lù',
    word: '轻车熟路',
    abbreviation: 'qcsl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '琼美玉。比喻人的资质洁净纯美。',
    pinyin: 'qióng lín yù zhì',
    word: '琼林玉质',
    abbreviation: 'qlyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指屡次，多次。',
    pinyin: 'sān fān liǎng cì',
    word: '三番两次',
    abbreviation: 'sflc',
  },
  {
    derivation:
      '罗来勇《世界在他们眼前展开》我们的声誉就是实力--遥遥领先的技术和工艺。”',
    example: '无',
    explanation: '遥遥远远。远远地走在最前面。',
    pinyin: 'yáo yáo lǐng xiān',
    word: '遥遥领先',
    abbreviation: 'yylx',
  },
  {
    derivation: '无',
    example: '她的演唱声情并茂，极富艺术感染力。',
    explanation:
      '并都；茂草木丰盛的样子，引伸为美好。指演唱的音色、唱腔和表达的感情都很动人。',
    pinyin: 'shēng qíng bìng mào',
    word: '声情并茂',
    abbreviation: 'sqbm',
  },
  {
    derivation: '无',
    example: '曹操割须弃袍”的事迹广为流传。',
    explanation: '割掉胡须，丢掉外袍。形容战败落魄的样子。',
    pinyin: 'gē xū qì pào',
    word: '割须弃袍',
    abbreviation: 'gxqp',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '遭到很大的失败和损失。',
    pinyin: 'dà bài kuī lún',
    word: '大败亏轮',
    abbreviation: 'dbkl',
  },
  {
    derivation: '宋·苏轼《饮湖上初晴后雨》诗欲把西湖比西子，淡妆浓抹总相宜。”',
    example: '衣裳着得也俏，～，总称他的高兴。★清·彭养鸥《黑籍冤魂》第18回',
    explanation: '妆化妆；抹抹粉。指淡雅和浓艳两种不同的妆饰打扮。',
    pinyin: 'dàn zhuāng nóng mǒ',
    word: '淡妆浓抹',
    abbreviation: 'dznm',
  },
  {
    derivation:
      '《三国志·蜀书·诸葛亮传》臣不胜受恩感激，今当远离，临表涕零，不知所言。”',
    example:
      '公长民短，临时～，既后觉其不可耳。★南朝·宋·刘义庆《世说新语·政事》',
    explanation: '形容说话内容混乱，无法理解。同不知所云”。',
    pinyin: 'bù zhī suǒ yán',
    word: '不知所言',
    abbreviation: 'bzsy',
  },
  {
    derivation:
      '明·凌濛初《二刻拍案惊奇》卷三十七虽然纷纭杂沓，仍自严肃整齐，只此一室之中，随从何止百数。”',
    example: '无',
    explanation: '纷纭交错；沓重复。多而且杂乱。',
    pinyin: 'fēn yún zá tà',
    word: '纷纭杂沓',
    abbreviation: 'fyzt',
  },
  {
    derivation:
      '《五灯会元·法眼宗·宝塔绍岩禅师》诸仁者还明心也未？莫不是语言谭笑时……观山玩水时，耳目绝对时，是汝心否？”',
    example: '无',
    explanation: '犹言游山玩水。',
    pinyin: 'guān shān wán shuǐ',
    word: '观山玩水',
    abbreviation: 'gsws',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容吃的阔气。同食前方丈”。',
    pinyin: 'shí bì fāng zhàng',
    word: '食必方丈',
    abbreviation: 'sbfz',
  },
  {
    derivation: '宋·曽巩《监司制》人足家给，富饶洽于公私。”',
    example: '无',
    explanation: '同人给家足”。人人饱暖，家家富裕。',
    pinyin: 'rén zú jiā jǐ',
    word: '人足家给',
    abbreviation: 'rzjj',
  },
  {
    derivation: '明·屠隆《彩毫记·祖饯都门》李公旷世奇才，正宜匡扶社稷。”',
    example: '无',
    explanation: '旷世当代没有能相比的。指当代少见的奇才。',
    pinyin: 'kuàng shì qí cái',
    word: '旷世奇才',
    abbreviation: 'ksqc',
  },
  {
    derivation: '唐·李白《赠汪伦》诗桃花潭水深千尺，不及汪伦送我情。”',
    example: '无',
    explanation: '比喻友情深厚。',
    pinyin: 'qíng shēn tán shuǐ',
    word: '情深潭水',
    abbreviation: 'qsts',
  },
  {
    derivation:
      '唐·萧颖士《为扬州李长史贺立皇太子表》况琼枝挺秀，玉叶资神，允厘监抚，仪形稚颂。”',
    example: '无',
    explanation: '琼美玉。封建时代称皇家后裔。',
    pinyin: 'qióng zhī yù yè',
    word: '琼枝玉叶',
    abbreviation: 'qzyy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻同胞兄弟品质、爱好各不相同。同龙生九子”。',
    pinyin: 'lóng shēng jiǔ zhǒng',
    word: '龙生九种',
    abbreviation: 'lsjz',
  },
  {
    derivation:
      '孙中山《〈民报〉发刊词》吾国治民生主义者，睹其祸害于未萌，诚可举政治革命、社会革命毕其功于一役。”',
    example:
      '例如社会主义的任务，合并在民主主义任务上面去完成，这叫做‘～’，那就是空想。★毛泽东《新民主主义论》八',
    explanation: '把应该分成几步做的事一次做完。亦以形容急于求成。',
    pinyin: 'bì qí gōng yú yī yì',
    word: '毕其功于一役',
    abbreviation: 'bqgyyy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '①指任意评论是非好坏。②点了黄金又数白银。极言财富之多。',
    pinyin: 'lùn huáng shù bái',
    word: '论黄数白',
    abbreviation: 'lhsb',
  },
  {
    derivation: '《易·离》日月丽乎天，百谷草木丽乎土。”',
    example: '无',
    explanation: '丽附着。象日月悬挂在天空。比喻永恒不变。',
    pinyin: 'rì yuè lì tiān',
    word: '日月丽天',
    abbreviation: 'rylt',
  },
  {
    derivation: '《后汉书·黄琼传》诚遂欲枕山栖谷，拟迹巢、由，斯则可矣。”',
    example: '无',
    explanation: '比喻过隐居生活。',
    pinyin: 'zhěn shān qī gǔ',
    word: '枕山栖谷',
    abbreviation: 'zsqg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指年轻而容貌美好。',
    pinyin: 'sháo yán zhì chǐ',
    word: '韶颜稚齿',
    abbreviation: 'syzc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '无根据地预言祸福之事。',
    pinyin: 'wàng tán huò fú',
    word: '妄谈祸福',
    abbreviation: 'wthf',
  },
  {
    derivation:
      '郭沫若《文化人当前的急务》……，更应该以身作则，躬体力行，加倍的奋勉，然后才能够完成自己的任务。”',
    example: '无',
    explanation: '躬体亲身体验；力行努力实行。亲身体验，努力实行。',
    pinyin: 'gōng tǐ lì xíng',
    word: '躬体力行',
    abbreviation: 'gtlx',
  },
  {
    derivation: '宋·黄庭坚《沁园春》词镜里拈花，水中捉月，觑着无由得近伊。”',
    example: '恰便似沙里淘金，石中取火，～。★元·杨景贤《刘行首》第三折',
    explanation: '到水中去捞月亮。比喻去做根本做不到的事情，只能白费力气。',
    pinyin: 'shuǐ zhōng lāo yuè',
    word: '水中捞月',
    abbreviation: 'szly',
  },
  {
    derivation:
      '宋·杨万里《观水叹》诗出处未可必，一笑姑置之。” 宋·陆游《书梦》诗一笑俱置之，浮生故多难。”',
    example:
      '漕台见他如此说法，晓得他牛性发作，也只好～。★清·李宝嘉《官场现形记》第四十六回',
    explanation: '笑一笑，就把它放在一边了。表示不当回事。',
    pinyin: 'yī xiào zhì zhī',
    word: '一笑置之',
    abbreviation: 'yxzz',
  },
  {
    derivation: '无',
    example: '他讲起故事来～，非常吸引人。',
    explanation: '形容叙述或描写生动逼真。',
    pinyin: 'huì yǐng huì shēng',
    word: '绘影绘声',
    abbreviation: 'hyhs',
  },
  {
    derivation:
      '范金标《怀念敬爱的周总理》在作战频繁的长征路上，一年多的时间里周副主席白天和我们一样爬山涉水，栉风沐雨。”',
    example: '无',
    explanation: '形容路途艰辛。',
    pinyin: 'pá shān shè shuǐ',
    word: '爬山涉水',
    abbreviation: 'psss',
  },
  {
    derivation:
      '《三国志·吴书·吕蒙传》裴松之注引《江表传》吾谓大弟但有武略耳，至于今者，学识英博，非复吴下阿蒙。”',
    example:
      '马湾有鬣，德小是崇，先生天游，而人曰佳墉。嗟乎！非～。★明·徐宏祖《徐霞客游记·续篇》',
    explanation:
      '吴下现江苏长江以南；阿蒙指吕蒙。居处吴下一隅的吕蒙。比喻人学识尚浅。',
    pinyin: 'wú xià ā méng',
    word: '吴下阿蒙',
    abbreviation: 'wxam',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '为人宗仰的文章巨匠。',
    pinyin: 'wén zhāng zōng jiàng',
    word: '文章宗匠',
    abbreviation: 'wzzj',
  },
  {
    derivation:
      '唐·韩愈《与孟尚书书》汉室以来，群儒区区修补，百孔千疮，随乱随失，其危如一发引千钧。”',
    example:
      '让他们都显显身手，谁能把这个～的中国从热火里救出来，算谁有本事。★梁斌《红旗谱》四十九',
    explanation: '形容漏洞、弊病很多，或破坏的程度严重。',
    pinyin: 'qiān chuāng bǎi kǒng',
    word: '千疮百孔',
    abbreviation: 'qcbk',
  },
  {
    derivation:
      '《庄子·山木》夫子出于山，舍于故人之家。故人喜，命竖子杀雁而烹之。竖子请曰‘其一能鸣，其一不能鸣，请奚杀？’主人曰‘杀不能鸣者。’”',
    example: '无',
    explanation: '比喻无才者先被淘汰。',
    pinyin: 'yàn mò xiān pēng',
    word: '雁默先烹',
    abbreviation: 'ymxp',
  },
  {
    derivation: '宋·邵雍《弄笔吟》弄假像真终是假，将勤补拙总轮勤。”',
    example: '那一个掌亲的，怎知道～。★元·无名氏《隔江斗智》第二折',
    explanation: '本来是假装的，结果却弄成了真的。',
    pinyin: 'nòng jiǎ chéng zhēn',
    word: '弄假成真',
    abbreviation: 'njcz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '执迷不悟；坚持错误而不觉悟。同遂迷不寤”。',
    pinyin: 'suí mí wàng fǎn',
    word: '遂迷忘反',
    abbreviation: 'smwf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指一年到头。',
    pinyin: 'wú dōng lì xià',
    word: '无冬历夏',
    abbreviation: 'wdlx',
  },
  {
    derivation:
      '《朱子全书·治道二·祯异》使一日之间，云消雾散，尧天舜日，廓然清明。”',
    example: '他的兴致被突然传来的坏消息吹得～。',
    explanation: '象烟云消散一样。比喻事物消失得干干净净。',
    pinyin: 'yān xiāo yún sàn',
    word: '烟消云散',
    abbreviation: 'yxys',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '眼见之后内心震动，感到悲惨。',
    pinyin: 'jīng xīn cǎn mù',
    word: '惊心惨目',
    abbreviation: 'jxcm',
  },
  {
    derivation:
      '《汉书·霍光传》宣帝始立，谒见高庙，大将军光从骖乘。上内严惮之，若有芒刺在背。”',
    example: '无',
    explanation: '形容极度不安。',
    pinyin: 'rú máng zài bèi',
    word: '如芒在背',
    abbreviation: 'rmzb',
  },
  {
    derivation: '《书·秦誓》其心休休焉，其如有容。”',
    example: '无',
    explanation: '形容君子宽容而有气量。',
    pinyin: 'xiū xiū yǒu róng',
    word: '休休有容',
    abbreviation: 'xxyr',
  },
  {
    derivation: '《论语·雍也》赤之造齐也，乘肥马，衣轻裘。”',
    example: '无',
    explanation: '穿着轻暖的皮袄，骑着肥壮的好马。形容生活阔绰。',
    pinyin: 'qīng qiú féi mǎ',
    word: '轻裘肥马',
    abbreviation: 'qqfm',
  },
  {
    derivation: '唐·王勃《秋日登洪府滕王阁饯别序》临别赠言，幸承恩于伟饯。”',
    example: '无',
    explanation: '分别时赠送的一些勉励的话。',
    pinyin: 'lín bié zèng yán',
    word: '临别赠言',
    abbreviation: 'lbzy',
  },
  {
    derivation: '《礼记·礼运》大臣法，小臣廉，官职相序，君臣相正，国之肥也。”',
    example: '天下之大，百官之众，～，岂繁无人。★清·陈康祺《燕下乡脞录》',
    explanation: '旧时指大臣尽忠，小臣尽职。',
    pinyin: 'xiǎo lián dà fǎ',
    word: '小廉大法',
    abbreviation: 'xldf',
  },
  {
    derivation:
      '清·魏秀仁《花月痕》第十三回小丫鬟等更蹑手蹑足的在外间收拾那粉盒妆眏，不敢大声说一句话，倒弄得内外静悄悄的。”',
    example:
      '为着我到她家去替她看小孩，她走了，和猫一样～的下楼去了。★萧红《桥·烦扰的一日》',
    explanation:
      '形容放轻脚步走的样子。也形容偷偷摸摸、鬼鬼祟祟的样子。同蹑手蹑脚”。',
    pinyin: 'niè shǒu niè zú',
    word: '蹑手蹑足',
    abbreviation: 'nsnz',
  },
  {
    derivation: '《周易·大有》自天佑之，吉无不利。',
    example: '迫窜良将，夷其肢股。屡蹶复兴，～。★章炳麟《民国五豪赞》',
    explanation: '承受；佑保佑。蒙受老天的保佑。',
    pinyin: 'chéng tiān zhī yòu',
    word: '承天之佑',
    abbreviation: 'ctzy',
  },
  {
    derivation:
      '元·王实甫《西厢记》第四本第四折想人生最苦是离别，可怜是千里关山，独自跋涉。似这般割肚牵肠，倒不如义断恩绝。”',
    example:
      '吾想汝等父母、兄弟、妻子必倚六而望；若知阵败，必然～，眼中流血。★明·罗贯中《三国演义》第八十七回',
    explanation: '形容非常牵挂，很不放心。',
    pinyin: 'gē dù qiān cháng',
    word: '割肚牵肠',
    abbreviation: 'gdqc',
  },
  {
    derivation:
      '南朝·宋·刘义庆《世说新语·文学》谢安年少时，请阮光禄道《白马论》，为论以示谢，于时，谢不即解阮语，重相咨尽。阮乃叹曰‘非但能言人不可得，正索解人亦不得。’”',
    example: '无',
    explanation:
      '解人原指通达言语或文辞意趣的人，借指知己；难得不易得到。比喻知己难得。',
    pinyin: 'jiě rén nán dé',
    word: '解人难得',
    abbreviation: 'jrnd',
  },
  {
    derivation: '《诗经·大雅·焌民》人亦有言，柔则茹之，刚则吐之。”',
    example:
      '毛玠清公素履，司马芝忠亮不倾，庶乎不～。★《三国志·魏志·崔琰等传赞》',
    explanation: '柔软；刚硬。吐出硬的，吃下软的。比喻怕强欺软。',
    pinyin: 'tǔ gāng rú róu',
    word: '吐刚茹柔',
    abbreviation: 'tgrr',
  },
  {
    derivation: '汉·焦延寿《易林》卷八一身两头，近适二家，乱不可治。”',
    example: '无',
    explanation: '一个人同时有两个主张。比喻无所适从。',
    pinyin: 'yī shēn liǎng tóu',
    word: '一身两头',
    abbreviation: 'yslt',
  },
  {
    derivation:
      '《左传·哀公七年》大伯端委以治周礼，仲雍嗣之，断发文身，祼以为饰，岂礼也哉。”《礼记·王制》东方曰夷，被发文身，有不火食者矣。”',
    example: '太伯仲雍，王德之仁。行施百世，～。★汉·曹操《善哉行》诗',
    explanation: '剪短头发，身上刺着花纹。是古代某些民族的风俗。',
    pinyin: 'duàn fà wén shēn',
    word: '断发文身',
    abbreviation: 'dfws',
  },
  {
    derivation:
      '《史记·万石张叔列传》建为郎中令，书奏事，事下，建读之，曰‘误书！马”者与尾当五，今乃四，不足一。上谴死矣！’……万石君少子庆为太仆，御出，上问车中几马，庆以策数马毕，举手曰六马。庆于诸子中最为简易矣，然犹如此。”',
    example:
      '《汉书·孔光传》沐日归休，兄弟妻子燕语，终不及朝省政事。或问光‘温室省中树皆何木也？’光默不应，更答以它语，其不泄如是。”',
    explanation: '表示居官为人忠诚谨慎。',
    pinyin: 'huì shù shù mǎ',
    word: '讳树数马',
    abbreviation: 'hssm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '对于有所求而来的人或送上门来的东西概不拒绝。同来者不拒”。',
    pinyin: 'lái zhě wù jù',
    word: '来者勿拒',
    abbreviation: 'lzwj',
  },
  {
    derivation:
      '宋·朱熹《训学斋规》余尝谓读书有三到谓心到，眼到，口到……三到之中，心到最紧。”',
    example: '无',
    explanation: '形容读书十分认真。',
    pinyin: 'dú shū sān dào',
    word: '读书三到',
    abbreviation: 'dssd',
  },
  {
    derivation:
      '刘白羽《长江三日》峡中，强烈的阳光与乳白色云雾交织一处，数步之隔，这边是阳光，那边是云雾，真是神妙莫测。”',
    example: '无',
    explanation: '莫测不能揣测、估量。形容奇妙到极点。',
    pinyin: 'shén miào mò cè',
    word: '神妙莫测',
    abbreviation: 'smmc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容骏马奔腾飞驰。比喻骤然得志，官职升得很快。同飞黄腾达”。',
    pinyin: 'téng dá fēi huáng',
    word: '腾达飞黄',
    abbreviation: 'tdfh',
  },
  {
    derivation: '《史记·汲郑列传》今天下重足而立，侧目而视矣。”',
    example:
      '诸君记得当年常肃剥皮做衮州府的时候，何尝不是这样？总是做得人人～就完了。★清·刘鹗《老残游记》第三回',
    explanation: '侧斜着。斜着眼睛看人。形容憎恨或又怕又愤恨。',
    pinyin: 'cè mù ér shì',
    word: '侧目而视',
    abbreviation: 'cmes',
  },
  {
    derivation:
      '明·王世懋《艺圃撷馀》杜子美出，而百家稗官都作雅音，马浡牛溲咸成郁致，于是诗之变极矣。”',
    example: '无',
    explanation: '借指不值钱的东西。同马勃牛溲”',
    pinyin: 'mǎ bó niú sōu',
    word: '马浡牛溲',
    abbreviation: 'mbns',
  },
  {
    derivation:
      '宋·苏轼《水龙吟》词古来云海茫茫，道山绛阙知何处？人间自有，赤城居士，龙蟠凤翥。清净无为，坐忘遗照，八篇奇语。”',
    example: '无',
    explanation: '指贤者遁世归隐。',
    pinyin: 'lóng pán fèng zhù',
    word: '龙蟠凤翥',
    abbreviation: 'lpfz',
  },
  {
    derivation: '无',
    example: '要想完成这顶任务，就不能像老牛破车似的，要雷厉风行，说干就干。',
    explanation: '老牛拉破车。比喻做事慢吞吞，一点不利落。也比喻才能低。',
    pinyin: 'lǎo niú pò chē',
    word: '老牛破车',
    abbreviation: 'lnpc',
  },
  {
    derivation:
      '明·杨琫《龙膏记·脱难》尽他万千挜靶，乱国家使些奸诈，少不了荡产倾家，能几日状孤做大。”',
    example:
      '凡狱讼征科诸巨事……其有悉索贿赂致小民～。★刘师培《论新政为病民之根》',
    explanation: '指丧失全部家产。',
    pinyin: 'dàng chǎn qīng jiā',
    word: '荡产倾家',
    abbreviation: 'dcqj',
  },
  {
    derivation: '《管子·禁藏》举措不当，众民不能成。”',
    example:
      '敌军调动忙乱，～，两队优劣之势，也就不同于前了。★毛泽东《中国革命战争的战略问题》',
    explanation: '举措举动，措置。指行动措施不得当。',
    pinyin: 'jǔ cuò shī dàng',
    word: '举措失当',
    abbreviation: 'jcsd',
  },
  {
    derivation:
      '清·陈田《明诗纪事·己签序》与前七子隔绝数十年，而此唱彼和，声应气求，若出一轨。”',
    example: '当下～，无不赞成。★蔡东藩《慈禧太后演义》第九回',
    explanation: '彼那里。这里唱，那里随声附和。比喻互相呼应。',
    pinyin: 'cǐ chàng bǐ hè',
    word: '此唱彼和',
    abbreviation: 'ccbh',
  },
  {
    derivation:
      '《礼记·学记》凡学之道，严师为难。师严然后道尊，道尊然后民知敬学。”',
    example: '无',
    explanation:
      '本指老师受到尊敬，他所传授的道理、知识、技能才能得到尊重◇多指为师之道尊贵、庄严。',
    pinyin: 'shī dào zūn yán',
    word: '师道尊严',
    abbreviation: 'sdzy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '没有功劳而得到报酬。同无功受禄”。',
    pinyin: 'wú gōng ér lù',
    word: '无功而禄',
    abbreviation: 'wgel',
  },
  {
    derivation: '战国·楚·屈原《大招》粉白黛黑，施芳泽只。”',
    example:
      '一时～，燕语莺啼，顿时把餐室客厅，化做碧城锦谷。★清·曾朴《孽海花》第三十一回',
    explanation: '泛指女子的妆饰。',
    pinyin: 'fěn bái dài lǜ',
    word: '粉白黛绿',
    abbreviation: 'fbdl',
  },
  {
    derivation:
      '《庄子·达生》上而不下，则使人善怒；下而不上，则使人善忘；不上不下，中身当心，则为病。”',
    example: '无',
    explanation: '上不去，下不来。形容进退两难。',
    pinyin: 'bù shàng bù xià',
    word: '不上不下',
    abbreviation: 'bsbx',
  },
  {
    derivation: '《楚辞·卜居》黄钟毁弃，瓦釜雷鸣。谗人高张，贤士无名。”',
    example: '无',
    explanation:
      '釜锅。锅发出雷一般的响声。比喻无德无才的人占据高位，声势烜赫。',
    pinyin: 'léi míng wǎ fǔ',
    word: '雷鸣瓦釜',
    abbreviation: 'lmwf',
  },
  {
    derivation:
      '程树榛《大学时代》刘向明和另外两人，抱成一团，异想天开地搞什么科学研究，在同学中造成很坏的影响。”',
    example: '他们相互～，结党营私。',
    explanation: '保持一致，行动起来像一个人。形容关系极为亲密。',
    pinyin: 'bào chéng yī tuán',
    word: '抱成一团',
    abbreviation: 'bcyt',
  },
  {
    derivation:
      '明·王玉峰《焚香记·饯别》又恐鱼沉鸿断，阻隔云山，衔悲饮泪有万千。”',
    example: '无',
    explanation: '比喻书信不通，音信断绝。',
    pinyin: 'yú chén hóng duàn',
    word: '鱼沉鸿断',
    abbreviation: 'ychd',
  },
  {
    derivation: '《左传·庄公二十二年》臣卜其昼，未卜其夜，不敢。”',
    example:
      '把这些指挥官们，招集在这列花车里，～、昏天黑地，一起比大欢喜。★徐铸成《何成浚与叶蓬》',
    explanation: '卜占卜。形容夜以继日地宴乐无度。',
    pinyin: 'bǔ zhòu bǔ yè',
    word: '卜昼卜夜',
    abbreviation: 'bzby',
  },
  {
    derivation:
      '《老子》第六十九章祸莫大于轻敌，轻敌几丧吾宝，故抗兵相加，哀者胜矣。”',
    example:
      '不，～！不要乐，要哀，何小姐能弹《易水吟》的谱子吗？★张恨水《啼笑因缘续集》第十回',
    explanation:
      '原意是力量相当的两军对阵，悲愤的一方获得胜利◇指因受欺侮而奋起抵抗的军队，必定能取胜。',
    pinyin: 'āi bīng bì shèng',
    word: '哀兵必胜',
    abbreviation: 'abbs',
  },
  {
    derivation:
      '《列子·汤问》娥还，复为曼声长歌，一里老幼喜跃抃舞，弗能自禁，忘向之悲也。”',
    example: '无',
    explanation:
      '抃鼓掌。喜欢得跳跃、鼓掌、起舞。形容极度欢乐而手舞足蹈的情状。',
    pinyin: 'xǐ yuè biàn wǔ',
    word: '喜跃抃舞',
    abbreviation: 'xybw',
  },
  {
    derivation: '梁斌《红旗谱》她怕他，那家伙楞手楞脚，什么事都会干得出来。”',
    example: '无',
    explanation: '形容动作鲁莽。',
    pinyin: 'lèng shǒu lèng jiǎo',
    word: '楞手楞脚',
    abbreviation: 'lslj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指雕琢淫词艳句。同拈花摘艳”。',
    pinyin: 'niān huá zhāi yàn',
    word: '拈华摘艳',
    abbreviation: 'nhzy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '纵目观望，尽览景物。',
    pinyin: 'yóu mù chěng guān',
    word: '游目骋观',
    abbreviation: 'ymcg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '亲戚故旧的总称。',
    pinyin: 'sān qīn liù gù',
    word: '三亲六故',
    abbreviation: 'sqlg',
  },
  {
    derivation:
      '汉·刘向《新序·杂事》齐有妇人，极丑无双，号曰无盐女。其为人也，臼头深目，长壮大节。”',
    example: '无',
    explanation: '形容相貌丑陋。',
    pinyin: 'jiù tóu shēn mù',
    word: '臼头深目',
    abbreviation: 'jtsm',
  },
  {
    derivation: '明·李东阳《先考赠少傅府君诰命碑阴记》东阳皆奉命惟谨。”',
    example: '李斯、夏无且及卫士长等均～。★郭沫若《高渐离》第三幕',
    explanation: '形容严格遵照命令行事，不敢稍有违背。',
    pinyin: 'fèng mìng wéi jǐn',
    word: '奉命惟谨',
    abbreviation: 'fmwj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '废井里的青蛙。比喻见识不多的人。同坎井之蛙”。',
    pinyin: 'kǎn jǐng zhī wā',
    word: '埳井之蛙',
    abbreviation: 'kjzw',
  },
  {
    derivation: '《后汉书·袁绍传》是以远近狐疑，议论纷错者也。”',
    example: '无',
    explanation: '形容意见不一，议论很多。',
    pinyin: 'yì lùn fēn cuò',
    word: '议论纷错',
    abbreviation: 'ylfc',
  },
  {
    derivation:
      '清·黄小配《廿载繁华梦》第三回那香屏牌价嫁了周庸祐，早卸了孝服，换得浑身如花似锦。”',
    example: '节日的广场被打扮得～，绚丽多彩。',
    explanation:
      '锦有彩色花纹的丝织品。如同花朵、锦缎一般。形容风景绚丽或前程美好。',
    pinyin: 'rú huā sì jǐn',
    word: '如花似锦',
    abbreviation: 'rhsj',
  },
  {
    derivation:
      '语出汉·张衡《西京赋》夫人在阳时则舒，在阴时则惨。”南朝·梁·刘勰《文心雕龙·物色》春秋代序，阴阳惨舒，物色之动，心亦摇焉。”',
    example:
      '视～之节，取震虩泽濡之象。知天而不泥于神怪，知人而不遗于委琐。★唐·刘禹锡《答饶州元使君书》',
    explanation:
      '古以秋冬为阴，春夏为阳。意为秋冬忧戚，春夏舒快。指四时的变化。',
    pinyin: 'yīn yáng cǎn shū',
    word: '阴阳惨舒',
    abbreviation: 'yycs',
  },
  {
    derivation:
      '明·张居正《翰林院读书说》训诰典谟，圣人岂殚精极虑作意而为之者哉。”',
    example: '无',
    explanation: '犹殚思极虑。竭尽智谋与精力。',
    pinyin: 'dān jīng jí lǜ',
    word: '殚精极虑',
    abbreviation: 'djjl',
  },
  {
    derivation:
      '《三国志·魏志·袁绍传》谓为将军心合意同，混齐一体，必当并威偶势，御寇宁家。”',
    example: '无',
    explanation: '指聚集声威势力。',
    pinyin: 'bìng wēi ǒu shì',
    word: '并威偶势',
    abbreviation: 'bwos',
  },
  {
    derivation:
      '《隋书·于宣敏传》盛业洪基，同天地之长久；英声茂实，齐日月之照临。”',
    example: '惟公～，腾于朝著，敬服敬服。★明·张居正《答承天守备枢使王涵斋书》',
    explanation: '指美名和盛业。',
    pinyin: 'yīng shēng mào shí',
    word: '英声茂实',
    abbreviation: 'ysms',
  },
  {
    derivation:
      '元·关汉卿《斗鹤鹊·女校尉》曲茶余饭饱邀故友，谢馆秦楼，散闷消愁。”',
    example: '从今后～破工夫，玉镜台前插架书。★明·汤显祖《牡丹亭·训女》',
    explanation: '泛指闲暇之时。',
    pinyin: 'chá yú fàn bǎo',
    word: '茶余饭饱',
    abbreviation: 'cyfb',
  },
  {
    derivation: '唐·韩愈《符读书城南》诗飞黄腾踏去，不能顾蟾蜍。”',
    example: '～有天倪，紫电转盼天山低。★元·陈赓《武善夫桃源图》诗',
    explanation: '形容马的飞驰◇多比喻官职地位升得很快。',
    pinyin: 'fēi huáng téng tà',
    word: '飞黄腾踏',
    abbreviation: 'fhtt',
  },
  {
    derivation: '《礼记·大学》心不在焉，视而不见，听而不闻，食而不知其味。”',
    example: '无',
    explanation:
      '指不注意，不重视，睁着眼却没看见。也指不理睬，看见了当作没看见。',
    pinyin: 'shì ér bù jiàn',
    word: '视而不见',
    abbreviation: 'sebj',
  },
  {
    derivation: '元·五实甫《西厢记》第一本第二折金圣叹批此其心乱如麻可知也。”',
    example: '想到这一点，他～，一夜都没有合过眼儿。★欧阳山《苦斗》五四',
    explanation: '心里乱得象一团乱麻。形容心里非常烦乱。',
    pinyin: 'xīn luàn rú má',
    word: '心乱如麻',
    abbreviation: 'xlrm',
  },
  {
    derivation:
      '语出《史记·刘敬叔孙通列传》夫与人斗，不扼其亢，拊其背，未能全其胜也。今陛下入关而都，案秦之故地，此亦扼天下之亢而拊其背也。”按，亢，同吭”。',
    example:
      '俄既东向并亚细亚诸国，而后～以薄英法，则其志可逞也。★清·王韬《跋〈同送西吉甫文〉》',
    explanation: '吭，喉咙。按住脊背，拤住咽喉。比喻控制要害。',
    pinyin: 'fǔ bèi è kēng',
    word: '拊背扼吭',
    abbreviation: 'fbek',
  },
  {
    derivation: '《史记·季布栾布列传》得黄金百斤，不如得季布一诺。”',
    example:
      '夫人而诚～，更无食言也者。★元·王实甫《西厢记》第二本第二折金圣叹批',
    explanation: '诺许诺。许下的一个诺言有千金的价值。比喻说话算数，极有信用。',
    pinyin: 'yī nuò qiān jīn',
    word: '一诺千金',
    abbreviation: 'ynqj',
  },
  {
    derivation: '《墨子·所染》见染丝者而叹曰‘染于苍则苍，染于黄则黄。’”',
    example: '无',
    explanation: '苍青色。比喻变化不定，反复无常。',
    pinyin: 'rǎn cāng rǎn huáng',
    word: '染苍染黄',
    abbreviation: 'rcrh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '锐气和才华全都显露出来。多指人好表现自己。同锋芒毕露”。',
    pinyin: 'fēng máng bì lù',
    word: '锋铓毕露',
    abbreviation: 'fmbl',
  },
  {
    derivation:
      '宋·李纲《宫词谢表》众毁销骨，虽贻投抒之嗟；太阳中天，必冀容光之照。”',
    example: '无',
    explanation: '指众多的毁谤，可以销熔人的骨骼。比喻谗言多可以混淆是非。',
    pinyin: 'zhòng huǐ xiāo gǔ',
    word: '众毁销骨',
    abbreviation: 'zhxg',
  },
  {
    derivation: '《尚书·酒诰》弗惟德馨香，祀登闻于天。”',
    example: '无',
    explanation:
      '馨香烧香；祷祝祷告祝愿。原指迷信的人虔诚地向神祈祷祝愿◇引伸指真诚地期望。',
    pinyin: 'xīn xiāng dǎo zhù',
    word: '馨香祷祝',
    abbreviation: 'xxdz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '离开家乡故土。',
    pinyin: 'pāo xiāng lí jǐng',
    word: '抛乡离井',
    abbreviation: 'pxlj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指物之同类者互相聚合。',
    pinyin: 'tóng lèi xiāng qiú',
    word: '同类相求',
    abbreviation: 'tlxq',
  },
  {
    derivation: '《隋书·裴政传》簿案盈几，剖决如流。”',
    example: '无',
    explanation:
      '剖决分析、解决；如流如同流水一般。形容分析、解决问题明快、敏捷。',
    pinyin: 'pōu jué rú liú',
    word: '剖决如流',
    abbreviation: 'pjrl',
  },
  {
    derivation:
      '《汉书·路温舒传》故俗语曰‘画地为狱，议不入；刻木为吏，期不对。’此皆疾吏之风，悲痛之辞也。”',
    example:
      '关于题材问题，一时曾相当狭隘，而且至今也还有人抱着之样的见解，以为必须直接采自抗战的现实，这可以说是～。★郭沫若《沸羹集·抗点球以来的文艺思潮》',
    explanation: '比喻只许在指定的范围内活动。同画地为牢”。',
    pinyin: 'huà dì wéi yù',
    word: '画地为狱',
    abbreviation: 'hdwy',
  },
  {
    derivation: '汉·焦延寿《易林》卷十一口三舌，相妨无益。”',
    example: '无',
    explanation: '比喻唠叨、话多。',
    pinyin: 'yī kǒu sān shé',
    word: '一口三舌',
    abbreviation: 'ykss',
  },
  {
    derivation: '《战国策·秦策四》臣闻敌不可易，时不可失。”',
    example: '此天遣我以报复之机，～。（明·冯梦龙《东周列国志》第四十九回）',
    explanation: '时时机，机会；失错过。抓住时机，不可错过。',
    pinyin: 'shí bù kě shī',
    word: '时不可失',
    abbreviation: 'sbks',
  },
  {
    derivation: '《孝经·开宗明义》身体发肤，受之父母，不敢毁伤，孝之始也。”',
    example: '无',
    explanation: '本指身躯、四肢、须发、皮肤，后亦泛指自己身体的全部，自身。',
    pinyin: 'shēn tǐ fà fū',
    word: '身体发肤',
    abbreviation: 'stff',
  },
  {
    derivation:
      '元·无名氏《薛苞认母》第二折常言道马有垂缰。犬有那展草，踹踏街心慈乌反哺。”',
    example: '无',
    explanation:
      '慈奉养。返哺乌雏长大，衔食哺其母。比喻子女报答父母的养育之恩。',
    pinyin: 'cí wū fǎn bǔ',
    word: '慈乌返哺',
    abbreviation: 'cwfb',
  },
  {
    derivation:
      '南朝·宋·刘义庆《世说新语·言语》刘公幹以失敬罹罪，文帝问曰‘卿何以不谨于文宪？’桢答曰‘臣诚庸短，亦由阶下纲目不疏。’”',
    example: '无',
    explanation: '比喻法令细密。',
    pinyin: 'gāng mù bù shū',
    word: '纲目不疏',
    abbreviation: 'gmbs',
  },
  {
    derivation:
      '沈从文《八骏图·顾问官》他那神气似真非真，因为是师长的老部属，平时又会逢场作趣，这时节乘顺水船就来那么一手。”',
    example: '无',
    explanation: '犹言逢场作戏。偶尔随俗应酬凑凑热闹。',
    pinyin: 'féng chǎng zuò qù',
    word: '逢场作趣',
    abbreviation: 'fczq',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》卷十五小学生望后便倒，扶起，良久方醒。问之一无所知。”',
    example: '对于世界历史，他～。',
    explanation: '什么也不知道。',
    pinyin: 'yī wú suǒ zhī',
    word: '一无所知',
    abbreviation: 'ywsz',
  },
  {
    derivation:
      '元·刘致《端正好·上高监司》套曲受官差在旅途，躭惊受怕过朝暮，受了五十四站风波苦。”',
    example:
      '休听那算命的胡说，撇了海阔一个家业，～，去虎穴龙潭里做买卖！★《水浒传》第六一回',
    explanation: '犹言担受惊吓。',
    pinyin: 'dān jīng shòu pà',
    word: '躭惊受怕',
    abbreviation: 'djsp',
  },
  {
    derivation: '无',
    example: '你犯下了如此～，将难逃法律的严厉制裁。',
    explanation: '形容罪恶极大。',
    pinyin: 'tāo tiān dà zuì',
    word: '滔天大罪',
    abbreviation: 'ttdz',
  },
  {
    derivation:
      '清·王韬《变法自强》下不知时之所尚，势之所趋，终贵因事制宜，以权达变。”',
    example: '无',
    explanation: '用灵活的态度去适应变化发展的时势。',
    pinyin: 'yǐ quán dá biàn',
    word: '以权达变',
    abbreviation: 'yqdb',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第二十六回一般儿大的人，怎么我的赔送就该那等苟简，姐姐有这些人给办妆奁还嫌长道短？这话怎么讲？”',
    example: '无',
    explanation: '犹苛求责备。',
    pinyin: 'xián cháng dào duǎn',
    word: '嫌长道短',
    abbreviation: 'xcdd',
  },
  {
    derivation: '《诗经·王风·丘中有麻》',
    example: '无',
    explanation: '形容走路缓慢。彼留子嗟，将其来施施。',
    pinyin: 'shī shī ér xíng',
    word: '施施而行',
    abbreviation: 'ssex',
  },
  {
    derivation:
      '宋·徐度《却扫编》卷下而邓枢密洵武真以少保领院而不兼节钺，前所未有也。”',
    example:
      '太祖长子术赤遂于其地即可汗位，可谓破～之纪载矣。★鲁迅《三闲集·吾国征俄战史之一页”》',
    explanation: '自古以来未曾有过。',
    pinyin: 'qián gǔ wèi yǒu',
    word: '前古未有',
    abbreviation: 'qgwy',
  },
  {
    derivation:
      '清·蒲松龄《聊斋志异·马介甫》[异史氏曰]恶乎哉！呼天吁地，忽尔披发向银床。”',
    example: '渐渐炊烟将欲断，～俱无门。★《醒世缘弹词》第十四回',
    explanation: '指呼喊天地以求救助。',
    pinyin: 'hū tiān yù dì',
    word: '呼天吁地',
    abbreviation: 'htyd',
  },
  {
    derivation:
      '《韩非子·说林上》管仲、隰朋从于桓公伐孤竹，春往冬反，迷惑失道。管仲曰‘老马之智可用也。’乃放老马而随之，遂得道。”',
    example: '你也不用发忧，还有你老子是～”，慢慢地来指拨你罢！★茅盾《子夜》四',
    explanation: '老马认识路。比喻对某种事物十分熟悉的人。',
    pinyin: 'shí tú lǎo mǎ',
    word: '识途老马',
    abbreviation: 'stlm',
  },
  {
    derivation:
      '元·王实甫《西厢记》第一本第三折等待那齐齐整整，袅袅婷婷，姐姐莺莺。”',
    example:
      '不一时，只见众夫人多打扮得鲜妍妩媚，～，齐走进轩来。★清·禇人获《隋唐演义》第三十回',
    explanation: '袅袅柔美貌；娉娉美好貌。形容女子姿态柔美。',
    pinyin: 'niǎo niǎo píng píng',
    word: '袅袅娉娉',
    abbreviation: 'nnpp',
  },
  {
    derivation:
      '毛泽东《别了，司徒雷登》你们所设想的美国的仁义首选，已被艾奇逊一扫而空。”',
    example: '无',
    explanation: '一下子便扫除干净。比喻彻底清除。',
    pinyin: 'yī sǎo ér kōng',
    word: '一扫而空',
    abbreviation: 'ysek',
  },
  {
    derivation: '元·无名氏《杀狗劝夫》第二折他见我早揎拳攞袖，怒目撑眉。”',
    example:
      '我见他手慌脚乱，～。急慌的，慌的便要杀。★明·王元吉《流星马》第三折',
    explanation: '伸出拳头，露出手臂。一种粗野蛮横的姿态。',
    pinyin: 'xuān quán luó xiù',
    word: '揎拳攞袖',
    abbreviation: 'xqlx',
  },
  {
    derivation: '《荀子·儒效》虽隐于穷阎漏屋，人莫不贵，贵道诚存也。”',
    example: '无',
    explanation: '穷阎偏僻的里巷；漏屋通陋”，狭小的房屋。指僻陋狭小的住处。',
    pinyin: 'qióng yán lòu wū',
    word: '穷阎漏屋',
    abbreviation: 'qylw',
  },
  {
    derivation:
      '《后汉书·邓训传》议者咸以羌胡相攻，县官之利，以夷伐夷，不宜禁护。”',
    example: '无',
    explanation:
      '夷旧指外族或外国。指在军事上利用对方本身的矛盾，使自相冲突，削弱力量。',
    pinyin: 'yǐ yí fá yí',
    word: '以夷伐夷',
    abbreviation: 'yyfy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指竭尽心力。',
    pinyin: 'kū nǎo jiāo xīn',
    word: '枯脑焦心',
    abbreviation: 'knjx',
  },
  {
    derivation: '《尚书·君牙》心之忧危，若蹈虎尾，涉于春冰。”',
    example: '无',
    explanation: '踩着老虎尾巴，走在春天将解冻的冰上。比喻处境非常危险。',
    pinyin: 'hǔ wěi chūn bīng',
    word: '虎尾春冰',
    abbreviation: 'hwcb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '①犹言差不多。②犹言零零碎碎，各式各样。',
    pinyin: 'qī qī bā bā',
    word: '七七八八',
    abbreviation: 'qqbb',
  },
  {
    derivation:
      '《战国策·楚策》昔者先君灵王好小腰，楚子约食，凭而能立，式而能起。”唐·杜牧《遣怀诗》楚腰纤细掌中轻。”',
    example: '无',
    explanation: '楚腰称妇人的细腰。形容美人的细腰，曲线玲珑。',
    pinyin: 'chǔ yāo xiān xì',
    word: '楚腰纤细',
    abbreviation: 'cyxx',
  },
  {
    derivation:
      '鲁迅《坟·灯下漫笔》但措施太绕弯子了。有更其直捷了当的说法在这里。”',
    example: '才见一面我就～，把我的情况告诉了他们了！★沙汀《困兽记》十五',
    explanation: '形容说话、做事不绕弯子，干脆爽快。同直截了当”。',
    pinyin: 'zhí jié liǎo dàng',
    word: '直捷了当',
    abbreviation: 'zjld',
  },
  {
    derivation:
      '《孟子·尽心下》好名之人能让千乘之国，苟非其人，箪食豆羹见于色。”',
    example: '无',
    explanation: '比喻计较小利。',
    pinyin: 'dān dòu jiàn sè',
    word: '箪豆见色',
    abbreviation: 'ddjs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻赤诚相待，说出心里话。同吐肝露胆”。',
    pinyin: 'tǔ xīn tǔ dǎn',
    word: '吐心吐胆',
    abbreviation: 'txtd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指回复到原来的淳厚古朴的状态。',
    pinyin: 'huán chún fǎn gǔ',
    word: '还淳反古',
    abbreviation: 'hcfg',
  },
  {
    derivation: '语出《论语·学而》子曰‘弟子入则孝，出则悌。’”',
    example:
      '小学之方，洒扫应对，～，动罔或悖。行有余力，诵诗读书，咏歌舞蹈。★宋·朱熹《〈小学〉题辞》',
    explanation: '指回家要孝顺父母，出外要敬爱兄长。同入孝出悌”。',
    pinyin: 'rù xiào chū tì',
    word: '入孝出弟',
    abbreviation: 'rxct',
  },
  {
    derivation:
      '《金瓶梅词话》第五八回[潘金莲]登时柳眉剔竖，星眼圆睁，叫春梅打着灯，把角门闩了，拿来大棍把那狗没高低只顿打。”',
    example: '无',
    explanation: '形容女子发怒时耸眉之状。',
    pinyin: 'liǔ méi tī shù',
    word: '柳眉剔竖',
    abbreviation: 'lmts',
  },
  {
    derivation:
      '明·施耐庵《水浒传》第二十六回我本待声张起来，却怕他没人做主，恶了西门庆，却不是去撩蜂剔蝎？”',
    example: '无',
    explanation: '比喻招惹恶人，自讨苦吃。',
    pinyin: 'liáo fēng tì xiē',
    word: '撩蜂剔蝎',
    abbreviation: 'lftx',
  },
  {
    derivation: '清·黄小配《廿载繁华梦》第二十回彼此兄弟，自应有福同享。”',
    example: '无',
    explanation: '指共同分享幸福。',
    pinyin: 'yǒu fú tóng xiǎng',
    word: '有福同享',
    abbreviation: 'yftx',
  },
  {
    derivation:
      '宋·朱彧《萍洲可谈》卷三东坡倅杭，不胜杯酌……疲于应接，乃号杭倅为酒食地狱。”',
    example: '无',
    explanation: '陷入终日为酒食应酬而奔忙的痛苦境地。',
    pinyin: 'jiǔ shí dì yù',
    word: '酒食地狱',
    abbreviation: 'jsdy',
  },
  {
    derivation:
      '《老子》第十四章听之不闻名曰希。”《礼记·大学》心不在焉，视而不见，听而不闻，食而不知其味。”',
    example:
      '就只再芳芳姐姐一心只想学课，只怕是～。★清·李汝珍《镜花缘》第九十回',
    explanation: '闻听。听了跟没听到一样。形容不关心，不在意。',
    pinyin: 'tīng ér bú wén',
    word: '听而不闻',
    abbreviation: 'tebw',
  },
  {
    derivation:
      '明孙仁孺《东郭记·蚤起》如云鬓发粗粗卷展，蛾眉低偃，也只索垢面蓬头，净洗朱铅。”',
    example: '无',
    explanation: '指面目肮脏，头发凌乱。',
    pinyin: 'gòu miàn péng tóu',
    word: '垢面蓬头',
    abbreviation: 'gmpt',
  },
  {
    derivation: '《汉书·河间献王刘德传》修学好古，实事求是。”',
    example: '总结经验要～，不可弄虚做假。',
    explanation:
      '指从实际对象出发，探求事物的内部联系及其发展的规律性，认识事物的本质。通常指按照事物的实际情况办事。',
    pinyin: 'shí shì qiú shì',
    word: '实事求是',
    abbreviation: 'ssqs',
  },
  {
    derivation: '唐·李华《吊古战场文》伤心惨目，有如是耶！”',
    example: '他在一场车祸中不幸遇难，那场景真是～。',
    explanation: '睹看。凄惨得叫人不忍心看。',
    pinyin: 'cǎn bù rěn dǔ',
    word: '惨不忍睹',
    abbreviation: 'cbrd',
  },
  {
    derivation: '唐·杜甫《赠郑十八贲》诗古人日以远，青史字不泯。”',
    example:
      '无不希望捧着张献忠成就大事，自己成为开国功臣，封侯拜相，封妻荫子，并且～。★姚雪垠《李自成》第二卷第二十三章',
    explanation:
      '青史古代在竹简上记事，因称史书。把姓名事迹记载在历史书籍上。形容功业巨大，永垂不朽。',
    pinyin: 'míng chuí qīng shǐ',
    word: '名垂青史',
    abbreviation: 'mcqs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指口齿伶俐，辞令优美。',
    pinyin: 'lì huì shàn cí',
    word: '利喙赡辞',
    abbreviation: 'lhsc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指因受挫而气势丧尽。',
    pinyin: 'ruì cuò qì suǒ',
    word: '锐挫气索',
    abbreviation: 'rcqs',
  },
  {
    derivation:
      '《战国策·齐策二》楚有祠者，赐其舍人卮酒。舍人相谓曰‘数人饮之不足，一人饮之有余；请画地为蛇，先成者饮酒。’一人蛇先成，引酒且饮之，乃左手持卮，右手画蛇，曰‘吾能为之足。’未成，一人之蛇成，夺其卮曰‘蛇固无足，子安能为之',
    example: '无',
    explanation: '比喻做事节外生枝，不但无益，反而害事。',
    pinyin: 'wéi shé huà zú',
    word: '为蛇画足',
    abbreviation: 'wshz',
  },
  {
    derivation:
      '毛泽东《在延安文艺座谈会上的讲话》我们可以大声疾呼，而不要隐晦曲折，使人民大众不易看懂。”',
    example: '无',
    explanation:
      '隐晦不明显。指写文章或说话时用隐隐约约、转弯抹角的方式来表达某种思想。',
    pinyin: 'yǐn huì qū zhé',
    word: '隐晦曲折',
    abbreviation: 'yhqz',
  },
  {
    derivation: '清·曹雪芹《红楼梦》第一一八回可怜绣户侯门女，独卧青灯古佛旁!”',
    example:
      '想我智能年方二九，难道真将我的青春献给～不成？★欧阳予倩《馒头庵》第二场',
    explanation: '青荧的油灯和年代久远的佛像。借指佛门寂寞的生涯。',
    pinyin: 'qīng dēng gǔ fó',
    word: '青灯古佛',
    abbreviation: 'qdgf',
  },
  {
    derivation: '汉·王充《论衡·是应》风不鸣条，雨不破块，五日一风，十日一雨。”',
    example: '斗酒只鸡人笑乐，～岁丰穰。★宋·陆游《村居初夏》诗',
    explanation: '十天一刮风，五天一下雨。形容风调雨顺，气候适宜。',
    pinyin: 'shí fēng wǔ yǔ',
    word: '十风五雨',
    abbreviation: 'sfwy',
  },
  {
    derivation:
      '《左传·昭公二十三年》帅贱多宠，政令不壹。”《三国志·魏志·武帝纪 》吾知绍之为人，志大而智小，色厉而胆薄，忌克而少威，兵多而分画不明，将骄而政令不一，土地虽广粮食虽丰，适足以为吾奉也。”',
    example: '时～，诸蛮怨望，并谋背叛。★《晋书·应詹传》',
    explanation: '发出的命令不统一。形容军务或政务混乱。',
    pinyin: 'zhèng lìng bù yī',
    word: '政令不一',
    abbreviation: 'zlby',
  },
  {
    derivation:
      '《新唐书·杜甫传赞》唐诗人杜甫，浑涵汪茫，千汇万状，兼古今而有之。他人不足，甫乃厌余，残膏剩馥，沾丐后人多矣。”',
    example:
      '君之文非不如人，今彼籍吾～者，取青紫如捡荠。★明·宋廉《梅府君墓志铭》',
    explanation: '残剩余；膏油脂；馥香气。比喻前人留下的文学遗产。',
    pinyin: 'cán gāo shèng fù',
    word: '残膏剩馥',
    abbreviation: 'cgsf',
  },
  {
    derivation:
      '《战国策·楚策一》寡人卧不安席，食不甘味，心摇摇如悬旌，而无所终薄。”',
    example: '寡人闻之，～。★明·冯梦龙《东周列国志》第六回',
    explanation: '睡不安宁。形容心事、忧虑重重。',
    pinyin: 'wò bù ān xí',
    word: '卧不安席',
    abbreviation: 'wbax',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容许多人聚集在一起。',
    pinyin: 'jiāo jǐng bìng tóu',
    word: '交颈并头',
    abbreviation: 'jjbt',
  },
  {
    derivation:
      '姚雪垠《李自成》第一卷第二十四章请老兄放心，并非愚弟酒后乱吹，敝寨确是像铁打铜铸的一般。”',
    example: '无',
    explanation: '铁打成的，用铜浇铸的。形容非常坚固。',
    pinyin: 'tiě dǎ tóng zhù',
    word: '铁打铜铸',
    abbreviation: 'tdtz',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第十五回他近日所见的这几个三等仆妇，吃穿用度，已是不凡了，何况今至其家。”',
    example: '无',
    explanation: '指日常衣食费用。',
    pinyin: 'chī chuān yòng dù',
    word: '吃穿用度',
    abbreviation: 'ccyd',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第五回司人间之风情月债，掌人世之女怨男痴。”',
    example: '无',
    explanation: '比喻有关男女恋爱的事情。',
    pinyin: 'fēng qíng yuè zhài',
    word: '风情月债',
    abbreviation: 'fqyz',
  },
  {
    derivation:
      '《汉书·王吉传》大王诚留意如此，则心有尧舜之志，体有乔松之寿。”',
    example: '无',
    explanation: '乔、松古代传说中的仙人王乔和赤松子。指像仙人那样的长寿。',
    pinyin: 'qiáo sōng zhī shòu',
    word: '乔松之寿',
    abbreviation: 'qszs',
  },
  {
    derivation:
      '老舍《骆驼祥子》十四大家给他祝寿，他大模大样的承受，仿佛觉出自己是鳌里夺尊的一位老英雄。”',
    example: '无',
    explanation: '犹言出类拔萃。',
    pinyin: 'áo lǐ duó zūn',
    word: '鳌里夺尊',
    abbreviation: 'aldz',
  },
  {
    derivation: '南朝·宋·刘义庆《世说新语·言语》战战栗栗，汗不敢出。”',
    example: '无',
    explanation: '吓得连汗都不敢往外冒了。形容紧张害怕到了极点。',
    pinyin: 'hàn bù gǎn chū',
    word: '汗不敢出',
    abbreviation: 'hbgc',
  },
  {
    derivation:
      '茹志娟《在社会主义的轨道上》我跨上列车，心情是异乎寻常的，仿佛这紧张生动的生活节奏，将我全身的‘螺丝’也拧紧了。”',
    example: '无',
    explanation: '异不同；乎于；寻常平常。跟平常的情况很不一样。',
    pinyin: 'yì hū xún cháng',
    word: '异乎寻常',
    abbreviation: 'yhxc',
  },
  {
    derivation:
      '梁启超《清议报一百册祝辞并论报馆之责任及本馆之经历》既而臣民犯颜，友邦侧目，志不得逞，遂乃积羞成怒，大兴党狱。”',
    example: '无',
    explanation: '犹恼羞成怒。指羞愧至极，转生愤怒。',
    pinyin: 'jī xiū chéng nù',
    word: '积羞成怒',
    abbreviation: 'jxcn',
  },
  {
    derivation:
      '宋·朱熹《答高应朝书》若一向只如此说，而不孝以日用平常意思，涵养玩索功夫，即恐学者将此家常茶饭，做个怪异特底事看了。”',
    example:
      '这样调戏民间少女，侮辱兄弟民族，想来更会是～了。★郭沫若《奴隶制时代·汉代政权严重打击奴隶主》',
    explanation: '家庭中的日常饮食。多用以喻极为平常的事情。',
    pinyin: 'jiā cháng chá fàn',
    word: '家常茶饭',
    abbreviation: 'jccf',
  },
  {
    derivation:
      '元·刘祁《归潜志》卷七虽不可取于民奢纵害公，亦不必钓名要誉，太俭陋也。”',
    example: '无',
    explanation: '指用某种不正当的手段捞取名誉。同钓名沽誉”。',
    pinyin: 'diào míng yào yù',
    word: '钓名要誉',
    abbreviation: 'dmyy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指有名望的权贵。亦作名公钜卿”。',
    pinyin: 'míng gōng jù qīng',
    word: '名公巨卿',
    abbreviation: 'mgjq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '心思灵巧，能说会道。',
    pinyin: 'xīn qiǎo zuǐ guāi',
    word: '心巧嘴乖',
    abbreviation: 'xqzg',
  },
  {
    derivation: '《史记·廉颇蔺相如列传》',
    example: '无',
    explanation:
      '渑池古城名，在今河南渑池县南。本指战国时赵国蔺相如在渑池会上不畏秦王，为赵国立下功勋◇泛指为国立下巨大功勋。',
    pinyin: 'miǎn chí zhī gōng',
    word: '渑池之功',
    abbreviation: 'mczg',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第六十五回紫芝妹妹嘴虽利害，好在心口如一，直截了当，倒是一个极爽快的。”',
    example: '他说话、办事～，认真干脆。',
    explanation: '形容说话做事爽快、干脆。',
    pinyin: 'zhí jié liǎo dàng',
    word: '直截了当',
    abbreviation: 'zjld',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻亲戚极多。',
    pinyin: 'sì yīn jiǔ qī',
    word: '四姻九戚',
    abbreviation: 'syjq',
  },
  {
    derivation: '清·霁园主人《夜潭随录·崔秀才》谓叨在知己，亟当如命。”',
    example: '无',
    explanation:
      '叨谦词，表示辱没他人，自觉惭愧；知己友谊深厚的朋友。有愧于作为您的知己朋友。',
    pinyin: 'tāo zài zhī jǐ',
    word: '叨在知己',
    abbreviation: 'tzzj',
  },
  {
    derivation: '晋·潘岳《籍田鼠》野有菜蔬之色，朝靡代耕之秩。”',
    example: '无',
    explanation: '比喻人们在饥荒年景度日所显现的营养不良的脸色。',
    pinyin: 'cài shū zhī sè',
    word: '菜蔬之色',
    abbreviation: 'cszs',
  },
  {
    derivation:
      '《汉书·李陵传》今无兵复战，天明坐受缚矣！各鸟兽散，犹有得脱归报天子者。”',
    example: '粤兵素弱，见之即溃，～。★清·采蘅子《虫鸣漫录》',
    explanation:
      '象一群飞鸟走兽一样逃散。形容溃败逃散。也比喻集团或组织解散后，其成员各奔东西。',
    pinyin: 'rú niǎo shòu sàn',
    word: '如鸟兽散',
    abbreviation: 'rnss',
  },
  {
    derivation:
      '《东周列国志》第三二回众官员一拥而前，七嘴八张的，都问道‘世子何在？’”',
    example: '无',
    explanation: '形容人多语杂。',
    pinyin: 'qī zuǐ bā zhāng',
    word: '七嘴八张',
    abbreviation: 'qzbz',
  },
  {
    derivation: '唐·韩愈《南山》诗团辞试提挈，挂一念万漏。”',
    example: '相望二千里外，明月此心，恳恳侧厘，～。★宋·文天祥《与游提刑汶》',
    explanation: '挂钩取，这里指说到，提到；漏遗漏。形容说得不全，遗漏很多。',
    pinyin: 'guà yī lòu wàn',
    word: '挂一漏万',
    abbreviation: 'gylw',
  },
  {
    derivation:
      '晋·干宝《搜神记》卷十一[古冶子]左手持鼋头，右手挟左骖，燕跃鹄踊而出。仰天大呼，水为逆流三百步。”',
    example: '无',
    explanation: '形容迅捷威猛。',
    pinyin: 'yàn yuè hú yǒng',
    word: '燕跃鹄踊',
    abbreviation: 'yyhy',
  },
  {
    derivation:
      '《水浒传》第四五回那众僧都在法坛上看见了这妇人，自不觉都手之舞之，足之蹈之，一时间愚迷了佛性禅心，拴不定心猿意马。”',
    example:
      '那众和尚见了武大这个老婆，一个个都昏迷了～。★《金瓶梅词话》第八回',
    explanation: '指佛教徒一意修行、清静寂定之心性。',
    pinyin: 'fó xìng chán xīn',
    word: '佛性禅心',
    abbreviation: 'fxcx',
  },
  {
    derivation:
      '汉·杨秉《奏劾侯览》而今猥受过宠，执政操权，其阿谀取容者，则因公褎举，以报私惠。”',
    example: '且王髈等～，蔽贤窃位。★明·冯梦龙《东周列国志》',
    explanation: '阿谀曲意逢迎；取容取悦于人。谄媚他人，以取得其喜悦。',
    pinyin: 'ē yú qǔ róng',
    word: '阿谀取容',
    abbreviation: 'eyqr',
  },
  {
    derivation:
      '唐·刘禹锡《洛中逢白监同话游梁之乐因寄宣武令孤相公》诗借问风前兼月下，不知何客对胡床。”',
    example: '无',
    explanation: '指良辰美景。',
    pinyin: 'fēng qián yuè xià',
    word: '风前月下',
    abbreviation: 'fqyx',
  },
  {
    derivation: '清·曹雪芹《红楼梦》第六十六回原来如此，倒教我们悬了几日心。”',
    example: '无',
    explanation: '原来表示发现真实情况。原来是这样。',
    pinyin: 'yuán lái rú cǐ',
    word: '原来如此',
    abbreviation: 'ylrc',
  },
  {
    derivation: '《易·说卦》数往者顺，知来者逆。”',
    example: '无',
    explanation: '数计算；往过去；来未来。明了过去，可以推知未来。',
    pinyin: 'shǔ wǎng zhī lái',
    word: '数往知来',
    abbreviation: 'swzl',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第一○九回五儿听了，句句都是宝玉调戏之意，知这位呆爷却是真心实意的话。”',
    example: '无',
    explanation: '指真诚实在的心意。',
    pinyin: 'shí xīn shí yì',
    word: '实心实意',
    abbreviation: 'sxsy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '以桑枝为门，木条为枢。形容居处简陋，家境贫寒。',
    pinyin: 'sāng hù juàn shū',
    word: '桑户桊枢',
    abbreviation: 'shjs',
  },
  {
    derivation: '《史记·平原君虞卿列传》毛先生以三寸不烂之舌，强于百万之师。”',
    example: '他凭着～，使许多人听信了他的谎言。',
    explanation: '比喻能说会辩的口才。',
    pinyin: 'sān cùn zhī shé',
    word: '三寸之舌',
    abbreviation: 'sczs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '评论他人的好坏是非。',
    pinyin: 'huà cháng shuō duǎn',
    word: '话长说短',
    abbreviation: 'hcsd',
  },
  {
    derivation: '汉·张衡《归田赋》尔乃龙吟方泽，虎啸山丘。”',
    example: '～，鹤唳莺鸣。★明·吴承恩《西游记》第六十回',
    explanation: '象龙在鸣，虎在啸。比喻相关的事物互相感应。也形容人发迹。',
    pinyin: 'lóng yīn hǔ xiào',
    word: '龙吟虎啸',
    abbreviation: 'lyhx',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》第二十七卷好笑那莫稽只想着今日富贵，却忘了贫贱的时节，把老婆资助成名一段功劳化为春水，这是他心术不端处。”',
    example:
      '不多时，只见带上了个欺心背反、蓄意谋奸、三角眼含痛泪、一片～的总管马朝贤来。★清·石玉昆《三侠五义》第八十三回',
    explanation: '心地不正派；居心不良。',
    pinyin: 'xīn shù bù duān',
    word: '心术不端',
    abbreviation: 'xsbd',
  },
  {
    derivation:
      '《老子》自伐者无功，自矜者不长，其在道也，曰余食赘行，物或恶之。”',
    example: '无',
    explanation: '吃剩的食物，身上的赘疣。比喻遭人讨厌的东西。',
    pinyin: 'yú shí zhuì xíng',
    word: '余食赘行',
    abbreviation: 'yszx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '衣食无着，又饿又冷。形容生活极端贫困。同饥寒交迫”。',
    pinyin: 'jī hán jiāo zhì',
    word: '饥寒交至',
    abbreviation: 'jhjz',
  },
  {
    derivation: '唐·吕岩《七言之二》举世若能知所寓，超凡入胜弗为难。”',
    example:
      '今日弟幸会芝范，想领教一番～的道理，从此可以洗尽俗肠，重开眼界。★清·曹雪芹《红楼梦》第一一五回',
    explanation:
      '凡指凡人，普通人。超越平常人而达到圣贤的境界。形容学识修养达到了高峰。',
    pinyin: 'chāo fán rù shèng',
    word: '超凡入圣',
    abbreviation: 'cfrs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹强弩之末。比喻强大的力量已经衰弱，起不了什么作用。',
    pinyin: 'qiáng nǔ zhī jí',
    word: '强弩之极',
    abbreviation: 'qnzj',
  },
  {
    derivation:
      '北齐·颜之推《颜氏家训·省事》或有劫持宰相瑕疵而获酬谢，或有喧聒时人视听求见发遣，以此得官谓为才力，何异盗食致饱，窃衣取温哉！”',
    example: '无',
    explanation: '比喻以不正当手段获益。',
    pinyin: 'dào shí zhì bǎo',
    word: '盗食致饱',
    abbreviation: 'dszb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言相提并论。把不同的人或不同的事放在一起谈论或看待。',
    pinyin: 'tóng rì ér lùn',
    word: '同日而论',
    abbreviation: 'trel',
  },
  {
    derivation: '明·冯梦龙《醒世恒言》卷七这是我命中注定，该做他家的女婿。”',
    example: '无',
    explanation: '迷信的人认为人的一切遭遇都是命运预先决定的，人力无法挽回。',
    pinyin: 'mìng zhōng zhù dìng',
    word: '命中注定',
    abbreviation: 'mzzd',
  },
  {
    derivation:
      '汉·刘向《新序·杂事三》昔鲁听季孙之说逐孔子，宋信子冉之计逐墨翟，以孔墨之辩而不能自免，何则？众口铄金，积毁消骨。”',
    example:
      '～，巧言铄金，市虎成于三人，投杼起于屡至。★宋·苏轼《代滕甫辨谤乞郡书》',
    explanation: '指不断的毁谤能使人毁灭。同积毁销骨”。',
    pinyin: 'jī huǐ xiāo gǔ',
    word: '积毁消骨',
    abbreviation: 'jhxg',
  },
  {
    derivation:
      '明·张居正《答参军高梅庵》三十年生死之交，一旦遂成永隔，刺心裂肝，痛何可言。”',
    example: '无',
    explanation: '指悲痛至极。',
    pinyin: 'cì xīn liè gān',
    word: '刺心裂肝',
    abbreviation: 'cxlg',
  },
  {
    derivation: '《宋史·范如圭传》公不丧心病狂，奈何为此？必遗臭万世矣。”',
    example:
      '但是顽固派反对派对于进步文化机关的违法摧残其合法的事业，其～，可谓已达极点。★邹韬奋《患难余生记·进步文化的遭难》',
    explanation:
      '丧失理智，象发了疯一样。形容言行昏乱而荒谬，或残忍可恶到了极点。',
    pinyin: 'sàng xīn bìng kuáng',
    word: '丧心病狂',
    abbreviation: 'sxbk',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第三十一回这长苗子是我们中国原有的，如今搀在这德国操内，中又不中，外又不外，倒成了一个中外合璧。”',
    example:
      '她转过脸去看墙壁上的字画那也是～”的，张大千的老虎立轴旁边陪衬着两列五彩铜版印的西洋画。★茅盾《子夜》八',
    explanation:
      '合璧圆形有孔的玉叫璧，半圆形的叫半璧，两个半璧合成一个圆叫合璧”。比喻中国和外国的好东西合到一块。',
    pinyin: 'zhōng xī hé bì',
    word: '中西合璧',
    abbreviation: 'zxhb',
  },
  {
    derivation:
      '清·夏敬渠《野叟曝言》第一百一十四回可汗磕头如捣的说道‘我等肉眼凡夫，不知天使何等神佛。’”',
    example: '无',
    explanation: '磕头跪在地上头碰地。捣捶打。磕头快得像捶打东西一样。',
    pinyin: 'kē tóu rú dǎo',
    word: '磕头如捣',
    abbreviation: 'ktrd',
  },
  {
    derivation:
      '《魏书·李顺传》卿往复积岁，洞鉴废兴。若朕此年行师，不克以不？”',
    example: '无',
    explanation: '洞鉴明察。深入透彻地了解历代兴盛衰败情况。',
    pinyin: 'dòng jiàn fèi xīng',
    word: '洞鉴废兴',
    abbreviation: 'djfx',
  },
  {
    derivation: '后蜀·阎选《虞美人》词楚腰蛴领团香玉，鬓叠深深绿。”',
    example: '无',
    explanation: '指腰肢纤细，颈项洁白如蝤蛴。形容女子体态之美。',
    pinyin: 'chǔ yāo qí lǐng',
    word: '楚腰蛴领',
    abbreviation: 'cyql',
  },
  {
    derivation: '无',
    example: '他死不改悔，始终坚持他的错误论调。',
    explanation: '到死也不追悔、改正。形容非常顽固，坚持错误。',
    pinyin: 'sǐ bù gǎi huǐ',
    word: '死不改悔',
    abbreviation: 'sbgh',
  },
  {
    derivation:
      '《宋书·沈攸之传》所以未具上闻者，欲待至上，面自咨申。不图重关击柝，觐接莫由。”',
    example: '无',
    explanation: '设置重门，击柝（木梆）巡夜。指警戒森严。',
    pinyin: 'chóng guān jī tuò',
    word: '重关击柝',
    abbreviation: 'cgjt',
  },
  {
    derivation:
      '宋·朱熹《朱子语类·论语三》‘巧言’即今所谓花言巧语，如今世举子弄笔端做文字者是也。”',
    example:
      '我以为法律上的许多罪名，都是～，只有一语以包括之，曰可恶罪。★鲁迅《而已集·可恶罪》',
    explanation:
      '原指铺张修饰、内容空泛的言语或文辞◇多指用来骗人的虚伪动听的话。',
    pinyin: 'huā yán qiǎo yǔ',
    word: '花言巧语',
    abbreviation: 'hyqy',
  },
  {
    derivation:
      '宋·周密《齐东野语·嘉定宝玺》我祖我父，一心王宝……不死于虏，则死于盗贼；若子若孙，呼天号地，此恨难磨。”',
    example:
      '祖母詹忧危甚，每一病作，～，殆不欲生。★明·袁宏道《去吴七牍·乞归稿一》',
    explanation: '哭叫天地。形容极为冤屈、怨恨或痛苦。亦作呼天叫地”。',
    pinyin: 'hū tiān hào dì',
    word: '呼天号地',
    abbreviation: 'hthd',
  },
  {
    derivation: '晋·陶潜《归去来辞》问征夫以前路，恨晨光之熹微。”',
    example: '无',
    explanation: '熹微天色微明。早上天色微明。',
    pinyin: 'chén guāng xī wēi',
    word: '晨光熹微',
    abbreviation: 'cgxw',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '相传舜三度迁移，百姓慕德而从，所至处自成都邑。形容圣人到处都受到百姓的拥戴。',
    pinyin: 'sān xǐ chéng dōu',
    word: '三徙成都',
    abbreviation: 'sxcd',
  },
  {
    derivation:
      '鲁迅《中国小说史略·清之人情小说》宝钗妙玉则从徐说，旁征博引，用罚甚勤。”',
    example: '无',
    explanation:
      '旁广泛；征寻求；博广博；引引证。指说话、写文章引用材料作为依据或例证。',
    pinyin: 'páng zhēng bó yǐn',
    word: '旁征博引',
    abbreviation: 'pzby',
  },
  {
    derivation:
      '元高文秀《遇上皇》第一折[搽旦云]我不和你撒赖撒痴的，断了酒者！[正末唱]教我断消愁解闷瓮头香。”',
    example: '随时拣一支合式的唱唱，也足可～。★朱自清《经典常谈·诗经》',
    explanation: '消除忧愁，解除烦闷。',
    pinyin: 'xiāo chóu jiě mèn',
    word: '消愁解闷',
    abbreviation: 'xcjm',
  },
  {
    derivation:
      '《隶释·汉先生郭辅碑》有四男三女，咸高贤姣丽，富贵显荣，可谓子孙繁者已。”',
    example: '盖流离颠沛，权改男装；～，应修妇职。★清·侯芝《〈再生缘〉序》',
    explanation: '财多位高，显赫荣耀。',
    pinyin: 'fù guì xiǎn róng',
    word: '富贵显荣',
    abbreviation: 'fgxr',
  },
  {
    derivation:
      '清·俞万春《荡寇志》第一百三十一回闻达暗想道此人本是一勇之夫，不难取他，只是攻击得紧，他必死命相拒。看来此事，事宽则圆，急难成效。”',
    example: '姐姐不要性急，～。★清·石玉昆《三侠五义》第八十九回',
    explanation: '遇到事情只要从容对待，就能圆满解决。款宽缓。同事款则圆”。',
    pinyin: 'shì kuān zé yuán',
    word: '事宽则圆',
    abbreviation: 'skzy',
  },
  {
    derivation: '唐·白居易《长恨歌》玉容寂寞泪阑干，梨花一枝春带雨。”',
    example:
      '纣王定睛观看，见妲己乌云叠鬓，杏脸桃腮，浅淡春山，娇柔柳腰，真似海棠醉日，～。★明·许仲琳《封神演义》第四回',
    explanation:
      '象沾着雨点的梨花一样。原形容杨贵妃哭泣时的姿态◇用以形容女子的娇美。',
    pinyin: 'lí hu ài yǔ',
    word: '梨花带雨',
    abbreviation: 'lhay',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '皇帝的文告，用黄麻纸书写，用紫泥封缄，故称。',
    pinyin: 'huáng má zǐ ní',
    word: '黄麻紫泥',
    abbreviation: 'hmzn',
  },
  {
    derivation:
      '《晋书·傅玄传》每有奏劾，或值日暮，捧白简，整簪带，竦踊不寐，坐而待旦。于是贵游慑伏，台阁生风。”',
    example: '无',
    explanation:
      '台阁东汉尚书的办公室。泛指官府大臣在台阁中严肃的风气。比喻官风清廉。',
    pinyin: 'tái gé shēng fēng',
    word: '台阁生风',
    abbreviation: 'tgsf',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第三十六回家兄一想，这件事倘要认真办起来，与受同科，不但姓文的担不起，就是老哥亦落不是的。”',
    example:
      '凡赃私的银，是～的，他怎敢闹出来？★清·吴趼人《二十年目睹之怪现状》第四十六回',
    explanation: '行贿和受贿的人受到同等的处罚。',
    pinyin: 'yǔ shòu tóng kē',
    word: '与受同科',
    abbreviation: 'ystk',
  },
  {
    derivation:
      '《宋书·沈庆之传》治国如治家，耕当问奴，织当访婢。陛下今欲伐国，而与白面书生谋之，事何由济？”',
    example: '无',
    explanation: '比喻办事应该向内行请教。',
    pinyin: 'zhī dāng fǎng bì',
    word: '织当访婢',
    abbreviation: 'zdfb',
  },
  {
    derivation:
      '《孟子·梁惠王上》填然鼓之，兵刃既接，弃甲曳兵而走，或百步而后止，或五十步而后止。”',
    example:
      '杀得冷军左支右绌，只好～，败阵下去。★蔡东藩、许廑父《民国通俗演义》第二十八回',
    explanation: '丢掉盔甲，拖着武器。形容打败仗狼狈逃跑的样子。',
    pinyin: 'qì jiǎ yè bīng',
    word: '弃甲曳兵',
    abbreviation: 'qjyb',
  },
  {
    derivation: '《老子》第十五章涣兮若冰之将释。”',
    example: '误解和偏见并不能随着时间的推移而～。',
    explanation:
      '涣然流散的样子；释消散。象冰遇热消融一般。形容疑虑、误会、隔阂等完全消除。',
    pinyin: 'huàn rán bīng shì',
    word: '涣然冰释',
    abbreviation: 'hrbs',
  },
  {
    derivation:
      '唐·宋若华、宋若昭《女语论·和柔章》莫学愚妇，不问根源，秽言污语，触突尊贤。”',
    example:
      '（明月、清风）指着唐僧，秃前秃后，～，不绝口的乱骂。★明·吴承恩《西游记》第二十四回',
    explanation: '指粗俗下流、不堪入耳的话。',
    pinyin: 'huì yán wū yǔ',
    word: '秽言污语',
    abbreviation: 'hywy',
  },
  {
    derivation:
      '宋·李曾伯《贺新郎·自和前韵》词问讯南州守。怅吾生，今非昔比，后犹在否？”',
    example:
      '胜败军家常事”，何得为愧。～，不可欺敌。★明·许仲琳《封神演义》第三十八回',
    explanation:
      '昔过去。现在不是过去能比得上的。多指形势、自然面貌等发生了巨大的变化。',
    pinyin: 'jīn fēi xī bǐ',
    word: '今非昔比',
    abbreviation: 'jfxb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '贪恋生存，害怕死亡。',
    pinyin: 'tān shēng wèi sǐ',
    word: '贪生畏死',
    abbreviation: 'tsws',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容作事情表里不一，两面糊弄，两头讨好。同两头白面”。',
    pinyin: 'liǎng tóu sān miàn',
    word: '两头三面',
    abbreviation: 'ltsm',
  },
  {
    derivation:
      '清·洪楝园《县巗猿·归神》都是这一个狗才设计骗将出来，以为自己富贵之地，是以吾阁部为奇货，居心叵测，天理不容。”',
    example: '他是个～的家伙，要多加提防。',
    explanation: '居心存心；叵不可；测推测。指存心险恶，不可推测。',
    pinyin: 'jū xīn pǒ cè',
    word: '居心叵测',
    abbreviation: 'jxpc',
  },
  {
    derivation:
      '宋·袁燮《絜斋集》第十八卷是非予夺，多含糊其辞；公则不然，可则曰可，否则曰否。”',
    example:
      '发表时候，为了避免反动政府检查，有的地方故意～，现在把它们弄明确了。★沙汀《短篇小说集·后记》',
    explanation: '话说得不清不楚，含含糊糊。形容有顾虑，不敢把话照直说出来。',
    pinyin: 'hán hú qí cí',
    word: '含糊其辞',
    abbreviation: 'hhqc',
  },
  {
    derivation:
      '俞林《在太行山上》小范首先从树丛后面猛跳出来，那家伙吓得丢魂失魄，尖叫一声，返身就跑。”',
    example: '无',
    explanation: '形容非常惊慌，没头脑，无主见。',
    pinyin: 'diū hún shī pò',
    word: '丢魂失魄',
    abbreviation: 'dhsp',
  },
  {
    derivation:
      '唐·冯贽《云仙杂记·粲花》李白与人谈论，皆成句读，如春葩丽藻，粲于齿牙，时号李白粲花之论。”',
    example: '无',
    explanation: '比喻美妙的言谈。',
    pinyin: 'chūn pā lì zǎo',
    word: '春葩丽藻',
    abbreviation: 'cplz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指暗中转换移易。',
    pinyin: 'mò huàn qián yí',
    word: '默换潜移',
    abbreviation: 'mhqy',
  },
  {
    derivation:
      '明·郎瑛《七修类稿·国事一·象简龙衣联》高庙鼎成龙升之日，建文即位，成祖以燕王来，奔而不朝，盖以叔不拜侄也。”',
    example: '无',
    explanation: '指帝王去世。同鼎成龙去”。',
    pinyin: 'dǐng chéng lóng shēng',
    word: '鼎成龙升',
    abbreviation: 'dcls',
  },
  {
    derivation: '唐·张说《吊陈司马书》矫枉过中，斯害也已。”',
    example:
      '他有更张，随事谏止，不少循默。然无～之失，故能不亟有徐，进退有道，在元祐诸臣中，身名俱全，亦难矣哉！★《宋史·王存孙固等传论》',
    explanation: '比喻纠正错误超过了应有的限度。同矫枉过正”。',
    pinyin: 'jiǎo wǎng guò zhōng',
    word: '矫枉过中',
    abbreviation: 'jwgz',
  },
  {
    derivation:
      '冯德英《迎春花》第四章这次清算对蒋殿人来说真可谓牛身失毛，无足轻重。”',
    example: '无',
    explanation: '没有它并不轻些，有它也并不重些。指无关紧要。',
    pinyin: 'wú zú qīng zhòng',
    word: '无足轻重',
    abbreviation: 'wzqz',
  },
  {
    derivation: '《论语·公冶长》吾党之小子狂简，斐然成章，不知所以载之。”',
    example:
      '一二小友以为此虽不足以饷名家，或尚非无稗于初学，助之编定，～。★鲁迅《小说旧闻钞·序言》',
    explanation: '斐、章文采。形容文章富有文采，很值得看。',
    pinyin: 'fěi rán chéng zhāng',
    word: '斐然成章',
    abbreviation: 'frcz',
  },
  {
    derivation: '无',
    example:
      '虽受过多年的感化教育，他仍然不改偷窃的恶习，这样的人已是让人～的了。',
    explanation: '认为不值得教训。',
    pinyin: 'bù xiè jiào huì',
    word: '不屑教诲',
    abbreviation: 'bxjh',
  },
  {
    derivation: '宋·孙光宪《北梦琐言》卷二所谓言近意远，合《三百篇》之旨也。”',
    example: '无',
    explanation: '话很浅近，含义却很深远。同言近旨远”。',
    pinyin: 'yán jìn yì yuǎn',
    word: '言近意远',
    abbreviation: 'yjyy',
  },
  {
    derivation:
      '汉·司马迁《与挚伯陵书》伏唯伯陵材能绝人，高尚其志，以善厥身，冰清玉洁，不以细行。”',
    example: '我这一去～，干事回还，管着你们喝采他。★元·无名氏《陈州粜米》楔子',
    explanation:
      '象冰那样清澈透明，象玉那样洁白无瑕。比喻人的操行清白（多用于女子）。',
    pinyin: 'bīng qīng yù jié',
    word: '冰清玉洁',
    abbreviation: 'bqyj',
  },
  {
    derivation:
      '《周易·系辞下》是故君子安而不忘危，存而不忘亡，治而不忘礼，是以身安而国家可保也。”',
    example:
      '何小姐是从苦境里过来的，如今得地身安，安不忘危，立志要成全起这份人家，立番事业。★清·文康《儿女英雄传》第三十回',
    explanation: '在安全的时候不忘记危难。意思是时刻谨慎小心，提高警惕。',
    pinyin: 'ān bù wàng wēi',
    word: '安不忘危',
    abbreviation: 'abww',
  },
  {
    derivation: '南朝·梁·袁昂《古今书评》卫常书，如插花美人，舞笑镜台。”',
    example:
      '昔人谓褚登善书，如～，或谓其出于汉隶。★清·王昶《金石萃编·杨震碑跋》',
    explanation: '簪插戴。形容书法娟秀。也比喻诗文清新秀丽。',
    pinyin: 'měi nǚ zān huā',
    word: '美女簪花',
    abbreviation: 'mnzh',
  },
  {
    derivation: '宋·曾巩《寄欧阳舍人书》其感与报，宜若何而图之。”',
    example:
      '如果能培植他出镇方面，则～，声气相应，岂不是平添了一条臂膀。★高阳《清宫外史》上册',
    explanation: '图设法。感激别人的恩情而想办法回报。',
    pinyin: 'gǎn ēn tú bào',
    word: '感恩图报',
    abbreviation: 'getb',
  },
  {
    derivation:
      '孙犁《关于中篇小说》鲁迅先生的《阿q正传》，是中国中篇小说的开山鼻祖。”',
    example: '无',
    explanation: '比喻一个学术流派、技艺的开创者。',
    pinyin: 'kāi shān bí zǔ',
    word: '开山鼻祖',
    abbreviation: 'ksbz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容对情况非常熟悉。',
    pinyin: 'làn ruò pī zhǎng',
    word: '烂若披掌',
    abbreviation: 'lrpz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指虽看得见，却得不到或摸不着。同镜里观花”。',
    pinyin: 'jìng lǐ cǎi huā',
    word: '镜里采花',
    abbreviation: 'jlch',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言严刑峻法。严厉的刑吠严峻的法令。',
    pinyin: 'shēn wén jùn fǎ',
    word: '深文峻法',
    abbreviation: 'swjf',
  },
  {
    derivation:
      '宋·苏轼《再乞罢详定役法状》右臣先曾奏论前衙一役，只当招募，不当定差，执政不以为然。”',
    example: '听他说洋人不是，口虽不言，心下却老大～。★清·李宝嘉《官场现形记》',
    explanation: '然是，对。不认为是对的。表示不同意或否定。',
    pinyin: 'bù yǐ wéi rán',
    word: '不以为然',
    abbreviation: 'bywr',
  },
  {
    derivation: '宋·苏轼《孔北海赞序》世以成败论人物，故操得在英雄之列。”',
    example:
      '～，固是庸人之见；但本朝大事，你我做臣子的，说话须要谨慎。★清·吴敬梓《儒林外史》第八回',
    explanation: '论评论，衡量。以成功和失败作为评论人物的标准。',
    pinyin: 'chéng bài lùn rén',
    word: '成败论人',
    abbreviation: 'cblr',
  },
  {
    derivation:
      '清·燕谷老人《续孽海花》第四十四回这样的不阴不阳，教我怎么好呢？”',
    example: '他神情不阴又不阳。★京剧《沙家浜》第四场',
    explanation: '比喻态度不明朗，模棱两可。',
    pinyin: 'bù yīn bù yáng',
    word: '不阴不阳',
    abbreviation: 'byby',
  },
  {
    derivation:
      '古华《水酒湾纪事》若不趁早回头……肯定有跌大跤子、鼻青眼乌的时侯。”',
    example: '无',
    explanation: '鼻子发青，眼圈发黑。形容脸部伤势严重。',
    pinyin: 'bí qīng yǎn wū',
    word: '鼻青眼乌',
    abbreviation: 'bqyw',
  },
  {
    derivation: '《周易·系辞下》服牛乘马，引重致远，以利天下。”',
    example: '自轩辕以来，～，今辇以人负，则人代畜。★《新唐书·王求礼传》',
    explanation: '役使牛马驾车。',
    pinyin: 'fú niú chéng mǎ',
    word: '服牛乘马',
    abbreviation: 'fncm',
  },
  {
    derivation: '《汉书·贾谊传》圣人有金城者，比物此志也。”',
    example: '无',
    explanation: '比物比类，比喻；志心意。指用事物行为来寄托、表达自己的心意。',
    pinyin: 'bǐ wù cǐ zhì',
    word: '比物此志',
    abbreviation: 'bwcz',
  },
  {
    derivation:
      '《庄子·养生主》彼节者有间，而刀刃者无厚，以无厚入有间，恢恢乎其于游刃必有余地矣。”',
    example: '无',
    explanation:
      '恢恢形容宽广。薄薄的刀刃插入骨节间，仍觉宽广，还有回旋余地。常形容本领大，技巧高，处理问题毫不费力。',
    pinyin: 'huī huī yǒu yú',
    word: '恢恢有余',
    abbreviation: 'hhyy',
  },
  {
    derivation: '西汉·司马迁《史记·商君列传》君之危若朝露，尚将欲延年益寿乎！”',
    example:
      '今李氏～，汝诸王不舍生取义。★宋·司马光《资治通鉴·唐则天后垂拱四年》',
    explanation: '危险得像清早的露水一样容易消失。比喻面临死亡。',
    pinyin: 'wēi ruò zhāo lù',
    word: '危若朝露',
    abbreviation: 'wrzl',
  },
  {
    derivation:
      '南朝·梁·萧绎《驰檄告四方》郭默清夷，晋熙附义，计穷力屈，反杀后主。”',
    example:
      '妖王笑道那猴儿～，无处求人，断然是送命来也。”★明·吴承恩《西游记》第六十六回',
    explanation: '穷、竭尽。计谋、力量都用尽了。',
    pinyin: 'jì qióng lì jié',
    word: '计穷力竭',
    abbreviation: 'jqlj',
  },
  {
    derivation:
      '柳青《创业史》第一部他眉飞眼笑，高兴地跳着，大声喊道‘解放啦！’”',
    example: '无',
    explanation: '形容非常高兴。',
    pinyin: 'méi fēi yǎn xiào',
    word: '眉飞眼笑',
    abbreviation: 'mfyx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容人多拥挤。同骈肩累迹”。',
    pinyin: 'pián jiān dié jì',
    word: '骈肩叠迹',
    abbreviation: 'pjdj',
  },
  {
    derivation:
      '《清平山堂话本·五戒禅师私红莲记》一个初侵女色，由如饿虎吞羊。”',
    example: '无',
    explanation: '饥饿的老虎活吞一只羊羔。比喻迅猛贪婪。',
    pinyin: 'è hǔ tūn yáng',
    word: '饿虎吞羊',
    abbreviation: 'ehty',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻赶上别人的前进速度。',
    pinyin: 'wàng chén zhuī jì',
    word: '望尘追迹',
    abbreviation: 'wczj',
  },
  {
    derivation:
      '清·夏燮《中西纪事·剿抚异同》成庙暮年，深见承平日久，文弛武玩，禁烟之令稍以操切治之，辄启边衅。”',
    example: '无',
    explanation: '文武官员玩忽职守。',
    pinyin: 'wén chí wǔ wán',
    word: '文弛武玩',
    abbreviation: 'wcww',
  },
  {
    derivation:
      '清·钱彩《说岳全传》第四十七回……若不听我良言，只是与你决一胜负。”',
    example: '无',
    explanation: '决决定；胜负胜败。进行决战，判定胜败。',
    pinyin: 'jué yī shèng fù',
    word: '决一胜负',
    abbreviation: 'jysf',
  },
  {
    derivation:
      '清·钱谦益《覆徐巨源书》流浪壮齿，记滥俗学，侵寻四十，赁耳佣目，乃稍知古学之由来。”',
    example: '无',
    explanation: '指借助于所见所闻。',
    pinyin: 'lìn ěr yōng mù',
    word: '赁耳佣目',
    abbreviation: 'leym',
  },
  {
    derivation: '《孟子·梁惠王上》‘孰能一之？’对曰‘不嗜杀人者能一之。’”',
    example: '无',
    explanation: '嗜爱好∶杀人成了习性。形容极端凶残。',
    pinyin: 'shì shā chéng xìng',
    word: '嗜杀成性',
    abbreviation: 'sscx',
  },
  {
    derivation:
      '宋·王銍《默记》卷上晋公候于阁门，见其甚久。则顿足捩耳云‘无及矣。’”',
    example: '无',
    explanation: '形容束手无策的困态。',
    pinyin: 'dùn zú liè ěr',
    word: '顿足捩耳',
    abbreviation: 'dzle',
  },
  {
    derivation: '无',
    example: '数十载的监牢生涯，使他遍尝～。',
    explanation: '指监牢里囚犯的生活。',
    pinyin: 'tiě chuāng fēng wèi',
    word: '铁窗风味',
    abbreviation: 'tcfw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻境况逐渐好转或兴趣逐渐浓厚。同渐入佳境”。',
    pinyin: 'jiàn zhì jiā jìng',
    word: '渐至佳境',
    abbreviation: 'jzjj',
  },
  {
    derivation:
      '冯德英《迎春花》第八章我要是能把他拖出那死气沉沉的顽固家庭，送去参了军，他不就变好啦！”',
    example: '无',
    explanation: '形容气氛不活泼。也形容人精神消沉，不振作。',
    pinyin: 'sǐ qì chén chén',
    word: '死气沉沉',
    abbreviation: 'sqcc',
  },
  {
    derivation:
      '汉·班彪《王命论》帝王之祚，必有明圣，显懿之德，丰功厚利积累之业。”',
    example:
      '是则岂有国家所以存录能立～之人，而此州之民素蒙其休，顾显然无一忌惮，咸得以名而称之哉。★宋·文同《奏为乞改陵州州名状》',
    explanation: '指巨大的功利。',
    pinyin: 'fēng gōng hòu lì',
    word: '丰功厚利',
    abbreviation: 'fghl',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第四十四回无如林之洋虽在海外走过几次，诸事并不留心，究竟见闻不广，被小山盘根问底，今日也谈，明日也谈，腹中所有若干典故，久已告竣。”',
    example: '无',
    explanation: '盘仔细查问；问寻问。盘问、追究事情的根由。',
    pinyin: 'pán gēn wèn dǐ',
    word: '盘根问底',
    abbreviation: 'pgwd',
  },
  {
    derivation: '无',
    example: '他的泛泛之谈让我如堕五里雾中。',
    explanation: '泛泛浮浅不深入。一般化地泛泛地谈谈。',
    pinyin: 'fàn fàn zhī tán',
    word: '泛泛之谈',
    abbreviation: 'ffzt',
  },
  {
    derivation:
      '清·戴名世《〈读易质疑〉序》世苟有通学古之士，潜心冥会，融释贯通，其于程朱继志述事，能补其所未及，是亦程朱之功臣也。”',
    example: '无',
    explanation: '把各方面的知识和道理融化汇合，得到全面透彻的理解。',
    pinyin: 'róng shì guàn tōng',
    word: '融释贯通',
    abbreviation: 'rsgt',
  },
  {
    derivation: '《左传·宣公三年》楚子问鼎之大小轻重焉？”',
    example: '无',
    explanation: '问鼎的大小轻重。指妄图夺取天下。',
    pinyin: 'wèn dǐng qīng zhòng',
    word: '问鼎轻重',
    abbreviation: 'wdqz',
  },
  {
    derivation:
      '宋·邵伯温·《闻见前录》卷六及唐元宗时，宰相姚元崇直奏十事，可以坐销患害，立致升平，惟虑至尊，未能留意。医时救弊 ，无出于斯！”',
    example: '无',
    explanation: '匡正时政的弊病。',
    pinyin: 'yī shí jiù bì',
    word: '医时救弊',
    abbreviation: 'ysjb',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '诟辱骂。被人辱骂却好象没有听见一样，不动声色，形容宽宏大量，有涵养。',
    pinyin: 'gòu rú bù wén',
    word: '诟如不闻',
    abbreviation: 'grbw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻长寿。',
    pinyin: 'sōng bǎi zhī shòu',
    word: '松柏之寿',
    abbreviation: 'sbzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻设计划策。',
    pinyin: 'xíng zhēn bù xiàn',
    word: '行针步线',
    abbreviation: 'xzbx',
  },
  {
    derivation: '《吕氏春秋·士容论·士容》士不偏不党。”',
    example: '无',
    explanation: '不偏向任何一方。',
    pinyin: 'bù piān bù dǎng',
    word: '不偏不党',
    abbreviation: 'bpbd',
  },
  {
    derivation:
      '明·凌濛初《初刻拍案惊奇》卷二除是至亲骨肉，缓和疼痛日在面前的，用意体察，才看得出来。”',
    example: '无',
    explanation: '关系最近的亲人。',
    pinyin: 'zhì qīn gǔ ròu',
    word: '至亲骨肉',
    abbreviation: 'zqgr',
  },
  {
    derivation: '《汉书·王嘉传》吏或居官数月而退，送故迎新，交错道路。”',
    example: '你与我逞精神～。★元·杨景贤《刘行首》第一折',
    explanation: '旧指欢送卸任的官吏，迎接新来接替的官吏◇也用于一般人事往来。',
    pinyin: 'sòng gù yíng xīn',
    word: '送故迎新',
    abbreviation: 'sgyx',
  },
  {
    derivation: '《庄子·渔父》有渔父者下船而来，须眉交白，被发揄袂。”',
    example: '无',
    explanation: '交都→须和眉毛都白了。',
    pinyin: 'xū méi jiāo bái',
    word: '须眉交白',
    abbreviation: 'xmjb',
  },
  {
    derivation:
      '《战国策·齐策二》齐必举兵伐梁，梁、齐之兵连于城下不能去，王以其间伐韩。”',
    example:
      '若侯～，将至壕边，然后拒敌，事已迟矣。★明·罗贯中《三国演义》第三十一回',
    explanation: '敌军已来到自己的城墙下面。比喻情势十分危急。',
    pinyin: 'bīng lín chéng xià',
    word: '兵临城下',
    abbreviation: 'blcx',
  },
  {
    derivation:
      '南朝·宋·刘义庆《世说新语·言语》卿居心不净，乃复强欲滓秽太清耶。”',
    example: '讵料它们～，渐渐变坏。★丰子恺《口中剿匪”记》',
    explanation: '居心存心；良善。存心不善。指内心存在着恶意或阴谋。',
    pinyin: 'jū xīn bù liáng',
    word: '居心不良',
    abbreviation: 'jxbl',
  },
  {
    derivation:
      '语出《后汉书·皇后纪上·明德马皇后》前过濯龙门上，见外家问起居者，车如流水，马如游龙，仓头衣绿褠，领袖正白，顾视御者，不及远矣。”',
    example: '～日夜弛，品题素竹与哀丝。★清·李慈铭《大风有感》诗',
    explanation: '比喻川流不息的车马。',
    pinyin: 'liú shuǐ yóu lóng',
    word: '流水游龙',
    abbreviation: 'lsyl',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第二十八回于是遂起军往汝南驻扎，招兵买马，徐图征进。”',
    example: '我们人手不足，需要～了。',
    explanation: '旧时指组织或扩充武装力量◇比喻组织或扩充人力。',
    pinyin: 'zhāo bīng mǎi mǎ',
    word: '招兵买马',
    abbreviation: 'zbmm',
  },
  {
    derivation:
      '清·李宝嘉《文明小史》第八回虽然不至于通部滚瓜烂熟，大约一部之中，至少亦有一半看熟在肚里，不然怎么能够脱口而出呢？”',
    example: '无',
    explanation: '不经考虑，随口说出。',
    pinyin: 'tuō kǒu ér chū',
    word: '脱口而出',
    abbreviation: 'tkec',
  },
  {
    derivation: '元·高明《琵琶记·牛小姐规劝侍俾》惊起娇莺语燕，打开浪蝶狂蜂。”',
    example: '无',
    explanation: '轻狂的蜂蝶。比喻轻狂的男子。',
    pinyin: 'làng dié kuáng fēng',
    word: '浪蝶狂蜂',
    abbreviation: 'ldkf',
  },
  {
    derivation:
      '唐·李延寿《北史·齐本纪上》书至，无点，景不至。又闻神武疾，遂拥兵自固。”',
    example:
      '景得书无点，辞不至；又闻欢疾笃，用其行台郎颍川王伟计，遂～。★《资治通鉴·高祖武皇帝中大同元年》',
    explanation: '拥有掌握军队的权力，以巩固自己的地位。',
    pinyin: 'yōng bīng zì gù',
    word: '拥兵自固',
    abbreviation: 'ybzg',
  },
  {
    derivation: '《易·系辞上》慢藏诲盗，冶容诲淫。”',
    example: '无',
    explanation: '指因保管疏忽而招致盗窃。',
    pinyin: 'màn cáng huì dào',
    word: '漫藏诲盗',
    abbreviation: 'mchd',
  },
  {
    derivation: '《论语·宪问》微管仲，吾其被发左衽矣。”',
    example: '或～，奋迅泥滓。★晋·潘岳《西征赋》',
    explanation:
      '被发散发不作髻；左衽瓣襟向左掩。指古代中原地区以外少数民族的装束。也指沦为夷狄。',
    pinyin: 'pī fà zuǒ rèn',
    word: '被发左衽',
    abbreviation: 'pfzr',
  },
  {
    derivation: '汉·扬雄《法言·吾子》寡闻则无约也，寡见则无卓也。”',
    example: '无',
    explanation: '听的少，见的少。形容学识浅薄，见闻不广。',
    pinyin: 'guǎ wén shǎo jiàn',
    word: '寡闻少见',
    abbreviation: 'gwsj',
  },
  {
    derivation:
      '《汉书何并传》诩（严诩）本以孝行为官，谓掾史为师友，有过辄闭阁自责，终不大言。”',
    example: '民有争诉者，辄～，然后断其讼，以道譬之。★《后汉书·吴祐传》',
    explanation: '指关起门来自我反省。同闭阁思过”。',
    pinyin: 'bì gé zì zé',
    word: '闭阁自责',
    abbreviation: 'bgzz',
  },
  {
    derivation: '先秦·管仲《管子·七法》有一体之治，故能出号令，明宪法矣。”',
    example: '无',
    explanation: '融合为整体。比喻几种事物关系密切，配合自然，如同一个整体。',
    pinyin: 'róng wéi yī tǐ',
    word: '融为一体',
    abbreviation: 'rwyt',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容孤独，没有同伴。同形单影只”。',
    pinyin: 'xíng gū yǐng guǎ',
    word: '形孤影寡',
    abbreviation: 'xgyg',
  },
  {
    derivation: '《庄子·天地》凿隧而入井，抱瓮而出灌。”',
    example: '无',
    explanation: '比喻费力多而收效少。',
    pinyin: 'záo suì rù jǐng',
    word: '凿隧入井',
    abbreviation: 'zsrj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指藏匿踪迹，不露才智。',
    pinyin: 'tāo jì yǐn zhì',
    word: '韬迹隐智',
    abbreviation: 'tjyz',
  },
  {
    derivation:
      '秦·李斯《谏逐客书》所以饰后宫，充下陈，娱心意，说耳目者，必出于秦然后可。”北齐·颜之推《颜氏家训·勉学》直取其清淡雅论，剖玄析微，宾主往复，娱心悦耳，非济世成俗之要也。”',
    example: '无',
    explanation: '娱、悦使愉快。使心情愉快，耳目舒畅。',
    pinyin: 'yú xīn yuè mù',
    word: '娱心悦目',
    abbreviation: 'yxym',
  },
  {
    derivation: '宋·欧阳修《采桑子》词风清月白偏宜夜，一片琼田。”',
    example:
      '后～之夕，每见其魂在墓前松柏下，摇首独步。★清·纪昀《阅微草堂笔记·滦阳消夏录三》',
    explanation: '微风清凉，月色皎洁。形容夜景幽美宜人。同风清月皎”。',
    pinyin: 'fēng qīng yuè bái',
    word: '风清月白',
    abbreviation: 'fqyb',
  },
  {
    derivation:
      '《三国演义》第四二回今刘备釜中之鱼，阱中之虎，若不就此时擒捉，如放鱼入海，纵虎归山矣。”',
    example:
      '如果捉不住打不死，让他们逃走了，就等于～，纵虎归山。★周玉清《晋西事变中的一夜》',
    explanation: '比喻放走敌人，留下祸根。',
    pinyin: 'fàng yú rù hǎi',
    word: '放鱼入海',
    abbreviation: 'fyrh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '用诗歌表达自己的思想和志趣。亦作诗言志”、诗以道志”。',
    pinyin: 'shī yǐ yán zhì',
    word: '诗以言志',
    abbreviation: 'syyz',
  },
  {
    derivation:
      '唐·王勃《滕王阁序》老当益壮，宁移白首之心？穷且益坚，不坠青云之志。”',
    example: '无',
    explanation: '老年时的壮志。',
    pinyin: 'bái shǒu zhī xīn',
    word: '白首之心',
    abbreviation: 'bszx',
  },
  {
    derivation:
      '明·冯梦龙《喻世明言》第五卷一生挣得一副好酒量，闷来时只是饮酒，尽醉方休，日常饭食，有一顿，没一顿，都不计较，单少不得杯中之物。”',
    example: '无',
    explanation: '杯子中的东西，指酒。同杯中物”。',
    pinyin: 'bēi zhōng zhī wù',
    word: '杯中之物',
    abbreviation: 'bzzw',
  },
  {
    derivation: '宋·梅尧臣《杜鹃》诗不如归去语，亦自古来传。”',
    example: '杜鹃，其鸣若曰～。★明·李时珍《本草纲目·禽部》',
    explanation:
      '杜鹃鸟的叫声很象不如归去”。旧时常用以作思归或催人归去之辞。也表示消极求退。',
    pinyin: 'bù rú guī qù',
    word: '不如归去',
    abbreviation: 'brgq',
  },
  {
    derivation: '唐·杜甫《闻官军收河南河北》白日放歌须纵酒，青春作伴好还乡。”',
    example: '无',
    explanation:
      '放歌高声歌唱；纵酒任意饮酒，不加节制。尽情歌唱，放量地饮酒。形容开怀畅饮尽兴欢乐。',
    pinyin: 'fàng gē zòng jiǔ',
    word: '放歌纵酒',
    abbreviation: 'fgzj',
  },
  {
    derivation:
      '宋·叶適《石洞书院记》游之兴废，家之盛衰占焉；学之兴废，人之盛衰占焉。学不待地也，萤灯雪屋，苟取尺寸，而圣贤之业可成矣。”',
    example: '无',
    explanation: '指勤学苦读。同萤窗雪案”。',
    pinyin: 'yíng dēng xuě wū',
    word: '萤灯雪屋',
    abbreviation: 'ydxw',
  },
  {
    derivation:
      '清·陈康棋《郎潜纪闻》卷一辽沈旧人，胜朝遗聈，比肩叠踵，同掌丝纶。”',
    example: '无',
    explanation: '形容人多。叠踵，脚尖踩脚跟。',
    pinyin: 'bǐ jiān dié zhǒng',
    word: '比肩叠踵',
    abbreviation: 'bjdz',
  },
  {
    derivation: '《易·序卦》穷大者必失其居。”',
    example: '无',
    explanation: '形容多而不适用。',
    pinyin: 'qióng dà shī jū',
    word: '穷大失居',
    abbreviation: 'qdsj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指能和顺而宽容。',
    pinyin: 'kè dǎi kè róng',
    word: '克逮克容',
    abbreviation: 'kdkr',
  },
  {
    derivation: '南朝·宋·刘义庆《世说新语·方正》此郎亦管中窥豹，时见一斑。”',
    example: '有的人孤陋寡闻，～，却喜欢夸夸其谈，炫耀自己。',
    explanation:
      '从竹管的小孔里看豹，只看到豹身上的一块斑纹。比喻只看到事物的一部分，指所见不全面或略有所得。',
    pinyin: 'kuī bào yī bān',
    word: '窥豹一斑',
    abbreviation: 'kbyb',
  },
  {
    derivation:
      '《战国策·楚策四》不知夫五尺童子，方将调饴胶丝，加之乎四仞之上，而下为蝼蚁食也。”',
    example: '无',
    explanation: '五尺古代尺短，所以以五尺指儿童的身高。泛指儿童。',
    pinyin: 'wǔ chǐ tóng zǐ',
    word: '五尺童子',
    abbreviation: 'wctz',
  },
  {
    derivation:
      '清·魏源《淮北票盐志叙》夫票盐售价不及纲盐之半，而纲商岸悬课绌，票商云趋鹜赴者，何哉？”',
    example: '无',
    explanation: '比喻从四方奔赴而至。',
    pinyin: 'yún qū wù fù',
    word: '云趋鹜赴',
    abbreviation: 'yqwf',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第十九回忽然，一路顺风里说到想要告休归里。”清·俞万春《荡寇志》第一二二回且喜连冬过春，徐槐一边久无消息，更喜云陈两处亦无动静，一路顺风无些毫打叉之事，以是吴用渐渐向愈。”',
    example: '我们这次出门旅行真是～，沿途一点儿也没有耽误。',
    explanation: '旅途平安（多用于祝人）。',
    pinyin: 'yī lù shùn fēng',
    word: '一路顺风',
    abbreviation: 'ylsf',
  },
  {
    derivation: '宋·范仲淹《岳阳楼记》朝晖夕阴，气象万千。”',
    example: '这庄严秀丽、～的长江真是美极了。★刘白羽《长江三日》',
    explanation: '气象情景。形容景象或事物壮丽而多变化。',
    pinyin: 'qì xiàng wàn qiān',
    word: '气象万千',
    abbreviation: 'qxwq',
  },
  {
    derivation: '南唐·李煜《浪淘沙》帘外雨潺潺，春意阑珊。”',
    example: '柳飞绵花瓢瓣，又一番～。(元·方伯成《端正好·忆别》)',
    explanation: '阑珊将尽，将衰。指春天就要过去了。',
    pinyin: 'chūn yì lán shān',
    word: '春意阑珊',
    abbreviation: 'cyls',
  },
  {
    derivation:
      '汉·贾谊《新书·审微》事之適乱，如地形之惑人也，机渐而往，俄而东西易面，人不自知也。故墨子见衢路而哭之，悲一跬而缪千里也。”',
    example:
      '媢疾之臣相继而居腹之心，其术百变，能使～，人主自为转移而不觉耳。★清·方苞《跋札》',
    explanation: '指东西方向颠倒◇比喻是非颠倒，视听淆乱。',
    pinyin: 'dōng xi yì miàn',
    word: '东西易面',
    abbreviation: 'dxym',
  },
  {
    derivation: '《庄子·逍遥游》抟扶摇而上九万里。”',
    example: '无',
    explanation: '扶摇急剧盘旋而上的暴风。暴风从下而上盘旋很高，风势急且大。',
    pinyin: 'fú yáo wàn lǐ',
    word: '扶摇万里',
    abbreviation: 'fywl',
  },
  {
    derivation:
      '清·无名氏《杜诗言志》卷一故读者于此等处最要分别，不然则视少陵为随地蓦缘，沿门托钵者流矣。”',
    example:
      '却说仲勋穷途落魄，流入乞丐道中，终日在街头～，到了夜间，就在人家屋檐底下歇宿。★清·彭养鸥《黑籍冤魂》第二十回',
    explanation: '钵和尚吃东西用的器具。原指僧徒化缘。比喻挨家乞讨。',
    pinyin: 'yán mén tuō bō',
    word: '沿门托钵',
    abbreviation: 'ymtb',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第三回这些人个个皆敛声屏气如此，这个者是谁，这样放诞无礼。”',
    example: '无',
    explanation: '敛收入束；屏抑止。抑制语声和呼吸。形容畏惧、小心的样子。',
    pinyin: 'liǎn shēng bǐng qì',
    word: '敛声屏气',
    abbreviation: 'lsbq',
  },
  {
    derivation:
      '明·高攀龙《寄瞿洞观书》之二广土众民，君子所欲。老丈得之，其与世俗吏传舍一官者，必有如燕驾越毂，不可同年而语。”',
    example: '无',
    explanation: '燕地的车越地的毂。指把不同的东西混在一起。',
    pinyin: 'yān jià yuè gū',
    word: '燕驾越毂',
    abbreviation: 'yjyg',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第六十五回他看见奶奶比他标致，可比他得人心儿，他就肯善罢干休了？”',
    example:
      '你五尺五的汉子，就这样忍气吞声～吗？不！（李英儒《野火春风斗古城》第七章）',
    explanation:
      '善好好地；甘休情愿罢休∶好地解决纠纷，不再闹下去（多用于否定）。',
    pinyin: 'shàn bà gān xiū',
    word: '善罢干休',
    abbreviation: 'sbgx',
  },
  {
    derivation:
      '元·刘壎《隐居通议·诗歌六》蕃武忠君爱国，辞严谊正，不暇自恤，枚蹈危机，其失在于疏尔。”',
    example: '无',
    explanation: '言辞严厉，义理正大。同辞严义正”。',
    pinyin: 'cí yán yì zhèng',
    word: '辞严谊正',
    abbreviation: 'cyyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '毛发竖起。极言惊骇、恐惧。亦作毛发耸然”。',
    pinyin: 'máo fā sǒng rán',
    word: '毛发悚然',
    abbreviation: 'mfsr',
  },
  {
    derivation: '《韩非子·五蠹》弃私家之事，而必汗马之劳。”',
    example: '将俺丞相～一旦忘了，贬在济南府闲住。★元·王实甫《丽堂春》第四折',
    explanation:
      '汗马将士骑的马奔驰出汗，比喻征战劳苦。指在战场上建立战功。现指辛勤工作做出的贡献。',
    pinyin: 'hàn mǎ gōng láo',
    word: '汗马功劳',
    abbreviation: 'hmgl',
  },
  {
    derivation:
      '唐·刘禹锡《砥石赋》故态复还，宝心再起。既赋形而终用，一蒙垢焉何耻？”',
    example: '无',
    explanation: '指旧的习气或毛病等又出现了。同故态复萌”。',
    pinyin: 'gù tài fù huán',
    word: '故态复还',
    abbreviation: 'gtfh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指命中注定的时辰。',
    pinyin: 'nián gāi yuè zhí',
    word: '年该月值',
    abbreviation: 'ngyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '泛指祖宗。',
    pinyin: 'jiǔ zōng qī zǔ',
    word: '九宗七祖',
    abbreviation: 'jzqz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指立嫡长子为储君。',
    pinyin: 'shù yuán lì dí',
    word: '树元立嫡',
    abbreviation: 'syld',
  },
  {
    derivation: '《孟子·尽心上》仰不愧于天，俯不怍于人，二乐也。”',
    example: '无',
    explanation: '怍惭愧。对天对人，都感到惭愧。指做了亏心事无脸见人。',
    pinyin: 'kuì tiān zuò rén',
    word: '愧天怍人',
    abbreviation: 'ktzr',
  },
  {
    derivation:
      '《北史·崔亮传》弟妹饥寒，岂容独饱？自可观书于市，安能看人眉睫乎？”',
    example: '无',
    explanation: '睫眼睑边缘上生的细毛。比喻看人脸色。',
    pinyin: 'kàn rén méi jié',
    word: '看人眉睫',
    abbreviation: 'krmj',
  },
  {
    derivation: '《礼记·大学》欲正其心者，先诚其意。”',
    example: '无',
    explanation: '原是儒家提倡的一种修养方法，现也泛指心地端正诚恳。',
    pinyin: 'zhèng xīn chéng yì',
    word: '正心诚意',
    abbreviation: 'zxcy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容怒气冲冲准备动武的样子。同揎拳捰袖”。',
    pinyin: 'luò xiù xuān quán',
    word: '捰袖揎拳',
    abbreviation: 'lxxq',
  },
  {
    derivation: '《北史·李谔传》捐本逐末，流遍华壤，递相师祖，久而愈扇。”',
    example: '无',
    explanation: '捐抛弃；逐追逐。指抛弃根本，追求末节。',
    pinyin: 'juān běn zhú mò',
    word: '捐本逐末',
    abbreviation: 'jbzm',
  },
  {
    derivation:
      '沙汀《闯关》一左嘉很快就把问题拉在自己身上去了，侈侈不休的辩解起来，直到好一阵才把话头牵开。”',
    example:
      '我这样～地谈我对鲁讯小说的一些体会，并不是要求大家把他的作品框框，如法炮制。★《人民文学》1977处第12期',
    explanation: '说话没完没了；唠叨。',
    pinyin: 'chǐ chǐ bù xiū',
    word: '侈侈不休',
    abbreviation: 'ccbx',
  },
  {
    derivation: '西汉·戴圣《礼记·檀弓下》美哉轮焉！美哉奂焉！”',
    example:
      '寻访久之，而后得其道基，竭力恢复。今已～，俨然一祖庭矣。★清·刘献廷《广阳杂记》第四卷',
    explanation: '形容房屋高大众多。',
    pinyin: 'lún yān huàn yān',
    word: '轮焉奂焉',
    abbreviation: 'lyhy',
  },
  {
    derivation: '《荀子·劝学》不积跬步，无以致千里；不积小流，无以成江海。”',
    example: '无',
    explanation:
      '跬步半步。走一千里路，是半步半步积累起来的。比喻学习应该持之有恒，不要半途而废。',
    pinyin: 'kuǐ bù qiān lǐ',
    word: '跬步千里',
    abbreviation: 'kbql',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '评定成绩，摆出优点。',
    pinyin: 'píng gōng bǎi hǎo',
    word: '评功摆好',
    abbreviation: 'pgbh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '把不同内容、不同性质的东西收下来，保存起来。同兼收并蓄”。',
    pinyin: 'jiān shōu bìng chù',
    word: '兼收并畜',
    abbreviation: 'jsbc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指留心观看。',
    pinyin: 'yóu xīn yù mù',
    word: '游心寓目',
    abbreviation: 'yxym',
  },
  {
    derivation: '《周易·系辞上》二人同心，其利断金；同心之言，其臭如兰。”',
    example: '无',
    explanation: '指亲密的朋友。',
    pinyin: 'jīn lán zhī yǒu',
    word: '金兰之友',
    abbreviation: 'jlzy',
  },
  {
    derivation:
      '明·李开元《宝剑记》第五出（丑白）他怕怎的？（净白）他怕我狗仗人势。”',
    example: '你就～，天天作耗，在我们跟前逞脸。★清·曹雪芹《红楼梦》第七十四回',
    explanation: '仗倚仗、仗势。比喻坏人依靠某种势力欺侮人。',
    pinyin: 'gǒu zhàng rén shì',
    word: '狗仗人势',
    abbreviation: 'gzrs',
  },
  {
    derivation: '汉·贾谊《陈政事疏·治安策》高者难攀，卑者易陵，理势然也。”',
    example:
      '我们反对把创作说得～，但也反对把它说成不须付出心血就轻而易举地可以做到。★茅盾《创作问题漫谈》',
    explanation:
      '攀抓住高处的东西向上爬。高得手也攀不到。形容难以达到。也形容人高高在上，使人难接近。',
    pinyin: 'gāo bù kě pān',
    word: '高不可攀',
    abbreviation: 'gbkp',
  },
  {
    derivation:
      '宋·刘攽《次韵苏子瞻〈韩斡马〉赠李伯时》良工苦心为远别，天机要眇潜得之。”',
    example:
      '[伯父]特特的给我父母立了这座家庙；不但我身有所归，便是我的双亲也神有所托，这是一片～。★《儿女英雄传》第二五回',
    explanation:
      '形容优秀艺术家的作品，在创作过程中都费尽心思。又泛指用心良苦。',
    pinyin: 'liáng gōng kǔ xīn',
    word: '良工苦心',
    abbreviation: 'lgkx',
  },
  {
    derivation: '《吕氏春秋·达郁》凡人三百六十节、九窍、五脏六腑。”',
    example:
      '牛先生乍到这里，实际情况还不清楚。住久了，～里的毛病你就看清啦。★姚雪垠《李自成》第个卷第二十八章',
    explanation:
      '五脏脾、肺、肾、肝、心；六腑胃、大肠、小肠、三焦、膀胱、胆。人体内脏器官的统称。也比喻事物的内部情况。',
    pinyin: 'wǔ zàng liù fǔ',
    word: '五脏六腑',
    abbreviation: 'wzlf',
  },
  {
    derivation:
      '清·邹弢《三借庐笔谈·杨文乾》田（田文镱）以为讪己，愈恶之，每见嗔喝，吹毛索瘢。”',
    example: '无',
    explanation: '吹开皮上的毛寻疤痕。比喻故意挑剔别人的缺点，寻找差错。',
    pinyin: 'chuī máo suǒ bān',
    word: '吹毛索瘢',
    abbreviation: 'cmsb',
  },
  {
    derivation: '北魏·郦道元《水经注·汶水》仰视岩石松树，郁郁苍苍，如在云中。”',
    example: '左后方也有一座～的高山。★魏巍《东方》第六部第一章',
    explanation: '犹言郁郁葱葱。草木苍翠茂盛的样子。',
    pinyin: 'yù yù cāng cāng',
    word: '郁郁苍苍',
    abbreviation: 'yycc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻做事有顾忌，不敢放手干。同投鼠忌器”。',
    pinyin: 'tóu shǔ zhī jì',
    word: '投鼠之忌',
    abbreviation: 'tszj',
  },
  {
    derivation:
      '周而复《白求恩大夫》我的小孩子，一个能讲能说，活蹦活跳的娃娃，死啦！”',
    example: '无',
    explanation: '活蹦乱跳。',
    pinyin: 'huó bèng huó tiào',
    word: '活蹦活跳',
    abbreviation: 'hbht',
  },
  {
    derivation:
      '宋·晁端海《卜算子》恩义重如山，情意深如海。假使黄金北斗高，这一分，何由买？”',
    example: '无',
    explanation: '恩爱像高山一样重，情义像大海一样深。形容恩惠深，情义重。',
    pinyin: 'ēn shān yì hǎi',
    word: '恩山义海',
    abbreviation: 'esyh',
  },
  {
    derivation:
      '汉·王充《论衡·书虚》俗传言曰，丁公凿井，得一人于井中。夫人生于人，非生于土也。”',
    example: '无',
    explanation: '比喻传来传去而失真。',
    pinyin: 'dīng gōng záo jǐng',
    word: '丁公凿井',
    abbreviation: 'dgzj',
  },
  {
    derivation:
      '明·袁黄、王世贞《纲鉴合编·宋纪·武帝》八月，宋主杀中书令王僧达，僧达幼聪警能文，而跌荡不拘。”',
    example: '无',
    explanation: '指心志放逸无拘无束。同跌宕不羁”。',
    pinyin: 'diē dàng bù jū',
    word: '跌荡不拘',
    abbreviation: 'ddbj',
  },
  {
    derivation:
      '余辰《蚕》我完全没有听讲，当然不知道李老师提问了什么。现在几乎全班都举手了，这有我们这张桌子上楞头呆脑地坐着两个人。”',
    example: '无',
    explanation: '形容发楞发呆的样子。同楞头楞脑”。',
    pinyin: 'léng tóu dāi nǎo',
    word: '楞头呆脑',
    abbreviation: 'ltdn',
  },
  {
    derivation:
      '语出《易·井》井渫不食，为我心恻。”王弼注渫，不停污之谓也。”孔颖达疏井渫而不见食，犹人修已全洁而不见用。”',
    example:
      '何不警其越俎代庖之罪，而乃疑其心测～乎？★宋·陈亮《与吕伯恭正字书》之三',
    explanation:
      '指井虽浚治，洁净清澈，但不被饮用。比喻洁身自持，而不为人所知。',
    pinyin: 'jǐng xiè bù shí',
    word: '井渫不食',
    abbreviation: 'jxbs',
  },
  {
    derivation:
      '《后汉书·党锢传·杜密》同郡刘胜，亦自蜀郡告归乡里，闭门扫轨，无所干及。”李贤注轨，车迹也。言绝人事。”',
    example: '无',
    explanation: '轨车迹。指杜绝宾客，不与来往。',
    pinyin: 'bì mén sǎo guǐ',
    word: '闭门扫轨',
    abbreviation: 'bmsg',
  },
  {
    derivation: '唐·韩愈《祭柳子厚文》玉佩琼琚，大放厥词。”',
    example: '也许他认定我年轻无知，才毫无顾虑地在我面前～。★郭良蕙《焦点》十',
    explanation:
      '厥其，他的；词文辞，言辞。原指铺张词藻或畅所欲言。现用来指大发议论。',
    pinyin: 'dà fàng jué cí',
    word: '大放厥词',
    abbreviation: 'dfjc',
  },
  {
    derivation:
      '《金瓶梅传奇》第六回诸方地保瞧见，恰似丈二和尚，摸不着头脑，不觉腿关节软了下来，扑通扑通跪成一片。”',
    example:
      '周天虹有点～摸不着头脑，忙问‘怎么，阵地不要了？’★魏巍《火凤凰》一○七',
    explanation: '（歇后语）摸不着头脑。指弄不清是怎么回事。',
    pinyin: 'zhàng èr hé shàng',
    word: '丈二和尚',
    abbreviation: 'zehs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容留下的血架多。',
    pinyin: 'xuè jì bān bān',
    word: '血迹斑斑',
    abbreviation: 'xjbb',
  },
  {
    derivation:
      '《左传·僖公二十三年》策名委质，贰乃辟也。”杜预注名书于所臣之策。”孔颖达疏古之仕者于所臣之人书己名于策，以明系属之也。”',
    example: '遂乃弹冠筮仕，～。★唐·杨炯《薛振行状》',
    explanation: '用以指因仕宦而献身于朝廷之事。',
    pinyin: 'cè míng wěi zhì',
    word: '策名委质',
    abbreviation: 'cmwz',
  },
  {
    derivation:
      '郝艳霞 王润生《三请薛仁贵》第三回李氏和柳大洪慌忙来到前厅，为银环求情。柳刚不依不饶。李氏急了，说‘你要杀银环，我就撞头！’”',
    example: '无',
    explanation: '形容要求不遂就纠缠个没烷完。',
    pinyin: 'bù yī bù ráo',
    word: '不依不饶',
    abbreviation: 'bybr',
  },
  {
    derivation:
      '《庄子·则阳》有国于蜗之左角者，曰触氏，有国于蜗之右角者，曰蛮氏，时相与争地而战，伏尸数万，逐北，旬有五日而后反。”',
    example: '～，名亲共利切。★元·白朴《乔木查·对景》',
    explanation: '蜗角蜗牛的触角；蝇头苍蝇头。比喻获利甚微，不足挂齿。',
    pinyin: 'wō jiǎo yíng tóu',
    word: '蜗角蝇头',
    abbreviation: 'wjyt',
  },
  {
    derivation:
      '毛泽东《关于正确处理人民内部矛盾的问题》在我们社会里，也有少数不顾公共利益，蛮不讲理，行凶犯法的人。”',
    example: '无',
    explanation: '态度粗暴，不讲道理。',
    pinyin: 'mán bù jiǎng lǐ',
    word: '蛮不讲理',
    abbreviation: 'mbjl',
  },
  {
    derivation:
      '清·湘灵子《轩亭冤·哭墓》波翻血海全球悯，问谁敢野蛮法律骂强秦？笑他鹬蚌相争演出风云阵。”',
    example: '肃清日寇吾侪事，～笑列侯。★朱德《和董必武同志七绝》之三',
    explanation:
      '鹬蚌相争，渔翁得利”的省语。比喻双方相持不下，而使第三者从中得利。',
    pinyin: 'yù bàng xiāng zhēng',
    word: '鹬蚌相争',
    abbreviation: 'ybxz',
  },
  {
    derivation: '唐·戴叔伦《哭朱放》最是不堪回首处，九泉烟冷树苍苍。”',
    example:
      '诚有令人～者，则我今日之临眺于此，虽百年之久，曾不能以一瞬尔。★清·无名氏《杜诗言志》',
    explanation:
      '堪可以忍受；回首回顾，回忆。指对过去的事情想起来就会感到痛苦，因而不忍去回忆。',
    pinyin: 'bù kān huí shǒu',
    word: '不堪回首',
    abbreviation: 'bkhs',
  },
  {
    derivation:
      '明·吴承恩《西游记》第四十回因此上怪他每每不听我说，故我意懒心灰，说各人散了。”',
    example: '我们没有理由因为某一科没考好而悲观失望，～。',
    explanation: '心、意心思，意志；灰、懒消沉，消极。灰心失望，意志消沉。',
    pinyin: 'xīn huī yì lǎn',
    word: '心灰意懒',
    abbreviation: 'xhyl',
  },
  {
    derivation:
      '语出《晋书·毕卓传》卓尝谓人曰‘得酒满数百斛船，四时甘味置两头，右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。’”',
    example: '～，问今日、不知何夕。★傅尃《满江红·八月五日联句》词',
    explanation: '手持蟹螯饮酒。古人视为人生一大乐事。',
    pinyin: 'bǎ jiǔ chí áo',
    word: '把酒持螯',
    abbreviation: 'bjca',
  },
  {
    derivation: '宋·黄庭坚《读书呈几复》身入群经作蠹鱼，断编残简伴闲居。”',
    example: '无',
    explanation:
      '编穿简的细长皮条；简古代用来写字的竹片。指残缺不全的书籍文章。',
    pinyin: 'duàn biān cán jiǎn',
    word: '断编残简',
    abbreviation: 'dbcj',
  },
  {
    derivation: '汉·枚乘《上书谏吴王》变所欲为，易于反掌，安于泰山。”',
    example:
      '武后恃有高关，又仗武氏弟兄骁勇，自谓～，十分得意。★清·李汝珍《镜花缘》第三回',
    explanation: '形容象泰山一样稳固，不可动摇。',
    pinyin: 'wěn rú tài shān',
    word: '稳如泰山',
    abbreviation: 'wrts',
  },
  {
    derivation:
      '《荀子·天论》楛耕伤稼，耘耨失薲。”汉·韩婴《韩诗外传》卷二枯耕伤稼，枯耘伤岁。”',
    example: '无',
    explanation: '楛粗恶；耘除草；岁年谷成熟。耕作不细致，会影响到一年的收成。',
    pinyin: 'kǔ yún shāng suì',
    word: '楛耘伤岁',
    abbreviation: 'kyss',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容气势奔放雄壮。常形容书法笔势的遒劲有力，灵活舒展。',
    pinyin: 'lóng wēi hǔ zhèn',
    word: '龙威虎震',
    abbreviation: 'lwhz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻事先采取措施，才能防止灾祸。同曲突徙薪”。',
    pinyin: 'qǔ tū yí xīn',
    word: '曲突移薪',
    abbreviation: 'qtyx',
  },
  {
    derivation:
      '晋·葛洪《神仙传·麻姑》麻姑自说云，接待以来，已见东海三为桑田。”',
    example: '～，谓世事之多变。★清·程元升《幼学故事琼林·地舆》',
    explanation: '桑田农田。大海变成桑田，桑田变成大海。比喻世事变化很大。',
    pinyin: 'cāng hǎi sāng tián',
    word: '沧海桑田',
    abbreviation: 'chst',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '躲躲闪闪貌。犹言藏头露尾。',
    pinyin: 'lù yǐng cáng xíng',
    word: '露影藏形',
    abbreviation: 'lycx',
  },
  {
    derivation:
      '唐·魏徵《谏太宗十思疏》盖在殷忧，必竭诚以待下，既得志，则纵情以傲物。”',
    example: '无',
    explanation: '竭诚竭尽诚意；待对待。竭尽诚意地对待别人。',
    pinyin: 'jié chéng xiāng dài',
    word: '竭诚相待',
    abbreviation: 'jcxd',
  },
  {
    derivation:
      '宋·欧阳修《晋祠》诗天开地辟真主出，犹须再驾方凯旋。”宋·洪适《奉礼歌》斗转参横将旦，天开地辟如春。”元·刘致《端正好·上高监司》套曲天开地辟由盘古，人物才分下土。”',
    example:
      '你这泼猴，不知好歹！他那人参果树，乃～的灵根。★明·吴承恩《西游记》第二十六回',
    explanation: '犹言开天辟地。',
    pinyin: 'tiān kāi dì pì',
    word: '天开地辟',
    abbreviation: 'tkdp',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '绝裾扯断衣襟。形容离去的态度十分坚决。',
    pinyin: 'jué jū ér qù',
    word: '绝裙而去',
    abbreviation: 'jjeq',
  },
  {
    derivation:
      '《淮南子·本经训》君人者不任能，而好自为之，则智日困而自负其责也。”',
    example: '无',
    explanation: '为干，做。喜欢自己亲手去做。',
    pinyin: 'hào zì wéi zhī',
    word: '好自为之',
    abbreviation: 'hzwz',
  },
  {
    derivation: '《左传·昭公十七年》彗，所以除旧布新也。”',
    example: '新陈代谢，～，这是历史发展的必然规律。',
    explanation: '清除旧的，建立新的。以新的代替旧的。',
    pinyin: 'chú jiù gēng xīn',
    word: '除旧更新',
    abbreviation: 'cjgx',
  },
  {
    derivation:
      '《新唐书·文艺传下·李翰》有如贼因江淮之资，兵广而财积，根结盘据，西向以拒，虽终歼灭，其旷日持久必矣。”',
    example: '无',
    explanation: '形容基础牢固，势力强大。盘，通磐”。',
    pinyin: 'gēn jié pán jù',
    word: '根结盘据',
    abbreviation: 'gjpj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻主意多变。',
    pinyin: 'zhāo sān mù èr',
    word: '朝三暮二',
    abbreviation: 'zsme',
  },
  {
    derivation:
      '《后汉书·明德马皇后纪》前过濯龙门上，见外家问起居者，车如流水，马如游龙。”',
    example:
      '花天酒地，闹个不休，～，日无暇晷。★清·吴趼人《二十年目睹之怪现状》第一回',
    explanation: '车象流水，马象游龙。形容来往车马很多，连续不断的热闹情景。',
    pinyin: 'chē shuǐ mǎ lóng',
    word: '车水马龙',
    abbreviation: 'csml',
  },
  {
    derivation:
      '汉·蔡邕《陈太丘碑文》颖川陈君，绝世超伦，大位未跻，惭于臧文窃位之负，故时人高其德，重乎公相之位也。”',
    example: '无',
    explanation:
      '绝世当世所没有，指冠绝当世；超伦超过同辈的人。冠绝当世，超过同辈。',
    pinyin: 'jué shì chāo lún',
    word: '绝世超伦',
    abbreviation: 'jscl',
  },
  {
    derivation:
      '清·戴名世《八月庚申齐师战于乾时我师败绩》昔者王莽乘西汉之衰，不用尺兵寸铁而移汉祚，翟义起兵讨之，未成而身死。”',
    example: '无',
    explanation: '比喻微小的武力。',
    pinyin: 'chǐ bīng cùn tiě',
    word: '尺兵寸铁',
    abbreviation: 'cbct',
  },
  {
    derivation:
      '清钱泳《履园丛话·收藏·元》有元一代画家，全讲气韵，不名一格，实能超出唐、宋人刻画之习。”',
    example: '无',
    explanation: '指不局限于一种规格或一个格局。',
    pinyin: 'bù míng yī gé',
    word: '不名一格',
    abbreviation: 'bmyg',
  },
  {
    derivation: '宋·陆游《独立》诗羊踏寒蔬新少梦，鱼生空釜久谙穷。”',
    example: '无',
    explanation: '指贫穷得无粮可炊。',
    pinyin: 'yú shēng kōng fǔ',
    word: '鱼生空釜',
    abbreviation: 'yskf',
  },
  {
    derivation: '《大宋宣和遗事》亨集虽欲掩人之耳目，不可得也。”',
    example: '必须假手他人，死于道路，方可～。★明·冯梦龙《东周列国志》第十二回',
    explanation: '遮掩别人的耳朵和眼睛。比喻用假象迷惑人，欺骗人。',
    pinyin: 'yǎn rén ěr mù',
    word: '掩人耳目',
    abbreviation: 'yrem',
  },
  {
    derivation: '无',
    example: '他此番～，感慨万千。',
    explanation: '重新来到曾经居住过或游览过的地方。',
    pinyin: 'jiù dì chóng yóu',
    word: '旧地重游',
    abbreviation: 'jdcy',
  },
  {
    derivation: '《史记·项羽本纪》籍（项羽）长八尺余，力能扛鼎，才气过人。”',
    example:
      '昔人评米元晖画云虎儿笔～，五百年来无此君。★清·顾复《平生壮观·米芾》',
    explanation:
      '扛用双手举起沉重的东西；鼎三足两耳的青铜器。形容气力特别大。亦比喻笔力雄健。',
    pinyin: 'lì néng gāng dǐng',
    word: '力能扛鼎',
    abbreviation: 'lngd',
  },
  {
    derivation: '《论语·述而》子曰‘我非生而知之者，好古敏以求之者也。’”',
    example: '人非～者，孰能无惑。★唐·韩愈《师说》',
    explanation: '生下来就懂得知识和道理。这是唯心主义者的观点。',
    pinyin: 'shēng ér zhī zhī',
    word: '生而知之',
    abbreviation: 'sezz',
  },
  {
    derivation:
      '清·顾炎武《菰中随笔》忠穆公曾牧梁州，以褒城控三节度治所，龙节虎旗，驰驿奔轺，以去以来，毂交蹄劘，由是崇侈其绎，以示雄大。”',
    example: '无',
    explanation: '行车交错，马蹄磨削。形容车马来往频繁。',
    pinyin: 'gǔ jiāo tí mó',
    word: '毂交蹄劘',
    abbreviation: 'gjtm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指卓绝特异，使世人震动。',
    pinyin: 'jīng shì jué sú',
    word: '惊世绝俗',
    abbreviation: 'jsjs',
  },
  {
    derivation: '见《韩非子·和氏》。',
    example: '明珠暗投反按剑，～还遭刖。★明·何景明《田子行》',
    explanation:
      '楚人和氏得玉璞，两献楚王，两遭刖足。第三次王使治璞，得白玉，琢以为璧，世称和氏璧”。比喻不识良材或怀才不遇。',
    pinyin: 'bái bì sān xiàn',
    word: '白璧三献',
    abbreviation: 'bbsx',
  },
  {
    derivation:
      '宋·张君房《云笈七签》卷六十六嗟见南山尘，积年为丘山。芒芒苦海中，生死成波澜。”',
    example: '～，深可悲伤。★金·王处《行香子·劝徐老奉善》',
    explanation: '苦海苦难深重如海；茫茫辽阔深远的样子。无穷无尽的苦难。',
    pinyin: 'kǔ hǎi máng máng',
    word: '苦海茫茫',
    abbreviation: 'khmm',
  },
  {
    derivation: '宋·晁补之《鸡肋集》当是时，皆有可乘之隙，而中国不可取。”',
    example:
      '小沛原非久居之地。今徐州既有～，失此不取，悔之晚矣。★明·罗贯中《三国演义》第十四回',
    explanation: '隙空子，机会。可以被对方利用的弱点、空隙。',
    pinyin: 'kě chéng zhī xì',
    word: '可乘之隙',
    abbreviation: 'kczx',
  },
  {
    derivation: '无',
    example: '军情紧急，现派你们出发侦察，三小时后必须回来，～。',
    explanation: '公文用语，不得违反命令，耽误公事。',
    pinyin: 'bù dé wéi wù',
    word: '不得违误',
    abbreviation: 'bdww',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指白费心思。同枉费心机”。',
    pinyin: 'wǎng yòng xīn jī',
    word: '枉用心机',
    abbreviation: 'wyxj',
  },
  {
    derivation:
      '唐·韩愈《原道》其言道德仁义者，不入於杨，则入於墨，不入於老，则入於佛；入於彼，必出於此，入者主之，出者奴之。”',
    example: '乐府至有明而丛杂，～，三百年来，迄无定论。★清·冯班《钝吟杂录》',
    explanation: '指挟门户成见。',
    pinyin: 'chū nú rù zhǔ',
    word: '出奴入主',
    abbreviation: 'cnrz',
  },
  {
    derivation: '汉·扬雄《剧秦美新》懿律嘉量，金科玉条。”',
    example:
      '老伯大人的议论，真是我们佐班中的～。★清·李宝嘉《官场现形记》第四十三回',
    explanation:
      '律规章，法则；科旧指法律条文。原形容法令条文的尽善尽美。现比喻必须遵守、不能变更的信条。',
    pinyin: 'yù lǜ jīn kē',
    word: '玉律金科',
    abbreviation: 'yljk',
  },
  {
    derivation:
      '晋·周处《风土记》卿虽乘车我戴笠，后日相逢下车揖；我步行，君乘马，他日相逢君当下。”',
    example: '无',
    explanation: '笠斗笠。比喻不因为富贵而改变贫贱之交。',
    pinyin: 'chē lì zhī méng',
    word: '车笠之盟',
    abbreviation: 'clzm',
  },
  {
    derivation:
      '唐·韩愈《省试学生代斋郎议》自非天姿茂异，旷日经久，以所进业发闻于乡闾……则不可得而齿乎国学矣。”',
    example: '无',
    explanation: '犹言旷日持久。',
    pinyin: 'kuàng rì jīng jiǔ',
    word: '旷日经久',
    abbreviation: 'krjj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指心性浅薄浮躁。',
    pinyin: 'shén duǎn qì fú',
    word: '神短气浮',
    abbreviation: 'sdqf',
  },
  {
    derivation: '《周易·中孚》鹤鸣在阴，其子和之；我有好爵，吾与尔靡之。”',
    example:
      '惟陛下慎经典之诫，图变复之道。斥远佞巧之臣，速征～。★《后汉书·杨赐传》',
    explanation: '指有才德声望的隐士。',
    pinyin: 'hè míng zhī shì',
    word: '鹤鸣之士',
    abbreviation: 'hmzs',
  },
  {
    derivation: '唐·张祜《集灵台》诗之二却嫌脂粉污颜色，淡扫蛾眉朝至尊。”',
    example: '～，巧妆时样打扮，十分娇态。★明·孙仁孺《东郭记·其妻妾不羞也》',
    explanation: '轻淡地画眉。指妇女淡雅的化妆。',
    pinyin: 'dàn sǎo é méi',
    word: '淡扫蛾眉',
    abbreviation: 'dsem',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》卷三十三我在家中，我自照管着他，有甚皂丝麻线？”',
    example: '无',
    explanation: '比喻不清不白，关系混乱。',
    pinyin: 'zào sī má xiàn',
    word: '皂丝麻线',
    abbreviation: 'zsmx',
  },
  {
    derivation:
      '《孟子·公孙丑上》以力服人者，非心服也，力不赡也；以德服人者，中心悦而诚服也，如七十子之服孔子也。”',
    example:
      '小弟若在两位才女跟前称了晚生，不但毫不委曲，并且～。★清·李汝珍《镜花缘》第二十三回',
    explanation:
      '悦愉快，高兴；诚硬实。由衷地高兴，真心地服气。指真心地服气或服从。',
    pinyin: 'xīn yuè chéng fú',
    word: '心悦诚服',
    abbreviation: 'xycf',
  },
  {
    derivation: '巴金《家》三明明是一家人，然而没有一天不在明争暗斗。”',
    example: '无',
    explanation: '明里暗里都在进行争斗。形容各用心思，互相排挤。',
    pinyin: 'míng zhēng àn dòu',
    word: '明争暗斗',
    abbreviation: 'mzad',
  },
  {
    derivation: '无',
    example:
      '进入革命烈士纪念馆，大家～，想起烈士们生前的英雄事迹，不禁肃然起敬。',
    explanation: '看见死去或离去的人所遗下的物品，就想起该人。',
    pinyin: 'dǔ wù sī rén',
    word: '赌物思人',
    abbreviation: 'dwsr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '故意挑剔毛病，寻找差错。',
    pinyin: 'pī máo qiú cī',
    word: '披毛求疵',
    abbreviation: 'pmqc',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '犹言食古不化。指对所学的古代知识理解得不深不透，不善于按现在的情况来运用，跟吃不东西不消化一样。',
    pinyin: 'shí gǔ rú gěng',
    word: '食古如鲠',
    abbreviation: 'sgrg',
  },
  {
    derivation:
      '清·韩邦庆《海上花列传》第六回仲英乃恍然大悟，付诸一笑，就在高椅上坐下，问雪香道‘耐意思要我成日成夜陪仔耐坐来里，勿许到别场花去，阿是嗄？’”',
    example:
      '把一切诞罔不经之事，～，那就不负我今日一番饶舌了。★清·壮者《扫迷帚》第九回',
    explanation: '用一笑来对待或回答。比喻不值得理会。同付之一笑”。',
    pinyin: 'fù zhū yī xiào',
    word: '付诸一笑',
    abbreviation: 'fzyx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言投机取巧。指用不正当的手段谋取私利。也指靠小聪明占便宜。',
    pinyin: 'ǒu biàn tóu xì',
    word: '偶变投隙',
    abbreviation: 'obtx',
  },
  {
    derivation:
      '《尚书·皋陶谟》兢兢业业，一日二日万机。”《汉书·百官公卿表上》相国、丞相，皆秦官，金印紫绶，掌丞天子助理万机。”',
    example:
      '建国以后，我们敬爱的周总理～，夜以继日，成年很少有休息的机会。★余敏《深情忆念周伯伯》',
    explanation: '理处理，办理；万机种种事务。形容政务繁忙，工作辛苦。',
    pinyin: 'rì lǐ wàn jī',
    word: '日理万机',
    abbreviation: 'rlwj',
  },
  {
    derivation: '《论语·为政》见义不为，无勇也。”',
    example: '～真汉子，莫将成败论英雄。★明·冯梦龙《东周列国志》第十四回',
    explanation: '看到正义的事，就勇敢地去做。',
    pinyin: 'jiàn yì yǒng wéi',
    word: '见义勇为',
    abbreviation: 'jyyw',
  },
  {
    derivation:
      '清·和邦额《夜谭随录·棘闱志异》第少年喜事，每捕风捉影，见事生风。”',
    example: '无',
    explanation: '形容遇到事情，兴风作浪。',
    pinyin: 'jiàn shì shēng fēng',
    word: '见事生风',
    abbreviation: 'jssf',
  },
  {
    derivation:
      '《二十年目睹之怪现状》第一回不住的面红耳赤，意往神驰，身上不知怎样才好。”',
    example: '无',
    explanation: '形容心神向往，不能自持。',
    pinyin: 'yì wǎng shén chí',
    word: '意往神驰',
    abbreviation: 'ywsc',
  },
  {
    derivation:
      '清·毕沅《续资治通鉴·元纪·世祖至元二十年》得如左丞许衡教国子，则人才辈出矣。”',
    example: '我们的时代是～的时代。',
    explanation: '辈出一批一批地出现。形容有才能的人不断涌现。',
    pinyin: 'rén cái bèi chū',
    word: '人才辈出',
    abbreviation: 'rcbc',
  },
  {
    derivation:
      '《战国策·赵策四》夫望人而笑，是和也；言而不称师，是庸说也；交浅而言深，是忠也。”',
    example: '小弟乍会之间，～，诚恐见怪。★明·冯梦龙《警世通言》卷三十二',
    explanation: '交交情，友谊。跟交情浅的人谈心里话。',
    pinyin: 'jiāo qiǎn yán shēn',
    word: '交浅言深',
    abbreviation: 'jqys',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容女子走路姿态美好。同分花约柳”。',
    pinyin: 'fēn huā fú liǔ',
    word: '分花拂柳',
    abbreviation: 'fhfl',
  },
  {
    derivation:
      '明·张景《飞丸记·盟寻泉石》心瞻魏阙常意悬，游鱼恋饵吞线。卸朝鞯被发何年？名山五岳游遍。”',
    example: '无',
    explanation: '指臣民心在朝廷，关心国事。同心在魏阙”。',
    pinyin: 'xīn zhān wèi què',
    word: '心瞻魏阙',
    abbreviation: 'xzwq',
  },
  {
    derivation: '唐·杜甫《送韦书记赴西安》诗夫子歘通贵，云泥相望悬。”',
    example: '无',
    explanation: '高低差别就象天上的云彩和地下的泥土那样悬殊。',
    pinyin: 'pàn ruò yún ní',
    word: '判若云泥',
    abbreviation: 'pryn',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '①泛指烹饪之事。②指各种肴馔。',
    pinyin: 'sān tāng liǎng gē',
    word: '三汤两割',
    abbreviation: 'stlg',
  },
  {
    derivation:
      '余秋雨《文化苦旅·狼山脚下》早就这么想着，突然看到千里沃野间愣头愣脑冒出一座狼山，不禁精神一振。”',
    example: '无',
    explanation: '形容言行鲁莽冒失。',
    pinyin: 'lèng tóu lèng nǎo',
    word: '愣头愣脑',
    abbreviation: 'ltln',
  },
  {
    derivation:
      '宋·魏了翁《奏措京湖诸郡》或谓官民兵在城内者约二十万，而散在四郊者，不计其数。”',
    example: '去州桥河内周围上下点灯，～。★明·施耐庵《水浒全传》第六十六回',
    explanation: '没法计算数目。形容很多。',
    pinyin: 'bù jì qí shù',
    word: '不计其数',
    abbreviation: 'bjqs',
  },
  {
    derivation:
      '清·刘坤一《复李少荃制军》所派之营务处何道台，则人更阴狡，以之自辅，是犹救焚而益薪。”',
    example: '无',
    explanation:
      '焚火灾；薪柴草。添加木柴去救火。比喻采取错误的方法使问题更加严重。',
    pinyin: 'jiù fén yì xīn',
    word: '救焚益薪',
    abbreviation: 'jfyx',
  },
  {
    derivation:
      '《三国志·魏志·武帝纪》裴松之注引《九州春秋》曰夫鸡肋，弃之如可惜，食之无所得，以比汉中，知王欲还也。”',
    example: '无',
    explanation:
      '鸡肋鸡的肋骨，没有肉，比喻无多大意味而又不忍舍弃的东西。比喻事情不做可惜，做起来没有多大好处。',
    pinyin: 'wèi rú jī lèi',
    word: '味如鸡肋',
    abbreviation: 'wrjl',
  },
  {
    derivation:
      '《淮南子·原道训》登高临下，无失所秉，履危行险，无忘玄伏，能存之此，其德不亏。”',
    example:
      '汉庭卿士如云屯，结绶弹冠朝至尊。～足在外，神色不变惟伯昏。★宋·秦观《雪浪石》诗',
    explanation: '比喻诚惶诚恐。',
    pinyin: 'dēng gāo lǚ wēi',
    word: '登高履危',
    abbreviation: 'dglw',
  },
  {
    derivation:
      '《廿载繁华梦》第九回自己进他门以来，未有半点面红面绿，他不负我，我怎好负他？”',
    example: '无',
    explanation: '形容因紧张、急躁、害羞等而脸上发红的样子。',
    pinyin: 'miàn hóng miàn lǜ',
    word: '面红面绿',
    abbreviation: 'mhml',
  },
  {
    derivation:
      '《吕氏春秋·忠廉》若此人也，有势则必不自私矣；处官则必不为污矣；将众则必不挠北矣。”',
    example: '无',
    explanation: '挠北败北，作战失败。必定不会失败。',
    pinyin: 'bì bù náo běi',
    word: '必不挠北',
    abbreviation: 'bbnb',
  },
  {
    derivation:
      '《书·五子之歌》内作色荒，处作禽荒，甘洒嗜音，峻宇雕墙，有一于此，未或不亡。”',
    example: '一朝财得居平土，～已遽兴。★宋陆游《书》诗',
    explanation: '高大的屋宇和彩绘的墙壁。形容居处豪华奢侈。',
    pinyin: 'jùn yǔ diāo qiáng',
    word: '峻宇雕墙',
    abbreviation: 'jydq',
  },
  {
    derivation: '《西京杂记》卷四其有一介之善、一方文艺，居接士之馆。”',
    example:
      '虽闾巷～，甚或辈行绝数等，未尝不委曲外比，售其声名。★宋·叶適《郑景元墓志铭》',
    explanation: '微小的善行。',
    pinyin: 'yī jiè zhī shàn',
    word: '一介之善',
    abbreviation: 'yjzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '门庭指家庭社会地位≌奕盛大。形容人地位、名声显赫。',
    pinyin: 'mén tíng hè yì',
    word: '门庭赫奕',
    abbreviation: 'mthy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '见到德才兼备的人就想赶上他。同见贤思齐”。',
    pinyin: 'jiàn dé sī qí',
    word: '见德思齐',
    abbreviation: 'jdsq',
  },
  {
    derivation: '元·无名氏《杀狗劝夫》第四折哎，使不的你咬文嚼字。”',
    example: '学习文件不能只～，关键是领会文件的精神实质。',
    explanation: '形容过分地斟酌字句。多指死扣字眼而不注意精神实质。',
    pinyin: 'yǎo wén jiáo zì',
    word: '咬文嚼字',
    abbreviation: 'ywjz',
  },
  {
    derivation:
      '汉·王吉《谏昌邑王疏》吸新吐故以练臧，专意积精以适神，于以养生，岂不长哉！”',
    example: '无',
    explanation: '吸进新气，吐出浊气。',
    pinyin: 'xī xīn tǔ gù',
    word: '吸新吐故',
    abbreviation: 'xxtg',
  },
  {
    derivation:
      '《三国志·魏志·鲜卑传》裴松之注引《魏书》年十四五，异部大人卜贲邑钞取其外家牛羊，檀石槐策骑追击，所向无前，悉还得所亡。”',
    example: '恃勇锐冲锋出战，指征途～。★清·洪昻《长生殿·贿权》',
    explanation: '所向指军队所指向的地方。军队所指向的地方，没有阻挡。',
    pinyin: 'suǒ xiàng wú qián',
    word: '所向无前',
    abbreviation: 'sxwq',
  },
  {
    derivation:
      '明·凌濛初《二刻拍案惊奇》卷十二［严蕊］乃是个绝色的女子。一应琴棋书画，歌舞管弦之类，无所不通……所以人见了的，没一个不失魂荡魄在他身上。”',
    example: '无',
    explanation: '形容心意烦乱，精神恍惚。',
    pinyin: 'shī hún dàng pò',
    word: '失魂荡魄',
    abbreviation: 'shdp',
  },
  {
    derivation: '《后汉书·袁绍传》旷若开云见日，何喜如之。”',
    example:
      '有日～，知我等替天行道，不扰良民，赦罪招安，同心报国，青史留名，有何不美。★明·施耐庵《水浒全传》第七十一回',
    explanation:
      '拔开云雾，见到太阳。比喻黑暗已经过去，光明已经到来。也比喻误会消除。',
    pinyin: 'yún kāi jiàn rì',
    word: '云开见日',
    abbreviation: 'ykjr',
  },
  {
    derivation:
      '《晋书·祖逖传》中夜闻荒鸡鸣，蹴琨觉，曰‘此非恶声也。’因起舞。”',
    example: '无',
    explanation: '听到鸡叫就起来舞剑◇比喻有志报国的人及时奋起。',
    pinyin: 'wén jī qǐ wǔ',
    word: '闻鸡起舞',
    abbreviation: 'wjqw',
  },
  {
    derivation:
      '唐·寒山《诗》虽乃得如斯，有为多患累，与道殊悬运，拆西补东尔。”',
    example: '无',
    explanation: '比喻临时勉强凑合应付。同拆东补西”。',
    pinyin: 'chāi xī bǔ dōng',
    word: '拆西补东',
    abbreviation: 'cxbd',
  },
  {
    derivation: '《淮南子·氾论训》圣人以身体之。”《礼记·中庸》 力行近乎仁。”',
    example: '先生以致知格物为基阯（址），以～为堂奥。★清·张惠言《承拙斋空传》',
    explanation: '身亲身；体体验。亲身体验，努力实行。',
    pinyin: 'shēn tǐ lì xíng',
    word: '身体力行',
    abbreviation: 'stlx',
  },
  {
    derivation:
      '汉·贾谊《新书·数宁》夫抱火厝之积薪之下，而寝其上，火未及燃，因谓之安，偷安者也。”',
    example:
      '乃事过境迁，恬嬉如故，～之下，而寝处其上，酣歌恒舞，民怨沸腾，卒至鱼烂土崩，不可收拾。★蔡东藩、许廑父《民国通俗演义》',
    explanation: '厝放置；薪柴草。把火放到柴堆下面。比喻潜伏着很大危险。',
    pinyin: 'cuò huǒ jī xīn',
    word: '厝火积薪',
    abbreviation: 'chjx',
  },
  {
    derivation:
      '《朱子语类》卷十三若得胸中义理明，从此去量度事物，自然泛应曲当。”',
    example:
      '这（辩证唯物论）并不是外来的异物，而是～的真理。★郭沫若《海涛集·跨着东海》',
    explanation: '指广泛适应，无不恰当。',
    pinyin: 'fàn yīng qǔ dāng',
    word: '泛应曲当',
    abbreviation: 'fyqd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '低下的才能与肤浅的学识。多用作自谦之词。',
    pinyin: 'quán cái mò xué',
    word: '诠才末学',
    abbreviation: 'qcmx',
  },
  {
    derivation: '《尚书·盘庚上》若网在纲，有条而不紊。”',
    example: '听上去倒也是原原本本，～。★清·李宝嘉《官场现形记》第五十六回',
    explanation: '紊乱。形容有条有理，一点不乱。',
    pinyin: 'yǒu tiáo bù wěn',
    word: '有条不紊',
    abbreviation: 'ytbw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '推荐贤士，引进好人。',
    pinyin: 'tuī xián jìn shàn',
    word: '推贤进善',
    abbreviation: 'txjs',
  },
  {
    derivation:
      '清·曾朴《孽海花》第十九回却说小燕便服轻车，叫车夫径到城南保安寺街而来，那时秋高气和，尘软蹄轻，不一会已到了门口，把车停在门前两棵大榆树荫下。”',
    example: '无',
    explanation: '形容秋空高朗、天气晴和。',
    pinyin: 'qiū gāo qì hé',
    word: '秋高气和',
    abbreviation: 'qgqh',
  },
  {
    derivation:
      '瞿秋白《文艺杂著·荒漠里》我走着不敢说疲乏，我忍着不敢说饥渴；且沉心静气的听，听荒漠里的天籁。”',
    example: '无',
    explanation: '犹言心平气和。',
    pinyin: 'chén xīn jìng qì',
    word: '沉心静气',
    abbreviation: 'cxjq',
  },
  {
    derivation:
      '清·李观海《歧路灯》第十三回乜宁礼再三央人，磕头礼拜，他舅恨极，发誓再不上他的门。”',
    example: '无',
    explanation:
      '磕头旧时礼节，跪在地上头碰地。礼拜向尊敬的人或神行礼。恭敬地跪在地上叩头行礼。',
    pinyin: 'kē tóu lǐ bài',
    word: '磕头礼拜',
    abbreviation: 'ktlb',
  },
  {
    derivation: '宋·柳永《夏云峰》词向此免名缰利锁，虚费光阴。”',
    example: '再休被～相缠住。★元·范子安《竹叶舟》第一折',
    explanation: '比喻名利束缚人就象缰绳和锁链一样。',
    pinyin: 'lì suǒ míng jiāng',
    word: '利锁名缰',
    abbreviation: 'lsmj',
  },
  {
    derivation:
      '西汉·司马迁《史记·李斯列传》是以太山不让土壤，故能成其大；河海不择细流，故能就其深。”',
    example: '窃比附～之说，为略呈之。★《辛亥革命·民国各团体之组织》',
    explanation: '比喻微不足道的事物。',
    pinyin: 'tǔ rǎng xì liú',
    word: '土壤细流',
    abbreviation: 'trxl',
  },
  {
    derivation: '先秦·孟轲《孟子·尽心下》圣人，百世之师也，伯夷、柳下惠是也。”',
    example: '卓为～；杰作雄辞，散落四夷之远。★宋·陆游《贺薛安抚兼制置启》',
    explanation: '世世代代的老师，指才德高尚而永远可为人师表的人。',
    pinyin: 'bǎi shì zhī shī',
    word: '百世之师',
    abbreviation: 'bszs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻不可能之事。同蹇人上天”。',
    pinyin: 'jiǎn rén shēng tiān',
    word: '蹇人升天',
    abbreviation: 'jrst',
  },
  {
    derivation:
      '明·吴承恩《西游记》第十七回众僧闻得此言，一个个提心吊胆，告天许愿。”',
    example:
      '但他们往往遭农会严厉拒绝，所以他们总是～地过日子。★毛泽东《湖南农民运动考察报告》',
    explanation: '形容十分担心或害怕。',
    pinyin: 'xuán xīn diào dǎn',
    word: '悬心吊胆',
    abbreviation: 'xxdd',
  },
  {
    derivation:
      '巫山指楚王与巫山神女梦中相会的典故。洛浦洛水之滨。传说中有洛水女神，三国魏曹植渡洛水时，因感战国楚宋玉对楚王与神女事，遂作《洛神赋》◇以巫山”、洛浦”二典合用。',
    example: '无',
    explanation: '指巫山神女和洛水女神，也指男女幽会。',
    pinyin: 'wū shān luò pǔ',
    word: '巫山洛浦',
    abbreviation: 'wslp',
  },
  {
    derivation:
      '孙华炳《重赏之下》他自己又到图书馆借来关于数控的书，什么也不顾了，一门心思钻研起来。”',
    example: '无',
    explanation: '指一心一意。',
    pinyin: 'yī mén xīn sī',
    word: '一门心思',
    abbreviation: 'ymxs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '深而大的仇恨。同深仇大恨”。',
    pinyin: 'shēn chóu dà hèn',
    word: '深雠大恨',
    abbreviation: 'scdh',
  },
  {
    derivation:
      '《京本通俗小说·志诚张主管》你许多时不行这条路，如今去端门看灯，从张员外门前经过，又是招是惹非。”',
    example:
      '他虽然没有什么出色的本领，有时还爱贪点小利，可是人顶和气，也不～。★欧阳山《高干大》第一章',
    explanation: '招惹是非。指无故生事。',
    pinyin: 'zhāo shì rě fēi',
    word: '招是惹非',
    abbreviation: 'zsrf',
  },
  {
    derivation: '宋·杨万里《行路难》依欲与君子归去来，千愁万恨付一杯。”',
    example: '受尽了～废眠餐，捱至此夕偿心愿。★明·陆采《怀香记·佳会赠香》',
    explanation: '千、万形容多。极言愁苦怨恨之多。',
    pinyin: 'qiān chóu wàn hèn',
    word: '千愁万恨',
    abbreviation: 'qcwh',
  },
  {
    derivation:
      '邹韬奋《我的母亲》往往讲到孤女患难，或义妇含冤的凄惨的情形，她两人便都热泪盈眶，泪珠尽往颊上涌流着。”',
    example: '无',
    explanation:
      '盈充满；眶眼眶。因感情激动而使眼泪充满了眼眶，形容感动至极或非常悲伤。',
    pinyin: 'rè lèi yíng kuàng',
    word: '热泪盈眶',
    abbreviation: 'rlyk',
  },
  {
    derivation: '汉·扬雄《法言·渊骞》日闻所不闻，见所不见。”',
    example: '许多奇事，则～，闻所未闻。★毛泽东《湖南农民运动考察报告》',
    explanation: '看到从来没有看到过的。形容事物十分稀罕。',
    pinyin: 'jiàn suǒ wèi jiàn',
    word: '见所未见',
    abbreviation: 'jswj',
  },
  {
    derivation: '《三国志·吴志·步骘传》擿抉细微，吹毛求瑕。”',
    example: '今员外～，务在驳放。★唐·封演《封氏闻见记·制科》',
    explanation: '吹开皮上的毛寻疤痕。比喻故意挑剔别人的缺点，寻找差错。',
    pinyin: 'chuī máo qiú xiá',
    word: '吹毛求瑕',
    abbreviation: 'cmqx',
  },
  {
    derivation: '宋·周敦颐《爱莲说》中通外直，不蔓不枝。”',
    example:
      '做下去，年深日久之后，先生就不再删改你的文章了，只在篇末批些有书有笔，～”之类。★鲁迅《做古文和做好人的秘诀》',
    explanation:
      '蔓藤蔓，引伸为蔓延。既不蔓延，也不分支。比喻说话或写文章简明扼要，不拖泥带水。',
    pinyin: 'bù màn bù zhī',
    word: '不蔓不枝',
    abbreviation: 'bmbz',
  },
  {
    derivation: '无',
    example: '我们将～地支持你的正义行动。',
    explanation: '渝改变。坚守约章或诺言，决不改变。',
    pinyin: 'jiān chí bù yú',
    word: '坚持不渝',
    abbreviation: 'jcby',
  },
  {
    derivation: '《诗经·颂泮水》憬彼淮夷，来献其琛。”朱熹憬，觉悟也。”',
    example:
      '这在曹雪芹自不免奇怪，再从头想一想，他刚才守口如瓶的那种诡秘神态，～。★高附《曹雪芹别传》',
    explanation: '憬然觉悟的样子。有所觉悟。',
    pinyin: 'jǐng rán yǒu wù',
    word: '憬然有悟',
    abbreviation: 'jryw',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '故土出生地，或过去住过的地方，这里指故乡、祖国。难于离开故乡的土地。形容对家乡或祖国有无限的眷恋之情。',
    pinyin: 'gù tǔ nán lí',
    word: '故土难离',
    abbreviation: 'gtnl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '佛教禅宗指不可思议的彻悟境界。',
    pinyin: 'xiàng shàng yī lù',
    word: '向上一路',
    abbreviation: 'xsyl',
  },
  {
    derivation: '汉·韩婴《韩诗外传》卷一命入朝廷，如赴汤火。”',
    example: '入入公门，～。★清·蒲松龄《聊斋志异·冤狱》',
    explanation: '蹈踩；汤滚水。如同在滚水、烈火中行走一样。比喻处境艰险。',
    pinyin: 'rú dǎo tāng huǒ',
    word: '如蹈汤火',
    abbreviation: 'rdth',
  },
  {
    derivation:
      '《大梵天王问佛决疑经》尔时大梵天王即引若干眷属来奉献世尊于金婆罗华，各各顶礼佛足，退坐一面。尔时世尊即拈奉献金色婆罗华，瞬目扬眉，示诸大众，默然毋措。有迦叶破颜微笑。”',
    example:
      '自家做来做去，原觉得口吻生花；他人看了又看，也必定～是亦缘也。★清·李汝珍《镜花缘》第一百回',
    explanation: '原为佛家语，比喻彻悟禅理◇比喻彼此心意一致。',
    pinyin: 'niān huā wēi xiào',
    word: '拈花微笑',
    abbreviation: 'nhwx',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第十九回三人于是躲躲闪闪，联步而行。一面走著，看那国人都是端方大雅；再看自己，只觉无穷丑态。”',
    example: '这一点事，也值得你～老半天总不肯说。★茅盾《霜叶红似二月花》六',
    explanation:
      '躲避闪开，以免遇到某些情况。亦形容遮遮盖盖，支支吾吾，不坦率，不直爽。',
    pinyin: 'duǒ duǒ shǎn shǎn',
    word: '躲躲闪闪',
    abbreviation: 'ddss',
  },
  {
    derivation: '清·舒位《修箫谱传奇》红男绿女，到如今野草荒田。”',
    example:
      '没有人这么早来逛庙，他自己也并不希望看见什么豆汁摊子，大糖葫芦，沙雁，风车与那些～。★老舍《四世同堂》三十五',
    explanation: '指穿着各种漂亮服装的青年男女。',
    pinyin: 'hóng nán lǜ nǚ',
    word: '红男绿女',
    abbreviation: 'hnln',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '磨完东西后，把拉磨的驴卸下来杀掉。比喻把曾经为自己出过力的人一脚踢开。',
    pinyin: 'xiè mò shā lǘ',
    word: '卸磨杀驴',
    abbreviation: 'xmsl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '泛指不正派的东西。同旁门左道”。',
    pinyin: 'páng mén xié dào',
    word: '旁门邪道',
    abbreviation: 'pmxd',
  },
  {
    derivation: '《封神演义》五十七回大丈夫先立功业，共扶明主，垂名竹帛。”',
    example: '无',
    explanation:
      '垂名传名。竹帛古代供书写用的竹简和白绢，借指典籍、史册。名字被载入史册，流传后世。',
    pinyin: 'chuí míng zhú bó',
    word: '垂名竹帛',
    abbreviation: 'cmzb',
  },
  {
    derivation:
      '唐·韩愈《读皇甫湜公安园池诗书其后》诗《尔雅》注虫鱼，定非磊落人。”',
    example: '无',
    explanation: '指繁琐的考据订正。',
    pinyin: 'chóng yù zhī xué',
    word: '虫鱼之学',
    abbreviation: 'cyzx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容心神极为惊恐不安。',
    pinyin: 'shén sàng dǎn luò',
    word: '神丧胆落',
    abbreviation: 'ssdl',
  },
  {
    derivation: '《庄子·大宗师》以汝为汝肝乎？以汝为虫臂乎？”',
    example: '鼠肝虫臂万化途，神奇腐朽相推迁。★金·元好问《食榆荚》诗',
    explanation: '比喻极微小而无价值的东西。',
    pinyin: 'chóng bì shǔ gān',
    word: '虫臂鼠肝',
    abbreviation: 'cbsg',
  },
  {
    derivation:
      '宋·陈善《扪虱新活·张巡杀爱妾刘昌斩孤甥》君以孤城，用一当十，何以能守？”',
    example: '无',
    explanation: '比喻以寡敌众。',
    pinyin: 'yòng yī dāng shí',
    word: '用一当十',
    abbreviation: 'yyds',
  },
  {
    derivation:
      '梁启超《欧洲地理大势论》其经营泰东也，则横贯万里不毛之西伯利亚，建一空前绝后之大铁路。自嗫嚅小儿之国民视之，几以为五石之瓢匏，落而无所容。”',
    example: '无',
    explanation: '比喻见识浅陋。',
    pinyin: 'niè rú xiǎo ér',
    word: '嗫嚅小儿',
    abbreviation: 'nrxe',
  },
  {
    derivation: '元·无名氏《谢金吾》是什么人在门口大呼小叫，我去看咱。”',
    example:
      '擎火把的都是年轻的农民，另一只手提着枪，也有拿镐的，～的嚷嚷着。★杨朔《雪花飘飘》',
    explanation: '高一声低一声地乱叫乱喊。',
    pinyin: 'dà hū xiǎo jiào',
    word: '大呼小叫',
    abbreviation: 'dhxj',
  },
  {
    derivation:
      '《歧路灯》第五二回况你颇有聪明，实指望掇青拾紫。我问你，至今功名何如？”',
    example: '无',
    explanation: '指获取高官显位。青、紫，古时公卿的服色。',
    pinyin: 'duō qīng shí zǐ',
    word: '掇青拾紫',
    abbreviation: 'dqsz',
  },
  {
    derivation:
      '清·钱谦益《复李叔则书》叔则不以此时金断觿决，示斗极于中流，而又奚待与？”',
    example: '无',
    explanation: '如同金属的刀斧砍物，骨制成的锥子解结。形容决断迅速。',
    pinyin: 'jīn duàn xī jué',
    word: '金断觿决',
    abbreviation: 'jdxj',
  },
  {
    derivation:
      '元·无名氏《谢金吾》第三折刀斧手且住者，不知是那个皇亲国戚来了也，等他过去了，才好杀人那！”',
    example: '无',
    explanation: '皇帝的亲戚。指极有权势的人。',
    pinyin: 'huáng qīn guó qī',
    word: '皇亲国戚',
    abbreviation: 'hqgq',
  },
  {
    derivation:
      '《周易·系辞上》探赜索隐，钩深致远，以定天下吉凶，成天下之娓娓者，莫大乎蓍龟。”',
    example:
      '夫以中华全力，受制潢池，而欲从江左一隅，兼支大国，胜负之数，～矣。★《清史稿·睿忠亲王多尔衮传》',
    explanation:
      '待等待；蓍龟蓍草和龟甲，古人用以占卜。不等着用蓍草和龟甲占卜，而吉凶已经大白。表示事态发展显而易见。',
    pinyin: 'wú dài shī guī',
    word: '无待蓍龟',
    abbreviation: 'wdsg',
  },
  {
    derivation:
      '清·新广东武生《黄萧养回头》又蒙洪提督保举，调回广东，以为有些好处，谁想只受大南门把总之职。所谓长才短驭，好不令人愤恨。”',
    example: '无',
    explanation: '犹言大才小用。',
    pinyin: 'cháng cái duǎn yù',
    word: '长才短驭',
    abbreviation: 'ccdy',
  },
  {
    derivation:
      '《明史·云南土司传二·麓川》［王骥］乃与思禄约，许土目得部勒诸蛮，居孟养如故，立石金沙江为界，誓曰‘石烂江枯，尔乃得渡。’”',
    example: '无',
    explanation: '直到石头变土，江水干涸。比喻不可能发生的事情。',
    pinyin: 'shí làn jiāng kū',
    word: '石烂江枯',
    abbreviation: 'sljk',
  },
  {
    derivation: '五代·王定保《唐摭言·没用处》夫人顶天踵地，惟呼最灵。”',
    example: '无',
    explanation: '犹言顶天立地。指生存于天地之间。',
    pinyin: 'dǐng tiān zhǒng dì',
    word: '顶天踵地',
    abbreviation: 'dtzd',
  },
  {
    derivation:
      '《宋书·符瑞志中》元康四年，南郡获威风。”《宋史·乐志一》九年，岚州献祥麟。”',
    example: '无',
    explanation:
      '麒麟和凤凰，古代传说是吉祥的象征，只有在太平盛世才能见到◇比喻非常难得的人才。',
    pinyin: 'wēi fèng xiáng lín',
    word: '威凤祥麟',
    abbreviation: 'wfxl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '焚毁典籍，坑杀书生。同焚书坑儒”。',
    pinyin: 'fán shū kēng rú',
    word: '燔书坑儒',
    abbreviation: 'fskr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '窥牖从窗上向屋里偷看◇多形容小偷。',
    pinyin: 'kuī yǒu xiǎo ér',
    word: '窥牖小儿',
    abbreviation: 'kyxe',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '夫人。当抵挡。上万个人也抵挡不住。形容人非常勇猛。亦作万夫莫当”。',
    pinyin: 'wàn fū bù dāng',
    word: '万夫不当',
    abbreviation: 'wfbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '事情危险得像堆起来的蛋一样。形容形势极端危险。',
    pinyin: 'shì wēi lèi luǎn',
    word: '事危累卵',
    abbreviation: 'swll',
  },
  {
    derivation:
      '元·关汉卿《裴度还带》有那等嫌贫爱富的儿曹辈，将俺这贫傲慢，把他那富追陪，那个肯恤孤念寡存仁义。”',
    example: '无',
    explanation: '欺侮贫穷，喜爱富有。',
    pinyin: 'qī pín ài fù',
    word: '欺贫爱富',
    abbreviation: 'qpaf',
  },
  {
    derivation:
      '《孙子·九地》兵之情主速。”《三国志·魏书·郭嘉传》太祖将征袁尚及三郡乌丸。……嘉言曰‘兵贵神速。’”',
    example:
      '～，今夜分四路去劫大寨，杀得他只轮不返。★清·陈忱《水浒后传》第七回',
    explanation: '神速特别迅速。用兵贵在行动特别迅速。',
    pinyin: 'bīng guì shén sù',
    word: '兵贵神速',
    abbreviation: 'bgss',
  },
  {
    derivation:
      '冯德英《迎春花》第二章这个狗仗官势、血债累累的地头蛇，被暴怒的人们活活地埋进沙坑。”',
    example: '无',
    explanation: '血债未报的杀人深仇；累累形容很多。指杀人很多，罪恶极大。',
    pinyin: 'xuè zhài lěi lěi',
    word: '血债累累',
    abbreviation: 'xzll',
  },
  {
    derivation:
      '唐·刘禹锡《哭吕衡州》一夜霜风雕玉芝，苍生望绝士林悲，空怀济世安人略，不见男婚女嫁时。”',
    example: '无',
    explanation: '拯救时世，安定人民。',
    pinyin: 'jì shì ān rén',
    word: '济世安人',
    abbreviation: 'jsar',
  },
  {
    derivation:
      '明·刘基《郁离子·枸橼》乃欲使之饭粝茹蔬，被短褐，步走以供使令。”',
    example: '无',
    explanation: '吃糙米和蔬菜。形容饮食粗劣。粝，糙米。',
    pinyin: 'fàn lì rú shū',
    word: '饭粝茹蔬',
    abbreviation: 'flrs',
  },
  {
    derivation:
      '宋·谢采伯《密斋笔记》卷一公不丧心病狂，奈何一旦为此，若不早改图，必且遗臭万世。”',
    example: '惟恐趋承之恐后，岂知其～乎？★明·谢肇渏《五杂俎·事部三》',
    explanation: '死后恶名流传，永远受人唾骂。同遗臭万载”。',
    pinyin: 'yí chòu wàn shì',
    word: '遗臭万世',
    abbreviation: 'ycws',
  },
  {
    derivation:
      '宋·王安石《上五事书》然而天下之人，凫居雁聚，散而之四方而无禁也者，数千百年矣。”',
    example: '无',
    explanation: '指群聚一处。',
    pinyin: 'fú jū yàn jù',
    word: '凫居雁聚',
    abbreviation: 'fjyj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '拒拒绝。把人挡在门外，不让其进入，形容拒绝协商或共事。',
    pinyin: 'jù zhī mén wài',
    word: '拒之门外',
    abbreviation: 'jzmw',
  },
  {
    derivation: '宋·苏轼《绝句三首》天风吹雨入阑干，乌鹊无声夜向阑。”',
    example: '贺老师说完了，三个人～地戳在路灯底下。★陈建功《找乐》第五章',
    explanation: '连乌鸦麻雀的声音都没有。形容没有一点声息。',
    pinyin: 'yā mò què jìng',
    word: '鸦默雀静',
    abbreviation: 'ymqj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '守住残缺的东西不放。比喻泥古守旧，不思变革。亦作守阙抱残”。',
    pinyin: 'shǒu quē bào cán',
    word: '守缺抱残',
    abbreviation: 'sqbc',
  },
  {
    derivation:
      '元·刘壎《隐居通议·经史一》偃革倒戈，归马放牛，乃灭殷以后事；今楚汉相持，正是兵锋之交，而言及此，曾不顾其为迂，何也？”',
    example: '无',
    explanation: '指停息武备，不事战争。',
    pinyin: 'yǎn gé dǎo gē',
    word: '偃革倒戈',
    abbreviation: 'ygdg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指与正事无关的话；废话。',
    pinyin: 'xián yán pō yǔ',
    word: '闲言泼语',
    abbreviation: 'xypy',
  },
  {
    derivation: '《隋唐演义》六十九回敢作敢为，并不知宫中忌惮。”',
    example: '无',
    explanation: '形容做事无所畏惧。',
    pinyin: 'gǎn zuò gǎn wéi',
    word: '敢作敢为',
    abbreviation: 'gzgw',
  },
  {
    derivation: '无',
    example: '敌人不甘心失败，～，颠覆社会主义政权。',
    explanation: '逞如愿，称心如意。指企图达到不正当的目的。',
    pinyin: 'yǐ qiú yī chěng',
    word: '以求一逞',
    abbreviation: 'yqyc',
  },
  {
    derivation:
      '《人民日报》1988.12.31披露了我们向上级反映我店截留利润六十五万元的问题后，遭受打击报复的一些真相。”',
    example: '无',
    explanation: '打击攻击。用敌对的态度回击对方。',
    pinyin: 'dǎ jī bào fù',
    word: '打击报复',
    abbreviation: 'djbf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容惊恐万分，极端害怕。同魂飞魄散”。',
    pinyin: 'hún fēi shén sàng',
    word: '魂飞神丧',
    abbreviation: 'hfss',
  },
  {
    derivation:
      '晋鄐诜举贤良对策为天下第一，自视为桂林之一枝，昆山之片玉”。见《晋书·鄐诜传》。',
    example: '无',
    explanation: '比喻科举及第，获得功名。',
    pinyin: 'xì shēn dān guì',
    word: '鄐诜丹桂',
    abbreviation: 'xsdg',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第八十回好妹妹，我是顿口拙腮，可不能一句一句同你套！”',
    example: '无',
    explanation: '比喻嘴笨，不善于说话。',
    pinyin: 'dùn kǒu zhuō sāi',
    word: '顿口拙腮',
    abbreviation: 'dkzs',
  },
  {
    derivation: '语出唐·韩愈《符读书城南》诗人不通古今，马牛而襟裾。”',
    example: '厌～，笑衣冠沐猴。★元·汪元亨《朝天子·归隐》曲',
    explanation: '像马牛穿上人的衣服。比喻没有头脑和无知。',
    pinyin: 'jīn jú mǎ niú',
    word: '襟裾马牛',
    abbreviation: 'jjmn',
  },
  {
    derivation:
      '元·无名氏《宋季三朝政要》（秦）桧死而逆亮（金主完颜亮）南牧，孰不束手无策。”',
    example:
      '梅飏仁正在～的时候，听了师爷的话说甚是中听，立刻照办。★清·李宝嘉《官场现形记》第五十五回',
    explanation: '策办法。遇到问题，就象手被捆住一样，一点办法也没有。',
    pinyin: 'shù shǒu wú cè',
    word: '束手无策',
    abbreviation: 'sswc',
  },
  {
    derivation: '无',
    example: '历代圣贤或立功、或立言、或立德，而永为～。',
    explanation: '为各方面的人所敬仰。',
    pinyin: 'wàn liú jǐng yǎng',
    word: '万流景仰',
    abbreviation: 'wljy',
  },
  {
    derivation:
      '南朝·梁·刘勰《文心雕龙·练字》苍颉造之，鬼哭粟飞；黄帝用之，官治民察。”',
    example: '无',
    explanation: '传说苍颉造字，惊天动地，天雨粟，鬼夜哭。',
    pinyin: 'guǐ kū sù fēi',
    word: '鬼哭粟飞',
    abbreviation: 'gksf',
  },
  {
    derivation:
      '宋·蔡伸《柳梢青》词丁香露泣残枝，算未比、愁肠寸结。自是休文，多情多感，不干风月。”',
    example: '无',
    explanation: '感情丰富，容易伤感。同多情善感”。',
    pinyin: 'duō qíng duō gǎn',
    word: '多情多感',
    abbreviation: 'dqdg',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '正直而翔实的言论。',
    pinyin: 'wēi yán hé lùn',
    word: '危言核论',
    abbreviation: 'wyhl',
  },
  {
    derivation:
      '茅盾《九一八”周年》华盛顿也许要来‘周年’重申《九国条约》，再给高等华人空心汤圆。”',
    example: '无',
    explanation: '比喻徒有虚名而无实利或不能落实的诺言。',
    pinyin: 'kōng xīn tāng yuán',
    word: '空心汤圆',
    abbreviation: 'kxty',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '人民比君主更重要。这是民本思想。',
    pinyin: 'mín guì jūn qīng',
    word: '民贵君轻',
    abbreviation: 'mgjq',
  },
  {
    derivation: '《法苑珠林》卷一０七在家出家，平等而受。”',
    example: '无',
    explanation: '指不出家当和尚，清心寡欲，在家修行。',
    pinyin: 'zài jiā chū jiā',
    word: '在家出家',
    abbreviation: 'zjcj',
  },
  {
    derivation:
      '毛泽东《关于蒋介石声明的声明》他之所以能够安然离开西安，除西安事变的领导者张杨二将军之外，共产党的调停，实与有力。”',
    example: '无',
    explanation: '与参与，在里面。确实在里边出了力。',
    pinyin: 'shí yù yǒu lì',
    word: '实与有力',
    abbreviation: 'syyl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '丝发一根丝，一根头发。指功劳极微小。',
    pinyin: 'sī fā zhī gōng',
    word: '丝发之功',
    abbreviation: 'sfzg',
  },
  {
    derivation: '无',
    example:
      '发表意见之前须对事情的真实情况先有所了解，不可一只半解便～，否则必将遭人耻笑。',
    explanation: '指空泛不切合实际的言论。',
    pinyin: 'dà fā miù lùn',
    word: '大发谬论',
    abbreviation: 'dfml',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第十五回汝贪心不足！既得吴郡，而又强并吾界！”',
    example: '无',
    explanation: '贪得无厌，永不满足。',
    pinyin: 'tān xīn bù zú',
    word: '贪心不足',
    abbreviation: 'txbz',
  },
  {
    derivation: '无',
    example: '他因～而致身败名裂。',
    explanation: '迁就私情而违反法纪。',
    pinyin: 'xùn sī wǎng fǎ',
    word: '徇私枉法',
    abbreviation: 'xswf',
  },
  {
    derivation:
      '元·王实甫《西厢记》第三本第二折将简帖儿掂，将妆盒儿按，开拆封皮孜孜看，颠来倒去不害心烦。”',
    example: '无',
    explanation: '翻过来倒过去，来回重复。',
    pinyin: 'diān lái dǎo qù',
    word: '颠来倒去',
    abbreviation: 'dldq',
  },
  {
    derivation: '《汉书·贾山传》布衣韦带之士，修身于内，成名于外。”',
    example: '相府开筵，常聚些～。★清·吴敬梓《儒林外史》第八回',
    explanation: '原是古代贫民的服装，后指没有做官的读书人。',
    pinyin: 'bù yī wéi dài',
    word: '布衣韦带',
    abbreviation: 'bywd',
  },
  {
    derivation: '宋·朱熹《朱子语类》第67卷天下只是一个道理，更无三般两样。”',
    example: '唱戏的小粉头们都～，掂人的分量。★清·曹雪芹《红楼梦》第60回',
    explanation: '指多个，也指耍手段，弄花样。',
    pinyin: 'sān bān liǎng yàng',
    word: '三般两样',
    abbreviation: 'sbly',
  },
  {
    derivation:
      '《老子》第十九章见素抱朴，少私寡欲。”晋·陶潜《劝农》傲然自足，抱朴含真。”',
    example: '无',
    explanation:
      '抱保；朴朴素；真纯真、自然。道家主张人应保持并蕴含朴素、纯真的自然天性，不要沾染虚伪、狡诈而玷污、损伤人的天性。',
    pinyin: 'bào pǔ hán zhēn',
    word: '抱朴含真',
    abbreviation: 'bphz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容游人来往不绝。',
    pinyin: 'zhàng lǚ zòng héng',
    word: '杖履纵横',
    abbreviation: 'zlzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻微小的得失，无关紧要。同鸡虫得失”。',
    pinyin: 'jī chóng dé sàng',
    word: '鸡虫得丧',
    abbreviation: 'jcds',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '尊敬年纪大的或品德高尚、才能出众的人。',
    pinyin: 'jìng lǎo zūn xián',
    word: '敬老尊贤',
    abbreviation: 'jlzx',
  },
  {
    derivation: '《庄子·外物》我东海之波臣，君岂有斗升之水而活我哉？”',
    example: '无',
    explanation: '比喻微薄的资助。',
    pinyin: 'dǒu shēng zhī shuǐ',
    word: '斗升之水',
    abbreviation: 'dszs',
  },
  {
    derivation: '宋·周邦彦《霜叶飞》词迢递望极关山，波穿千里，度日如岁难到。”',
    example: '欲见之切，～。★《警世通言·王娇鸾百年长恨》',
    explanation: '过一天象过一年那样长。形容日子很不好过。同度日如年”。',
    pinyin: 'dù rì rú suì',
    word: '度日如岁',
    abbreviation: 'drrs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容激烈的争战。',
    pinyin: 'qiāng yān pào yǔ',
    word: '枪烟砲雨',
    abbreviation: 'qypy',
  },
  {
    derivation: '《左传·宣公三年》楚子问鼎之大小轻重焉？”',
    example: '无',
    explanation: '问鼎的大小轻重。指妄图夺取天下。',
    pinyin: 'wèn dǐng qīng zhòng',
    word: '问鼎轻重',
    abbreviation: 'wdqz',
  },
  {
    derivation: '《东观汉记·李恂》恂奉公不阿，为宪所奏免。”',
    example: '无',
    explanation: '奉行公事而不去迎合别人。',
    pinyin: 'fèng gōng bù ē',
    word: '奉公不阿',
    abbreviation: 'fgbe',
  },
  {
    derivation: '蒋子龙《乔厂长上任记》让老乔先撤，你为他两肋插刀顶上一阵。”',
    example: '为朋友～，不算什么。★高云览《小城春秋》第29章',
    explanation: '两边肋骨插上刀，表示不怕死。比喻承担极大的牺牲。',
    pinyin: 'liǎng lèi chā dāo',
    word: '两肋插刀',
    abbreviation: 'llcd',
  },
  {
    derivation:
      '《庄子·天地》鲁君谓葂也曰‘请受教。’辞不获命，既已告矣，未知中否。”',
    example:
      '卫交军文子问二三子之于赐，天壹而三焉，赐也～，以所见者对矣。★《孔子家语·弟子行》',
    explanation: '指辞谢而未获允许。',
    pinyin: 'cí bù huò mìng',
    word: '辞不获命',
    abbreviation: 'cbhm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '不能辨清背叛倾仄之人。',
    pinyin: 'wú bèi wú cè',
    word: '无背无侧',
    abbreviation: 'wbwc',
  },
  {
    derivation: '唐·李贺诗《李凭箜篌引》女娲炼石补天处，石破天惊逗秋雨。”',
    example:
      '陈继泰被他们这样的一来，好似那雷霆乍震，～，只吓得个肺腑皆崩，神魂出窍。★清·张春帆《宦海》第十九回',
    explanation:
      '原形容箜篌的声音，忽而高亢，忽而低沉，出人意外，有能以形容的奇境◇多比喻文章议论新奇惊人。',
    pinyin: 'shí pò tiān jīng',
    word: '石破天惊',
    abbreviation: 'sptj',
  },
  {
    derivation:
      '明·凌濛初《初刻拍案惊奇》第13卷过了两月，又近吉日，却又欠迎亲之费，六老只得东挪西凑，寻了几件衣饰之类，往典铺中解了几十两银子，却也不够使用。”',
    example: '不过这样头痛医头，～，总不是办法。★茅盾《子夜》',
    explanation: '指各处挪借，凑集款项。',
    pinyin: 'dōng nuó xī còu',
    word: '东挪西凑',
    abbreviation: 'dnxc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '云雾笼罩的楼阁门窗。指高楼。',
    pinyin: 'wù gé yún chuāng',
    word: '雾阁云窗',
    abbreviation: 'wgyc',
  },
  {
    derivation: '清·宣鼎《夜雨秋灯录·青天白日》餐风咽露，跋涉奔波。”',
    example: '无',
    explanation: '形容旅途或野外生活的艰苦。',
    pinyin: 'cān fēng yàn lù',
    word: '餐风咽露',
    abbreviation: 'cfyl',
  },
  {
    derivation:
      '语出《隋书·天文志上》抜铜仪呴所以准验辰历，分考次度，其于揆测，唯所欲为之者也。”',
    example: '无',
    explanation: '随心所欲，任意而为。',
    pinyin: 'wéi suǒ yù wéi',
    word: '唯所欲为',
    abbreviation: 'wsyw',
  },
  {
    derivation: '《论语·述而》举一隅不以三隅反，则不复也。”',
    example: '无',
    explanation: '指善于推理，能由此及彼。',
    pinyin: 'yī jǔ sān fǎn',
    word: '一举三反',
    abbreviation: 'yjsf',
  },
  {
    derivation: '《论语·卫灵公》君子不以言举人，不以人废言。”',
    example: '径寸之宝，或隐沙泥；～，君子斯戒。★《梁书·武帝纪中》',
    explanation:
      '以因为；废废弃。因为说话人的地位的低下或犯有错误就不采纳他所说的正确的意见。',
    pinyin: 'yǐ rén fèi yán',
    word: '以人废言',
    abbreviation: 'yrfy',
  },
  {
    derivation:
      '南朝·梁·沈约《为东宫谢敕赐孟尝君剑启》田文重气徇命，四豪莫及。”',
    example: '无',
    explanation: '重视义气，慕求声名。',
    pinyin: 'zhòng qì xùn míng',
    word: '重气徇命',
    abbreviation: 'zqxm',
  },
  {
    derivation: '汉·焦延寿《易林》卷十三蚁封户穴，大雨将集。”',
    example: '无',
    explanation: '蚂蚁聚土洞口，是要下大雨的征兆。',
    pinyin: 'yǐ fēng xué yǔ',
    word: '蚁封穴雨',
    abbreviation: 'yfxy',
  },
  {
    derivation:
      '清·陈澧《东塾读书记》卷十六太社不立于京都，当安所立。尤无可置辩矣。”',
    example: '我们应该用～的道理说服人，而不是装腔作势，借以吓人。',
    explanation:
      '置辩辩论，申辩（用于否定）。没有什么可以争辩的。表示确凿无疑。',
    pinyin: 'wú kě zhì biàn',
    word: '无可置辩',
    abbreviation: 'wkzb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指刚正而自行其意，不为人所动摇。',
    pinyin: 'qiáng zhí zì suí',
    word: '强直自遂',
    abbreviation: 'qzzs',
  },
  {
    derivation:
      '毛泽东《星星之火，可以燎原》它是立于高山之巅远看东方已见光芒四射喷薄欲出的一轮朝日。”',
    example: '无',
    explanation:
      '喷薄涌起，上升的样子；欲将要。形容水涌起或太阳初升时涌上地平线的样子。',
    pinyin: 'pēn bó yù chū',
    word: '喷薄欲出',
    abbreviation: 'pbyc',
  },
  {
    derivation: '《左传·庄公二十二年》臣卜其昼，未卜其夜，不敢。”',
    example:
      '把这些指挥官们，招集在这列花车里，～、昏天黑地，一起比大欢喜。★徐铸成《何成浚与叶蓬》',
    explanation: '卜占卜。形容夜以继日地宴乐无度。',
    pinyin: 'bǔ zhòu bǔ yè',
    word: '卜昼卜夜',
    abbreviation: 'bzby',
  },
  {
    derivation:
      '宋·释普济《五灯会元》临济门下有个赤梢鲤鱼，摇头摆尾向南方去，不知向谁家齑瓮里淹杀？”',
    example: '无',
    explanation:
      '原形容鱼悠然自在的样子。现用来形容人摇头晃脑、轻浮得意的样子。',
    pinyin: 'yáo tóu bǎi wěi',
    word: '摇头摆尾',
    abbreviation: 'ytbw',
  },
  {
    derivation:
      '明·无名氏《渔樵闲话》第三折但熟甜瓜软处偏捏，蜡枪头会道能说。”',
    example:
      '天天打扮的象个西施样子，在人跟前～，抓尖要强。★清·曹雪芹《红楼梦》第七十四回',
    explanation: '形容人口才好，很会讲话。',
    pinyin: 'néng shuō guàn dào',
    word: '能说惯道',
    abbreviation: 'nsgd',
  },
  {
    derivation:
      '明·冯梦龙《东周列国志》第十二回昭公虽不治罪，心中怏怏，恩礼稍减于昔日。祭足亦觉踨蹐不安，每每称疾不朝。”',
    example:
      '只见文老爷会在那里，脸上红一阵，白一阵，很觉得～。（清·李宝嘉《官场现形记》第十三回）',
    explanation: '局促拘束。形容举止拘束，心中不安。',
    pinyin: 'jú cù bù ān',
    word: '局促不安',
    abbreviation: 'jcba',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指神奇奥妙的兵书。',
    pinyin: 'shén shū guǐ cáng',
    word: '神枢鬼藏',
    abbreviation: 'ssgc',
  },
  {
    derivation: '《北史·李浑传》雕虫小技，我不如卿；国典朝章，卿不如我。”',
    example:
      '这些玩意儿，尽是些～，不过解闷消闲。我讲的是长枪大戟，东荡西驰的本领。★清·文康《儿女英雄传》第十八回',
    explanation:
      '雕雕刻；虫指鸟虫书，古代汉字的一种字体。比喻小技或微不足道的技能。',
    pinyin: 'diāo chóng xiǎo jì',
    word: '雕虫小技',
    abbreviation: 'dcxj',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '比喻用尽心思。多形容为事业、工作、文艺创作等用心的艰苦。同鉥心刿目”。',
    pinyin: 'diāo gān guì shèn',
    word: '鉥肝刿肾',
    abbreviation: 'dggs',
  },
  {
    derivation: '元·王恽《番禺杖》诗物眇离乡贵，材稀审实讹。”',
    example: '无',
    explanation: '物品离产地越远越贵重。',
    pinyin: 'wù lí xiāng guì',
    word: '物离乡贵',
    abbreviation: 'wlxg',
  },
  {
    derivation:
      '《左传·襄公十四年》楚子囊还自伐吴，卒。将死，遗言谓子庚‘必城郢！’君子谓子囊忠……将死，不忘卫社稷，可不谓忠乎！”',
    example:
      '公临危审正，载惟话言，～，惟几而弥固。★南朝·梁·沈约《齐故安陆昭王碑文》',
    explanation: '指爱国之情。',
    pinyin: 'chǔ náng zhī qíng',
    word: '楚囊之情',
    abbreviation: 'cnzq',
  },
  {
    derivation: '元·李寿卿《伍员吹箫》第一折我便拳撞脚踢，也不怕他不死。”',
    example:
      '还说甚么！为你这两个人，带累我一顿～！★清·吴敬梓《儒林外史》第九回',
    explanation: '用拳打，用脚踢。形容痛打。',
    pinyin: 'quán dǎ jiǎo tī',
    word: '拳打脚踢',
    abbreviation: 'qdjt',
  },
  {
    derivation:
      '汉·司马迁《报任少卿书》假令仆伏法受诛，若九牛一毛，与蝼蚁何以异？”',
    example: '无',
    explanation: '伏法由于违法而受处死刑；诛杀死。犯法被杀。',
    pinyin: 'fú fǎ shòu zhū',
    word: '伏法受诛',
    abbreviation: 'ffsz',
  },
  {
    derivation:
      '宋·苏轼《送安犉秀才失解西归》旧书不厌百回读，熟读深思子自知。”',
    example: '无',
    explanation: '反复地阅读，认真地思考。',
    pinyin: 'shú dú shēn sī',
    word: '熟读深思',
    abbreviation: 'sdss',
  },
  {
    derivation: '《后汉书·杜林传》林从竦受学，博洽多闻，时称通儒。”',
    example: '无',
    explanation: '洽广博；闻见闻。知识丰富，见闻广博。',
    pinyin: 'bó qià duō wén',
    word: '博洽多闻',
    abbreviation: 'bqdw',
  },
  {
    derivation:
      '宋·岳飞《奏乞解军务札子》苟非木石，宁不自知？每誓粉骨糜身，以图报称。”',
    example: '无',
    explanation: '犹言粉骨碎身。',
    pinyin: 'fěn gǔ mí shēn',
    word: '粉骨糜身',
    abbreviation: 'fgms',
  },
  {
    derivation:
      '《脂砚斋重评石头记》第九回宁府人多口杂，那些不得志的奴仆们聑能造言诽谤主人。”',
    example: '在～的地方，我就尽可能的少作些引人注目的行为。★夏衍《谈自己》',
    explanation: '指谈论的人多，各种议论都有。',
    pinyin: 'rén duō kǒu zá',
    word: '人多口杂',
    abbreviation: 'rdkz',
  },
  {
    derivation: '明·李东阳《王凝妻》诗君不见中原将相夸男儿，朝梁暮周皆逆旅。”',
    example: '无',
    explanation: '比喻人反复无常，没有节操。',
    pinyin: 'zhāo liáng mù zhōu',
    word: '朝梁暮周',
    abbreviation: 'zlmz',
  },
  {
    derivation:
      '明·吴承恩《西游记》第七十五回这一关了门，他再问我家长里短的事，我对不来，却不弄走了风，被他拿住？”',
    example:
      '便是禇大娘子，也和她两年有余不曾长篇大论的谈过个～。★清·文康《儿女英雄传》第二十一回',
    explanation: '指家庭日常生活琐事。',
    pinyin: 'jiā cháng lǐ duǎn',
    word: '家长里短',
    abbreviation: 'jcld',
  },
  {
    derivation:
      '宋·陆九渊《贵溪重修县学记》二帝二皇之书，先圣先师之训，炳如日星。”',
    example: '无',
    explanation: '光明如同日月星辰。',
    pinyin: 'bǐng rú rì xīng',
    word: '炳如日星',
    abbreviation: 'brrx',
  },
  {
    derivation:
      '魏巍《路标》却有人认为糊糊涂涂地吃喝玩乐，那才算没有虚掷自己的年华。”',
    example: '无',
    explanation: '指过恣意享乐的生活。',
    pinyin: 'chī hē wán lè',
    word: '吃喝玩乐',
    abbreviation: 'chwl',
  },
  {
    derivation:
      '鲁迅《坟·论费厄泼赖”应该缓行》听说刚勇的拳师，决不再打那倒地的敌手，这实足使我们奉为楷模。”',
    example: '无',
    explanation: '楷法式；模模范。把某种事物当作榜样。',
    pinyin: 'fèng wéi kǎi mó',
    word: '奉为楷模',
    abbreviation: 'fwkm',
  },
  {
    derivation:
      '金·元好问《题商孟卿家明皇合曲图》诗海棠一株春一国，燕燕莺莺作寒食。”',
    example:
      '南方人也可怜北方人太简单了，便送上许多文章……什么‘噫嘻卿卿我我’‘呜呼～’‘呈嗟风风雨雨’。★鲁迅《热风·随感录六十四》',
    explanation: '比喻娇妻美妾或年轻女子。',
    pinyin: 'yàn yàn yīng yīng',
    word: '燕燕莺莺',
    abbreviation: 'yyyy',
  },
  {
    derivation:
      '元·关汉《窦娥冤》第三折天地也做得个怕硬欺软，却原来也这般顺水推船。”',
    example: '他若留我，乐得～。★清·李宝嘉《官场现形记》第十回',
    explanation: '顺着水流的方向推船。比喻顺着某个趋势或某种方便说话办事。',
    pinyin: 'shùn shuǐ tuī zhōu',
    word: '顺水推舟',
    abbreviation: 'sstz',
  },
  {
    derivation: '《旧唐书·郭子仪传》载唐郭子仪有子八人，婿七人，皆朝廷重官。',
    example:
      '我家中又没有～，只有一个孩儿，如何去得？★明·高明《琵琶记·蔡公逼试》',
    explanation: '形容子、婿众多。',
    pinyin: 'qī zǐ bā xù',
    word: '七子八婿',
    abbreviation: 'qzbx',
  },
  {
    derivation: '《孟子·离娄下》大人者，不失其赤子之心者也。”',
    example:
      '尧、舜、禹、汤、周、孔，时刻以救民济世为心，所谓～，原不过是不忍”二字。★清·曹雪芹《红楼梦》第一一八回',
    explanation: '赤子初生的婴儿。比喻人心地纯洁善良。',
    pinyin: 'chì zǐ zhī xīn',
    word: '赤子之心',
    abbreviation: 'czzx',
  },
  {
    derivation:
      '老舍《一封家信》看明白了大部分的字，都是责难他的！她的形影与一切都消逝了，他眼前只是那张死板板的字，与一些冷酷无情的字！”',
    example:
      '斤澜反映现实生活，有时像不是用笔，而是用解剖刀。在给人以深刻感的同时，也带来一些～的压抑感。★孙犁《读作品记（三）》',
    explanation: '冷漠苛刻，没有感情。',
    pinyin: 'lěng kù wú qíng',
    word: '冷酷无情',
    abbreviation: 'lkwq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹弃短就长。指舍弃短处而采用长处。',
    pinyin: 'qì duǎn yòng cháng',
    word: '弃短用长',
    abbreviation: 'qdyc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容灾祸、战乱极其严重，天下动荡不安。',
    pinyin: 'huò luàn tāo tiān',
    word: '祸乱滔天',
    abbreviation: 'hltt',
  },
  {
    derivation:
      '清·李渔《凰求凤·画策》你是个多谋善虑之人，何不替我筹度一番，行了这个方便也好。”',
    example: '无',
    explanation: '谋谋划，策划；虑思考。富于智谋，又善于思考。',
    pinyin: 'duō móu shàn lǜ',
    word: '多谋善虑',
    abbreviation: 'dmsl',
  },
  {
    derivation:
      '《醒世恒言·灌园叟晚逢仙女》其花大如丹盘，五色灿烂，光华夺目。”',
    example: '[这女人]颈里一条白丝围巾，身上绿绸旗袍，～。★钱锺书《围城》五',
    explanation: '犹光彩夺目。形容鲜艳耀眼。',
    pinyin: 'guāng huá duó mù',
    word: '光华夺目',
    abbreviation: 'ghdm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容转战南北，经历了许多战斗。亦作南征北讨”。亦作南征北战”。',
    pinyin: 'nán zhēng běi fá',
    word: '南征北伐',
    abbreviation: 'nzbf',
  },
  {
    derivation: '《尔雅·释地》南方有比翼鸟焉，不比不飞，其名谓之鹣鹣。”',
    example: '居里夫妇在科学征途上～。',
    explanation:
      '比翼翅膀挨着翅膀。齐飞成双的并飞。比喻夫妻情投意合，在事业上并肩前进。',
    pinyin: 'bǐ yì qí fēi',
    word: '比翼齐飞',
    abbreviation: 'byqf',
  },
  {
    derivation:
      '宋·杨夔《复宫阙后上执政书》前车已覆，后车岂可蹑而行之，固当改辙易途，以取其不倾不蹶。”',
    example: '无',
    explanation: '改变行车轨道，另走一条路。比喻改变方向、目标或做法。',
    pinyin: 'gǎi zhé yì tú',
    word: '改辙易途',
    abbreviation: 'gzyt',
  },
  {
    derivation:
      '《旧唐书·苏味道传》处事不欲决断明白，若有错误，必贻咎谴，但模棱以持两端可矣。”',
    example:
      '他害怕事情一旦变化，他将有不测大祸，所以跪在地上回答了一句～的话。（姚雪垠《李自成》第二卷第三十章）',
    explanation:
      '模棱含糊，不明确；两可可以这样，也可以那样。指不表示明确的态度，或没有明确的主张。',
    pinyin: 'mó léng liǎng kě',
    word: '模棱两可',
    abbreviation: 'mllk',
  },
  {
    derivation:
      '姚雪垠《李自成》第二卷第三十二章休再罗索！朕因流贼猖獗，东事日急，内外交困，不得不百计筹饷。”',
    example: '无',
    explanation: '交同时；困困境。里里外外都处于困难的境地。',
    pinyin: 'nèi wài jiāo kùn',
    word: '内外交困',
    abbreviation: 'nwjk',
  },
  {
    derivation: '《晋书·顾恺之传》尝图裴楷橡，颊上夹三毛，观者觉神明殊胜。”',
    example: '无',
    explanation:
      '颊面颊；毫毫毛。给人画像时在脸上添上几根毫毛。比喻文章经润色后更加精采。',
    pinyin: 'jiá shàng tiān háo',
    word: '颊上添毫',
    abbreviation: 'jsth',
  },
  {
    derivation: '汉·王充《论衡·自纪》闭明塞聪，爱精自保。”',
    example: '无',
    explanation: '堵塞视听。指对外界事物不闻不问或不了解。',
    pinyin: 'bì míng sè cōng',
    word: '闭明塞聪',
    abbreviation: 'bmsc',
  },
  {
    derivation:
      "毛泽东《反对党八股》'看菜吃饭，量体裁衣。'我们无论做什么事都要看情形办理，文章和演说也是这样。”",
    example: '俗话说～，量体裁衣。”',
    explanation: '比喻根据具体情况办事。',
    pinyin: 'kàn cài chī fàn',
    word: '看菜吃饭',
    abbreviation: 'kccf',
  },
  {
    derivation:
      '元·王实甫《西厢记》第三本第三折我这里蹑足潜踪，悄地听咱。一个羞惭，一个怒发。”',
    example:
      '叔宝～，进了老母卧房来，只见两个丫头，三年内都已长大。（清·禇人获《隋唐演义》第十五回）',
    explanation:
      '蹑足脚步很轻的样子；潜隐藏；踪踪迹。指放轻脚步，隐住身体。形容小心隐秘的样子。',
    pinyin: 'niè zú qián zōng',
    word: '蹑足潜踪',
    abbreviation: 'nzqz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻趁着有利的情势行事。同顺风使帆”。',
    pinyin: 'shùn fēng zhāng fān',
    word: '顺风张帆',
    abbreviation: 'sfzf',
  },
  {
    derivation: '《周易·系辞上》乐天知命，故不忧。”',
    example:
      '近来我在林下，倒常教他做几首诗，吟咏性情，要他知道～的道理，在我膝下承欢便了。★清·吴敬梓《儒林外史》第八回',
    explanation:
      '天天意；命命运。安于自己的处境，由命运安排。这是相信宿命论的人生观。',
    pinyin: 'lè tiān zhī mìng',
    word: '乐天知命',
    abbreviation: 'ltzm',
  },
  {
    derivation:
      '《晋书·庾亮传论》智小谋大，昧经邦之远图；才高识寡，阙安国之长算。”《周书·李弼传》宇文夏州才略冠世，德义可宗☆英陈公智小谋大，岂能自保。”',
    example: '无',
    explanation: '指能力低下而谋划很大。',
    pinyin: 'zhì xiǎo móu dà',
    word: '智小谋大',
    abbreviation: 'zxmd',
  },
  {
    derivation: '元·无名氏《盆儿鬼》第三折想起俺少时节，眼明手捷，体快身轻。”',
    example:
      '到了此时，我方才佩服那广东人的～，机警非常。★清·吴趼人《二十年目睹之怪现状》第二回',
    explanation: '看得准，动作敏捷。',
    pinyin: 'yǎn míng shǒu kuài',
    word: '眼明手快',
    abbreviation: 'ymsk',
  },
  {
    derivation:
      '汉·赵晔《吴越春秋·吴太伯传》邠人父子兄弟相帅负老携幼揭釜甑而归。”',
    example: '无',
    explanation: '背着老人，带着孩子。形容百姓全体出动，流离失所的悲惨情景。',
    pinyin: 'fù lǎo xié yòu',
    word: '负老携幼',
    abbreviation: 'flxy',
  },
  {
    derivation:
      '曹禺《王昭君》第二幕他是以宽厚出名的，讲究忠信。是一个励精图治，革故立新的单于。”',
    example: '无',
    explanation:
      '旧指朝政变革或改朝换代。现泛指除去旧的，建立新的。同革故鼎新”。',
    pinyin: 'gé gù lì xīn',
    word: '革故立新',
    abbreviation: 'gglx',
  },
  {
    derivation: '晋·陆机《吊魏武帝文》夫以回天倒日之力，而不能振形骸之内。”',
    example: '无',
    explanation: '犹言旋转乾坤。',
    pinyin: 'huí tiān dǎo rì',
    word: '回天倒日',
    abbreviation: 'htdr',
  },
  {
    derivation: '清和邦额《夜谭随录·霍筠》宜春、蕊儿，渺无踪影。”',
    example:
      '睁大眼，惘然凝视屋角的鼠洞，努力追忆昨夜的颠倒迷梦，然而——已经渺无影踪。★茅盾《腐蚀·十一月十三日》',
    explanation: '看不到一点踪纪影子。亦作渺无影踪”。',
    pinyin: 'miǎo wú zōng yǐng',
    word: '渺无踪影',
    abbreviation: 'mwzy',
  },
  {
    derivation:
      '清·刘大櫆《赠资政大夫吴府君墓表》其他修祠宇、平道路、焚责券，苟有利于人，倒箧倾筐恐后也。”',
    example: '无',
    explanation: '形容倾其所有。',
    pinyin: 'dǎo qiè qīng kuāng',
    word: '倒箧倾筐',
    abbreviation: 'dqqk',
  },
  {
    derivation:
      '元·高明《琵琶记》第二出论做人要光前耀后。劝我儿青云万里，早当驰骤。”',
    example: '今仁兄～，亦由今始，愿努力自爱。★明·冯梦龙《醒世恒言》第二十五卷',
    explanation: '比喻前程远大。',
    pinyin: 'qīng yún wàn lǐ',
    word: '青云万里',
    abbreviation: 'qywl',
  },
  {
    derivation:
      '秦牧《艺海拾贝·神速的剪影》；通过这二十几个字，一个雪肤花貎、十指纤纤、唇红齿白、云鬓蛾眉、秋水盈盈、嫣然含笑的古代美女的形象，就呈现在人们眼前了。”',
    example: '无',
    explanation: '形容眼神饱含感情。同秋波盈盈”。',
    pinyin: 'qiū shuǐ yíng yíng',
    word: '秋水盈盈',
    abbreviation: 'qsyy',
  },
  {
    derivation:
      '《三国志·魏志·鲜卑传》裴松之注引《魏书》年十四五，异部大人卜贲邑钞取其外家牛羊，檀石槐策骑追击，所向无前，悉还得所亡。”',
    example: '恃勇锐冲锋出战，指征途～。★清·洪昻《长生殿·贿权》',
    explanation: '所向指军队所指向的地方。军队所指向的地方，没有阻挡。',
    pinyin: 'suǒ xiàng wú qián',
    word: '所向无前',
    abbreviation: 'sxwq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指贪图安逸享乐等于饮毒酒自杀。同宴安鸩毒”。',
    pinyin: 'yàn ān dān dú',
    word: '宴安醙毒',
    abbreviation: 'yadd',
  },
  {
    derivation: '宋·苏轼《念如娇，赤壁怀古》江山如画，一时多少豪杰。”',
    example: '苍天无语，～，一片残阳西挂。★梁启超《劫灰梦传奇·独啸》',
    explanation: '山川、河流美如画卷。形容自然风光美丽如图画。',
    pinyin: 'jiāng shān rú huà',
    word: '江山如画',
    abbreviation: 'jsrh',
  },
  {
    derivation: '参见半死半生”。',
    example:
      '忙跑几步，好失了脚步掉得下去，好跌得烂酱如泥，免得～，常驻苦常驻罪。★《醒世姻缘传》第七五回',
    explanation: '指死又死不了，活着又受罪。',
    pinyin: 'bàn sǐ là huó',
    word: '半死辣活',
    abbreviation: 'bslh',
  },
  {
    derivation: '《论语·述尔》举一隅不以三隅反，则不复也。”',
    example: '人但各以其～，认定以为道止如此。★明·王守仁《语录一》',
    explanation: '见见解。偏于一方面的见解。',
    pinyin: 'yī yú zhī jiàn',
    word: '一隅之见',
    abbreviation: 'yyzj',
  },
  {
    derivation:
      '宋·朱熹《朱子语类》卷十八因说自欺欺人曰欺人亦是自欺，此又是自欺之甚者。”',
    example:
      '即使表面上搽着抗战”的保护色，终究是～，一无是处。★茅盾《灭关”与忘了”》',
    explanation: '自欺自我欺骗。欺骗自己，也欺骗别人。',
    pinyin: 'qī rén zì qī',
    word: '欺人自欺',
    abbreviation: 'qrzq',
  },
  {
    derivation:
      '姚雪垠《李自成》第二卷第十八章至于替魏忠贤建立生祠，更被人们认为是‘无耻之尤’”',
    example: '无',
    explanation: '尤突出的。最无耻的。形容无耻到了极点。',
    pinyin: 'wú chǐ zhī yóu',
    word: '无耻之尤',
    abbreviation: 'wczy',
  },
  {
    derivation:
      '明·施耐庵《水浒传》第八十五回四方混杀，人人束手，个个归心。定安国舅气的目睁口呆，罔知所措。与众等侍郎束手被擒。”',
    example: '众人看了，惊得～，伸了舌头，收不进来。★《初刻拍案惊奇》卷一',
    explanation: '惊惧得睁大双眼说不出话来。形容因吃惊或受气而发楞。',
    pinyin: 'mù zhēng kǒu dāi',
    word: '目睁口呆',
    abbreviation: 'mzkd',
  },
  {
    derivation:
      '《诗经·周南·桃夭》桃之夭夭，灼灼其华。”《诗经·召南·何彼秾矣》何彼秾矣，华如桃李。”',
    example:
      '～，宜早合良缘，毋使婚嫁愆期，致令幼女怀春，吉士有摽梅之赋也。（清·彭养鸥《黑籍冤魂》第八回）',
    explanation: '比喻年少美貌。多用为对人婚娶的颂辞。',
    pinyin: 'yāo táo nóng lǐ',
    word: '夭桃秾李',
    abbreviation: 'ytnl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹千言万语。指书面文字。',
    pinyin: 'qiān zhāng wàn jù',
    word: '千章万句',
    abbreviation: 'qzwj',
  },
  {
    derivation: '明·施耐庵《水浒全传》第四十九回毛太公那厮，有钱有势。”',
    example: '无',
    explanation: '既有钱财，又有势力。',
    pinyin: 'yǒu qián yǒu shì',
    word: '有钱有势',
    abbreviation: 'yqys',
  },
  {
    derivation:
      '清·黄小配《廿载繁华梦》第十六回各人听了，反不以为是，就有说他是嫌钱多的，又有说他是愿贫不愿富的，邓仪卿种种置之不理而已。”',
    example: '老师批评他，他～。',
    explanation: '之代词，它；理理睬。放在一边，不理不睬。',
    pinyin: 'zhì zhī bù lǐ',
    word: '置之不理',
    abbreviation: 'zzbl',
  },
  {
    derivation:
      '《元史·文宗本纪》四大都总管刘原仁称疾，久不视事，及迁同知储政院事，即就职，侥幸巧宦避难就易。”',
    example:
      '有些地方你的确说出了我的弱点，比如你说我～地在手法上取巧。★巴金《生之忏悔·我的自剖》',
    explanation:
      '就凑近，靠近。躲开难的，去找容易的做。也指做事情先从容易的做起。',
    pinyin: 'bì nán jiù yì',
    word: '避难就易',
    abbreviation: 'bnjy',
  },
  {
    derivation: '宋·柳永《法曲献仙音》词饶心性，镇厌厌多病，柳腰花态娇无力。”',
    example: '无',
    explanation: '形容女子婀娜娇美的体态。',
    pinyin: 'liǔ yāo huā tài',
    word: '柳腰花态',
    abbreviation: 'lyht',
  },
  {
    derivation:
      '《庄子·骈拇》长者不为有余，短者不为不足。是故凫胫虽短，续之则忧；鹤胫虽长，断之则悲。”',
    example:
      '～，截足以适履，犹以为工未至也，如是则宁复有诗哉？★清钱谦益《题》',
    explanation: '比喻违失事物本性，欲益反损。',
    pinyin: 'xù fú duàn hè',
    word: '续凫断鹤',
    abbreviation: 'xfdh',
  },
  {
    derivation:
      '清·戴名世《吴他山诗序》余游四方，往往闻农夫细民倡情冶思之所歌谣，虽其辞为方言鄙语，而亦时有义意之存。”',
    example: '无',
    explanation: '冶荡轻佻的情思。',
    pinyin: 'chàng qíng yě sī',
    word: '倡情冶思',
    abbreviation: 'cqys',
  },
  {
    derivation:
      '清·魏子安《花月痕》第三回虽终日兀坐车中，不发一语，其实连编累牍也写不了他胸中情绪。”',
    example: '无',
    explanation: '牍古代写字的木片。形容篇幅过多，文辞长。',
    pinyin: 'lián biān lěi dú',
    word: '连编累牍',
    abbreviation: 'lbld',
  },
  {
    derivation:
      '宋·陆游《文章》诗文章本天成，妙手偶得之。粹然无疵瑕，岂复须人为。”',
    example: '若不是～，便确是经过锤炼的语言的精华。★茅盾《白杨礼赞》',
    explanation:
      '技术高超的人，偶然间即可得到。也用来形容文学素养很深的人，出于灵感，即可偶然间得到妙语佳作。',
    pinyin: 'miào shǒu ǒu dé',
    word: '妙手偶得',
    abbreviation: 'msod',
  },
  {
    derivation:
      '清·袁枚《随园诗话》卷十一公所到处，便能变醨养瘠，元气昭回古今人若合一辙。”',
    example: '无',
    explanation: '使薄酒变醇，瘠土变得肥沃。比喻改变贫穷落后面貌。',
    pinyin: 'biàn lí yǎng jí',
    word: '变醨养瘠',
    abbreviation: 'blyj',
  },
  {
    derivation: '唐·韩愈《进学解》贪多务得，细大不捐。”',
    example:
      '戴升还问人家要门包，也有两吊的，也有一吊的，真正是～，积少成多，合算起来也着实不少。★清·李宝嘉《官场现形记》第四回',
    explanation: '细微，小；捐舍弃。小的大的都不抛弃。形容包罗一切，没有选择。',
    pinyin: 'xì dà bù juān',
    word: '细大不捐',
    abbreviation: 'xdbj',
  },
  {
    derivation:
      '明·朱之瑜《答小宅生顺书十九首》圣贤自有中正之道，不亢不卑，不骄不诌，何得如此也！”',
    example:
      '他这远愁近虑，～，他们奶奶就不是和咱们好，听他这一番话，也必要自愧的变好了。★清·曹雪芹《红楼梦》第五十六回',
    explanation:
      '亢高傲；卑低、自卑。指对人有恰当的分寸，既不低声下气，也不傲慢自大。',
    pinyin: 'bù kàng bù bēi',
    word: '不亢不卑',
    abbreviation: 'bkbb',
  },
  {
    derivation: '《左传·襄公二十五年》弈者举棋不定，不胜其藕。”',
    example:
      '对于逃匿”震南村中，拒不从命的小小的胡杏，他们却是～。★欧阳山《苦斗》七十八',
    explanation: '拿着棋子，不知下哪一着才好。比喻犹豫不决，拿不定主意。',
    pinyin: 'jǔ qí bù dìng',
    word: '举棋不定',
    abbreviation: 'jqbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '严急而苛猛的赋税。',
    pinyin: 'jí liǎn bào zhēng',
    word: '急敛暴征',
    abbreviation: 'jlbz',
  },
  {
    derivation: '唐·皇甫松《竹枝词》芙蓉并蒂一心连，花侵隔子眼应穿。”',
    example: '无',
    explanation:
      '蒂花或瓜果跟枝茎相连的部分；芙蓉荷花别名。两朵荷花并生一蒂。比喻夫妻相亲相爱。也比喻两者可以相媲美。',
    pinyin: 'fú róng bìng dì',
    word: '芙蓉并蒂',
    abbreviation: 'frbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '冒充别人姓名。',
    pinyin: 'jiǎ míng tuō xìng',
    word: '假名托姓',
    abbreviation: 'jmtx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻道德文教的感化人。同风行草偃”。',
    pinyin: 'cǎo mí fēng xíng',
    word: '草靡风行',
    abbreviation: 'cmfx',
  },
  {
    derivation: '《旧唐书·张弘靖传》天下无事，汝辈挽得两石弓，不如识一丁字。”',
    example: '而云古无类书，此真～之无知妄作也矣。★清·平步青《霞外捃屑》卷七',
    explanation: '形容一个字也不认识。',
    pinyin: 'yī dīng bù shí',
    word: '一丁不识',
    abbreviation: 'ydbs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '坚守约章或诺言，决不改变。',
    pinyin: 'jiān shǒu bù yú',
    word: '坚守不渝',
    abbreviation: 'jsby',
  },
  {
    derivation:
      '汉·李陵《与苏武》携手上河梁，游子暮何之？徘徊蹊路侧，悢悢不得辞。……行人难久留，各言长相思。”',
    example:
      '匆匆言别，未及接杯酒不实之欢，并不得展～，深以为愧！★清·归庄《与朱宗远书》',
    explanation: '河梁桥，指送别之地。指送别时依依不舍的情谊。',
    pinyin: 'hé liáng zhì yí',
    word: '河梁之谊',
    abbreviation: 'hlzy',
  },
  {
    derivation:
      '《左传·昭公七年》郑人相惊以伯有，曰‘伯有至矣。’则皆走，不知所往。”',
    example: '无',
    explanation:
      '伯有春秋时郑国大夫良霄的字，相传他死后鬼魂作祟。形容无缘无故自相惊扰。',
    pinyin: 'xiāng jīng bó yǒu',
    word: '相惊伯有',
    abbreviation: 'xjby',
  },
  {
    derivation: '《诗·大雅·大明》明明在下，赫赫在上。”',
    example: '无',
    explanation: '形容光亮夺目，声势显赫。',
    pinyin: 'míng míng hè hè',
    word: '明明赫赫',
    abbreviation: 'mmhh',
  },
  {
    derivation:
      '《天雨花》第二七回人间信佛者多，谤佛者少，惟左丞相不信虚无，专辟佛教，说我等寂灭门中，分毫不值。”',
    example: '无',
    explanation: '形容没有任何价值。同分文不直”。',
    pinyin: 'fēn háo bù zhí',
    word: '分毫不值',
    abbreviation: 'fhbz',
  },
  {
    derivation: '《孟子·尽心上》墨子兼爱，摩顶放踵，利天下为之。”',
    example:
      '故～以拯生民之陆沉，前者踣，后者继，百挫而无反顾，终以集事。（章炳麟《变法箴言》）',
    explanation: '从头顶到脚跟都擦伤了。形容不辞劳苦，不顾身体。',
    pinyin: 'mó dǐng fàng zhǒng',
    word: '摩顶放踵',
    abbreviation: 'mdfz',
  },
  {
    derivation:
      '蔡东藩《两晋演义》第三十六回中书令温峤，前遭敦忌，由敦表请为左司马，峤竟诣敦所，佯为勤敬，尝进密谋，从敦所欲，厚结钱凤，誉不绝口。”',
    example: '无',
    explanation: '不住地称赞。',
    pinyin: 'yù bù jué kǒu',
    word: '誉不绝口',
    abbreviation: 'ybjk',
  },
  {
    derivation: '《汉书·宣帝纪》其赦天下，与士大夫厉精更始。”',
    example: '无',
    explanation: '振作精神，从事革新。',
    pinyin: 'lì jīng gēng shǐ',
    word: '励精更始',
    abbreviation: 'ljgs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '暇空闲。没有空好好吃饭。形容整日忙碌，连吃饭也没空。',
    pinyin: 'shí bù xiá bǎo',
    word: '食不暇饱',
    abbreviation: 'sbxb',
  },
  {
    derivation:
      '元·李行道《灰阑记》第二折你若经官发落，这绷扒吊拷要桩桩儿捱过。”元·王仲文《救孝子》第三折并无聪明正直的心腹，尽都是那绷扒吊拷的招状。”',
    example:
      '他把～般般用，情节根由细细穷，那其间枯皮朽骨难禁痛，少不得从实攀供。★元·纪君祥《赵氏孤儿》第二折',
    explanation:
      '古代的一种刑罚。强行脱去衣服，捆绑并吊起来拷打。绷捆绑。扒脱掉。',
    pinyin: 'bēng bā diào kǎo',
    word: '绷扒吊拷',
    abbreviation: 'bbdk',
  },
  {
    derivation:
      '《三国志·蜀书·先主传》圣姿硕茂，神武在躬，仁覆积德，爱人好士，是以四方归心焉。”',
    example: '无',
    explanation: '爱护、重视人才。',
    pinyin: 'ài rén hào shì',
    word: '爱人好士',
    abbreviation: 'arhs',
  },
  {
    derivation:
      '《孟子·尽心下》斯可谓之乡愿矣” 宋·朱熹集注过门不入而不恨之，以其不见亲就为幸，深恶而痛绝之也。”',
    example: '不象他对于墨家那样的真心的～。★闻一多《杂文·善于儒、道、土匪》',
    explanation: '恶厌恶；痛痛恨；绝极。指对某人或某事物极端厌恶痛恨。',
    pinyin: 'shēn wù tòng jué',
    word: '深恶痛绝',
    abbreviation: 'swtj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指生徒众多的师门。',
    pinyin: 'táo lǐ mén qiáng',
    word: '桃李门墙',
    abbreviation: 'tlmq',
  },
  {
    derivation: '《史记·韩长儒列传》狱吏田甲辱安国。安国曰‘死灰独不复燃乎？’”',
    example: '儒家的理论，非等到董仲舒不能～的。★闻一多《什么是儒家》',
    explanation:
      '冷灰重新烧了起来。原比喻失势的人重新得势。现常比喻已经消失了的恶势力又重新活动起来。',
    pinyin: 'sǐ huī fù rán',
    word: '死灰复燃',
    abbreviation: 'shfr',
  },
  {
    derivation:
      '东汉·班固《汉书·中山靖王刘胜传》臣身远与寡，莫为之先，众口铄金，积毁销骨，丛轻折轴。”',
    example: '无',
    explanation: '指即使轻而小的物件，装载多了也可以使车轴折断。',
    pinyin: 'cóng qīng zhé zhóu',
    word: '丛轻折轴',
    abbreviation: 'cqzz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻势力愈来愈小。',
    pinyin: 'shǔ rù niú jiǎo',
    word: '鼠入牛角',
    abbreviation: 'srnj',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第十三回因置大缸一口，内中贮水，日日伏其中，习其水性，久而久之，竟能在水一日之久。”',
    example:
      '～，凡在上海来来往往的人开口便讲应酬，闭口也讲应酬。★清·吴趼人《二十年目睹之怪现状》第一回',
    explanation: '经过了相当长的时间。',
    pinyin: 'jiǔ ér jiǔ zhī',
    word: '久而久之',
    abbreviation: 'jejz',
  },
  {
    derivation: '清·吴伟业《雁门尚书行》蚁聚蜂屯已入城，持矛瞋目呼狂贼。”',
    example:
      '夫自东汉以迄于明，其间学士词人，～，不可计数。★清·戴均衡《重刻〈方望溪先生全集〉序》',
    explanation: '屯聚集。像蚂蚁、螽斯一般集聚。比喻集结者之众多。',
    pinyin: 'yǐ jù fēng tún',
    word: '蚁聚蜂屯',
    abbreviation: 'yjft',
  },
  {
    derivation: '《晋书·苻坚载记上》坚亲临太学，考学生经义优劣，品而第之。”',
    example: '无',
    explanation: '品品评，区分；第等第，等级。品评优劣而后确定他的等级。',
    pinyin: 'pǐn ér dì zhī',
    word: '品而第之',
    abbreviation: 'pedz',
  },
  {
    derivation: '《汉书·司马迁传》仆少负不羁之才，长无乡曲之誉。”',
    example: '余与稽康、吕安居止接近，其人并有～。★晋·向秀《思旧赋序》',
    explanation: '羁马笼头，比喻约束。非凡的、不可拘束的才能。',
    pinyin: 'bù jī zhī cái',
    word: '不羁之才',
    abbreviation: 'bjzc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容车马繁多，非常热闹。',
    pinyin: 'mǎ yān chē tián',
    word: '马咽车阗',
    abbreviation: 'myct',
  },
  {
    derivation: '《中国的西北角·成兰纪行一》人事的变化，往往非使料所及。”。',
    example: '无',
    explanation: '料料想，估计；及到。当初已经料想到的。',
    pinyin: 'shǐ liào suǒ jí',
    word: '使料所及',
    abbreviation: 'slsj',
  },
  {
    derivation:
      '《汉书·高帝纪下》又与功臣剖符作誓，丹书铁契，金匮石室，藏之宗庙。”',
    example: '无',
    explanation:
      '丹书用朱砂写字；铁契用铁制的凭证。古代帝王赐给功臣世代享受优遇或免罪的凭证。文凭用丹书写铁板上，故名。',
    pinyin: 'dān shū tiě qì',
    word: '丹书铁契',
    abbreviation: 'dstq',
  },
  {
    derivation:
      '况周颐《蕙风词话》卷二香岩、倦圃，领袖一时。唯时戴笠故交，担簦才子，并与宴游之席，各传酬和之篇。”',
    example: '无',
    explanation: '指贫贱之交。',
    pinyin: 'dài lì gù jiāo',
    word: '戴笠故交',
    abbreviation: 'dlgj',
  },
  {
    derivation: '元·杨暹《刘行首》第四折可笑愚痴，不辨个高低，畅叫扬疾。”',
    example: '我可也不和你～，谁共你磕牙抖嘴。★元·关汉卿《陈母教子》第三折',
    explanation:
      '指大吵大闹。暢叫”即唱叫”，吵闹之意。扬疾”犹嚷唧，亦吵闹之意。',
    pinyin: 'chàng jiào yáng jí',
    word: '畅叫扬疾',
    abbreviation: 'cjyj',
  },
  {
    derivation: '汉·张衡《同声赋》素女为我师，仪态盈万方。”',
    example: '无',
    explanation: '仪态姿态，容貌；万方多方面。形容容貌、姿态各方面都很美。',
    pinyin: 'yí tài wàn fāng',
    word: '仪态万方',
    abbreviation: 'ytwf',
  },
  {
    derivation:
      '吴晗《朱元璋传》第七章朱元璋和这个集团的首脑人物，尽管在过去同生死，共患难，但并不是铁板一块。”',
    example: '无',
    explanation: '比喻结合紧密，不可分裂的整体。',
    pinyin: 'tiě bǎn yī kuài',
    word: '铁板一块',
    abbreviation: 'tbyk',
  },
  {
    derivation:
      '姚雪垠《李自成 》第一卷第十五章当自成在路上才得到报告时，他不禁火冒三尺，恨恨地骂了一声‘该死！’”',
    example:
      '却说孙定邦在大雨里寻找史更新，找了多半宿也没见个影子，急得他真是～，手脚无措。★刘流《烈火金钢》第七回',
    explanation: '形容愤怒到极点。同火冒三丈”。',
    pinyin: 'huǒ mào sān chǐ',
    word: '火冒三尺',
    abbreviation: 'hmsc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指遗留的风气、习俗。',
    pinyin: 'liú fēng yú sú',
    word: '流风余俗',
    abbreviation: 'lfys',
  },
  {
    derivation: '汉·崔瑗《座佑铭》无道人之短，无说己之长。”',
    example: '休那里～语话频。★元·无名氏《冯玉兰》第一折',
    explanation: '议论别人的好坏是非。',
    pinyin: 'shuō duǎn lùn cháng',
    word: '说短论长',
    abbreviation: 'sdlc',
  },
  {
    derivation:
      '明·冯梦龙《警世通言》第二十一卷夜宿又嫌寒道热，央公子减被添衾，软香温玉，岂无动情之处？”',
    example: '无',
    explanation: '形容年轻女子身体洁白柔软，散发着温馨的青春气息。',
    pinyin: 'ruǎn xiāng wēn yù',
    word: '软香温玉',
    abbreviation: 'rxwy',
  },
  {
    derivation: '《荀子·子道》夙兴夜寐，耕耘树艺，手足胼胝，以养其身。”',
    example: '无',
    explanation:
      '耘锄草，树栽植；艺播种。耕田、锄草、植树、播种。泛指各种农业生产劳动。',
    pinyin: 'gēng yún shù yì',
    word: '耕耘树艺',
    abbreviation: 'gysy',
  },
  {
    derivation:
      '南朝·梁·刘勰《文心雕龙·程器》孔光负衡据鼎，而仄媚董贤；况班马之贱职，潘岳之下位哉！”周振甫注负衡据鼎，指处丞相位♀，秤，表持平；鼎，三足，喻三公。”',
    example: '无',
    explanation: '指身居高位，肩负重任。',
    pinyin: 'fù héng jù dǐng',
    word: '负衡据鼎',
    abbreviation: 'fhjd',
  },
  {
    derivation:
      '郭沫若《洪波曲》第五章一武汉三镇，自北伐以来，在刀光血影之下已经窒息了整整十年。”',
    example: '在～面前，他昂然直视。★胡旷《短促而光辉的生命》',
    explanation: '形容血腥的杀戮。',
    pinyin: 'dāo guāng xuè yǐng',
    word: '刀光血影',
    abbreviation: 'dgxy',
  },
  {
    derivation:
      '明·李开先《宝剑记》第二十四出先从片进，累建大功，童贯占为己有欺瞒皇上。”',
    example:
      '话说袁伯珍见王德黼的矿山苗旺，有利可图，便想夺他的利权，～。★清·无名氏《官场维新记》第六回',
    explanation: '将别人的东西拿来作为自己的。',
    pinyin: 'jù wéi jǐ yǒu',
    word: '据为己有',
    abbreviation: 'jwjy',
  },
  {
    derivation: '《孟子·离娄下》博学而详说之，将以反说约也。”',
    example: '这首诗体现了老诗人～的创作轨迹。',
    explanation: '指做学问人广博出发，继而务精深，最终达到简约。',
    pinyin: 'yóu bó fǎn yuē',
    word: '由博返约',
    abbreviation: 'ybfy',
  },
  {
    derivation: '《左传·定公四年》吴为封豕长蛇，以荐食上国。”',
    example:
      '而今而后，所当有利兵坚盾，环卫其身，毋俾～，荐食上国。★鲁迅《集外集拾遗·破恶声论》',
    explanation:
      '封大；封豕大猪；长蛇大蛇。贪婪如大猪，残暴如大蛇。比喻贪暴者、侵略者。',
    pinyin: 'fēng shǐ cháng shé',
    word: '封豕长蛇',
    abbreviation: 'fscs',
  },
  {
    derivation:
      '《宣和书谱·行书六》正夫以精忠相与图回至治，其所以持盈守成，而熙丰之盛德美意，灿然一新，正夫其有力焉。”',
    example: '无',
    explanation: '灿然耀眼的光彩。耀眼的光彩，给人一种全新的感觉。',
    pinyin: 'càn rán yī xīn',
    word: '灿然一新',
    abbreviation: 'cryx',
  },
  {
    derivation:
      '唐·李商隐《李长吉小传》恒从小奚奴，骑巨驴，背一古破锦囊，遇有所得，即书投囊中。”',
    example:
      '余戏题其签曰～。”不知夭寿这机此已伏矣。★清·沈复《浮生六记·闺房记乐》',
    explanation: '锦囊用锦做成的袋子，古人多用以藏诗稿。指优美的诗句。',
    pinyin: 'jǐn náng jiā jù',
    word: '锦囊佳句',
    abbreviation: 'jnjj',
  },
  {
    derivation:
      '《儿女英雄传》第五回那女子不听犹可，听了之话，只见她柳眉倒竖，杏眼圆睁；腮边烘两朵红云，面上现一团煞气。”',
    example:
      '两人抬头一看，却就是那非常标致的女洋人夏娃丽姑娘，～，凤眼圆睁。两人这一惊非同小可。★《孽海花》第十回',
    explanation: '形容女子发怒时耸眉之状。',
    pinyin: 'liǔ méi dào shù',
    word: '柳眉倒竖',
    abbreviation: 'lmds',
  },
  {
    derivation: '战国·楚·屈原《渔父》颜色憔悴，面容枯槁。”',
    example: '无',
    explanation: '枯槁枯萎，枯干。身体瘦弱，精神萎靡，面色枯黄。',
    pinyin: 'xíng róng kū gǎo',
    word: '形容枯槁',
    abbreviation: 'xrkg',
  },
  {
    derivation:
      '北周·庚信《周大将军琅邪定公司马裔墓志铭》都督始州诸军事，蛮夷恃险，狼顾鸱张，高山寻云，深谷无景，九地纵横，三门起伏，危峰马束，水险桥飞。遂得谷静山空，冰消雾散。”',
    example: '无',
    explanation: '比喻事物消失瓦解。',
    pinyin: 'bīng xiāo wù sàn',
    word: '冰消雾散',
    abbreviation: 'bxws',
  },
  {
    derivation:
      '明·张居正《番夷求贡疏》因而连合西僧，向风慕义，交臂请贡，献琛来王。”',
    example:
      '参加的有社友，也有～来的非社友，共有一百有九人之多。★郑逸梅《南社丛谈·南社后期活动》',
    explanation: '指向往其教化，仰慕其礼义。或指向往其风度，仰慕其义行。',
    pinyin: 'xiàng fēng mù yì',
    word: '向风慕义',
    abbreviation: 'xfmy',
  },
  {
    derivation:
      '西汉·司马迁《史记·乐书二》闻徽音，使人乐善而好施；闻羽音，使人整齐而好礼。”',
    example:
      '夫妻两口，为了疏财仗义，～。★明·凌濛初《初刻拍案惊奇·张员外又抚螟蛉子》',
    explanation:
      '好喜欢；善亲善，善事；乐乐意；施施舍。指喜欢做善事，乐意施舍。',
    pinyin: 'hào shàn lè shī',
    word: '好善乐施',
    abbreviation: 'hsls',
  },
  {
    derivation:
      '前蜀·杜光庭《封李真人告词》振衣世表，抗迹云间，悁驹窗电逝之劳，得鳌岭云行之趣。”',
    example: '无',
    explanation: '比喻光阴消逝得很快。',
    pinyin: 'jū chuāng diàn shì',
    word: '驹窗电逝',
    abbreviation: 'jcds',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指顺适性情。',
    pinyin: 'shì xìng rèn qíng',
    word: '适性任情',
    abbreviation: 'sxrq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻丑恶之徒。',
    pinyin: 'xiāo shé guǐ guài',
    word: '枭蛇鬼怪',
    abbreviation: 'xsgg',
  },
  {
    derivation:
      '《三国志·蜀志·诸葛亮传·评》诸葛亮之为相国也，抚百姓，示仪轨，约官职，从权制，开诚心，布公道。”',
    example:
      '上头的公事是叫地方官时时接见商人，与商人～，联络一气。★清·李宝嘉《官场现形记》第五十四回',
    explanation: '开诚敞开胸怀，显示诚意。指以诚心待人，坦白无私。',
    pinyin: 'kāi chéng bù gōng',
    word: '开诚布公',
    abbreviation: 'kcbg',
  },
  {
    derivation:
      '《南史·王弘传论》晋自中原沸腾，介居江左，以一隅之地，抗衡上国。”',
    example: '无',
    explanation: '隅角落。形容地域狭小。',
    pinyin: 'yī yú zhī dì',
    word: '一隅之地',
    abbreviation: 'yyzd',
  },
  {
    derivation:
      "茅盾《雨天杂写》则此一特点不能不有一佳名，故拟题曰'鸡零狗碎'云尔。”",
    example:
      '那～的事，恕不细说，但值得大书特书的奇迹，放过未免可惜。★高晓声《李顺大造屋》',
    explanation: '形容事物零碎细小，不成系统。',
    pinyin: 'jī líng gǒu suì',
    word: '鸡零狗碎',
    abbreviation: 'jlgs',
  },
  {
    derivation:
      '语出波栗湿缚尊者（胁尊者）勤修苦行，终不以胁至席的故事。见唐玄奘《大唐西域记·健驮逻国》。',
    example: '无',
    explanation: '形容佛教徒勤苦修行。',
    pinyin: 'xié bù zhān xí',
    word: '胁不沾席',
    abbreviation: 'xbzx',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '日月前行。指时光流逝。',
    pinyin: 'rì yuè yú mài',
    word: '日月逾迈',
    abbreviation: 'ryym',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指有名望的显要人物。同名公巨人”。',
    pinyin: 'míng gōng jù rén',
    word: '名公钜人',
    abbreviation: 'mgjr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言摇唇鼓舌。形容耍弄嘴皮进行挑拨煽动。',
    pinyin: 'yáo chún gǔ huì',
    word: '摇唇鼓喙',
    abbreviation: 'ycgh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻不随便结交朋友。也比喻清闲无事。同清风明月”。',
    pinyin: 'qīng fēng lǎng yuè',
    word: '清风朗月',
    abbreviation: 'qfly',
  },
  {
    derivation:
      '明·朱国桢《涌幢小品·实录》陈文端请修正史，分各志二十八，务于详备，一志多至四五十万余言。未几，文端薨，各志草草了事。”',
    example:
      '虽说僧经道忏，吊祭供饭，络绎不绝，终是钱银吝啬，谁肯踊跃，不过～。★清·曹雪芹《红楼梦》第一百一十回',
    explanation: '草草形容草率、马虎；了办完，结束。草率地把事情结束了。',
    pinyin: 'cǎo cǎo liǎo shì',
    word: '草草了事',
    abbreviation: 'ccls',
  },
  {
    derivation:
      '草明《乘风破浪》九她好像完全看不见他的显著的成绩，而成天提醒他不要骄傲，不要独断专行。”',
    example: '他平时不讲民主，做事情常常是～。',
    explanation: '行事专断，不考虑别人的意见。形容作风不民主。',
    pinyin: 'dú duàn zhuān xíng',
    word: '独断专行',
    abbreviation: 'ddzx',
  },
  {
    derivation: '《旧唐书·罗威传》每花朝月夕，与宾佐赋咏，甚有情致。”',
    example: '到了～，依旧相约玩耍。（清·曹雪芹《红楼梦》第一○二回）',
    explanation:
      '有鲜花的早晨，有明月的夜晚。指美好的时光和景物。旧时也特指农历二月十五和八月十五。',
    pinyin: 'huā zhāo yuè xī',
    word: '花朝月夕',
    abbreviation: 'hzyx',
  },
  {
    derivation:
      '《庄子·逍遥游》载鲲化为鹏徙于南溟之事，又《齐物论》载庄周梦为胡蝶之事。',
    example:
      '昨夜又迟黄石，今朝重叩鸿濛。碧桃花下醉相逢。说尽～。★宋·刘辰翁《忆秦娥·忆仙》词',
    explanation: '指变幻夸诞之谈。',
    pinyin: 'péng yóu dié mèng',
    word: '鹏游蝶梦',
    abbreviation: 'pydm',
  },
  {
    derivation:
      '《孟子·离娄上》为渊驱鱼者，獭也。为丛驱爵者，鹯也；为汤武驱民者，桀与纣也。”',
    example: '无',
    explanation:
      '把鱼赶进深潭，把雀赶到丛林。原比喻统治者施行暴政，百姓逃往别国。现也比喻把可以团结的人赶到敌方去。',
    pinyin: 'yuān yú cóng què',
    word: '渊鱼丛雀',
    abbreviation: 'yycq',
  },
  {
    derivation: '明·吾邱瑞《运甓记·剪发延宾》盼前程音信杳无。”',
    example: '无',
    explanation: '没有一点消息。',
    pinyin: 'yīn xìn yǎo wú',
    word: '音信杳无',
    abbreviation: 'yxyw',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '心思灵巧，能说会道。',
    pinyin: 'xīn qiǎo zuǐ guāi',
    word: '心巧嘴乖',
    abbreviation: 'xqzg',
  },
  {
    derivation:
      '《晋书·桓温传》殷浩至洛阳修复园陵，经涉数年，屡战屡败，器械都尽。”',
    example: '无',
    explanation: '屡多次。多次打仗多次失败。',
    pinyin: 'lǚ zhàn lǜ bài',
    word: '屡战屡败',
    abbreviation: 'lzlb',
  },
  {
    derivation: '《左传·宣公十四年》楚子闻之，投袂而起。”',
    example: '犹谓人心思顺，必有～者。★章炳麟《代拟大元帅就职宣言》',
    explanation: '投袂挥动袖子。形容精神振作，立即行动起来的神态。',
    pinyin: 'tóu mèi ér qǐ',
    word: '投袂而起',
    abbreviation: 'tmeq',
  },
  {
    derivation:
      '唐·裴休《唐故左街僧录内供奉三教谈论引驾大德安国寺上座赐紫方袍大达法师元秘塔碑铭》峥嵘栋梁，一旦而摧。水月镜像，无心去来。”',
    example: '我喜欢那种锤炼，那种色彩的配合，那种～。★何其芳《梦中道路》',
    explanation:
      '镜里的花，水里的月。原指诗中灵活而不可捉摸的意境，后比喻虚幻的景象。',
    pinyin: 'jìng huā shuǐ yuè',
    word: '镜花水月',
    abbreviation: 'jhsy',
  },
  {
    derivation:
      '南朝宋·刘义庆《世说新语·惑溺》亲卿爱卿，是以卿卿，我不卿卿，谁当卿卿？”',
    example: '无',
    explanation: '形容夫妻或相爱的男女十分亲昵。',
    pinyin: 'qīng qīng wǒ wǒ',
    word: '卿卿我我',
    abbreviation: 'qqww',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '①形容书法的笔势神奇飘逸。②比喻夫妻或情侣离散，天各一方。亦泛指身世沦落，漂泊不定。亦作凤泊鸾飘”、飘鸾泊凤”。',
    pinyin: 'luán piāo fèng bó',
    word: '鸾漂凤泊',
    abbreviation: 'lpfb',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指飞行的雁阵。大雁飞行时或为人”字形，或为一”字形，故称。',
    pinyin: 'xié xíng héng zhèn',
    word: '斜行横阵',
    abbreviation: 'xxhz',
  },
  {
    derivation: '清·李渔《玉搔头》三十六行，行行相妒。”',
    example: '～者，种种职业也。★徐珂《清稗类钞·农商类》',
    explanation: '旧时对各行各业的通称。',
    pinyin: 'sān shí liù háng',
    word: '三十六行',
    abbreviation: 'sslh',
  },
  {
    derivation: '《元史·乌古孙泽传》是吾民复生之父母也。”',
    example: '无',
    explanation: '指对自己有重大恩情的人，多指救命的恩人。',
    pinyin: 'zài shēng fù mǔ',
    word: '再生父母',
    abbreviation: 'zsfm',
  },
  {
    derivation: '《孔子家语·六本》良药苦于口而利于病，忠言逆于耳而利于行。”',
    example: '无',
    explanation:
      '好药往往味苦难吃。比喻衷心的劝告，尖锐的批评，听起来觉得不舒服，但对改正缺点错误很有好处。',
    pinyin: 'kǔ kǒu liáng yào',
    word: '苦口良药',
    abbreviation: 'kkly',
  },
  {
    derivation:
      '明·张煌言《祭建国公郑羽长鸿逵文》悬拟壮猷，东山复起。夫何讣闻，遽骑箕尾？”',
    example: '无',
    explanation: '指再度出任要职。也比喻失势之后又重新得势。同东山再起”。',
    pinyin: 'dōng shān fù qǐ',
    word: '东山复起',
    abbreviation: 'dsfq',
  },
  {
    derivation:
      '宋·释普济《五灯会元》卷十八有人赞叹此事，如虎带角；有人轻毁此事，一文不值，一等是恁么事，因什么毁赞不是。”',
    example: '无',
    explanation: '直同值”。一分钱一文钱也不值。形容没有任何价值。',
    pinyin: 'fēn wén bù zhí',
    word: '分文不直',
    abbreviation: 'fwbz',
  },
  {
    derivation: '《晋书·景帝纪》乃与骁骑十余摧锋陷阵，所向披靡，遂引去。”',
    example: '无',
    explanation: '摧击溃；锋锋芒，引伸为精锐；陷攻入。攻入并摧毁敌军的阵地。',
    pinyin: 'cuī fēng xiàn zhèn',
    word: '摧锋陷阵',
    abbreviation: 'cfxz',
  },
  {
    derivation: '《周易·系辞上》知周乎万物而道济天下。”',
    example: '无',
    explanation: '天下万物无所不知。形容知识渊博。',
    pinyin: 'zhì zhōu wàn wù',
    word: '智周万物',
    abbreviation: 'zzww',
  },
  {
    derivation:
      '鲁迅《坟·文化偏至论》如其《民敌》一书，谓有人宝守真理，不阿世媚俗，而不见容于人群。”',
    example: '无',
    explanation: '指曲意迎合当时社会的陈规陋俗。',
    pinyin: 'ē shì mèi sú',
    word: '阿世媚俗',
    abbreviation: 'esms',
  },
  {
    derivation: '茅盾《路》十二现在，他们认为胜利不能一蹴而得，必须用持久战。”',
    example: '无',
    explanation: '比喻事情轻而易举，一下子就成功。同一蹴而就”。',
    pinyin: 'yī cù ér dé',
    word: '一蹴而得',
    abbreviation: 'yced',
  },
  {
    derivation:
      '《韩非子·奸劫弑臣》我不以清廉方正奉法，乃以贪污之心枉法以取私利，是犹上高陵之颠，堕峻溪之下以求生，凶不几矣。”',
    example:
      '亲自问杀人贼，全不论～，倒不如懵懵遇痴。★元·孙仲章《勘头巾》第三折',
    explanation: '清白廉洁，为人正直不阿。',
    pinyin: 'qīng lián zhèng zhí',
    word: '清廉正直',
    abbreviation: 'qlzz',
  },
  {
    derivation:
      '《仪礼·聘礼》辞多则史，少则不达，辞苟足以达义之至也。”宋·惠洪《高安城隍庙记》盖五百年而书功烈者，辞不达意，余尝叹息之。”',
    example: '大概学作文时，总患～。★鲁迅《两地书》一一',
    explanation: '辞言辞；意意思。指词句不能确切地表达出意思和感情。',
    pinyin: 'cí bù dá yì',
    word: '辞不达意',
    abbreviation: 'cbdy',
  },
  {
    derivation:
      '《尚书·泰誓下》独夫受，洪惟作威，乃汝世仇。”《孟子·告子下》今之所谓良臣，古之所谓民贼也。”',
    example:
      '这种险惨刻毒的～思想，与孔孟正统派的仁义学说恰恰处于对立的地位。★范文澜《中国通史简编》第二编第一章第一节',
    explanation:
      '民贼残害人民的坏家伙；独夫暴虐无道、众叛亲离的统治者。指残害人民众叛亲离的反动统治者。',
    pinyin: 'mín zéi dú fū',
    word: '民贼独夫',
    abbreviation: 'mzdf',
  },
  {
    derivation: '《庄子·田子方》御寇伏地，汗流至踵。”',
    example: '无',
    explanation: '汗出得多，流到脚跟。常形容极端恐惧或惭愧。',
    pinyin: 'hàn liú zhì zhǒng',
    word: '汗流至踵',
    abbreviation: 'hlzz',
  },
  {
    derivation: '《晋书·石季龙传上》季龙入辽宫，论功封赏各有差。”',
    example: '无',
    explanation: '论按照。按功劳的大小给于奖赏。',
    pinyin: 'lùn gōng fēng shǎng',
    word: '论功封赏',
    abbreviation: 'lgfs',
  },
  {
    derivation: '明·罗贯中《三国演义》第八回止因未与将军一诀，故且忍辱偷生。”',
    example: '无',
    explanation: '偷苟且。忍受屈辱，苟且活命。',
    pinyin: 'rěn rǔ tōu shēng',
    word: '忍辱偷生',
    abbreviation: 'rrts',
  },
  {
    derivation: '《后汉书·窦武传》今不想前事之失，复循覆车之轨。”',
    example: '要从失败中吸取教训，以免～。',
    explanation:
      '蹈踏；覆翻；辙车轮辗过的痕迹。重新走上翻过车的老路。比喻不吸取教训，再走失败的老路。',
    pinyin: 'chóng dǎo fù zhé',
    word: '重蹈覆辙',
    abbreviation: 'cdfz',
  },
  {
    derivation:
      '宋·程颐《与吕大临论中书》窃恐辞命不明，言不逮意，致高明或未深喻，辄露所见，求益左右。”',
    example: '无',
    explanation: '说的话不能准确地表达思想内容。同言不达意”。',
    pinyin: 'yán bù dǎi yì',
    word: '言不逮意',
    abbreviation: 'ybdy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹南航北骑。形容乘舟骑马，南北奔走。',
    pinyin: 'nán yǐ běi jià',
    word: '南舣北驾',
    abbreviation: 'nybj',
  },
  {
    derivation: '唐·韩愈《南阳樊绍述墓志铭》文从字顺各识职，有欲求之此其躅。”',
    example:
      '这贾家呢，第二个儿子今年廿四岁，在家读书，人也长得清清秀秀的，笔下也还～。★清·刘鹗《老残游记》第十五回',
    explanation: '从服从，顺从；顺通顺。指文章通顺。',
    pinyin: 'wén cóng zì shùn',
    word: '文从字顺',
    abbreviation: 'wczs',
  },
  {
    derivation:
      '《资治通鉴·晋孝武帝太元九年》主上与将军风殊类别，一见倾心，亲如宗戚。”',
    example:
      '袁小姐对于我们的太太是～，说我们的太太浑身都是曲线，是他眼中的第一美人。（冰心《我们太太的客厅》）',
    explanation: '倾心爱慕。初次见面就十分爱幕。',
    pinyin: 'yī jiàn qīng xīn',
    word: '一见倾心',
    abbreviation: 'yjqx',
  },
  {
    derivation: '朱德《十月战景》诗战事从来似弈棋，举棋若定自无悲。”',
    example: '无',
    explanation: '下棋子好像有预断。比喻行事沉着果断。',
    pinyin: 'jǔ qí ruò dìng',
    word: '举棋若定',
    abbreviation: 'jqrd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '文章的宗伯，学问的渊府。比喻学问渊博的人。',
    pinyin: 'wén zōng xué fǔ',
    word: '文宗学府',
    abbreviation: 'wzxf',
  },
  {
    derivation:
      '明·天然痴叟《石点头·卢梦仙江上寻妻》况且如此荒年，那家不卖男鬻女来度命。”',
    example: '无',
    explanation: '指因生活所迫而出卖自己的儿女。',
    pinyin: 'mài nán yù nǚ',
    word: '卖男鬻女',
    abbreviation: 'mnyn',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '垣墙高大，而基址峻峭。比喻根基不固。',
    pinyin: 'fēng qiáng qiāo xià',
    word: '丰墙硗下',
    abbreviation: 'fqqx',
  },
  {
    derivation:
      '晋·何法盛《晋中兴书》第七卷在荆州与都下书云‘小儿辈贱厌家鸡，爱野雉，皆进逸少书，须吾还，当比之。’”',
    example: '无',
    explanation:
      '雉野鸡。原意是晋庚翼把自己的书法喻为家鸡，把王羲之的书法喻为野鸡，以示贱近与贵远。亦比喻风格迥异的书法绘画等。',
    pinyin: 'jiā jī yě zhì',
    word: '家鸡野雉',
    abbreviation: 'jjyz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指鼠咬虫蛀。',
    pinyin: 'shǔ niè dù shí',
    word: '鼠齧蠹蚀',
    abbreviation: 'snds',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '如应声和答、形影相随。比喻两者紧密相连。',
    pinyin: 'xiǎng dá yǐng suí',
    word: '响答影随',
    abbreviation: 'xdys',
  },
  {
    derivation: '《晋书·杜预传》今兵威已振，譬如破竹，数节之后，皆迎刃而解。”',
    example:
      '我军以～进逼武昌，今闻已进展到离武昌城仅中国里百五十里之地。★郭沫若《革命春秋·北伐途次》',
    explanation: '比喻节节胜利，毫无阻碍。',
    pinyin: 'pò zhú zhī shì',
    word: '破竹之势',
    abbreviation: 'pzzs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指启迪引导凡夫俗子成为圣人。',
    pinyin: 'tī yú rù shèng',
    word: '梯愚入圣',
    abbreviation: 'tyrs',
  },
  {
    derivation:
      '《战国策·楚策四》世有无妄之福，又有无妄之祸。今君处无妄之世，以事无妄之主，安不有无妄之人乎。”《晋书·戴若思传》”自顷国遭无妄之祸，社稷有缀旒之危。',
    example: '君不幸得～，闻之太息。★清·蒲松龄《聊斋志异·神女》',
    explanation: '犹无妄之灾。指平白无故受到的灾祸或损害。',
    pinyin: 'wú wàng zhī huò',
    word: '无妄之祸',
    abbreviation: 'wwzh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '如枭盯视，如狼频顾。形容行动警惕，有所畏忌。',
    pinyin: 'xiāo shì láng gù',
    word: '枭视狼顾',
    abbreviation: 'xslg',
  },
  {
    derivation: '宋·柳永《夏云峰》词向此免名缰利锁，虚费光阴。”',
    example: '再休被～相缠住。★元·范子安《竹叶舟》第一折',
    explanation: '比喻名利束缚人就象缰绳和锁链一样。',
    pinyin: 'lì suǒ míng jiāng',
    word: '利锁名缰',
    abbreviation: 'lsmj',
  },
  {
    derivation: '《韩非子·喻老》智如目也，能见百步之外而不能自见其睫。”',
    example: '远求而近遗，如～。★宋·王安石《再寄蔡天启》诗',
    explanation:
      '自己的眼睛看不到自己的睫毛。比喻没有自知之明。也比喻只见远处，不见近处。',
    pinyin: 'mù bù jiàn jié',
    word: '目不见睫',
    abbreviation: 'mbjj',
  },
  {
    derivation: '《北史·隋炀帝纪》轻徭薄赋，比屋各安其业。”',
    example: '无',
    explanation: '各自安于赖以生活的职业。生业谋生之业。',
    pinyin: 'gè ān shēng yè',
    word: '各安生业',
    abbreviation: 'gasy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '对容颜衣着进行修饰。',
    pinyin: 'shū zhuāng dǎ bàn',
    word: '梳妆打扮',
    abbreviation: 'szdb',
  },
  {
    derivation:
      '明·无名氏《十样锦》第三折我两个跟着你们背后接坐碗儿吃也罢，你怎么这般分星拨两的。”',
    example: '无',
    explanation: '犹言斤斤计较。',
    pinyin: 'fēn xīng bō liǎng',
    word: '分星拨两',
    abbreviation: 'fxbl',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指梧桐虽是柔木而可以断坚硬之角。比喻柔能胜刚。',
    pinyin: 'wú tóng duàn jiǎo',
    word: '梧桐断角',
    abbreviation: 'wtdj',
  },
  {
    derivation: '《荀子·非相》叶公子高，微小短瘠，行若将不胜其衣然。”',
    example: '敷形貌眇小，～，胆力劲果，超出时辈。★《南史·周敷传》',
    explanation:
      '胜能承受，能承担。身体不能承受衣服的重量。形容身体瘦弱。也形容谦退的样子。',
    pinyin: 'rú bù shèng yī',
    word: '如不胜衣',
    abbreviation: 'rbsy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指慎于用兵和用刑。',
    pinyin: 'huì bīng wèi xíng',
    word: '讳兵畏刑',
    abbreviation: 'hbwx',
  },
  {
    derivation:
      '明·张居正《答南学院周乾明》令人不解宽义，一切务为姑息弛纵，贾誉于众，以致士习骄侈，风俗日坏，间有一二力欲挽之，则又崇饰虚谈，自开邪径，所谓以肉驱蝇，负薪救火也。”',
    example: '无',
    explanation: '比喻行为和目的自相矛盾，只能得到相反的结果。',
    pinyin: 'yǐ ròu qū yíng',
    word: '以肉驱蝇',
    abbreviation: 'yrqy',
  },
  {
    derivation:
      '明·兰陵笑笑生《金瓶梅词话》第七回这娘子今年不上二十五六岁，生的长挑身材，一表人物，打扮起来就是个灯人儿。风流俊俏，百伶百俐，当家立纪、针指女工、双陆棋子，不消说。”',
    example: '无',
    explanation: '指管理家务。',
    pinyin: 'dāng jiā lì jì',
    word: '当家立纪',
    abbreviation: 'djlj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容文字言语拙劣。同驴鸣犬吠”。',
    pinyin: 'lǘ míng gǒu fèi',
    word: '驴鸣狗吠',
    abbreviation: 'lmgf',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第二十六回自桃园缔盟，誓以同死；今何中道相违，割恩断义？”',
    example: '无',
    explanation: '舍弃恩德，断绝道义。',
    pinyin: 'gē ēn duàn yì',
    word: '割恩断义',
    abbreviation: 'gedy',
  },
  {
    derivation:
      '《汉书·诸侯王表》武（武帝）有衡山、淮南之谋，作左官之律，设附益之法，诸侯惟得衣食税租，不与政事。”',
    example: '无',
    explanation: '指居官食禄。同衣租食税”。',
    pinyin: 'yī shí shuì zū',
    word: '衣食税租',
    abbreviation: 'yssz',
  },
  {
    derivation:
      '清·西周生《醒世姻缘传》第七十九回若论狄希陈的心里，见了小珍珠这个风流俊俏的模样……却实在安着一点苟且之心。”',
    example: '无',
    explanation:
      '苟且得过且过。指得过且过、只顾眼前思想。亦指想做不正当事情的念头。一般多指男女关系。',
    pinyin: 'gǒu qiě zhī xīn',
    word: '苟且之心',
    abbreviation: 'gqzx',
  },
  {
    derivation:
      '三国·魏·曹植《上责躬应诏诗表》踊跃之怀，瞻望反侧，不胜犬马恋主之情。”南朝·宋·鲍照《从临海王上荆初发新渚》诗狐涂怀窟志，犬马恋主情。”',
    example: '无',
    explanation: '比喻臣下眷怀君上。',
    pinyin: 'quǎn mǎ liàn zhǔ',
    word: '犬马恋主',
    abbreviation: 'qmlz',
  },
  {
    derivation:
      '清·名教中人《好逑传》第九回‘耳闻是虚，眼观为实’，叔叔此时，且不要过于取笑侄女，请再去一访，……那时再来取笑侄女，却也不迟。”',
    example: '无',
    explanation: '亲自听到的还不足为信，只有亲眼看到的才是真实可靠的。',
    pinyin: 'ěr wén shì xū，yǎn guān wéi shí',
    word: '耳闻是虚，眼观为实',
    abbreviation: 'ewsxgws',
  },
  {
    derivation:
      '南朝·梁·刘勰《文心雕龙·情采》诸子之徒，心非郁陶，苟驰夸饰，鬻声钓世，此为文而造情也。”',
    example: '无',
    explanation: '犹言沽名钓誉。',
    pinyin: 'yù shēng diào shì',
    word: '鬻声钓世',
    abbreviation: 'ysds',
  },
  {
    derivation: '《诗经·小雅·正月》谓天盖高，不敢不局；谓地盖厚，不敢不蹐。”',
    example:
      '田庐卖尽而无归，则有～，寻死自尽者矣。★清·康有为《大同书》甲部第三章',
    explanation:
      '局弯腰；蹐前脚接后脚地小步走。形容惶恐不安的样子，也指窘迫无路的样子。',
    pinyin: 'jú tiān jí dì',
    word: '局天蹐地',
    abbreviation: 'jtjd',
  },
  {
    derivation:
      '清·钱彩《说岳全传》第四十三回这场大战，真个是天摇地动，日色无光。”',
    example:
      '刚一迷糊眼儿，半天空里咕隆隆地一声响，从西半天响到东半天，震得～。★梁斌《播火记》二四',
    explanation: '形容威力或声势极大。',
    pinyin: 'tiān yáo dì dòng',
    word: '天摇地动',
    abbreviation: 'tydd',
  },
  {
    derivation: '《礼记·学记》发然后禁，则抜格而不胜。”',
    example:
      '我本不知运动”的人，所以凡所讲演，多与该同盟～。★《鲁迅书信集·致章廷谦》',
    explanation: '格格阻碍，隔阂。形容彼此不协调，不相容。',
    pinyin: 'gé gé bù rù',
    word: '格格不入',
    abbreviation: 'ggbr',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第94回李纨正要劝解，丫头来说，太太来了。袭人等此时无地可容，宝玉等赶忙出来迎接。”',
    example:
      '回到故乡之后，又受着轻蔑、排斥、迫害，几乎～。★鲁迅《朝花夕拾·范爱农》',
    explanation: '指无处藏身，形容慌乱、羞愧至极，处境窘迫。',
    pinyin: 'wú dì kě róng',
    word: '无地可容',
    abbreviation: 'wdkr',
  },
  {
    derivation: '《晋书·周访传赞》曰子曰孙，重规叠矩。”',
    example: '伟哉此论，与季长～。★清·龚自珍《大誓答问第二十》',
    explanation:
      '规与规相重，矩与矩相迭。指前后相合，重叠的规矩与制度。比喻因袭、重复。',
    pinyin: 'chóng guī dié jǔ',
    word: '重规叠矩',
    abbreviation: 'cgdj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容没有边际。',
    pinyin: 'màn tiān guò hǎi',
    word: '漫天过海',
    abbreviation: 'mtgh',
  },
  {
    derivation:
      '清·吴敬梓《儒林外史》第五十四回今日抬头一看，却见他黄着脸、秃着头，就和前日梦里揪他的师姑一模一样，不觉就懊恼起来。”',
    example: '这两件衣服从颜色到款式虽然～，但质量却有很大差别。',
    explanation: '样子完全相同。',
    pinyin: 'yī mó yī yàng',
    word: '一模一样',
    abbreviation: 'ymyy',
  },
  {
    derivation:
      '三国·魏·嵇康《与山巨源绝交书》私意自试，必不能堪其所不乐，自卜已审，若道尽涂穷，则已耳。”《晋书·嵇康传》作道尽途殚”。',
    example: '无',
    explanation: '指无路可走，陷于绝境。',
    pinyin: 'dào jìn tú dān',
    word: '道尽途殚',
    abbreviation: 'djtd',
  },
  {
    derivation:
      '唐·李复言《续幽怪录》记载传说故事唐朝的韦固路过宋城，遇一老人在月光下翻检一本书。询问后，知道老人是专管人间婚姻的神，翻检的书是婚姻簿子。',
    example:
      '正是一对佳人才子。虽在海外，也是一国驸马，富贵无穷。况天缘是～赤绳系定的，不必多疑。★清·陈忱《水浒后传》第十二回',
    explanation: '原指主管婚姻的神仙◇泛指媒人。简称月老”。',
    pinyin: 'yuè xià lǎo rén',
    word: '月下老人',
    abbreviation: 'yxlr',
  },
  {
    derivation:
      '《礼记·中庸》或生而知之，或学而知之，或困而知之，及其知之一也。或安而行之，或利而行之，或勉强而行之，及其成功一也。”',
    example: '无',
    explanation:
      '困知遇困而求知；勉行尽力实行。在不断克服困难中求得知识，有了知识就勉力实行。',
    pinyin: 'kùn zhī miǎn xíng',
    word: '困知勉行',
    abbreviation: 'kzmx',
  },
  {
    derivation: '《晋书·孙统传》纵意游肆，名山胜川靡不穷究。”',
    example: '无',
    explanation: '风景优美的著名河山。',
    pinyin: 'míng shān shèng chuān',
    word: '名山胜川',
    abbreviation: 'mssc',
  },
  {
    derivation: '《史记·白起王翦列传论》偷合取容，以至圽身。”',
    example: '无',
    explanation: '奉承迎合别人，使自己能苟且地生活下去。同偷合苟容”。',
    pinyin: 'tōu hé qǔ róng',
    word: '偷合取容',
    abbreviation: 'thqr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '辛劳长期缠身。形容经历了不少艰难困苦。同停辛伫苦”。',
    pinyin: 'tíng xīn zhù kǔ',
    word: '停辛贮苦',
    abbreviation: 'txzk',
  },
  {
    derivation: '《红楼梦》第六三回晴雯笑道‘你如今也学坏了，专会调三窝四。’”',
    example: '无',
    explanation: '指挑拨是非。同调三斡四”。',
    pinyin: 'tiáo sān wō sì',
    word: '调三窝四',
    abbreviation: 'tsws',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻去做根本做不到的事情，只能白费力气。同水中捞月”。',
    pinyin: 'shuǐ dǐ mō yuè',
    word: '水底摸月',
    abbreviation: 'sdmy',
  },
  {
    derivation:
      '清·李宝嘉《官场现形记》第五十七回倘或聚众人多了，外国人有个一长两短，岂不是于国际上又添了一重交涉么？”',
    example: '无',
    explanation: '指意外的灾祸或事故。',
    pinyin: 'yī cháng liǎng duǎn',
    word: '一长两短',
    abbreviation: 'ycld',
  },
  {
    derivation: '无',
    example: '我们不能大肆挥霍，要注意勤俭节约。',
    explanation: '大肆任意，放纵。无节制地大量花钱。',
    pinyin: 'dà sì huī huò',
    word: '大肆挥霍',
    abbreviation: 'dshh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容数量多、规模大。',
    pinyin: 'lián shān pái hǎi',
    word: '连山排海',
    abbreviation: 'lsph',
  },
  {
    derivation:
      '清·李汝珍《镜花缘》第十三回因置大缸一口，内中贮水，日日伏其中，习其水性，久而久之，竟能在水一日之久。”',
    example:
      '～，凡在上海来来往往的人开口便讲应酬，闭口也讲应酬。★清·吴趼人《二十年目睹之怪现状》第一回',
    explanation: '经过了相当长的时间。',
    pinyin: 'jiǔ ér jiǔ zhī',
    word: '久而久之',
    abbreviation: 'jejz',
  },
  {
    derivation: '《大戴礼·劝学》无绵绵之事者，无赫赫之功。”',
    example: '无',
    explanation: '赫赫盛大显著貌。显赫的业绩。形容功劳极大。',
    pinyin: 'hè hè zhì gōng',
    word: '赫赫之功',
    abbreviation: 'hhzg',
  },
  {
    derivation:
      '宋·晏殊《浣溪沙》词无可奈何花落去，似曾相识燕归来，小园香径独徘徊。”',
    example: '无',
    explanation: '好象曾经见过。形容见过的事物再度出现。',
    pinyin: 'sì céng xiāng shí',
    word: '似曾相识',
    abbreviation: 'scxs',
  },
  {
    derivation:
      '明·凌濛初《初刻拍案惊奇》卷一却又有转眼贫富出人意外，眼前事分毫算不得准的哩！”',
    example: '无',
    explanation: '出于人们的意料之外，都没想到的。',
    pinyin: 'chū rén yì wài',
    word: '出人意外',
    abbreviation: 'cryw',
  },
  {
    derivation:
      '宋·杨万里《诚斋集·都下和同舍李元老承信赠诗之韵》第四卷尽今俗客不妨来，白眼相看勿分剖。”',
    example: '无',
    explanation:
      '看别人时眼睛朝上或旁边，现出白眼珠，表示轻蔑，不屑一顾，对人不礼貌。',
    pinyin: 'bái yǎn xiāng kàn',
    word: '白眼相看',
    abbreviation: 'byxk',
  },
  {
    derivation:
      '语出清·叶燮《原诗·外篇上》嫉恶甚严，爱才若渴，此韩愈之面目也。”',
    example: '本帅～，何必过谦？★《说岳全传》第三一回',
    explanation: '才贤才，人才。爱慕贤才，急欲求得，就象生命一样重要。',
    pinyin: 'ài cái rú mìng',
    word: '爱才如命',
    abbreviation: 'acrm',
  },
  {
    derivation:
      '邓小平《在全国科学大会开幕式上的讲话》绝大多数科学技术人员热爱党、热爱社会主义，努力同工农兵相结合，满腔热情地对待自己从事的科学技术工作，作出了成绩……就整个说来，不愧是我们工人阶级自己的又红又专的科学技术队伍。”',
    example: '无',
    explanation: '具有无产阶级的世界观，又掌握专业知识和专门技术。',
    pinyin: 'yòu hóng yòu zhuān',
    word: '又红又专',
    abbreviation: 'yhyz',
  },
  {
    derivation:
      '元·王实甫《西厢记》第三本第二折对人前巧语花言，背地里愁眉泪脸。”',
    example:
      '抗战以来，全国人民有一种欣欣向荣的气象，大家以为有了出路，～的姿态为之一扫。★毛泽东《新民主主义论》',
    explanation: '锁紧皱。愁得紧皱眉头，眯起双眼。形容非常苦恼的样子。',
    pinyin: 'chóu méi suǒ yǎn',
    word: '愁眉锁眼',
    abbreviation: 'cmsy',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '振作起精神。',
    pinyin: 'dǒu sǒu jīng shén',
    word: '抖搂精神',
    abbreviation: 'dsjs',
  },
  {
    derivation: '宋·张君房《云笈七签》卷四十与穷恤寡是一药，矜贫救厄是一药。”',
    example: '无',
    explanation: '矜怜悯。怜悯救济遭受贫穷苦难的人。',
    pinyin: 'jīn pín jiù è',
    word: '矜贫救厄',
    abbreviation: 'jpje',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '犹言哗众取宠。以浮夸的言论迎合群众，骗取群众的信赖和支持。',
    pinyin: 'huá shì qǔ chǒng',
    word: '哗世取宠',
    abbreviation: 'hsqc',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容恐惧的样子。同胁肩累足”。',
    pinyin: 'xié jiān lèi zú',
    word: '胁肩絫足',
    abbreviation: 'xjlz',
  },
  {
    derivation:
      '汉·贾谊《过秦论下》且天下尝同心并力而攻秦矣，然困于险阻而不能进者。”',
    example: '有寇而战，则～。★宋·苏轼《策别十三》',
    explanation: '团结一致，共同努力。',
    pinyin: 'tóng xīn bìng lì',
    word: '同心并力',
    abbreviation: 'txbl',
  },
  {
    derivation:
      '元·李寿卿《度柳翠》楔子那时着第十六尊罗汉月明尊者，直至人间点化柳翠，返本还元，同登佛会。”',
    example:
      '如此则以外物染移灭了真性，不能～，那得成仙作祖。★《快心编二集》第四回',
    explanation: '犹言返本还源。',
    pinyin: 'fǎn běn huán yuán',
    word: '返本还元',
    abbreviation: 'fbhy',
  },
  {
    derivation:
      '清·李宝嘉《洗在狱》楔子到了这个分上，要想他们毁家纾难，枵腹从公，恐怕走遍天涯，如此好人，也找不出一个。”',
    example: '无',
    explanation: '枵腹空腹，肚饥。指饿着肚子办公家的事。形容一心为公。',
    pinyin: 'xiāo fù cóng gōng',
    word: '枵腹从公',
    abbreviation: 'xfcg',
  },
  {
    derivation:
      '宋·吴曾《能改斋漫录·事实二》过家上冢，恳章尽得于哀荣；跋山涉川，之任敢辞于艰险。”',
    example: '无',
    explanation: '形容远道奔波之苦。参见跋山涉水”。',
    pinyin: 'bá shān shè chuān',
    word: '跋山涉川',
    abbreviation: 'bssc',
  },
  {
    derivation: '晋·夏侯湛《抵疑》今乃金口玉音，漠然沉默。”',
    example:
      '不信你长个～！我故意从屋里取来秤一称。★柳青《创业史》第二部第一章',
    explanation:
      '金、玉比喻珍贵。指皇帝是金口玉牙，说什么是什么，不能更改。现比喻说一不二。',
    pinyin: 'jīn kǒu yù yá',
    word: '金口玉牙',
    abbreviation: 'jkyy',
  },
  {
    derivation:
      '清·钱泳《履园丛话·旧闻·席氏多贤》今生已被虏，人被杀，儿孤妇寡，饥寒交迫，形槁心灰，虽生亦犹死也。”',
    example: '无',
    explanation: '槁枯干。形容身体消瘦不堪，心境极为冷漠，毫无生气。',
    pinyin: 'xíng gǎo xīn huī',
    word: '形槁心灰',
    abbreviation: 'xgxh',
  },
  {
    derivation:
      '刘少奇《对华北记者团的谈话》你们的报道一定要真实，不要加油加醋，不要戴有色眼镜。”',
    example:
      '老梁，假若你总是戴上～，看一切事物和一切人，假若你把你我之间的冲突当作是个人意气用事，那就是清清楚楚地毁你自己。★杜鹏程《在和平的日子里》第三章',
    explanation: '比喻看待人或事物所抱的成见。',
    pinyin: 'yǒu sè yǎn jìng',
    word: '有色眼镜',
    abbreviation: 'ysyj',
  },
  {
    derivation:
      '宋·晓莹《罗湖野录》卷二含血喷人，先污其口；百丈野狐，失头狂走。”',
    example:
      '她镇静起来，从炕上摸起一件上衣往身上披，用生硬的口吻说你别～！你，你不安好心……”★冯德英《苦菜花》第三章',
    explanation: '比喻用恶毒的话污蔑或辱骂别人。',
    pinyin: 'xuè kǒu pēn rén',
    word: '血口喷人',
    abbreviation: 'xkpr',
  },
  {
    derivation:
      '清·曹雪芹《红楼梦》第四回遂打了个落花流水，生拖死拽，把个英莲拖去，如今也不知死活。”',
    example: '无',
    explanation: '形容强行拖扯。',
    pinyin: 'shēng tuō sǐ zhuāi',
    word: '生拖死拽',
    abbreviation: 'stsz',
  },
  {
    derivation:
      '《宋史·欧阳修传》宋兴且百年，而文章体裁，犹仍五季余习……士因陋守旧，论卑气弱。”',
    example: '无',
    explanation: '陋不合理；守旧保持旧的。指因袭不合理的老一套而不加改进。',
    pinyin: 'yīn lòu shǒu jiù',
    word: '因陋守旧',
    abbreviation: 'ylsj',
  },
  {
    derivation:
      '清·吴敬梓《儒林外史》第五十二回小弟生性喜欢养几匹马，他就嫌好道恶的，说着蹋了他的院子。”',
    example: '无',
    explanation: '说好道坏。指挑剔苛求。',
    pinyin: 'xián hǎo dào è',
    word: '嫌好道恶',
    abbreviation: 'xhde',
  },
  {
    derivation:
      '清·吴研人《二十年目睹之怪现状》第十一回可见得我们就这大关的事不是好事，我这当督检的，还是众怨之的呢。”',
    example: '无',
    explanation: '众人怨恨的目标。',
    pinyin: 'zhòng yuàn zhī dì',
    word: '众怨之的',
    abbreviation: 'zyzd',
  },
  {
    derivation:
      '《汉书·王莽传》当此之时，公运独见之明，奋亡前之威，盱衡厉色，振扬武怒。”',
    example:
      '今也，骏特俶党之士，丁时未至，～，悍然而为之，志固不遂，且危其身矣。★章炳麟《变法箴言》',
    explanation: '盱衡举眉扬目；厉严厉；色面色♂眉怒目，面色严厉。',
    pinyin: 'xū héng lì sè',
    word: '盱衡厉色',
    abbreviation: 'xhls',
  },
  {
    derivation:
      '《宋书·何承天传》斥候之郊，非耕牧之所；转战之地，非耕桑之邑。故坚壁清野，以俟其来，整甲缮兵，以乘其敝。虽时有古今，保民全境，不出此途。”',
    example: '无',
    explanation: '整顿甲胄，修理兵器。谓作好战备。',
    pinyin: 'zhěng jiǎ shàn bīng',
    word: '整甲缮兵',
    abbreviation: 'zjsb',
  },
  {
    derivation: '南朝·梁·刘勰《文心雕龙·神思》意翻空而易奇。”',
    example: '无',
    explanation: '形容诗文、字画等一反前人窠臼，以独特的想象取胜。',
    pinyin: 'fān kōng chū qí',
    word: '翻空出奇',
    abbreviation: 'fkcq',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指父母先人的生日。',
    pinyin: 'shuāng lù zhī chén',
    word: '霜露之辰',
    abbreviation: 'slzc',
  },
  {
    derivation:
      '明·徐霖《绣襦记·逼娃逢迎》贱人不思忖，良家且淫奔。你既落烟花寨，休思百世流芳也。”',
    example: '红旗半下悼英雄，～建大功。★《杭州日报》1977.1.6',
    explanation: '美名永传于后世。',
    pinyin: 'bǎi shì liú fāng',
    word: '百世流芳',
    abbreviation: 'bslf',
  },
  {
    derivation: '《荀子·成相》拒谏饰非，愚而上同，国必祸。”',
    example: '～，断自己意。★宋·孙光宪《北梦琐言》卷五',
    explanation: '饰掩饰；非错误；谏直言规劝。拒绝劝告，掩饰错误。',
    pinyin: 'shì fēi jù jiàn',
    word: '饰非拒谏',
    abbreviation: 'sfjj',
  },
  {
    derivation: '清·舒位《修箫谱传奇》红男绿女，到如今野草荒田。”',
    example:
      '没有人这么早来逛庙，他自己也并不希望看见什么豆汁摊子，大糖葫芦，沙雁，风车与那些～。★老舍《四世同堂》三十五',
    explanation: '指穿着各种漂亮服装的青年男女。',
    pinyin: 'hóng nán lǜ nǚ',
    word: '红男绿女',
    abbreviation: 'hnln',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '太阳已偏西还顾不上吃饭。形容专心致志，勤勉不懈。',
    pinyin: 'rì zè wàng shí',
    word: '日昃忘食',
    abbreviation: 'rzws',
  },
  {
    derivation:
      '宋洪迈《夷坚癸志·李五郎》为盗有求不惬，诬为窝停主人，诉于郡，不见察，故陷党中。”',
    example: '无',
    explanation: '藏匿盗匪、赃物的人或人家。',
    pinyin: 'wō tíng zhǔ rén',
    word: '窝停主人',
    abbreviation: 'wtzr',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指官吏违法乱纪，包庇坏人坏事。',
    pinyin: 'wǎng fǎ xùn sī',
    word: '枉法徇私',
    abbreviation: 'wfxs',
  },
  {
    derivation: '唐·皇甫湜《韩文公墓志铭》茹古涵今，无有端涯。”',
    example:
      '其道足以济天下之用，其词足以媲《坟》《典》之宏，～，牢笼百氏。★清·方东树《〈切问斋文钞〉书后》',
    explanation:
      '犹言博古通今。对古代的事知道得很多，并且通晓现代的事情。形容知识丰富。',
    pinyin: 'rú gǔ hán jīn',
    word: '茹古涵今',
    abbreviation: 'rghj',
  },
  {
    derivation:
      '《花月痕》二七回秋痕给跛脚提醒这一句，柔肠百转，方觉一股刺骨的悲酸，非常沉痛！整整和跛脚对哭到天亮。”',
    example: '那姑娘终日闷闷不乐，一幅～的模样，让人看了心酸。',
    explanation: '柔和的心肠打了无数的结；形容心中郁结着许多愁苦。',
    pinyin: 'róu cháng bǎi jié',
    word: '柔肠百结',
    abbreviation: 'rcbj',
  },
  {
    derivation: '元·无名氏《梧桐叶》第四折那兵荒马乱，定然遭驱被掳。”',
    example:
      '此时四处～，朝秦暮楚，我勉强做了一部《旧唐书》，那里还有闲情逸志弄这笔墨。”★清·李汝珍《镜花缘》第一回',
    explanation: '荒、乱指社会秩序不安定。形容战争期间社会混乱不安的景象。',
    pinyin: 'bīng huāng mǎ luàn',
    word: '兵荒马乱',
    abbreviation: 'bhml',
  },
  {
    derivation: '《尚书·汤诰》栗栗危惧，若将陨于深渊。”',
    example:
      '夫以我一人所遭之无依著若此。而带累妻子，举世行乎～之涂，吾能无缺然哉！★清·无名氏《杜诗言志》卷十',
    explanation: '栗栗发抖的样子。形容非肠怕。',
    pinyin: 'lì lì wēi jù',
    word: '栗栗危惧',
    abbreviation: 'llwj',
  },
  {
    derivation:
      '宋·陆游《醉中草书因戏作此》诗稚子问翁新语处，欲言直恐泄天机。”',
    example: '无',
    explanation: '比喻泄露秘密。',
    pinyin: 'xiè lòu tiān jī',
    word: '泄露天机',
    abbreviation: 'xltj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '硝烟如云，子弹像雨。形容激烈的战斗。',
    pinyin: 'xiāo yún dàn yǔ',
    word: '硝云弹雨',
    abbreviation: 'xydy',
  },
  {
    derivation:
      '《后汉书·郑玄传》五年春，梦孔子告之曰‘起，起，今年岁在辰，来年岁在巳。’既寤，以谶合之，知当命终，有顷寝疾。”李贤注北齐刘昼《高才不遇传》论玄曰‘辰为龙，巳为蛇，岁至龙蛇。贤人嗟，玄以谶合之’，盖谓此也。”',
    example:
      '历险阻之驰驱，风如牛马；慨身宫之偃蹇，～。★清·魏秀仁《花月痕》第五回',
    explanation: '岁，岁星；龙，指辰；蛇，指巳◇指命数当终。',
    pinyin: 'suì zài lóng shé',
    word: '岁在龙蛇',
    abbreviation: 'szls',
  },
  {
    derivation:
      '唐·柳宗元《袁空渴记》每风自四山而下，振动大木，掩苒众草，给红骇绿，蓊郁香气。”',
    example: '～，掩苒何穷，劈柳鸣条，萧骚无际。★清·蒲松龄《聊斋志异·绛妃》',
    explanation:
      '纷纷披；红指红花；骇散乱；绿指绿叶。纷披散乱的红花绿叶。形容花草树木随风摆动。',
    pinyin: 'fēn hóng hài lǜ',
    word: '纷红骇绿',
    abbreviation: 'fhhl',
  },
  {
    derivation:
      '语出波栗湿缚尊者（胁尊者）勤修苦行，终不以胁至席的故事。见唐玄奘《大唐西域记·健驮逻国》。',
    example: '无',
    explanation: '形容佛教徒勤苦修行。',
    pinyin: 'xié bù zhān xí',
    word: '胁不沾席',
    abbreviation: 'xbzx',
  },
  {
    derivation:
      '语出南朝·宋·刘义庆《世说新语、黜免》殷中军被废，在信安，终日恒书空作字。扬州吏民寻义逐之，窃视，唯作‘咄咄怪事’四字而已。”',
    example: '～知谁解，击缶呜呜却自惊。★金·元好问《镇平县斋感怀》诗',
    explanation: '为叹息、愤慨、惊诧的的典实。',
    pinyin: 'shū kōng duō duō',
    word: '书空咄咄',
    abbreviation: 'skdd',
  },
  {
    derivation:
      '明·洪榝《清平山堂话本·五戒禅师么红莲记》一个初侵女色，由（犹）如饿虎吞羊。”',
    example: '无',
    explanation: '象饥饿的老虎扑向食物一样。比喻动作猛烈而迅速。',
    pinyin: 'è hǔ pū yáng',
    word: '饿虎扑羊',
    abbreviation: 'ehpy',
  },
  {
    derivation: '元·杨显之《酷寒亭》第四折从今后深仇积恨都消解。”',
    example:
      '多年积压的～，象火山的岩浆一样从江水山的身上暴发了！★冯德英《迎春花》第二章',
    explanation: '深而大的仇恨。',
    pinyin: 'shēn chóu dà hèn',
    word: '深仇大恨',
    abbreviation: 'scdh',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容篇幅过多，文辞冗长。同连篇累牍”。',
    pinyin: 'lián piān lèi fú',
    word: '连篇絫幅',
    abbreviation: 'lplf',
  },
  {
    derivation:
      '《汉书·艺文志》凡诸子百八十九家……蜂出并作，各引一端，崇其所说，以此弛说，取舍诸候。”',
    example:
      '自春秋末年以来，中国的思想得到一个极大的开放，呈现出一个～的局面。★郭沫若《吕不韦与秦王政的批判》',
    explanation:
      '指各种学术流派的自由争论互相批评。也指不同意见的争论。百家，这种观点的人或各种学术派别。鸣，发表见解。',
    pinyin: 'bǎi jiā zhēng míng',
    word: '百家争鸣',
    abbreviation: 'bjzm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '顺从错误言行且加以润饰。',
    pinyin: 'shùn fēi ér zé',
    word: '顺非而泽',
    abbreviation: 'sfez',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '激励世人，使鲁钝的人奋发有为。亦作历世磨钝”。',
    pinyin: 'lì shì mó dùn',
    word: '历世摩钝',
    abbreviation: 'lsmd',
  },
  {
    derivation:
      '清·陆陇其《与李枚吉婿书》吾婿英年有志，前程远大，苟发愤力学，将来凤翥鹏翔，何可限量。”',
    example: '无',
    explanation: '形容奋发有为。',
    pinyin: 'fèng zhù péng xiáng',
    word: '凤翥鹏翔',
    abbreviation: 'fzpx',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '犹起死回生。形容医术高明。也比喻把已经没有希望的事物挽救过来。',
    pinyin: 'sǐ gǔ gèng ròu',
    word: '死骨更肉',
    abbreviation: 'sggr',
  },
  {
    derivation:
      '汉·刘向《说苑·善说》使食肉者一旦失计于庙堂之上，若臣等之藿食者宁得无肝胆涂地于中原之野？”',
    example: '臣先殿上绝缨者也，当时宜以～，负日久矣。★《韩诗外传》卷七',
    explanation: '形容惨死。也形容竭尽忠诚，任何牺牲都在所不惜。同肝脑涂地”。',
    pinyin: 'gān dǎn tú dì',
    word: '肝胆涂地',
    abbreviation: 'gdtd',
  },
  {
    derivation:
      '《旧唐书·太宗本纪上》龙凤之姿，天日之表，其年将二十，必能济世安民矣。”',
    example:
      '孟轲得圣贤之传于子思，有～之志。★明·冯梦龙《东周列国志》第八十七回',
    explanation: '使国家得到治理，百姓安居乐业。',
    pinyin: 'jì shì ān mín',
    word: '济世安民',
    abbreviation: 'jsam',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指远行、跋涉。同蹑躥檐簦”。',
    pinyin: 'niè juàn yán dēng',
    word: '蹑屩檐簦',
    abbreviation: 'njyd',
  },
  {
    derivation:
      '徐迟《地质之光》在六十年代里，华北大平原上捷报频传。以后大港油田、胜利油田、其他油田相继建成。”',
    example: '无',
    explanation: '捷报胜利的消息；频屡次。胜利的消息不断地传来。',
    pinyin: 'jié bào pín chuán',
    word: '捷报频传',
    abbreviation: 'jbpc',
  },
  {
    derivation:
      '明·冯梦龙《醒世恒言》第二十八卷若论起吴衙内，只算做半饥半饱，未能趁心像意。”',
    example: '无',
    explanation: '指不求甚饱或吃不饱饭。',
    pinyin: 'bàn jī bàn bǎo',
    word: '半饥半饱',
    abbreviation: 'bjbb',
  },
  {
    derivation:
      '唐·陆贽《请许台省长官举荐属吏状》夫求才贵广，孝课贵精。求广在于各举所知，长吏之荐择是也；孝精在于按名责实，宰臣之序进是也。”',
    example: '及～，台有评，省有核。★明·李东阳《漳州府进士提名记》',
    explanation: '按照事物名称，要求与实相符。',
    pinyin: 'àn míng zé shí',
    word: '按名责实',
    abbreviation: 'amzs',
  },
  {
    derivation: '《汉书·严助传》朔、皋不根持论，上颇俳优畜之。”',
    example:
      '苟足以移科举骫骳之文，～，是某等之心，而识者岂必以是而尽求公哉。★宋·陈亮《郑景望杂著序》',
    explanation: '根根据；论言论。没有根据的言论。',
    pinyin: 'bù gēn zhī lùn',
    word: '不根之论',
    abbreviation: 'bgzl',
  },
  {
    derivation:
      '宋·朱敦儒《感皇恩·游□□园感旧》词主人好事，坐客雨巾风帽。”宋·陈三聘《梦玉人引》词雨巾风帽，昔追游、谁念旧踪迹。”',
    example: '无',
    explanation: '遮蔽风雨的头巾和帽子。常借指浪游之客。',
    pinyin: 'yǔ jīn fēng mào',
    word: '雨巾风帽',
    abbreviation: 'yjfm',
  },
  {
    derivation:
      '汉·刘向《说苑·君道》今王将东面，目指气使以求臣，则厮役之材至矣；南面听朝，不失揖让之礼以求臣，则人臣之材至矣；西面等礼相亢，下之以色，不乘势以求臣，则朋友之材至矣。”',
    example: '无',
    explanation: '犹言分庭抗礼。以平等之礼相待。',
    pinyin: 'děng lǐ xiāng kàng',
    word: '等礼相亢',
    abbreviation: 'dlxk',
  },
  {
    derivation:
      '金·元好问《息轩秋江捕鱼图》诗之三玉堂人物今何在，纸尾题诗一慨然。”',
    example:
      '至二世兄富丽堂皇，不用说，将来一定是～了！★清·李宝嘉《官场现形记》第五十九回',
    explanation: '泛指显贵的文士。',
    pinyin: 'yù táng rén wù',
    word: '玉堂人物',
    abbreviation: 'ytrw',
  },
  {
    derivation:
      '明·胡文焕《群音类选·北腔类·王昭君和番》无不盖你亏心汉，今日把你分尸五马，远配千年。”',
    example:
      '我张飞虎又不能～！也没有三头六臂！那些事我指派给组长了，你们不会问人家。（康濯《工人张飞虎》）',
    explanation:
      '古代的一种酷刑，用五匹马分裂人的头和四肢，又称四裂”。比喻硬把完整的东西分割得非常零碎。',
    pinyin: 'wǔ mǎ fēn shī',
    word: '五马分尸',
    abbreviation: 'wmfs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容冒着生命危险。',
    pinyin: 'rù sǐ chū shēng',
    word: '入死出生',
    abbreviation: 'rscs',
  },
  {
    derivation:
      '①《京本通俗小说·错斩崔宁》光阴迅速，大娘子在家巴巴结结将近一年。”②《古今小说任·孝子烈性为神》任珪天明起来，辞了父亲入城去了。每日巴巴结结，早出晚回。”',
    example: '他～地说不了几句。',
    explanation: '①勉强，凑合。②勤恳；辛劳。③形容说话不流利。',
    pinyin: 'bā bā jiē jiē',
    word: '巴巴结结',
    abbreviation: 'bbjj',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容豪迈激越的文章风格。',
    pinyin: 'tiě bǎn tóng xián',
    word: '铁板铜弦',
    abbreviation: 'tbtx',
  },
  {
    derivation:
      '明·徐宏祖《徐霞客游记·滇游日记》龚起潜为余谈之甚晰，皆凿凿可据。”',
    example: '无',
    explanation: '凿凿确实。有确实的证据。',
    pinyin: 'záo záo yǒu jù',
    word: '凿凿有据',
    abbreviation: 'zzyj',
  },
  {
    derivation:
      '明·罗贯中《三国演义》第七十九回前面鼓角齐鸣，一彪军出，放过马谡，拦住张郺。”',
    example: '无',
    explanation:
      '鼓战鼓；角古代军队中的乐器，即号角。战鼓响，号角鸣。形容军队出击时的雄壮阵势。',
    pinyin: 'gǔ jiǎo qí míng',
    word: '鼓角齐鸣',
    abbreviation: 'gjqm',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '原指说话做事有条有理，不慌不忙。现也形容说话做事慢腾腾，不不慌不忙。同慢条斯理”。',
    pinyin: 'màn tiáo sī lǐ',
    word: '慢条斯礼',
    abbreviation: 'mtsl',
  },
  {
    derivation:
      '清·赵翼《檐曝杂记》卷一每数十步间一戏台，南腔北调，备四方之乐。”',
    example: '这个说话～的人，不适合当解说员。',
    explanation: '原指戏曲的南北腔调。现形容说话口音不纯，搀杂着方言。',
    pinyin: 'nán qiāng běi diào',
    word: '南腔北调',
    abbreviation: 'nqbd',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '趋向私利，违背正义。乡，通向”。倍，通背”。',
    pinyin: 'xiāng lì bèi yì',
    word: '乡利倍义',
    abbreviation: 'xlby',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '形容优美的声音。',
    pinyin: 'fèng míng hè lì',
    word: '凤鸣鹤唳',
    abbreviation: 'fmhl',
  },
  {
    derivation: '宋·朱熹《朱子语类·大学三》害人与穿窬，因为不仁不义。”',
    example:
      '窥若辈之倒行逆施，是直欲陷吾元首于～之中。★蔡东藩、许廑父《民国通俗演义》第四十五回',
    explanation: '仁仁爱；义道义。不讲仁德，不讲道义。形容品性卑劣、残忍。',
    pinyin: 'bù rén bù yì',
    word: '不仁不义',
    abbreviation: 'brby',
  },
  {
    derivation:
      '唐·刘长卿《听弹琴》诗泠泠七弦上，静吹松风寒。古调虽自爱，今人多不弹。”',
    example: '无',
    explanation: '比喻言行不合时宜。',
    pinyin: 'gǔ diào dān tán',
    word: '古调单弹',
    abbreviation: 'gddt',
  },
  {
    derivation: '《尔雅·释训》式微式微者，微微微者也。”',
    example:
      '富庶的河套，是黄河所给的一点点它口里所吐出的，和被它所吞没的比较起来，真是～了。★臧克家《毛主席向着黄河笑》',
    explanation: '形容非常小或非常少。',
    pinyin: 'wēi hū qí wēi',
    word: '微乎其微',
    abbreviation: 'whqw',
  },
  {
    derivation:
      '《邓析子·无厚》不治其本而务其末，譬如拯溺锤之以石，救火投之以薪。”',
    example: '无',
    explanation:
      '焚火灾；薪柴草。投进木柴去救火。比喻采取错误的方法使问题更加严重。',
    pinyin: 'jiù fén tóu xīn',
    word: '救焚投薪',
    abbreviation: 'jftx',
  },
  {
    derivation:
      '《宋书·礼志一》殿下以命世之资，属当倾危之运，礼乐征伐，翼成中兴，将涤秽荡瑕，拨乱反正。”',
    example: '无',
    explanation: '指清除旧的恶习。同涤瑕荡秽”。',
    pinyin: 'dí huì dàng xiá',
    word: '涤秽荡瑕',
    abbreviation: 'dhdx',
  },
  {
    derivation: '《汉书·韩信传》受辱于胯下，无兼人之勇，不足畏也。”',
    example:
      '欲差官赍礼前去，天下慌乱，盗贼生发，恐中途疏虞，你却有～，可当此任么？★清·禇人获《隋唐演义》第十五回',
    explanation: '兼人一人抵多人；勇勇敢。抵得上几个人的勇气。形容十分勇敢。',
    pinyin: 'jiān rén zhī yǒng',
    word: '兼人之勇',
    abbreviation: 'jrzy',
  },
  {
    derivation:
      '宋·释普济《五灯会元·漳州保福院从展禅师》有人赞叹此事如虎戴角；有人轻毁此事分文不值。”',
    example: '这个东西～。',
    explanation: '形容毫无价值。',
    pinyin: 'fēn wén bù zhí',
    word: '分文不值',
    abbreviation: 'fwbz',
  },
  {
    derivation:
      '五代·王定宝《唐摭言》卷十如‘水声常在耳，山色不离门’，又‘扫地树留影，拂床琴有声’……皆脍炙人口。”',
    example:
      '一部～的《国风》与《小雅》，也是三百篇”的最精采部分，便是诗歌合作中最美满的成绩。★闻一多《歌与诗》',
    explanation:
      '脍切细的肉；炙烤熟的肉。脍和炙都是人们爱吃的食物。指美味人人爱吃。比喻好的诗文受到人们和称赞和传讼。',
    pinyin: 'kuài zhì rén kǒu',
    word: '脍炙人口',
    abbreviation: 'kzrk',
  },
  {
    derivation: '唐·杜甫《曲江二首》酒债寻常行处有，人生七十古来稀。”',
    example: '七十～是人生难得的。★明·冯梦龙《醒世恒言·李道人独步云门》',
    explanation: '稀少。指人到七十岁。',
    pinyin: 'gǔ xī zhī nián',
    word: '古稀之年',
    abbreviation: 'gxzn',
  },
  {
    derivation: '南朝·梁·简文帝《大法颂》序航海梯山，奉白环之使。”',
    example: '～，贡奉循环。★唐·于兢《王审知德政碑》',
    explanation: '渡过大海，攀越高山。指经历艰远的路程。',
    pinyin: 'háng hǎi tī shān',
    word: '航海梯山',
    abbreviation: 'hhts',
  },
  {
    derivation: '清·叶燮《原诗·外篇上》嫉恶甚严，爱才若渴，此韩愈之面目也。”',
    example: '宫保～，兄弟实在钦佩的。★清·刘鹗《老残游记》六回',
    explanation: '才贤才，人才。爱慕贤才，急欲求得，就象口渴急于喝水一样。',
    pinyin: 'ài cái rú kě',
    word: '爱才如渴',
    abbreviation: 'acrk',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '履、蹈执行。指履行仁义之道。',
    pinyin: 'lǚ rén dǎo yì',
    word: '履仁蹈义',
    abbreviation: 'lrdy',
  },
  {
    derivation:
      '《晋书·卫玠传》京师人士闻其姿容，观者如堵。玠劳疾遂甚，永嘉六年卒，时年二十七，时人谓玠被看杀。”',
    example:
      '卫玠从豫章至下都，人久闻其名，观者如堵墙。玠先有羸疾，体不堪劳，遂成病而死，时人谓～。★明·李贽《初潭集·师友十》',
    explanation:
      '卫玠晋人，字叔宝，风采极佳，为众人所仰慕。卫玠被人看死。比喻为群众所仰慕的人。',
    pinyin: 'kàn shā wèi jiè',
    word: '看杀卫玠',
    abbreviation: 'kswj',
  },
  {
    derivation:
      '清·褚人获《隋唐演义》第四十四回只怕事大难回，所以踌躇延捱……事宽即圆，支得他去，再可商量。”',
    example: '秋鸿道哭也没用，～。”★清·佚名《明珠缘》第十五回',
    explanation: '谓遇事只要从容对待，就能圆满解决。款，宽缓。同事款则圆”。',
    pinyin: 'shì kuān jí yuán',
    word: '事宽即圆',
    abbreviation: 'skjy',
  },
  {
    derivation:
      '《儿女英雄传》第十五回不是我说句分斤掰两的话咧，舅爷有什么高亲贵友该请到他华府上去？”',
    example: '无',
    explanation: '比喻过分计较。',
    pinyin: 'fēn jīn bāi liǎng',
    word: '分斤掰两',
    abbreviation: 'fjbl',
  },
  {
    derivation:
      '陶菊隐《北洋军阀统治时期史话》第七十一章尽管一再限期攻下怀来，并且用封官许愿的办法来鼓励将士，但是他的阵地始终没有进展一步。”',
    example: '无',
    explanation: '指以名利地位引诱别人来帮助自己达到不正当的目的。',
    pinyin: 'fēng guān xǔ yuàn',
    word: '封官许愿',
    abbreviation: 'fgxy',
  },
  {
    derivation:
      '陈登科《风雷》第一部第49章不要中了敌人的糖衣炮弹，被人家拉过去。”',
    example: '一些意志薄弱的人容易被～所击倒。',
    explanation:
      '用糖衣裹着的炮弹；比喻用腐蚀、拉拢、诱惑等手段去牟取自己的利益。',
    pinyin: 'táng yī pào dàn',
    word: '糖衣炮弹',
    abbreviation: 'typd',
  },
  {
    derivation: '《史记·留侯世家》而汉王之将，独韩信可属大事，当一面。”',
    example: '将来可以～，只嫌功名心重些。★清·曾朴《孽海花》第四回',
    explanation: '单独负责一个方面的工作。',
    pinyin: 'dú dāng yī miàn',
    word: '独当一面',
    abbreviation: 'ddym',
  },
  {
    derivation:
      '宋·刘过《贺新郎》词衣袂京尘曾染处，空有香红尚软。料彼此，魂销肠断。”',
    example: '无',
    explanation: '指情思凄苦。同魂销目断”。',
    pinyin: 'hún xiāo cháng duàn',
    word: '魂销肠断',
    abbreviation: 'hxcd',
  },
  {
    derivation: '《新刊大宋宣和遗事》太上因暑热成病，狼狈万状。”',
    example: '无',
    explanation: '狼狈窘迫的样子；万状多种样子。形容极其困顿、窘迫。',
    pinyin: 'láng bèi wàn zhuàng',
    word: '狼狈万状',
    abbreviation: 'lbwz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指惶恐不安的样子。',
    pinyin: 'jú dì yào tiān',
    word: '局地钥天',
    abbreviation: 'jdyt',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '器物已满盈但不溢出。比喻有资财而不浪用，有才能而不自炫，善于节制守度。',
    pinyin: 'mǎn ér bù yì',
    word: '满而不溢',
    abbreviation: 'meby',
  },
  {
    derivation:
      '南朝·梁武帝《敕舍道事佛》老子、周公、孔子等虽是如来弟子，而为化既邪，止是世间之善，不能革凡成圣。”',
    example: '无',
    explanation: '革除凡习，成为圣哲。',
    pinyin: 'gé fán chéng shèng',
    word: '革凡成圣',
    abbreviation: 'gfcs',
  },
  {
    derivation:
      '元·关汉卿《乔牌儿》套曲算到天明走到黑，赤紧的是衣食。凫短鹤长不能走。”',
    example: '无',
    explanation: '凫胫短鹤胫长。长短不齐。泛指馀缺不齐。',
    pinyin: 'fú duǎn hè cháng',
    word: '凫短鹤长',
    abbreviation: 'fdhc',
  },
  {
    derivation:
      '清·戴震《孟子字义疏证·原善序》治经之士，莫能综贯，习所见闻，积非成是，余言恐未足以振兹坠绪也。”',
    example:
      '对于一些早已～、具有广泛群众基础的误读音，就不能太拘泥于语音本身的发展规律。★胡明扬《词典学概论》第七章第二节',
    explanation: '指长期所形成的错误，往往被当作正确的。',
    pinyin: 'jī fēi chéng shì',
    word: '积非成是',
    abbreviation: 'jfcs',
  },
  {
    derivation:
      '《孟子·滕文公下》昔者禹抑洪水而天下平，周公兼夷狄、驱猛兽而百姓宁。”',
    example:
      '当初革命军来了，以为全是～一般的家伙，原来倒不少我辈中人。★叶圣陶《丁祭》',
    explanation: '猛兽残食人畜的野兽。比喻极大的祸害。',
    pinyin: 'hóng shuǐ měng shòu',
    word: '洪水猛兽',
    abbreviation: 'hsms',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '使用手段谋取好处，图得便宜。',
    pinyin: 'qǔ qiǎo tú biàn',
    word: '取巧图便',
    abbreviation: 'qqtb',
  },
  {
    derivation:
      '唐·宋若华、宋若昭《女论语·事夫章》莫教寒冷，冻损夫身；家常茶饭，供侍殷勤。”宋·罗大经《鹤林玉露》卷四常调官好作，家常饭好吃。”',
    example:
      '快请夏老爷出来！虽然～，也没有背客自吃之理啊！★清·吴趼人《二十年目睹之怪现状》第五十六回',
    explanation: '指家中日常的饭食。也比喻常见的事情。',
    pinyin: 'jiā cháng biàn fàn',
    word: '家常便饭',
    abbreviation: 'jcbf',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指在穷困艰难的时候，就要想办法改变现状。',
    pinyin: 'qióng jí sī biàn',
    word: '穷极思变',
    abbreviation: 'qjsb',
  },
  {
    derivation: '唐·道世《法苑珠林》藏六如龟，防意如城，慧与魔战，胜则无患。”',
    example: '无',
    explanation: '意心思，指私欲。指严格遏止私心杂念，象守城防敌一样。',
    pinyin: 'fáng yì rú chéng',
    word: '防意如城',
    abbreviation: 'fyrc',
  },
  {
    derivation:
      '清《宣宗圣训·清道光帝上谕》奸商开设太和字号，邀群结伙，买空卖空。”',
    example:
      '因为多年～的结果，文界就荒凉了，文章的形式虽然比较的整齐起来，但战斗的精神却较前有退无进。★鲁迅《准风月谈·由聋而哑》',
    explanation:
      '买卖双方都没有货款进出，只就进出之间的差价结算盈亏。也用来比喻政治上招摇撞骗的投机活动。',
    pinyin: 'mǎi kōng mài kōng',
    word: '买空卖空',
    abbreviation: 'mkmk',
  },
  {
    derivation: '《汉书·成帝纪赞》博览古今，容受直辞。”',
    example: '无',
    explanation: '博广博。广泛阅读古今书籍，通晓古今学识。形容学问渊博。',
    pinyin: 'bó lǎn gǔ jīn',
    word: '博览古今',
    abbreviation: 'blgj',
  },
  {
    derivation:
      '邹韬奋《经历·英文的学习》你在上课前仅仅查了生字，读了一两遍是不够的，必须完全了然全课的情节，才能胸有成竹，应付裕如。”',
    example: '无',
    explanation: '应付对付，处置。裕如按自己的心愿做事。从容对付，毫不费劲。',
    pinyin: 'yìng fù yù rú',
    word: '应付裕如',
    abbreviation: 'yfyr',
  },
  {
    derivation:
      '《明史·叶伯巨传》比到京师，而除官多以貌选，所学或非其所用，所用或非其所学。”',
    example:
      '无奈兄弟三个，因为所～，就有点瞧先生不起。★清·李宝嘉《文明小史》第十四回',
    explanation: '所用的不是所学的。指学用不一致。',
    pinyin: 'yòng fēi suǒ xué',
    word: '用非所学',
    abbreviation: 'yfsx',
  },
  {
    derivation:
      '蔡东藩《民国通俗演义》第85回道德沦丧，法度凌夷，匪党纵横，饿殍载道。”',
    example: '～的灾后景象是不会再出现了。',
    explanation: '饿殍饿死的人；载道满路都是。形容到处都是饿死的人。',
    pinyin: 'è piǎo zài dào',
    word: '饿殍载道',
    abbreviation: 'epzd',
  },
  {
    derivation:
      '晋·稽康《与山巨源绝交书》虽饰以金镳、飨以嘉肴，逾思长林而志在丰草也。”',
    example:
      '所以在风尘劳攘的时候，每怀～之思，而今却可赋《遂初》了。★清·吴敬梓《儒林外史》第八回',
    explanation:
      '幽深的树林，茂盛的野草。指禽兽栖止的山林草野，旧常喻隐居之地。',
    pinyin: 'cháng lín fēng cǎo',
    word: '长林丰草',
    abbreviation: 'clfc',
  },
  {
    derivation: '明·罗贯中《三国演义》第一百一十回将军功绩已成，声威大震。”',
    example: '无',
    explanation: '声势和威望急速增长，使人非常震动。',
    pinyin: 'shēng wēi dà zhèn',
    word: '声威大震',
    abbreviation: 'swdz',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '常比喻实际利益并未外流。同囊漏贮中”。',
    pinyin: 'náng lòu chǔ zhōng',
    word: '囊漏储中',
    abbreviation: 'nlcz',
  },
  {
    derivation:
      '明·罗贯中《平妖传》第四十回那安放白玉炉的山峰崩将下来，恰好堵了洞门。雾幙白玉炉仍收回天上，从此白云洞再无人到。此是玉帝杜绝后患之意。”',
    example: '无',
    explanation: '杜绝堵塞、断绝；患祸害、祸患。指彻底消除以后可能产生的祸患。',
    pinyin: 'dù jué hòu huàn',
    word: '杜绝后患',
    abbreviation: 'djhh',
  },
  {
    derivation:
      '清·李绿园《歧路灯》第九十五回所谓‘臧谷亡羊’，其亡必多。这是铁板不易的话。”',
    example:
      '所以古人说得好来悭吝搒财，必生败家之子。这两句话，便是从古至今～之理。★清·刘璋《斩鬼传》第五回',
    explanation: '易变易，更改。像铁板那样不能改变。形容不变的，不可更改的。',
    pinyin: 'tiě bǎn bù yì',
    word: '铁板不易',
    abbreviation: 'tbby',
  },
  {
    derivation: '清·曹雪芹《红楼梦》第30回谁都像我心拙口夯的，由着人说呢！”',
    example: '无',
    explanation: '夯同笨。心思笨拙，又不善于说话。',
    pinyin: 'xīn zhuō kǒu bèn',
    word: '心拙口夯',
    abbreviation: 'xzkb',
  },
  {
    derivation:
      '《淮南子·泰族训》高宗谅暗，三年不言，四海之内寂然无声；一言声然，大动天下。”',
    example:
      '这些和尚是山野的人，收了这残盘剩饭，必然聚吃一番，不然，也要收拾家火，为何～？★明·冯梦龙《醒世恒言》第二十一卷',
    explanation: '寂静没有声音。',
    pinyin: 'jì rán wú shēng',
    word: '寂然无声',
    abbreviation: 'jrws',
  },
  {
    derivation:
      '宋·刘克庄《后村全集·李艮翁礼部墓志铭》然议者但以为恩泽侯挟贵临民，安得尽如人意。”',
    example: '他稍稍感到天下事不能～了。★矛盾《子夜》十',
    explanation: '尽全；如依照，符合。事情完全符合人的心意。',
    pinyin: 'jìn rú rén yì',
    word: '尽如人意',
    abbreviation: 'jrry',
  },
  {
    derivation:
      '邹韬奋《抗战以来·来宾”的建议》局面询问也用不着洋洋洒洒的大文章。”',
    example: '无',
    explanation:
      '洋洋盛大、众多的样子；洒洒明白、流畅的样子。形容文章或谈话丰富明快，连续不断。',
    pinyin: 'yáng yáng sǎ sǎ',
    word: '洋洋洒洒',
    abbreviation: 'yyss',
  },
  {
    derivation:
      '明·凌濛初《初刻拍案惊奇·乌将军一饭必酬》暮雨萧萧江上村，绿林豪客夜知闻。”',
    example: '无',
    explanation:
      '绿林西汉王匡、王凤为首的绿林军”。指聚集山林、反抗官府的武装力量指伤害人民的群盗股匪。',
    pinyin: 'lù lín háo kè',
    word: '绿林豪客',
    abbreviation: 'llhk',
  },
  {
    derivation: '《史记·淮阴侯列传》兵固有先声而后实者，此之谓也。”',
    example: '无',
    explanation: '指用兵贵在先以自己的声势镇慑敌人。',
    pinyin: 'bīng guì xiān shēng',
    word: '兵贵先声',
    abbreviation: 'bgxs',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '比喻求助于人。也比喻为人排难解纷。同束缊请火”。',
    pinyin: 'shù yùn qǐng huǒ',
    word: '束蕴请火',
    abbreviation: 'syqh',
  },
  {
    derivation:
      '据《大乘本生心地观经·序品》载，佛祖说法，感动天神，六欲诸天及天子众，以天福力雨种种华优钵罗华，波头摩华……于虚空中缤纷乱坠”，天华乱坠满虚空，众香普熏于大会”。华，同花”。',
    example: '饶伊～，难逃我双眸似电。★清·李渔《奈何天·媒欺》',
    explanation: '比喻指以夸诞之词动人听闻或以甘言骗人。',
    pinyin: 'kǒu zhuì tiān huā',
    word: '口坠天花',
    abbreviation: 'kzth',
  },
  {
    derivation:
      '宋·范仲淹《岳阳楼记》登斯楼也，则有心旷神怡，宠辱皆忘，把酒临风，其喜洋洋者矣。”',
    example:
      '马上的将士们都　是精神抖擞，～，丝毫不象是吃过败仗。★姚雪垠《李自成》第二卷第三十五章',
    explanation: '洋洋得意的样子。充满了欢喜的神色或气氛。',
    pinyin: 'xǐ qì yáng yáng',
    word: '喜气洋洋',
    abbreviation: 'xqyy',
  },
  {
    derivation:
      '清·文康《儿女英雄传》第十四回见他们一个个蹲在地下，吃了个狼餐虎咽，沟满壕平。”',
    example: '无',
    explanation: '形容饱满。',
    pinyin: 'gōu mǎn háo píng',
    word: '沟满壕平',
    abbreviation: 'gmhp',
  },
  {
    derivation: '无',
    example: '无',
    explanation:
      '迁迁移。乔木高树。原指鸟儿从幽深的山谷迁移到高树上去。比喻乔迁新居。',
    pinyin: 'qiān yú qiáo mù',
    word: '迁于乔木',
    abbreviation: 'qyqm',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '指终身不为人知。',
    pinyin: 'méi shì wú wén',
    word: '没世无闻',
    abbreviation: 'msww',
  },
  {
    derivation: '无',
    example: '无',
    explanation: '迷蒙渺远。比喻相距之遥远。',
    pinyin: 'wù àn yún shēn',
    word: '雾暗云深',
    abbreviation: 'ways',
  },
]
const _app = {
  setup(props) {
    const col = 4,
      row = 4
    const mode = Vue.ref([
      {
        id: 'easy',
        label: '简单',
        rowCols: 4,
        checked: true,
      },
      {
        id: 'normal',
        label: '普通',
        rowCols: 6,
        checked: false,
      },
      {
        id: 'hard',
        label: '困难',
        rowCols: 8,
        checked: false,
      },
    ])
    const createWordArray = (length) => {
      let wordArray = Vue.ref([])
      let words = Vue.ref([])
      for (let i = 0; i < length; i++) {
        let random = Math.ceil(Math.random() * 2000)
        const randomWords = originalWords[random]
        randomWords.word.split('').forEach((item, idx) => {
          wordArray.value.push({
            word: randomWords.word.split('')[idx],
            pinyin: randomWords.pinyin.split(' ')[idx],
          })
        })
        words.value.push(randomWords)
      }
      wordArray.value = wordArray.value.sort(() => Math.random() - 0.5)
      return {
        wordArray,
        words,
      }
    }
    let { wordArray, words } = createWordArray((col * row) / 4)
    console.log(wordArray.value, words.value)
    const state = Vue.ref(
      Array.from({ length: col }, (_, _col) => {
        console.log(_col)
        return Array.from({ length: row }, (_, _row) => {
          console.log(_row)
          return {
            id: _col * col + _row,
            word: wordArray.value[_col * col + _row]['word'],
            pinyin: wordArray.value[_col * col + _row]['pinyin'],
            active: false,
          }
        })
      })
    )
    const handleModeChange = (item) => {
      const { wordArray: _wordArray, words: _words } = createWordArray(
        (item.rowCols * item.rowCols) / 4
      )
      wordArray.value = _wordArray.value
      words.value = _words.value
      state.value = Array.from({ length: item.rowCols }, (_, _col) => {
        console.log(_col)
        return Array.from({ length: item.rowCols }, (_, _row) => ({
          id: _col * col + _row,
          word: wordArray.value[_col * col + _row]['word'],
          pinyin: wordArray.value[_col * col + _row]['pinyin'],
          active: false,
        }))
      })
      selectedWords.value = []
      viewAnswer.value = false
    }
    const selectedWords = Vue.ref([])
    const viewAnswer = Vue.ref(false)
    const onclick = (item) => {
      item.active = !item.active
      if (
        selectedWords.value.length === 0 ||
        selectedWords.value[selectedWords.value.length - 1] % 4 === 0
      ) {
        item.active
          ? selectedWords.value.push([item])
          : selectedWords.value.pop()
        return
      }
      item.active
        ? selectedWords.value[selectedWords.value.length - 1].push(item)
        : selectedWords.value[selectedWords.value.length - 1].pop()
      console.log(selectedWords.value)
    }
    const check = (word) => {
      const result = [].reduce.call(
        word,
        (prev, curr) => {
          prev += curr.word
          return prev
        },
        ''
      )
      return words.value.some((item) => item.word == result)
    }
    const hanldeViewAnswer = () => {
      viewAnswer.value = !viewAnswer.value
      const _score =
        selectedWords.value.filter((item) => words.value.includes(item))
          .length / words.value.length
      const score = Math.floor(_score * 100)
      viewAnswer.value && alert(`您的得分是${score}`)
    }
    return {
      onclick,
      state,
      selectedWords,
      check,
      viewAnswer,
      words,
      mode,
      handleModeChange,
      hanldeViewAnswer,
    }
  },
}
const app = Vue.createApp(_app)

app.mount('#app')
