/* ============================================================
   语阶 GramStep · 交互逻辑（纯前端，业务逻辑保持简单）
   ============================================================ */

/* ---------- 图标 ---------- */
const P = {
  book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19a2 2 0 012-2h13"/>',
  chat:'<path d="M20 11.5a8 8 0 01-8 8H6l-3 2.5V11.5a8 8 0 018-8h1a8 8 0 018 8z"/><path d="M8 10h8M8 13.5h5"/>',
  mic:'<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3.5M8.5 21.5h7"/>',
  clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.5h6V4M9 10h6M9 14h4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0115 0"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  right:'<path d="M9 5l7 7-7 7"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
  flame:'<path d="M12 2s5 4.5 5 9a5 5 0 01-10 0c0-1.5.5-2.5 1-3 0 2 1 3 2 3 1.5 0 1-4 2-6 .5 1.5 1 2.5 1 4 1-1.5 1-3.5-1-7z"/><path d="M12 22a7 7 0 007-7"/>',
  crown:'<path d="M3 8l4.5 3L12 4l4.5 7L21 8l-2 11H5z"/>',
  send:'<path d="M4 12l16-8-6 16-3-6z"/><path d="M11 14l9-10"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5.9 1.2.9 2.1h5.2c0-.9.3-1.6.9-2.1A6 6 0 0012 3z"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  play:'<path d="M8 5l11 7-11 7z"/>',
  refresh:'<path d="M20 12a8 8 0 11-2.4-5.7M20 4v5h-5"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  shield:'<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>',
  gift:'<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18M12 9v12M12 9S9 3 7 5s5 4 5 4zM12 9s3-6 5-4-5 4-5 4z"/>',
  down:'<path d="M12 3v12M7 11l5 5 5-5M4 20h16"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 0c0 2-2.5 2-2.5 4M12 17h.01"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  star:'<path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z"/>',
  volume:'<path d="M4 9h4l5-4v14l-5-4H4zM17 9a4 4 0 010 6M19.5 6.5a8 8 0 010 11"/>'
};
function ic(n){return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`}
function vipTag(){return `<span class="vip-tag">${ic('crown')}VIP</span>`}
function lockIco(){return `<svg class="lock-ico" viewBox="0 0 24 24">${P.lock}</svg>`}

/* ---------- 语法专题数据 ---------- */
/* [id, 名称, 英文, 核心结构, 例句, 例句中文, 易错提示, 掌握度, 是否VIP锁, 标签, 随堂题] */
const RAW = {
  '小学': [
    ['p1','名词单复数','Plural Nouns','名词 + -s / -es；辅音 + y → -ies；不规则需单独记','I have two <hl>books</hl> and three <hl>boxes</hl>.','我有两本书和三个盒子。','不可数名词 water / milk / advice 不能加 -s；「一条建议」要说 a piece of advice。',82,0,'名词',['There are three ____ in the room.',['child','children','childs'],1,'three 后用复数；child 的复数是不规则形式 children，没有 childs 这个词。']],
    ['p2','人称代词','Personal Pronouns','主格作主语（I / he / she），宾格作宾语（me / him / her）','<hl>She</hl> helps <hl>me</hl> with my homework.','她帮我做作业。','动词和介词后一律用宾格，不说 between you and I。',70,0,'代词',['Please give ____ the book.',['I','me','my'],1,'give 是动词，后面的人称代词要用宾格 me。']],
    ['p3','一般现在时','Simple Present','主语 + 动词原形；第三人称单数动词 + -s / -es','He <hl>plays</hl> basketball every day.','他每天打篮球。','否定和疑问用 doesn\'t / does，后面的动词必须还原成原形。',64,0,'时态',['My sister ____ to school by bus every morning.',['go','goes','going'],1,'主语 My sister 是第三人称单数，动词加 -es → goes；every morning 表习惯。']],
    ['p4','There be 句型','There be','There is + 单数 / 不可数；There are + 复数；就近原则','<hl>There is</hl> a book and two pens on the desk.','桌上有一本书和两支笔。','英语里没有 There have；be 动词与最近的名词保持一致。',45,0,'句型',['____ some milk in the glass.',['There is','There are','There have'],0,'milk 是不可数名词，用 There is；There have 是典型中式英语。']]
  ],
  '初中': [
    ['j1','现在进行时','Present Continuous','am / is / are + 动词 -ing','Look! They <hl>are playing</hl> football.','看！他们正在踢足球。','know / like / belong 等状态动词一般不用进行时。',100,0,'时态',['Listen! Someone ____ in the next room.',['sings','is singing','sang'],1,'Listen! 是「此刻正在」的信号词，用 is singing。']],
    ['j2','一般过去时','Simple Past','动词过去式；否定 didn\'t + 动词原形','I <hl>visited</hl> my grandma last Sunday.','上周日我去看望了奶奶。','yesterday / last... / ...ago 是信号词；didn\'t 后动词一定要还原。',88,0,'时态',['I ____ to the cinema yesterday.',['go','went','have gone'],1,'yesterday 是明确的过去时间点，用一般过去时 went。']],
    ['j3','现在完成时','Present Perfect','have / has + 过去分词 (p.p.)','I <hl>have finished</hl> my homework already.','我已经完成作业了。','since + 时间点，for + 时间段；have been to（去过已回）≠ have gone to（去了未回）。',42,0,'时态',['She has lived here ____ 2019.',['for','since','in'],1,'2019 是时间点，用 since；for 后面接 six years 这类时间段。']],
    ['j4','情态动词','Modal Verbs','can / must / should + 动词原形','You <hl>should finish</hl> your homework first.','你应该先完成作业。','情态动词后不加 -s、不加 to（have to 除外），也没有三单变化。',0,1,'情态',['We ____ wear a seat belt in the car.',['must','musts','must to'],0,'情态动词 must 无人称变化，后面直接接动词原形。']]
  ],
  '高中': [
    ['h1','虚拟语气','Subjunctive Mood','If + 过去式，would + 动词原形（与现在事实相反）','If I <hl>were</hl> you, I <hl>would take</hl> the chance.','如果我是你，我会抓住这个机会。','与现在事实相反时，be 动词一律用 were，不用 was。',0,1,'虚拟',['If I ____ you, I would study harder.',['am','were','was'],1,'与现在事实相反的虚拟条件句，be 动词统一用 were。']],
    ['h2','非谓语动词','Non-finite Verbs','to do / doing / done 三大形式，句中不作谓语','<hl>Written</hl> in simple English, the book is easy to read.','这本书用浅显英语写成，很容易读。','先判断逻辑主语与动词是主动还是被动：主动用 doing，被动用 done。',0,1,'非谓语',['____ in 1998, the bridge is still in use.',['Building','Built','To build'],1,'bridge 与 build 是被动关系，用过去分词 Built 作状语。']],
    ['h3','定语从句','Attributive Clause','先行词 + which / who / that / where + 从句','The girl <hl>who</hl> sits next to me is from Chengdu.','坐我旁边的女孩来自成都。','先行词是人用 who / that，物用 which / that；从句缺宾语时关系代词可省略。',0,1,'从句',['This is the house ____ I was born.',['which','where','who'],1,'先行词是地点且从句缺地点状语，用关系副词 where（= in which）。']],
    ['h4','倒装句','Inversion','否定副词置于句首 → 助动词 + 主语 + 动词','<hl>Never have I</hl> seen such a beautiful sunset.','我从未见过这么美的日落。','never / seldom / hardly / only 放句首要「部分倒装」，不是把整个谓语提前。',0,1,'句型',['Seldom ____ late for class.',['he is','is he','he does'],1,'否定副词 Seldom 置句首，be 动词提到主语前构成部分倒装。']]
  ],
  '四六级': [
    ['c1','长难句拆解','Long Sentences','抓主句主干 → 剥离从句 / 插入语 / 非谓语','<hl>What matters</hl> is not how fast you learn, but how long you keep going.','重要的不是你学得多快，而是你能坚持多久。','先找谓语动词：一个句子只有一个主句谓语，其余都是修饰成分。',0,0,'句法',['____ matters most is consistency.',['That','What','Which'],1,'主语从句缺主语且指物，用 What 引导；That 引导主语从句时不在从句中作成分。']],
    ['c2','独立主格','Nominative Absolute','名词 / 代词 + 分词，自带逻辑主语作状语','<hl>Weather permitting</hl>, we will start at six.','天气允许的话，我们六点出发。','独立主格有自己的主语，不能既写成从句又不加连词。',0,1,'句法',['____, the meeting was put off.',['The manager was ill','The manager being ill','The manager ill'],1,'独立主格用「名词 + being + 形容词」作原因状语，不加连词。']],
    ['c3','强调句','Cleft Sentence','It is / was + 被强调部分 + that / who + 其余','<hl>It was</hl> in the library <hl>that</hl> I met her.','我是在图书馆遇到她的。','去掉 It is...that 后句子仍完整，才是强调句；别与定语从句混淆。',0,1,'句型',['____ was John who broke the window.',['It','That','This'],0,'强调句固定以 It is / It was 开头，被强调部分是人时可用 who。']],
    ['c4','省略与替代','Ellipsis','用 do / so / one / that 替代前文，避免重复','— Will the library be open? — I hope <hl>so</hl>.','— 图书馆会开门吗？— 希望如此。','hope / think / believe 后用 so 替代整个从句，否定用 not。',0,1,'句法',['— Will the library be open? — I hope ____.',['not','so','it'],1,'hope so 替代前文整个从句，是固定用法。']]
  ],
  '职场': [
    ['w1','邮件语法','Email Grammar','礼貌请求：Could you... / I was wondering if...','<hl>Could you</hl> please send me the report by Friday?','能否请您在周五前把报告发给我？','职场邮件避免祈使句 Send me...，用过去式表委婉而非过去时间。',0,0,'应用',['____ you please confirm the schedule?',['Can','Could','Will'],1,'Could you please... 是职场邮件最标准的礼貌请求句式。']],
    ['w2','时态与礼貌','Politeness Tense','过去式表委婉：I wanted / I was wondering','I <hl>was wondering</hl> if we could move the meeting.','我想知道会议能否改期。','这里的过去式不表过去，而是拉远距离、降低语气强度。',0,1,'应用',['I ____ if you had a minute to chat.',['wonder','wondered','am wondering'],1,'过去式 wondered 表委婉语气，不指过去时间。']],
    ['w3','会议发言','Meeting Language','提出观点：I would suggest / From my perspective','<hl>From my perspective</hl>, we should test it first.','在我看来，我们应该先测试。','避免反复 I think；agree 是动词，不说 I am agree。',0,1,'应用',['____, the timeline is too tight.',['I am agree','From my perspective','According to me'],1,'From my perspective 是标准会议开场；agree 前不能加 am。']],
    ['w4','中式英语纠偏','Chinglish Fixes','主语一致、避免冗余、注意介词搭配','✗ I very like it → <hl>I like it very much.</hl>','我非常喜欢它。','very 不能直接修饰动词；「有」别一律用 have，注意 there be。',0,1,'应用',['Choose the natural sentence:',['I very like this plan.','I like this plan very much.','I am very like it.'],1,'very 修饰形容词 / 副词，修饰动词要用 very much 放句末。']]
  ]
};
const STAGES = Object.keys(RAW);
const COLORS = ['p','o','g','b'];
const COLORMAP = {
  p:'var(--grad)',
  o:'var(--grad-warm)',
  g:'linear-gradient(135deg,#34D399,#10B981)',
  b:'linear-gradient(135deg,#5B8CFF,#3B6FE0)'
};
const TOPICS = {};
STAGES.forEach(st=>{
  TOPICS[st] = RAW[st].map((r,i)=>({
    id:r[0], name:r[1], en:r[2], struct:r[3], ex:r[4], exCn:r[5], tip:r[6], prog:r[7],
    vip:!!r[8], tag:r[9], icon:r[2][0], color:COLORS[i%4],
    quiz:{q:r[10][0], opts:r[10][1], ans:r[10][2], explain:r[10][3]}
  }));
});
function findTopic(id){for(const st of STAGES){const t=TOPICS[st].find(x=>x.id===id);if(t)return {t,st}}return {t:TOPICS['初中'][2],st:'初中'}}

/* ---------- 每日训练对话 ---------- */
const DAILY = [
  {q:'Hi! 我是 Gram 👋 今天练【现在完成时】。先热身：用 have / has + 过去分词补全句子 👇\nI ____ (finish) my report.',
   tip:'结构：have / has + 过去分词 (p.p.)',
   opts:[['I have finished my report.','✅ 完全正确！have + finished，表示「已经完成」，和中文的「了」对应。',1],
         ['I finish my report.','差一点～ 想强调「已经做完」要用 have finished，一般现在时只讲习惯。',0],
         ['I has finished my report.','注意主谓一致：I / you / we / they 搭配 have，只有三单用 has。',0]]},
  {q:'很好！现在造一个句子：说说你今天已经做过的一件事，用上 already 或 just。',
   tip:'信号词：already / just / yet / ever / never',
   opts:[['I have already watched an English video.','✅ 地道！already 放在 have 和过去分词之间，位置很标准。',1],
         ['I watch an English video yesterday.','yesterday 是过去时间点，要用一般过去时 watched；现在完成时不和明确过去时间连用。',0],
         ['I has finished my homework.','主语 I 要用 have，不是 has。改成 I have finished 就对了。',0]]},
  {q:'辨析题来了：since 和 for 怎么选？\nShe has worked here ____ six years.',
   tip:'since + 时间点（2019 / last Monday）；for + 时间段（six years / two weeks）',
   opts:[['for','✅ 正确！six years 是一段时间，用 for。',1],
         ['since','since 后面要接时间点，如 since 2019；six years 是时间段，要用 for。',0],
         ['from','from 不用于现在完成时表持续，这里需要 for 或 since。',0]]},
  {q:'改错练习：找出语法错误并选出正确版本。\nHe have been to Beijing three times.',
   tip:'三单主语用 has；have been to = 去过已回，have gone to = 去了没回',
   opts:[['He has been to Beijing three times.','✅ 完全正确！主语 He 是三单，用 has；been to 表示「去过」。',1],
         ['He have went to Beijing three times.','went 是过去式，不能和 have 连用；完成时要接过去分词 been / gone。',0],
         ['He is been to Beijing three times.','完成时助动词是 have / has，不是 be 动词 is。',0]]},
  {q:'最后一题：把「我去过上海两次」译成英文，注意 been / gone 的区别。',
   tip:'have been to 去过（已回）；have gone to 去了（还没回来）',
   opts:[['I have been to Shanghai twice.','✅ 满分收官！been to + twice，经历表达非常地道。',1],
         ['I have gone to Shanghai twice.','have gone to 表示「人已经去了、不在这里」，和 twice（经历次数）矛盾。',0],
         ['I went to Shanghai two times.','语法没错，但本题要练「到现在为止的经历」，用现在完成时更准确。',0]]}
];

/* ---------- 演讲脚本 ---------- */
const LEVELS = [
  {n:'L1',name:'自我介绍',desc:'5 句话 · 约 30 秒 · 免费',vip:0},
  {n:'L2',name:'描述日常',desc:'8 句话 · 约 60 秒',vip:1},
  {n:'L3',name:'观点表达',desc:'12 句话 · 约 90 秒',vip:1},
  {n:'L4',name:'主题演讲',desc:'完整结构 · 约 3 分钟',vip:1}
];
const SCRIPT = [
  {en:"Hi everyone, I'd like to introduce myself.",cn:'大家好，我想介绍一下自己。',tag:"would like to · 委婉表达"},
  {en:'My name is Li Hua, and I am a middle school student.',cn:'我叫李华，是一名初中生。',tag:'并列句 · and'},
  {en:'I have been learning English for six years.',cn:'我学英语已经六年了。',tag:'现在完成时 · for + 时间段',link:'j3'},
  {en:'In my free time, I enjoy reading and playing basketball.',cn:'空闲时我喜欢阅读和打篮球。',tag:'enjoy doing · 动名词'},
  {en:'Nice to meet you all, and I hope we can learn together.',cn:'很高兴认识大家，希望我们能一起学习。',tag:'宾语从句 · I hope (that)'}
];

/* ---------- VIP 套餐 ---------- */
const PLANS = [
  {id:'month',name:'连续包月',sub:'灵活尝鲜 · 随时取消',price:28,unit:'/月',old:'原价 ¥38',per:'日均 ¥0.93',tag:'',save:''},
  {id:'quarter',name:'连续包季',sub:'按季度稳步进阶',price:68,unit:'/季',old:'原价 ¥84',per:'折合 ¥22.7/月',tag:'',save:'省 24%'},
  {id:'year',name:'连续包年',sub:'系统学完一整年',price:198,unit:'/年',old:'原价 ¥336',per:'日均 ¥0.54',tag:'最受欢迎',save:'省 41%',popular:true},
  {id:'life',name:'终身会员',sub:'一次买断 · 永久可用',price:398,unit:'/永久',old:'原价 ¥598',per:'不再续费',tag:'',save:'限量'}
];

/* ---------- 状态 ---------- */
const DEFAULT_MISTAKES = [
  {id:'m1',q:'She has lived here ____ 2019.',mine:'for',right:'since',explain:'2019 是时间点，用 since；for 后接 six years 这类时间段。',src:'初中 · 现在完成时 · 今天',tag:'时态',mastered:false},
  {id:'m2',q:"I didn't ____ to school yesterday.",mine:'went',right:'go',explain:"didn't 是助动词 did 的否定，后面动词必须还原成原形 go。",src:'初中 · 一般过去时 · 昨天',tag:'时态',mastered:false},
  {id:'m3',q:'There are three ____ in the room.',mine:'childs',right:'children',explain:'child 的复数是不规则变化 children，不存在 childs。',src:'小学 · 名词单复数 · 3 天前',tag:'名词',mastered:false},
  {id:'m4',q:'Please give ____ the book.',mine:'I',right:'me',explain:'动词后的人称代词用宾格 me，主格 I 只作主语。',src:'小学 · 人称代词 · 5 天前',tag:'代词',mastered:true}
];
const S = {
  view:'home', tab:'home', stage:'初中', vipFrom:'home',
  vip:false, plan:'year', agreed:true,
  points:1280, streak:12, totalMin:436, masteredN:38,
  dailyTopic:'现在完成时',
  detailTab:'讲解',
  course:null,
  daily:{step:0,msgs:[],correct:0,done:false,typing:false},
  speech:{active:false,line:0,recording:false,scores:null,checked:[],done:false},
  mistakes:JSON.parse(JSON.stringify(DEFAULT_MISTAKES)),
  mkFilter:'全部',
  _top:false
};
try{
  const saved = JSON.parse(localStorage.getItem('gramstep_v1')||'{}');
  ['vip','plan','stage','points','streak','mistakes','dailyTopic','masteredN','totalMin'].forEach(k=>{
    if(saved[k]!==undefined) S[k]=saved[k];
  });
}catch(e){}
function save(){
  try{localStorage.setItem('gramstep_v1',JSON.stringify({
    vip:S.vip,plan:S.plan,stage:S.stage,points:S.points,streak:S.streak,
    mistakes:S.mistakes,dailyTopic:S.dailyTopic,masteredN:S.masteredN,totalMin:S.totalMin
  }))}catch(e){}
}

/* ---------- 工具 ---------- */
const $ = s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._tm); t._tm=setTimeout(()=>t.classList.remove('show'),2200);
}
function ring(pct){
  const c=2*Math.PI*30;
  return `<div class="ring"><svg viewBox="0 0 74 74"><circle class="ring-bg" cx="37" cy="37" r="30" fill="none" stroke-width="7"/><circle class="ring-fg" cx="37" cy="37" r="30" fill="none" stroke-width="7" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-pct/100)}"/></svg><div class="ring-txt">${pct}%</div></div>`;
}
function openModal(html,center=false){
  $('#modalRoot').innerHTML=`<div class="modal-backdrop ${center?'modal-center':''}" data-action="close-modal"><div class="${center?'modal-card':'sheet'}" data-stop="1">${center?'':'<div class="sheet-bar"></div>'}${html}</div></div>`;
}
function closeModal(){$('#modalRoot').innerHTML=''}
function go(view,tab){
  S.view=view; if(tab)S.tab=tab; S._top=true; render();
}
function currentTopic(){
  const list=TOPICS[S.stage];
  const learning=list.filter(x=>!x.vip&&x.prog>0&&x.prog<100).sort((a,b)=>a.prog-b.prog);
  if(learning.length)return learning[0];
  let t=list.find(x=>!x.vip&&x.prog<100);
  if(!t)t=list.find(x=>!x.vip)||list[0];
  return t;
}

