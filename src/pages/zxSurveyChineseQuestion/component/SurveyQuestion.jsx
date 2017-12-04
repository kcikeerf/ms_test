let SurveyQuestion={
    goNextPageAutomatic: true,
    showPageTitles: false,
    showProgressBar: 'top',
    showPageNumbers:false,
    showTitle: false,
    pages: [
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-6',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question1',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">1、三支桨有规律地在水里划，那声音就像一支乐曲</span></p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">A. lè</span></p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.yuè</p>\n"
                }
            ],
            name: 'page1'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-6',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question2',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">2、更可恶的是遇到另一只母鸡的时候，它会下毒手。</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">A. è</span></p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.&nbsp;wù</p>\n"
                }
            ],
            name: 'page2'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-6',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question3',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">3、即使是插上翅膀也难以(&nbsp;&nbsp;&nbsp;&nbsp;)重洋。</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">A.飞渡&nbsp;&nbsp;</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.飞度</p>\n"
                }
            ],
            name: 'page3'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-6',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question4',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">4、再看看小木偶，小木偶（ &nbsp;&nbsp;）笑嘻嘻的表情。</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">A.一副&nbsp;&nbsp;</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.一付</p>\n"
                }
            ],
            name: 'page4'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-6',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question5',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">5、那么多的绿叶，一簇（ &nbsp;&nbsp;）在另一处上面，不留一点儿空隙。</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">A.叠&nbsp;</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.堆</p>\n"
                }
            ],
            name: 'page5'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-6',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        }
                    ],
                    colCount: 2,
                    isRequired: true,
                    name: 'question6',
                    title: "\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">6、青草丛中（ ）着一条倾斜的隧道。</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">A.隐藏</p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">B.隐蔽</p>\n"
                }
            ],
            name: 'page6'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-6',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question7',
                    title: "\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">7、下面句中</span><strong><span style=\"\">双引号</span></strong><span style=\"\">的用法描述</span><strong><span style=\"\">错误</span></strong><span style=\"\">的一项是（</span><span style=\"\">&nbsp;&nbsp;&nbsp; </span><span style=\"\">）。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">A</span><span style=\"\">．</span><span style=\"\">这样的玻璃早就问世了，它就是“吸热玻璃”。（表示特定称谓）</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">B</span><span style=\"\">．</span><span style=\"\">“爸爸，为什么？”我急切地问道。（用于话语之中）</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">C</span><span style=\"\">．</span><span style=\"\">老师说这个“嵌”字用得特别传神。（表示引用）</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">D．</span><span style=\"\">桂花成熟时，就应当“摇”。（表示特定称谓）</span></p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\"><span style=\"\">D</span></p>\n\n<p style=\"margin-left:10.5pt; text-indent:-10.5pt\" title=\"\">&nbsp;</p>\n"
                }
            ],
            name: 'page7'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-6',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question8',
                    title: "\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">8、下面关于修辞手法判断，正确的一项是（ &nbsp;&nbsp;）。</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">&nbsp; 1、准是怕别的东西伤害了它的“宝宝”吧!</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">&nbsp; 2、荷叶出水很高，像亭亭玉立的舞女的裙。</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">&nbsp; 3、延安的歌声……它是黑夜里的火把，雪天里的煤炭，大旱时的甘霖。</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">&nbsp; 4、我呢，难道没有应该责备的地方吗?</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\"><span style=\"color: rgb(0, 0, 0);\">&nbsp; 5、一个浑身黑色的人，站在我面前，眼光正像两把刀，刺得我缩小了一半。</span></p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\">&nbsp; A、拟人&nbsp;&nbsp;&nbsp; 比喻&nbsp;&nbsp;&nbsp; 排比&nbsp;&nbsp;&nbsp; 反问&nbsp;&nbsp;&nbsp; 夸张</p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\">&nbsp; B、拟人&nbsp;&nbsp;&nbsp; 拟人&nbsp;&nbsp;&nbsp; 比喻&nbsp;&nbsp;&nbsp; 设问&nbsp;&nbsp;&nbsp; 比喻</p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\">&nbsp; C、比喻&nbsp;&nbsp;&nbsp; 拟人&nbsp;&nbsp;&nbsp; 排比&nbsp;&nbsp;&nbsp; 反问&nbsp;&nbsp;&nbsp; 夸张</p>\n\n<p style=\"margin-left:10.25pt; text-indent:-5.25pt\" title=\"\">&nbsp; D、比喻&nbsp;&nbsp;&nbsp; 比喻&nbsp;&nbsp;&nbsp; 比喻&nbsp;&nbsp;&nbsp; 设问&nbsp;&nbsp;&nbsp; 比喻</p>\n"
                }
            ],
            name: 'page8'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-6',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question9',
                    title: "\n<p style=\"line-height:18pt\"><span style=\"\">9</span><span style=\"\">、</span><span style=\"\">下列问句中与其他三个</span><strong><span style=\"\">不同</span></strong><span style=\"\">的一项是（</span><span style=\"\">&nbsp;&nbsp;&nbsp; </span><span style=\"\">）。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">A</span><span style=\"\">．</span><span style=\"\">就像在屋檐下躲雨，你总不好意思赶我走吧？</span><span style=\"\"> </span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">B</span><span style=\"\">．</span><span style=\"\">你不会因为熟悉家中的一切就弃家而去吧？</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">C</span><span style=\"\">．</span><span style=\"\">鲸的身子这么大，它们吃什么呢？</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">D</span><span style=\"\">．</span><span style=\"\">我为什么不可以搞一个不是成衣的时装展呢？</span></p>\n"
                }
            ],
            name: 'page9'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-6',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question10',
                    title: "\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">10</span><span style=\"\">、下列各句中，</span><strong><span style=\"\">没有语病</span></strong><span style=\"\">的一句是</span><span style=\"\">(&nbsp;&nbsp;&nbsp; )</span><span style=\"\">。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">A</span><span style=\"\">．</span><span style=\"\">经过朋友的开导，她高高兴兴开开心心的回家了。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">B</span><span style=\"\">．</span><span style=\"\">“一带一路”会议召开在北京。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">C</span><span style=\"\">．</span><span style=\"\">树叶被秋风染成金黄色，慢慢地飘落下来。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">D</span><span style=\"\">．</span><span style=\"\">我估计他今天肯定不会去动物园了。</span></p>\n"
                }
            ],
            name: 'page10'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-8',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question11',
                    title: "\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">1</span><span style=\"\">1</span><span style=\"\">、下列关于《题西林壁》和《游山西村》的说法不正确的一项是（ </span><span style=\"\">&nbsp;&nbsp; </span><span style=\"\">）</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">A</span><span style=\"\">&nbsp; </span><span style=\"\">两首诗的作者都是同一个朝代的。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">B</span><span style=\"\"> </span><span style=\"\">两首诗最后两句所表达的意思是一样的。</span></p>\n\n<p style=\"line-height:18pt\"><span style=\"\">C</span><span style=\"\"> </span><span style=\"\">两首诗都和出游有关。</span></p>\n\n<p style=\"line-height:18pt\"><span style=\"\">D</span><span style=\"\"> </span><span style=\"\">两首诗都共有四句，每句有七字。</span></p>\n"
                }
            ],
            name: 'page11'
        },
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-8',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question12',
                    title: "\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">1</span><span style=\"\">2</span><span style=\"\">、关于课文内容，不正确的选项是（ </span><span style=\"\">&nbsp;&nbsp; </span><span style=\"\">）</span></p>\n\n<p style=\"line-height:18pt\"><span style=\"\">A</span><span style=\"\"> </span><span style=\"\">观看钱塘江大潮最好的地点据说是在海宁市盐官镇。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">B&nbsp; </span><span style=\"\">雅鲁藏布大峡谷是世界上最深最长的河流峡谷。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">C </span><span style=\"\">《鸟的天堂》的作者是巴金。</span></p>\n\n<p style=\"line-height:18pt\" title=\"\"><span style=\"\">D </span><span style=\"\">课文《火烧云》用生动形象的语言介绍了美丽的朝霞。</span></p>\n"
                }
            ],
            name: 'page12'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "\n<p style=\"text-align:center; line-height:18pt\" title=\"\"><span style=\"\">昆虫记（节选）</span></p>\n\n<p style=\"text-align:center; line-height:18pt\" title=\"\"><span style=\"\">法布尔</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:0pt; text-indent:-10.5pt; text-align:left; line-height:18pt\" title=\"\"><span style=\"font-size: 10.5pt;\"><span style=\"color:#000000\">①</span></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 10.5pt;\">当我面对池塘，凝视着它的时候，我可从来都不觉得厌倦。</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:0pt; text-indent:-10.5pt; text-align:left; line-height:18pt\" title=\"\"><span style=\"font-size: 10.5pt;\"><span style=\"color:#000000\">②</span></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 10.5pt;\">在池塘的深处，水甲虫在活泼地跳跃着，它的前翅的尖端带着一个气泡，这个气泡是帮助它呼吸用的。在这个地方你还会见到水蝎，只见它交叉着两肢，在水面上悠闲地做出一副仰泳的姿势，那神态，仿佛它是天底下最伟大的游泳好手。还有那蜻蜓的幼虫，穿着沾满泥巴的外套，身体的后部有一个漏斗。在池塘的底下，小小的田螺们会沿着池底轻轻地、缓缓地爬到岸边，小心翼翼地慢慢张开它们沉沉的盖子，眨巴着眼睛，好奇地展望这个美丽的水中乐园，同时又尽情地呼吸一些陆上空气。</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:0pt; text-indent:-10.5pt; text-align:left; line-height:18pt\" title=\"\"><span style=\"font-size: 10.5pt;\"><span style=\"color:#000000\">③</span></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp; </span>乍一看，这是一个停滞不动的池塘，虽然它的直径不超过几尺，可是在阳光的孕育下，它却犹如一个辽阔神秘而又丰富多彩的世界。<span style=\"font-size: 10.5pt;\">在这个绿色的小小世界里，不知道会有多少忙碌的小生命生生不息。</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:0pt; text-indent:-10.5pt; text-align:left; line-height:18pt\" title=\"\"><span style=\"font-size: 10.5pt;\"><span style=\"color:#000000\">④</span></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 10.5pt;\">小时候我看鸭子，会带它们来到家附近的池塘。</span><span style=\"font-size: 10.5pt;\">它多能打动和引发一个孩子的好奇心啊！</span><span style=\"font-size: 10.5pt;\">小鸭们一到那儿就飞奔过去忙碌地在岸上寻找食物，它们会下到水里去洗澡。我则美滋滋地欣赏水中别的景物。</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:0pt; text-indent:-10.5pt; text-align:left; line-height:18pt\" title=\"\"><span style=\"font-size: 10.5pt;\"><span style=\"color:#000000\">⑤</span></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 10.5pt;\">那是什么？在泥土上，我看到有几段互相缠绕着的绳子又粗又松，黑沉沉的，像熏满了的烟灰。如果你看到它，可能会以为它是从什么袜子上拆下来的绒线。我走过去，想拾</span><span style=\"font-size: 10.5pt;\">起来</span><span style=\"font-size: 10.5pt;\">放到手掌里仔细观察，没想到这玩意儿又粘又滑，一下子就从我的手指缝里滑走了。我花费了好大的劲，就是捉不住它，并且有几段绳子的结突然散了，从里面跑出一颗颗小珠子，只有针尖般大小，后面拖着一条扁平的尾巴，我一下子认出它们了，那是我所熟悉的一种动物的幼虫。它就是青蛙的幼虫——蝌蚪。</span></p>\n\n<p style=\"text-indent:-10.5pt; text-align:right; line-height:18pt\" title=\"\"><span style=\"\">（有删改）</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt; widows: 2; orphans: 2;\" title=\"\"><span style=\"\">13</span><span style=\"\">、文章中</span><strong><span style=\"\">没有</span></strong><span style=\"\">介绍的动物是（ </span><span style=\"\">&nbsp;&nbsp; </span><span style=\"\">）。</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt; widows: 2; orphans: 2;\" title=\"\"><span style=\"\">A.</span><span style=\"\">水甲虫</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt; widows: 2; orphans: 2;\" title=\"\"><span style=\"\">B.</span><span style=\"\">水蝎</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt; widows: 2; orphans: 2;\" title=\"\"><span style=\"\">C.</span><span style=\"\">蜻蜓</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt; widows: 2; orphans: 2;\" title=\"\"><span style=\"\">D.</span><span style=\"\">蝌蚪&nbsp;</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt;\" title=\"\"><span style=\"\">14</span><span style=\"\">、以下词语</span><strong><span style=\"\">没有</span></strong><span style=\"\">在文章中出现的是（ </span><span style=\"\">&nbsp;&nbsp; </span><span style=\"\">）。</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt;\" title=\"\"><span style=\"\">A.</span><span style=\"\">小心翼翼</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt;\" title=\"\"><span style=\"\">B.</span><span style=\"\">停滞不动</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt;\" title=\"\"><span style=\"\">C.</span><span style=\"\">生生不息</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height: 18pt;\" title=\"\"><span style=\"\">D.</span><span style=\"\">五彩缤纷</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height:18pt\" title=\"\"><span style=\"\">15</span><span style=\"\">、《昆虫记》的一大特点是描写生物时使用的语言生动传神。下列句子中</span><strong><span style=\"\">不能</span></strong><span style=\"\">表达这一特点的是（ </span><span style=\"\">&nbsp; </span><span style=\"\">）。</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height:18pt\" title=\"\">A.只见它交叉着两肢，在水面上悠闲地做出一副仰泳的姿势，那神态，仿佛它是天底下最伟大的游泳好</p>\n\n<p style=\"text-indent:-10.5pt; line-height:18pt\" title=\"\"><span style=\"\">B.小小的田螺们会沿着池底轻轻地、缓缓地爬到岸边，小心翼翼地慢慢张开它们沉沉的盖子，眨巴着眼睛，好奇地展望这个美丽的水中乐园，同时又尽情地呼吸一些陆上空气。</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height:18pt\" title=\"\"><span style=\"\">C.小时候我看鸭子，会带它们来到家附近的池塘。</span></p>\n\n<p style=\"text-indent:-10.5pt; line-height:18pt\" title=\"\"><span style=\"\">D.在泥土上，我看到有几段互相缠绕着的绳子又粗又松，黑沉沉的，像熏满了的烟灰。</span></p>\n",
                    name: "question"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-8',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question13',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-8',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question14',
                    title: "题()"
                },
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-8',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question15',
                    title: "题()"
                }
            ],
            name: 'page13'
        }
    ]
};
export default SurveyQuestion;