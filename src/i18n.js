import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    aboutUs1: 'Inspiration and History',
    aboutUs2: 'New Generation International Film Festival (NewGen) is a Berlin-based nonprofit organisation celebrating high-quality Chinese films with new and distinguished filmmakers, film enthusiasts, film industry professionals, related-field scholars and audiences around the world.',
    aboutUs3: 'Our Mission',
    aboutUs4: 'Acting as a springboard for creation, NewGen is dedicated to discovering new talented filmmakers who are making the future of Chinese cinema. Focusing on interconnections between cinema and contemporary society, NewGen encourages independent, proactive and innovative filmic expressions that showcase the diversity of Chinese culture and society. Believing in the power of film, New Gen aims to build a borderless exchange platform for cinematic culture through film screenings, audience discussions and expert panels.',
    aboutUs5: 'NewGen hopes to draw attention to new talented Chinese filmmakers and raise the profile of their underrepresented films, with the aspiration of contributing to the future of Chinese cinema, boosting the development of the local and global film industry and providing a sustainable platform for future dialogues between China and Europe.',
    aboutUs6: 'Meet The Team',
    archive1: 'Winners',
    archive2: 'Nominees',
    archive3: 'NewGen Jury',
    contact: 'Contact',
    festival1: 'Festival Days:',
    festival2: 'Cinema:',
    home1: 'Berlin',
    home2: 'NewGen',
    home3: 'Chinese Film Festival',
    joinUs: {
      joinUs1: 'Join Us',
      joinUs2: 'Become a Sponsor.',
      joinUs3: 'Become a Partner.',
      joinUs4: 'Donate to our Mission.',
      joinUs6: 'Logo placement on website',
      joinUs7: 'Merchandise & social media',
      joinUs8: 'Press Release of Sponsorship',
      joinUs9: 'Read more',
      joinUs10: 'Headline Sponsor',
      joinUs11: 'Minimum Amount: 1.500€',
      joinUs12: 'Recognition as “Headline Sponsor” in the event-related press release',
      joinUs13: 'The sponsor will be invited to present awards at the closing ceremony',
      joinUs14: 'Prominent logo placement on the website and all marketing materials included but not limited to posters, flyers, booklets, roll-up, etc.',
      joinUs15: 'Sponsorship highlighted with the link of the sponsor homepage on social media and website',
      joinUs16: 'Dedicated section in the event slide shows',
      joinUs17: 'The main feature of the event program',
      joinUs18: 'Option to provide promotional items for attendees',
      joinUs19: 'Name announcement at the event',
      joinUs20: 'Other reasonable requests from the sponsor',
      joinUs21: 'Close',
      joinUs22: 'For more information please reach out to us.',
      joinUs23: 'GET IN TOUCH',
      joinUs24: 'Become Advertiser',
      joinUs25: 'NewGen offers a digital program guide on the website and social media platforms and distributes printed program guides in Berlin before the festival',
      joinUs26: 'NewGen also offers advertising opportunities in our pre-screening slideshow',
      joinUs27: 'By advertising with NewGen, your company or organization will reach a well-targeted, ethnically diverse, and engaging audience in Berlin',
      joinUs35: 'Donate To Us',
      joinUs36: 'Official mention of Donation on our Website with name and amount',
      joinUs38: 'Above',
      joinUs39: 'Official Mention of your Donation on our social media',
      joinUs40: 'Official mention of your Donation on our social media and on our Website',
      joinUs41: 'Official mention of your Donation on our social media, on our website and honourable mention at the Main Screening event.',
      joinUs42: 'Donate with PayPal:',
      joinUs43: 'Join The Team',
      joinUs44: 'Become part of our Team and help make Berlin NewGen Film Festival a continuous success!'

    },
    movieDetails: {
      movieDetails1: 'Moviemento Kino, Kottbusser Damm 22, 10967 Berlin',
      movieDetails2: 'GET TICKETS'
    },
    partners: 'Partners',
    pressReleases: 'Press Releases',
    specialEvent: {
      specialEvent1: 'What is it?',
      specialEvent2: 'Time and Date',
      specialEvent3: 'will take place on',
      specialEvent5: 'Films'
    },
    sponsors: 'Sponsors',
    submissions: {
      submissions1: 'Submit your movie now on:',
      submissions2: 'Submission Deadlines & Fees',
      submissions3: 'May',
      submissions4: 'June',
      submissions5: 'Terms & Conditions',
      submissions6: 'The submitted film must',
      submissions7: 'be made in one or more than one of the Chinese languages (Mandarin, Cantonese, or other dialects)',
      submissions8: 'be produced, directed, written, cinematographed, or performed by at least one ethnic Chinese filmmaker.',
      submissions9: 'The submitted film must provide English subtitles/captions if the dialogues are not in English.',
      submissions10: 'The submitted film should be made after January 1, 2021.',
      submissions11: 'The submitted film should run no longer than 40 minutes.',
      submissions12: 'We welcome all genres and themes.',
      submissions13: 'Applicants may submit more than one title, but an entry fee is required for each title.',
      submissions14: 'We do not request premiere from applicants.',
      submissions15: 'Once selected, the copyright holder of the submission must authorize the selected title to be screened at least once at the festival in Berlin, and allow us to use related promotional materials.',
      submissions16: 'How To Submit',
      submissions17: 'To apply, please fill out the application form and submit your film on',
      submissions18: 'In principle, we do not accept new versions after your successful submission. In case of major changes, please contact info@bngcff.com before the regular submission deadline.',

    },
    nav: {
      footer1: 'FESTIVAL',
      footer2: 'ABOUT US',
      footer3: 'JOIN US',
      footer4: 'CONTACT',
      footer5: 'SPONSORS',
      footer6: 'PRESS RELEASES',
      footer7: 'PARTNERS',
      navbar1: 'HOME',
      navbar2: 'SUBMISSIONS',
      navbar3: 'ARCHIVE'
    },
    movieSection: {
      movieSection1: 'Duration:',
      movieSection2: 'Year:',
      movieSection3: 'Director:',
      movieSection4: 'Read Bio',
      movieSection5: 'Close'
    },
    movieSectionClassic: {
      movieSectionClassic1: 'Language:',
      movieSectionClassic2: 'Subtitles:'
    },
    privacy: 'Privacy Notice'
    // ... English translations
  },
  zh: {
    aboutUs1: '电影节起源',
    aboutUs2: '我们是NewGen柏林华语青年电影节，一个由一群年轻的欧洲电影人和电影爱好者发起，旨在发掘能代表华语电影未来的新一代电影人，鼓励独立新锐、展现多元华语文化和社会的电影创作的跨越国界电影文化交流平台。',
    aboutUs3: '电影节主办方',
    aboutUs4: '电影节的主办机构为中欧电影人联盟ACCE。中欧电影人联盟Alliance Cinéaste Chine-Europe (ACCE)，是 2018 年创立于法国巴黎的电影协会。',
    aboutUs5: '以“电影人”为核心，旨在促进中法两国以及亚欧两大洲电影人之间的交流合作；鼓励和支持电影人间多元形式的对话交流（如大型展览、峰会论坛、电影人国际访问团等）；充分发挥中欧电影制作、协作的桥梁纽带作用。致力于打造中欧电影人文化艺术交流、分享、资源置换的第一平台。',
    aboutUs6: 'NewGen团队',
    archive1: '获奖影片',
    archive2: '入围影片',
    archive3: 'NewGen评委',
    contact: '联系我们',
    festival1: '举办时间：',
    festival2: '举办地点：',
    home1: '柏林',
    home2: 'NewGen',
    home3: '华语青年电影节',
    joinUs: {
      joinUs1: '加入我们',
      joinUs2: '成为赞助商',
      joinUs3: '成为合作伙伴',
      joinUs4: '给我们捐款',
      joinUs6: '「首席赞助商」以及「特别合作伙伴」',
      joinUs7: '全媒体平台广告宣传',
      joinUs8: '电影节现场产品展位',
      joinUs9: '了解更多',
      joinUs10: '首席赞助商',
      joinUs11: '最低赞助金额：1500欧',
      joinUs12: '赞助伙伴成为电影节唯一「首席赞助商」以及「特别合作伙伴」',
      joinUs13: '赞助伙伴的董事长或总经理受邀为获奖短片颁发奖杯',
      joinUs14: '赞助伙伴的名称和司标将会出现在所有同电影节相关的市场推广材料、平面广告、邀请函、指示牌、舞台布置、新闻稿和其他材料的显著位置上',
      joinUs15: '电影节官网为赞助商进行广告宣传，并建立与该企业的网站链接',
      joinUs16: '在电影节所有宣传平台上，开辟专栏专版为企业进行宣传。',
      joinUs17: '电影节现场，赞助商可于活动主要入口处摆放产品展位，展示产品、宣传材料由赞助商提供',
      joinUs18: '电影节现场，主持人将在电影/论坛活动开场前对赞助商表示特别感谢',
      joinUs19: '特别感谢将以口头致谢的方式，说明企业全称',
      joinUs20: '赞助企业提出的其他合理要求',
      joinUs21: '关闭',
      joinUs22: '具体合作事宜欢迎邮件联系我们。',
      joinUs23: '联系我们',
      joinUs24: '广告、推广合作',
      joinUs25: 'NewGen在网站以及社交媒体平台上提供电影节指南，并在每年电影节之前在柏林当地分发印刷节目指南',
      joinUs26: 'NewGen还在我们的映前幻灯片中提供广告机会',
      joinUs27: '通过在NewGen做广告，您的公司或组织将接触到柏林有针对性的、不同背景的、参与性强的观众',
      joinUs35: '给我们捐款',
      joinUs36: '捐款组织或个人以及官捐金额将在网站公示',
      joinUs38: '捐赠金额',
      joinUs39: '您的捐赠将被官方提及在我们的网站上',
      joinUs40: '您的捐赠将被官方提及在我们的社交媒体和网站上',
      joinUs41: '您的捐赠将被官方提及在我们的社交媒体和网站上，并在电影放映活动中获得荣誉提及。',
      joinUs42: 'PayPal捐款:',
      joinUs43: '加入NewGen团队',
      joinUs44: '你将获得：正规实习证明；从策划到落地执行参与电影节，近距离接触电影行业和国内外电影人；免费参加NewGen电影节等一系列与电影相关活动；有趣友好的工作团队与愉快精彩的工作环境'

    },
    movieDetails: {
      movieDetails1: 'Moviemento Kino, Kottbusser Damm 22, 10967 Berlin',
      movieDetails2: '马上购票'
    },
    partners: '合作伙伴',
    pressReleases: '媒体报道哦',
    specialEvent: {
      specialEvent1: '活动详情',
      specialEvent2: '举办时间',
      specialEvent3: '参与者',
      specialEvent5: '活动主题'
    },
    sponsors: '赞助伙伴',
    submissions: {
      submissions1: '影片投递请点击：',
      submissions2: '截止日期及费用',
      submissions3: '5.',
      submissions4: '6.',
      submissions5: '参赛须知',
      submissions6: '所提交的参赛作品必须符合以下要求之一：',
      submissions7: '影片的语言以中文为主（包括普通话、粤语及各地方言）',
      submissions8: '影片的语言以外语为主，但至少一位主创人员是华人（包括中国大陆地区、香港特别行政区、澳门特别行政区、台湾地区籍身份或海外华人）',
      submissions9: '参赛作品若非全英语对白，则必须附有英语字幕（中英文字幕最佳）',
      submissions10: '参赛作品需在2021年1月1日后完成制作',
      submissions11: '参赛作品为短片，时长不超过40分钟',
      submissions12: '参赛作品无类型、主题或形式的限制',
      submissions13: '报名者可以提交多部作品，所有报名者都须为每部作品提交报名费',
      submissions14: '电影节对参赛作品不设首映要求',
      submissions15: '参赛作品须是参赛者创作的原创作品，参赛者必须是参赛作品版权的合法持有者',
      submissions16: '如何投递',
      submissions17: '请使用电影节影片投递及报名平台',
      submissions18: '成功提交作品后，组委会原则上不再接受新版本。如有重大改动，请在标准截止日期前通过邮箱info@bngcff.com联系组委会',

    },
    nav: {
      footer1: '电影节',
      footer2: '关于NewGen',
      footer3: '加入我们',
      footer4: '联系我们',
      footer5: '赞助伙伴',
      footer6: '媒体报道',
      footer7: '合作伙伴',
      navbar1: '首页',
      navbar2: '影片投递',
      navbar3: 'NewGen档案馆'
    },
    movieSection: {
      movieSection1: '时长：',
      movieSection2: '年份：',
      movieSection3: '导演：',
      movieSection4: '导演简介',
      movieSection5: '关闭'
    },
    movieSectionClassic: {
      movieSectionClassic1: '语言：',
      movieSectionClassic2: '字幕：'
    },
    privacy: '隐私条款'
  }
  // ... other languages
};

const locale = localStorage.getItem('userLanguage');  // Default to 'en' if not found


const i18n = createI18n({
  locale: locale,
  messages,
});

export default i18n;