/* ---------- 渲染主入口 ---------- */
function render(){
  const v=$('#view');
  const keep=v.scrollTop;
  const draft=v.querySelector('.chat-bar input');
  const draftVal=draft?draft.value:null;
  v.className='view'+(S.view==='vip'?' white':'');
  const map={
    home:renderHome, course:renderCourse, daily:renderDaily, speech:renderSpeech,
    mistakes:renderMistakes, mine:renderMine, vip:renderVip
  };
  v.innerHTML=(map[S.view]||renderHome)();
  const bar=$('#tabbar');
  bar.style.display=S.view==='vip'?'none':'flex';
  bar.innerHTML=TABS.map(t=>`<button class="tab ${S.tab===t.k?'active':''}" data-action="tab" data-tab="${t.k}">${ic(t.i)}<span>${t.n}</span>${t.k==='mine'&&S.vip?'<i class="tab-vip"></i>':''}</button>`).join('');
  if(S._top){v.scrollTop=0;S._top=false}else{v.scrollTop=keep}
  if(draftVal!==null&&S.view==='daily'){const i=v.querySelector('.chat-bar input');if(i)i.value=draftVal}
  const cd=$('#cd'); if(cd)cd.textContent=fmtCD();
}
const TABS=[
  {k:'home',n:'学习',i:'book'},{k:'daily',n:'每日训练',i:'chat'},{k:'speech',n:'演讲',i:'mic'},
  {k:'mistakes',n:'错题本',i:'clip'},{k:'mine',n:'我的',i:'user'}
];

