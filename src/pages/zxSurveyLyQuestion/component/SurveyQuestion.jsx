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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"1\" title=\"\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\" title=\"\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">1.</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">给下列画横线字注音正确的一项是：（&nbsp; ）</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\" title=\"\"><span style=\"font-size: 12pt; color: rgb(0, 0, 0);\">A.</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">不<u>愠</u>（wēn）&nbsp; 三<u>省</u>（xǐng）&nbsp; <u>罔</u>（máng）&nbsp;&nbsp; 殆（tái）</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">B.</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">不<u>愠</u>（yùn）&nbsp; 三 <u>省</u>（xǐng）&nbsp; 罔（</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">m</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">ǎng）&nbsp;&nbsp; 殆（dài）</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">C.不愠（　yùn　）&nbsp; 三省（　shěng　） 罔（wǎng）&nbsp;&nbsp; 殆（</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">t</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">ài）</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">D.不愠（　yùn　）&nbsp; 三省（　xǐng　）&nbsp; 罔（</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">w</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">ǎng） </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp; </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">殆（dài）</span></p>\n\n<p><span style=\"font-size:14pt\">&nbsp;</span></p>\n</div>\n"
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"2\">\n<p style=\"text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">2</span><strong><span style=\"font-size: 14pt;\">.解释下列词语解释正确的一项是：</span></strong></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:27pt; text-indent:-21pt; text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">（1）</span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">温故而知新，可以为师矣&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （故：</span><span style=\"font-size: 14pt;\">&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">）</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:27pt; text-indent:-21pt; text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">（2）</span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">学而不思则罔，思而不学则殆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （罔：&nbsp;&nbsp;&nbsp;&nbsp; 殆&nbsp;&nbsp;&nbsp; ）</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:27pt; text-indent:-21pt; text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">（3）</span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">择其善者而从之&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （从：</span><span style=\"font-size: 14pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">&nbsp; </span><span style=\"font-size: 14pt;\">）</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:27pt; text-indent:-21pt; text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">（4）</span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">岁寒，然后知松柏之后凋也&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; （岁：</span><span style=\"font-size: 14pt;\">&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">&nbsp; </span><span style=\"font-size: 14pt;\">）</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:27pt; text-indent:-21pt; text-align:left; line-height:150%; widows:2; orphans:2; font-size:14pt\"><span style=\"font-size: 14pt;\">（5）</span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">其恕乎，己所不欲，勿施于人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\"> </span><span style=\"font-size: 14pt;\">（其：</span><span style=\"font-size: 14pt;\"> 恕&nbsp;&nbsp; ）</span></p>\n\n<p><span style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size: 14pt;\"> </span><span style=\"font-size:14pt\">A.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size:14pt\">(1) </span><span style=\"font-size: 14pt;\">过时的知识&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(2)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">迷惑，迷茫而无所适从&nbsp;&nbsp;&nbsp; 疲劳</span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(3) </span><span style=\"font-size: 14pt;\">听从，采纳&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(4)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">时令&nbsp;&nbsp;&nbsp; </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size:14pt\">(5)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">大概&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽容仁爱，推己及人，仁爱待人&nbsp; </span></p>\n\n<p style=\"text-indent:14pt\"><span style=\"font-size:14pt\">B.</span><span style=\"font-size:14pt\">(1)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">学过的知识、旧知识&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\"> </span><span style=\"font-size:14pt\">(2)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">迷惑，迷茫而无所适从&nbsp;&nbsp; 有害 </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(3)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">跟随&nbsp;&nbsp;&nbsp; </span><span style=\"font-size: 14pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(4)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(5)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">大概&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽容仁爱，推己及人，仁爱待人&nbsp; </span></p>\n\n<p style=\"text-indent:14pt\"><span style=\"font-size:14pt\">C</span><span style=\"font-size:14pt\">.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size:14pt\">(1)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">学过的知识、旧知识&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(2)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">迷惑，迷茫而无所适从&nbsp;&nbsp; 有害 </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(3)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">听从，采纳&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(4)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">时令&nbsp;&nbsp;&nbsp;&nbsp; </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size: 14pt;\">&nbsp;</span><span style=\"font-size:14pt\">(5)</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt;\">大概&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽容仁爱，推己及人，仁爱待人&nbsp;&nbsp; </span></p>\n\n<p style=\"text-indent:14pt\"><span style=\"font-size:14pt\">D</span><span style=\"font-size:14pt\">.(1)</span><span style=\"font-size: 14pt;\">学过的知识、旧知识&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(2)</span><span style=\"font-size: 14pt;\">迷惑，迷茫而无所适从&nbsp;&nbsp;&nbsp; 疲劳 </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(3)</span><span style=\"font-size: 14pt;\">听从，采纳&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">(4)</span><span style=\"font-size: 14pt;\">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">(5) </span><span style=\"font-size: 14pt;\">他&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽容仁爱，推己及人，仁爱待人&nbsp; </span></p>\n\n<p style=\"text-indent:28pt\"><span style=\"font-size:14pt\">&nbsp;</span></p>\n</div>\n"
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"3\" title=\"\">\n<p><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">3.</span><span style=\"font-size:14pt\"> </span><strong><span style=\"font-size: 14pt;\">下面“而”的用法与其他不同的一项是（</span></strong><strong><span style=\"font-size: 14pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></strong><strong><span style=\"font-size: 14pt;\">）</span></strong></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">A.</span><span style=\"font-size: 14pt;\">学而时习之　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">B.</span><span style=\"font-size: 14pt;\">择其善者而从之</span></p>\n\n<p><span style=\"font-size:14pt\">C.</span><span style=\"font-size: 14pt;\">温故而知新&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-size:14pt\">D.</span><span style=\"font-size: 14pt;\">学而不思则罔&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>\n\n<p><span style=\"font-size:14pt\">&nbsp;</span></p>\n\n<p><span style=\"font-size:14pt\">&nbsp;</span></p>\n</div>\n"
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
                    name: 'question4',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"4\" title=\"\">\n<p><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">4.</span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">下列句子中不属于《论语》中孔子“教”与“学”理念的是（）</span></strong></p>\n\n<ol style=\"margin:0pt; padding-left:0pt\" type=\"A\">\n\t<li class=\"ListParagraph\" style=\"margin-left:19.56pt; text-indent:0pt; padding-left:1.44pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">学而不厌，诲人不倦。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:19.74pt; text-indent:0pt; padding-left:1.26pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">敏而好学，不耻下问。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:20.16pt; text-indent:0pt; padding-left:0.84pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">知之为知之，不知为不知，是知也。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:20.67pt; text-indent:0pt; padding-left:0.33pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">吾十五而有志于学</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:19.67pt; text-indent:0pt; padding-left:1.33pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">不愤不启，不悱不发。举一隅不以三隅反，则不复也。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:19.16pt; text-indent:0pt; padding-left:1.84pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">学而时习之。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:20.63pt; text-indent:0pt; padding-left:0.37pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">温故而知新</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-left:21pt; text-indent:0pt; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">学而不思则罔，思而不这则殆。</span></li>\n</ol>\n\n<p style=\"text-indent:27.75pt\" title=\"\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp;</span></p>\n</div>\n"
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
                            value: 'B-10',
                            text: 'B'
                        }
                    ],
                    colCount: 4,
                    isRequired: true,
                    name: 'question5',
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"5\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">5.</span><span style=\"font-size:14pt\"> </span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">“《论语》认为‘为仁之本’是‘忠义’”，这句话对还是错?(&nbsp;&nbsp; )</span></strong></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">A.对&nbsp;&nbsp;&nbsp; B.错</span></strong></p>\n</div>\n"
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"6\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">6.</span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">下列不是出自《论语》的成语是哪一个?(</span></strong><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp;&nbsp; </span></strong><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">)</span></strong></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">　A、朽木粪土; B、杯水车薪; C、祸起萧墙; D、一匡天下。</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp;</span></p>\n</div>\n"
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"7\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">7</span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">.根据提示，说出他是谁?( </span></strong><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp; </span></strong><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">)</span></strong></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">1)</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">他是鲁国人 </span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">2)</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">他是七十二贤之一</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">3)</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">他死后，孔子连呼“天丧予!天丧予!”</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">4)</span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">他敏而好学，能闻一知十</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">A、子路&nbsp;&nbsp;&nbsp; B、曾皙&nbsp;&nbsp; C、颜回&nbsp;&nbsp;&nbsp; D、子有</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp;</span></p>\n</div>\n"
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
                    title: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"8\" title=\"\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">8.</span><span style=\"font-size:14pt\"> </span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">相传当年宰相张英邻家造房占张家三尺地基,张家人不服,修书一封到京城求宰相张英主持公道,张相爷看完书信回了一封信：“千里家书只为墙,让他三尺又何妨；万里长城今犹在,不见当年秦始皇。” 家人收书羞愧不已，退让三尺,邻家人见相爷家人如此胸怀,亦退让三尺。此事传为佳话。这个故事体现了《论语》中的什么思想？（ </span></strong><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\"> ）</span></strong></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">A.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">“里仁为美，择不处仁，焉得知？”</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\" title=\"\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">B.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">君子之于天下也，无适也，无莫也，义之与比</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\" title=\"\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">C.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">“能以礼让为国乎，何有？不能以礼让为国，如礼何？”</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">D.</span><span style=\"font-size:14pt\"> </span><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">“德不孤，必有邻。”</span></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">&nbsp;</span></p>\n</div>\n"
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
                    name: 'question9',
                    title: "<div class=\"my-block my-timu my-active\" my-typetext=\"题\" timuindex=\"9\" title=\"\">\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-align:left; line-height:14pt; widows:2; orphans:2\" title=\"\"><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">9.</span><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">子曰：“贤哉回也，一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉回也。”</span></strong></p>\n\n<p style=\"margin-top:14pt; margin-bottom:8.15pt; text-indent:14pt; text-align:left; line-height:14pt; widows:2; orphans:2\"><strong><span style=\"font-size: 14pt; color: rgb(0, 0, 0);\">对孔子的这段话理解不正确的一项是（&nbsp; ）</span></strong></p>\n\n<ol style=\"margin:0pt; padding-left:0pt\" type=\"A\">\n\t<li class=\"ListParagraph\" style=\"margin-top:14pt; margin-left:18pt; margin-bottom:8.15pt; text-indent:0pt; text-align:left; line-height:14pt; widows:2; orphans:2; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">孔子对颜渊做了高度评价，认为他是个“安贫乐道”的贤者。</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-top:0pt; margin-left:18pt; margin-bottom:8.15pt; text-indent:0pt; text-align:left; line-height:14pt; widows:2; orphans:2; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">人总是要有一点精神的，为了自己的理想，就要不断追求，只有放弃对物质的追求才能体会到精神上的自得其乐</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-top:0pt; margin-left:18pt; margin-bottom:8.15pt; text-indent:0pt; text-align:left; line-height:14pt; widows:2; orphans:2; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">在物质生活水平越来越高的今天，我们不能一味的满足于物质生活需求，精神满足是高于物质满足的人生境界</span></li>\n\t<li class=\"ListParagraph\" style=\"margin-top:0pt; margin-left:18pt; margin-bottom:8.15pt; text-indent:0pt; text-align:left; line-height:14pt; widows:2; orphans:2; font-family:宋体; font-size:14pt\"><span style=\"font-size: 14pt;\">这句话和“君子食无求饱、居无求安”表现的是同样的追求。 </span></li>\n</ol>\n</div>\n"
                }
            ],
            name: 'page9'
        },
        {
            elements: [
                {
                    type: "html",
                    html: "<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"10\" title=\"\">\n<p><span style=\"font-size:14pt\">10.</span><strong><span style=\"font-size: 14pt;\">（一）</span></strong><strong><span style=\"font-size: 14pt;\">“然则管仲知礼乎？”（子）曰：“邦君树塞门，管仲亦树塞门；邦君为两君之好，有反坫，管仲亦有反坫。管仲而知礼，孰不知礼？” </span></strong></p>\n\n<p style=\"text-indent:14pt\"><strong><span style=\"font-size: 14pt;\">（二）子贡曰：“管仲非仁者与？桓公杀公子纠，不能死，又相之。”子曰：“管仲相桓公，霸诸侯，一匡天下，民到于今受其赐。微管仲，吾其被发左衽矣。岂若匹夫匹妇之为谅也，自经于沟渎而莫之知也！” </span></strong></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:21pt; text-indent:-21pt\" title=\"\"><span style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-stretch: normal; line-height: normal; font-size: 18.6667px;\"><b>(1)</b></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><strong><span style=\"font-size: 14pt;\">从这两段文字看，孔子是如何评价管仲这个人物的？（&nbsp; ）</span></strong></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">A</span><span style=\"font-size:14pt\">.</span><span style=\"font-size: 14pt;\">孔子认为管仲不知礼</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">要坚决反对他</span></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">B.</span><span style=\"font-size: 14pt;\">孔子认为管仲不知礼</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">但还是仁德的</span></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">C.</span><span style=\"font-size: 14pt;\">孔子认为</span><span style=\"font-size: 14pt;\">管仲</span><span style=\"font-size: 14pt;\">虽然不仁德</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">但还是知礼的</span></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">D.</span><span style=\"font-size: 14pt;\">孔子认为管仲不知礼</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">即使仁德也没什么用</span></p>\n\n<p class=\"ListParagraph\" style=\"margin-left:21pt; text-indent:-21pt\" title=\"\"><span style=\"font-size: 18.6667px;\"><b>(2)</b></span><span style=\"font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 7pt; line-height: normal;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><strong><span style=\"font-size: 14pt;\">从孔子对管仲的评价中可以看出他主张的“仁”的含义是怎样的？（&nbsp; ）</span></strong></p>\n\n<p><span style=\"font-size:14pt\">A.</span><span style=\"font-size: 14pt;\">仁者爱人，首先要严格要求自己，所以管仲不仁</span></p>\n\n<p><span style=\"font-size:14pt\">B.</span><span style=\"font-size: 14pt;\">仁爱的第一准则是维护百姓的利益</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">王者的利益不应该过分重视</span></p>\n\n<p title=\"\"><span style=\"font-size:14pt\">C.</span><span style=\"font-size: 14pt;\">仁和礼有时候会有矛盾</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">行大义者可以不计较他的小节</span></p>\n\n<p><span style=\"font-size:14pt\">D.</span><span style=\"font-size: 14pt;\">治国平天下必须德才兼备</span><span style=\"font-size: 14pt;\">，</span><span style=\"font-size: 14pt;\">有才无</span><span style=\"font-size: 14pt;\">礼</span><span style=\"font-size: 14pt;\">的人即使建立了功业也不值得赞美</span></p>\n</div>\n",
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
                    name: 'question9',
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
                    name: 'question10',
                    title: "题()"
                }
            ],
            name: 'page10'
        }
    ]
};
export default SurveyQuestion;