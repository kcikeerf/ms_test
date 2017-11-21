let SurveyQuestion={
    goNextPageAutomatic: true,
    showPageTitles: false,
    showProgressBar: 'top',
    showPageNumbers:false,
    showTitle: false,
    // showQuestionNumbers:false,
    pages: [
        {
            elements: [
                {
                    type: 'radiogroup',
                    choices: [
                        {
                            value: 'A-10',
                            text: 'A.730200'
                        },
                        {
                            value: 'B-0',
                            text: 'B.303030'
                        },
                        {
                            value: 'C-0',
                            text: 'C.63300'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question1',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"1\" title=\"\">\n<p title=\"\"><span style=\"\">在下面的数中</span><span style=\"\">,3</span><span style=\"\">在万位上的是</span><span style=\"\">()</span><span style=\"\">.</span></p >\n\n<p title=\"\"><span style=\"\">&nbsp;</span></p >\n</div>'
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
                            text: 'A.200+4×25'
                        },
                        {
                            value: 'B-10',
                            text: 'B.200×25+4×25'
                        },
                        {
                            value: 'C-0',
                            text: 'C.200×(4×25)'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question2',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"2\" title=\"\">\n<p title=\"\"><span style=\"\"></span><span style=\"\">204×25</span><span style=\"\">的简便算法是</span><span style=\"\">()</span><span style=\"\">.</span></p>\n\n<p title=\"\"><span style=\"\">&nbsp;</span></p>\n</div>\n'
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
                            text: 'A.好看'
                        },
                        {
                            value: 'B-10',
                            text: 'B.三角形具有稳定性'
                        },
                        {
                            value: 'C-0',
                            text: 'C.提醒小孩注意安全'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question3',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"3\" title=\"\">\n<p title=\"\"><span style=\"\">木工在新建的门上斜着钉一根木条的目的是()</span></p>\n\n<p title=\"\">&nbsp;</p>\n</div>\n'
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
                            value: 'A.600-10',
                            text: 'A.600'
                        },
                        {
                            value: 'B-0',
                            text: 'B.60'
                        },
                        {
                            value: 'C-0',
                            text: 'C.125'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question4',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"4\" title=\"\">\n<p title=\"\"><span style=\"\">每套校服</span>120<span style=\"\">元，买</span>5<span style=\"\">套校服要用()元。</span></p>\n\n<p title=\"\">&nbsp;</p>\n</div>\n'
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
                            value: 'A-10',
                            text: 'A.白'
                        },
                        {
                            value: 'B-0',
                            text: 'B.红'
                        },
                        {
                            value: 'C-0',
                            text: 'C.黄'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question5',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"5\" title=\"\">\n<p title=\"\">盒子里有5个白球,3个红球,3个黄球,摸一次,摸到(<i>&nbsp;</i>)球的可能性大.</p>\n\n<p title=\"\">&nbsp;</p>\n</div>\n'
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
                            text: 'A.30°'
                        },
                        {
                            value: 'B-10',
                            text: 'B.45°'
                        },
                        {
                            value: 'C-0',
                            text: 'C.60°'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question6',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"6\" title=\"\">\n<p title=\"\"><span style=\"\">如图</span><span style=\"\">,</span><span style=\"\">将一张圆形纸对折</span><span style=\"\">3</span><span style=\"\">次</span><span style=\"\">,</span><span style=\"\">得到的角是（）度.</span></p>\n\n<p title=\"\"><img alt=\"www.xkb1.com              新课标第一网不用注册，免费下载！\" height=\"58\" src=\"data:image/jpg;base64,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\" width=\"281\"></p>\n\n<p title=\"\"><span style=\"\">&nbsp;</span></p>\n</div>\n'
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
                            text: 'A.五次测试甲的总成绩比乙的总成绩高'
                        },
                        {
                            value: 'B-10',
                            text: 'B.第三次测试甲的成绩与乙的成绩相同'
                        },
                        {
                            value: 'C-0',
                            text: 'C.第四次甲的成绩比乙的成绩多2分'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question7',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"7\" title=\"\">\n<p title=\"\"><span style=\"\"></span><span style=\"\">甲乙二人参加某体育项目训练，为了便于研究，把最近五次训练成绩分别用实线和虚线连结，如图，下面结论错误的是（）</span></p>\n\n<p title=\"\"><img alt=\"\" height=\"125\" src=\"data:image/png;base64,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\" width=\"136\"></p>\n\n<p title=\"\">&nbsp;</p>\n</div>\n'
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
                            value: 'A-10',
                            text: 'A.扩大到原来的2倍'
                        },
                        {
                            value: 'B-0',
                            text: 'B.扩大到原来的4倍'
                        },
                        {
                            value: 'C-0',
                            text: 'C.缩小到原来的1/2'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question8',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"8\" title=\"\">\n<p class=\"1\" style=\"text-indent:0pt\" title=\"\"><span style=\"\"></span><span style=\"\">一个平行四边形</span><span style=\"\">，</span><span style=\"\">底不变</span><span style=\"\">，</span><span style=\"\">高扩大到原来的</span><span style=\"\">2</span><span style=\"\">倍</span><span style=\"\">，</span><span style=\"\">它的面积</span><span style=\"\">()</span><span style=\"\">.</span></p>\n\n<p title=\"\"><span style=\"\">&nbsp;</span></p>\n</div>\n'
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
                            text: 'A.65×4+4x＝480'
                        },
                        {
                            value: 'B-0',
                            text: 'B.4x＝480－65×4'
                        },
                        {
                            value: 'C-10',
                            text: 'C.65+4x＝480'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question9',
                    title: '<div class=\"my-block my-timu\" my-typetext=\"题\" timuindex=\"9\">\n<p title=\"\"><span style=\"\">甲乙两地间的铁路长</span>480<span style=\"\">千米，客车和货车同时从两地相对开出，经过</span>4<span style=\"\">小时相遇，已知客车每小时行</span>65<span style=\"\">千米，货车每小时行</span><img alt=\"\" height=\"15\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOxAAADsQBAAAAAAAAAIdJREFUKJFjYBhMYCcQ/wPin0B8Ciq2HIh/A/ELQpoPA/EbIGaB8lOBeBIQMxLSWATE/4HYCYgzgXgCsc5VgGq8BsQ9xGqCgftA/JYY5yGDiUB8HGqrOTEaQKZPAeIMINaAauwiRtM0IE5BErsOxLcJaXwKxL+gmkFgLxB/ZUAEEjsxTh4OAADhsx2WoLtsuwAAAABJRU5ErkJggg==\" width=\"14\"><span style=\"\">千米，不正确的方程是（）</span></p>\n\n<p class=\"1\" style=\"text-indent:0pt; line-height:115%; font-size:10.5pt\" title=\"\"><span style=\"\">&nbsp;</span></p>\n</div>\n'
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
                            text: 'A.25%'
                        },
                        {
                            value: 'B-10',
                            text: 'B.6.25%'
                        },
                        {
                            value: 'C-0',
                            text: 'C.8.3%'
                        }
                    ],
                    colCount: 1,
                    isRequired: true,
                    name: 'question10',
                    title: '<div class=\"my-block my-timu my-active\" my-typetext=\"题\" timuindex=\"10\" title=\"\">\n<p class=\"1\" style=\"text-indent:0pt; line-height:115%; font-size:10.5pt\" title=\"\"><span style=\"\"></span><span style=\"\">在一个等边三角形中，先取各边的中点画出一个等边三角形，再取画出的三角形各边中点又画出一个等边三角形，如图，阴影部分的面积是原三角形面积的（）</span></p>\n\n<p style=\"line-height:115%; font-size:10.5pt\" title=\"\"><img alt=\"\" height=\"77\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABNCAYAAADNTMgiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAACX1JREFUeJztnHWoFV0UxZ+KYv5hi93drRioGFioKIqtGIiJigE2gmJiIbYoJnZ3YHd3d3fn/vgdmPtd9cb0zIO3YHhvLjNnzqy95px99t4zMRIHxxHjdQeM4siRI153wTBiFckPHjyQmJgYOXnypNddMYRYRXLbtm0lbdq0UrVqVfn9+7fX3dGNWEMy6s2QIYO8efNGChcuLGvXrvW6S7oRK0hGtah31qxZan/btm2SJ08e+fbtm8c904dYQfK6deukUKFC8uPHj8BvtWvXlilTpnjYK/3wPcmoFdVu3br1j98vXLigxufXr1971DP98D3JqBXVhkKXLl2kb9++LvfIOHxNMipNly6dUm0oPH36VFKnTi03b950uWfG4GuS+/XrJ507d454zOjRo6Vp06Yu9cgcfEsy6kSlT548iXjc58+fJUuWLHLgwAGXemYcviUZdaJSPVi8eLGULVtWfv365XCvzMGXJB88eFCp89OnT7qOh9zSpUvL0qVLHe6ZOfiOZAhDlYsWLTJ03v79+yVr1qxq+PAbfEcyaixVqpSpR79x48YyZswYB3plDb4i+cuXL5ItWzalSjO4fv26miyfPXtmc8+swVckjx07Vho1amSpjd69e0u3bt1s6pE98A3JqA8VokYrePXqlaRJk0YuXbpkU8+swzckoz5UaAcmTZokdevWtaUtO+ALki9fvqzUhwrtAEGlXLlyyY4dO2xpzyp8QXK9evVk4sSJtra5atUqKVKkiPz8+dPWds3Ac5J37typVPf161db2yXQX6lSJZk7d66t7ZqBpySjsqJFiyrVOYHjx49LxowZ5cOHD460rxeekjxv3jylNieToi1btpRhw4Y51r4eeEYy6kJlx44dc/Q69+7dk1SpUqlyAq/gGcmoC5W5gcGDB0u7du1cuVYoeELyw4cPlbru3r3ryvXevXunyglOnz7tyvX+hickt2/fXgYNGuTqNWfOnCnVqlXzpCjGdZJRU/r06ZW63ATlBAULFpT169e7el3gKsmoCDWhKi+wZcsWyZs3r3z//t3V67pK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\" width=\"89\"></p>\n\n<p title=\"\">&nbsp;</p>\n\n<p title=\"\">&nbsp;</p>\n</div>\n'
                }
            ],
            name: 'page10'
        }
    ]
};
export default SurveyQuestion;