/* ---------- 首页 / 语法学习 ---------- */
function renderHome(){
  const t=currentTopic();
  const topics=TOPICS[S.stage];
  const doneN=topics.filter(x=>x.prog>=100).length;
  return `
  <div class="home-top">
    <div class="row between">
      <div><div class="greet">早上好，继续加油 👋<b>今天想学点什么？</b></div></div>
      <div class="streak-pill">${ic('flame')} 连续 ${S.streak} 天</div>
    </div>
  </div>

  <div class="hero">
    <div class="kicker">${S.stage.toUpperCase()} · 当前学习单元</div>
    <div class="title">${esc(t.name)} <span style="opacity:.7;font-size:13px;font-weight:600">${esc(t.en)}</span></div>
    <div class="desc">已学 ${doneN}/${topics.length} 个专题 · 今日 AI 训练已对齐本单元</div>
    <div class="hero-row">
      ${ring(t.prog)}
      <div class="hero-metrics">
        <div><span>掌握度</span><b>${t.prog}%</b></div>
        <div><span>已获积分</span><b>${S.points}</b></div>
        <div><span>累计时长</span><b>${(S.totalMin/60).toFixed(1)}h</b></div>
      </div>
    </div>
    <button class="hero-cta" data-action="open-course" data-id="${t.id}">继续学习 · ${esc(t.name)} ${ic('right')}</button>
  </div>

  <div class="quick-grid">
    <button class="quick" data-action="tab" data-tab="daily"><div class="qi o">${ic('chat')}</div><span>每日训练</span></button>
    <button class="quick" data-action="tab" data-tab="speech"><div class="qi b">${ic('mic')}</div><span>演讲跟读</span></button>
    <button class="quick" data-action="tab" data-tab="mistakes"><div class="qi g">${ic('clip')}</div><span>错题本</span></button>
    <button class="quick" data-action="vip" data-from="home"><div class="qi p">${ic('crown')}</div><span>${S.vip?'VIP 已开':'开通 VIP'}</span></button>
  </div>

  <div class="sec-title"><div class="h2">语法地图 <span class="muted small" style="font-weight:600">按学段系统学</span></div><span class="more">${topics.length} 个专题</span></div>
  <div class="stage-switch">
    ${STAGES.map(st=>`<button class="stage-pill ${st===S.stage?'active':''}" data-action="stage" data-stage="${st}">${st}</button>`).join('')}
  </div>
  <div class="tiny muted" style="padding:9px 20px 2px">${S.vip?'✓ VIP 已解锁全部学段':'免费开放：小学全阶段 + 初中前 3 课；其余专题开通 VIP 后解锁'}</div>

  <div class="topic-list mt12">
    ${topics.map(x=>{
      const locked=x.vip&&!S.vip;
      return `<button class="topic ${locked?'locked':''}" data-action="topic" data-id="${x.id}">
        <div class="t-icon" style="border-radius:13px;background:${COLORMAP[x.color]};color:#fff">${x.icon}</div>
        <div class="t-body">
          <div class="t-name">${esc(x.name)} ${locked?lockIco():(x.prog>=100?'<span class="badge green">已掌握</span>':(x.id===t.id?'<span class="badge">学习中</span>':''))}</div>
          <div class="t-en">${esc(x.en)} · ${esc(x.struct)}</div>
          <div class="t-prog"><div class="progress"><i style="width:${x.prog}%"></i></div><span>${x.prog}%</span></div>
        </div>
        <div class="t-arrow">${locked?vipTag():ic('right')}</div>
      </button>`
    }).join('')}
  </div>

  <div class="sec-title"><div class="h2">今日一句</div></div>
  <div class="quote-card">
    <div class="row between"><span class="badge gold">${esc(t.name)}</span><span class="tiny muted">每日更新</span></div>
    <div class="quote-en mt10">“I <span style="color:#B45309">have finished</span> my homework already.”</div>
    <div class="quote-cn">我已经完成作业了。— 来自你今天正在学的语法点</div>
  </div>
  <div style="height:14px"></div>`;
}

