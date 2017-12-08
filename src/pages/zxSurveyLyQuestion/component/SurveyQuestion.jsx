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
                    type: "html",
                    html:  '<div><p>文言文的学习多年以来以记诵、理解为主，在新的中高考命题变革形势下，基于核心素养的教学原则和命题原则逐渐扩大了古诗文学习的容量，提高了测试的难度。古诗文的学习需要积累哪几个方面的知识，一些什么样的技能和能力，如何测定和评价学生的学习水平，从而有针对性地加强阅读和训练，成为了教与学过程中必须思考的重要问题。</p><p>因此，我们以《论语》的阅读为例，制作了一个简单的在线测试，可以让大家体验三维测试对教和学的辅助功能。</p> <ul><li>共计十小题，所有题均为必答题</li><li>完成后点击提交</li></ul></div>',
                    name: "question"
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
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-10',
                            text: 'D'
                        }
                    ],
                    colCount:4,
                    isRequired: true,
                    name: 'question1',
                    title: "<div class=\"my-block my-timu my-active\" my-typetext=\"题\" timuindex=\"1\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">1.</span><span style=\"font-size: 7.5pt;\">给下列加粗字注音正确的一项是</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">不</span><strong><span style=\"font-size: 7.5pt;\">愠</span></strong><span style=\"font-size:7.5pt\">(wēn)</span><span style=\"font-size: 7.5pt;\">三</span><strong><span style=\"font-size: 7.5pt;\">省</span></strong><span style=\"font-size:7.5pt\">(xǐng)</span><strong><span style=\"font-size: 7.5pt;\">罔</span></strong><span style=\"font-size:7.5pt\">(máng)</span><strong><span style=\"font-size: 7.5pt;\">殆</span></strong><span style=\"font-size:7.5pt\">(tái)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;B.</span><span style=\"font-size: 7.5pt;\">不</span><strong><span style=\"font-size: 7.5pt;\">愠</span></strong><span style=\"font-size:7.5pt\">(yùn)</span><span style=\"font-size: 7.5pt;\">三</span><strong><span style=\"font-size: 7.5pt;\">省</span></strong><span style=\"font-size:7.5pt\">(xǐng)</span><strong><span style=\"font-size: 7.5pt;\">罔</span></strong><span style=\"font-size:7.5pt\">(mǎng)</span><strong><span style=\"font-size: 7.5pt;\">殆</span></strong><span style=\"font-size:7.5pt\">(dài)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;C.</span><span style=\"font-size: 7.5pt;\">不</span><strong><span style=\"font-size: 7.5pt;\">愠</span></strong><span style=\"font-size:7.5pt\">(yùn)</span><span style=\"font-size: 7.5pt;\">三</span><strong><span style=\"font-size: 7.5pt;\">省</span></strong><span style=\"font-size:7.5pt\">(shěng</span><strong><span style=\"font-size:7.5pt; \">)</span></strong><strong><span style=\"font-size: 7.5pt;\">罔</span></strong><span style=\"font-size:7.5pt\">(wǎng)</span><strong><span style=\"font-size: 7.5pt;\">殆</span></strong><span style=\"font-size:7.5pt\">(tài)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;D.</span><span style=\"font-size: 7.5pt;\">不</span><strong><span style=\"font-size: 7.5pt;\">愠</span></strong><span style=\"font-size:7.5pt\">(yùn)</span><span style=\"font-size: 7.5pt;\">三</span><strong><span style=\"font-size: 7.5pt;\">省</span></strong><span style=\"font-size:7.5pt\">(xǐng)</span><strong><span style=\"font-size: 7.5pt;\">罔</span></strong><span style=\"font-size:7.5pt\">(wǎng)</span><strong><span style=\"font-size: 7.5pt;\">殆</span></strong><span style=\"font-size:7.5pt\">(dài)</span></p>\n</div>\n"
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
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-10',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question2',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"2\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">2.</span><span style=\"font-size: 7.5pt;\">解释下列括号中的词语正确的一项是</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(1)</span><span style=\"font-size: 7.5pt;\">温故而知新，可以为师矣</span><span style=\"font-size:7.5pt\">(</span><span style=\"font-size: 7.5pt;\">故</span><span style=\"font-size:7.5pt\">)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">学而不思则罔，思而不学则殆</span><span style=\"font-size:7.5pt\">(</span><span style=\"font-size: 7.5pt;\">罔</span><span style=\"font-size:7.5pt\">;</span><span style=\"font-size: 7.5pt;\">殆</span><span style=\"font-size:7.5pt\">)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">择其善者而从之</span><span style=\"font-size:7.5pt\">(</span><span style=\"font-size: 7.5pt;\">从</span><span style=\"font-size:7.5pt\">)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">岁寒，然后知松柏之后凋也</span><span style=\"font-size:7.5pt\">(</span><span style=\"font-size: 7.5pt;\">岁</span><span style=\"font-size:7.5pt\">)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(5)</span><span style=\"font-size: 7.5pt;\">其恕乎，己所不欲，勿施于人</span><span style=\"font-size:7.5pt\">(</span><span style=\"font-size: 7.5pt;\">恕</span><span style=\"font-size:7.5pt\">)</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">A.(1)</span><span style=\"font-size: 7.5pt;\">过时的知识</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp; </span><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">迷惑，迷茫而无所适从;疲劳</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp; </span><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">听从，采纳</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp; </span><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">时令</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp; </span><span style=\"font-size:7.5pt\">(5)</span><span style=\"font-size: 7.5pt;\">原谅</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">B.(1)</span><span style=\"font-size: 7.5pt;\">学过的知识、旧知识</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">迷惑，迷茫而无所适从;有害</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">跟随</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">年</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">(5)</span><span style=\"font-size: 7.5pt;\">大概宽容仁爱，推己及人，仁爱待人</span></p>\n\n<p><span style=\"font-size:7.5pt\">C.(1)</span><span style=\"font-size: 7.5pt;\">学过的知识、旧知识</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">迷惑，迷茫而无所适从;有害</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">听从，采纳</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">时令</span></p>\n\n<p><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(5)</span><span style=\"font-size: 7.5pt;\">大概宽容仁爱，推己及人，仁爱待人</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">D.(1)</span><span style=\"font-size: 7.5pt;\">学过的知识、旧知识</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">迷惑，迷茫而无所适从;疲劳</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">听从，采纳</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">年</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp; &nbsp;</span><span style=\"font-size:7.5pt\">(5)</span><span style=\"font-size: 7.5pt;\">他宽容仁爱，推己及人，仁爱待人</span></p>\n\n<p><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'D-10',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question3',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"3\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">3.</span><span style=\"font-size: 7.5pt;\">下面</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">而</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">的用法与其他不同的一项是</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp; A.</span><span style=\"font-size: 7.5pt;\">学而时习之</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">择其善者而从之</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">温故而知新</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">学而不思则罔</span></p>\n</div>\n"
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
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-0',
                            text: 'C'
                        },
                        {
                            value: 'D-10',
                            text: 'D'
                        },
                        {
                            value: 'E-0',
                            text: 'E'
                        },
                        {
                            value: 'F-0',
                            text: 'F'
                        },
                        {
                            value: 'G-0',
                            text: 'G'
                        },
                        {
                            value: 'H-10',
                            text: 'H'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question4',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"4\" title=\"\">\n<p><span style=\"font-size:7.5pt\">4.</span><span style=\"font-size: 7.5pt;\">下列句子中不属于《论语》中孔子</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">教</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">与</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">学</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">理念的是</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">学而不厌，诲人不倦。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">敏而好学，不耻下问。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">知之为知之，不知为不知，是知也。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">吾十五而有志于学。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">E.</span><span style=\"font-size: 7.5pt;\">不愤不启，不悱不发。举一隅不以三隅反，则不复也。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">F.</span><span style=\"font-size: 7.5pt;\">学而时习之。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">G.</span><span style=\"font-size: 7.5pt;\">温故而知新。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">H.</span><span style=\"font-size: 7.5pt;\">学而不思则罔，思而不这则殆。</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-10',
                            text: 'B'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question5',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"5\" title=\"\">\n<p><span style=\"font-size:7.5pt\">5.“</span><span style=\"font-size: 7.5pt;\">《论语》认为</span><span style=\"font-size:7.5pt\">‘</span><span style=\"font-size: 7.5pt;\">为仁之本</span><span style=\"font-size:7.5pt\">’</span><span style=\"font-size: 7.5pt;\">是</span><span style=\"font-size:7.5pt\">‘</span><span style=\"font-size: 7.5pt;\">忠义</span><span style=\"font-size:7.5pt\">’”</span><span style=\"font-size: 7.5pt;\">，这句话对还是错</span><span style=\"font-size:7.5pt\">?( )</span></p>\n\n<p><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">对</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">错</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'B-10',
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
                    name: 'question6',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"6\" title=\"\">\n<p><span style=\"font-size:7.5pt\">6.</span><span style=\"font-size: 7.5pt;\">下列不是出自《论语》的成语是哪一个</span><span style=\"font-size:7.5pt\">?( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">朽木粪土</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">杯水车薪</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">祸起萧墙</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">一匡天下</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'A-0',
                            text: 'A'
                        },
                        {
                            value: 'B-0',
                            text: 'B'
                        },
                        {
                            value: 'C-10',
                            text: 'C'
                        },
                        {
                            value: 'D-0',
                            text: 'D'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question7',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"7\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">7.</span><span style=\"font-size: 7.5pt;\">根据提示，说出他是谁</span><span style=\"font-size:7.5pt\">?( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(1)</span><span style=\"font-size: 7.5pt;\">他是鲁国人 </span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">他是七十二贤之一</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(3)</span><span style=\"font-size: 7.5pt;\">他死后，孔子连呼</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">天丧予</span><span style=\"font-size:7.5pt\">!</span><span style=\"font-size: 7.5pt;\">天丧予</span><span style=\"font-size:7.5pt\">!”</span></p>\n\n<p><span style=\"font-size:7.5pt\">(4)</span><span style=\"font-size: 7.5pt;\">他敏而好学，能闻一知十</span></p>\n\n<p><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">A.</span><span style=\"font-size: 7.5pt;\">子路</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">曾皙</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">颜回</span></p>\n\n<p><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">子有</span></p>\n\n<p><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'B-10',
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"8\" title=\"\">\n<p><span style=\"font-size:7.5pt\">8.</span><span style=\"font-size: 7.5pt;\">相传当年宰相张英邻家造房占张家三尺地基</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">张家人不服</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">修书一封到京城求宰相张英主持公道</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">张相爷看完书信回了一封信：</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">千里家书只为墙</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">让他三尺又何妨；万里长城今犹在</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">不见当年秦始皇。</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">家人收书羞愧不已，退让三尺</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">邻家人见相爷家人如此胸怀</span><span style=\"font-size:7.5pt\">,</span><span style=\"font-size: 7.5pt;\">亦退让三尺。此事传为佳话。这个故事体现了《论语》中的什么思想？</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.“</span><span style=\"font-size: 7.5pt;\">里仁为美，择不处仁，焉得知？</span><span style=\"font-size:7.5pt\">”</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;B.</span><span style=\"font-size: 7.5pt;\">君子之于天下也，无适也，无莫也，义之与比。</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;C.“</span><span style=\"font-size: 7.5pt;\">能以礼让为国乎，何有？不能以礼让为国，如礼何？</span><span style=\"font-size:7.5pt\">”</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;D.“</span><span style=\"font-size: 7.5pt;\">德不孤，必有邻。</span><span style=\"font-size:7.5pt\">”</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'B-10',
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
                    name: 'question9',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"9\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">9.</span><span style=\"font-size: 7.5pt;\">子曰：</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">贤哉回也，一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也。</span><span style=\"font-size:7.5pt\">”</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">对孔子的这段话理解不正确的一项是</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">孔子对颜渊做了高度评价，认为他是个</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">安贫乐道</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">的贤者。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">人总是要有一点精神的，为了自己的理想，就要不断追求，放弃对物质的追求才能体会到精神上的自得其乐</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">在物质生活水平越来越高的今天，我们不能一味的满足于物质生活需求，精神满足是高于物质满足的人生境界。</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">这句话和</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">君子食无求饱、居无求安</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">表现的是同样的追求。</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n"
                }
            ],
            name: 'page10'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"10\" title=\"\">\n<p title=\"\"><span style=\"font-size:7.5pt\">10.(</span><span style=\"font-size: 7.5pt;\">一</span><span style=\"font-size:7.5pt\">)“</span><span style=\"font-size: 7.5pt;\">然则管仲知礼乎？</span><span style=\"font-size:7.5pt\">”(</span><span style=\"font-size: 7.5pt;\">子</span><span style=\"font-size:7.5pt\">)</span><span style=\"font-size: 7.5pt;\">曰：</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">邦君树塞门，管仲亦树塞门；邦君为两君之好，有反坫，管仲亦有反坫。管仲而知礼，孰不知礼？</span><span style=\"font-size:7.5pt\">”</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp; &nbsp; (</span><span style=\"font-size: 7.5pt;\">二</span><span style=\"font-size:7.5pt\">)</span><span style=\"font-size: 7.5pt;\">子贡曰：</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">管仲非仁者与？桓公杀公子纠，不能死，又相之。</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">子曰：</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">管仲相桓公，霸诸侯，一匡天下，民到于今受其赐。微管仲，吾其被发左衽矣。岂若匹夫匹妇之为谅也，自经于沟渎而莫之知也！</span><span style=\"font-size:7.5pt\">” </span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(1)</span><span style=\"font-size: 7.5pt;\">从这两段文字看，孔子是如何评价管仲这个人物的？</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">孔子认为管仲不知礼，要坚决反对他</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">孔子认为管仲不知礼，但还是仁德的</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">孔子认为管仲虽然不仁德，但还是知礼的</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">孔子认为管仲不知礼，即使仁德也没什么用</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">(2)</span><span style=\"font-size: 7.5pt;\">从孔子对管仲的评价中可以看出他主张的</span><span style=\"font-size:7.5pt\">“</span><span style=\"font-size: 7.5pt;\">仁</span><span style=\"font-size:7.5pt\">”</span><span style=\"font-size: 7.5pt;\">的含义是怎样的？</span><span style=\"font-size:7.5pt\">( )</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;A.</span><span style=\"font-size: 7.5pt;\">仁者爱人，首先要严格要求自己，所以管仲不仁</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">B.</span><span style=\"font-size: 7.5pt;\">仁爱的第一准则是维护百姓的利益，王者的利益不应该过分重视</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">C.</span><span style=\"font-size: 7.5pt;\">仁和礼有时候会有矛盾，行大义者可以不计较他的小节</span></p>\n\n<p title=\"\"><span style=\"font-size: 7.5pt;\">&nbsp;</span><span style=\"font-size:7.5pt\">D.</span><span style=\"font-size: 7.5pt;\">治国平天下必须德才兼备，有才无礼的人即使建立了功业也不值得赞美</span></p>\n\n<p title=\"\"><span style=\"font-size:7.5pt\">&nbsp;</span></p>\n</div>\n",
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
                            value: 'B-5',
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
                    name: 'question10',
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
                            value: 'C-5',
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
                    title: "题()"
                }
            ],
            name: 'page11'
        }
    ]
};
export default SurveyQuestion;