/* ---------- 课程详情 ---------- */
function renderCourse(){
  const c=S.course; if(!c)return renderHome();
  const {t,st}=findTopic(c.id);
  const qs=[t.quiz, TOPICS[st][(TOPICS[st].findIndex(x=>x.id===t.id)+1)%TOPICS[st].length].quiz];
  const head=`
    <div class="detail-head">
      <button class="back-btn" data-action="back">${ic('back')}</button>
      <div class="dh-kicker">${st.toUpperCase()} · GRAMMAR LESSON</div>
      <div class="dh-title">${esc(t.name)}</div>
      <div class="dh-en">${esc(t.en)} · ${esc(t.struct)}</div>
      <div class="dh-meta"><span>⏱ 约 8 分钟</span><span>📝 ${qs.length} 道随堂题</span><span>🎯 掌握度 ${t.prog}%</span></div>
    </div>
    <div class="tabs-line">
      ${['讲解','例句','练习'].map(x=>`<div class="${S.detailTab===x?'active':''}" data-action="detail-tab" data-tab="${x}">${x}</div>`).join('')}
    </div>`;
  if(S.detailTab==='讲解'){
    return head+`
      <div class="block"><div class="block-card">
        <div class="block-label"><span class="num">1</span> 是什么 · 一句话理解</div>
        <div class="block-text"><b>${esc(t.name)}（${esc(t.en)}）</b>表示${t.id==='j3'?'过去发生、对现在有影响的动作或持续到现在的状态':'这一语法点的核心用法'}。先用一句话记住它，再往下看结构，不要死背定义。</div>
        <div class="formula">${esc(t.struct)}<small>核心结构 · 先背公式，再套句子</small></div>
      </div></div>
      <div class="block"><div class="block-card">
        <div class="block-label"><span class="num">2</span> 怎么用 · 结构 + 信号词</div>
        <div class="block-text">把主语、助动词、动词形式按顺序摆好，句子就不会错。看到下面这些信号词，优先想到本单元。</div>
        <div class="signal">${(t.id==='j3'?['already','yet','just','ever','never','since','for','so far']:['every day','usually','yesterday','Look!','Listen!','always']).map(x=>`<span>${x}</span>`).join('')}</div>
        <div class="example-en mt14">${t.ex}</div>
        <div class="example-cn">${esc(t.exCn)}</div>
      </div></div>
      <div class="block"><div class="block-card">
        <div class="block-label"><span class="num">3</span> 别踩坑 · 高频易错</div>
        <div class="tip-box"><b>⚠️ 易错提示</b><br>${esc(t.tip)}</div>
        <div class="block-text mt12">这一条几乎出现在每一次考试和每一次口语表达里，建议点右上角收藏，明天再回看一次。</div>
      </div></div>
      <div class="pad mt20"><button class="btn btn-primary" data-action="detail-tab" data-tab="练习">学完了，做 2 道随堂题 ${ic('right')}</button></div>
      <div style="height:12px"></div>`;
  }
  if(S.detailTab==='例句'){
    return head+`
      <div class="block"><div class="block-card">
        <div class="block-label"><span class="num">A</span> 典型例句 · 结构高亮</div>
        <div class="example-en">${t.ex}</div>
        <div class="example-cn">${esc(t.exCn)}</div>
        <div class="divider"></div>
        <div class="block-label"><span class="num">B</span> 换个主语再说一遍</div>
        <div class="example-en">${t.ex}</div>
        <div class="example-cn">${esc(t.exCn)}　试着把主语换掉再练一遍，注意助动词与动词形式是否要跟着变化。</div>
        <div class="divider"></div>
        <div class="block-label"><span class="num">C</span> 关联演讲句型</div>
        <div class="example-en">I have been learning English for six years.</div>
        <div class="example-cn">来自演讲 L1「自我介绍」第 3 句，学完直接开口用。</div>
        <button class="btn btn-ghost btn-sm mt14" data-action="link-topic" data-id="j3">查看关联语法 · 现在完成时</button>
      </div></div>
      <div class="pad mt18"><button class="btn btn-primary" data-action="detail-tab" data-tab="练习">进入随堂练习 ${ic('right')}</button></div>
      <div style="height:12px"></div>`;
  }
  // 练习
  if(c.done){
    return head+`
      <div class="result-hero">
        <div class="result-emoji">${c.score>=100?'🏆':'💪'}</div>
        <div class="result-score">${c.score}<small> 分</small></div>
        <div class="muted small mt8">答对 ${c.right}/${qs.length} 题 · 积分 +${c.right*10} · 掌握度 +${c.right*8}%</div>
      </div>
      <div class="pad">
        <div class="card card-pad">
          <div class="h3">本次学习小结</div>
          <div class="small muted mt8" style="line-height:1.9">${c.right===qs.length?'全部答对，这个语法点稳了。下一步用 AI 问答把它「说」出来，记得才牢。':'有题目答错了没关系，已经自动收进错题本，明天会安排同类型变式题。'}</div>
          <div class="divider"></div>
          <div class="row between"><span class="small">今日 AI 训练主题</span><span class="badge">${esc(S.dailyTopic)}</span></div>
        </div>
        <button class="btn btn-primary mt16" data-action="daily-go">进入今日 AI 训练 ${ic('right')}</button>
        <button class="btn btn-ghost mt10" data-action="back">返回语法地图</button>
      </div>
      <div style="height:12px"></div>`;
  }
  const q=qs[c.qi];
  const picked=c.picked;
  return head+`
    <div class="block"><div class="quiz-card">
      <div class="row between"><span class="quiz-idx">QUESTION ${c.qi+1} / ${qs.length}</span><span class="badge gray">${c.qi===0?esc(t.name):'随堂巩固'}</span></div>
      <div class="quiz-q">${esc(q.q)}</div>
      <div class="quiz-opts">
        ${q.opts.map((o,i)=>{
          let cls='';
          if(picked!==null){ if(i===q.ans)cls='correct'; else if(i===picked)cls='wrong'; else cls='disabled'; }
          return `<button class="quiz-opt ${cls}" data-action="quiz-pick" data-i="${i}" ${picked!==null?'disabled':''}><span class="ol">${'ABCD'[i]}</span>${esc(o)}</button>`
        }).join('')}
      </div>
      ${picked!==null?`<div class="explain ${picked===q.ans?'ok':'no'}"><b>${picked===q.ans?'✅ 回答正确':'❌ 答错了，已加入错题本'}</b>${esc(q.explain)}</div>
        <button class="btn ${c.qi+1<qs.length?'btn-primary':'btn-warm'} mt14" data-action="quiz-next">${c.qi+1<qs.length?'下一题':'查看学习结算'} ${ic('right')}</button>`:''}
    </div></div>
    <div class="pad mt14"><div class="tiny muted" style="line-height:1.8">💡 答错的题目会自动进入「错题本」，并带上来源专题与解析，复习时可直接重做。</div></div>
    <div style="height:12px"></div>`;
}

/* ---------- 每日训练 ---------- */
function dailyQuestion(step){
  return {ai:DAILY[step].q, tip:DAILY[step].tip, kind:'q'};
}
function ensureDaily(){
  if(S.daily.msgs.length===0){
    S.daily.msgs.push({ai:`Hi! 我是 Gram 👋 今天的训练主题是【${S.dailyTopic}】，和你正在学的语法课完全对应。我们边聊边练，共 5 轮～`,kind:'intro'});
    S.daily.msgs.push(dailyQuestion(0));
  }
}
function renderDaily(){
  ensureDaily();
  const d=S.daily;
  const step=Math.min(d.step,DAILY.length-1);
  const locked=!S.vip&&d.step>=3&&!d.done;
  return `
    <div class="page-head"><div><div class="h1">每日训练</div><div class="sub">每天 10 分钟，把语法「说」出来</div></div>
      <button class="icon-btn" data-action="refresh-daily">${ic('refresh')}</button></div>
    <div class="daily-top">
      <div class="daily-topic">
        <div class="dt-icon">G</div>
        <div><div class="dt-name">今日主题 · ${esc(S.dailyTopic)}</div><div class="dt-sub">自动对齐你正在学的语法课，无需选择</div></div>
      </div>
      <div class="daily-prog"><div class="progress"><i style="width:${Math.min(d.step,5)/5*100}%"></i></div><span>${Math.min(d.step,5)}/5 轮</span></div>
    </div>

    <div class="chat">
      ${d.msgs.map(m=>{
        if(m.typing)return `<div class="bubble-row"><div class="avatar">G</div><div class="bubble"><div class="typing"><i></i><i></i><i></i></div></div></div>`;
        if(m.me)return `<div class="bubble-row me"><div class="avatar me">我</div><div class="bubble">${esc(m.me)}</div></div>`;
        return `<div class="bubble-row"><div class="avatar">G</div><div class="bubble">${esc(m.ai).replace(/\n/g,'<br>')}${m.tip?`<div class="b-tip">💡 ${esc(m.tip)}</div>`:''}</div></div>`;
      }).join('')}
    </div>

    ${d.done?`
      <div class="report-card fade">
        <div class="row between"><div class="h3">今日训练报告</div><span class="badge gold">已完成</span></div>
        <div class="report-ring mt14">${ring(Math.round(d.correct/5*100))}
          <div><div class="h2">${d.correct}/5 轮答对</div><div class="report-kv"><div><span>掌握度</span><b>+${d.correct*3}%</b></div><div><span>积分</span><b>+${d.correct*10}</b></div></div></div>
        </div>
        <div class="divider"></div>
        <div class="small muted" style="line-height:1.8">已生成 1 张复习卡：${esc(S.dailyTopic)} 的 since / for 辨析，明天会优先安排变式题。</div>
        <button class="btn btn-primary mt14" data-action="tab" data-tab="home">回到语法地图 ${ic('right')}</button>
      </div>`
    :locked?`
      <div class="limit-bar fade"><span>🆓 免费版每日 3 轮已用完，开通 VIP 无限练</span><button data-action="vip" data-from="limit">解锁</button></div>
      <div class="quick-replies mt12">
        ${DAILY[step].opts.map((o,i)=>`<button class="qr wide" data-action="daily-pick" data-i="${i}">${esc(o[0])}</button>`).join('')}
      </div>`
    :`
      <div class="quick-replies">
        ${DAILY[step].opts.map((o,i)=>`<button class="qr" data-action="daily-pick" data-i="${i}">${esc(o[0])}</button>`).join('')}
        <button class="qr" data-action="daily-hint">💡 给点提示</button>
      </div>
      <div class="chat-bar">
        <button class="cb-btn" data-action="voice" title="语音输入">${ic('mic')}</button>
        <input id="chatInput" placeholder="也可以自己输入一句英文…"/>
        <button class="cb-btn" data-action="daily-hint" title="提示">${ic('bulb')}</button>
        <button class="cb-btn send" data-action="daily-send">${ic('send')}</button>
      </div>`}
    <div style="height:16px"></div>`;
}

/* ---------- 演讲 ---------- */
function renderSpeech(){
  const s=S.speech;
  const hero=`
    <div class="page-head"><div><div class="h1">演讲学习</div><div class="sub">从一句自我介绍，到一场完整演讲</div></div>
      <span class="badge gray" style="margin-top:4px">${s.checked.length}/5 句</span></div>
    <div class="speech-hero">
      <div class="sh-tag">SPEAKING PATH · 4 LEVELS</div>
      <div class="sh-title">开口，是语法最好的复习</div>
      <div class="sh-desc">每句脚本都标注了它用到的语法点，学完就能讲出来。跟读后即时得到四维评分。</div>
      <button class="sh-btn" data-action="speech-start">${s.active?`继续 L1 · 第 ${Math.min(s.line+1,5)}/5 句`:'开始 L1 · 自我介绍'} ${ic('right')}</button>
    </div>`;
  const path=`
    <div class="sec-title"><div class="h2">进阶路径</div><span class="more">${s.checked.length}/5 句已跟读</span></div>
    <div class="path">
      ${LEVELS.map((l,i)=>{
        const locked=l.vip&&!S.vip;
        const done=i===0&&s.done;
        return `<button class="level ${locked?'locked':''} ${done?'done':''}" data-action="speech-level" data-i="${i}">
          <div class="lv-num">${done?'✓':l.n}</div>
          <div class="lv-body"><div class="lv-name">${l.name} ${locked?lockIco():''}${i===0&&!locked?'<span class="badge green">免费</span>':''}</div><div class="lv-desc">${l.desc}</div></div>
          <div class="lv-badge">${locked?vipTag():(done?'已完成':(i===0?'去跟读 →':'未解锁'))}</div>
        </button>`
      }).join('')}
    </div>`;
  if(!s.active){
    return hero+path+`
      <div class="sec-title"><div class="h2">为什么这样设计</div></div>
      <div class="block" style="margin-top:0"><div class="block-card">
        <div class="small" style="line-height:1.95;color:var(--ink-2)">① <b>先有输入</b>：脚本全部来自你学过的语法点，例如 L1 第 3 句用「现在完成时」。<br>② <b>再跟读输出</b>：逐句录音，从 30 秒开始，不怯场。<br>③ <b>即时反馈</b>：发音 / 流利度 / 语法 / 完整度四维评分，指出最需要改的一处。</div>
        <button class="btn btn-ghost btn-sm mt14" data-action="link-topic" data-id="j3">看 L1 关联语法 · 现在完成时</button>
      </div></div>
      <div style="height:16px"></div>`;
  }
  if(s.done){
    return hero+path+`
      <div class="rec-panel mt14 fade">
        <div class="success-emoji" style="width:64px;height:64px;font-size:30px">🎤</div>
        <div class="h2 mt14">L1 自我介绍 · 通关！</div>
        <div class="small muted mt8" style="line-height:1.8">5 句全部完成，平均 ${s.avg||90} 分。你已经能用英语做一次完整自我介绍了。</div>
        <div class="divider"></div>
        <div class="small" style="text-align:left;line-height:1.9">✅ 掌握 4 个语法点：would like to / 并列句 / 现在完成时 / enjoy doing<br>🎯 下一步：L2 描述日常，把句子拉长到 60 秒</div>
        <button class="btn btn-primary mt14" data-action="vip" data-from="speech">解锁 L2–L4 全部演讲课</button>
        <button class="btn btn-ghost mt10" data-action="speech-restart">再练一遍 L1</button>
      </div>
      <div style="height:16px"></div>`;
  }
  const line=SCRIPT[s.line];
  return hero+`
    <div class="sec-title"><div class="h2">L1 · 自我介绍脚本</div><span class="more">第 ${s.line+1}/5 句</span></div>
    <div class="script-card">
      ${SCRIPT.map((x,i)=>`<div class="script-line ${i===s.line?'active':''}">
        <div class="row between"><div class="sl-en">${s.checked.includes(i)?'<span style="color:var(--green)">✓ </span>':''}${esc(x.en)}</div>${s.checked.includes(i)?'<div class="sl-check">✓</div>':''}</div>
        <div class="sl-cn">${esc(x.cn)}</div>
        <div class="sl-tag">${ic('bulb')} ${esc(x.tag)}</div>
      </div>`).join('')}
    </div>
    <div class="rec-panel">
      ${s.recording?`
        <div class="small muted">正在跟读，请读出上面高亮的第 ${s.line+1} 句…</div>
        <div class="wave">${Array.from({length:13},(_,i)=>`<i style="animation-delay:${i*0.07}s"></i>`).join('')}</div>
        <div class="small muted mt8">录音中 · 00:0${s.line+1}</div>`
      :s.scores?`
        <div class="h3">跟读评分 · 第 ${s.line+1} 句</div>
        <div class="score-total">${s.scores.total} <span style="font-size:12px;color:var(--muted);font-weight:600">分</span></div>
        ${[['发音',s.scores.a],['流利度',s.scores.b],['语法',s.scores.c],['完整度',s.scores.d]].map(r=>`<div class="score-row"><span>${r[0]}</span><div class="progress"><i style="width:${r[1]}%"></i></div><b>${r[1]}</b></div>`).join('')}
        <div class="tip-box" style="text-align:left;margin-top:14px"><b>💡 教练建议</b><br>整体很稳！最值得保留的是重读节奏；注意 <b>${esc(line.tag.split(' · ')[0])}</b> 的结构别漏掉，下一句我们继续。</div>
        <button class="btn btn-primary mt14" data-action="speech-next">${s.line+1<SCRIPT.length?'下一句 →':'完成 L1 通关'} ${ic('right')}</button>`
      :`
        <div class="h3">第 ${s.line+1} 句 · 跟读练习</div>
        <div class="example-en mt8" style="text-align:center">${esc(line.en)}</div>
        <div class="small muted mt8">${esc(line.tag)}</div>
        <button class="rec-btn mt14" data-action="speech-record">${ic('mic')}</button>
        <div class="small muted mt10">点按开始跟读 · 约 3 秒</div>
        ${line.link?`<button class="btn btn-ghost btn-sm mt14" data-action="link-topic" data-id="${line.link}">查看本句关联语法</button>`:''}
        <button class="btn btn-outline btn-sm mt10" data-action="speech-skip">先跳过这句</button>`}
    </div>
    <div style="height:16px"></div>`;
}

/* ---------- 错题本 ---------- */
function renderMistakes(){
  const all=S.mistakes;
  const wait=all.filter(x=>!x.mastered).length;
  const ok=all.filter(x=>x.mastered).length;
  let list=all;
  if(S.mkFilter!=='全部'){
    list=all.filter(x=>S.mkFilter==='未掌握'?!x.mastered:x.tag===S.mkFilter);
  }
  return `
    <div class="page-head"><div><div class="h1">错题本</div><div class="sub">语法练习做错的题，自动收进这里</div></div>
      <button class="icon-btn" data-action="tab" data-tab="daily">${ic('chat')}</button></div>
    <div class="stat-3">
      <div class="stat-card c1"><b>${all.length}</b><span>累计错题</span></div>
      <div class="stat-card c2"><b>${wait}</b><span>待复习</span></div>
      <div class="stat-card c3"><b>${ok}</b><span>已掌握</span></div>
    </div>

    ${!S.vip?`<div class="smart-lock mt16">
      <div class="sl-ico">✨</div>
      <div class="sl-txt"><b>智能复习 · 生成专项卷</b><span>按遗忘曲线安排复习，把同考点错题自动组卷，效率提升 3 倍</span></div>
      <button data-action="vip" data-from="mistakes">解锁</button>
    </div>`:`<div class="smart-lock mt16" style="background:#F0FDF4;border-color:#BBF7D0">
      <div class="sl-ico" style="background:linear-gradient(135deg,#34D399,#10B981)">✓</div>
      <div class="sl-txt"><b>智能复习已开启</b><span>今天有 ${wait} 道错题到复习时间，已为你排好顺序</span></div>
      <button data-action="smart-review" style="background:#15803D;color:#fff">开始</button>
    </div>`}

    <div class="chips mt16">
      ${['全部','时态','从句','语态','未掌握'].map(f=>`<button class="chip ${S.mkFilter===f?'active':''}" data-action="mk-filter" data-f="${f}">${f}</button>`).join('')}
    </div>

    ${list.length===0?`<div class="empty"><div class="e-ico">🎉</div><p>这个分类下没有错题</p><span>继续保持，去做一课练习吧</span><button class="btn btn-primary btn-sm mt16" style="margin-left:auto;margin-right:auto" data-action="tab" data-tab="home">去学语法</button></div>`
    :`<div class="mk-list mt12">${list.map(m=>`
      <div class="mk-card ${m.mastered?'mastered':''}">
        <div class="mk-top"><span class="badge ${m.mastered?'green':'red'}">${m.mastered?'已掌握':esc(m.tag)}</span><span class="mk-src">${esc(m.src)}</span></div>
        <div class="mk-q">${esc(m.q)}</div>
        <div class="mk-ans"><div class="no"><span>我的答案</span>${esc(m.mine)}</div><div class="yes"><span>正确答案</span>${esc(m.right)}</div></div>
        <div class="mk-ex">💡 ${esc(m.explain)}</div>
        <div class="mk-foot"><button class="btn btn-ghost" data-action="mk-redo" data-id="${m.id}">重做一遍</button>
          <button class="btn btn-outline" data-action="mk-master" data-id="${m.id}">${m.mastered?'取消标记':'标记已掌握'}</button></div>
      </div>`).join('')}</div>`}
    <div style="height:16px"></div>`;
}

/* ---------- 我的（保留既有） ---------- */
function renderMine(){
  const wait=S.mistakes.filter(x=>!x.mastered).length;
  return `
    <div class="page-head"><div><div class="h1">我的</div><div class="sub">已有模块 · 本次仅新增 VIP 身份与入口</div></div>
      <button class="icon-btn">${ic('settings')}</button></div>
    <div class="mine-head">
      <div class="mine-avatar">L${S.vip?'<div class="crown">👑</div>':''}</div>
      <div><div class="mine-name">李华 ${S.vip?vipTag():''}</div><div class="mine-sub">${S.vip?'VIP 会员 · 全部权益已解锁':'免费用户 · 已坚持学习 '+S.streak+' 天'}</div></div>
      <div style="margin-left:auto">${ic('right')}</div>
    </div>
    <div class="mine-stats">
      <div><b>${S.streak}</b><span>连续天数</span></div>
      <div><b>${S.totalMin}</b><span>学习分钟</span></div>
      <div><b>${S.masteredN}</b><span>掌握语法</span></div>
      <div><b>${wait}</b><span>待复习</span></div>
    </div>

    ${S.vip?`<div class="mine-banner" style="background:linear-gradient(115deg,#EAE6FF,#DED7FF)">
      <div class="mb-ico">👑</div><div class="mb-txt"><b>VIP 会员 · ${esc((PLANS.find(p=>p.id===S.plan)||PLANS[2]).name)}</b><span>全学段课程、无限 AI 训练、L1–L4 演讲已解锁</span></div>
      <button data-action="vip" data-from="mine">查看权益</button></div>`
    :`<div class="mine-banner">
      <div class="mb-ico">👑</div><div class="mb-txt"><b>开通 VIP，解锁全部语法课</b><span>年卡日均 ¥0.54 · 限时 5 折优惠中</span></div>
      <button data-action="vip" data-from="mine">立即开通</button></div>`}

    <div class="list-card">
      ${[
        ['chart','学习报告','已有模块',''],
        ['star','我的收藏','已有模块',''],
        ['gift','学习计划','已有模块',''],
        ['down','离线下载','已有模块','VIP'],
        ['shield','账号与安全','已有模块',''],
        ['help','帮助与反馈','已有模块','']
      ].map(r=>`<div class="list-row"><div class="lr-ico">${ic(r[0])}</div><span>${r[1]}</span>${r[3]&&!S.vip?vipTag():`<span class="lr-note">${r[2]}</span>`}<div class="lr-arrow">${ic('right')}</div></div>`).join('')}
    </div>
    <div class="tiny muted" style="text-align:center;padding:20px 20px 4px;line-height:1.7">语阶 GramStep · v1.0 原型<br>「我的」页面沿用既有设计，未做功能改动</div>
    <div style="height:12px"></div>`;
}

/* ---------- VIP 订阅页 ---------- */
let cdLeft=2*3600+59*60+59;
function fmtCD(){
  const h=Math.floor(cdLeft/3600),m=Math.floor(cdLeft%3600/60),s=cdLeft%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
setInterval(()=>{if(cdLeft>0)cdLeft--;const el=$('#cd');if(el)el.textContent=fmtCD()},1000);

function renderVip(){
  const p=PLANS.find(x=>x.id===S.plan)||PLANS[2];
  return `<div class="vip-page">
    <div class="vip-hero">
      <button class="icon-btn" style="position:absolute;left:20px;top:18px" data-action="vip-back">${ic('back')}</button>
      <div class="vip-crown">👑</div>
      <h1>解锁全部语法<br>讲出一口好英语</h1>
      <p>全学段课程 · 无限 AI 陪练 · 完整演讲训练</p>
      <div class="countdown">⚡ 限时 5 折 · 距结束 <b id="cd">${fmtCD()}</b></div>
    </div>

    <div class="plan-list">
      ${PLANS.map(x=>`
        <button class="plan ${x.popular?'popular':''} ${S.plan===x.id?'selected':''}" data-action="plan" data-id="${x.id}">
          ${x.tag?`<div class="plan-ribbon">${x.tag}</div>`:''}
          <div class="radio"><i></i></div>
          <div class="p-body">
            <div class="p-name">${x.name}${x.save?`<span class="badge ${x.popular?'gold':'gray'}" style="font-size:9px;padding:2px 6px">${x.save}</span>`:''}</div>
            <div class="p-sub">${x.sub}</div>
          </div>
          <div class="p-price">
            <div class="pp-main"><i>¥</i><b>${x.price}</b><span>${x.unit}</span></div>
            <div class="pp-old">${x.old}</div>
            <div class="pp-per">${x.per}</div>
          </div>
        </button>`).join('')}
    </div>
    <div class="tiny muted" style="text-align:center;margin-top:10px">默认已为你选中最划算的「连续包年」· 日均低至 ¥0.54</div>

    <div class="compare">
      <div class="h3" style="margin-bottom:12px">权益对比</div>
      <table>
        <tr><th>权益</th><th>免费</th><th style="color:var(--gold)">VIP</th></tr>
        ${[
          ['全学段语法精讲课','小学 + 初中 3 课','全部'],
          ['每日 AI 互动训练','3 轮 / 日','无限次'],
          ['演讲课程与 AI 评分','仅 L1','L1–L4'],
          ['错题智能复习 · 专项卷','—','✓'],
          ['深度学情报告 · 能力雷达','周简报','✓'],
          ['专属计划 · 离线下载 · 去广告','—','✓']
        ].map(r=>`<tr><td>${r[0]}</td><td class="no">${r[1]}</td><td class="yes">${r[2]}</td></tr>`).join('')}
      </table>
    </div>

    <div class="pay-area">
      <div class="agree"><span class="box ${S.agreed?'on':''}" data-action="agree">${S.agreed?'✓':''}</span>已阅读并同意《用户协议》《隐私政策》· 自动续费可随时取消</div>
      <div class="pay-note">首月 ¥12 试用（仅包月）· 订阅后权益即时生效 · 未成年人请在家长指导下购买<br>支付为原型演示，不会产生真实扣款</div>
      <div class="row between mt18"><span class="tiny muted">已有 <b style="color:var(--ink)">28,461</b> 人加入 VIP</span><span class="tiny muted">⭐ 4.9 / 5.0 好评</span></div>
    </div>

    <div class="vip-paybar">
      <div class="pb-price"><span>应付 · ${p.name}</span><b><i>¥</i>${p.price}</b></div>
      <button class="btn btn-gold" data-action="pay">${S.vip?'已开通 · 查看权益':'立即开通'} ${ic('right')}</button>
    </div>
  </div>`;
}

/* ---------- 事件 ---------- */
function pushMistake(q,mine,right,explain,src,tag){
  if(S.mistakes.some(x=>x.q===q&&x.mine===mine))return;
  S.mistakes.unshift({id:'m'+Date.now(),q,mine,right,explain,src,tag,mastered:false});
  save();
}
function openCourse(id){
  const {t}=findTopic(id);
  S.course={id,qi:0,picked:null,done:false,right:0,score:0};
  S.detailTab='讲解';
  S.dailyTopic=t.name;
  go('course','home');
}
function openVip(from){
  S.vipFrom=from||'home';
  go('vip',S.tab);
}
function vipReturnView(f){
  return ({topic:'home',limit:'daily',speech:'speech',mistakes:'mistakes',mine:'mine',home:'home'})[f]||'home';
}
function chatBottom(){const v=$('#view');if(v)v.scrollTop=v.scrollHeight}
function paySuccess(){
  S.vip=true; S.points+=100; save();
  const from=S.vipFrom;
  openModal(`
    <div class="success-emoji">👑</div>
    <div class="success-title">开通成功！</div>
    <div class="success-sub">欢迎加入语阶 VIP，全部权益已即时生效<br>已为你点亮全站 6 个解锁点</div>
    <div class="success-list">
      <div><i>✓</i>全学段语法精讲课已解锁</div>
      <div><i>✓</i>每日 AI 训练升级为无限次</div>
      <div><i>✓</i>演讲 L1–L4 全部课程开放</div>
      <div><i>✓</i>错题智能复习 · 专项卷已开启</div>
    </div>
    <button class="btn btn-gold mt18" data-action="vip-done">开始学习 ${ic('right')}</button>
  `,true);
}

const HANDLERS = {
  'tab':(el)=>{const k=el.dataset.tab;go(k,k)},
  'back':()=>go('home','home'),
  'stage':(el)=>{S.stage=el.dataset.stage;save();render()},
  'open-course':(el)=>openCourse(el.dataset.id),
  'topic':(el)=>{const {t}=findTopic(el.dataset.id);if(t.vip&&!S.vip)openVip('topic');else openCourse(el.dataset.id)},
  'link-topic':(el)=>openCourse(el.dataset.id),
  'detail-tab':(el)=>{S.detailTab=el.dataset.tab;S._top=true;render()},
  'quiz-pick':(el)=>{
    const c=S.course;if(!c||c.picked!==null)return;
    const {t,st}=findTopic(c.id);
    const qs=[t.quiz,TOPICS[st][(TOPICS[st].findIndex(x=>x.id===t.id)+1)%TOPICS[st].length].quiz];
    const q=qs[c.qi],i=+el.dataset.i;
    c.picked=i;
    if(i===q.ans)c.right++;
    else pushMistake(q.q,q.opts[i],q.opts[q.ans],q.explain,`${st} · ${t.name} · 今天`,t.tag);
    render();
  },
  'quiz-next':()=>{
    const c=S.course;
    const {t,st}=findTopic(c.id);
    const len=2;
    c.picked=null;
    if(c.qi+1<len){c.qi++;render()}
    else{
      c.done=true;c.score=Math.round(c.right/len*100);
      t.prog=Math.min(100,t.prog+c.right*8);
      S.points+=c.right*10;S.masteredN+=c.right;
      S.dailyTopic=t.name;save();render();
    }
  },
  'daily-go':()=>{go('daily','daily')},
  'refresh-daily':()=>{
    S.daily={step:0,msgs:[],correct:0,done:false,typing:false};
    toast('已重置今日训练');S._top=true;render();chatBottom();
  },
  'daily-pick':(el)=>{
    const d=S.daily;
    if(d.done)return;
    if(!S.vip&&d.step>=3){openVip('limit');return}
    const i=+el.dataset.i, opt=DAILY[d.step].opts[i];
    d.msgs.push({me:opt[0]});
    d.msgs.push({typing:true});
    render();
    setTimeout(()=>{
      d.msgs.pop();
      d.msgs.push({ai:opt[1]});
      if(opt[2])d.correct++;
      else pushMistake(DAILY[d.step].q.split('\n').pop(),opt[0],DAILY[d.step].opts.find(x=>x[2])[0],opt[1],`每日训练 · ${S.dailyTopic} · 今天`,'时态');
      d.step++;
      if(d.step<DAILY.length)d.msgs.push(dailyQuestion(d.step));
      else d.done=true;
      render();chatBottom();
    },620);
  },
  'daily-hint':()=>{
    const d=S.daily;if(d.done)return;
    d.msgs.push({ai:'给你个小提示 👇',tip:DAILY[Math.min(d.step,4)].tip});render();chatBottom();
  },
  'daily-send':()=>{
    const inp=$('#chatInput');if(!inp||!inp.value.trim())return;
    const val=inp.value.trim();inp.value='';
    S.daily.msgs.push({me:val});
    S.daily.msgs.push({ai:'Nice try! 我收到啦 👍 试着用 have / has + 过去分词再说一遍，或者直接点上面的选项，我会逐句帮你纠。'});
    render();chatBottom();
  },
  'voice':()=>toast('语音输入已开启（原型演示）'),
  'speech-start':()=>{
    const s=S.speech;
    if(s.done)S.speech={active:true,line:0,recording:false,scores:null,checked:[],done:false};
    else{s.active=true;s.line=0;s.scores=null}
    S._top=false;render();
  },
  'speech-restart':()=>{S.speech={active:true,line:0,recording:false,scores:null,checked:[],done:false};render()},
  'speech-level':(el)=>{
    const i=+el.dataset.i;
    if(LEVELS[i].vip&&!S.vip){openVip('speech');return}
    S.speech={active:true,line:0,recording:false,scores:null,checked:[],done:false};
    S._top=true;render();
  },
  'speech-record':()=>{
    S.speech.recording=true;render();
    setTimeout(()=>{
      const i=S.speech.line;
      const base=[92,86,95,88,91][i];
      const sc={a:base-4,b:base-8,c:base+3,d:base,total:base};
      S.speech.scores=sc;S.speech.recording=false;
      if(!S.speech.checked.includes(i))S.speech.checked.push(i);
      render();
    },1500);
  },
  'speech-next':()=>{
    const s=S.speech;s.line++;s.scores=null;
    if(s.line>=SCRIPT.length){s.done=true;s.avg=90;s.active=true}
    render();
  },
  'speech-skip':()=>{const s=S.speech;s.line=Math.min(s.line+1,SCRIPT.length-1);s.scores=null;render()},
  'mk-filter':(el)=>{S.mkFilter=el.dataset.f;render()},
  'mk-master':(el)=>{
    const m=S.mistakes.find(x=>x.id===el.dataset.id);
    if(m){m.mastered=!m.mastered;save();toast(m.mastered?'已标记掌握 ✓':'已移回待复习');render()}
  },
  'mk-redo':(el)=>{
    const m=S.mistakes.find(x=>x.id===el.dataset.id);
    if(!m)return;
    openModal(`
      <div class="h3">错题重做</div>
      <div class="quiz-q mt12">${esc(m.q)}</div>
      <div class="quiz-opts">${[m.mine,m.right,'再想想'].map((o,i)=>`<button class="quiz-opt" data-action="redo-pick" data-id="${m.id}" data-ok="${i===1?1:0}"><span class="ol">${'ABC'[i]}</span>${esc(o)}</button>`).join('')}</div>
      <div class="tiny muted mt12">提示：${esc(m.explain)}</div>
      <button class="btn btn-ghost mt14" data-action="close-modal">稍后再做</button>`);
  },
  'redo-pick':(el)=>{
    const m=S.mistakes.find(x=>x.id===el.dataset.id);
    const ok=el.dataset.ok==='1';
    if(ok&&m){m.mastered=true;save()}
    closeModal();toast(ok?'答对了！已标记掌握 ✓':'再看看解析，明天还会安排变式题');render();
  },
  'smart-review':()=>toast('已生成今日复习卷 · 共 '+S.mistakes.filter(x=>!x.mastered).length+' 题'),
  'vip':(el)=>openVip(el.dataset.from),
  'vip-back':()=>{const v=vipReturnView(S.vipFrom);go(v,TABS.some(t=>t.k===v)?v:'home')},
  'plan':(el)=>{S.plan=el.dataset.id;render()},
  'agree':()=>{S.agreed=!S.agreed;render()},
  'pay':()=>{
    if(!S.agreed){toast('请先勾选同意用户协议与隐私政策');return}
    if(S.vip){toast('你已是 VIP 会员，全部权益已解锁 👑');return}
    paySuccess();
  },
  'vip-done':()=>{closeModal();const v=vipReturnView(S.vipFrom);go(v,TABS.some(t=>t.k===v)?v:'home')},
  'close-modal':(el,ev)=>{if(ev.target===el)closeModal()}
};

document.addEventListener('click',ev=>{
  const el=ev.target.closest('[data-action]');
  if(!el)return;
  if(el.dataset.stop)return;
  const fn=HANDLERS[el.dataset.action];
  if(fn)fn(el,ev);
});
document.addEventListener('keydown',ev=>{
  if(ev.key==='Enter'&&ev.target.id==='chatInput')HANDLERS['daily-send']();
});
document.addEventListener('click',ev=>{
  const bd=ev.target.closest('.modal-backdrop');
  if(bd&&ev.target===bd)closeModal();
});

/* ---------- 启动 ---------- */
/* 支持 #vip / #speech / #daily 等直达，便于演示与逐页验收 */
try{
  const h=(location.hash||'').replace('#','');
  if(h==='course'){openCourse('j3')}
  else if(h==='quiz'){openCourse('j3');S.detailTab='练习';render()}
  else{
    if(['home','daily','speech','mistakes','mine','vip'].includes(h)){
      S.view=h; S.tab=h==='vip'?'home':h;
    }
    render();
  }
}catch(e){render()}
